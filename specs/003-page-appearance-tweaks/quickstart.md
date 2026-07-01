# Quickstart: Validate Minor Page Appearance Tweaks

## Prerequisites

- Node >=22.12.0.
- Dependencies installed.
- Local screenshots exist:
  - `src/assets/Capture.png`
  - `src/assets/Comptes.png`

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

## Source Checks

```bash
rg -n "Capture.png|Comptes.png" src
```

Expected result: both requested local screenshots are referenced by the
implementation.

```bash
rg -n "Capture-droit-access|Exemple de gestion des droits" src edito
```

Expected result: no visible rendering path still depends on the old security
placeholder instead of `Comptes.png`. Existing editorial source may still contain
context only if it is not displayed as a substitute for the screenshot.

## Route Validation

Validate these routes on desktop, tablet, and mobile widths:

- `/`
- `/produit/securite`
- `/tarifs`
- `/a-propos/equipe`
- `/contact`
- `/legal`

## Expected Outcomes By Route

### `/`

- The product screenshot from `src/assets/Capture.png` appears before
  "Bénéfices".
- "Bénéfices" is styled like section headings such as "Produit" and
  "Cas d'usage".
- The three benefit entries appear as a normal text list, not as cards.
- No broken or empty image appears.

### `/produit/securite`

- The account/access screenshot from `src/assets/Comptes.png` appears in the
  intended visual position.
- The old placeholder title/description block is not shown instead of the image.
- Only one visible "FAQ" title appears before the FAQ cards.
- All security FAQ questions remain present.

### `/tarifs`

- Only one visible "FAQ" title appears before the FAQ cards.
- All pricing FAQ questions remain present.
- Existing prices, limits, offers, and account CTA links are unchanged.

### `/a-propos/equipe`

- "L'Équipe" appears above the founder card.
- "L'Équipe" matches the visual heading treatment of "Pourquoi zzzbre" and
  "Ce qui guide le projet".
- Founder content remains inside one card and "Fondateur" remains visible.

### `/contact`

- "Nous contacter" appears above the card area.
- The paragraph beginning "Contactez-nous pour toute question liée au produit..."
  appears outside the card below the heading.
- Contact details remain visible.
- The address appears on separate lines:
  `Zzzbre, Pépinière Nomades`, `Rte des Acacias 24`, `1227 Genève`.

### `/legal`

- "Site" appears as a section heading comparable to "Mentions légales" and
  "Accès au site et à la plateforme".
- `contact@zzzbre.com`, `https://zzzbre.com`, `contact@zzzbre.com`, and
  `support@zzzbre.com` render as button-like framed links.
- Email links open `mailto:` targets and the site link targets
  `https://zzzbre.com`.

## Global Visual Checks

- No duplicate consecutive headings remain in FAQ areas.
- No nested cards are introduced.
- Screenshots, framed links, address lines, long URLs, and emails do not overflow
  or overlap at mobile widths.
- No new marketing claim, legal statement, security promise, or offer copy is
  introduced beyond the requested visual corrections.
