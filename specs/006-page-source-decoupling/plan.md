# Implementation Plan: Page source decoupling

**Branch**: `main` | **Date**: 2026-07-02 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/006-page-source-decoupling/spec.md`,
plus the planning instruction to stop depending on Markdown page sources in
`src/content/editorial/`, build real Astro pages in `src/pages/`, and keep
Markdown only for dynamic blog article pages.

## Summary

Replace the current editorial catch-all model with explicit Astro route files
for all non-article public pages, and keep file-based Markdown content only for
the dynamic Motivation blog articles.

The implementation will remove the generic page registry based on
`src/content/editorial/`, retire the route catch-all page for marketing and
category pages, move shared shell content out of Markdown layout files, and
keep a smaller content collection dedicated to blog article details. The end
state is an Astro site whose page code is owned by `src/pages/`, with Markdown
retained only where Astro dynamic article routing benefits from it.

## Technical Context

**Language/Version**: TypeScript with Astro components; Node `>=22.12.0`.

**Primary Dependencies**: Astro `^7.0.4` only, using Astro file-based routing,
layouts, components, and content collections. No new external package is
planned.

**Storage**: Local repository files only. Public page content will move into
explicit `.astro` route files and typed local modules, while dynamic blog
article content will remain file-based Markdown in a dedicated Astro content
collection.

**Testing**: `npm run build`; route and ownership validation from
[quickstart.md](./quickstart.md); manual verification via `astro dev --background`;
`rg` audits to confirm page runtime no longer depends on `src/content/editorial/`
or the generic editorial page registry.

**Target Platform**: Static public Astro website.

**Project Type**: Single Astro marketing/content site with explicit route files
and one dynamic article collection.

**Performance Goals**: Preserve static generation, avoid client-side runtime
cost, and replace path-driven content indirection with direct page ownership.
Build performance should remain bounded to the current public scale of 25
explicit pages and 8 dynamic blog article routes.

**Constraints**: Preserve public slugs and existing French copy unless a
targeted correction is required; remove Markdown as the source for homepage,
marketing pages, category pages, layout copy, and site structure; keep the
solution inside the current Astro project shape; avoid new frameworks, a remote
CMS, or a second content abstraction layer.

**Scale/Scope**: The feature covers the homepage, 24 current non-home public
routes, shared header/footer/sidebar content, 5 blog category/listing pages, 8
dynamic Motivation article routes, and the removal or major simplification of
`src/data/source-map.ts`, `src/data/editorial-pages.ts`, the `pages`
collection in `src/content.config.ts`, and the Markdown page/layout/structure
files under `src/content/editorial/`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Authoritative public content sources**: PASS with controlled transfer. This
  feature explicitly moves page authority from Markdown files under
  `src/content/editorial/` into Astro route files and typed supporting modules.
  Public copy remains publishable, but its authoritative location becomes the
  route file or shared shell module that owns the rendered experience.
- **Astro-first implementation**: PASS. The design leans further into Astro's
  native file-system routing, layouts, and content collections. No external
  framework or dependency is added.
- **Independent story traceability**: PASS. US1 maps to explicit page
  ownership, US2 maps to runtime decoupling from Markdown page sources, and US3
  maps to route parity and public rendering validation after the cutover.
- **Quality gates**: PASS. Required gates are `npm run build`, background dev
  startup, representative route checks, navigation/layout checks, dynamic blog
  article checks, and `rg` audits showing that non-article page runtime code no
  longer depends on `src/content/editorial/`.
- **Security/privacy impact**: PASS. No secret, user data, or third-party
  script risk is introduced. The feature only changes local route ownership,
  content placement, and rendering boundaries.

## Phase 0: Research

See [research.md](./research.md). All planning unknowns are resolved.

## Phase 1: Design

See [data-model.md](./data-model.md),
[contracts/page-source-contract.md](./contracts/page-source-contract.md), and
[quickstart.md](./quickstart.md).

## Implementation Strategy

### Route Ownership Cutover

- Replace `src/pages/[...slug].astro` with explicit route files for all
  non-article public pages so every route is owned where Astro expects it:
  under `src/pages/`.
- Keep `src/pages/index.astro` as the homepage entry point and expand the route
  tree with concrete page files for product, use-case, resources, clients,
  about, support, contact, pricing, legal, and blog category routes.
- Preserve the existing public URLs exactly while changing only the internal
  ownership model.

### Page Content Model

- Move the authoritative content for homepage, marketing pages, blog listing
  pages, and category pages out of Markdown files and into their Astro route
  files or tightly scoped page-local helper modules.
- Favor direct Astro markup and small reusable page section components over the
  current generic block parser so a maintainer can understand a page by reading
  its route file and nearby components.
- Keep public copy publishable and final even when it lives directly inside
  Astro files.

### Shared Shell And Navigation

- Move header, footer, sidebar, and structure content out of Markdown layout
  files into typed local data modules or component-owned configuration so shell
  content is no longer coupled to `src/content/editorial/layout/` or a site
  structure Markdown file.
- Keep `SiteHeader.astro`, `SiteFooter.astro`, and `Sidebar.astro` driven by a
  single shared shell model, but make that model native to the app instead of
  parsed from editorial Markdown.

### Dynamic Blog Article Model

- Keep Markdown only for dynamic Motivation article detail pages, because they
  are a repeatable content collection that naturally fits Astro's content
  collection model and `getStaticPaths()` generation.
- Narrow `src/content.config.ts` so it primarily describes the article
  collection and removes page-level collections that only existed to support
  the generic editorial route model.
- Convert article loading to a focused article-only interface, separate from
  the current all-purpose `source-map.ts` design.

### Runtime Simplification

- Retire or heavily reduce `src/data/source-map.ts`, `src/data/editorial-pages.ts`,
  and any other helper whose main purpose is to translate Markdown page files
  into runtime page objects.
- Remove the idea of a global page registry for non-article routes. Page
  behavior should be visible in the route itself or in a route-local helper,
  not inferred from a site-wide slug table and parsed content map.
- Rename or replace "editorial" concepts in runtime code when they only refer
  to a former storage mechanism rather than an enduring domain concept.

### Validation And Rollout

- Validate parity with route checks across representative static pages, special
  layout pages, category pages, and dynamic article routes.
- Audit the runtime app so only the dynamic article path remains Markdown-backed.
- Remove the obsolete Markdown page/layout/structure files and any dead code
  branches once the explicit Astro route model has passed validation.

### Agent Context Update

- No project agent-context update script exists under `.specify/scripts/` in
  this repository, so no script can be run for this step. The generated plan,
  research, data model, contract, and quickstart artifacts serve as the updated
  context for `/speckit-tasks` and implementation.

## Project Structure

### Documentation (this feature)

```text
specs/006-page-source-decoupling/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── page-source-contract.md
└── tasks.md              # Created later by /speckit-tasks
```

### Source Code (repository root)

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Sidebar.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── pages/
│   │   ├── ArticleSummaryCard.astro
│   │   ├── HeroSection.astro
│   │   └── SharedPageSections.astro
│   └── ui/
│       ├── CtaLink.astro
│       ├── Section.astro
│       └── StatusBadge.astro
├── content/
│   └── blog/
│       └── motivation/
│           ├── theorie-x-y.md
│           ├── identite-pro.md
│           └── ...
├── data/
│   ├── blog-articles.ts
│   └── site-shell.ts
├── layouts/
│   ├── BlogArticleLayout.astro
│   ├── PageLayout.astro
│   └── SiteLayout.astro
├── pages/
│   ├── index.astro
│   ├── produit/
│   │   ├── api.astro
│   │   ├── fonctionnalites.astro
│   │   ├── integrations.astro
│   │   └── securite.astro
│   ├── cas-d-usage/
│   │   ├── grandes-entreprises.astro
│   │   ├── pme.astro
│   │   └── secteurs.astro
│   ├── ressources/
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   ├── categories/
│   │   │   │   ├── ateliers-et-decision.astro
│   │   │   │   ├── ia-appliquee-au-management.astro
│   │   │   │   ├── indicateurs-et-tableaux-de-bord.astro
│   │   │   │   ├── leadership-et-engagement.astro
│   │   │   │   └── pilotage-pme.astro
│   │   │   └── motivation/
│   │   │       └── [slug].astro
│   │   ├── documentation.astro
│   │   ├── guides.astro
│   │   └── webinaires.astro
│   ├── clients/
│   │   └── etudes-de-cas.astro
│   ├── a-propos/
│   │   ├── carrieres.astro
│   │   ├── equipe.astro
│   │   └── presse.astro
│   ├── contact.astro
│   ├── legal.astro
│   ├── support.astro
│   └── tarifs.astro
├── content.config.ts      # Article collection only after the cutover
└── styles/
    └── global.css
```

