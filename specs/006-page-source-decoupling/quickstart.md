# Quickstart: Validate page source decoupling

## Goal

Verify that non-article public pages are now owned directly by Astro route
files, that shared shell content no longer depends on Markdown files under
`src/content/editorial/`, and that Markdown remains only for the dynamic
Motivation article pages.

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
- Static output includes all explicit public page routes and the 8 Motivation
  article routes.
- No build failure references removed Markdown page or layout sources.

## 2. Development Validation

Run the Astro dev server in background mode:

```bash
astro dev --background
astro dev status
```

Expected outcome:

- The server starts successfully.
- No startup error references `src/content/editorial/home/`,
  `src/content/editorial/pages/`, `src/content/editorial/layout/`, or
  `src/content/editorial/structure/`.

## 3. Explicit Route Ownership Check

Run:

```bash
test ! -f 'src/pages/[...slug].astro'
rg --files src/pages | sort
```

Expected outcome:

- The editorial catch-all route file no longer exists.
- The output lists explicit route files for the homepage, marketing pages, blog
  listing/category pages, and the dynamic article route.

## 4. Representative Route Checks

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
- Static pages render from explicit Astro routes with complete hero and body
  content.
- The dynamic article route renders as an article page backed by the retained
  article collection.

## 5. Shared Shell Checks

Review:

- Header top-level navigation
- Footer columns and contact links
- Sidebar quick actions and contact links

Expected outcome:

- Shared shell content remains intact.
- Internal links navigate to valid public pages.
- Shared shell rendering does not require Markdown layout or structure files.

## 6. Runtime Source Audit

Run:

```bash
rg -n "editorial-pages|source-map|src/content/editorial/(home|pages|layout|structure)" src/pages src/layouts src/components src/data src/content.config.ts
rg --files src/content | sort
```

Expected outcome:

- No runtime page or shared-shell file depends on the retired non-article
  editorial Markdown sources.
- The remaining files under `src/content/` are limited to the retained dynamic
  article collection.

## 7. Article Collection Check

Run:

```bash
rg -n "getCollection|astro:content" src/pages src/layouts src/data src/content.config.ts
```

Expected outcome:

- Content collection usage is focused on dynamic article handling.
- Non-article page routes do not rely on a collection-backed page registry.

## Related Artifacts

- [plan.md](./plan.md)
- [research.md](./research.md)
- [data-model.md](./data-model.md)
- [contracts/page-source-contract.md](./contracts/page-source-contract.md)

## Latest Validation Snapshot

- Date: 2026-07-02
- `npm run build`: PASS
- `astro dev status`: PASS, server reported running at `http://localhost:4321`
- `test ! -f 'src/pages/[...slug].astro'`: PASS
- `rg --files src/pages | sort`: PASS, explicit route inventory present
- `rg -n "editorial-pages|source-map|src/content/editorial/(home|pages|layout|structure)" ...`: PASS with no matches
- `rg --files src/content | sort`: PASS, only `src/content/blog/motivation/*.md` remain
- `rg -n "getCollection|astro:content" src/pages src/layouts src/data src/content.config.ts`: PASS, content collection usage is limited to the focused article setup

## Manual Review Notes

- Representative content was verified from the built files under `dist/` for
  `/`, `/produit/fonctionnalites`, `/ressources/blog`,
  `/ressources/blog/categories/leadership-et-engagement`,
  `/ressources/blog/motivation/theorie-x-y`, `/tarifs`, `/contact`, and
  `/legal`.
- The sandbox could not establish an HTTP connection to `localhost:4321`, so
  live browser-style route fetching was not used for this validation pass.
