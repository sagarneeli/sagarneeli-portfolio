# Sagar Neeli Portfolio

A modern, high-performance portfolio website showcasing Sagar Neeli's expertise as a Senior Backend & AI Engineer with ~10 years of experience in backend systems, distributed architectures, cloud engineering, and cutting-edge AI/ML solutions.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, FastAPI, Python 3.11
- **Database-Driven**: PostgreSQL with SQLAlchemy ORM and Alembic migrations
- **AI-Inspired Design**: Custom neural network motifs and animations
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Mode**: Theme switching with system preference detection
- **AI Integration**: OpenAI, LangChain, vector databases ready
- **Performance Optimized**: Lighthouse-ready with optimized bundle size
- **Comprehensive Testing**: Unit, integration, and E2E tests
- **CI/CD Pipeline**: Automated testing and deployment
- **Security**: CORS, rate limiting, security headers
- **Monitoring**: Health checks, structured logging, error tracking

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom AI-inspired design tokens
- **Animations**: Framer Motion
- **UI Components**: Radix UI + custom components
- **Testing**: Jest, Testing Library, Playwright
- **Theme**: Dark/light mode with system detection

### Backend
- **Framework**: FastAPI with async/await
- **Language**: Python 3.11
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Migrations**: Alembic for database schema management
- **Cache**: Redis for session and data caching
- **AI/ML**: OpenAI, LangChain, vector databases ready
- **Testing**: pytest, pytest-cov, pytest-asyncio
- **Quality**: ruff, mypy, black, pre-commit
- **Monitoring**: Sentry, OpenTelemetry, health checks

### DevOps
- **Containerization**: Docker with multi-stage builds
- **CI/CD**: GitHub Actions with comprehensive testing
- **Security**: Trivy vulnerability scanning
- **Code Quality**: Pre-commit hooks, conventional commits

## 📦 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- Git

### Option 1: Docker Compose (Recommended)
```bash
# Clone the repository
git clone https://github.com/sagarneeli/sagarneeli-portfolio.git
cd sagarneeli-portfolio

# Start all services
docker-compose up -d

# Initialize database (first time only)
docker-compose exec backend python scripts/init_db.py

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
# Database: localhost:5432 (postgres/postgres)
```

### Option 2: Individual Services
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (in another terminal)
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Set up database
export DATABASE_URL="postgresql://postgres:postgres@localhost:5432/portfolio"
export SECRET_KEY="your-secret-key"
python scripts/init_db.py
uvicorn app.main:app --reload
```

## 🗄️ Database Setup

### Database Schema
The application uses PostgreSQL with the following main tables:

- **profiles**: Personal information and contact details
- **experiences**: Work history and professional experience
- **projects**: Portfolio projects with technologies and impact
- **skills**: Technical skills organized by categories
- **skill_categories**: Categories for organizing skills

### Database Management

#### Initialize Database
```bash
# Using Docker Compose
docker-compose exec backend python scripts/init_db.py

# Or manually
cd backend
python scripts/init_db.py
```

#### Run Migrations
```bash
# Create a new migration
cd backend
alembic revision --autogenerate -m "Description of changes"

# Apply migrations
alembic upgrade head

# Rollback migrations
alembic downgrade -1
```

#### Database Reset
```bash
# Drop and recreate database
docker-compose down -v
docker-compose up -d postgres
docker-compose exec backend python scripts/init_db.py
```

### Sample Data
The database is automatically populated with sample portfolio data including:
- Profile information for Sagar Neeli
- 5 professional experiences with technologies and achievements
- 5 featured projects with impact metrics
- 4 skill categories with 25+ technical skills

## 🧪 Testing

### Frontend Testing

#### Unit Tests
```bash
cd frontend
npm run test              # Run tests in watch mode
npm run test:ci          # Run tests for CI
npm run test:coverage    # Run tests with coverage report
```

#### E2E Tests
```bash
cd frontend
npm run test:e2e         # Run E2E tests
npm run test:e2e:ui      # Run E2E tests with UI
npm run test:e2e:headed  # Run E2E tests in headed mode
npm run test:e2e:debug   # Run E2E tests in debug mode
```

#### All Tests
```bash
cd frontend
npm run test:all         # Run unit tests + E2E tests
```

### Backend Testing

#### Unit & Integration Tests
```bash
cd backend
# Run all tests
pytest

