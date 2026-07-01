# Tasks: Finitions d'apparence des pages

**Input**: Design documents from `/specs/002-page-appearance-polish/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-rendering-contract.md, quickstart.md

**Tests**: No formal test-first tasks are included because the specification does not request TDD. Validation tasks use `npm run build`, source searches, and manual quickstart route checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no dependency on incomplete tasks.
- **[Story]**: Maps implementation work to US1, US2, or US3 from `spec.md`.
- Every task includes an exact file path or validation document path.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the implementation surface and avoid scope drift before editing code or content.

- [X] T001 Review the rendering contract and current parser surface in specs/002-page-appearance-polish/contracts/ui-rendering-contract.md and src/data/source-map.ts
- [X] T002 [P] Confirm that no new dependencies are required by checking package.json against specs/002-page-appearance-polish/research.md
- [X] T003 [P] Inventory the requested editorial source edits in specs/002-page-appearance-polish/plan.md and edito/contenu/index.md
- [X] T004 [P] Check current screenshot asset availability under public/ for Capture-droit-access.png and the homepage product screenshot

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared parser, component context, and style primitives needed by all user stories.

**Critical**: No user story work should begin until this phase is complete.

- [X] T005 Extend source data types for nested list depth, visual assets, and display variants in src/data/source-map.ts
- [X] T006 Implement Markdown parser handling for nested list depth, image labels, visual asset metadata, and empty image suppression in src/data/source-map.ts
- [X] T007 Pass page slug and section context from src/pages/[...slug].astro into src/components/content/ContentBlock.astro
- [X] T008 Add reusable CSS primitives for section badges, full-width cards, visual panels, framed links, responsive grids, and nested roadmap lists in src/styles/global.css
- [X] T009 Update badge rendering variants for section and status labels in src/components/ui/StatusBadge.astro

**Checkpoint**: Foundation ready; user story implementation can now begin.

---

## Phase 3: User Story 1 - Renforcer la coherence visuelle des pages (Priority: P1) MVP

**Goal**: Improve visual coherence across existing public pages while preserving editorial content, navigation, and CTA meaning.

**Independent Test**: Compare the homepage and representative product/client pages before and after changes; verify the content remains source-derived and the visual rhythm is more consistent.

### Implementation for User Story 1

- [X] T010 [P] [US1] Update homepage shortcut entries to use Markdown links for `/produit/fonctionnalites`, `/cas-d-usage/pme`, `/tarifs`, and `/produit/securite` in edito/contenu/index.md
- [X] T011 [P] [US1] Rename the visible product feature CTA heading to "Demander une fonctionnalité" in edito/contenu/Produit/1 Fonctionnalités.md
- [X] T012 [P] [US1] Rename the visible PME CTA heading to "Commencer avec zzzbre" in edito/contenu/Cas d'usage/1 PME.md
- [X] T013 [US1] Render homepage Bénéfices as a three-item grid and homepage shortcuts as cards in src/pages/index.astro
- [X] T014 [US1] Add homepage grid, shortcut-card, and safe empty-image styles in src/styles/global.css
- [X] T015 [US1] Render page section surtitles as blue badges beside status badges in src/pages/[...slug].astro
- [X] T016 [US1] Apply section-badge and inline hero badge styling in src/styles/global.css
- [X] T017 [US1] Remove the visual separator between the feature page intro and first descriptive text block in src/components/content/ContentBlock.astro
- [X] T018 [US1] Render the clients study page hero label as "Étude de cas" for `/clients/etudes-de-cas` in src/pages/[...slug].astro
- [X] T019 [US1] Validate `/`, `/produit/fonctionnalites`, `/clients/etudes-de-cas`, `/produit/integrations`, and `/produit/api` against specs/002-page-appearance-polish/quickstart.md

**Checkpoint**: User Story 1 is independently shippable as the MVP visual coherence pass.

---

## Phase 4: User Story 2 - Ameliorer la lisibilite et le scan des contenus (Priority: P2)

**Goal**: Make dense product, pricing, support, contact, legal, and about pages easier to scan with cards, framed links, hierarchy, and corrected source nomenclature.

**Independent Test**: A reader can quickly find target information across at least five dense pages without confusing content, navigation, status, price, contact, or action elements.

### Implementation for User Story 2

- [X] T020 [P] [US2] Replace "Incubateur Nomades" with "Pépinière Nomades" in edito/contenu/Légal/Légal.md
- [X] T021 [P] [US2] Replace "Incubateur Nomades" with "Pépinière Nomades" in edito/contenu/Contact/Contact.md
- [X] T022 [US2] Replace "Incubateur Nomades" with "Pépinière Nomades" in edito/layout/2 Footer.md and src/data/navigation.ts
- [X] T023 [US2] Render nested roadmap levels with top-level domains, empty round markers, and child indentation in src/components/content/DataList.astro
- [X] T024 [US2] Add roadmap hierarchy and empty-marker styles in src/styles/global.css
- [X] T025 [US2] Render the security "Encadré visuel" as a full-width card with title, optional image, and description in src/components/content/ContentBlock.astro
- [X] T026 [US2] Group FAQ blocks as card grids on `/produit/securite` and `/tarifs` in src/pages/[...slug].astro
- [X] T027 [US2] Render the Tarifs "Accès libre" section as one explanatory panel plus three detail cards in src/components/content/ContentBlock.astro
- [X] T028 [US2] Render the Support documentation link as a button-style CTA in src/components/content/ContentBlock.astro
- [X] T029 [US2] Hide the duplicated Contact create-account block and render "Nous contacter" plus "Adresse" as cards in src/pages/[...slug].astro
- [X] T030 [US2] Render legal email and site values as framed links in src/components/content/ContentBlock.astro
- [X] T031 [US2] Render the À propos Équipe founder section as one card with "Fondateur" as a badge in src/pages/[...slug].astro
- [X] T032 [US2] Validate `/produit/securite`, `/tarifs`, `/support`, `/contact`, `/legal`, and `/a-propos/equipe` against specs/002-page-appearance-polish/quickstart.md

**Checkpoint**: User Story 2 is independently testable on dense content pages.

---

## Phase 5: User Story 3 - Preserver une experience soignee sur petits ecrans (Priority: P3)

**Goal**: Ensure the new cards, lists, badges, links, and CTAs remain usable and polished on small screens.

**Independent Test**: Browse the homepage and representative deep pages on a narrow viewport; verify content, navigation, cards, links, and CTAs remain accessible without overlap or unreadable truncation.

### Implementation for User Story 3

- [X] T033 [US3] Add responsive constraints for cards, panels, benefits, FAQ grids, and contact cards in src/styles/global.css
- [X] T034 [US3] Add long email, URL, title, and price wrapping rules for cards, framed links, and CTA containers in src/styles/global.css
- [X] T035 [US3] Ensure mobile CTA and navigation affordances remain visibly tappable in src/styles/global.css
- [X] T036 [US3] Verify mobile behavior for `/`, `/produit/securite`, `/tarifs`, `/contact`, and `/legal` against specs/002-page-appearance-polish/quickstart.md
- [X] T037 [US3] Confirm small-screen layouts do not hide source-critical statuses, prices, legal contacts, or security text using specs/002-page-appearance-polish/quickstart.md

**Checkpoint**: User Story 3 completes the responsive polish.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup across the feature.

- [X] T038 [P] Run the source consistency searches documented in specs/002-page-appearance-polish/quickstart.md for "Incubateur Nomades", "Pépinière Nomades", and "Call to action"
- [X] T039 [P] Verify public asset paths and missing-image behavior for public/Capture-droit-access.png against specs/002-page-appearance-polish/quickstart.md
- [X] T040 Run `npm run build` using package.json
- [X] T041 Run desktop manual route validation for all routes listed in specs/002-page-appearance-polish/quickstart.md
- [X] T042 Run mobile manual route validation for all routes listed in specs/002-page-appearance-polish/quickstart.md
- [X] T043 Review changed editorial files for publishable public copy using edito/AGENTS.md
- [X] T044 Review changed Astro files for no new dependency, no secret, and no third-party script impact using specs/002-page-appearance-polish/plan.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Foundational; recommended MVP.
- **User Story 2 (Phase 4)**: Depends on Foundational; can be developed after or beside US1, but same-file edits in `ContentBlock.astro`, `[...slug].astro`, and `global.css` should be sequenced.
- **User Story 3 (Phase 5)**: Depends on Foundational and benefits from US1/US2 visual components being present.
- **Polish (Phase 6)**: Depends on all selected stories being complete.

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2; no dependency on US2 or US3.
- **US2 (P2)**: Can start after Phase 2; independent in value but may share files with US1.
- **US3 (P3)**: Can start after Phase 2 but should finish after the card and panel variants from US1/US2 exist.

### Within Each User Story

- Apply editorial source edits before or alongside rendering changes that depend on them.
- Implement parser/data changes before component rendering changes.
- Implement component markup before final CSS refinement.
- Validate each story route set before moving to the next priority.

## Parallel Opportunities

- T002, T003, and T004 can run in parallel during Setup.
- T010, T011, and T012 can run in parallel because they edit separate editorial files.
- T020 and T021 can run in parallel because they edit separate editorial files.
- T038 and T039 can run in parallel during final validation.
- Different user stories may be staffed in parallel after Phase 2, but edits to `src/components/content/ContentBlock.astro`, `src/pages/[...slug].astro`, and `src/styles/global.css` must be coordinated.

## Parallel Example: User Story 1

```text
Task: "Update homepage shortcut entries to use Markdown links for `/produit/fonctionnalites`, `/cas-d-usage/pme`, `/tarifs`, and `/produit/securite` in edito/contenu/index.md"
Task: "Rename the visible product feature CTA heading to 'Demander une fonctionnalité' in edito/contenu/Produit/1 Fonctionnalités.md"
Task: "Rename the visible PME CTA heading to 'Commencer avec zzzbre' in edito/contenu/Cas d'usage/1 PME.md"
```

## Parallel Example: User Story 2

```text
Task: "Replace 'Incubateur Nomades' with 'Pépinière Nomades' in edito/contenu/Légal/Légal.md"
Task: "Replace 'Incubateur Nomades' with 'Pépinière Nomades' in edito/contenu/Contact/Contact.md"
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate the MVP route set from T019.

### Incremental Delivery

1. Deliver US1 for visual coherence and homepage/product/client polish.
2. Deliver US2 for dense content scan improvements and source nomenclature.
3. Deliver US3 for mobile polish and responsive confidence.
4. Run Phase 6 validation before final delivery.

### Quality Gate Strategy

1. Keep `edito/` source edits directly publishable.
2. Keep implementation inside the existing Astro structure.
3. Avoid dependencies, secrets, private data, and third-party scripts.
4. Run `npm run build` and quickstart route checks before marking the feature complete.

## Notes

- [P] tasks touch different files and can run in parallel.
- Story labels map tasks to the prioritized user stories in spec.md.
- Visual asset tasks must not invent screenshots; render assets only when valid public paths exist.
- Preserve source traceability for every visible text, link, status, price, contact, and legal value.
