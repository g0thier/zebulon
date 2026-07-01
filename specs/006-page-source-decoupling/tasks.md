---

description: "Task list for implementing page source decoupling"
---

# Tasks: Page source decoupling

**Input**: Design documents from `/specs/006-page-source-decoupling/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: No new automated tests were explicitly requested in the feature specification. Validation tasks use `npm run build`, Astro dev checks, route audits, and representative manual verification from quickstart.md.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g. `US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `specs/` at repository root
- Paths below assume the current Astro project structure from `plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the feature workspace and align the repo with the new route-ownership model

- [X] T001 Capture the explicit route inventory and current Markdown-backed page sources in `specs/006-page-source-decoupling/plan.md` and `specs/006-page-source-decoupling/quickstart.md`
- [X] T002 Create the target route directories and shared page component directories under `src/pages/produit/`, `src/pages/cas-d-usage/`, `src/pages/ressources/blog/categories/`, `src/pages/clients/`, `src/pages/a-propos/`, and `src/components/pages/`
- [X] T003 [P] Create a dedicated shared shell data module scaffold in `src/data/site-shell.ts`
- [X] T004 [P] Create a focused blog article data module scaffold in `src/data/blog-articles.ts`
- [X] T005 Document the required quality gates for this feature in `specs/006-page-source-decoupling/quickstart.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared page and article infrastructure that every story depends on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Create a shared non-article page layout in `src/layouts/PageLayout.astro`
- [X] T007 [P] Refactor `src/components/layout/SiteHeader.astro`, `src/components/layout/SiteFooter.astro`, and `src/components/layout/Sidebar.astro` to read from `src/data/site-shell.ts`
- [X] T008 [P] Narrow `src/content.config.ts` to the retained dynamic article collection only
- [X] T009 [P] Implement article collection helpers in `src/data/blog-articles.ts` for list pages and `/ressources/blog/motivation/[slug].astro`
- [X] T010 Replace article-page dependencies on `src/data/editorial-pages.ts` and generic page helpers in `src/pages/ressources/blog/motivation/[slug].astro` and `src/layouts/BlogArticleLayout.astro`
- [X] T011 Create shared non-article page building blocks in `src/components/pages/HeroSection.astro`, `src/components/pages/SharedPageSections.astro`, and `src/components/pages/ArticleSummaryCard.astro`
- [X] T012 Verify foundational constraints in `src/content.config.ts`, `src/data/blog-articles.ts`, `src/data/site-shell.ts`, `src/layouts/PageLayout.astro`, and `src/pages/ressources/blog/motivation/[slug].astro` so only dynamic article content remains Markdown-backed

**Checkpoint**: Shared shell, page layout, and article collection infrastructure are ready for explicit page cutover

---

## Phase 3: User Story 1 - Rendre le code des pages lisible (Priority: P1) 🎯 MVP

**Goal**: Make each non-article public page readable and locally owned by an explicit Astro route

**Independent Test**: A maintainer can open `/`, one standard page, one special-composition page, and one category page and identify the page assembly point directly from the route file and nearby components without consulting a global editorial registry

### Implementation for User Story 1

- [X] T013 [P] [US1] Replace `src/pages/index.astro` with an explicit homepage implementation using `src/layouts/PageLayout.astro` and `src/components/pages/SharedPageSections.astro`
- [X] T014 [P] [US1] Create explicit product route files in `src/pages/produit/fonctionnalites.astro`, `src/pages/produit/integrations.astro`, `src/pages/produit/api.astro`, and `src/pages/produit/securite.astro`
- [X] T015 [P] [US1] Create explicit use-case route files in `src/pages/cas-d-usage/pme.astro`, `src/pages/cas-d-usage/grandes-entreprises.astro`, and `src/pages/cas-d-usage/secteurs.astro`
- [X] T016 [P] [US1] Create explicit company and utility route files in `src/pages/tarifs.astro`, `src/pages/support.astro`, `src/pages/contact.astro`, `src/pages/legal.astro`, `src/pages/clients/etudes-de-cas.astro`, `src/pages/a-propos/equipe.astro`, `src/pages/a-propos/carrieres.astro`, and `src/pages/a-propos/presse.astro`
- [X] T017 [P] [US1] Create explicit resources listing route files in `src/pages/ressources/blog/index.astro`, `src/pages/ressources/guides.astro`, `src/pages/ressources/webinaires.astro`, and `src/pages/ressources/documentation.astro`
- [X] T018 [P] [US1] Create explicit blog category route files in `src/pages/ressources/blog/categories/pilotage-pme.astro`, `src/pages/ressources/blog/categories/leadership-et-engagement.astro`, `src/pages/ressources/blog/categories/ateliers-et-decision.astro`, `src/pages/ressources/blog/categories/indicateurs-et-tableaux-de-bord.astro`, and `src/pages/ressources/blog/categories/ia-appliquee-au-management.astro`
- [X] T019 [US1] Move the special page-composition rules out of `src/pages/[...slug].astro` into the owning explicit route files and shared page components in `src/components/pages/`
- [X] T020 [US1] Remove the non-article catch-all route in `src/pages/[...slug].astro` after all explicit routes above are in place
- [X] T021 [US1] Validate the explicit-route MVP with `npm run build`, `astro dev --background`, and the quickstart checks for `/`, `/produit/fonctionnalites`, `/tarifs`, and `/ressources/blog/categories/leadership-et-engagement`

