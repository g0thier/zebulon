# Implementation Plan: Result Consolidation

**Branch**: `[007-result-consolidation]` | **Date**: 2026-07-02 | **Spec**: [`specs/007-result-consolidation/spec.md`](./spec.md)

**Input**: Feature specification from `/specs/007-result-consolidation/spec.md`

## Summary

Align the Astro repository with standard Astro ownership boundaries by keeping
`src/pages/` route-oriented, moving repeatable Motivation articles to
`src/content/` collections, and replacing transitional HTML/Markdown indirection
with explicit Astro pages plus typed shared shell modules.

## Technical Context

**Language/Version**: TypeScript with Astro components, Node.js `>=22.12.0`

**Primary Dependencies**: `astro@^7.0.4`, `astro:content`, `astro/zod`

**Storage**: Repository-local `.astro` files, Markdown content collection
entries, TypeScript data modules, and static assets in `src/assets`

**Testing**: `npm run build`, `astro dev --background`, targeted repository
audits with `find` and `rg`, plus representative manual route checks

**Target Platform**: Static Astro website rendered for modern browsers

**Project Type**: Single Astro marketing and editorial website

**Performance Goals**: Preserve static generation for all current public routes,
avoid new runtime data dependencies, and remove unnecessary file parsing from
page rendering

**Constraints**: Keep current public URLs and key navigation labels stable; add
no new framework or dependency unless justified; retain Markdown only for
repeatable dynamic blog article content

**Scale/Scope**: 20+ public routes, shared shell/navigation modules, one
dynamic Motivation article route, and 8 current Motivation entries

## Constitution Check

*GATE: Passed before Phase 0 research. Re-checked after Phase 1 design and still passing.*

- **Authoritative public content sources**: Static public pages will be owned by
  explicit route files under `src/pages/`. Shared navigation, footer, and shell
  metadata remain in typed modules such as `src/data/site-shell.ts`. Motivation
  article bodies remain individually editable, but their authoritative source
  moves to `src/content/blog/motivation/` instead of Markdown files mixed into
  `src/pages/`.
- **Astro-first implementation**: The design follows Astro routing and project
  structure conventions by treating `src/pages/` as the route tree and using
  Astro content collections for repeatable article content. No extra framework
  or third-party dependency is required.
- **Independent story traceability**:
  - Story 1 maps to `research.md`, `data-model.md`, the ownership contract, and
    route/source audit checks in `quickstart.md`.
  - Story 2 maps to the migration away from `src/data/site-pages.ts` page-body
    blobs and the removal of parser-driven Markdown ownership from `src/pages/`.
  - Story 3 maps to representative route validation for homepage, product page,
    blog index, category page, and a Motivation article.
- **Quality gates**: Required gates are content review, `npm run build`,
  ownership audits (`rg`/`find`), and representative manual navigation checks.
  No automated unit test suite exists today for these pages, so manual
  validation remains part of the acceptance evidence.
- **Security/privacy impact**: No secrets, user data flows, or third-party
  scripts are introduced. No dependency change is planned. Static content and
  route ownership are being simplified rather than expanded.

## Project Structure

### Documentation (this feature)

```text
specs/007-result-consolidation/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── astro-content-ownership.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── assets/
├── components/
│   ├── content/
│   ├── layout/
│   ├── pages/
│   └── ui/
├── content/
│   └── blog/
│       └── motivation/
├── data/
│   ├── blog-articles.ts
│   ├── site-pages.ts
│   └── site-shell.ts
├── layouts/
├── pages/
│   ├── a-propos/
│   ├── cas-d-usage/
│   ├── clients/
│   ├── produit/
│   └── ressources/
└── styles/
```

**Structure Decision**: Keep the existing single Astro app, but tighten
responsibilities. Route definitions stay in `src/pages/`, repeatable article
content moves under `src/content/blog/motivation/`, shared layout/navigation
data stays typed in `src/data/`, and `src/data/site-pages.ts` stops being the
authoritative home for whole-page HTML bodies once the migration is complete.

## Complexity Tracking

No constitution violations or justified complexity exceptions are required by
this design.
