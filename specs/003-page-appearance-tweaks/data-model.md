# Data Model: Ajustements visuels mineurs des pages

## EditorialPage

Represents one public page derived from an authoritative Markdown source.

**Fields**

- `slug`: public route path without leading slash.
- `sourcePath`: source file under `edito/`.
- `section`: high-level page family, such as Produit, Tarifs, Contact, or Légal.
- `title`, `subtitle`, `intro`, `status`: hero and page-level content.
- `blocks`: ordered content sections parsed from source.
- `ctas`: page-level action links.
- `visual`: optional page-level image asset.

**Validation Rules**

- `/` must display `src/assets/Capture.png` before the "Bénéfices" content.
- Page content order must stay source-derived unless the correction explicitly
  requests a presentation extraction, such as moving "Nous contacter" above its
  card details.
- No route outside the requested six pages should receive route-specific visual
  behavior unless it uses an existing shared component safely.

## ContentBlock

Represents one source section such as "Bénéfices", "FAQ", "L'Équipe", "Nous
contacter", "Adresse", "Mentions légales", or "Site".

**Fields**

- `heading`: visible section heading from source.
- `kind`: content hint, such as text, list, cards, faq, contact, quote, or media.
- `text`: paragraphs from source labels or free text.
- `fields`: labelled values such as Email principal, Site, Contact légal, or
  Support.
- `lists`: bullet lists and link lists.
- `cards`: repeated card entries.
- `ctas`: action links extracted from source.
- `sourcePath`: authoritative Markdown source.

**Validation Rules**

- "Bénéfices" must render as a peer section heading on `/`.
- FAQ grouping for `/produit/securite` and `/tarifs` must emit one visible FAQ
  heading, not two consecutive FAQ titles.
- "L'Équipe" must render outside the founder card while the founder role/content
  remains carded.
- "Nous contacter" and its introductory paragraph must render outside the
  contact card while email/reasons remain readable below.
- "Site" on `/legal` must render as a peer section heading comparable to
  "Mentions légales" and "Accès au site et à la plateforme".

## VisualAsset

Represents a local screenshot used as a visible product or account image.

**Fields**

- `label`: accessible alt text.
- `assetPath`: local source asset path.
- `placement`: route and section where the image appears.
- `sourcePath`: editorial source that gives the surrounding context.

**Validation Rules**

- Homepage visual asset must use `src/assets/Capture.png`.
- Security account/access visual must use `src/assets/Comptes.png`.
- Images must not show broken sources and must keep meaningful alt text.
- The old security visual placeholder text must not appear as a substitute when
  `Comptes.png` is displayed.

## DataList

Represents bullet content from Markdown.

**Fields**

- `label`: source list label, such as Bénéfices, Motifs de contact, or Adresse.
- `items`: source list entries.
- `sourcePath`: authoritative Markdown source.

**Validation Rules**

- Homepage benefit entries must render as a normal text list.
- Contact address entries must render on separate visible lines.
- Contact reasons may remain list content, but they must not force "Nous
  contacter" back inside a card heading.
- Long list entries, URLs, and emails must wrap without overflow.

## LinkAction

Represents an email, URL, or CTA rendered as an actionable link.

**Fields**

- `label`: visible link text.
- `href`: URL or mailto target.
- `variant`: plain, framed, or button-like presentation.
- `sourcePath`: authoritative source.

**Validation Rules**

- Legal `contact@zzzbre.com` values must render as mailto links.
- Legal `support@zzzbre.com` values must render as mailto links.
- Legal `https://zzzbre.com` must render as a URL link.
- Legal standalone links must match the button-like framed treatment requested
  by the user and remain usable on mobile.

## Card

Represents a framed content group for details that remain carded after headings
are extracted.

**Fields**

- `title`: optional card heading.
- `text`: body text.
- `badge`: small label such as "Fondateur".
- `fields`: labelled details.
- `lists`: nested or simple lists.
- `cta`: optional action.
- `sourcePath`: authoritative source.

**Validation Rules**

- The team card must not repeat "L'Équipe" as the main card title after the
  heading is extracted.
- The contact card must not repeat "Nous contacter" as the main card title after
  the heading and intro are extracted.
- Cards must remain responsive and avoid nested-card presentation.
