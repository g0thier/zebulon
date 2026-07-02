# Tasks: Result Consolidation

**Input**: Design documents from `/specs/007-result-consolidation/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/`

**Tests**: No separate TDD or contract-test tasks are required by the spec. Validation is driven by `npm run build`, ownership audits, content review, and representative manual route checks.

**Organization**: Tasks are grouped by user story so each story stays independently implementable and testable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no blocking dependency)
- **[Story]**: Which user story this task belongs to (`[US1]`, `[US2]`, `[US3]`)
- Every task includes exact repository paths

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the working audit trail and implementation checklist for the consolidation

- [ ] T001 Create the consolidation audit workspace in `specs/007-result-consolidation/ownership-audit.md`
- [ ] T002 Inventory current public-route owners and transitional inputs in `specs/007-result-consolidation/ownership-audit.md` using `src/pages/`, `src/data/site-pages.ts`, `src/data/blog-articles.ts`, and `src/content.config.ts`
- [ ] T003 Capture the required quality gates and representative validation surfaces from `specs/007-result-consolidation/quickstart.md` in `specs/007-result-consolidation/ownership-audit.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Put the shared content and page-rendering foundations in place before story work

**⚠️ CRITICAL**: No user story work should begin until this phase is complete

- [ ] T004 Define the final Motivation collection schema in `src/content.config.ts` and the shared article field contract in `src/data/blog-articles.ts`
- [ ] T005 Refactor `src/data/blog-articles.ts` so public consumers no longer depend on `readFileSync` or `src/pages/ressources/blog/motivation/*.md`
- [ ] T006 Establish the Astro-native static page composition pattern in `src/layouts/PageLayout.astro`, `src/components/pages/HeroSection.astro`, and `src/components/pages/SharedPageSections.astro`

**Checkpoint**: Content collection and page composition foundations are ready

---

## Phase 3: User Story 1 - Clarifier les sources publiques (Priority: P1) 🎯 MVP

**Goal**: Make the authoritative source of representative public surfaces and Motivation articles obvious and unique

**Independent Test**: A maintainer can identify the source for `/`, `/produit/fonctionnalites`, `/ressources/blog`, `/ressources/blog/categories/leadership-et-engagement`, and `/ressources/blog/motivation/autodetermination` without traversing old transitional paths

- [ ] T007 [P] [US1] Move `src/pages/ressources/blog/motivation/attentes.md`, `src/pages/ressources/blog/motivation/autodetermination.md`, `src/pages/ressources/blog/motivation/besoins-acquis.md`, `src/pages/ressources/blog/motivation/besoins-de-maslow.md`, `src/pages/ressources/blog/motivation/equite.md`, `src/pages/ressources/blog/motivation/identite-pro.md`, `src/pages/ressources/blog/motivation/mimetisme.md`, and `src/pages/ressources/blog/motivation/theorie-x-y.md` into `src/content/blog/motivation/`
- [ ] T008 [US1] Update `src/pages/ressources/blog/motivation/[slug].astro` to build static paths and render article content from the collection-backed API in `src/data/blog-articles.ts`
- [ ] T009 [P] [US1] Update `src/pages/ressources/blog/index.astro` and `src/pages/ressources/blog/categories/leadership-et-engagement.astro` to consume collection-backed article summaries from `src/data/blog-articles.ts`
- [ ] T010 [P] [US1] Convert `src/pages/index.astro` from `getStaticPage("/")` to explicit Astro markup using `src/layouts/PageLayout.astro`, `src/components/content/EditorialCard.astro`, and `src/assets/Capture.png`
- [ ] T011 [P] [US1] Convert `src/pages/produit/fonctionnalites.astro` from `getStaticPage("/produit/fonctionnalites")` to explicit Astro markup using `src/layouts/PageLayout.astro` and `src/components/content/`
- [ ] T012 [US1] Record the authoritative owners for `/`, `/produit/fonctionnalites`, `/ressources/blog`, `/ressources/blog/categories/leadership-et-engagement`, and `/ressources/blog/motivation/[slug]` in `specs/007-result-consolidation/ownership-audit.md`
- [ ] T013 [US1] Run the representative source-discovery check from `specs/007-result-consolidation/quickstart.md` and capture the evidence in `specs/007-result-consolidation/ownership-audit.md`

**Checkpoint**: Representative public surfaces have one clear source of truth and can be audited independently

---

## Phase 4: User Story 2 - Nettoyer l'état transitoire (Priority: P2)

**Goal**: Remove or neutralize remaining transitional sources so contributors no longer edit the wrong place

**Independent Test**: An audit of active public routes and shared content shows no old Markdown-under-`src/pages` source and no remaining `site-pages.ts` page-body ownership for consolidated routes

- [ ] T014 [P] [US2] Convert `src/pages/tarifs.astro`, `src/pages/support.astro`, `src/pages/contact.astro`, `src/pages/legal.astro`, and `src/pages/clients/etudes-de-cas.astro` to explicit Astro markup instead of `src/data/site-pages.ts`
- [ ] T015 [P] [US2] Convert `src/pages/a-propos/carrieres.astro`, `src/pages/a-propos/equipe.astro`, `src/pages/a-propos/presse.astro`, `src/pages/cas-d-usage/grandes-entreprises.astro`, `src/pages/cas-d-usage/pme.astro`, and `src/pages/cas-d-usage/secteurs.astro` to explicit Astro markup instead of `src/data/site-pages.ts`
- [ ] T016 [P] [US2] Convert `src/pages/produit/api.astro`, `src/pages/produit/integrations.astro`, `src/pages/produit/securite.astro`, `src/pages/ressources/guides.astro`, `src/pages/ressources/webinaires.astro`, and `src/pages/ressources/documentation.astro` to explicit Astro markup instead of `src/data/site-pages.ts`
- [ ] T017 [P] [US2] Convert `src/pages/ressources/blog/categories/pilotage-pme.astro`, `src/pages/ressources/blog/categories/ateliers-et-decision.astro`, `src/pages/ressources/blog/categories/indicateurs-et-tableaux-de-bord.astro`, and `src/pages/ressources/blog/categories/ia-appliquee-au-management.astro` to explicit Astro markup instead of `src/data/site-pages.ts`
- [ ] T018 [US2] Remove obsolete static page registry code from `src/data/site-pages.ts` and drop any remaining raw-HTML rendering dependency from `src/components/pages/HeroSection.astro` and `src/components/pages/SharedPageSections.astro`
- [ ] T019 [US2] Delete the transitional Markdown route files under `src/pages/ressources/blog/motivation/` and close the retired-path findings in `specs/007-result-consolidation/ownership-audit.md`
- [ ] T020 [US2] Run the ownership audit commands from `specs/007-result-consolidation/quickstart.md` and record zero active transitional sources in `specs/007-result-consolidation/ownership-audit.md`

**Checkpoint**: Transitional public content sources are removed from the live rendering path

---

## Phase 5: User Story 3 - Préserver l'expérience publique après consolidation (Priority: P3)

**Goal**: Preserve routes, navigation, category links, and CTA behavior after the internal cleanup

**Independent Test**: The representative visitor journey across home, product, blog, category, and Motivation article pages still works with valid content and useful navigation

- [ ] T021 [P] [US3] Reconcile shared navigation and CTA references in `src/data/site-shell.ts` with the converted public route files under `src/pages/`
- [ ] T022 [P] [US3] Verify Motivation parent-category and discovery links in `src/pages/ressources/blog/motivation/[slug].astro`, `src/pages/ressources/blog/index.astro`, and `src/pages/ressources/blog/categories/leadership-et-engagement.astro`
- [ ] T023 [P] [US3] Adjust supporting presentation components and styles in `src/components/pages/ArticleSummaryCard.astro`, `src/components/content/ContentBlock.astro`, `src/components/content/DataList.astro`, `src/components/content/EditorialCard.astro`, `src/layouts/BlogArticleLayout.astro`, and `src/styles/global.css` to preserve route layout, card rendering, and CTA behavior after the ownership migration
- [ ] T024 [US3] Run the representative visitor-path validation from `specs/007-result-consolidation/quickstart.md` and record the results in `specs/007-result-consolidation/ownership-audit.md`
- [ ] T025 [US3] Run `npm run build` and record the final quality-gate result plus any residual risk in `specs/007-result-consolidation/ownership-audit.md`

**Checkpoint**: Public experience remains coherent after consolidation

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish cleanup, guidance, and final validation across all stories

- [ ] T026 [P] Remove unused exports and helper paths from `src/data/blog-articles.ts`, `src/content.config.ts`, `src/components/pages/HeroSection.astro`, `src/components/pages/SharedPageSections.astro`, and `src/data/site-pages.ts` after the migration settles
- [ ] T027 [P] Update contributor guidance in `AGENTS.md` and validation notes in `specs/007-result-consolidation/quickstart.md` if the final ownership workflow changed during implementation
- [ ] T028 Complete the end-to-end quickstart validation in `specs/007-result-consolidation/quickstart.md` and finalize the evidence in `specs/007-result-consolidation/ownership-audit.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1: Setup**: No dependencies
- **Phase 2: Foundational**: Depends on Phase 1 and blocks all user stories
- **Phase 3: US1**: Depends on Phase 2 and delivers the MVP
- **Phase 4: US2**: Depends on US1 because the representative authoritative-source flow should be stable before global cleanup
- **Phase 5: US3**: Depends on US1 and US2 because it validates the final public experience after the ownership migration
- **Phase 6: Polish**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Starts after the foundational collection/page-pattern refactor
- **US2 (P2)**: Starts after US1 establishes the target ownership model on representative routes
- **US3 (P3)**: Starts after US1 and US2 because it verifies the final route/navigation state

### Within Each User Story

- Move or define the authoritative content source before cleaning up the transitional path
- Update route consumers before deleting the old backing files
- Complete story-specific validation before marking the story complete

### Parallel Opportunities

- `T007`, `T010`, and `T011` can run in parallel once Phase 2 is complete
- `T014`, `T015`, `T016`, and `T017` can run in parallel by route section during US2
- `T021`, `T022`, and `T023` can run in parallel during US3
- `T026` and `T027` can run in parallel during Polish

---

## Parallel Example: User Story 1

```bash
Task: "Move Motivation Markdown files from src/pages/ressources/blog/motivation/ into src/content/blog/motivation/"
Task: "Convert src/pages/index.astro from getStaticPage(\"/\") to explicit Astro markup"
Task: "Convert src/pages/produit/fonctionnalites.astro from getStaticPage(\"/produit/fonctionnalites\") to explicit Astro markup"
```

## Parallel Example: User Story 2

```bash
Task: "Convert src/pages/tarifs.astro, src/pages/support.astro, src/pages/contact.astro, src/pages/legal.astro, and src/pages/clients/etudes-de-cas.astro to explicit Astro markup"
Task: "Convert src/pages/a-propos/*.astro and src/pages/cas-d-usage/*.astro to explicit Astro markup"
Task: "Convert src/pages/produit/*.astro and src/pages/ressources/{guides,webinaires,documentation}.astro to explicit Astro markup"
Task: "Convert remaining src/pages/ressources/blog/categories/*.astro files to explicit Astro markup"
```

## Parallel Example: User Story 3

```bash
Task: "Reconcile shared navigation and CTA references in src/data/site-shell.ts with converted route files"
Task: "Verify Motivation parent-category and discovery links in src/pages/ressources/blog/"
Task: "Adjust supporting presentation components and styles in src/components/ and src/styles/global.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate the representative source-discovery flow in `specs/007-result-consolidation/ownership-audit.md`
5. Stop for review before broad cleanup

### Incremental Delivery

1. Establish content collection and Astro-native page composition foundations
2. Deliver US1 for representative route ownership clarity
3. Deliver US2 for repository-wide cleanup of transitional sources
4. Deliver US3 for public route, CTA, and navigation verification
5. Finish with cross-cutting cleanup and full quickstart validation

### Parallel Team Strategy

1. One contributor handles the Motivation collection migration in `src/content.config.ts`, `src/data/blog-articles.ts`, and `src/pages/ressources/blog/`
2. One contributor converts static route groups away from `src/data/site-pages.ts`
3. One contributor validates shared navigation, presentation, and final quality gates

---

## Notes

- All tasks use the required checklist format
- No separate automated test-file tasks were added because the spec and plan call for build, audit, and manual validation instead
- `specs/007-result-consolidation/ownership-audit.md` is the implementation evidence record for authoritative-source checks and skipped-gate notes
