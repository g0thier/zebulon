# Quickstart: Validate Cosmetic Corrections

## Prerequisites

- Node `>=22.12.0`
- Dependencies installed
- Existing local assets available:
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

Expected result: both existing screenshots are still referenced by the
implementation.

```bash
rg -n "Lire la page securite|Consulter les tarifs|Voir les cas d'usage|Decouvrir les fonctionnalites" src edito
```

Expected result: these homepage shortcut labels may still exist in source
content, but they should no longer be rendered as homepage shortcut cards.

## Route Validation

Validate these routes on desktop and on a small-screen width:

- `/`
- `/produit/securite`
- `/tarifs`
- `/legal`

## Expected Outcomes By Route

### `/`

- The product screenshot remains visible.
- The screenshot no longer looks wrapped in an extra card-like frame.
- The "Benefices" text list remains visible.
- The four shortcut cards under that area are absent.

### `/produit/securite`

- The account screenshot remains visible.
- The screenshot no longer looks wrapped in an extra card-like frame.
- Security copy and the access-management section remain readable.

### `/tarifs`

- The button above "Offres beta" is absent.
- Pricing offer cards still show their own CTA buttons.
- Offer names, prices, badges, and quotas are unchanged.

### `/legal`

- The five cited contact references render as normal inline text links instead
  of button-like actions.
- The referenced email values remain exact and readable.
- Long email strings do not overflow or break nearby legal text.

## Global Visual Checks

- No empty card shell or empty CTA row remains after removals.
- The four targeted pages keep a coherent visual rhythm after the cosmetic
  changes.
- No new marketing, legal, pricing, or security claims are introduced.
