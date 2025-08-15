"""
Application configuration settings using Pydantic Settings.
"""

import json
from typing import Any

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings."""

    # Environment
    ENVIRONMENT: str = Field(default="development")
    DEBUG: bool = Field(default=True)

    # Database
    DATABASE_URL: str = Field(default="")
    REDIS_URL: str = Field(default="redis://localhost:6379")

    # Security
    SECRET_KEY: str = Field(default="")
    ALGORITHM: str = Field(default="HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(default=30)

    # AI/ML Services
    OPENAI_API_KEY: str = Field(default="")
    HUGGINGFACE_API_KEY: str = Field(default="")
    QDRANT_URL: str = Field(default="http://localhost:6333")

    # External Services
    GITHUB_API_TOKEN: str = Field(default="")
    LINKEDIN_API_KEY: str = Field(default="")

    # Monitoring
    SENTRY_DSN: str = Field(default="")
    SENTRY_ENVIRONMENT: str = Field(default="development")

    # Feature Flags
    ENABLE_AI_FEATURES: bool = Field(default=True)
    ENABLE_ANALYTICS: bool = Field(default=False)
    ENABLE_BLOG: bool = Field(default=True)

    # CORS
    # Accept string or list from env, normalize to list[str]
    ALLOWED_ORIGINS: list[str] | str = Field(default=["http://localhost:3000"])

    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = Field(default=60)
    RATE_LIMIT_PER_HOUR: int = Field(default=1000)

    @field_validator("ALLOWED_ORIGINS", mode="before")
    @classmethod
    def parse_allowed_origins(cls, v: Any) -> list[str]:
        """Parse ALLOWED_ORIGINS from string to list."""
        if isinstance(v, str):
            try:
                parsed = json.loads(v)
                return parsed if isinstance(parsed, list) else [v]
            except json.JSONDecodeError:
                # Support comma-separated values as a convenience
                if "," in v:
                    return [item.strip() for item in v.split(",") if item.strip()]
                return [v]
        if isinstance(v, list):
            return [str(item) for item in v]
        # Fallback: wrap non-empty value, else default empty list
        return [str(v)] if v else []

    @property
    def is_production(self) -> bool:
        """Check if running in production."""
        return self.ENVIRONMENT == "production"

    @property
    def is_development(self) -> bool:
        """Check if running in development."""
        return self.ENVIRONMENT == "development"

    class Config:
        env_file = ".env"
        case_sensitive = True


# Create settings instance
settings = Settings()
