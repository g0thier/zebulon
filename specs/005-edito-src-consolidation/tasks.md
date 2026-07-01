# Tasks: Consolidation edito src

**Input**: Design documents from `/specs/005-edito-src-consolidation/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/content-routing-contract.md`

**Tests**: No dedicated automated test tasks are generated because the feature specification does not require TDD. Validation relies on `npm run build`, route checks, layout checks, and `edito/` reference audits documented in `quickstart.md`.

**Organization**: Tasks are grouped by user story so each increment can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (`US1`, `US2`, `US3`)
- Every task includes exact file paths

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the target structure and shared shells needed by the migration

- [ ] T001 Create the migrated content directory structure under `src/content/editorial/home/`, `src/content/editorial/pages/`, `src/content/editorial/blog/categories/`, `src/content/editorial/blog/motivation/`, `src/content/editorial/layout/`, and `src/content/editorial/structure/`
- [ ] T002 Update `src/content.config.ts` to declare collection/loading entry points for migrated pages, articles, layout records, and site structure records
- [ ] T003 [P] Create `src/layouts/EditorialPageLayout.astro` and `src/layouts/BlogArticleLayout.astro` from the layout strategy in `specs/005-edito-src-consolidation/plan.md`
- [ ] T004 [P] Create `src/pages/ressources/blog/motivation/[slug].astro` as the dedicated dynamic route shell for Motivation articles

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Replace legacy loading assumptions before migrating any story-specific content

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Refactor `src/data/source-map.ts` to load migrated `src/content/editorial/**` records and expose source-key-based page, article, layout, and route parsers
- [ ] T006 [P] Refactor `src/data/editorial-pages.ts` to assemble page entries, article entries, and route records from migrated content collections
- [ ] T007 [P] Refactor `src/data/navigation.ts` to build header, footer, and sidebar data from migrated layout and structure records
- [ ] T008 Update `src/pages/index.astro` and `src/pages/[...slug].astro` to consume the new shared page/article access layer from `src/data/editorial-pages.ts`
- [ ] T009 Add build-time slug and internal-link validation helpers in `src/data/source-map.ts` and `src/data/navigation.ts` for later route and parity audits

**Checkpoint**: Migrated content can be loaded from `src/` and consumed by routes without relying on the old loader shape

---

## Phase 3: User Story 1 - Preserver toutes les pages publiques (Priority: P1) 🎯 MVP

**Goal**: Keep the full public site accessible with the same slugs, navigation, content structure, and blog article paths after the content source moves into `src/`

**Independent Test**: Run `npm run build`, then verify `/`, representative content pages, blog category pages, `/ressources/blog/motivation/theorie-x-y`, header, footer, and sidebar using the checks in `specs/005-edito-src-consolidation/quickstart.md`

### Implementation for User Story 1

- [ ] T010 [P] [US1] Migrate homepage and general page markdown from `edito/contenu/index.md` and `edito/contenu/{Produit,Cas d'usage,Tarifs,Ressources,Clients,À propos,Support,Contact,Légal}` into `src/content/editorial/home/index.md` and `src/content/editorial/pages/**`
- [ ] T011 [P] [US1] Migrate shared layout and structure markdown from `edito/layout/1 Header.md`, `edito/layout/2 Footer.md`, `edito/layout/3 Sidebar.md`, and `edito/structure.md` into `src/content/editorial/layout/header.md`, `src/content/editorial/layout/footer.md`, `src/content/editorial/layout/sidebar.md`, and `src/content/editorial/structure/site-structure.md`
- [ ] T012 [P] [US1] Migrate blog category and Motivation article markdown from `edito/contenu/Ressources/Blog/**` into `src/content/editorial/blog/categories/**` and `src/content/editorial/blog/motivation/**`
- [ ] T013 [US1] Update `src/components/layout/SiteHeader.astro`, `src/components/layout/SiteFooter.astro`, and `src/components/layout/Sidebar.astro` to render migrated shared navigation and contact content
- [ ] T014 [US1] Update `src/layouts/SiteLayout.astro` and `src/layouts/EditorialPageLayout.astro` to preserve hero/body composition for migrated homepage, page, and category records
- [ ] T015 [US1] Update `src/pages/index.astro` and `src/pages/[...slug].astro` to serve all existing homepage, page, and blog category routes from `src/content/editorial/`
- [ ] T016 [US1] Update `src/layouts/BlogArticleLayout.astro` and `src/pages/ressources/blog/motivation/[slug].astro` to render Motivation articles with stable slugs and parent-category links
- [ ] T017 [US1] Align `src/components/content/ContentBlock.astro`, `src/components/content/DataList.astro`, `src/components/content/EditorialCard.astro`, `src/components/ui/CtaLink.astro`, and `src/components/ui/StatusBadge.astro` with migrated content block, card, and CTA data
- [ ] T018 [US1] Validate public parity with `npm run build` and the representative route and navigation checks in `specs/005-edito-src-consolidation/quickstart.md`

