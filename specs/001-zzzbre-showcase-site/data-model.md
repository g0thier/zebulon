# Data Model: Site vitrine Zzzbre

## EditorialSource

Represents an authoritative file under `edito/`.

**Fields**
- `sourcePath`: project-relative path, required, unique
- `sourceType`: `structure` | `content` | `layout`
- `title`: display or file-derived title, required
- `rawMarkdown`: original source text, required for audit tooling/manual review
- `lastReviewed`: optional date if an editorial review process adds one later

**Validation Rules**
- `sourcePath` MUST start with `edito/`.
- Public site copy MUST be traceable to one or more `EditorialSource` records.
- Empty or ambiguous source content MUST produce an implementation note or
  development-only warning, never public filler copy.

## EditorialPage

Represents a public page generated from `edito/contenu/`.

**Fields**
- `slug`: public URL slug array or slash-separated string, required
- `sourcePath`: `EditorialSource.sourcePath`, required
- `section`: top-level section from `edito/structure.md`, required
- `title`: source-derived page title, required
- `subtitle`: source-derived subtitle, optional
- `intro`: source-derived accroche or first text block, optional
- `status`: source-derived beta/development/status label, optional
- `blocks`: array of `ContentBlock`, required, can be empty only if the source is
  intentionally empty
- `ctas`: array of `Cta`, optional
- `relatedLinks`: array of `LinkItem`, optional

**Relationships**
- Belongs to one `EditorialSource`.
- May contain many `ContentBlock`, `Card`, `DataList`, `Cta`, and `LinkItem`.
- May appear in `NavigationGroup` and `FooterColumn`.

**Validation Rules**
- `title`, `subtitle`, `intro`, `status`, `ctas`, and links MUST match the
  source value.
- Pages for beta or in-development content MUST preserve that status.
- Pages with no visible content MUST not generate invented replacement text.

## ContentBlock

Represents a section inside an editorial page.

**Fields**
- `heading`: source heading, optional
- `kind`: `text` | `list` | `cards` | `faq` | `contact` | `quote` | `media`
- `items`: array of strings or structured items, optional
- `text`: source paragraph text, optional
- `sourceLabel`: source marker such as `Texte`, `liste`, `cards`, optional
- `sourcePath`: source file path, required

**Validation Rules**
- Render only when `text` exists or `items.length > 0`.
- `sourceLabel` controls structure but is not necessarily public copy.
- Empty `items` arrays MUST be handled with conditionals.

## Card

Represents repeated card content from source `cards` lists.

**Fields**
- `title`: required
- `text`: optional
- `badge`: optional
- `price`: optional
- `meta`: optional key/value list
- `href`: optional
- `cta`: optional `Cta`
- `sourcePath`: required

**Validation Rules**
- No card can be created without a source entry.
- Missing optional fields are omitted rather than generated.

## NavigationGroup

Represents header, footer, or sidebar navigation from `edito/layout/`.

**Fields**
- `label`: required
- `type`: `link` | `accordion` | `column` | `sidebar-section`
- `href`: optional for direct links
- `items`: array of `LinkItem`, optional
- `sourcePath`: required

**Validation Rules**
- Navigation labels and links MUST match the layout source.
- Empty groups MUST not render as public dropdowns/sections.

## Article

Represents one reusable article entry. The first entries come from
`edito/contenu/Ressources/Blog/Motivation/`, but the model is intentionally
generic so future article folders can use the same collection.

**Fields**
- `id`: generated from file name or explicit slug, required
- `slug`: public URL segment, required
- `sourcePath`: required
- `heading`: source H3 heading, required
- `title`: `Titre` value, required
- `subtitle`: `Sous-titre` value, required
- `status`: `Statut` value, required
- `questionCount`: `Nombre de questions`, required number
- `category`: `Catégorie`, required
- `series`: optional source-derived series label, such as `Motivation`
- `sections`: array of `ContentBlock`, required
- `cta`: optional `Cta`

**Relationships**
- Belongs to the `articles` Astro content collection.
- Linked from the `Leadership et engagement` category page.

**Validation Rules**
- Schema MUST require title, subtitle, status, question count, category, and
  source path.
- Article order SHOULD follow filename numeric prefixes from the source when
  they exist.
- Missing article lists should render no list, not filler.

## Cta

Represents a call to action or contact action.

**Fields**
- `label`: required
- `href`: required
- `sourcePath`: required
- `kind`: `account` | `pricing` | `documentation` | `contact` | `support` |
  `press` | `legal`

**Validation Rules**
- External account link remains `https://zzzbre.com/login` unless the editorial
  source changes.
- Email CTAs use the exact source email address.

## State / Flow Notes

- Source file exists -> normalized data entry -> page/component rendering ->
  source-to-site audit.
- Source field missing -> public block omitted or development warning -> editor
  correction path.
- Source status changes -> normalized data updates -> visible status updates
  without copy generation.
