import os
from unittest.mock import patch

import pytest

from app.core.config import Settings


class TestSettings:
    """Test the Settings configuration class."""

    def test_default_settings(self):
        """Test default settings values."""
        with patch.dict(os.environ, {}, clear=True):
            settings = Settings()

            assert settings.ENVIRONMENT == "development"
            assert settings.DEBUG is True
            assert settings.ALGORITHM == "HS256"
            assert settings.ACCESS_TOKEN_EXPIRE_MINUTES == 30
            assert settings.REDIS_URL == "redis://localhost:6379"
            assert settings.QDRANT_URL == "http://localhost:6333"
            assert settings.ENABLE_AI_FEATURES is True
            assert settings.ENABLE_ANALYTICS is False
            assert settings.ENABLE_BLOG is True
            assert settings.RATE_LIMIT_PER_MINUTE == 60
            assert settings.RATE_LIMIT_PER_HOUR == 1000

    def test_environment_variable_override(self):
        """Test that environment variables override defaults."""
        test_env = {
            "ENVIRONMENT": "production",
            "DEBUG": "false",
            "SECRET_KEY": "test-secret-key",
            "DATABASE_URL": "postgresql://test:test@localhost/test",
            "OPENAI_API_KEY": "test-openai-key",
            "ALLOWED_ORIGINS": "http://localhost:3000,https://sagarneeli.com",
            "ENABLE_AI_FEATURES": "false",
            "RATE_LIMIT_PER_MINUTE": "30",
        }

        with patch.dict(os.environ, test_env, clear=True):
            settings = Settings()

            assert settings.ENVIRONMENT == "production"
            assert settings.DEBUG is False
            assert settings.SECRET_KEY == "test-secret-key"
            assert settings.DATABASE_URL == "postgresql://test:test@localhost/test"
            assert settings.OPENAI_API_KEY == "test-openai-key"
            assert settings.ENABLE_AI_FEATURES is False
            assert settings.RATE_LIMIT_PER_MINUTE == 30

    def test_allowed_origins_parsing(self):
        """Test ALLOWED_ORIGINS parsing from environment."""
        # Test single origin
        with patch.dict(
            os.environ, {"ALLOWED_ORIGINS": "http://localhost:3000"}, clear=True
        ):
            settings = Settings()
            assert settings.ALLOWED_ORIGINS == ["http://localhost:3000"]

        # Test multiple origins
        with patch.dict(
            os.environ,
            {"ALLOWED_ORIGINS": "http://localhost:3000,https://sagarneeli.com"},
            clear=True,
        ):
            settings = Settings()
            assert settings.ALLOWED_ORIGINS == [
                "http://localhost:3000",
                "https://sagarneeli.com",
            ]

        # Test with spaces
        with patch.dict(
            os.environ,
            {"ALLOWED_ORIGINS": "http://localhost:3000, https://sagarneeli.com"},
            clear=True,
        ):
            settings = Settings()
            assert settings.ALLOWED_ORIGINS == [
                "http://localhost:3000",
                "https://sagarneeli.com",
            ]

    def test_production_property(self):
        """Test is_production property."""
        with patch.dict(os.environ, {"ENVIRONMENT": "production"}, clear=True):
            settings = Settings()
            assert settings.is_production is True

        with patch.dict(os.environ, {"ENVIRONMENT": "development"}, clear=True):
            settings = Settings()
            assert settings.is_production is False

    def test_development_property(self):
        """Test is_development property."""
        with patch.dict(os.environ, {"ENVIRONMENT": "development"}, clear=True):
            settings = Settings()
            assert settings.is_development is True

        with patch.dict(os.environ, {"ENVIRONMENT": "production"}, clear=True):
            settings = Settings()
            assert settings.is_development is False

    def test_required_fields(self):
        """Test that required fields raise validation errors when missing."""
        # In production, critical settings must be provided
        with patch.dict(os.environ, {"ENVIRONMENT": "production"}, clear=True):
            with pytest.raises(ValueError):
                Settings()

    def test_optional_fields_with_defaults(self):
        """Test that optional fields have proper defaults."""
        # Set required fields
        required_env = {
            "SECRET_KEY": "test-secret-key",
            "DATABASE_URL": "sqlite:///./test.db",
        }

        with patch.dict(os.environ, required_env, clear=True):
            settings = Settings()

            # Test optional fields have defaults
            assert settings.OPENAI_API_KEY == ""
            assert settings.HUGGINGFACE_API_KEY == ""
            assert settings.GITHUB_API_TOKEN == ""
            assert settings.LINKEDIN_API_KEY == ""
            assert settings.SENTRY_DSN == ""
            assert settings.SENTRY_ENVIRONMENT == "development"

    def test_boolean_field_parsing(self):
        """Test boolean field parsing from environment."""
        required_env = {
            "SECRET_KEY": "test-secret-key",
            "DATABASE_URL": "sqlite:///./test.db",
        }

        # Test true values
        true_env = {
            **required_env,
            "DEBUG": "true",
            "ENABLE_AI_FEATURES": "true",
            "ENABLE_ANALYTICS": "true",
            "ENABLE_BLOG": "true",
        }

        with patch.dict(os.environ, true_env, clear=True):
            settings = Settings()
            assert settings.DEBUG is True
            assert settings.ENABLE_AI_FEATURES is True
            assert settings.ENABLE_ANALYTICS is True
            assert settings.ENABLE_BLOG is True

        # Test false values
        false_env = {
            **required_env,
            "DEBUG": "false",
            "ENABLE_AI_FEATURES": "false",
            "ENABLE_ANALYTICS": "false",
            "ENABLE_BLOG": "false",
        }

        with patch.dict(os.environ, false_env, clear=True):
            settings = Settings()
            assert settings.DEBUG is False
            assert settings.ENABLE_AI_FEATURES is False
            assert settings.ENABLE_ANALYTICS is False
            assert settings.ENABLE_BLOG is False

    def test_integer_field_parsing(self):
        """Test integer field parsing from environment."""
        required_env = {
            "SECRET_KEY": "test-secret-key",
            "DATABASE_URL": "sqlite:///./test.db",
        }

        int_env = {
            **required_env,
            "ACCESS_TOKEN_EXPIRE_MINUTES": "60",
            "RATE_LIMIT_PER_MINUTE": "100",
            "RATE_LIMIT_PER_HOUR": "2000",
        }

        with patch.dict(os.environ, int_env, clear=True):
            settings = Settings()
            assert settings.ACCESS_TOKEN_EXPIRE_MINUTES == 60
            assert settings.RATE_LIMIT_PER_MINUTE == 100
            assert settings.RATE_LIMIT_PER_HOUR == 2000
