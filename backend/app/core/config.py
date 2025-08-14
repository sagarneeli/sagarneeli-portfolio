"""
Application configuration settings using Pydantic Settings.
"""

import json
from typing import List
from pydantic import Field, validator
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings."""

    # Environment
    ENVIRONMENT: str = Field(default="development", env="ENVIRONMENT")
    DEBUG: bool = Field(default=True, env="DEBUG")

    # Database
    DATABASE_URL: str = Field(env="DATABASE_URL")
    REDIS_URL: str = Field(default="redis://localhost:6379", env="REDIS_URL")

    # Security
    SECRET_KEY: str = Field(env="SECRET_KEY")
    ALGORITHM: str = Field(default="HS256", env="ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(
        default=30, env="ACCESS_TOKEN_EXPIRE_MINUTES"
    )

    # AI/ML Services
    OPENAI_API_KEY: str = Field(default="", env="OPENAI_API_KEY")
    HUGGINGFACE_API_KEY: str = Field(default="", env="HUGGINGFACE_API_KEY")
    QDRANT_URL: str = Field(default="http://localhost:6333", env="QDRANT_URL")

    # External Services
    GITHUB_API_TOKEN: str = Field(default="", env="GITHUB_API_TOKEN")
    LINKEDIN_API_KEY: str = Field(default="", env="LINKEDIN_API_KEY")

    # Monitoring
    SENTRY_DSN: str = Field(default="", env="SENTRY_DSN")
    SENTRY_ENVIRONMENT: str = Field(default="development", env="SENTRY_ENVIRONMENT")

    # Feature Flags
    ENABLE_AI_FEATURES: bool = Field(default=True, env="ENABLE_AI_FEATURES")
    ENABLE_ANALYTICS: bool = Field(default=False, env="ENABLE_ANALYTICS")
    ENABLE_BLOG: bool = Field(default=True, env="ENABLE_BLOG")

    # CORS
    ALLOWED_ORIGINS: List[str] = Field(
        default=["http://localhost:3000"], env="ALLOWED_ORIGINS"
    )

    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = Field(default=60, env="RATE_LIMIT_PER_MINUTE")
    RATE_LIMIT_PER_HOUR: int = Field(default=1000, env="RATE_LIMIT_PER_HOUR")

    @validator("ALLOWED_ORIGINS", pre=True)
    def parse_allowed_origins(cls, v):
        """Parse ALLOWED_ORIGINS from string to list."""
        if isinstance(v, str):
            try:
                return json.loads(v)
            except json.JSONDecodeError:
                return [v]
        return v

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
