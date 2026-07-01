# Research: Site vitrine Zzzbre

## Decision: Use Astro file-based routing with explicit home and dynamic content routes

**Rationale**: Astro generates URLs from files in `src/pages/`, and dynamic route
filenames can generate multiple pages through `getStaticPaths()`. This matches
the `edito/structure.md` tree without maintaining a separate router. The home
page remains explicit at `src/pages/index.astro`; editorial pages can use
`src/pages/[...slug].astro`; Motivation articles can use a focused dynamic route
at `src/pages/ressources/blog/motivation/[slug].astro`.

**Alternatives considered**:
- One `.astro` file per editorial page: simple but repetitive and harder to keep
  aligned with `edito/structure.md`.
- Client-side router: unnecessary for a static showcase site and adds avoidable
  JavaScript.

## Decision: Keep `edito/` as source of truth and normalize into `src/data/`

**Rationale**: The user requires strict transcription from `edito/` and no AI
invention. Normalized data modules can provide concise arrays and objects for
pages, navigation, cards, lists, and CTAs while retaining `sourcePath` metadata
for audits. The implementation may parse or manually normalize source structures,
but visible public values must stay source-equivalent.

**Alternatives considered**:
- Move all Markdown into `src/content/`: convenient for Astro but weakens the
  requirement that `edito/` remains authoritative.
- Render raw Markdown files directly: preserves source text but makes cards,
  navigation, conditionals, and layouts harder to reuse consistently.

## Decision: Use a reusable Astro content collection named `articles`

**Rationale**: Astro content collections organize related local Markdown entries,
provide schema validation, and support typed queries/rendering. The first source
folder is `edito/contenu/Ressources/Blog/Motivation/*.md`, but the collection
name must be generic because the same article formula will be reused for future
resource folders. A collection named `articles` should load the Motivation files
first, preserve a `sourcePath` and `category`, and validate extracted frontmatter
or normalized metadata with Zod.

**Alternatives considered**:
- Treat Motivation articles as ordinary page data only: possible, but loses the
  type safety and route generation benefits of content collections.
- Use a Motivation-specific collection name: clear for the first folder, but too
  narrow for the intended reusable article model.
- Create collections for every editorial page immediately: useful later, but too
  broad for the first implementation.

## Decision: Use reusable Astro components with props for repeated display patterns

**Rationale**: Cards, data lists, CTA links, status badges, sections, header,
footer, and sidebar repeat across the site. Astro components are HTML-first,
render without client-side runtime by default, and accept props for reusable UI
patterns. This supports strict content fidelity because components receive data
rather than creating copy.

**Alternatives considered**:
- Duplicate markup in every page: faster initially but fragile for audits and
  future updates.
- Add a UI framework: unnecessary for content-focused static pages.

## Decision: Use arrays and conditionals for concise rendering

**Rationale**: Many `edito/` files contain cards, lists, articles, contacts, FAQ
items, or CTAs. Representing these as arrays allows concise `.map()` rendering.
When an array is empty or missing, components must omit the related section or
show an editorial-review-only warning during development, never generate filler
public content.

**Alternatives considered**:
- Hard-code every item into page templates: duplicates source data and makes
  source-to-site auditing harder.
- Always render empty sections: risks visible placeholders and violates the
  no-invention requirement.

## Decision: Use CSS in Astro without adding styling dependencies

**Rationale**: Astro supports component-scoped styles and imported global
stylesheets. A restrained `src/styles/global.css` plus component-local styles is
enough for a polished SaaS showcase and avoids dependency churn.

**Alternatives considered**:
- Add Tailwind or another design dependency: useful in some projects but not
  required for this content-first build.

## Decision: Validation centers on traceability, build, navigation, and manual UX checks

**Rationale**: The highest project risk is invented or altered content, followed
by broken navigation/CTA routes. Validation must include a source-to-site audit,
`npm run build`, dynamic route verification, all CTA/contact link checks, mobile
review, and manual user journeys from the spec.

**Alternatives considered**:
- Automated unit tests only: insufficient because fidelity to editorial source
  and visual/navigation behavior need review.

## References Consulted

- Astro Routing: https://docs.astro.build/en/guides/routing/
- Astro Components: https://docs.astro.build/en/basics/astro-components/
- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Astro Styling: https://docs.astro.build/en/guides/styling/
