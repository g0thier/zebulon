# Quickstart: Validate Site vitrine Zzzbre

## Prerequisites

- Node.js >=22.12.0
- Dependencies installed with the existing lockfile
- Feature artifacts in `specs/001-zzzbre-showcase-site/`

## Setup

```bash
npm install
```

## Build Validation

```bash
npm run build
```

Expected outcome:
- Build completes successfully.
- No content collection schema errors remain.
- No route generation error occurs for editorial or Motivation pages.

## Local Review

Start the Astro dev server using the project rule:

```bash
astro dev --background
astro dev status
```

Open the reported local URL and validate:
- `/` shows Zzzbre source content from `edito/contenu/index.md`.
- Header, footer, and sidebar reflect `edito/layout/`.
- No visible placeholder or generated filler copy appears.

Stop the server after review:

```bash
astro dev stop
```

## Scenario 1: Home And Global Navigation

1. Visit `/`.
2. Confirm the first screen shows the Zzzbre brand, source-derived promise,
   source-derived benefits, and account CTA.
3. Use the header/footer to reach Produit, Cas d'usage, Tarifs, Ressources,
   Clients, A propos, Support, Contact, and Legal.

Expected outcome:
- Every top-level section is reachable.
- Labels and links match `edito/layout/1 Header.md` and
  `edito/layout/2 Footer.md`.

## Scenario 2: Product, Use Case, Pricing, Security

1. Visit `/produit/fonctionnalites`.
2. Visit `/cas-d-usage/pme`.
3. Visit `/tarifs`.
4. Visit `/produit/securite`.

Expected outcome:
- Beta and in-development statuses match source content.
- Pricing cards show only source prices and source user counts.
- Security claims match `edito/contenu/Produit/4 Sécurité.md`.

## Scenario 3: Motivation Collection Routes

Visit:
- `/ressources/blog/motivation/theorie-x-y`
- `/ressources/blog/motivation/identite-pro`
- `/ressources/blog/motivation/besoins-de-maslow`
- `/ressources/blog/motivation/autodetermination`
- `/ressources/blog/motivation/attentes`
- `/ressources/blog/motivation/equite`
- `/ressources/blog/motivation/besoins-acquis`
- `/ressources/blog/motivation/mimetisme`

Expected outcome:
- Each page renders from the reusable `articles` collection.
- Title, subtitle, status, question count, category, sections, lists, and CTA
  match the corresponding `edito/contenu/Ressources/Blog/Motivation/*.md` file.

## Scenario 4: Source-To-Site Audit

For one page in each top-level section:

1. Open the corresponding source file in `edito/contenu/`.
2. Compare visible title, subtitle, paragraphs, lists, cards, links, CTA, status,
   price, email, and address values against the rendered page.
3. Record any mismatch as a defect.

Expected outcome:
- No invented public value appears.
- No source value changes meaning in presentation.
- Empty or absent source values are omitted rather than filled.

## Scenario 5: Mobile And Conditional Rendering

1. Review `/`, `/tarifs`, `/ressources/blog`, and one Motivation article on a
   narrow viewport.
2. Confirm navigation remains usable.
3. Confirm empty lists or missing media do not create visible placeholder copy.

Expected outcome:
- Content remains readable.
- CTA/contact paths remain available.
- No empty public sections are shown.
