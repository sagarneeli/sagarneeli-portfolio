"""Portfolio database models."""

import enum

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Enum,
    ForeignKey,
    Integer,
    String,
    Text,
)
from sqlalchemy.orm import relationship

from .base import BaseModel


class ProjectType(str, enum.Enum):
    """Project type enumeration."""

    BACKEND = "backend"
    AI = "ai"
    FULLSTACK = "fullstack"
    DATA = "data"
    INFRASTRUCTURE = "infrastructure"


class SkillCategory(BaseModel):
    """Skill category model."""

    __tablename__ = "skill_categories"

    name = Column(String(100), unique=True, nullable=False, index=True)
    description = Column(Text, nullable=True)
    display_order = Column(Integer, default=0)

    # Relationships
    skills = relationship("Skill", back_populates="category")

    def __repr__(self) -> str:
        return f"<SkillCategory(name='{self.name}')>"


class Skill(BaseModel):
    """Skill model."""

    __tablename__ = "skills"

    name = Column(String(100), nullable=False, index=True)
    description = Column(Text, nullable=True)
    proficiency_level = Column(Integer, default=5)  # 1-10 scale
    years_experience = Column(Integer, default=0)
    category_id = Column(Integer, ForeignKey("skill_categories.id"), nullable=False)

    # Relationships
    category = relationship("SkillCategory", back_populates="skills")

    def __repr__(self) -> str:
        return f"<Skill(name='{self.name}', category='{self.category.name}')>"


class Profile(BaseModel):
    """Profile model for personal information."""

    __tablename__ = "profiles"

    name = Column(String(200), nullable=False)
    title = Column(String(200), nullable=False)
    summary = Column(Text, nullable=False)
    location = Column(String(100), nullable=True)
    availability = Column(String(100), default="Open to opportunities")
    email = Column(String(200), nullable=False, unique=True)
    linkedin_url = Column(String(500), nullable=True)
    github_url = Column(String(500), nullable=True)
    website_url = Column(String(500), nullable=True)
    avatar_url = Column(String(500), nullable=True)
    is_active = Column(Boolean, default=True)

    # Relationships
    experiences = relationship(
        "Experience", back_populates="profile", order_by="Experience.start_date.desc()"
    )
    projects = relationship(
        "Project", back_populates="profile", order_by="Project.created_at.desc()"
    )

    def __repr__(self) -> str:
        return f"<Profile(name='{self.name}', title='{self.title}')>"


class Experience(BaseModel):
    """Experience model for work history."""

    __tablename__ = "experiences"

    company = Column(String(200), nullable=False, index=True)
    position = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=True)  # Null for current position
    location = Column(String(100), nullable=True)
    is_current = Column(Boolean, default=False)
    profile_id = Column(Integer, ForeignKey("profiles.id"), nullable=False)

    # Relationships
    profile = relationship("Profile", back_populates="experiences")
    technologies = relationship("ExperienceTechnology", back_populates="experience")
    achievements = relationship("ExperienceAchievement", back_populates="experience")

    def __repr__(self) -> str:
        return f"<Experience(company='{self.company}', position='{self.position}')>"


class ExperienceTechnology(BaseModel):
    """Experience technology model for technologies used in each role."""

    __tablename__ = "experience_technologies"

    technology = Column(String(100), nullable=False)
    experience_id = Column(Integer, ForeignKey("experiences.id"), nullable=False)

    # Relationships
    experience = relationship("Experience", back_populates="technologies")

    def __repr__(self) -> str:
        return f"<ExperienceTechnology(technology='{self.technology}')>"


class ExperienceAchievement(BaseModel):
    """Experience achievement model for accomplishments in each role."""

    __tablename__ = "experience_achievements"

    achievement = Column(Text, nullable=False)
    experience_id = Column(Integer, ForeignKey("experiences.id"), nullable=False)

    # Relationships
    experience = relationship("Experience", back_populates="achievements")

    def __repr__(self) -> str:
        return f"<ExperienceAchievement(achievement='{self.achievement[:50]}...')>"


class Project(BaseModel):
    """Project model for portfolio projects."""

    __tablename__ = "projects"

    title = Column(String(200), nullable=False, index=True)
    company = Column(String(200), nullable=True)
    description = Column(Text, nullable=False)
    impact = Column(Text, nullable=True)
    project_type: ProjectType = Column(Enum(ProjectType), nullable=False)  # type: ignore[assignment]
    github_url = Column(String(500), nullable=True)
    live_url = Column(String(500), nullable=True)
    image_url = Column(String(500), nullable=True)
    is_featured = Column(Boolean, default=False)
    profile_id = Column(Integer, ForeignKey("profiles.id"), nullable=False)

    # Relationships
    profile = relationship("Profile", back_populates="projects")
    technologies = relationship("ProjectTechnology", back_populates="project")

    def __repr__(self) -> str:
        return f"<Project(title='{self.title}', type='{self.project_type.value}')>"


class ProjectTechnology(BaseModel):
    """Project technology model for technologies used in each project."""

    __tablename__ = "project_technologies"

    technology = Column(String(100), nullable=False)
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)

    # Relationships
    project = relationship("Project", back_populates="technologies")

    def __repr__(self) -> str:
        return f"<ProjectTechnology(technology='{self.technology}')>"
