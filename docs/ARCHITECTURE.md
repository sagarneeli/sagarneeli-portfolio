# Architecture

This document provides a high-level overview of the technical architecture for this project.

## Monorepo Structure

The repository is a monorepo containing the following top-level directories:

- `/frontend`: The Next.js frontend application.
- `/backend`: The FastAPI backend application.
- `/content`: Static JSON content for the site.
- `/docs`: Project documentation.
- `/.github`: GitHub Actions workflows and configuration.

## Tech Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) (with TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)

### Backend

- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Containerization**: [Docker](https://www.docker.com/)
- **Deployment**: Render / Fly.io / AWS ECS

## CI/CD

Continuous integration and deployment are managed via [GitHub Actions](./.github/workflows). The pipeline includes steps for linting, testing, building, and deploying the applications.

- **Frontend**: Deployed to Vercel Previews on PRs to `dev` and to Production on merges to `main`.
- **Backend**: Docker images are built and pushed to a container registry. Deployments are triggered for `dev` and `main` branches.
