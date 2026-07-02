# Quickstart: Result Consolidation Validation

## Prerequisites

- Node.js `>=22.12.0`
- Project dependencies installed with `npm install`
- Work from the repository root

## 1. Build validation

Run:

```bash
npm run build
```

Expected outcome:
- the Astro build completes without route or content collection errors
- all public routes still generate successfully

## 2. Local route validation

Start the Astro dev server in background mode:

```bash
astro dev --background
astro dev status
```

Expected outcome:
- the dev server reports a running background session

When validation is complete:

```bash
astro dev stop
```

## 3. Representative public checks

Review these routes in the browser:
- `/`
- `/produit/fonctionnalites`
- `/ressources/blog`
- `/ressources/blog/categories/leadership-et-engagement`
- `/ressources/blog/motivation/autodetermination`

Expected outcome:
- each route renders non-empty public content
- header, footer, parent-category links, and CTA links remain coherent
- the Motivation article still links back to its category page

## 4. Ownership audit

Run:

```bash
find src/pages -type f | sort
find src/content -type f | sort
rg "heroHtml|bodyHtml|getStaticPage" src/pages src/data
rg "readFileSync|src/pages/ressources/blog/motivation|articleEntries" src
```

Expected outcome:
- consolidated areas of `src/pages/` contain route files rather than Markdown
  content sources
- Motivation Markdown entries live under `src/content/blog/motivation/`
- page-body HTML blob ownership in `src/data/site-pages.ts` is removed from the
  final route path
- the final Motivation article flow no longer depends on Markdown files inside
  `src/pages/`

## 5. Documentation audit

Confirm the implementation matches:
- [`data-model.md`](./data-model.md)
- [`contracts/astro-content-ownership.md`](./contracts/astro-content-ownership.md)

Expected outcome:
- each representative surface has one clear authoritative owner
- transitional paths are either deleted or visibly non-authoritative

## Notes

- No dedicated agent-context update script exists in `.specify/scripts/bash/`
  for this repository state, so there is no extra post-plan automation step to
  run here.
- Final authoritative public owners after consolidation:
  - static routes live in `src/pages/**/*.astro`
  - Motivation article entries live in `src/content/blog/motivation/*.md`
