# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro 7 site with a Vercel serverless form handler. Page routes live in `src/pages/`; dynamic routes use Astro parameters such as `solutions/[slug].astro` and `locations/[country].astro`. Reusable UI belongs in `src/components/`, shared page chrome in `src/layouts/`, and global styling in `src/styles/global.css`. Keep business content and contact details centralized in `src/data/site.ts`. Static files are served from `public/`, while `api/quote.js` handles quotation submissions. Build output (`dist/`), Astro cache files, dependencies, and local `.env` files are not committed.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies; use Node.js 20 or newer.
- `npm run dev` starts Astro's local development server.
- `npm run check` runs Astro and TypeScript diagnostics.
- `npm run build` checks the project and creates the production site in `dist/`.
- `npm run preview` serves the production build locally for final verification.

Copy `.env.example` to `.env` before local development and populate only the values needed for the feature under test.

## Coding Style & Naming Conventions

Follow the existing two-space indentation and single-quote JavaScript/TypeScript style. Use PascalCase for Astro components and layouts (`BaseLayout.astro`), kebab-case for route files and slugs (`trading-supply.astro`), and camelCase for variables and exported data. Prefer the `@/` alias for imports from `src/`. Keep repeated content data-driven rather than duplicating markup. No standalone formatter or linter is configured, so match adjacent code and rely on `npm run check`.

## Testing Guidelines

There is currently no automated test suite or coverage threshold. Every change must pass `npm run check` and `npm run build`. Manually verify affected routes with `npm run dev`; for UI work, check responsive layouts, navigation, forms, and accessible labels. Form changes require a real submission test against a configured Vercel/Resend environment without exposing secrets.

## Commit & Pull Request Guidelines

Git history is unavailable in this checkout. Use short, imperative commit subjects, optionally following Conventional Commits (for example, `fix: validate quote recipient`). Keep commits focused. Pull requests should explain the change and verification performed, link relevant issues, and include before/after screenshots for visual changes. Call out environment-variable or deployment changes explicitly.

## Security & Configuration

Never commit `.env` or API keys. Update `.env.example` with placeholder names when adding configuration. Treat phone numbers, addresses, legal claims, certifications, and partner claims as client-approved content only.