# Run with coverage
pytest --cov=app --cov-report=html

# Run specific test categories
pytest -m unit           # Unit tests only
pytest -m integration    # Integration tests only
pytest -m api            # API tests only

# Run with verbose output
pytest -v

# Run tests in parallel
pytest -n auto
```

#### Test Coverage
```bash
cd backend
# Generate coverage report
pytest --cov=app --cov-report=html --cov-report=term-missing

# Coverage threshold (fails if below 80%)
pytest --cov=app --cov-fail-under=80
```

#### Database Tests
```bash
cd backend
# Run tests with database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/test_db" pytest

# Run tests with in-memory SQLite (faster)
ENVIRONMENT=test pytest
```

### Test Structure

#### Frontend Tests
```
frontend/
├── src/
│   ├── components/__tests__/     # Component unit tests
│   ├── lib/__tests__/           # Utility function tests
│   └── app/__tests__/           # Page integration tests
├── e2e/                         # End-to-end tests
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup
└── playwright.config.ts        # Playwright configuration
```

#### Backend Tests
```
backend/
├── tests/
│   ├── conftest.py             # Pytest fixtures
│   ├── test_main.py            # Main app tests
│   ├── test_api_endpoints.py   # API endpoint tests
│   └── test_config.py          # Configuration tests
├── pytest.ini                 # Pytest configuration
└── requirements.txt           # Includes testing dependencies
```

## 🔧 Development

### Code Quality

#### Frontend
```bash
cd frontend
npm run lint              # ESLint
npm run type-check        # TypeScript type checking
npm run format            # Prettier formatting
npm run format:check      # Check formatting
```

#### Backend
```bash
cd backend
ruff check .              # Linting
ruff format .             # Formatting
mypy app/                 # Type checking
black .                   # Code formatting
```

### Pre-commit Hooks
```bash
# Install pre-commit hooks
pre-commit install

# Run manually
pre-commit run --all-files
```

### Conventional Commits
This project uses conventional commits. Use the following format:
```
type(scope): description

feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Deploy to Vercel
vercel --prod
```

### Backend (Docker)
```bash
# Build production image
docker build -f backend/Dockerfile -t sagarneeli-portfolio-backend:latest ./backend

# Run in production
docker run -d \
  -p 8000:8000 \
  -e ENVIRONMENT=production \
  -e DATABASE_URL=your-db-url \
  -e SECRET_KEY=your-secret-key \
  sagarneeli-portfolio-backend:latest
```

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Backend (.env)
```env
ENVIRONMENT=production
DEBUG=false
DATABASE_URL=postgresql://user:pass@localhost/db
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key
OPENAI_API_KEY=your-openai-key
HUGGINGFACE_API_KEY=your-huggingface-key
SENTRY_DSN=your-sentry-dsn
```

## 📊 Performance Goals

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: < 200KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Security

- **CORS**: Configured for specific origins
- **Rate Limiting**: Per-minute and per-hour limits
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Input Validation**: Pydantic models for all API endpoints
- **Vulnerability Scanning**: Trivy integration in CI/CD
- **Secret Management**: Environment variables with validation

## 📈 Monitoring

- **Health Checks**: `/healthz` and `/readyz` endpoints
- **Structured Logging**: JSON format in production
- **Error Tracking**: Sentry integration
- **Metrics**: OpenTelemetry for observability
- **Performance**: Core Web Vitals monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm run test:all` and `pytest`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: sagarneeli1191@gmail.com
- **LinkedIn**: [linkedin.com/in/sagarneeli](https://linkedin.com/in/sagarneeli)
- **GitHub**: [github.com/sagarneeli](https://github.com/sagarneeli)

---

Built with ❤️ by Sagar Neeli
