# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure & Module Organization

This is a static Astro 7 site with a Vercel serverless form handler. Page routes live in `src/pages/`; dynamic routes use Astro parameters such as `solutions/[slug].astro` and `locations/[country].astro`. Reusable UI belongs in `src/components/`, shared page chrome in `src/layouts/`, and global styling in `src/styles/global.css`. Keep business content and contact details centralized in `src/data/site.ts`. Static files are served from `public/`, while `api/quote.js` handles quotation submissions. Build output (`dist/`), Astro cache files, dependencies, and local `.env` files are not committed.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies; use Node.js 20 or newer.
- `npm run dev` starts Astro's local development server.
- `npm run check` runs Astro and TypeScript diagnostics (`astro check`).
- `npm run build` runs `astro check` then creates the production site in `dist/`.
- `npm run preview` serves the production build locally for final verification.

Copy `.env.example` to `.env` before local development and populate only the values needed for the feature under test.

There is no test suite. Every change must pass `npm run check` and `npm run build`. Manually verify affected routes with `npm run dev`; for UI work, check responsive layouts, navigation, forms, and accessible labels. Form changes require a real submission test against a configured Vercel/Resend environment without exposing secrets.

## Coding Style & Naming Conventions

Follow the existing two-space indentation and single-quote JavaScript/TypeScript style. Use PascalCase for Astro components and layouts (`BaseLayout.astro`), kebab-case for route files and slugs (`trading-supply.astro`), and camelCase for variables and exported data. Prefer the `@/` alias for imports from `src/`. Keep repeated content data-driven rather than duplicating markup. No standalone formatter or linter is configured, so match adjacent code and rely on `npm run check`.

The codebase is deliberately terse — components are largely written as single-line Astro templates with inline styles rather than broken across many lines. Match this density in existing files rather than reformatting them.

## Architecture

**Data-driven content model.** `src/data/site.ts` is the single source of truth for company info, contact numbers (per-country), services, products, trading categories, industries, and FAQs. Pages and layouts import from here rather than hardcoding content. Country contact details (Kuwait/UAE/India phone, WhatsApp, tel links) are derived from `PUBLIC_*` env vars with hardcoded fallbacks.

**Static generation with dynamic routes.** Two route files use `getStaticPaths()` to fan out pages at build time:
- `src/pages/solutions/[slug].astro` generates one page per entry in the `services` array from `site.ts`.
- `src/pages/locations/[country].astro` generates pages for `ae` and `in` only (Kuwait is the default/home experience, not a `/locations/kw` page).

Adding a service or a location page means editing `site.ts` / the `getStaticPaths` list, not manually creating route files.

**`BaseLayout.astro` is the shell for every page.** It accepts `title`, `description`, and `country` props, builds Organization JSON-LD schema, renders the header/nav/footer/WhatsApp button, and contains all of the site's interactive nav JS (mega-menu open/close, mobile menu toggle, scroll header state, IntersectionObserver reveal animations, country selector that redirects between `/`, `/locations/ae`, `/locations/in`). Changes to global navigation or site chrome happen here, not per-page.

**Quotation form flow.** `contact.astro` renders a form (with a honeypot `website` field) that POSTs JSON to `/api/quote`. `api/quote.js` is a Vercel serverless function: it validates/sanitizes input, rejects honeypot submissions, maps `country` to a per-country recipient env var (`KUWAIT_LEAD_EMAIL`, `UAE_LEAD_EMAIL`, `INDIA_LEAD_EMAIL`, falling back to `CONTACT_TO_EMAIL`), and sends the enquiry via the Resend API using `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`. A successful submission redirects to `/thank-you`. Any change to form fields must be mirrored in both `contact.astro` and `api/quote.js`'s validation.

## Security & Configuration

Never commit `.env` or API keys. Update `.env.example` with placeholder names when adding configuration. Treat phone numbers, addresses, legal claims, certifications, and partner claims as client-approved content only — see the "Client confirmation required" list in README.md before inventing or changing any such content.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects, optionally following Conventional Commits (for example, `fix: validate quote recipient`). Keep commits focused. Pull requests should explain the change and verification performed, link relevant issues, and include before/after screenshots for visual changes. Call out environment-variable or deployment changes explicitly.
