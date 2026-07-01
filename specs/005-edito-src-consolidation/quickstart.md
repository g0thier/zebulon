# Quickstart: Validate edito src consolidation

## Goal

Verify that the migrated Astro site reads all public editorial content from
`src/content/editorial/`, preserves public routes, and supports dynamic
Motivation article pages without relying on a separate legacy editorial folder.

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
- No build step tries to read from a removed legacy editorial folder.
- Static output includes page routes and Motivation article routes.

## 2. Development Validation

Run the Astro dev server in background mode:

```bash
astro dev --background
astro dev status
```

Expected outcome:

- The server starts successfully.
- No startup error references a removed legacy editorial source.

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
rg -n "legacySourcePath|currentToLegacy|legacyContentRoot|legacySourceToCurrent" src
```

Expected outcome:

- No runtime app file in `src/` depends on legacy alias helpers or an external
  editorial source.

## 6. Deletion Readiness Check

After the route and audit checks pass, verify that deleting the former legacy
editorial folder does not change the build result or route availability.

Expected outcome:

- The site still builds and runs from `src/` only.
- No public route or shared navigation area regresses after the legacy folder
  is removed.

## Related Artifacts

- [plan.md](./plan.md)
- [research.md](./research.md)
- [data-model.md](./data-model.md)
- [contracts/content-routing-contract.md](./contracts/content-routing-contract.md)
