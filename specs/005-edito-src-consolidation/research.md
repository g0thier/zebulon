# Phase 0 Research: Consolidation edito src

## Decision 1: Move the canonical editorial source into `src/content/`

**Decision**: Create a new canonical content home under `src/content/editorial/`
and migrate every public editorial artifact there before deleting `edito/`.

**Rationale**: The current app already renders the public site from `src/`, but
its data layer still reads source files from `edito/`. Keeping the content
inside `src/` eliminates cross-folder coupling, makes the Astro app portable,
and gives contributors one place to maintain routes, content, and layout data.

**Alternatives considered**:

- Keep `edito/` and only wrap it with helper functions. Rejected because it
  preserves the split source-of-truth problem the feature is meant to remove.
- Copy `edito/` into `src/` but keep both folders long term. Rejected because
  it creates two canonical candidates and reintroduces drift risk.

## Decision 2: Use Astro collection-backed loading for the migrated content

**Decision**: Keep a normalization layer, but make it operate on content stored
under `src/` through Astro content collections or local build-time loaders.

**Rationale**: Astro’s content collections support local file-based loading and
schema validation, and custom build-time loaders can normalize local data into
queryable collections. This fits the project’s current custom content format
without requiring a risky all-at-once rewrite of every file into new
frontmatter conventions. Astro’s docs also recommend `getStaticPaths()` for
dynamic static routes and support file-based collections with `glob()` or
custom loaders for local content.

**Alternatives considered**:

- Keep raw `fs` reads in runtime helpers. Rejected because it leaves the site
  coupled to path strings and bypasses Astro’s content model.
- Rewrite every editorial file immediately into a brand-new markdown schema with
  no compatibility layer. Rejected because it combines migration and editorial
  refactoring into one large-risk change.

## Decision 3: Normalize shared layout content as data, not hard-coded links

**Decision**: Treat header, footer, sidebar, and structure content as migrated
data records under `src/content/editorial/layout/` and `src/content/editorial/structure/`,
then have the layout components read from those normalized records.

**Rationale**: The current header/footer/sidebar are partly hard-coded around
`edito` path assumptions. If the content is migrating anyway, shared navigation
should move with it so route labels, hierarchy, and contact links stay aligned
without requiring multiple manual edits.

**Alternatives considered**:

- Freeze layout content into TypeScript constants. Rejected because it would
  make editorial maintenance harder after the migration.
- Keep layout markdown in `edito/` while moving page content only. Rejected
  because the project would still depend on the legacy folder at runtime.

## Decision 4: Add a dedicated dynamic route for Motivation article pages

**Decision**: Keep generic pages in `src/pages/[...slug].astro`, but add
`src/pages/ressources/blog/motivation/[slug].astro` for blog article detail
pages and generate it from article entries via `getStaticPaths()`.

**Rationale**: The current code already creates article slugs like
`/ressources/blog/motivation/theorie-x-y`, but those slugs are not currently
backed by route generation in the catch-all page. Astro’s routing guide states
that static dynamic routes must export `getStaticPaths()` returning params for
every generated route. A dedicated article route is clearer than widening the
catch-all page to handle two different page models.

**Alternatives considered**:

- Extend `src/pages/[...slug].astro` to also serve article pages. Rejected
  because it increases branching in a page that already handles generic
  editorial pages and category-specific behavior.
- Skip article detail pages and keep category-only navigation. Rejected because
  article links already exist in the content model and the requested plan
  explicitly calls for dynamic blog paths.

## Decision 5: Add focused layouts for editorial pages and blog articles

**Decision**: Keep `SiteLayout.astro` as the shell and add
`EditorialPageLayout.astro` plus `BlogArticleLayout.astro` to centralize common
hero, metadata, and body assembly rules.

**Rationale**: The current homepage and catch-all route both perform page
assembly work directly. As the site gains a dedicated blog article route and
shared content source, moving this repeated structure into layouts reduces page
branching and makes the migration easier to validate.

**Alternatives considered**:

- Leave all composition logic directly inside page files. Rejected because the
  migration will already touch route and content-loading boundaries, so keeping
  duplicated layout logic would make regressions harder to reason about.
- Introduce a separate front-end framework for content rendering. Rejected
  because Astro components already cover the required layout reuse.

## Decision 6: Update repository guidance in the same feature as the cutover

**Decision**: Treat `AGENTS.md`, the constitution, and any project guidance
that names `edito/` as authoritative as part of the implementation scope.

**Rationale**: The current governance explicitly names `edito/` as the
editorial source of truth. Deleting that folder without updating the rules would
leave the repository self-contradictory and mislead future contributors.

**Alternatives considered**:

- Postpone guidance updates to a later cleanup task. Rejected because the
  repository would be incorrect immediately after the migration.
- Keep a placeholder empty `edito/` directory only for policy compatibility.
  Rejected because it hides the real source of truth instead of clarifying it.

## Research Notes

- Astro routing guide: static dynamic routes require `getStaticPaths()` to
  return params for each generated path, which supports the dedicated
  Motivation article page approach.
  Source: https://docs.astro.build/en/guides/routing/
- Astro components guide: layout components are a standard Astro pattern for
  wrapping common page structure, which supports introducing article and
  editorial page layouts without adding a framework.
  Source: https://docs.astro.build/en/basics/astro-components/
- Astro content collections guide: local file-based content can be loaded with
  built-in loaders or custom build-time loaders, supporting a clean migration of
  legacy editorial files into `src/content/`.
  Source: https://docs.astro.build/en/guides/content-collections/
