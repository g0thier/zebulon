# UI Rendering Contract: Cosmetic Corrections

This contract defines visible behavior expected from the implementation. It is a
page-rendering contract for the Astro website, not a public API contract.

## Homepage Contract

- `/` continues to display the existing product screenshot from
  `src/assets/Capture.png`.
- That screenshot no longer appears inside a card-like framed panel.
- The "Benefices" text list remains visible.
- The four shortcut cards are not rendered in the "Benefices" area:
  "Decouvrir les fonctionnalites", "Voir les cas d'usage",
  "Consulter les tarifs", and "Lire la page securite".

## Security Page Contract

- `/produit/securite` continues to display the existing account screenshot from
  `src/assets/Comptes.png`.
- That screenshot no longer appears inside a card-like framed panel.
- The surrounding security section, list content, and FAQ content remain
  present.

## Pricing Page Contract

- `/tarifs` does not display the `Creer un compte` button placed above
  "Offres beta".
- Existing pricing offer cards still display their offer content and CTAs.
- No price, quota, badge, or offer text changes as a side effect of the CTA
  removal.

## Legal Page Contract

- `/legal` renders the five cited contact references as normal inline text
  links instead of framed button-like actions.
- The visible email values remain exactly `contact@zzzbre.com` and
  `support@zzzbre.com` where they appear in the cited paragraphs.
- Inline legal contact links remain readable on small screens and preserve
  their expected `mailto:` behavior.
- No unrelated legal paragraph, heading, or contact value is removed.

## Responsive and Accessibility Contract

- Screenshots scale within the page without overflow or cropped framing caused
  by the removed card chrome.
- Long emails remain readable and do not overlap surrounding text on small
  screens.
- Interactive offer CTAs remain visibly distinguishable from non-interactive
  legal text links.
- The four targeted pages do not gain empty containers, duplicate gaps, or
  broken visual hierarchy after the requested removals.
