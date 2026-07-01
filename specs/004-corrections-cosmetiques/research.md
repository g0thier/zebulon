# Research: Nouvelles corrections cosmetiques

## Decision: Keep the current Astro route structure

**Rationale**: Astro uses file-based routing from `src/pages/`, and this repo
already models `/` with `src/pages/index.astro` plus the rest of the public
editorial site through `src/pages/[...slug].astro`. The requested work is
presentation-only on existing routes, so new route files would add churn with no
user value.

**Alternatives considered**: Create dedicated route files for `/produit/securite`,
`/tarifs`, or `/legal`. Rejected because that would duplicate the shared
editorial renderer and increase drift from the `edito/` source model.

## Decision: Keep screenshots in `src/assets` and adjust presentation only

**Rationale**: Astro recommends keeping local images in `src/` when possible so
they can be imported and bundled by the project pipeline. The screenshots
already live in `src/assets/Capture.png` and `src/assets/Comptes.png`, so the
change should remove card-like chrome around them rather than moving assets or
changing image sourcing.

**Alternatives considered**: Move images to `public/` or replace them with new
editorial image references. Rejected because the existing local assets already
fit the project structure and the request is about styling, not asset
management.

## Decision: Remove the homepage shortcut cards at the renderer layer

**Rationale**: The four cards under the homepage "Benefices" area are generated
from the source "Liste" items and rendered as a shortcut card grid. The user
asked to suppress those cards, not to delete their upstream editorial
references. The safest implementation is route-specific rendering logic that
stops displaying that card grid on the homepage.

**Alternatives considered**: Delete the source list from `edito/contenu/index.md`.
Rejected because the request does not require editorial deletion and the
constitution favors preserving `edito/` as the source of truth.

## Decision: Remove only the pre-offer pricing CTA

**Rationale**: The requested pricing change is narrowly targeted to the button
above "Offres beta". The special-case pricing branch in
`src/components/content/ContentBlock.astro` already controls that CTA row, so
the correction should happen there and leave offer-card CTAs unchanged.

**Alternatives considered**: Remove every "Creer un compte" button on `/tarifs`.
Rejected because the spec explicitly keeps pricing offers and their actions
intact.

## Decision: Render cited legal contact references as normal inline text links

**Rationale**: The current renderer upgrades legal email references into
button-like framed actions. The new request explicitly asks to turn those
buttons into text in five cited legal paragraphs. Using standard inline link
rendering preserves readability and `mailto:` behavior without keeping a CTA
appearance.

**Alternatives considered**: Render the addresses as plain non-clickable text,
or remove all special legal link styling everywhere on `/legal`. Plain text was
rejected because it reduces utility without being required. Removing all legal
link styling was rejected because the request is scoped to specific paragraph
references.

## Decision: Use existing Astro component and CSS patterns only

**Rationale**: Astro components render to HTML without adding client-side
runtime by default, and component-level or shared CSS is sufficient for these
small layout corrections. No framework island, package, or third-party UI tool
is needed.

**Alternatives considered**: Add a UI dependency for cards, image panels, or
rich link treatment. Rejected because the changes are minor and the constitution
requires dependency restraint.

## Sources Consulted

- Astro routing guide: https://docs.astro.build/en/guides/routing/
- Astro component guide: https://docs.astro.build/en/basics/astro-components/
- Astro styling guide: https://docs.astro.build/en/guides/styling/
- Astro image guide: https://docs.astro.build/en/guides/images/
