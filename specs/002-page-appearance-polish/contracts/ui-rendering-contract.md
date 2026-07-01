# UI Rendering Contract: Page Appearance Polish

This contract defines the visible behavior expected from the implementation. It
is not an API contract; it is a page-rendering contract for the Astro website.

## Global Hero Badge Contract

- Every dynamic public page with a `section` value renders that section as a blue
  inline badge.
- If the page also has a `status`, the status badge appears inline next to the
  section badge.
- Existing section names are not rewritten, except the clients case page may
  display "Étude de cas" above "Partagez votre expérience zzzbre" as requested.

## Card Contract

- Cards use the existing editorial-card visual language unless a full-width panel
  is required.
- Card grids are responsive: multiple columns on desktop, stacked on small
  screens.
- Card content wraps cleanly and must not overflow.
- FAQ cards preserve the question as the card title and the answer as the card
  body.

## Link and CTA Contract

- Button-like CTAs are used for explicit actions such as "Créer un compte" and
  "Consulter la documentation".
- Framed links are used for legal/contact values that are important standalone
  destinations, including `contact@zzzbre.com` and `https://zzzbre.com`.
- Internal editorial links resolve to public routes, not source Markdown paths.

## Homepage Contract

- The homepage hero must not render a broken product image when the image href is
  empty.
- The Bénéfices list renders as three equal visual items on desktop.
- Homepage shortcut links render as four cards with these hrefs:
  `/produit/fonctionnalites`, `/cas-d-usage/pme`, `/tarifs`,
  `/produit/securite`.

## Product Feature Roadmap Contract

- The roadmap preserves source nesting:
  top-level roadmap domains are section parts;
  second-level entries use an empty round marker;
  third-level entries use an empty round marker and additional indentation.
- The roadmap does not flatten child entries into a single undifferentiated list.

## Page-Specific Contract

- `/produit/fonctionnalites`: no visible separator splits the intro `Accroche`
  and `Texte`; CTA heading displays "Demander une fonctionnalité".
- `/produit/securite`: visual access example is a full-width card; FAQ is a card
  grid.
- `/cas-d-usage/pme`: CTA heading displays "Commencer avec zzzbre".
- `/tarifs`: free-access offer displays one explanatory panel plus three detail
  cards; FAQ is a card grid.
- `/clients/etudes-de-cas`: label above hero title displays "Étude de cas".
- `/a-propos/equipe`: founder section content is contained in one card and
  "Fondateur" appears as a badge.
- `/support`: documentation link displays as a CTA button.
- `/contact`: duplicated page-local create-account section is not rendered;
  "Nous contacter" and "Adresse" display as two cards.
- `/legal`: "Pépinière Nomades" is used consistently; email and site URL render
  as framed links.

## Accessibility and Responsive Contract

- Images with a real source have meaningful alt text from editorial labels.
- Focusable links and buttons remain visibly distinguishable.
- At small widths, cards stack and long URLs/emails wrap within their containers.
