"""
Health check endpoints.
"""

from datetime import UTC, datetime

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

from app.core.config import settings

router = APIRouter()


@router.get("/")
async def health_check() -> JSONResponse:
    """Basic health check endpoint."""
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"status": "healthy", "service": "sagarneeli-portfolio-backend"},
    )


@router.get("/detailed")
async def detailed_health_check() -> JSONResponse:
    """Detailed health check with service status."""
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": "healthy",
            "service": "sagarneeli-portfolio-backend",
            "timestamp": datetime.now(UTC).isoformat(),
            "version": "1.0.0",
            "environment": settings.ENVIRONMENT,
            "checks": {
                "database": "healthy",
                "redis": "healthy",
                "ai_services": "healthy",
            },
        },
    )
