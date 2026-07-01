# Contract: Page Source And Routing

## Purpose

Define the externally visible behavior and ownership rules the site must obey
after non-article pages stop depending on Markdown files under
`src/content/editorial/`.

## 1. Public Route Ownership Contract

The site must generate these route classes:

- Homepage: `/`
- Explicit marketing and information pages under routes such as `/produit/*`,
  `/cas-d-usage/*`, `/tarifs`, `/support`, `/contact`, `/legal`,
  `/clients/*`, and `/a-propos/*`
- Explicit blog listing and category pages under `/ressources/blog` and
  `/ressources/blog/categories/*`
- Dynamic blog article pages under `/ressources/blog/motivation/[slug]`

### Requirements

- Every non-article public route must be owned by a concrete Astro file under
  `src/pages/`.
- No non-article public route may rely on the generic editorial catch-all model.
- Every preserved public slug keeps the same URL after the cutover.

## 2. Shared Shell Contract

The following shared UI surfaces must remain available without reading Markdown
layout or structure files:

- Header navigation
- Footer columns and contact information
- Sidebar quick actions and utility links

### Requirements

- Shared shell content must come from app-native typed sources.
- Shared shell consumers must not depend on Markdown source paths.
- Header, footer, and sidebar destinations remain valid public routes or valid
  external URLs.

## 3. Blog Article Contract

Markdown remains allowed only for dynamic Motivation article pages.

### Requirements

- Each article has a stable `slug`.
- Each article renders through `src/pages/ressources/blog/motivation/[slug].astro`.
- Each article remains linked from the relevant explicit listing or category
  page.
- Article Markdown must be consumed through a focused article collection, not
  through the retired generic editorial page parser.

## 4. Runtime Dependency Contract

The runtime app code that owns public pages and shared shell content must not:

- Import a generic page registry derived from `src/content/editorial/`
- Depend on `src/content/editorial/home/`, `src/content/editorial/pages/`,
  `src/content/editorial/layout/`, or `src/content/editorial/structure/`
  as route-authority sources
- Require a site-wide slug-to-Markdown mapping layer for non-article pages

### Allowed Exception

- Focused article content loading for dynamic blog article pages remains allowed
  through the dedicated article collection.

## 5. Validation Contract

The implementation is compliant only if all of the following are true:

- `npm run build` succeeds.
- Representative explicit pages render without 404s or empty content.
- Representative category/listing pages render and still link to valid article
  routes.
- Dynamic article routes render from the retained article collection.
- A runtime source audit confirms that only the dynamic article path remains
  Markdown-backed.

## Non-Goals

- Rewriting public marketing copy except where required by the storage cutover
- Introducing a remote CMS or new third-party content runtime
- Preserving the generic page parsing layer for compatibility once explicit
  Astro route ownership exists
