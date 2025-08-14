"""
Logging configuration for the application.
"""

import logging
import sys
from typing import Any

from app.core.config import settings


def setup_logging() -> None:
    """Setup application logging configuration."""

    # Create formatter
    formatter = logging.Formatter(
        fmt="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    # Create console handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)

    # Set log level based on environment
    log_level = logging.DEBUG if settings.DEBUG else logging.INFO

    # Configure root logger
    root_logger = logging.getLogger()
    root_logger.setLevel(log_level)
    root_logger.addHandler(console_handler)

    # Configure application logger
    app_logger = logging.getLogger("app")
    app_logger.setLevel(log_level)

    # Set specific loggers to WARNING to reduce noise
    logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
    logging.getLogger("uvicorn.error").setLevel(logging.WARNING)
    logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)
    logging.getLogger("httpx").setLevel(logging.WARNING)
    logging.getLogger("openai").setLevel(logging.WARNING)


def get_logger(name: str) -> logging.Logger:
    """Get a logger instance for the given name."""
    return logging.getLogger(f"app.{name}")


class StructuredLogger:
    """Structured logger for JSON logging in production."""

    def __init__(self, name: str):
        self.logger = logging.getLogger(f"app.{name}")

    def info(self, message: str, **kwargs: Any) -> None:
        """Log info message with structured data."""
        if settings.is_production:
            self.logger.info(message, extra=kwargs)
        else:
            self.logger.info(f"{message} {kwargs}")

    def error(self, message: str, **kwargs: Any) -> None:
        """Log error message with structured data."""
        if settings.is_production:
            self.logger.error(message, extra=kwargs)
        else:
            self.logger.error(f"{message} {kwargs}")

    def warning(self, message: str, **kwargs: Any) -> None:
        """Log warning message with structured data."""
        if settings.is_production:
            self.logger.warning(message, extra=kwargs)
        else:
            self.logger.warning(f"{message} {kwargs}")

    def debug(self, message: str, **kwargs: Any) -> None:
        """Log debug message with structured data."""
        if settings.is_production:
            self.logger.debug(message, extra=kwargs)
        else:
            self.logger.debug(f"{message} {kwargs}")
