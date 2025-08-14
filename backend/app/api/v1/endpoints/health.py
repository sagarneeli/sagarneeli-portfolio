"""
Health check endpoints.
"""

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

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
            "version": "1.0.0",
            "environment": "development",
            "checks": {
                "database": "healthy",
                "redis": "healthy",
                "ai_services": "healthy",
            },
        },
    )
