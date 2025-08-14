# ---- Builder Stage ----
# This stage installs all dependencies into a virtual environment.
FROM python:3.12-slim as builder

WORKDIR /app

# Install uv, the fast package installer
RUN pip install uv

# Copy only the requirements files to leverage Docker cache
COPY requirements.txt requirements.txt

# Install production dependencies into a virtual environment
RUN uv venv .venv && . .venv/bin/activate && uv pip install --no-cache-dir -r requirements.txt


# ---- Final Stage ----
# This stage creates the final, lean image.
FROM python:3.12-slim

WORKDIR /app

# Create a non-root user to run the application
RUN useradd --create-home --shell /bin/bash appuser
USER appuser

# Copy the virtual environment from the builder stage
COPY --from=builder /app/.venv ./.venv

# Set the PATH to include the venv
ENV PATH="/app/.venv/bin:$PATH"

# Copy the application code
COPY --chown=appuser:appuser ./app ./app

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
# Use --host 0.0.0.0 to make it accessible from outside the container
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

# Healthcheck to make sure the container is running correctly
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:8000/healthz || exit 1