**Checkpoint**: Non-article public pages are owned by explicit Astro routes and are independently understandable from those route files

---

## Phase 4: User Story 2 - Decorreler le code des pages des sources editoriales (Priority: P2)

**Goal**: Remove structural runtime dependency on `src/content/editorial/` for non-article page code and shared shell code

**Independent Test**: Reading representative page routes and shared shell files shows no direct dependency on Markdown page, layout, or structure paths under `src/content/editorial/`

### Implementation for User Story 2

- [X] T022 [P] [US2] Replace header, footer, sidebar, and brand/navigation definitions in `src/data/navigation.ts` with app-native shell definitions in `src/data/site-shell.ts`
- [X] T023 [P] [US2] Migrate non-article page copy and section definitions out of `src/content/editorial/home/`, `src/content/editorial/pages/`, `src/content/editorial/layout/`, and `src/content/editorial/structure/` into the owning files under `src/pages/` and `src/components/pages/`
- [X] T024 [P] [US2] Reduce `src/data/source-map.ts` to article-only concerns or replace it with focused article helpers in `src/data/blog-articles.ts`
- [X] T025 [US2] Remove non-article page assembly from `src/data/editorial-pages.ts` and keep only article-related helpers required by blog pages
- [X] T026 [US2] Update `src/components/content/ContentBlock.astro`, `src/components/content/DataList.astro`, `src/components/content/EditorialCard.astro`, and `src/components/ui/CtaLink.astro` so non-article pages no longer depend on the generic editorial page DSL
- [X] T027 [US2] Delete or archive obsolete non-article Markdown sources under `src/content/editorial/home/`, `src/content/editorial/pages/`, `src/content/editorial/layout/`, and `src/content/editorial/structure/` once their authoritative content has moved
- [X] T028 [US2] Update runtime guidance in `README.md`, `.specify/memory/constitution.md`, and `specs/006-page-source-decoupling/quickstart.md` to reflect Astro-owned non-article pages and article-only Markdown usage
- [X] T029 [US2] Validate decoupling with `rg -n "editorial-pages|source-map|src/content/editorial/(home|pages|layout|structure)" src/pages src/layouts src/components src/data src/content.config.ts` and record any residual dependency to resolve

**Checkpoint**: Non-article routes and shared shell code no longer depend on `src/content/editorial/` as a runtime page source

---

## Phase 5: User Story 3 - Preserver l'experience publique (Priority: P3)

**Goal**: Preserve route parity, article rendering, and shared navigation quality after the cutover

**Independent Test**: Representative static pages, category pages, navigation surfaces, and Motivation article routes still render with expected slugs and useful content after removal of the old model

### Implementation for User Story 3

- [X] T030 [P] [US3] Align `/ressources/blog` and `/ressources/blog/categories/*` explicit pages with `src/data/blog-articles.ts` so article summaries, parent-category links, and article discovery remain intact
- [X] T031 [P] [US3] Preserve dynamic article route behavior in `src/pages/ressources/blog/motivation/[slug].astro` and `src/layouts/BlogArticleLayout.astro` after the page-model cleanup
- [X] T032 [US3] Remove any remaining obsolete runtime code paths in `src/data/source-map.ts`, `src/data/editorial-pages.ts`, `src/data/navigation.ts`, and `src/content.config.ts` that exist only to support the former generic editorial page model
- [X] T033 [US3] Run the representative route, shared shell, explicit route ownership, runtime source audit, and article collection checks from `specs/006-page-source-decoupling/quickstart.md`
- [X] T034 [US3] Record the final validation evidence and any residual risk in `specs/006-page-source-decoupling/plan.md` and `specs/006-page-source-decoupling/quickstart.md`

