"""Portfolio API endpoints."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.portfolio_service import PortfolioService

router = APIRouter()


@router.get("/profile")
async def get_profile(db: Session = Depends(get_db)) -> dict[str, object]:
    """Get profile information."""
    portfolio_service = PortfolioService(db)
    profile = portfolio_service.get_profile()

    if not profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Profile not found"
        )

    return {
        "name": profile.name,
        "title": profile.title,
        "summary": profile.summary,
        "location": profile.location,
        "availability": profile.availability,
        "contact": {
            "email": profile.email,
            "linkedin": profile.linkedin_url,
            "github": profile.github_url,
        },
    }


@router.get("/experience")
async def get_experience(db: Session = Depends(get_db)) -> dict[str, object]:
    """Get experience information."""
    portfolio_service = PortfolioService(db)
    experiences = portfolio_service.get_experiences()

    experience_list = []
    for exp in experiences:
        # Get technologies for this experience
        technologies = [tech.technology for tech in exp.technologies]

        # Get achievements for this experience
        achievements = [achievement.achievement for achievement in exp.achievements]

        # Format duration
        if exp.is_current:
            duration = f"{exp.start_date.strftime('%b %Y')}–Present"
        elif exp.end_date:
            duration = (
                f"{exp.start_date.strftime('%b %Y')}–{exp.end_date.strftime('%b %Y')}"
            )
        else:
            duration = f"{exp.start_date.strftime('%b %Y')}–Present"

        experience_list.append(
            {
                "company": exp.company,
                "position": exp.position,
                "duration": duration,
                "description": exp.description,
                "technologies": technologies,
                "achievements": achievements,
            }
        )

    return {"experience": experience_list}


@router.get("/projects")
async def get_projects(db: Session = Depends(get_db)) -> dict[str, object]:
    """Get projects information."""
    portfolio_service = PortfolioService(db)
    projects = portfolio_service.get_projects(featured_only=True)

    projects_list = []
    for proj in projects:
        # Get technologies for this project
        technologies = [tech.technology for tech in proj.technologies]

        projects_list.append(
            {
                "title": proj.title,
                "company": proj.company,
                "description": proj.description,
                "technologies": technologies,
                "impact": proj.impact,
                "type": proj.project_type.value,
            }
        )

    return {"projects": projects_list}


@router.get("/skills")
async def get_skills(db: Session = Depends(get_db)) -> dict[str, list[str]]:
    """Get skills information."""
    portfolio_service = PortfolioService(db)
    skills_by_category: dict[str, list[str]] = (
        portfolio_service.get_skills_by_category()
    )
    return skills_by_category
