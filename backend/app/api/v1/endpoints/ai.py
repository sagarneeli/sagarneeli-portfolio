"""AI-related endpoints for the portfolio."""

from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from app.core.config import settings

router = APIRouter()


class ChatRequest(BaseModel):
    """Request model for AI chat."""

    message: str
    context: str | None = None


class ChatResponse(BaseModel):
    """Response model for AI chat."""

    response: str
    context: str | None = None


@router.get("/status")
async def ai_status() -> JSONResponse:
    """Check AI services status."""
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": "available" if settings.ENABLE_AI_FEATURES else "disabled",
            "services": {
                "openai": "available" if settings.OPENAI_API_KEY else "not_configured",
                "huggingface": "available"
                if settings.HUGGINGFACE_API_KEY
                else "not_configured",
                "qdrant": "available",
            },
        },
    )


@router.post("/chat", response_model=ChatResponse)
async def ai_chat(request: ChatRequest) -> ChatResponse:
    """AI-powered chat endpoint for portfolio interactions."""
    if not settings.ENABLE_AI_FEATURES:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="AI features are currently disabled",
        )

    # Mock AI response for now - would integrate with OpenAI/LangChain
    context_note = f" Context: {request.context}" if request.context else ""
    response = (
        "I'm Sagar Neeli's AI assistant. I can help you learn more about my "
        f"backend engineering and AI/ML expertise. You asked: {request.message}."
        f"{context_note}"
    )
    return ChatResponse(
        response=response,
        context="portfolio_assistant" if request.context else None,
    )


@router.get("/recommendations")
async def get_ai_recommendations() -> JSONResponse:
    """Get AI-generated project recommendations based on visitor profile."""
    if not settings.ENABLE_AI_FEATURES:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="AI features are currently disabled",
        )
    recommendations = [
        {
            "type": "project",
            "title": "Real-time ML Pipeline",
            "description": "Based on your interest in real-time systems, you might like this project showcasing real-time ML inference pipelines.",
            "confidence": 0.85,
        },
        {
            "type": "skill",
            "title": "Vector Databases",
            "description": "Given your AI/ML background, exploring vector databases like Pinecone or Weaviate could be valuable.",
            "confidence": 0.92,
        },
        {
            "type": "technology",
            "title": "LangChain",
            "description": "Your experience with AI systems suggests LangChain would be a great addition to your toolkit.",
            "confidence": 0.78,
        },
    ]

    return JSONResponse(
        status_code=status.HTTP_200_OK, content={"recommendations": recommendations}
    )


class SearchRequest(BaseModel):
    query: str


@router.post("/search")
async def ai_search(request: SearchRequest) -> JSONResponse:
    """AI-powered search through portfolio content."""
    if not settings.ENABLE_AI_FEATURES:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="AI features are currently disabled",
        )
    # Mock search results - would integrate with vector database
    search_results = [
        {
            "type": "experience",
            "title": "HubSpot - AI Translation",
            "content": "Integrated AI translation at scale with 95% adoption rate",
            "relevance": 0.95,
        },
        {
            "type": "project",
            "title": "Event-Driven Messaging System",
            "content": "SQS + Python CDK implementation for vendor synchronization",
            "relevance": 0.87,
        },
        {
            "type": "skill",
            "title": "Backend Engineering",
            "content": "Python, Java, Go, AWS, GCP, Docker, Kubernetes",
            "relevance": 0.82,
        },
    ]

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"query": request.query, "results": search_results},
    )