**Checkpoint**: The public site remains coherent, article pages still work, and the old page model has no residual runtime role

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish cleanup, verification, and final repo alignment

- [X] T035 [P] Remove dead files and stale imports left by the cutover in `src/content/editorial/`, `src/data/`, `src/layouts/`, and `src/pages/`
- [X] T036 Run `npm run build` and `astro dev --background` plus `astro dev status` as the final end-to-end validation for the feature
- [X] T037 Complete the full quickstart validation checklist in `specs/006-page-source-decoupling/quickstart.md`
- [X] T038 Record any skipped quality gate, manual-only review, or residual presentation risk in `specs/006-page-source-decoupling/plan.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on User Story 1 route ownership cutover because it removes the old page source model
- **User Story 3 (Phase 5)**: Depends on User Story 1 and User Story 2 because parity checks only make sense after the new route and source model are active
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - establishes the explicit route ownership MVP
- **User Story 2 (P2)**: Depends on the explicit routes from US1, then removes the old Markdown page dependency
- **User Story 3 (P3)**: Depends on US1 and US2 to verify public parity after the structural cutover

### Within Each User Story

- Shared route/layout infrastructure before route creation
- Explicit non-article routes before deleting `src/pages/[...slug].astro`
- Source decoupling before deleting non-article Markdown page sources
- Story-specific validation gates before marking the story complete

### Parallel Opportunities

- T003 and T004 can run in parallel during setup
- T007, T008, T009, and T011 can run in parallel during foundational work
- T014, T015, T016, T017, and T018 can run in parallel once `PageLayout.astro` and shared page components exist
- T022, T023, and T024 can run in parallel during US2
- T030 and T031 can run in parallel during US3

---

## Parallel Example: User Story 1

```bash
# Launch explicit route creation for separate route families together:
Task: "Create explicit product route files in src/pages/produit/fonctionnalites.astro, src/pages/produit/integrations.astro, src/pages/produit/api.astro, and src/pages/produit/securite.astro"
Task: "Create explicit use-case route files in src/pages/cas-d-usage/pme.astro, src/pages/cas-d-usage/grandes-entreprises.astro, and src/pages/cas-d-usage/secteurs.astro"
Task: "Create explicit company and utility route files in src/pages/tarifs.astro, src/pages/support.astro, src/pages/contact.astro, src/pages/legal.astro, src/pages/clients/etudes-de-cas.astro, src/pages/a-propos/equipe.astro, src/pages/a-propos/carrieres.astro, and src/pages/a-propos/presse.astro"
Task: "Create explicit resources listing route files in src/pages/ressources/blog/index.astro, src/pages/ressources/guides.astro, src/pages/ressources/webinaires.astro, and src/pages/ressources/documentation.astro"
Task: "Create explicit blog category route files in src/pages/ressources/blog/categories/pilotage-pme.astro, src/pages/ressources/blog/categories/leadership-et-engagement.astro, src/pages/ressources/blog/categories/ateliers-et-decision.astro, src/pages/ressources/blog/categories/indicateurs-et-tableaux-de-bord.astro, and src/pages/ressources/blog/categories/ia-appliquee-au-management.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirm explicit Astro route ownership on representative pages

### Incremental Delivery

1. Setup + Foundational → shared page/article infrastructure ready
2. Add User Story 1 → explicit routes become the owned page entry points
3. Add User Story 2 → old Markdown page dependencies are removed
4. Add User Story 3 → route/article parity is validated and dead code is removed
5. Finish with Polish → final cleanup and validation evidence

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: product and utility page routes from US1
   - Developer B: resources/category page routes from US1
   - Developer C: shared shell decoupling and article helper narrowing from US2
3. Team converges for validation and cleanup in US3 + Polish

---

## Notes

- [P] tasks = different files, no dependencies
- [USx] labels map each task to a specific user story for traceability
- Every task includes an actionable file path
- No automated tests were added because the feature specification did not require them
- Validation remains mandatory through `npm run build`, Astro dev checks, and the quickstart audits
