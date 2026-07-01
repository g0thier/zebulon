# Quickstart: Validate edito src consolidation

## Goal

Verify that the migrated Astro site reads all public editorial content from
`src/`, preserves public routes, and supports dynamic Motivation article pages
without relying on `edito/`.

## Prerequisites

- Node version compatible with `package.json` (`>=22.12.0`)
- Dependencies installed
- Implementation for this feature completed

## 1. Build Validation

Run:

```bash
npm run build
```

Expected outcome:

- The Astro build succeeds.
- No build step tries to read missing files from `edito/`.
- Static output includes page routes and Motivation article routes.

## 2. Development Validation

Run the Astro dev server in background mode:

```bash
astro dev --background
astro dev status
```

Expected outcome:

- The server starts successfully.
- No startup error references `edito/`.

## 3. Representative Route Checks

Open and review these routes:

- `/`
- `/produit/fonctionnalites`
- `/ressources/blog`
- `/ressources/blog/categories/leadership-et-engagement`
- `/ressources/blog/motivation/theorie-x-y`
- `/tarifs`
- `/contact`
- `/legal`

Expected outcome:

- Each route renders without 404.
- Titles, intros, blocks, and CTA content remain present.
- Header, footer, and sidebar content are intact.
- The Motivation article route renders as a proper article page, not as a blank
  or fallback page.

## 4. Navigation And Layout Checks

Review:

- Header top-level navigation
- Footer columns and contact links
- Sidebar quick actions and contact links

Expected outcome:

- Shared layout content matches the migrated source in `src/`.
- Internal links navigate to valid public pages.
- No layout section disappears because of missing legacy source files.

## 5. Runtime Reference Audit

Run:

```bash
rg -n "edito/" src
```

Expected outcome:

- No runtime app file in `src/` depends on `edito/`.
- Any remaining `edito/` mentions are limited to historical specs or migration
  notes outside the runtime app surface.

## 6. Deletion Readiness Check

After the route and audit checks pass, verify that deleting `edito/` does not
change the build result or route availability.

Expected outcome:

- The site still builds and runs from `src/` only.
- No public route or shared navigation area regresses after the legacy folder
  is removed.

## Related Artifacts

- [plan.md](./plan.md)
- [research.md](./research.md)
- [data-model.md](./data-model.md)
- [contracts/content-routing-contract.md](./contracts/content-routing-contract.md)
