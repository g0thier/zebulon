# Tasks: Site vitrine Zzzbre

**Input**: Design documents from `/specs/001-zzzbre-showcase-site/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/`, `quickstart.md`

**Tests**: No automated TDD suite was requested. Validation tasks use `npm run build`, source-to-site audit, route checks, CTA/contact link checks, and manual viewport review from `quickstart.md`.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no dependency on incomplete tasks
- **[Story]**: User story label from `spec.md`
- All task descriptions include exact file paths

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the Astro application skeleton and project validation notes.

- [X] T001 Replace the starter Astro home implementation with a minimal site shell placeholder in `src/pages/index.astro`
- [X] T002 Create the global stylesheet for the showcase site baseline in `src/styles/global.css`
- [X] T003 Create the shared Astro site layout and import global styles in `src/layouts/SiteLayout.astro`
- [X] T004 [P] Create a source-to-site audit checklist for this feature in `specs/001-zzzbre-showcase-site/checklists/source-audit.md`
- [X] T005 [P] Create a route verification checklist from the route contract in `specs/001-zzzbre-showcase-site/checklists/route-audit.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the reusable data, collection, layout, and rendering primitives required by every user story.

**CRITICAL**: No user story work should begin until this phase is complete.

- [X] T006 Define shared `SourceTrace`, `Cta`, `ContentBlock`, `Card`, `EditorialPage`, `NavigationGroup`, and `Article` TypeScript types in `src/data/source-map.ts`
- [X] T007 Create the authoritative source registry with all `edito/structure.md`, `edito/contenu/**/*.md`, and `edito/layout/*.md` paths in `src/data/source-map.ts`
- [X] T008 Create normalized navigation data for header, footer, and sidebar from `edito/layout/1 Header.md`, `edito/layout/2 Footer.md`, and `edito/layout/3 Sidebar.md` in `src/data/navigation.ts`
- [X] T009 Configure the reusable `articles` content collection schema and loader for `edito/contenu/Ressources/Blog/Motivation/*.md` in `src/content.config.ts`
- [X] T010 [P] Create the reusable section wrapper component in `src/components/ui/Section.astro`
- [X] T011 [P] Create the reusable CTA link component with source-provided labels and URLs in `src/components/ui/CtaLink.astro`
- [X] T012 [P] Create the reusable status badge component for beta and development labels in `src/components/ui/StatusBadge.astro`
- [X] T013 [P] Create the reusable content block renderer with conditional empty-block omission in `src/components/content/ContentBlock.astro`
- [X] T014 [P] Create the reusable data/list renderer for source lists and FAQ entries in `src/components/content/DataList.astro`
- [X] T015 [P] Create the reusable editorial card renderer for source cards, prices, badges, metadata, and CTAs in `src/components/content/EditorialCard.astro`
- [X] T016 Create the data-driven site header component using `src/data/navigation.ts` in `src/components/layout/SiteHeader.astro`
- [X] T017 Create the data-driven site footer component using `src/data/navigation.ts` in `src/components/layout/SiteFooter.astro`
- [X] T018 Create the data-driven sidebar component using `src/data/navigation.ts` in `src/components/layout/Sidebar.astro`
- [X] T019 Wire `SiteHeader`, `SiteFooter`, and optional `Sidebar` slots into the shared layout in `src/layouts/SiteLayout.astro`

**Checkpoint**: Reusable source trace, navigation, content collection, layout, and display primitives are ready.

---

## Phase 3: User Story 1 - Comprendre la proposition Zzzbre (Priority: P1) MVP

**Goal**: A visitor can understand Zzzbre from the home page and global navigation using only source content from `edito/`.

**Independent Test**: Visit `/`, confirm the first screen shows the Zzzbre brand, source-derived promise, benefits, and account CTA, then use navigation to reach every top-level section.

### Implementation for User Story 1

- [X] T020 [US1] Normalize the home page content from `edito/contenu/index.md` into `src/data/editorial-pages.ts`
- [X] T021 [US1] Normalize top-level page route entries from `edito/structure.md` into `src/data/editorial-pages.ts`
- [X] T022 [US1] Implement the home page hero, benefit sections, and account CTA from normalized data in `src/pages/index.astro`
- [X] T023 [US1] Render the global header links for Accueil, Produit, Cas d'usage, Tarifs, Ressources, Clients, A propos, Support, Contact, and Legal in `src/components/layout/SiteHeader.astro`
- [X] T024 [US1] Render source-derived footer section links and account CTA in `src/components/layout/SiteFooter.astro`
- [X] T025 [US1] Add responsive navigation behavior and small-screen layout rules in `src/styles/global.css`
- [X] T026 [US1] Verify home and navigation source fidelity against `edito/contenu/index.md`, `edito/structure.md`, and `edito/layout/1 Header.md` using `specs/001-zzzbre-showcase-site/checklists/source-audit.md`
- [X] T027 [US1] Run `npm run build` for the home and navigation increment using `package.json`

**Checkpoint**: User Story 1 is independently functional and ready for MVP review.

---

## Phase 4: User Story 2 - Explorer un besoin ou un profil d'entreprise (Priority: P2)

**Goal**: A prospect can evaluate product capabilities, use cases, pricing, security, and legal confidence without invented or softened source copy.

**Independent Test**: Visit `/produit/fonctionnalites`, `/cas-d-usage/pme`, `/tarifs`, `/produit/securite`, and `/legal`; confirm beta statuses, pricing, roles, permissions, contacts, and limits match the source files.

### Implementation for User Story 2

- [X] T028 [P] [US2] Normalize product pages from `edito/contenu/Produit/1 Fonctionnalités.md`, `edito/contenu/Produit/2 Intégrations.md`, `edito/contenu/Produit/3 API.md`, and `edito/contenu/Produit/4 Sécurité.md` into `src/data/editorial-pages.ts`
- [X] T029 [P] [US2] Normalize use-case pages from `edito/contenu/Cas d'usage/1 PME.md`, `edito/contenu/Cas d'usage/2 Grandes entreprises.md`, and `edito/contenu/Cas d'usage/3 Secteurs.md` into `src/data/editorial-pages.ts`
- [X] T030 [P] [US2] Normalize pricing page offers, limits, prices, users, FAQs, and CTAs from `edito/contenu/Tarifs/Tarifs.md` into `src/data/editorial-pages.ts`
- [X] T031 [P] [US2] Normalize legal page content and contacts from `edito/contenu/Légal/Légal.md` into `src/data/editorial-pages.ts`
- [X] T032 [US2] Implement `getStaticPaths()` and generic editorial page rendering for normalized page entries in `src/pages/[...slug].astro`
- [X] T033 [US2] Render product beta and in-development statuses with `StatusBadge` in `src/pages/[...slug].astro`
- [X] T034 [US2] Render pricing cards, offer limits, FAQ entries, and pricing CTAs from source data in `src/pages/[...slug].astro`
- [X] T035 [US2] Render security, roles, permissions, access, confidentiality, and legal sections from source data in `src/pages/[...slug].astro`
- [X] T036 [US2] Verify US2 route coverage against `specs/001-zzzbre-showcase-site/contracts/route-contract.md` using `specs/001-zzzbre-showcase-site/checklists/route-audit.md`
- [X] T037 [US2] Verify product, use-case, pricing, security, and legal source fidelity against `edito/contenu/Produit/`, `edito/contenu/Cas d'usage/`, `edito/contenu/Tarifs/Tarifs.md`, and `edito/contenu/Légal/Légal.md` using `specs/001-zzzbre-showcase-site/checklists/source-audit.md`
- [X] T038 [US2] Run `npm run build` for the product, use-case, pricing, security, and legal increment using `package.json`

**Checkpoint**: User Story 2 can be reviewed independently after the foundational route renderer exists.

---

## Phase 5: User Story 3 - Acceder aux ressources et contacter Zzzbre (Priority: P3)

**Goal**: A visitor can reach resources, Motivation articles, support, sidebar help, footer contacts, and contact paths from source content.

**Independent Test**: Visit `/ressources/blog`, a Motivation article route, `/support`, and `/contact`; confirm resource links, article fields, support contacts, footer contacts, sidebar links, and email links match `edito/`.

### Implementation for User Story 3

- [X] T039 [P] [US3] Normalize resource index pages from `edito/contenu/Ressources/1 Blog.md`, `edito/contenu/Ressources/2 Guides.md`, `edito/contenu/Ressources/3 Webinaires.md`, and `edito/contenu/Ressources/4 Documentation.md` into `src/data/editorial-pages.ts`
- [X] T040 [P] [US3] Normalize resource category pages from `edito/contenu/Ressources/Blog/Categories/*.md` into `src/data/editorial-pages.ts`
- [X] T041 [P] [US3] Normalize clients, about, support, and contact pages from `edito/contenu/Clients/Études de cas.md`, `edito/contenu/À propos/1 Équipe.md`, `edito/contenu/À propos/2 Carrières.md`, `edito/contenu/À propos/3 Presse.md`, `edito/contenu/Support/Support.md`, and `edito/contenu/Contact/Contact.md` into `src/data/editorial-pages.ts`
- [X] T042 [US3] Implement article static paths from the `articles` collection in `src/pages/ressources/blog/motivation/[slug].astro`
- [X] T043 [US3] Render article title, subtitle, status, question count, category, sections, lists, CTA, and source trace in `src/pages/ressources/blog/motivation/[slug].astro`
- [X] T044 [US3] Link the Leadership et engagement category page to the eight Motivation article routes in `src/pages/[...slug].astro`
- [X] T045 [US3] Render support, documentation, contact, press, legal, address, and email CTAs from source data in `src/pages/[...slug].astro`
- [X] T046 [US3] Render sidebar help and conversion links from `edito/layout/3 Sidebar.md` in `src/components/layout/Sidebar.astro`
- [X] T047 [US3] Verify all eight Motivation article routes from `specs/001-zzzbre-showcase-site/contracts/route-contract.md` using `specs/001-zzzbre-showcase-site/checklists/route-audit.md`
- [X] T048 [US3] Verify resources, articles, support, sidebar, footer, and contact source fidelity against `edito/contenu/Ressources/`, `edito/contenu/Support/Support.md`, `edito/contenu/Contact/Contact.md`, and `edito/layout/3 Sidebar.md` using `specs/001-zzzbre-showcase-site/checklists/source-audit.md`
- [X] T049 [US3] Run `npm run build` for the resources, articles, support, contact, footer, and sidebar increment using `package.json`

**Checkpoint**: All user stories are independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate the full public showcase and remove starter or placeholder artifacts.

- [X] T050 [P] Remove unused starter Astro assets and components from `src/components/Welcome.astro`, `src/assets/astro.svg`, and `src/assets/background.svg`
- [X] T051 [P] Review the public pages for visible placeholder, internal note, or invented copy and record findings in `specs/001-zzzbre-showcase-site/checklists/source-audit.md`
- [X] T052 Run the full quickstart validation scenarios in `specs/001-zzzbre-showcase-site/quickstart.md`
- [X] T053 Run `npm run build` for the complete feature using `package.json`
- [X] T054 Start the local server with `astro dev --background`, check `astro dev status`, and record the served URL in `specs/001-zzzbre-showcase-site/checklists/route-audit.md`
- [X] T055 Perform mobile viewport review for `/`, `/tarifs`, `/ressources/blog`, and one Motivation article and record findings in `specs/001-zzzbre-showcase-site/checklists/route-audit.md`
- [X] T056 Verify all account, pricing, documentation, contact, support, press, legal, and email links from `edito/layout/` and `edito/contenu/` in `specs/001-zzzbre-showcase-site/checklists/route-audit.md`
- [X] T057 Stop the background dev server with `astro dev stop` after manual review and record completion in `specs/001-zzzbre-showcase-site/checklists/route-audit.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies, can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion and blocks all user story work.
- **User Story 1 (Phase 3)**: Depends on Foundational completion and delivers the MVP.
- **User Story 2 (Phase 4)**: Depends on Foundational completion; can be implemented after or in parallel with US1 if capacity allows.
- **User Story 3 (Phase 5)**: Depends on Foundational completion; can be implemented after or in parallel with US1/US2 if capacity allows.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1 (P1)**: No dependency on US2 or US3 after Foundational.
- **US2 (P2)**: No dependency on US3; uses the shared editorial route renderer from Foundational.
- **US3 (P3)**: No dependency on US2; uses the shared editorial route renderer and `articles` collection from Foundational.

### Within Each User Story

- Normalize source data before rendering routes or components.
- Render public pages from normalized data before source-to-site audits.
- Run story-specific build and route checks before marking the story complete.
- Record any missing, empty, or ambiguous source field as an audit finding instead of adding public filler copy.

## Parallel Opportunities

- T004 and T005 can run in parallel with T001-T003 after the feature docs are available.
- T010-T015 can run in parallel because each creates an independent reusable component.
- T028-T031 can run in parallel because each normalizes a separate US2 source family.
- T039-T041 can run in parallel because each normalizes a separate US3 source family.
- US1, US2, and US3 can proceed in parallel after Phase 2 if different contributors own each story.
- T050 and T051 can run in parallel during final polish.

## Parallel Example: User Story 1

```bash
Task: "T020 [US1] Normalize the home page content from edito/contenu/index.md into src/data/editorial-pages.ts"
Task: "T023 [US1] Render the global header links for Accueil, Produit, Cas d'usage, Tarifs, Ressources, Clients, A propos, Support, Contact, and Legal in src/components/layout/SiteHeader.astro"
Task: "T024 [US1] Render source-derived footer section links and account CTA in src/components/layout/SiteFooter.astro"
```

## Parallel Example: User Story 2

```bash
Task: "T028 [P] [US2] Normalize product pages from edito/contenu/Produit/*.md into src/data/editorial-pages.ts"
Task: "T029 [P] [US2] Normalize use-case pages from edito/contenu/Cas d'usage/*.md into src/data/editorial-pages.ts"
Task: "T030 [P] [US2] Normalize pricing page offers, limits, prices, users, FAQs, and CTAs from edito/contenu/Tarifs/Tarifs.md into src/data/editorial-pages.ts"
Task: "T031 [P] [US2] Normalize legal page content and contacts from edito/contenu/Légal/Légal.md into src/data/editorial-pages.ts"
```

## Parallel Example: User Story 3

```bash
Task: "T039 [P] [US3] Normalize resource index pages from edito/contenu/Ressources/*.md into src/data/editorial-pages.ts"
Task: "T040 [P] [US3] Normalize resource category pages from edito/contenu/Ressources/Blog/Categories/*.md into src/data/editorial-pages.ts"
Task: "T041 [P] [US3] Normalize clients, about, support, and contact pages into src/data/editorial-pages.ts"
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 setup tasks.
2. Complete Phase 2 foundational data, collection, layout, and component tasks.
3. Complete Phase 3 User Story 1.
4. Stop and validate `/`, global navigation, source fidelity, responsive navigation, and `npm run build`.

### Incremental Delivery

1. Deliver US1 as the public home and global navigation MVP.
2. Add US2 product, use-case, pricing, security, and legal evaluation pages.
3. Add US3 resources, articles, support, sidebar, and contact flows.
4. Run Phase 6 polish and full quickstart validation.

### Parallel Team Strategy

1. Complete Setup and Foundational together.
2. Assign US1, US2, and US3 to separate contributors after Phase 2.
3. Require each story owner to complete source fidelity, route, and build validation before integration review.

## Notes

- Preserve `edito/` as the authoritative public content source.
- Use Astro-first pages, layouts, components, content collections, and CSS.
- Do not add copy, claims, prices, statuses, contacts, or customer stories absent from `edito/`.
- Omit empty source blocks publicly and record missing content for editorial correction.
