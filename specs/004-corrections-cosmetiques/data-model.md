# Data Model: Nouvelles corrections cosmetiques

## TargetPage

Represents one public route explicitly included in this correction request.

**Fields**

- `route`: public path such as `/`, `/produit/securite`, `/tarifs`, or `/legal`.
- `sourcePath`: authoritative Markdown file under `edito/`.
- `rendererPath`: Astro page/component path responsible for the visible output.
- `affectedElements`: list of visible elements targeted by this correction.

**Validation Rules**

- Only the four requested routes may receive route-specific behavior.
- Each route must preserve its existing editorial order and meaning outside the
  targeted cosmetic corrections.

## ScreenshotPresentation

Represents an existing screenshot rendered on a public page.

**Fields**

- `assetPath`: local asset path under `src/assets/`.
- `altText`: visible accessibility label used in the `<img>`.
- `route`: page where the screenshot appears.
- `displayMode`: current presentation variant, such as `framed` or `unframed`.
- `contextBlock`: surrounding section or renderer branch.

**Validation Rules**

- The homepage screenshot must continue using `src/assets/Capture.png`.
- The security screenshot must continue using `src/assets/Comptes.png`.
- Both screenshots must remain visible and readable without card-like framing
  that makes them appear nested inside an extra panel.
- Screenshot removal or replacement is out of scope.

## HomepageShortcutGroup

Represents the homepage card grid generated from the source "Liste" entries.

**Fields**

- `sourceLabel`: source list label, expected to be `Liste`.
- `route`: homepage only.
- `items`: the four existing navigation links.
- `renderMode`: `cards` or `suppressed`.

**Validation Rules**

- The four shortcut cards must not render in the "Benefices" area after this
  correction.
- The benefits text list and the rest of the homepage blocks must remain.

## PricingLeadAction

Represents the CTA shown in the pricing intro block before "Offres beta".

**Fields**

- `route`: `/tarifs`.
- `label`: expected visible label `Creer un compte`.
- `location`: above the "Offres beta" section.
- `visibility`: `visible` or `hidden`.

**Validation Rules**

- The lead CTA above "Offres beta" must be hidden.
- Offer-level CTAs inside the pricing cards must remain visible and unchanged.
- Pricing copy, limits, badges, and prices must not be altered by this change.

## LegalContactReference

Represents one cited contact reference inside a legal paragraph.

**Fields**

- `route`: `/legal`.
- `textValue`: visible contact value such as `contact@zzzbre.com` or
  `support@zzzbre.com`.
- `sourceContext`: paragraph from `edito/contenu/Légal/Légal.md` where the
  value appears.
- `renderMode`: `button-like` or `inline-text-link`.
- `href`: expected mailto target when clickable.

**Validation Rules**

- The five cited legal paragraph references must render as inline text links,
  not as button-like framed actions.
- The exact email values must remain unchanged.
- Legal meaning, paragraph order, and surrounding copy must remain unchanged.

## SharedStyleVariant

Represents reusable visual treatments applied by shared Astro components and CSS.

**Fields**

- `name`: identifier such as `visual-panel`, `product-screenshot`, `cta-link`,
  or `legal-action-link`.
- `appliesTo`: route or component scope.
- `intent`: framed action, plain text link, or unframed image treatment.

**Validation Rules**

- Removing card-like chrome from screenshots must not accidentally remove
  needed styling from unrelated cards.
- Reverting legal contact references to text must not degrade other CTA styles
  on non-legal pages.
- Shared styles must remain responsive for long emails and narrow screens.
