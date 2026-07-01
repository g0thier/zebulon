# Implementation Plan: Consolidation edito src

**Branch**: `main` | **Date**: 2026-07-02 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/005-edito-src-consolidation/spec.md`,
plus the planning instruction to transfer `edito/` into `src/`, cover layouts,
and support dynamic blog paths so the `edito/` folder can be removed safely.

## Summary

Migrate the remaining editorial source from `edito/` into `src/` and turn the
Astro app into the single authoritative, build-time content source for the site.

The implementation will replace runtime filesystem reads from `edito/` with
content stored under `src/`, normalize shared layout/navigation content, and add
first-class blog article routing for the Motivation series. The end state is a
clean Astro site where pages, layouts, and blog paths are all generated from
`src/`, allowing `edito/` to be deleted without breaking builds or public
routes.

## Technical Context

**Language/Version**: TypeScript with Astro components; Node `>=22.12.0`.

**Primary Dependencies**: Astro `^7.0.4` only, using Astro pages, layouts, and
content collections/loaders already supported by the framework. No new external
package is planned.

**Storage**: Local file-based content only. Legacy Markdown currently lives in
`edito/`; the target source of truth will move under `src/content/` plus
supporting TypeScript helpers in `src/data/` or `src/lib/`.

**Testing**: `npm run build`; route and content validation from
[quickstart.md](./quickstart.md); manual verification via `astro dev --background`;
static path audit for page routes and blog article routes; `rg` audit to confirm
the runtime app no longer references `edito/`.

**Target Platform**: Static public Astro website.

**Project Type**: Single Astro marketing/content site with file-based content
and dynamic static routes.

**Performance Goals**: Preserve static generation, avoid client-side runtime
cost, and remove synchronous runtime file reads from a legacy folder outside the
new content home. Build performance should remain bounded to the current site
scale of 24 page routes and 8 blog article routes.

**Constraints**: Preserve public slugs, preserve existing French copy unless a
migration fix is required, keep the site inside current Astro structure, avoid
new frameworks or remote CMS integration, and ensure the final app has a single
maintainable source in `src/`.

**Scale/Scope**: 37 authoritative source artifacts currently referenced by the
site: 33 content files, 3 layout files, and `edito/structure.md`. Public scope
includes the homepage, 24 content routes, shared header/footer/sidebar content,
5 blog category/listing routes, and 8 Motivation article detail routes.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Editorial source of truth**: PASS with controlled migration. The current
  authoritative source is `edito/`, but this feature explicitly moves that
  authority into `src/`. The implementation must therefore migrate all public
  copy first, verify parity, and update project guidance in the same feature so
  the new source of truth is documented before `edito/` is deleted.
- **Astro-first implementation**: PASS. The design stays inside Astro pages,
  layouts, content collections/loaders, and local components. No external CMS,
  framework island, or dependency is introduced.
- **Independent story traceability**: PASS. US1 maps to content parity and
  route preservation, US2 maps to the new `src/` content model and layout data,
  and US3 maps to elimination of `edito/` runtime references plus deletion
  readiness checks.
- **Quality gates**: PASS. Required gates are content migration review,
  `npm run build`, representative route checks, header/footer/sidebar checks,
  dynamic blog article checks, and a targeted audit showing `src/` runtime code
  no longer reads from `edito/`.
- **Security/privacy impact**: PASS. No secret, user data, or third-party
  script risk is added. The feature is limited to local content relocation,
  routing, and layout/content loading changes.

## Phase 0: Research

See [research.md](./research.md). All planning unknowns are resolved and no
`NEEDS CLARIFICATION` placeholders remain.

## Phase 1: Design

See [data-model.md](./data-model.md),
[contracts/content-routing-contract.md](./contracts/content-routing-contract.md),
and [quickstart.md](./quickstart.md).

## Implementation Strategy

### Content Cutover

- Create a new canonical content home under `src/content/` for all material now
  stored in `edito/`.
- Separate page, article, layout, and structure artifacts so the new source is
  explicit instead of inferred from the old folder names.
- Migrate legacy files into `src/` without changing public copy as part of the
  transfer. Any normalization needed for the build should happen in loader or
  parser helpers, not through unplanned editorial rewrites.

### Content Loading Model

- Replace direct filesystem reads from `edito/` in `src/data/source-map.ts`
  with collection-backed loading from `src/content/`.
- Keep a normalization layer that turns content files into the same
  user-facing concepts already rendered by the site: pages, blocks, cards,
  CTAs, visuals, layout sections, and article metadata.
- Prefer Astro content collections with local loaders over ad hoc runtime path
  mapping, so content queries and schema validation happen at build time.

### Layouts And Shared Navigation

- Keep `src/layouts/SiteLayout.astro` as the outer shell.
- Introduce a dedicated editorial page layout for common hero/body structure so
  homepage and content pages do not need to duplicate assembly rules.
- Introduce a dedicated blog article layout for Motivation article pages so
  article metadata and article body rendering stop piggybacking on generic page
  assumptions.
- Move header, footer, sidebar, and site structure data into normalized `src/`
  content records, then update shared layout components to consume that single
  source.

### Dynamic Blog Paths

- Preserve existing public category routes such as
  `/ressources/blog/categories/leadership-et-engagement`.
- Add first-class static generation for article detail routes under
  `/ressources/blog/motivation/[slug]`.
- Use Astro `getStaticPaths()` with article collection entries so each article
  route is generated intentionally instead of relying on links that are not
  backed by a route definition.
- Keep category-to-article relationships in data so the category page and each
  article route share the same canonical metadata.

### Runtime Cleanup And Deletion Readiness

- Replace source-path-based helpers whose only purpose is to read `edito/` from
  disk with collection-aware helpers that resolve content keys, slugs, and
  internal links from `src/`.
- Update or remove any helper that exposes `sourcePath` as a runtime dependency
  when a stable collection identifier would be clearer.
- Once parity checks pass, delete `edito/` and remove any dead code left behind
  by the old parser assumptions.

### Governance And Project Guidance Update

- Because the current constitution and repository guidance still define
  `edito/` as the editorial source of truth, implementation must update
  `AGENTS.md`, `.specify/memory/constitution.md`, and any other runtime
  guidance that would become false after the cutover.
- These guidance changes are part of the feature, not optional follow-up work,
  because deleting `edito/` without updating the rules would leave the project
  in a contradictory state.

### Agent Context Update

- No project agent-context update script exists under `.specify/scripts/` in
  this repository, so no script can be run for this step. The plan, research,
  data model, contract, and quickstart artifacts serve as the updated context
  for `/speckit-tasks` and implementation.

## Project Structure

### Documentation (this feature)

```text
specs/005-edito-src-consolidation/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── content-routing-contract.md
└── tasks.md              # Created later by /speckit-tasks
```

### Source Code (repository root)

```text
src/
├── assets/
│   ├── Capture.png
│   └── Comptes.png
├── components/
│   ├── content/
│   │   ├── ContentBlock.astro
│   │   ├── DataList.astro
│   │   └── EditorialCard.astro
│   ├── layout/
│   │   ├── Sidebar.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   └── ui/
│       ├── CtaLink.astro
│       ├── Section.astro
│       └── StatusBadge.astro
├── content/
│   └── editorial/
│       ├── home/
│       │   └── index.md
│       ├── pages/
│       │   ├── produit/
│       │   ├── cas-d-usage/
│       │   ├── ressources/
│       │   ├── clients/
│       │   ├── a-propos/
│       │   ├── support/
│       │   ├── contact/
│       │   └── legal/
│       ├── blog/
│       │   ├── categories/
│       │   └── motivation/
│       ├── layout/
│       │   ├── header.md
│       │   ├── footer.md
│       │   └── sidebar.md
│       └── structure/
│           └── site-structure.md
├── data/
│   ├── editorial-pages.ts
│   ├── navigation.ts
│   └── source-map.ts      # Renamed or slimmed down during implementation
├── layouts/
│   ├── SiteLayout.astro
│   ├── EditorialPageLayout.astro
│   └── BlogArticleLayout.astro
├── pages/
│   ├── index.astro
│   ├── [...slug].astro
│   └── ressources/
│       └── blog/
│           └── motivation/
│               └── [slug].astro
└── styles/
    └── global.css
