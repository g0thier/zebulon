# Quickstart: Validate Page Appearance Polish

## Prerequisites

- Node >=22.12.0.
- Dependencies installed.
- If screenshot assets are available, place them where the implementation expects
  public assets, then verify the final paths in the rendered site.

## Build Validation

```bash
npm run build
```

Expected result: the Astro build completes without errors.

## Optional Local Preview

Start the dev server with the project convention:

```bash
astro dev --background
astro dev status
```

Stop it after validation:

```bash
astro dev stop
```

## Source Consistency Checks

```bash
rg -n "Incubateur Nomades" edito src
rg -n "Pépinière Nomades" edito src
```

Expected result: no remaining "Incubateur Nomades" references in public source
or display data; address references use "Pépinière Nomades".

```bash
rg -n "Call to action" "edito/contenu/Produit/1 Fonctionnalités.md" "edito/contenu/Cas d'usage/1 PME.md"
```

Expected result: the visible headings requested by the user are corrected either
in source or through explicit rendering aliases.

## Route Validation

Validate these routes on desktop and mobile widths:

- `/`
- `/produit/fonctionnalites`
- `/produit/securite`
- `/produit/integrations`
- `/produit/api`
- `/cas-d-usage/pme`
- `/tarifs`
- `/clients/etudes-de-cas`
- `/a-propos/equipe`
- `/support`
- `/contact`
- `/legal`

## Expected Outcomes By Route

### `/`

- Product screenshot area does not show a broken image.
- "Bénéfices" is visible and its three items render in three columns on desktop.
- Shortcut cards link to `/produit/fonctionnalites`, `/cas-d-usage/pme`,
  `/tarifs`, and `/produit/securite`.
- Existing product cards still link correctly.

### `/produit/fonctionnalites`

- No horizontal separator appears between the intro accroche and the following
  descriptive text.
- Roadmap nesting is visible: domains, second-level items, and indented child
  items are distinct.
- The final CTA section title is "Demander une fonctionnalité".

### `/produit/securite`

- The access-management visual appears as a full-width card with title, image
  when present, and source description.
- Security FAQ questions render as cards.
- "Produit" appears as a blue badge beside "Sécurité" page status if status is
  present.

### `/cas-d-usage/pme`

- The final CTA section title is "Commencer avec zzzbre".

### `/tarifs`

- "Explorer zzzbre" appears as an explanatory panel.
- Prix, Limite, and Utilisateurs inclus appear as three cards.
- FAQ questions render as cards.

### `/clients/etudes-de-cas`

- The label above "Partagez votre expérience zzzbre" is "Étude de cas".

### `/a-propos/equipe`

- Content between "L'Équipe" and "Pourquoi zzzbre" appears in one card.
- "Fondateur" appears as a badge/cartouche.

### `/support`

- "Consulter la documentation" appears as a button-style CTA and links to the
  documentation page.

### `/contact`

- The duplicated page-local "Créer un compte" section is absent.
- "Nous contacter" and "Adresse" appear as two cards side by side on desktop and
  stacked on mobile.

### `/legal`

- "Pépinière Nomades" appears in the address.
- `contact@zzzbre.com` is a framed mail link.
- "Site" appears as a title and `https://zzzbre.com` is a framed link.

## Global Visual Checks

- Product subpages and other pages with surtitles render the section as a blue
  inline badge.
- Text, cards, URLs, emails, buttons, and badges do not overlap or overflow at
  desktop and mobile widths.
- No new visible copy is introduced unless it is explicitly requested in the
  correction list or comes from an authoritative `edito/` source.
