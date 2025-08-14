# Contributing

Thank you for your interest in contributing! Please review these guidelines before getting started.

## Branching Strategy

We follow a Git Flow-like branching model:

- `main`: Represents the production-ready state.
- `dev`: The development branch for staging and previews. All feature branches are merged into `dev`.
- `feature/*`: Branches for new features (e.g., `feature/add-contact-form`).

Pull Requests should be opened against the `dev` branch.

## Commit Messages

This repository uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Please follow this specification for your commit messages. A `commitlint` check is in place to enforce this.

Example:
`feat(frontend): add dark mode toggle button`
`fix(backend): correct pagination logic in projects endpoint`
`docs: update architecture diagram`

## Development Setup

Please refer to the `README.md` files in the `/frontend` and `/backend` directories for specific setup instructions.

## Pull Request Checklist

- [ ] All tests pass (`npm test` or `pytest`).
- [ ] All linters pass (`npm run lint` or `ruff check .`).
- [ ] Commit messages follow the Conventional Commits format.
- [ ] Documentation has been updated, if necessary.
