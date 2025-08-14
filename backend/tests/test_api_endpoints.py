import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch


class TestHealthEndpoints:
    """Test health check endpoints."""

    def test_basic_health_check(self, client):
        """Test basic health check endpoint."""
        response = client.get("/api/v1/health")

        assert response.status_code == 200
        data = response.json()

        assert data["status"] == "healthy"
        assert data["service"] == "sagarneeli-portfolio-backend"

    def test_detailed_health_check(self, client):
        """Test detailed health check endpoint."""
        response = client.get("/api/v1/health/detailed")

        assert response.status_code == 200
        data = response.json()

        assert data["status"] == "healthy"
        assert data["service"] == "sagarneeli-portfolio-backend"
        assert "timestamp" in data
        assert "version" in data
        assert "checks" in data
        assert data["checks"]["database"] == "healthy"
        assert data["checks"]["redis"] == "healthy"
        assert data["checks"]["ai_services"] == "healthy"


class TestPortfolioEndpoints:
    """Test portfolio-related endpoints."""

    def test_get_profile(self, client, sample_portfolio_data):
        """Test getting profile information."""
        response = client.get("/api/v1/portfolio/profile")

        assert response.status_code == 200
        data = response.json()

        # Check required fields
        assert "name" in data
        assert "title" in data
        assert "summary" in data
        assert "location" in data
        assert "availability" in data
        assert "contact" in data

        # Check specific values
        assert data["name"] == "Sagar Neeli"
        assert "Backend & AI Engineer" in data["title"]
        assert data["contact"]["email"] == "sagarneeli1191@gmail.com"

    def test_get_experience(self, client, sample_experience_data):
        """Test getting experience information."""
        response = client.get("/api/v1/portfolio/experience")

        assert response.status_code == 200
        data = response.json()

        assert "experience" in data
        experience_list = data["experience"]

        # Check that we have experience entries
        assert len(experience_list) > 0

        # Check structure of first experience entry
        first_experience = experience_list[0]
        assert "company" in first_experience
        assert "position" in first_experience
        assert "duration" in first_experience
        assert "description" in first_experience
        assert "technologies" in first_experience
        assert "achievements" in first_experience

    def test_get_projects(self, client, sample_projects_data):
        """Test getting projects information."""
        response = client.get("/api/v1/portfolio/projects")

        assert response.status_code == 200
        data = response.json()

        assert "projects" in data
        projects_list = data["projects"]

        # Check that we have project entries
        assert len(projects_list) > 0

        # Check structure of first project
        first_project = projects_list[0]
        assert "title" in first_project
        assert "company" in first_project
        assert "description" in first_project
        assert "technologies" in first_project
        assert "impact" in first_project
        assert "type" in first_project

    def test_get_skills(self, client, sample_skills_data):
        """Test getting skills information."""
        response = client.get("/api/v1/portfolio/skills")

        assert response.status_code == 200
        data = response.json()

        # Check skill categories
        assert "backend_cloud" in data
        assert "ai_ml_genai" in data
        assert "specialties" in data
        assert "data_engineering" in data

        # Check that each category has skills
        assert len(data["backend_cloud"]) > 0
        assert len(data["ai_ml_genai"]) > 0
        assert len(data["specialties"]) > 0
        assert len(data["data_engineering"]) > 0


class TestAIEndpoints:
    """Test AI-related endpoints."""

    def test_ai_service_status(self, client):
        """Test AI service status endpoint."""
        response = client.get("/api/v1/ai/status")

        assert response.status_code == 200
        data = response.json()

        assert "status" in data
        assert "services" in data
        assert "openai" in data["services"]
        assert "huggingface" in data["services"]
        assert "qdrant" in data["services"]

    def test_ai_chat_endpoint(self, client):
        """Test AI chat endpoint."""
        chat_data = {
            "message": "Tell me about Sagar's backend experience",
            "context": "portfolio_assistant",
        }

        response = client.post("/api/v1/ai/chat", json=chat_data)

        assert response.status_code == 200
        data = response.json()

        assert "response" in data
        assert "context" in data
        assert "portfolio_assistant" in data["response"]

    def test_ai_chat_without_context(self, client):
        """Test AI chat endpoint without context."""
        chat_data = {"message": "What technologies does Sagar use?"}

        response = client.post("/api/v1/ai/chat", json=chat_data)

        assert response.status_code == 200
        data = response.json()

        assert "response" in data
        assert data["context"] is None

    def test_ai_recommendations(self, client):
        """Test AI recommendations endpoint."""
        response = client.get("/api/v1/ai/recommendations")

        assert response.status_code == 200
        data = response.json()

        assert "recommendations" in data
        recommendations = data["recommendations"]

        # Check that we have recommendations
        assert len(recommendations) > 0

        # Check structure of first recommendation
        first_rec = recommendations[0]
        assert "type" in first_rec
        assert "title" in first_rec
        assert "description" in first_rec
        assert "confidence" in first_rec

    def test_ai_search(self, client):
        """Test AI search endpoint."""
        search_data = {"query": "backend engineering"}

        response = client.post("/api/v1/ai/search", json=search_data)

        assert response.status_code == 200
        data = response.json()

        assert "query" in data
        assert "results" in data
        assert data["query"] == "backend engineering"

        results = data["results"]
        assert len(results) > 0

        # Check structure of first result
        first_result = results[0]
        assert "type" in first_result
        assert "title" in first_result
        assert "content" in first_result
        assert "relevance" in first_result

    @patch("app.api.v1.endpoints.ai.settings")
    def test_ai_features_disabled(self, mock_settings, client):
        """Test AI endpoints when AI features are disabled."""
        mock_settings.ENABLE_AI_FEATURES = False

        # Test chat endpoint
        chat_data = {"message": "test"}
        response = client.post("/api/v1/ai/chat", json=chat_data)
        assert response.status_code == 503

        # Test recommendations endpoint
        response = client.get("/api/v1/ai/recommendations")
        assert response.status_code == 503

        # Test search endpoint
        search_data = {"query": "test"}
        response = client.post("/api/v1/ai/search", json=search_data)
        assert response.status_code == 503


class TestAPIErrorHandling:
    """Test API error handling."""

    def test_invalid_json_request(self, client):
        """Test handling of invalid JSON requests."""
        response = client.post("/api/v1/ai/chat", data="invalid json")
        assert response.status_code == 422

    def test_missing_required_fields(self, client):
        """Test handling of missing required fields."""
        response = client.post("/api/v1/ai/chat", json={})
        assert response.status_code == 422

    def test_nonexistent_endpoint(self, client):
        """Test handling of nonexistent endpoints."""
        response = client.get("/api/v1/nonexistent")
        assert response.status_code == 404
