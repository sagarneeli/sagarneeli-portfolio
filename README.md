# Sagar Neeli - Portfolio Website

This repository contains the source code for Sagar Neeli's portfolio website, built with Next.js, FastAPI, and Docker.

## Documentation

All project documentation is located in the `/docs` directory.

- [**Architecture](./docs/ARCHITECTURE.md): High-level overview of the services, infrastructure, and CI/CD pipelines.
- [**Contributing](./docs/CONTRIBUTING.md): Guidelines for branching, commits, and pull requests.
- [**Security](./docs/SECURITY.md): Information on reporting vulnerabilities and our security practices.

## Getting Started

For local development and setup instructions, please refer to the README files within each service directory:

- [**`frontend/README.md`**](./frontend/README.md)
- [**`backend/README.md`**](./backend/README.md)

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/) (for the frontend) and a container service like [Render](https://render.com/) or [Fly.io](https://fly.io/) (for the backend).

### Frontend (Vercel)

When deploying the `frontend` application to Vercel, you must configure the project settings correctly for the monorepo structure.

**Key Vercel Settings:**

- **Framework Preset:** `Next.js`
- **Root Directory:** `frontend`
- **Build & Development Settings:** Should be detected automatically from the Next.js framework preset. The `vercel.json` file in this repository also helps guide the build process.
- **Node.js Version:** `22.x` (This is also specified in `frontend/package.json` under the `engines` field).

Setting the **Root Directory** to `frontend` is the most important step. This tells Vercel where to find the `package.json` and `next.config.ts` for the frontend application.
