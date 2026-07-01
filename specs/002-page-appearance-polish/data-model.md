# Data Model: Finitions d'apparence des pages

## EditorialPage

Represents one public page derived from an authoritative Markdown source.

**Fields**

- `slug`: public route path without leading slash.
- `sourcePath`: path to the source file in `edito/`.
- `section`: high-level page family such as Produit, Tarifs, Contact, or Légal.
- `title`, `subtitle`, `intro`, `status`: hero content from page-level labels.
- `blocks`: ordered page content blocks.
- `ctas`: page-level calls to action.

**Validation Rules**

- Section/surtitle must render as a blue badge when present.
- Status must render inline beside the section badge when present.
- Page-level text must remain source-derived, except explicitly requested source
  corrections such as "Pépinière Nomades".

## ContentBlock

Represents one source section such as "FAQ", "Documentation", "Accès libre",
"L'Équipe", or "Mentions légales".

**Fields**

- `heading`: visible section heading.
- `kind`: content type hint: text, list, cards, faq, contact, quote, or media.
- `text`: paragraphs from source labels or free text.
- `fields`: labelled values such as Prix, Limite, Email, Site, Contact légal.
- `lists`: bullet lists, including nested list hierarchy where needed.
- `cards`: source card items.
- `ctas`: action links extracted from source labels.
- `sourcePath`: authoritative Markdown source.

**Validation Rules**

- Requested visible heading aliases must apply at render time or source time:
  "Call to action" -> "Demander une fonctionnalité" on
  `/produit/fonctionnalites`; "Call to action" -> "Commencer avec zzzbre" on
  `/cas-d-usage/pme`.
- Consecutive FAQ question blocks on security and pricing pages must be grouped
  as cards.
- Contact, site, and email fields on legal/contact pages must support framed
  link rendering when they contain a URL or email.
- Source order must remain stable unless a requested visual grouping is
  explicitly defined.

## Card

Represents a repeated visual unit for product links, pricing offers, contact
blocks, FAQ items, shortcuts, and visual panels.

**Fields**

- `title`: card heading.
- `text`: main description.
- `badge`: small cartouche label such as Hello, Recommandé, or Fondateur.
- `price`: price or prominent value.
- `href`: optional card link.
- `fields`: labelled metadata.
- `lists`: included lists.
- `cta`: optional action link.
- `sourcePath`: authoritative source.

**Validation Rules**

- Homepage shortcut links must become cards with the exact target routes supplied
  by the user.
- Pricing "Accès libre" must render as one explanatory panel plus three cards:
  Prix, Limite, Utilisateurs inclus.
- Security visual panel must render as a full-width card with title, image when
  asset exists, and description.
- About/equipe "Fondateur" must render as a badge/cartouche, not plain label
  text.

## DataList

Represents bullet content from Markdown.

**Fields**

- `label`: source list label such as Bénéfices, liste, Utilisateurs inclus.
- `items`: strings, link items, or hierarchical list nodes if nesting is
  preserved for roadmap rendering.

**Validation Rules**

- Homepage Bénéfices list must render as a three-column grid at desktop width.
- Product roadmap list must preserve hierarchy and indentation from `edito/`.
- Long labels, URLs, and email addresses must wrap without overflowing their
  cards or containers.

## Cta

Represents action links extracted from editorial Markdown.

**Fields**

- `label`: visible action text.
- `href`: resolved URL or mailto target.
- `kind`: account, pricing, documentation, contact, support, press, or legal.
- `sourcePath`: authoritative source.

**Validation Rules**

- Support documentation link must render as a button-style CTA.
- Homepage shortcuts must resolve to `/produit/fonctionnalites`,
  `/cas-d-usage/pme`, `/tarifs`, and `/produit/securite`.
- Global account CTAs must remain available unless the user explicitly removed a
  duplicated page-local section, as on `/contact`.

## VisualAsset

Represents an image reference from editorial content or a public asset.

**Fields**

- `label`: accessible alt text or source title.
- `filenameOrHref`: source image path when present.
- `description`: supporting source description when present.
- `sourcePath`: authoritative source.

**Validation Rules**

- Empty image hrefs must not render broken images.
- `Capture-droit-access.png` must render only if the asset can be resolved from
  the public path used by the site.
- Visual assets must not imply product features or customer proof beyond the
  source text.
