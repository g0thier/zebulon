# Data Model: Result Consolidation

## Public Route File

**Description**: An Astro route file that owns a public URL and its final page
composition.

**Fields**:
- `route`: Public URL path such as `/`, `/produit/fonctionnalites`, or
  `/ressources/blog/motivation/[slug]`
- `pagePath`: Repository path under `src/pages/`
- `routeType`: `static` or `dynamic`
- `contentOwnerType`: `astro-page` or `content-collection`
- `layoutImports`: Layouts used to render the route
- `sharedDependencies`: Shared modules or components consumed by the route

**Validation Rules**:
- `pagePath` must live under `src/pages/`
- each `route` must map to exactly one authoritative route file
- static public routes must not rely on `heroHtml`/`bodyHtml` blobs as their
  long-term source of final user-facing copy

**Relationships**:
- references zero or more `Shared Shell Module` records
- for dynamic Motivation routes, renders one `Motivation Article Entry`

## Shared Shell Module

**Description**: A typed module that provides reusable site-wide structures
without owning full page-body content.

**Fields**:
- `modulePath`: Repository path such as `src/data/site-shell.ts`
- `concern`: `header`, `footer`, `sidebar`, `cta`, or `category-index`
- `exports`: Named exports used by routes or layouts
- `consumerRoutes`: Public routes or layouts that import the module

**Validation Rules**:
- shell modules may contain structured labels, hrefs, and shared metadata
- shell modules must not be the authoritative source for entire page markup
- navigation labels and links must stay coherent with the rendered routes

**Relationships**:
- consumed by one or more `Public Route File` records

## Motivation Article Entry

**Description**: A repeatable article entry in the Motivation series, authored
as Markdown content and rendered by the shared dynamic article route.

**Fields**:
- `id`: Stable content identifier
- `slug`: Public route segment
- `title`: User-facing title
- `subtitle`: User-facing subtitle or intro
- `category`: Parent blog category label
- `series`: Article series name
- `questionCount`: Structured numeric metadata used in article presentation
- `parentCategoryPath`: Link back to the category page
- `cta`: Optional article CTA metadata
- `body`: Markdown-authored article content
- `sourcePath`: Repository path under `src/content/blog/motivation/`

**Validation Rules**:
- `slug` must be unique across Motivation articles
- `sourcePath` must resolve inside the content collection directory
- article copy must remain directly publishable and free of internal notes
- parent category links and CTA targets must stay valid after migration

**Relationships**:
- rendered by the dynamic `Public Route File`
- may surface links defined in `Shared Shell Module` or category pages

## Content Ownership Audit Record

**Description**: Validation evidence showing which repository path owns a given
public surface after consolidation.

**Fields**:
- `surfaceId`: Human-readable identifier for the checked surface
- `publicHref`: Public route or route pattern under review
- `ownerPath`: Repository path identified as authoritative
- `ownerType`: `astro-page`, `content-collection`, or `shared-shell`
- `transitionalPaths`: Old or competing paths that must no longer control
  rendering
- `status`: `identified`, `migrated`, `validated`, or `closed`
- `validationEvidence`: Notes or commands proving the state

**Validation Rules**:
- every representative public surface must have exactly one active `ownerPath`
- transitional paths must be empty or explicitly marked inactive by the time the
  record reaches `validated`
- validation evidence must cover both source ownership and user-visible route
  behavior

**State Transitions**:
- `identified` -> `migrated` when the target owner is chosen and wired
- `migrated` -> `validated` after build and route checks pass
- `validated` -> `closed` when cleanup of old paths is complete
