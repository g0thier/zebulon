# Tasks: Ajustements visuels mineurs des pages

**Input**: Design documents from `/specs/003-page-appearance-tweaks/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-rendering-contract.md, quickstart.md

**Tests**: No formal test-first tasks are included because the specification does not request TDD. Validation tasks use `npm run build`, source searches, and manual quickstart route checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no dependency on incomplete tasks.
- **[Story]**: Maps implementation work to US1, US2, or US3 from `spec.md`.
- Every task includes an exact file path or validation document path.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the active feature, existing rendering surface, and quality gates before editing code.

- [ ] T001 Review correction scope and quality gates in specs/003-page-appearance-tweaks/plan.md and specs/003-page-appearance-tweaks/quickstart.md
- [ ] T002 [P] Verify source screenshots exist at src/assets/Capture.png and src/assets/Comptes.png
- [ ] T003 [P] Review current homepage rendering in src/pages/index.astro and current benefit list styling in src/styles/global.css
- [ ] T004 [P] Review current dynamic-page grouping rules in src/pages/[...slug].astro and content rendering branches in src/components/content/ContentBlock.astro

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Prepare shared rendering decisions that affect multiple requested pages.

**Critical**: No user story work should begin until this phase is complete.

- [ ] T005 Confirm no new dependency is needed by checking package.json against specs/003-page-appearance-tweaks/research.md
- [ ] T006 Define the local screenshot rendering approach for Astro asset imports in src/pages/index.astro and src/components/content/ContentBlock.astro
- [ ] T007 Define the single-FAQ-heading grouping approach for `/produit/securite` and `/tarifs` in src/pages/[...slug].astro
- [ ] T008 Define the extracted-heading/card-detail rendering approach for `/a-propos/equipe` and `/contact` in src/components/content/ContentBlock.astro
- [ ] T009 Define shared CSS classes for normal benefits, local screenshots, extracted sections, address lines, and framed legal links in src/styles/global.css

**Checkpoint**: Foundation ready; user story implementation can now begin.

---

## Phase 3: User Story 1 - Corriger les irritants visuels restants (Priority: P1) MVP

**Goal**: Correct the most visible presentation issues without changing the editorial message or creating new routes.

**Independent Test**: Compare `/`, `/produit/securite`, `/tarifs`, `/a-propos/equipe`, and `/contact` before/after and confirm the requested headings, FAQ titles, cards, and screenshot placement are visually cleaner with source content preserved.

### Implementation for User Story 1

- [ ] T010 [US1] Import src/assets/Capture.png and render it before the Bénéfices block in src/pages/index.astro
- [ ] T011 [US1] Remove the special card/grid treatment from homepage Bénéfices while keeping normal list rendering in src/styles/global.css
- [ ] T012 [US1] Ensure "Bénéfices" uses the same section-heading treatment as "Produit" and "Cas d'usage" in src/components/content/DataList.astro and src/styles/global.css
- [ ] T013 [US1] Update FAQ grouping so `/produit/securite` and `/tarifs` keep only one visible "FAQ" heading in src/pages/[...slug].astro
- [ ] T014 [US1] Move "L'Équipe" outside the founder card while keeping the founder details carded in src/components/content/ContentBlock.astro
- [ ] T015 [US1] Move "Nous contacter" and its introductory paragraph outside the contact card in src/pages/[...slug].astro and src/components/content/ContentBlock.astro
- [ ] T016 [US1] Add extracted-section heading and paragraph spacing for team/contact sections in src/styles/global.css
- [ ] T017 [US1] Validate US1 routes `/`, `/produit/securite`, `/tarifs`, `/a-propos/equipe`, and `/contact` against specs/003-page-appearance-tweaks/quickstart.md

**Checkpoint**: User Story 1 is independently shippable as the MVP visual-irritant correction pass.

---

## Phase 4: User Story 2 - Affiner les pages de contenu sensible ou dense (Priority: P2)

**Goal**: Improve dense and sensitive pages so security, pricing, contact, and legal information remain easier to scan and act on.

**Independent Test**: Review `/produit/securite`, `/tarifs`, `/contact`, and `/legal`; confirm screenshots, contact details, address lines, legal links, prices, limits, FAQ answers, and sensitive copy remain present and clearer.

### Implementation for User Story 2

- [ ] T018 [US2] Import src/assets/Comptes.png and render it for the security access/account visual in src/components/content/ContentBlock.astro
- [ ] T019 [US2] Suppress the old security visual placeholder title and description when Comptes.png is displayed in src/components/content/ContentBlock.astro
- [ ] T020 [US2] Preserve all security FAQ question and answer cards after the single-heading grouping change in src/pages/[...slug].astro
- [ ] T021 [US2] Preserve all pricing FAQ question and answer cards plus existing offer values after the single-heading grouping change in src/pages/[...slug].astro
- [ ] T022 [US2] Render the contact address as separate visible lines for `/contact` in src/pages/[...slug].astro and src/components/content/ContentBlock.astro
- [ ] T023 [US2] Render "Site" as a peer section heading on `/legal` in src/components/content/ContentBlock.astro
- [ ] T024 [US2] Render legal `contact@zzzbre.com`, `support@zzzbre.com`, and `https://zzzbre.com` as button-like framed links in src/components/content/ContentBlock.astro
- [ ] T025 [US2] Add legal framed-link and address-line styles matching the requested contact CTA treatment in src/styles/global.css
- [ ] T026 [US2] Validate US2 routes `/produit/securite`, `/tarifs`, `/contact`, and `/legal` against specs/003-page-appearance-tweaks/quickstart.md

