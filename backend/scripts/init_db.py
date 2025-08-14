#!/usr/bin/env python3
"""Database initialization script."""

import sys
from pathlib import Path

# Add the parent directory to the Python path
sys.path.insert(0, str(Path(__file__).parent.parent))

from app.core.database import init_db
from app.core.logging import StructuredLogger, setup_logging


def main():
    """Initialize the database with sample data."""
    setup_logging()
    logger = StructuredLogger("init_db")

    try:
        logger.info("Starting database initialization...")
        init_db()
        logger.info("Database initialized successfully!")
    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
