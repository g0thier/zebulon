# Phase 0 Research: Page source decoupling

## Decision 1: Replace the editorial catch-all with explicit Astro page files

**Decision**: Replace `src/pages/[...slug].astro` and the generic page registry
with explicit Astro route files for all non-article public pages.

**Rationale**: The current page system hides route ownership behind a global
slug map plus parsed Markdown content. Astro's routing model is built around
file-system ownership, and the user request explicitly asks for "real Astro
pages" under `src/pages/`. Making each route concrete improves readability,
local reasoning, and change isolation.

**Alternatives considered**:

- Keep `src/pages/[...slug].astro` and only thin the data layer. Rejected
  because it preserves the main source of indirection the feature is meant to
  remove.
- Keep explicit routes only for a subset of pages. Rejected because mixed
  ownership would leave maintainers guessing which routes are local and which
  still depend on the registry.

## Decision 2: Keep Markdown only for dynamic blog article content

**Decision**: Keep file-based Markdown content only for the Motivation article
detail pages and model those files as a focused Astro content collection.

**Rationale**: Dynamic article pages are the one part of the site that still
benefits from repeatable content entries generated through `getStaticPaths()`.
Astro's content collections are well-suited to this use case, and limiting
Markdown to that one domain sharply reduces mental overhead elsewhere.

**Alternatives considered**:

- Keep page, layout, and category content in Markdown too. Rejected because it
  would continue coupling route behavior to file parsing instead of true Astro
  page ownership.
- Remove Markdown entirely, including articles. Rejected because the repeated
  article format is a good fit for collection-backed content and would become
  harder to maintain if forced into individual Astro files.

## Decision 3: Move shared shell content into typed app-native modules

**Decision**: Replace Markdown-backed header, footer, sidebar, and site
structure records with typed local data modules or component-owned
configuration.

**Rationale**: Shared shell content is reused UI configuration, not an argument
for a generic Markdown parsing system. Keeping it in typed app-native modules
makes dependencies visible, eliminates path resolution logic, and lets shared
components read data directly.

**Alternatives considered**:

- Keep `src/content/editorial/layout/*.md` and parse only those files.
  Rejected because it would preserve a special-case Markdown dependency for
  content that changes relatively rarely and benefits from direct ownership.
- Hard-code shell links separately inside each component. Rejected because it
  would duplicate shared copy and navigation definitions.

## Decision 4: Retire the generic page content DSL for non-article pages

**Decision**: Remove the need for page-level parsing through `source-map.ts`,
`editorial-pages.ts`, and the catch-all content object model for homepage,
marketing pages, and blog category pages.

**Rationale**: The current model turns every page into a generic collection of
blocks, cards, lists, and special-case grouping rules. That abstraction was
useful for migration, but it now obscures simple page ownership. Direct Astro
markup and route-local helpers make special compositions easier to understand
and maintain.

**Alternatives considered**:

- Keep the DSL and feed it from non-Markdown sources. Rejected because the
  abstraction itself, not only the file format, is now the main source of
  complexity.
- Rewrite the DSL into a new schema language. Rejected because it would replace
  one layer of indirection with another instead of removing the indirection.

## Decision 5: Keep category and listing pages as real Astro pages that query article data

**Decision**: Render `/ressources/blog`, `/ressources/blog/categories/*`, and
other list-like public pages as explicit Astro routes, using the article
collection only where repeated article metadata is needed.

**Rationale**: Blog categories are public pages with stable structure, not
pure content records. Letting them remain explicit pages keeps route ownership
clear while still allowing them to query article summaries when needed.

**Alternatives considered**:

- Treat categories as Markdown pages alongside articles. Rejected because it
  keeps list pages inside the old content-registry mindset.
- Generate categories automatically from article metadata alone. Rejected
  because the current site has fixed category pages whose page-level copy and
  composition should stay intentionally authored.

## Research Notes

- Astro routing guide: Astro uses file-based routing and supports dynamic
  routes through `getStaticPaths()`, which supports the design of explicit
  route files for all static pages plus a dedicated article dynamic route.
  Source: https://docs.astro.build/en/guides/routing/
- Astro components guide: Astro components and layouts are the native way to
  compose repeated page structure without introducing an external framework,
  which supports route-local page ownership plus shared layout extraction.
  Source: https://docs.astro.build/en/basics/astro-components/
- Astro content collections guide: content collections are appropriate for
  repeatable local content entries with schemas, which supports keeping
  Markdown only for dynamic article content.
  Source: https://docs.astro.build/en/guides/content-collections/
