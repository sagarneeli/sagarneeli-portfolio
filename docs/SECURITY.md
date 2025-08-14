# Security Policy

This document outlines the security procedures and policies for this project.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it to us privately. **Do not** create a public GitHub issue.

Please email the details to `sagarneeli1191@gmail.com`.

We will make every effort to respond to your report within 48 hours.

## Security Practices

- **Dependency Scanning**: We use [Dependabot](https://github.com/dependabot) to automatically scan for and update vulnerable dependencies.
- **Static Analysis**: [CodeQL](https://codeql.github.com/) is run weekly to perform static analysis of the codebase to find potential vulnerabilities.
- **Branch Protections**: The `main` and `dev` branches are protected. They require status checks to pass and do not allow force pushes.
- **Secrets Management**: No secrets are stored in the repository. All secrets are managed through GitHub Actions Secrets and injected into the environment at runtime.