**Checkpoint**: The public site renders from `src/content/editorial/` with stable slugs, working navigation, and functioning Motivation article routes

---

## Phase 4: User Story 2 - Rendre le contenu maintenable depuis src (Priority: P2)

**Goal**: Make `src/` the clear, maintainable place to update page content, shared navigation, and blog articles without consulting `edito/`

**Independent Test**: Edit one representative page file, one shared layout file, and one article file in `src/content/editorial/`, rerun `npm run build`, and confirm the updated content is reflected without referring back to `edito/`

### Implementation for User Story 2

- [ ] T019 [P] [US2] Replace remaining runtime `sourcePath` assumptions with stable content keys and slugs in `src/data/source-map.ts` and `src/data/editorial-pages.ts`
- [ ] T020 [P] [US2] Normalize migrated internal link resolution and asset resolution in `src/data/source-map.ts` and `src/content.config.ts`
- [ ] T021 [US2] Simplify shared navigation assembly around migrated layout records in `src/data/navigation.ts`, `src/components/layout/SiteHeader.astro`, `src/components/layout/SiteFooter.astro`, and `src/components/layout/Sidebar.astro`
- [ ] T022 [US2] Update contributor guidance in `AGENTS.md` and `.specify/memory/constitution.md` so `src/content/editorial/` replaces `edito/` as the editorial source of truth
- [ ] T023 [US2] Validate maintainability by applying representative edits in `src/content/editorial/home/index.md`, `src/content/editorial/layout/header.md`, and `src/content/editorial/blog/motivation/1 Theorie X-Y.md`, then rerunning `npm run build`

**Checkpoint**: A maintainer can update representative content directly in `src/content/editorial/` and the project guidance points to the new source of truth

---

## Phase 5: User Story 3 - Retirer edito sans risque (Priority: P3)

**Goal**: Remove the legacy `edito/` tree and any remaining runtime or governance dependency on it without breaking the site

**Independent Test**: Delete `edito/`, rerun `npm run build`, verify representative routes, and confirm `rg -n "edito/" src` returns no runtime dependency

### Implementation for User Story 3

- [ ] T024 [P] [US3] Remove legacy compatibility branches from `src/data/source-map.ts`, `src/data/editorial-pages.ts`, `src/data/navigation.ts`, and `src/content.config.ts` once `src/content/editorial/` is authoritative
- [ ] T025 [US3] Delete the legacy source tree under `edito/` after migrated-content parity passes
- [ ] T026 [US3] Sweep remaining `edito/` references in `AGENTS.md`, `.specify/memory/constitution.md`, `src/data/source-map.ts`, and `specs/005-edito-src-consolidation/quickstart.md` so no runtime or governance dependency remains
- [ ] T027 [US3] Run deletion-readiness validation with `npm run build`, `astro dev --background`, `astro dev status`, representative route checks, and `rg -n "edito/" src` using `specs/005-edito-src-consolidation/quickstart.md`

