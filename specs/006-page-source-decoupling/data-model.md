# Data Model: Page source decoupling

## Overview

The design replaces the current generic editorial page registry with explicit
Astro route ownership for all non-article pages, while preserving a small,
focused content model for dynamic blog articles.

## Entities

### 1. Astro Page Route

**Purpose**: Represents a public non-article page owned directly by a concrete
`.astro` file under `src/pages/`.

**Fields**:

- `routePath`: Public path such as `/tarifs` or
  `/ressources/blog/categories/leadership-et-engagement`.
- `routeFile`: Owning Astro file path in `src/pages/`.
- `layoutVariant`: Shared layout shell used by the route.
- `heroContent`: Hero copy and visual configuration owned by the route.
- `pageSections`: Ordered body sections rendered directly by the route or its
  route-local components.
- `sharedDependencies`: Shared shell or article-summary dependencies consumed by
  the route.

**Validation Rules**:

- Every current non-article public route must map to exactly one Astro file.
- `routePath` must stay stable for preserved public URLs.
- Hero and body sections must remain directly understandable from the route
  file and nearby components.

### 2. Shared Shell Content

**Purpose**: Represents the shared navigation, footer, sidebar, and related
contact or utility copy used across many pages.

**Fields**:

- `brand`: Brand label and homepage destination.
- `headerGroups`: Ordered header navigation groups.
- `footerColumns`: Ordered footer column groups.
- `footerContact`: Shared contact details.
- `sidebarSections`: Ordered sidebar groups and quick actions.

**Validation Rules**:

- Shared shell content must exist in exactly one authoritative app-native
  module or component-owned configuration set.
- Link labels and destinations must be non-empty.
- Shared shell consumers must not need to know any Markdown source path.

### 3. Blog Article Entry

**Purpose**: Represents a dynamic Motivation article stored as a Markdown entry
inside the retained article collection.

**Fields**:

- `slug`: Public article slug under `/ressources/blog/motivation/[slug]`.
- `title`: Public article title.
- `subtitle`: Optional supporting text.
- `category`: Category label, initially aligned with the Motivation series
  context.
- `series`: Optional series label.
- `summary`: Optional short listing description.
- `body`: Markdown article body rendered by Astro.
- `cta`: Optional article CTA.
- `parentCategoryPath`: Public route of the parent category page.

**Validation Rules**:

- `slug` must be unique within the article collection.
- `parentCategoryPath` must resolve to an explicit Astro category page.
- The article body must render without depending on the retired generic page
  parser.

### 4. Article Listing View

**Purpose**: Represents an explicit Astro page that lists or contextualizes
blog article entries, such as `/ressources/blog` or a blog category page.

**Fields**:

- `routePath`: Public listing route.
- `title`: Public listing title.
- `introContent`: Listing introduction and framing copy.
- `featuredArticles`: Ordered article summaries shown on the page.
- `staticSections`: Any fixed page sections not derived from article entries.

**Validation Rules**:

- The listing view must remain an explicit Astro route, not a Markdown page
  record.
- Article summaries shown must resolve to existing article entries.
- Listing-specific copy must be authoritative in the route or its local module.

### 5. Validation Audit Record

**Purpose**: Represents the audit evidence that the cutover removed page-level
Markdown dependencies while preserving public behavior.

**Fields**:

- `routeCoverage`: Set of routes checked during validation.
- `sourceAudit`: Result of dependency scans against route and shell code.
- `buildStatus`: Build pass/fail result.
- `manualReviewNotes`: Notes from representative route checks.

**Validation Rules**:

- The audit must include representative static pages, category pages, and
  dynamic article pages.
- The source audit must confirm that only article content remains Markdown-backed.

## Relationships

- One **Astro Page Route** can consume one **Shared Shell Content** definition.
- One **Astro Page Route** can embed many route-local section components.
- One **Article Listing View** can reference many **Blog Article Entries**.
- One **Blog Article Entry** belongs to one **Article Listing View** or parent
  category context.
- One **Validation Audit Record** covers many **Astro Page Routes** and
  **Blog Article Entries**.

## State Transitions

### Page Ownership Transition

1. `Markdown-backed page`: public page is sourced through the generic editorial
   registry.
2. `Explicit Astro route drafted`: public route has a dedicated `.astro` file.
3. `Shared dependencies localized`: route uses app-native shared shell and any
   route-local helpers.
4. `Validated Astro route`: route passes build and representative checks.

### Article Source Transition

1. `Generic parser article`: article is read through the broad editorial model.
2. `Focused collection article`: article lives in the dedicated blog article
   collection.
3. `Generated route`: article is produced by the dedicated dynamic route.
4. `Validated article`: article passes build and route checks.

## Migration Notes

- The design intentionally stops modeling all pages as generic block trees. For
  non-article pages, the Astro route becomes the primary model.
- Shared shell content remains centralized, but no longer requires a Markdown
  file format to be authoritative.
- Dynamic blog articles remain the sole Markdown-backed public content because
  they are the only repeatable page type that benefits clearly from collection
  generation.
