# Tasks: Nouvelles corrections cosmetiques

**Input**: Design documents from `/specs/004-corrections-cosmetiques/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-rendering-contract.md, quickstart.md

**Tests**: No formal test-first tasks are included because the specification does not request TDD. Validation tasks use `npm run build`, source checks, and manual route review from quickstart.md.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no dependency on incomplete tasks.
- **[Story]**: Maps implementation work to US1, US2, or US3 from `spec.md`.
- Every task includes an exact file path or validation document path.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the active feature scope, renderer touchpoints, and validation surfaces before editing code.

- [ ] T001 Review feature scope and quality gates in specs/004-corrections-cosmetiques/spec.md, specs/004-corrections-cosmetiques/plan.md, and specs/004-corrections-cosmetiques/quickstart.md
- [ ] T002 [P] Review homepage and security screenshot rendering in src/pages/index.astro and src/components/content/ContentBlock.astro
- [ ] T003 [P] Review homepage shortcuts, pricing CTA, and legal text-link rendering branches in src/components/content/ContentBlock.astro, src/components/content/DataList.astro, and src/components/ui/CtaLink.astro
- [ ] T004 [P] Confirm local assets and dependency constraints in src/assets/Capture.png, src/assets/Comptes.png, package.json, and src/styles/global.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Prepare the shared rendering and styling approach that the user stories build on.

**⚠️ CRITICAL**: No user story work should begin until this phase is complete.

- [ ] T005 Define the unframed screenshot rendering approach in src/pages/index.astro, src/components/content/ContentBlock.astro, and src/styles/global.css
- [ ] T006 Define the homepage shortcut suppression and pricing lead-CTA removal approach in src/components/content/ContentBlock.astro and src/pages/index.astro
- [ ] T007 Define the inline legal contact-link rendering approach for cited legal paragraphs in src/components/content/ContentBlock.astro
- [ ] T008 Define the shared spacing and overflow rules needed for screenshot, shortcut, pricing, and legal-link changes in src/styles/global.css

**Checkpoint**: Foundation ready; user story work can begin.

---

## Phase 3: User Story 1 - Alleger les visuels de presentation (Priority: P1) 🎯 MVP

**Goal**: Remove unnecessary card-like framing around the homepage and security screenshots while preserving the surrounding content and readability.

**Independent Test**: Open `/` and `/produit/securite`, compare before and after, and confirm both screenshots remain visible, well aligned, and no longer appear inside an extra card.

### Implementation for User Story 1

- [ ] T009 [US1] Remove the extra framed presentation around the homepage product screenshot in src/pages/index.astro and src/styles/global.css
- [ ] T010 [US1] Remove the extra framed presentation around the security account screenshot in src/components/content/ContentBlock.astro and src/styles/global.css
- [ ] T011 [US1] Preserve screenshot alt text, surrounding section order, and non-visual explanatory content in src/pages/index.astro and src/components/content/ContentBlock.astro
- [ ] T012 [US1] Validate `/` and `/produit/securite` against specs/004-corrections-cosmetiques/quickstart.md

**Checkpoint**: User Story 1 is independently shippable as the MVP cosmetic pass.

---

## Phase 4: User Story 2 - Retirer les actions secondaires non souhaitees (Priority: P2)

**Goal**: Remove the specifically unwanted homepage shortcut cards and the single pricing CTA without disrupting the rest of the navigation or offers.

**Independent Test**: Review `/` and `/tarifs`, then confirm the four homepage shortcut cards and the one CTA above "Offres beta" are gone while the remaining navigation and pricing offer CTAs still work.

### Implementation for User Story 2

- [ ] T013 [US2] Suppress the homepage shortcut card grid generated from the "Liste" block in src/components/content/ContentBlock.astro
- [ ] T014 [US2] Remove only the `Creer un compte` CTA row above "Offres beta" in src/components/content/ContentBlock.astro
- [ ] T015 [US2] Adjust homepage and pricing spacing so the removed shortcut cards and CTA do not leave empty containers in src/styles/global.css
- [ ] T016 [US2] Validate `/` and `/tarifs` against specs/004-corrections-cosmetiques/quickstart.md

**Checkpoint**: User Story 2 is independently testable on homepage and pricing flows.

---

## Phase 5: User Story 3 - Normaliser les references de contact sur la page legale (Priority: P3)

**Goal**: Render the cited legal contact references as normal text links instead of button-like actions while preserving legal meaning and mobile readability.

**Independent Test**: Review `/legal` and confirm the five cited contact references are inline text links, remain exact, remain clickable, and no longer look like CTA buttons.

### Implementation for User Story 3

- [ ] T017 [US3] Replace button-like rendering for cited legal paragraph contact references with inline text-link rendering in src/components/content/ContentBlock.astro
- [ ] T018 [US3] Preserve exact `mailto:` behavior and legal paragraph wording while removing CTA-style markup in src/components/content/ContentBlock.astro
- [ ] T019 [US3] Add inline legal-link spacing and overflow handling for long email values in src/styles/global.css
- [ ] T020 [US3] Validate `/legal` against specs/004-corrections-cosmetiques/quickstart.md

**Checkpoint**: User Story 3 is independently functional and readable as a legal-document correction.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup across the feature.

- [ ] T021 [P] Run source checks from specs/004-corrections-cosmetiques/quickstart.md with `rg -n "Capture.png|Comptes.png" src` and `rg -n "Lire la page securite|Consulter les tarifs|Voir les cas d'usage|Decouvrir les fonctionnalites" src edito`
- [ ] T022 Run `npm run build` from package.json
- [ ] T023 Run desktop and small-screen manual checks for `/`, `/produit/securite`, `/tarifs`, and `/legal` using specs/004-corrections-cosmetiques/quickstart.md
- [ ] T024 Review changed Astro and CSS files against specs/004-corrections-cosmetiques/plan.md for source traceability, no dependency drift, and no third-party script introduction

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational; recommended MVP.
- **User Story 2 (Phase 4)**: Depends on Foundational and can proceed after or alongside US1, but shared edits in `src/components/content/ContentBlock.astro` and `src/styles/global.css` must be coordinated.
- **User Story 3 (Phase 5)**: Depends on Foundational and can proceed after or alongside US1 and US2, but shared legal rendering edits still touch `src/components/content/ContentBlock.astro` and `src/styles/global.css`.
- **Polish (Phase 6)**: Depends on all selected user stories being complete.

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2; no dependency on US2 or US3.
- **US2 (P2)**: Can start after Phase 2; independent in value but shares renderer files with US1.
- **US3 (P3)**: Can start after Phase 2; independent in value but shares legal rendering and CSS surfaces with the other stories.

### Within Each User Story

- Apply renderer changes before the CSS refinements that depend on the final markup.
- Keep `edito/` source text unchanged unless a task explicitly calls for an editorial source change.
- Run the story validation task before moving to the next priority.
- Preserve all source-derived text, links, prices, contacts, and legal meaning while making the cosmetic adjustments.

## Parallel Opportunities

- T002, T003, and T004 can run in parallel during Setup.
- T021 can run in parallel with pre-manual validation prep during Phase 6.
- After Phase 2, US1, US2, and US3 can be staffed in parallel if shared-file edits are sequenced carefully.
- Route validation work can be split by page or viewport once the relevant story implementation is complete.

---

## Parallel Example: User Story 1

```text
Task: "Remove the extra framed presentation around the homepage product screenshot in src/pages/index.astro and src/styles/global.css"
Task: "Remove the extra framed presentation around the security account screenshot in src/components/content/ContentBlock.astro and src/styles/global.css"
Task: "Preserve screenshot alt text, surrounding section order, and non-visual explanatory content in src/pages/index.astro and src/components/content/ContentBlock.astro"
```

---

## Parallel Example: User Story 2

```text
Task: "Suppress the homepage shortcut card grid generated from the 'Liste' block in src/components/content/ContentBlock.astro"
Task: "Remove only the `Creer un compte` CTA row above 'Offres beta' in src/components/content/ContentBlock.astro"
Task: "Adjust homepage and pricing spacing so the removed shortcut cards and CTA do not leave empty containers in src/styles/global.css"
```

---

## Parallel Example: User Story 3

```text
Task: "Replace button-like rendering for cited legal paragraph contact references with inline text-link rendering in src/components/content/ContentBlock.astro"
Task: "Preserve exact `mailto:` behavior and legal paragraph wording while removing CTA-style markup in src/components/content/ContentBlock.astro"
Task: "Add inline legal-link spacing and overflow handling for long email values in src/styles/global.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate the MVP route set with T012.

### Incremental Delivery

1. Deliver US1 for screenshot presentation cleanup.
2. Deliver US2 for homepage and pricing action cleanup.
3. Deliver US3 for legal contact reference normalization.
4. Run Phase 6 validation before final delivery.

### Parallel Team Strategy

1. Complete Setup and Foundational tasks together.
2. After Phase 2:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Merge shared-file changes carefully in `src/components/content/ContentBlock.astro` and `src/styles/global.css`.

## Notes

- [P] tasks touch different files or can be performed independently without waiting on another incomplete task.
- Story labels map each implementation task back to the prioritized user stories in spec.md.
- All tasks reference the current Astro renderer and local assets already present in the repository.
- Preserve source traceability for every visible text, link, screenshot, CTA, and legal contact reference.
