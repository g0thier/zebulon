# Research: Finitions d'apparence des pages

## Decision: Keep the current Astro page model and add targeted rendering rules

**Rationale**: The requested corrections are mostly presentation changes across
existing pages. Astro's file-based routing keeps `/` and dynamic content routes
already centralized in `src/pages/index.astro` and `src/pages/[...slug].astro`,
so the safest path is to improve the existing generic renderer rather than add
new route files. This follows the official Astro routing guidance for pages and
dynamic routes: https://docs.astro.build/en/guides/routing/

**Alternatives considered**: Creating route-specific Astro files for every
corrected page. Rejected because it would duplicate the generic source-driven
renderer and increase the risk of drifting away from `edito/`.

## Decision: Use Astro components for visual variants, not a new UI dependency

**Rationale**: The existing site already has `ContentBlock`, `EditorialCard`,
`DataList`, `CtaLink`, and `StatusBadge`. Astro components are the natural unit
for reusable HTML presentation and props-based variants. Official component
guidance supports keeping UI composition in `.astro` components:
https://docs.astro.build/en/basics/astro-components/

**Alternatives considered**: Add a component framework or a card/grid library.
Rejected because the polish is minor, the current components cover the needs,
and the constitution discourages unnecessary dependencies.

## Decision: Keep styling in global CSS with semantic classes and variants

**Rationale**: The current project has a single global stylesheet and simple
semantic class names. The visual changes are mostly layout variants, badges,
cards, framed links, visual panels, roadmap indentation, and responsive grids.
Astro's styling guide supports standard CSS and component-scoped/global styles;
the existing `src/styles/global.css` is sufficient:
https://docs.astro.build/en/guides/styling/

**Alternatives considered**: Introduce Tailwind or CSS modules. Rejected because
no scale or reuse need justifies a styling-system change for this phase.

## Decision: Treat empty image Markdown as absent until a real asset path exists

**Rationale**: The homepage source contains
`![Capture d'écran du produit]()` and the security page references
`Capture-droit-access.png`, but the repository currently only contains favicon
assets under `public/`. Rendering an empty or missing image would create a
broken visual. The implementation should render the image only when a usable
path exists and should support the requested asset once it is placed in
`public/` or referenced by the source.

**Alternatives considered**: Inventing or generating a product screenshot.
Rejected because the spec prohibits invented product evidence or unsourced
visual promises.

## Decision: Preserve editorial hierarchy from Markdown indentation for roadmap

**Rationale**: The roadmap source uses nested bullets to encode domains,
subtopics, and child items. The current parser flattens some nested structure.
The implementation should retain enough nesting metadata to render top-level
domains as parts and lower levels with empty round markers and indentation.

**Alternatives considered**: Hard-code the roadmap in the product page. Rejected
because it would break source traceability and make editorial updates harder.

## Decision: Render FAQ groups as cards when page context calls for it

**Rationale**: Security and pricing FAQ blocks are currently parsed as multiple
FAQ content blocks. The user explicitly wants those questions rendered as cards.
The renderer can group consecutive FAQ blocks within a page-level section into a
card grid without changing FAQ source text.

**Alternatives considered**: Rewrite FAQ source as `cards`. Rejected for now
because FAQ headings are semantically useful editorial input; rendering can
adapt them.

## Decision: Apply nomenclature corrections in `edito/` and navigation data

**Rationale**: "Incubateur Nomades" appears in legal, contact, and footer
sources plus generated navigation address data. The correction to "Pépinière
Nomades" is editorial nomenclature and must be reflected at the source of truth,
then verified with a full repository search.

**Alternatives considered**: Replace only the visible legal page output.
Rejected because other pages and footer would remain inconsistent.