**Structure Decision**: Keep the existing single Astro project, but make
Astro's file-system routes the owner of every non-article public page. Shared
shell content moves into typed app-native modules, while Markdown is retained
only for the dynamic Motivation article collection and its dedicated route.

## Complexity Tracking

No constitution violations identified.

## Post-Design Constitution Check

- **Authoritative public content sources**: PASS. The design makes each
  non-article page authoritative in Astro and limits Markdown authority to the
  dynamic blog article collection.
- **Astro-first implementation**: PASS. The design uses Astro routes, layouts,
  components, and content collections in a more direct way than the current
  editorial registry.
- **Independent story traceability**: PASS. The data model and contract map
  route ownership, shared shell decoupling, and article-only Markdown usage to
  independently verifiable outcomes.
- **Quality gates**: PASS. Build, route verification, shell verification,
  article checks, and source audits are documented in [quickstart.md](./quickstart.md).
- **Security/privacy impact**: PASS. The design introduces no new dependency,
  no new data handling, and no new attack surface.

## Validation Evidence

- `npm run build`: PASS on 2026-07-02. Astro generated 33 static routes,
  including the explicit non-article pages and the 8 Motivation article pages.
- `astro dev --background`: PASS on 2026-07-02. `astro dev status` reported a
  running server at `http://localhost:4321`.
- Explicit route ownership: PASS. `src/pages/[...slug].astro` was removed and
  the route tree now consists of concrete Astro files plus the single dynamic
  article route at `src/pages/ressources/blog/motivation/[slug].astro`.
- Runtime source audit: PASS. `rg -n "editorial-pages|source-map|src/content/editorial/(home|pages|layout|structure)" ...`
  returned no runtime matches after the cutover.
- Remaining Markdown scope: PASS. `src/content/` now contains only
  `src/content/blog/motivation/*.md`.

## Residual Risk

- Live localhost page fetching from the sandbox could not connect to the
  background dev server even though `astro dev status` reported it as running.
  Representative content verification was therefore completed against the built
  `dist/` HTML output instead of live HTTP responses.
