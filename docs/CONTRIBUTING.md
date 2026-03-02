# Contributing to MCR Educational

## Branch Strategy

- `main` - Production branch (protected)
- `develop` - Integration branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches
- `docs/*` - Documentation branches

## Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add referral form component
fix: correct mobile nav overflow
docs: update API documentation
style: format team page layout
refactor: extract shared card component
test: add e2e tests for contact form
chore: update dependencies
```

## Pull Request Process

1. Create a feature branch from `develop`
2. Make your changes with clear commits
3. Ensure all tests pass (`pnpm test`)
4. Ensure linting passes (`pnpm lint`)
5. Create PR against `develop`
6. Request review from at least one team member
7. Squash and merge after approval

## Code Standards

- TypeScript strict mode enabled
- All components must be accessible (WCAG 2.1 AA)
- Mobile-first responsive design
- No inline styles - use Tailwind utilities
- Meaningful component and variable names