**Checkpoint**: User Story 2 is independently testable on dense and sensitive pages.

---

## Phase 5: User Story 3 - Verifier le rendu sur formats courants (Priority: P3)

**Goal**: Ensure the minor visual corrections remain stable on desktop, tablet, and mobile widths.

**Independent Test**: Browse all six requested routes across common widths and confirm screenshots, headings, cards, lists, framed links, emails, URLs, and address lines do not overlap or overflow.

### Implementation for User Story 3

- [ ] T027 [US3] Add responsive constraints for homepage screenshot, security screenshot, extracted headings, contact cards, and legal framed links in src/styles/global.css
- [ ] T028 [US3] Add wrapping rules for legal emails, URLs, contact address lines, and CTA-like framed links in src/styles/global.css
- [ ] T029 [US3] Verify small-screen card and list stacking for `/`, `/a-propos/equipe`, and `/contact` against specs/003-page-appearance-tweaks/quickstart.md
- [ ] T030 [US3] Verify small-screen sensitive-content readability for `/produit/securite`, `/tarifs`, and `/legal` against specs/003-page-appearance-tweaks/quickstart.md
- [ ] T031 [US3] Confirm no nested cards, duplicate consecutive headings, broken screenshots, or overflowing links remain using specs/003-page-appearance-tweaks/contracts/ui-rendering-contract.md

**Checkpoint**: User Story 3 completes responsive confidence for the minor appearance pass.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup across the feature.

- [ ] T032 [P] Run screenshot reference checks from specs/003-page-appearance-tweaks/quickstart.md with `rg -n "Capture.png|Comptes.png" src`
- [ ] T033 [P] Run old-placeholder checks from specs/003-page-appearance-tweaks/quickstart.md with `rg -n "Capture-droit-access|Exemple de gestion des droits" src edito`
- [ ] T034 Run `npm run build` using package.json
- [ ] T035 Run desktop manual route validation for `/`, `/produit/securite`, `/tarifs`, `/a-propos/equipe`, `/contact`, and `/legal` using specs/003-page-appearance-tweaks/quickstart.md
- [ ] T036 Run tablet and mobile manual route validation for `/`, `/produit/securite`, `/tarifs`, `/a-propos/equipe`, `/contact`, and `/legal` using specs/003-page-appearance-tweaks/quickstart.md
- [ ] T037 Review changed `edito/` files, if any, against edito/AGENTS.md for directly publishable public copy
- [ ] T038 Review changed Astro and CSS files against specs/003-page-appearance-tweaks/plan.md for no new dependency, no secret, no third-party script, and source-traceability impact

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational; recommended MVP.
- **User Story 2 (Phase 4)**: Depends on Foundational and can proceed after or beside US1, but shared files in `src/pages/[...slug].astro`, `src/components/content/ContentBlock.astro`, and `src/styles/global.css` must be coordinated.
- **User Story 3 (Phase 5)**: Depends on the selected visual corrections from US1 and US2.
- **Polish (Phase 6)**: Depends on all selected stories being complete.

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2; no dependency on US2 or US3.
- **US2 (P2)**: Can start after Phase 2; independent in value but shares rendering files with US1.
- **US3 (P3)**: Should run after US1 and US2 visual changes exist so responsive checks cover the final surfaces.

### Within Each User Story

- Apply rendering changes before CSS refinements that target the new markup.
- Keep editorial source text unchanged unless a task explicitly identifies an `edito/` source correction.
- Validate story routes before moving to the next priority.
- Preserve all source-derived text, links, prices, contacts, legal copy, security copy, and CTA targets.

## Parallel Opportunities

- T002, T003, and T004 can run in parallel during Setup.
- T032 and T033 can run in parallel during final validation.
- US1 and US2 can be staffed in parallel after Phase 2 if edits to shared files are sequenced carefully.
- Route validation tasks can be split by viewport or page once implementation tasks for the relevant story are complete.

## Parallel Example: User Story 1

```text
Task: "Import src/assets/Capture.png and render it before the Bénéfices block in src/pages/index.astro"
Task: "Update FAQ grouping so `/produit/securite` and `/tarifs` keep only one visible 'FAQ' heading in src/pages/[...slug].astro"
Task: "Add extracted-section heading and paragraph spacing for team/contact sections in src/styles/global.css"
```

## Parallel Example: User Story 2

```text
Task: "Render 'Site' as a peer section heading on `/legal` in src/components/content/ContentBlock.astro"
Task: "Add legal framed-link and address-line styles matching the requested contact CTA treatment in src/styles/global.css"
Task: "Validate US2 routes `/produit/securite`, `/tarifs`, `/contact`, and `/legal` against specs/003-page-appearance-tweaks/quickstart.md"
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate the MVP route set from T017.

### Incremental Delivery

1. Deliver US1 for visible irritant corrections.
2. Deliver US2 for dense/sensitive page scan improvements.
3. Deliver US3 for responsive confidence.
4. Run Phase 6 validation before final delivery.

### Quality Gate Strategy

1. Keep `edito/` source edits directly publishable if any editorial source is changed.
2. Keep implementation inside the existing Astro structure.
3. Avoid dependencies, secrets, private data, external assets, and third-party scripts.
4. Run `npm run build` and quickstart route checks before marking the feature complete.

## Notes

- [P] tasks touch different files and can run in parallel.
- Story labels map tasks to the prioritized user stories in spec.md.
- Visual asset tasks must use the existing local files in `src/assets/`.
- Preserve source traceability for every visible text, link, status, price, contact, security detail, legal value, and CTA.
