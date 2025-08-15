"""Database configuration and session management."""

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.pool import StaticPool

from app.core.config import settings
from app.models import Base

# Create database engine
if settings.ENVIRONMENT == "test" or not settings.DATABASE_URL:
    # Use in-memory SQLite for testing
    engine = create_engine(
        "sqlite:///:memory:",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
else:
    # Use configured database URL for development/production
    engine = create_engine(
        settings.DATABASE_URL,
        pool_pre_ping=True,
        pool_recycle=300,
    )

# Create session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def create_tables() -> None:
    """Create all database tables."""
    Base.metadata.create_all(bind=engine)


def get_db() -> Generator[Session]:
    """Get database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db() -> None:
    """Initialize database with sample data."""
    from app.services.portfolio_service import PortfolioService

    db = SessionLocal()
    try:
        # Create tables
        create_tables()

        # Initialize sample data
        portfolio_service = PortfolioService(db)
        portfolio_service.initialize_sample_data()

    finally:
        db.close()


# Ensure tables and sample data exist during tests or when no DB is configured
if settings.ENVIRONMENT == "test" or not settings.DATABASE_URL:
    try:
        init_db()
    except Exception:
        # Avoid import-time crashes; tests will surface issues if any
        pass
