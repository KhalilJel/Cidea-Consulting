# Cidea Consulting

Cidea Consulting helps businesses understand where AI can create real value and turn the best opportunities into practical solutions.

## Commercial model

Report → Workshop → Implementation → Agent Systems → Ongoing optimization

## Core offers

- AI Opportunity
- AI Opportunity Reports
- AI Business Workshops
- AI Implementation
- AI Agent Systems

## Website

- Primary language Norwegian at `/`, English at `/en`.
- Visual direction: Grove AI-inspired, on deep navy. See [docs/redesign-grove.md](docs/redesign-grove.md).

## Development

```bash
npm ci
npm run dev       # local dev server
npm run build     # client build + SSR build + prerender every route to dist/
npm test          # checks the prerendered build (run after build)
npm run preview   # serve dist/ locally
```

## Structure

- `src/content.js` — all copy in Norwegian and English, services and prices.
- `src/routes.js` — URL ↔ page mapping and language handling.
- `src/seo.js` — titles, descriptions, canonical, hreflang, structured data, sitemap.
- `src/pages/`, `src/components/` — page templates and shared UI.
- `blog/*.md`, `blog/en/*.md` — articles.
- `scripts/prerender.mjs` — writes static HTML per route; `scripts/check-build.mjs` — build checks.

## Technical direction

GitHub-first development. Shared Cidea foundation, distinct brand identity.

No DNS or MX changes are part of this repository.