```

**Structure Decision**: Keep the existing single Astro project, but move the
legacy editorial source into `src/content/editorial/` so content, layout data,
and route generation live inside the Astro source tree. Generic pages continue
to use the catch-all route, while blog article detail pages gain a dedicated
dynamic route file for clearer ownership and validation.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Replace `edito/` source-of-truth rule | The feature goal is to delete `edito/` and make `src/` canonical | Leaving the constitution and AGENTS unchanged would make the repo internally inconsistent after cutover |

## Post-Design Constitution Check

- **Editorial source of truth**: PASS after planned guidance update. The design
  migrates all public copy into `src/content/editorial/`, centralizes shared
  navigation/layout content there, and explicitly requires updating repository
  guidance in the same feature.
- **Astro-first implementation**: PASS. The design uses Astro layouts,
  collection/loading patterns, and file-based routes only.
- **Independent story traceability**: PASS. The data model and contract cover
  page parity, layout normalization, and dynamic blog routes as independently
  verifiable outcomes.
- **Quality gates**: PASS. Build, route verification, layout verification,
  dynamic article checks, and `edito/` reference audits are documented in
  [quickstart.md](./quickstart.md).
- **Security/privacy impact**: PASS. The design introduces no new external
  dependency, no data handling change, and no additional attack surface.

## Implementation Validation Notes

- `npm run build` passed after the migrated content was wired into
  `src/content/editorial/`.
- `npm run build` passed again after deleting the legacy editorial folder.
- Astro background server validation passed with `astro dev --background` and
  `astro dev status`.
- Static output now includes the 8 Motivation article routes under
  `/ressources/blog/motivation/*`.
- Runtime reference audits passed for `src/`; no legacy alias pattern remains
  in the app source tree.
- Manual browser-based visual review of representative routes was not run during
  this implementation session. Residual risk is limited to presentation issues
  that do not surface in static generation or HTML inspection.