**Checkpoint**: `edito/` is gone, the site still builds and runs, and no runtime app code depends on the legacy folder

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish cleanup and capture final validation evidence across all stories

- [ ] T028 [P] Clean up obsolete route branches, migration comments, and style leftovers in `src/pages/index.astro`, `src/pages/[...slug].astro`, `src/pages/ressources/blog/motivation/[slug].astro`, and `src/styles/global.css`
- [ ] T029 Run the full end-to-end validation checklist in `specs/005-edito-src-consolidation/quickstart.md` and record any skipped gate or residual risk in `specs/005-edito-src-consolidation/plan.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1: Setup**: No dependencies, can start immediately
- **Phase 2: Foundational**: Depends on Phase 1 and blocks all story work
- **Phase 3: US1**: Depends on Phase 2
- **Phase 4: US2**: Depends on Phase 3 because maintainability work assumes the migrated `src/content/editorial/` source is already serving public routes
- **Phase 5: US3**: Depends on Phases 3 and 4 because deletion is only safe after parity and maintainability are confirmed
- **Phase 6: Polish**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: First deliverable and MVP once Foundational work is done
- **US2 (P2)**: Builds on the migrated source introduced by US1
- **US3 (P3)**: Final cutover and deletion step after US1 and US2

### Within Each User Story

- Migrate source files before rewiring renderers that depend on them
- Update data loaders before page/layout consumers that call them
- Complete story-specific validation before moving to the next priority
- Do not delete `edito/` until migrated parity and maintainability checks pass

---

## Parallel Opportunities

- **Setup**: `T003` and `T004` can run in parallel after `T001` and `T002`
- **Foundational**: `T006` and `T007` can run in parallel after `T005`
- **US1**: `T010`, `T011`, and `T012` can run in parallel; `T013` and `T017` can overlap once the migrated source files exist
- **US2**: `T019` and `T020` can run in parallel before `T021`
- **US3**: `T024` can run in parallel with the non-destructive parts of `T026` before `T025`
- **Polish**: `T028` can run in parallel with final validation prep before `T029`

---

## Parallel Example: User Story 1

```bash
Task: "Migrate homepage and general page markdown into src/content/editorial/home/index.md and src/content/editorial/pages/**"
Task: "Migrate shared layout and structure markdown into src/content/editorial/layout/*.md and src/content/editorial/structure/site-structure.md"
Task: "Migrate blog category and Motivation article markdown into src/content/editorial/blog/categories/** and src/content/editorial/blog/motivation/**"
```

## Parallel Example: User Story 2

```bash
Task: "Replace remaining runtime sourcePath assumptions in src/data/source-map.ts and src/data/editorial-pages.ts"
Task: "Normalize migrated internal link and asset resolution in src/data/source-map.ts and src/content.config.ts"
```

## Parallel Example: User Story 3

```bash
Task: "Remove legacy compatibility branches from src/data/source-map.ts, src/data/editorial-pages.ts, src/data/navigation.ts, and src/content.config.ts"
Task: "Sweep remaining edito references in AGENTS.md, .specify/memory/constitution.md, src/data/source-map.ts, and specs/005-edito-src-consolidation/quickstart.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Stop and validate public route parity before changing governance or deleting `edito/`

### Incremental Delivery

1. Deliver US1 to prove the public site runs from migrated `src/` content
2. Deliver US2 to make the new source maintainable and officially documented
3. Deliver US3 to remove `edito/` and complete the cutover
4. Finish with Phase 6 validation and cleanup

### Suggested MVP Scope

- **MVP**: Phase 1 + Phase 2 + Phase 3 (US1)
- **Second increment**: Phase 4 (US2)
- **Final increment**: Phase 5 (US3) + Phase 6

---

## Notes

- All tasks follow the required checklist format with IDs and file paths
- No automated test tasks were added because the specification favors build/manual validation over TDD
- `T025` is intentionally isolated because deleting `edito/` is a destructive step that must happen only after parity checks pass
- Keep the public French copy directly publishable throughout the migration
