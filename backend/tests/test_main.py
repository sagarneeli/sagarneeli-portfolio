from fastapi.testclient import TestClient
from starlette import status

from app.main import app

# It's good practice to create the client once at the module level
# if the app is simple and doesn't need per-test configuration.
client = TestClient(app)


def test_health_check() -> None:
    """
    Tests that the /healthz endpoint returns a 200 OK response.
    """
    response = client.get("/healthz")
    assert response.status_code == status.HTTP_200_OK
    assert response.json() == {"status": "ok"}
