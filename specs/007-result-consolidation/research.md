# Research: Result Consolidation

## Decision 1: Treat `src/pages/` as route files only

**Decision**: Keep `src/pages/` focused on Astro route definitions, including
dynamic route files such as `src/pages/ressources/blog/motivation/[slug].astro`,
and remove Markdown content files that are being used as page data sources from
that tree.

**Rationale**: Astro reserves `src/pages/` for file-based routing, so mixing
route files with long-lived content sources obscures ownership and makes it
harder to see what actually defines a public route. Clear route-only ownership
also matches the feature goal of giving each public surface a unique,
discoverable source of truth.

**Alternatives considered**:
- Keep Motivation Markdown next to `[slug].astro` in `src/pages/`: rejected
  because it keeps transitional ownership inside the routing tree.
- Move every Motivation article to a standalone `.astro` route file: rejected
  because repeatable blog entries are still a valid Markdown use case.

## Decision 2: Use Astro content collections for repeatable Motivation articles

**Decision**: Store Motivation article entries under
`src/content/blog/motivation/` and expose them through Astro content
collections instead of a custom `readFileSync` parser plus synthetic loader.

**Rationale**: Astro documents content collections as the preferred way to
manage sets of Markdown content. Using collection entries with schema
validation makes the article source explicit, keeps authoring ergonomic for a
series of related posts, and removes a layer of custom parsing logic.

**Alternatives considered**:
- Keep `src/data/blog-articles.ts` as a file parser over Markdown paths:
  rejected because it duplicates capabilities Astro already provides.
- Convert Motivation articles to hard-coded TypeScript objects: rejected
  because it makes editorial maintenance less natural than Markdown.

## Decision 3: Convert static public pages into explicit `.astro` pages

**Decision**: Make each public static route own its page structure directly in
its `.astro` file, using layouts and shared components, instead of storing full
HTML blobs in `src/data/site-pages.ts`.

**Rationale**: Astro pages and components are intended to express page markup
directly. Large `heroHtml` and `bodyHtml` strings hide structure, complicate
diffs, and make route-level ownership less obvious for maintainers who need to
edit a specific page.

**Alternatives considered**:
- Keep `site-pages.ts` as the authoritative registry for full page markup:
  rejected because it centralizes too much unrelated page content in one file.
- Move all static pages to Markdown/MDX: rejected because these pages are route
  components first and do not need an extra content authoring layer.

## Decision 4: Keep shared shell metadata in typed data modules

**Decision**: Preserve typed TypeScript modules such as `src/data/site-shell.ts`
for navigation groups, footer data, and other shared shell structures that are
not page-body content.

**Rationale**: Header, footer, sidebar, and CTA registries are shared
application structures rather than article content. Typed modules keep those
relationships explicit and reusable across route files without forcing content
collections or inline duplication.

**Alternatives considered**:
- Duplicate shared shell links directly in each page: rejected because it would
  increase drift risk.
- Encode shell navigation inside Markdown frontmatter or HTML blobs: rejected
  because it hides structured site-wide dependencies.

## Decision 5: Remove transitional data indirection from the rendering path

**Decision**: Retire the transitional pattern where route files depend on
generic HTML registries or synthetic content loaders when native Astro pages and
collections can serve the same surfaces directly.

**Rationale**: The current mix of `getStaticPage()` HTML blobs and custom
article parsing makes the public source-of-truth harder to audit. Simplifying
the rendering path reduces hidden coupling and makes future maintenance faster
and safer.

**Alternatives considered**:
- Keep the existing indirection and document it better: rejected because the
  feature specifically aims to consolidate away transitional ownership.

## Decision 6: Skip agent-context automation because no script exists

**Decision**: Record the agent-context update step as not applicable for this
repository state.

**Rationale**: The available `.specify/scripts/bash/` scripts include planning
and setup helpers only; there is no dedicated agent-context refresh script to
run after design generation. The plan therefore captures the absence of that
automation rather than inventing a non-standard replacement.

**Alternatives considered**:
- Add a new planning-time script as part of this phase: rejected because the
  feature scope is repository alignment, not Spec Kit infrastructure work.
