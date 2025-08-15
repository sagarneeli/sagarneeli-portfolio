"""Portfolio service for database operations."""

import re
from datetime import datetime
from typing import cast

from sqlalchemy.orm import Session

from app.models.portfolio import (
    Experience,
    ExperienceAchievement,
    ExperienceTechnology,
    Profile,
    Project,
    ProjectTechnology,
    ProjectType,
    Skill,
    SkillCategory,
)


class PortfolioService:
    """Service for portfolio data operations."""

    def __init__(self, db: Session):
        self.db = db

    def get_profile(self) -> Profile | None:
        """Get the active profile."""
        # Use explicit boolean filter for readability
        return self.db.query(Profile).filter(Profile.is_active.is_(True)).first()

    def get_experiences(self) -> list[Experience]:
        """Get all experiences ordered by start date."""
        return self.db.query(Experience).order_by(Experience.start_date.desc()).all()

    def get_projects(self, featured_only: bool = False) -> list[Project]:
        """Get projects, optionally filtered by featured status."""
        query = self.db.query(Project)
        if featured_only:
            query = query.filter(Project.is_featured.is_(True))
        return query.order_by(Project.created_at.desc()).all()

    def get_skills_by_category(self) -> dict[str, list[str]]:
        """Get skills grouped by category."""
        categories = (
            self.db.query(SkillCategory).order_by(SkillCategory.display_order).all()
        )
        result: dict[str, list[str]] = {}

        for category in categories:
            skills = self.db.query(Skill).filter(Skill.category_id == category.id).all()
            names: list[str] = []
            for s in skills:
                names.append(cast(str, s.name))
            # Normalize key: lowercase, replace non-alphanumerics with underscores, collapse repeats
            key = re.sub(r"[^a-z0-9]+", "_", category.name.lower()).strip("_")
            result[key] = names

        return result

    def initialize_sample_data(self) -> None:
        """Initialize database with sample portfolio data."""
        # Check if data already exists
        if self.db.query(Profile).first():
            return

        # Create skill categories
        categories = {
            "Backend & Cloud": SkillCategory(
                name="Backend & Cloud",
                description="Backend technologies and cloud platforms",
                display_order=1,
            ),
            "AI/ML & GenAI": SkillCategory(
                name="AI/ML & GenAI",
                description="Artificial Intelligence and Machine Learning",
                display_order=2,
            ),
            "Specialties": SkillCategory(
                name="Specialties",
                description="Specialized technologies and domains",
                display_order=3,
            ),
            "Data Engineering": SkillCategory(
                name="Data Engineering",
                description="Data processing and analytics",
                display_order=4,
            ),
        }

        for category in categories.values():
            self.db.add(category)
        self.db.commit()

        # Create skills
        skills_data = {
            "Backend & Cloud": [
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
            "AI/ML & GenAI": [
                "Hugging Face",
                "LangChain",
                "OpenAI API",
                "RAG pipelines",
                "Vector databases (Pinecone, Weaviate, FAISS)",
                "Embedding search",
                "LLM fine-tuning",
                "Prompt engineering",
            ],
            "Specialties": ["Ceph", "Block Storage", "Network Security"],
            "Data Engineering": ["dbt", "Snowflake", "Hive", "Spark"],
        }

        for category_name, skill_names in skills_data.items():
            category = categories[category_name]
            for skill_name in skill_names:
                skill = Skill(
                    name=skill_name,
                    category_id=category.id,
                    proficiency_level=8,
                    years_experience=3,
                )
                self.db.add(skill)

        # Create profile
        profile = Profile(
            name="Sagar Neeli",
            title="Senior Backend & AI Engineer",
            summary="Building scalable, intelligent systems with ~10 years of experience in backend engineering, distributed architectures, cloud engineering, and cutting-edge AI/ML solutions.",
            location="United States",
            availability="Open to opportunities",
            email="sagarneeli1191@gmail.com",
            linkedin_url="https://linkedin.com/in/sagarneeli",
            github_url="https://github.com/sagarneeli",
            is_active=True,
        )
        self.db.add(profile)
        self.db.commit()

        # Create experiences
        experiences_data = [
            {
                "company": "Akamai Technologies",
                "position": "Senior Software Engineer",
                "description": "Storage Engineering",
                "start_date": datetime(2025, 7, 1),
                "end_date": None,
                "is_current": True,
                "technologies": ["Python", "Ceph", "Block Storage"],
                "achievements": [
                    "Implementing ML-driven monitoring for block storage services",
                    "Anomaly detection in storage systems",
                ],
            },
            {
                "company": "CVS Health",
                "position": "Senior Software Engineer",
                "description": "Enterprise Data ML Team",
                "start_date": datetime(2025, 3, 1),
                "end_date": datetime(2025, 7, 1),
                "is_current": False,
                "technologies": ["Python", "ML", "Healthcare Data"],
                "achievements": [
                    "AI-assisted prior authorization workflows",
                    "Healthcare data processing",
                ],
            },
            {
                "company": "HubSpot",
                "position": "Senior Software Engineer",
                "description": "Architected CMS with microservices",
                "start_date": datetime(2023, 1, 1),
                "end_date": datetime(2025, 2, 1),
                "is_current": False,
                "technologies": ["Python", "Microservices", "CMS", "Scalability"],
                "achievements": [
                    "50% onboarding time reduction",
                    "30+ languages, 95% adoption",
                    "+20% engagement through CRM APIs",
                ],
            },
            {
                "company": "Jetty",
                "position": "Senior Software Engineer, Technical Lead",
                "description": "Partner integrations syncing 500k+ records via event-driven AWS",
                "start_date": datetime(2021, 3, 1),
                "end_date": datetime(2023, 1, 1),
                "is_current": False,
                "technologies": [
                    "AWS SQS",
                    "Python CDK",
                    "Event-driven",
                    "Synchronization",
                ],
                "achievements": [
                    "500k+ records synced via event-driven AWS",
                    "Predictive analysis dashboards",
                ],
            },
            {
                "company": "Wayfair",
                "position": "Senior Software Engineer, Technical Lead",
                "description": "Real-time ad-serving pipeline",
                "start_date": datetime(2016, 2, 1),
                "end_date": datetime(2021, 2, 1),
                "is_current": False,
                "technologies": ["Real-time", "Ad-serving", "Performance"],
                "achievements": [
                    "+60% performance improvement",
                    "Automated supplier reporting",
                ],
            },
        ]

        for exp_data in experiences_data:
            experience = Experience(
                company=exp_data["company"],
                position=exp_data["position"],
                description=exp_data["description"],
                start_date=exp_data["start_date"],
                end_date=exp_data["end_date"],
                is_current=exp_data["is_current"],
                profile_id=profile.id,
            )
            self.db.add(experience)
            self.db.flush()  # Get the ID

            # Add technologies
            for tech in cast(list[str], exp_data["technologies"]):
                tech_obj = ExperienceTechnology(
                    technology=tech, experience_id=experience.id
                )
                self.db.add(tech_obj)

            # Add achievements
            for achievement in cast(list[str], exp_data["achievements"]):
                achievement_obj = ExperienceAchievement(
                    achievement=achievement, experience_id=experience.id
                )
                self.db.add(achievement_obj)

        # Create projects
        projects_data = [
            {
                "title": "Next-Gen CMS Platform",
                "company": "HubSpot",
                "description": "Unified 5+ content types; scalable microservices",
                "impact": "50% onboarding time reduction",
                "project_type": ProjectType.BACKEND,
                "is_featured": True,
                "technologies": ["Python", "Microservices", "CMS", "Scalability"],
            },
            {
                "title": "AI Translation at Scale",
                "company": "HubSpot",
                "description": "DeepL + automation for 30+ languages, 95% adoption",
                "impact": "95% adoption rate",
                "project_type": ProjectType.AI,
                "is_featured": True,
                "technologies": ["AI", "DeepL", "Automation", "Multi-language"],
            },
            {
                "title": "Event-Driven Messaging System",
                "company": "Jetty",
                "description": "SQS + Python CDK for vendor synchronization",
                "impact": "90% faster vendor sync",
                "project_type": ProjectType.BACKEND,
                "is_featured": True,
                "technologies": [
                    "AWS SQS",
                    "Python CDK",
                    "Event-driven",
                    "Synchronization",
                ],
            },
            {
                "title": "GenAI-Powered Content Personalization",
                "company": "HubSpot",
                "description": "CRM API + LLM for dynamic marketing copy",
                "impact": "Dynamic content generation",
                "project_type": ProjectType.AI,
                "is_featured": True,
                "technologies": ["GenAI", "LLM", "CRM", "Personalization"],
            },
            {
                "title": "Partner Onboarding Automation",
                "company": "Jetty",
                "description": "Flask + React/GraphQL, 70% manual work reduction",
                "impact": "70% manual work reduction",
                "project_type": ProjectType.FULLSTACK,
                "is_featured": True,
                "technologies": ["Flask", "React", "GraphQL", "Automation"],
            },
        ]

        for proj_data in projects_data:
            project = Project(
                title=proj_data["title"],
                company=proj_data["company"],
                description=proj_data["description"],
                impact=proj_data["impact"],
                project_type=proj_data["project_type"],
                is_featured=proj_data["is_featured"],
                profile_id=profile.id,
            )
            self.db.add(project)
            self.db.flush()  # Get the ID

            # Add technologies
            for tech in cast(list[str], proj_data["technologies"]):
                proj_tech = ProjectTechnology(technology=tech, project_id=project.id)
                self.db.add(proj_tech)

        self.db.commit()
