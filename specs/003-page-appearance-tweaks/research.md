# Research: Ajustements visuels mineurs des pages

## Decision: Keep the current source-driven Astro renderer

**Rationale**: The requested corrections affect existing routes already served
by `src/pages/index.astro` and `src/pages/[...slug].astro`. Astro's file-based
routing supports keeping `/` as a dedicated page and dynamic editorial pages in
the existing catch-all route, so no new route files are needed.

**Alternatives considered**: Create dedicated route files for the six corrected
pages. Rejected because that would duplicate the generic renderer and increase
the risk of drifting from `edito/`.

## Decision: Use local `src/assets` image imports for screenshots

**Rationale**: The user explicitly identified `src/assets/Capture.png` and
`src/assets/Comptes.png`. Astro recommends keeping local images in `src/` when
possible so they can be imported, bundled, and handled by the project pipeline.
The implementation should import these images in Astro components or pages and
render them with meaningful alt text.

**Alternatives considered**: Move images to `public/`. Rejected because the
assets already exist under `src/assets`, and moving them would add unnecessary
asset churn.

## Decision: Treat the homepage Bénéfices as a normal editorial list

**Rationale**: The previous visual pass turned the three benefits into stronger
visual items. The correction asks for "Bénéfices" to match normal section
headings while its three entries return to a simple text-list treatment. This is
best handled by removing the special card/grid styling for that list on the
homepage.

**Alternatives considered**: Keep the three-column benefit cards and only adjust
spacing. Rejected because the user explicitly requested a normal text list.

## Decision: Group FAQ cards without duplicate section headings

**Rationale**: Security and pricing pages currently produce two FAQ titles in a
row because the source has a `### FAQ` heading and the grouping logic also emits
a grouped FAQ heading. The renderer should preserve a single visible heading and
continue rendering all question/answer pairs as cards.

**Alternatives considered**: Delete the source FAQ headings. Rejected because
the source headings are meaningful editorial structure and should remain
publishable.

## Decision: Extract headings from cards on Team and Contact pages

**Rationale**: The requested appearance puts "L'Équipe" and "Nous contacter" in
the same visual hierarchy as adjacent section headings. The card should contain
supporting details, not swallow the section heading and introductory paragraph.
This keeps the page easier to scan while preserving source order.

**Alternatives considered**: Keep the headings in cards but enlarge card title
styles. Rejected because it would still make those headings visually different
from peer sections like "Pourquoi zzzbre", "Contacts utiles", and "Prêt à
découvrir zzzbre ?".

## Decision: Use one framed action-link style for legal standalone links

**Rationale**: Legal email and site values are important standalone actions. The
user asked for them to match the stronger button-like presentation seen on
`/contact`, so legal URL/email fields and inline legal contact emails should
render as framed links while preserving their mailto/URL targets.

**Alternatives considered**: Keep definition-list inline framed values only.
Rejected because the requested format is closer to a CTA-like link and improves
scanability on a dense legal page.

## Decision: No new dependencies or third-party scripts

**Rationale**: All corrections are layout, grouping, local asset, and CSS
changes. Existing Astro components and global CSS are sufficient, and the
constitution favors dependency hygiene.

**Alternatives considered**: Add an image/gallery or UI component dependency.
Rejected because it would increase maintenance and is unnecessary for minor page
appearance corrections.

## Sources Consulted

- Astro routing guide: https://docs.astro.build/en/guides/routing/
- Astro component guide: https://docs.astro.build/en/basics/astro-components/
- Astro styling guide: https://docs.astro.build/en/guides/styling/
- Astro image guide: https://docs.astro.build/en/guides/images/
