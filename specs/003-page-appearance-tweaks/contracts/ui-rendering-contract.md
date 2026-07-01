# UI Rendering Contract: Minor Page Appearance Tweaks

This contract defines visible behavior expected from the implementation. It is a
page-rendering contract for the Astro website, not a public API contract.

## Homepage Contract

- `/` displays the product screenshot from `src/assets/Capture.png` before the
  "Bénéfices" section.
- "Bénéfices" uses the same section-heading scale and spacing as "Produit" and
  "Cas d'usage".
- The three Bénéfices entries render as a normal text list:
  "Clarifier les priorités", "Aligner les équipes", and "Suivre les décisions
  et les actions".
- The homepage must not render an empty or broken screenshot element.

## Security Page Contract

- `/produit/securite` displays `src/assets/Comptes.png` for the access/account
  visual.
- The old visual placeholder title and descriptive sentence are not displayed as
  a separate fallback when the screenshot is visible.
- The FAQ area displays exactly one visible "FAQ" heading before the question
  cards.
- All existing security FAQ questions and answers remain present.

## Pricing Page Contract

- `/tarifs` displays exactly one visible "FAQ" heading before the pricing FAQ
  question cards.
- All existing pricing FAQ questions and answers remain present.
- The existing pricing offer content, prices, limits, and CTA targets are not
  changed by this correction.

## About Team Contract

- `/a-propos/equipe` displays "L'Équipe" outside the founder card.
- "L'Équipe" uses the same section-heading treatment as "Pourquoi zzzbre" and
  "Ce qui guide le projet".
- The founder content remains grouped in a single card below the extracted
  heading.
- The "Fondateur" role remains visible as a badge or equivalent small label.

## Contact Page Contract

- `/contact` displays "Nous contacter" outside the contact card.
- The paragraph beginning "Contactez-nous pour toute question liée au produit..."
  appears outside the card directly under that heading.
- Contact details remain visible and actionable.
- Address lines display separately:
  `Zzzbre, Pépinière Nomades`, `Rte des Acacias 24`, `1227 Genève`.
- "Contacts utiles" and "Prêt à découvrir zzzbre ?" keep their existing section
  hierarchy.

## Legal Page Contract

- `/legal` displays "Site" with the same section-heading treatment as "Mentions
  légales" and "Accès au site et à la plateforme".
- Legal standalone links render in the same button-like framed style requested
  from `/contact`:
  `contact@zzzbre.com`, `https://zzzbre.com`, `contact@zzzbre.com`,
  `support@zzzbre.com`.
- Email links use `mailto:` targets; the site link uses `https://zzzbre.com`.
- Legal copy order and meaning remain unchanged.

## Responsive and Accessibility Contract

- Screenshots scale within their containers without overflow.
- Cards, framed links, URLs, emails, and address lines wrap cleanly at mobile
  widths.
- Interactive links and CTAs remain visibly distinguishable from non-interactive
  text.
- No page introduces nested cards or duplicate visible headings as a side effect
  of these corrections.
