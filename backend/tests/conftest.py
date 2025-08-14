import pytest
from fastapi.testclient import TestClient
from unittest.mock import Mock, patch
import os
import tempfile

from app.main import app
from app.core.config import settings


@pytest.fixture
def client():
    """Create a test client for the FastAPI application."""
    return TestClient(app)


@pytest.fixture
def mock_settings():
    """Mock settings for testing."""
    with patch("app.core.config.settings") as mock:
        mock.ENVIRONMENT = "test"
        mock.DEBUG = True
        mock.DATABASE_URL = "sqlite:///./test.db"
        mock.REDIS_URL = "redis://localhost:6379"
        mock.SECRET_KEY = "test-secret-key"
        mock.OPENAI_API_KEY = "test-openai-key"
        mock.HUGGINGFACE_API_KEY = "test-huggingface-key"
        mock.ALLOWED_ORIGINS = ["http://localhost:3000"]
        mock.ENABLE_AI_FEATURES = True
        yield mock


@pytest.fixture
def temp_env():
    """Temporary environment variables for testing."""
    original_env = os.environ.copy()

    # Set test environment variables
    test_env = {
        "ENVIRONMENT": "test",
        "DEBUG": "true",
        "DATABASE_URL": "sqlite:///./test.db",
        "REDIS_URL": "redis://localhost:6379",
        "SECRET_KEY": "test-secret-key-for-testing-only",
        "OPENAI_API_KEY": "test-openai-key",
        "HUGGINGFACE_API_KEY": "test-huggingface-key",
        "ALLOWED_ORIGINS": "http://localhost:3000",
        "ENABLE_AI_FEATURES": "true",
    }

    os.environ.update(test_env)

    yield test_env

    # Restore original environment
    os.environ.clear()
    os.environ.update(original_env)


@pytest.fixture
def mock_logger():
    """Mock logger for testing."""
    with patch("app.core.logging.logger") as mock:
        yield mock


@pytest.fixture
def mock_sentry():
    """Mock Sentry for testing."""
    with patch("sentry_sdk.init") as mock:
        yield mock


@pytest.fixture
def sample_portfolio_data():
    """Sample portfolio data for testing."""
    return {
        "name": "Sagar Neeli",
        "title": "Senior Backend & AI Engineer",
        "summary": "Building scalable, intelligent systems with ~10 years of experience",
        "location": "United States",
        "availability": "Open to opportunities",
        "contact": {
            "email": "sagarneeli1191@gmail.com",
            "linkedin": "https://linkedin.com/in/sagarneeli",
            "github": "https://github.com/sagarneeli",
        },
    }


@pytest.fixture
def sample_experience_data():
    """Sample experience data for testing."""
    return [
        {
            "company": "Akamai Technologies",
            "position": "Senior Software Engineer",
            "duration": "Jul 2025–Present",
            "description": "Storage Engineering",
            "technologies": ["Python", "Ceph", "Block Storage"],
            "achievements": [
                "Implementing ML-driven monitoring for block storage services",
                "Anomaly detection in storage systems",
            ],
        }
    ]


@pytest.fixture
def sample_projects_data():
    """Sample projects data for testing."""
    return [
        {
            "title": "Next-Gen CMS Platform",
            "company": "HubSpot",
            "description": "Unified 5+ content types; scalable microservices",
            "technologies": ["Python", "Microservices", "CMS", "Scalability"],
            "impact": "50% onboarding time reduction",
            "type": "backend",
        }
    ]


@pytest.fixture
def sample_skills_data():
    """Sample skills data for testing."""
    return {
        "backend_cloud": [
            "Python",
            "Java",
            "Go",
            "AWS",
            "GCP",
            "Docker",
            "Kubernetes",
            "Kafka",
            "Redis",
            "Memcached",
            "Elasticsearch",
        ],
        "ai_ml_genai": [
            "Hugging Face",
            "LangChain",
            "OpenAI API",
            "RAG pipelines",
            "Vector databases (Pinecone, Weaviate, FAISS)",
            "Embedding search",
            "LLM fine-tuning",
            "Prompt engineering",
        ],
        "specialties": ["Ceph", "Block Storage", "Network Security"],
        "data_engineering": ["dbt", "Snowflake", "Hive", "Spark"],
    }
