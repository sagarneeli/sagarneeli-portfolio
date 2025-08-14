from fastapi import FastAPI

app = FastAPI(
    title="Sagar Neeli's Portfolio API",
    description="Backend services for the portfolio website.",
    version="0.1.0",
)


@app.get("/healthz")
def health_check() -> dict[str, str]:
    """
    Health check endpoint to verify the API is running.
    """
    return {"status": "ok"}
