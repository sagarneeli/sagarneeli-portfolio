"""Main FastAPI application."""

import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse
from app.core.config import settings
from app.core.logging import setup_logging, StructuredLogger
from app.api.v1.api import api_router
from app.core.database import init_db
from app.models import Base
from typing import Any

# Setup logging
setup_logging()
logger = StructuredLogger("main")

# Import models to ensure they are registered with SQLAlchemy
from app.models.portfolio import Profile, Experience, Project, Skill, SkillCategory


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan manager."""
    # Startup
    logger.info("Starting up Sagar Neeli Portfolio Backend...")

    # Initialize services
    if settings.ENVIRONMENT == "production":
        import sentry_sdk

        sentry_sdk.init(
            dsn=settings.SENTRY_DSN,
            environment=settings.SENTRY_ENVIRONMENT,
            traces_sample_rate=0.1,
        )

    # Initialize database
    try:
        init_db()
        logger.info("Database initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
        raise

    yield

    # Shutdown
    logger.info("Shutting down Sagar Neeli Portfolio Backend...")


def create_app() -> FastAPI:
    """Create and configure the FastAPI application."""
    app = FastAPI(
        title="Sagar Neeli Portfolio API",
        description="Backend API for Sagar Neeli's portfolio website",
        version="1.0.0",
        docs_url="/docs" if settings.DEBUG else None,
        redoc_url="/redoc" if settings.DEBUG else None,
        lifespan=lifespan,
    )

    # Add middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    if settings.ENVIRONMENT == "production":
        app.add_middleware(
            TrustedHostMiddleware,
            allowed_hosts=["sagarneeli.com", "api.sagarneeli.com"],
        )

    # Include API routes
    app.include_router(api_router, prefix="/api/v1")

    # Health check endpoint
    @app.get("/healthz", tags=["Health"])
    async def health_check() -> dict[str, str]:
        """Health check endpoint for load balancers."""
        return {"status": "healthy", "service": "sagarneeli-portfolio-backend"}

    @app.get("/readyz", tags=["Health"])
    async def readiness_check() -> dict[str, str]:
        """Readiness check endpoint for Kubernetes."""
        return {"status": "ready", "service": "sagarneeli-portfolio-backend"}

    # Root endpoint
    @app.get("/", tags=["Root"])
    async def root() -> dict[str, Any]:
        """Root endpoint with basic information."""
        return {
            "name": "Sagar Neeli",
            "title": "Senior Backend & AI Engineer",
            "description": "Building scalable, intelligent systems with ~10 years of experience in backend engineering, distributed architectures, cloud engineering, and cutting-edge AI/ML solutions.",
            "contact": {
                "email": "sagarneeli1191@gmail.com",
                "linkedin": "https://linkedin.com/in/sagarneeli",
                "github": "https://github.com/sagarneeli",
            },
        }

    # Global exception handler
    @app.exception_handler(Exception)
    async def global_exception_handler(
        request: Request, exc: Exception
    ) -> JSONResponse:
        """Global exception handler."""
        logger.error(f"Unhandled exception: {exc}", exc_info=True)
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": "Internal server error"},
        )

    return app


# Create app instance
app = create_app()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG,
        log_level="info" if settings.ENVIRONMENT == "production" else "debug",
    )
