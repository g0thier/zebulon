# Contract: Astro Content Ownership

## Purpose

Define the repository-level contract for where public content lives in this
Astro project after consolidation, so contributors can identify the right file
without reverse-engineering custom loaders or transitional paths.

## Scope

This contract applies to:
- static public pages under `src/pages/`
- the Motivation dynamic blog route
- shared shell/navigation data used across public pages

## Ownership Rules

### 1. Route ownership

- Every public URL must be owned by a file under `src/pages/`.
- Static pages must keep their final publishable markup in the corresponding
  `.astro` page file or in clearly imported Astro components used by that page.
- `src/pages/` must not remain a storage location for non-route Markdown files
  whose only purpose is to feed a parser.

### 2. Repeatable article ownership

- Repeatable Motivation article content may remain Markdown because dynamic blog
  articles are the accepted exception for this project.
- Those article files must live under `src/content/blog/motivation/`.
- `src/content.config.ts` must describe the collection schema using Astro
  content collection primitives rather than a synthetic loader over route-local
  Markdown files.
- `src/pages/ressources/blog/motivation/[slug].astro` owns the public route
  pattern and renders collection entries without becoming the article source of
  truth itself.

### 3. Shared shell ownership

- Shared navigation, footer, sidebar, and other site-shell structures may live
  in typed modules such as `src/data/site-shell.ts`.
- Shared shell modules may own labels, hrefs, and structured CTA metadata.
- Shared shell modules must not own full route body markup for unrelated pages.

### 4. Transitional path retirement

- Files or modules previously used as interim content registries must either be
  removed or reduced to non-authoritative helpers once the final owner exists.
- `src/data/site-pages.ts` cannot remain the authoritative source of entire
  static page bodies after the migration is complete.
- `src/data/blog-articles.ts` cannot keep parsing Markdown from
  `src/pages/ressources/blog/motivation/` in the final aligned state.

## Validation Requirements

- `npm run build` completes successfully.
- Representative public routes still render valid content and navigation.
- `find src/pages -type f` shows route files only for the consolidated areas.
- `find src/content/blog/motivation -type f` lists the retained Motivation
  Markdown entries.
- `rg "heroHtml|bodyHtml|getStaticPage|readFileSync" src` confirms that old
  ownership patterns are removed or explicitly limited to non-authoritative
  helpers under migration.
