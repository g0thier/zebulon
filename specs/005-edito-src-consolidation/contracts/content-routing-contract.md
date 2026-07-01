# Contract: Content And Routing

## Purpose

Define the externally visible behavior the migrated site must preserve once
`edito/` has been absorbed into `src/`.

## 1. Public Route Contract

The site must continue to generate the following route classes:

- Homepage: `/`
- Generic content pages: existing slugs currently produced from the editorial
  page source set, including product, use-case, pricing, resources, clients,
  about, support, contact, and legal pages
- Blog category pages: existing slugs under `/ressources/blog/categories/*`
- Blog article pages: `/ressources/blog/motivation/[slug]`

### Requirements

- Every existing page slug keeps the same public URL after migration.
- Every Motivation article slug resolves to a concrete static route.
- No route depends on reading a file from `edito/` at runtime.

## 2. Editorial Page Contract

For each migrated editorial page:

- `title`, `subtitle`, `intro`, and `status` must remain available to the page
  renderer.
- Block order must remain stable.
- CTA links, related links, and visuals must remain renderable.
- Internal editorial links must resolve to valid public URLs after migration.

### Expected Consumers

- `src/pages/index.astro`
- `src/pages/[...slug].astro`
- Shared layout and content components

## 3. Blog Article Contract

For each Motivation article:

- The article has a stable `slug`.
- The article renders with its own layout and ordered content sections.
- The article remains linked from its parent category page.
- The article CTA, when present, remains visible and actionable.

### Expected Consumer

- `src/pages/ressources/blog/motivation/[slug].astro`

## 4. Layout Data Contract

The following shared layout records must exist in migrated form:

- `header`
- `footer`
- `sidebar`
- `site-structure`

### Requirements

- Header navigation retains its current top-level sections and destinations.
- Footer columns retain their current destinations and contact information.
- Sidebar keeps the current quick actions and useful contacts unless changed by
  a separate feature.
- Shared layout components read from migrated `src/` data, not from `edito/`.

## 5. Validation Contract

The implementation is considered compliant only if all of the following are
true:

- `npm run build` succeeds.
- Representative page routes and Motivation article routes render without 404s.
- Header, footer, and sidebar links remain valid.
- An audit of runtime app code in `src/` finds no remaining dependency on
  `edito/`.

## Non-Goals

- Redesigning visual style beyond what is required to support the migration
- Rewriting public editorial copy for marketing or messaging reasons
- Introducing a remote CMS or non-Astro content system
