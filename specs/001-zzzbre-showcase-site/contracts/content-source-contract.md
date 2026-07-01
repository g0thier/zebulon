# Contract: Editorial Source Fidelity

## Purpose

Define the contract between `edito/` Markdown sources and the public Astro site.
The implementation passes this contract only when every visible public value is
traceable to an editorial source.

## Source Scope

Authoritative sources:
- `edito/structure.md`
- `edito/contenu/**/*.md`
- `edito/layout/1 Header.md`
- `edito/layout/2 Footer.md`
- `edito/layout/3 Sidebar.md`

Non-authoritative sources:
- Generated component names
- Design labels
- Implementation comments
- AI-generated summaries
- Placeholder or fallback copy

## Required Traceability

Every visible value in the rendered site MUST have a source record:
- page title
- section heading
- subtitle/accroche/paragraph
- list item
- card title/body/badge/price/meta
- status such as beta or en developpement
- CTA label and URL
- email, address, support, press, legal contact
- navigation label and route target

Each normalized entry SHOULD include:

```ts
type SourceTrace = {
  sourcePath: string;
  sourceLabel?: string;
  sourceLineHint?: string;
};
```

`sourceLineHint` is optional because line numbers may move, but `sourcePath` is
required for auditability.

## No-Invention Rules

- The implementation MUST NOT invent public marketing copy.
- The implementation MUST NOT complete empty source fields.
- The implementation MUST NOT add unvalidated customer stories, claims, prices,
  security guarantees, legal terms, product statuses, or feature availability.
- The implementation MAY transform structure into visual layout when text and
  meaning remain unchanged.
- The implementation MAY omit an empty block with a development note or task.

## Conditional Rendering Rules

- Empty arrays render nothing publicly.
- Missing optional CTAs render no CTA.
- Missing media renders no invented media caption.
- Empty card groups render no card grid.
- In development artifacts, missing content may be logged or listed for editor
  correction.

## Acceptance Checks

- Pick at least one page from each top-level section and compare visible values
  to its `edito/contenu/` file.
- Compare header/footer/sidebar labels and links to `edito/layout/`.
- Verify article titles, statuses, question counts, categories, section
  headings, list items, and CTAs against source files.
- Verify no placeholder copy is visible on public pages.
