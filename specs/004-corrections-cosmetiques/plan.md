# Implementation Plan: Nouvelles corrections cosmetiques

**Branch**: `main` | **Date**: 2026-07-01 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/004-corrections-cosmetiques/spec.md`,
plus the page-by-page correction list supplied during `/speckit-plan`.

## Summary

Apply a tightly scoped cosmetic correction pass to four existing public routes:
`/`, `/produit/securite`, `/tarifs`, and `/legal`.

The implementation will stay inside the current Astro renderer and shared style
system. No new routes, dependencies, or editorial concepts are needed. The work
focuses on four behaviors:

- remove card-like chrome around the homepage and security screenshots;
- remove the four homepage shortcut cards from the "Benefices" area;
- remove only the pricing CTA placed above "Offres beta";
- render the cited legal contact references as normal text links instead of
  button-like actions.

## Technical Context

**Language/Version**: TypeScript with Astro components; Node `>=22.12.0`.

**Primary Dependencies**: Astro `^7.0.4` only. No new framework, package, or
third-party script is planned.

**Storage**: Authoritative copy remains in `edito/`; local screenshots already
exist in `src/assets/Capture.png` and `src/assets/Comptes.png`.

**Testing**: `npm run build`; manual route validation through the quickstart;
desktop and small-screen visual checks; optional local verification with
`astro dev --background`.

**Target Platform**: Static public website rendered by Astro.

**Project Type**: Single Astro marketing/showcase site.

**Performance Goals**: Preserve static rendering and zero client-side runtime
for these corrections; do not add extra network dependencies or scripts.

**Constraints**: Keep scope limited to the four requested routes; preserve
existing editorial copy and route structure; do not alter lower-page offer CTAs
on `/tarifs`; do not introduce new cards, headings, or button patterns while
removing the requested ones.

**Scale/Scope**: Four public routes and the shared renderer paths they already
use: `src/pages/index.astro`, `src/pages/[...slug].astro`,
`src/components/content/ContentBlock.astro`,
`src/components/content/DataList.astro`, `src/components/ui/CtaLink.astro`,
and `src/styles/global.css`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Editorial source of truth**: PASS. The visible copy already exists in
  `edito/contenu/index.md`, `edito/contenu/Produit/4 Sécurité.md`,
  `edito/contenu/Tarifs/Tarifs.md`, and `edito/contenu/Légal/Légal.md`.
  Implementation should prefer renderer and styling changes over source edits,
  because the request changes presentation more than editorial content.
- **Astro-first implementation**: PASS. The feature fits the current Astro
  structure and follows Astro's file-based routing, component, and styling
  model. The work stays inside existing `.astro` files, local image imports,
  and shared CSS.
- **Independent story traceability**: PASS. US1 maps to screenshot chrome
  removal on `/` and `/produit/securite`. US2 maps to homepage shortcut removal
  and the pricing CTA removal. US3 maps to legal contact reference rendering
  and route-level visual validation.
- **Quality gates**: PASS. Required gates are source review, `npm run build`,
  manual checks for the four routes, screenshot presentation review, CTA
  presence/absence checks, and small-screen checks for long emails and links.
- **Security/privacy impact**: PASS. No secrets, user data, third-party scripts,
  remote assets, or dependency updates are involved. Legal and support contact
  information must remain exact and readable.

## Phase 0: Research

See [research.md](./research.md). All planning unknowns are resolved and no
`NEEDS CLARIFICATION` placeholders remain.

## Phase 1: Design

See [data-model.md](./data-model.md),
[contracts/ui-rendering-contract.md](./contracts/ui-rendering-contract.md), and
[quickstart.md](./quickstart.md).

## Implementation Strategy

### Homepage `/`

- Keep the dedicated homepage route in `src/pages/index.astro`.
- Remove the card-like presentation from the existing product screenshot instead
  of creating a new visual slot or changing the source content order.
- Keep the "Benefices" text list, but suppress the separate shortcut-card group
  generated from the homepage "Liste" block so the four navigation cards no
  longer render there.

### Security Page `/produit/securite`

- Keep the existing route in `src/pages/[...slug].astro`.
- Continue using the local account screenshot from `src/assets/Comptes.png`, but
  render it without the surrounding `visual-panel` card treatment.
- Preserve the surrounding explanatory section and all non-visual security copy.

### Pricing Page `/tarifs`

- Keep the special pricing renderer branch in
  `src/components/content/ContentBlock.astro`.
- Remove only the CTA row attached to the "Acces libre" block before
  "Offres beta".
- Preserve pricing cards, offer badges, prices, quotas, and offer-level CTAs
  lower on the page.

### Legal Page `/legal`

- Keep the existing route and source mapping.
- Replace the current button-like legal email rendering for the five cited
  paragraphs with normal inline text-link rendering so the addresses remain
  readable and actionable without looking like CTA buttons.
- Limit legal styling changes to the cited paragraph references; do not expand
  the scope to unrelated legal fields or other pages unless a shared renderer
  change is required and remains behaviorally equivalent elsewhere.

### Agent Context Update

- No project agent-context update script exists under `.specify/scripts/` in
  this repository, so no script can be run for this step. The planning artifacts
  themselves serve as the updated execution context for later `/speckit-tasks`
  and implementation work.

## Project Structure

### Documentation (this feature)

```text
specs/004-corrections-cosmetiques/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-rendering-contract.md
└── tasks.md              # Created later by /speckit-tasks
```

### Source Code (repository root)

```text
edito/
└── contenu/
    ├── index.md
    ├── Produit/4 Sécurité.md
    ├── Tarifs/Tarifs.md
    └── Légal/Légal.md

src/
├── assets/
│   ├── Capture.png
│   └── Comptes.png
├── components/
│   ├── content/
│   │   ├── ContentBlock.astro
│   │   ├── DataList.astro
│   │   └── EditorialCard.astro
│   └── ui/
│       └── CtaLink.astro
├── data/
│   ├── editorial-pages.ts
│   └── source-map.ts
├── pages/
│   ├── index.astro
│   └── [...slug].astro
└── styles/
    └── global.css
```

**Structure Decision**: Use the existing single Astro project and keep the
source-led rendering model intact. Route-specific behavior remains in the
homepage page file and the shared catch-all/content components, while visual
differences are handled through existing local assets and shared CSS.

## Complexity Tracking

No constitution violations or unusual complexity are required.

## Post-Design Constitution Check

- **Editorial source of truth**: PASS. The design keeps `edito/` authoritative
  and avoids source churn for presentation-only corrections.
- **Astro-first implementation**: PASS. The design uses current Astro pages,
  imported local assets, shared components, and CSS only.
- **Independent story traceability**: PASS. The contract and quickstart validate
  screenshot treatment, shortcut/CTA removal, and legal text-link rendering as
  separate outcomes.
- **Quality gates**: PASS. `npm run build`, four-route manual review, and
  responsive checks are documented in [quickstart.md](./quickstart.md).
- **Security/privacy impact**: PASS. No dependency, secret, tracking, or data
  handling change is introduced.
