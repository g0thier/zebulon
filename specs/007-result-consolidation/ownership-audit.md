# Ownership Audit: Result Consolidation

## Scope

- Feature: `007-result-consolidation`
- Goal: identify and retire transitional public-content ownership so each public surface has one clear authoritative source
- Status legend: `identified`, `migrated`, `validated`, `closed`

## Baseline Inventory

| Surface | Public href | Current owner path | Owner type | Transitional inputs still affecting render | Status |
| --- | --- | --- | --- | --- | --- |
| Home | `/` | `src/pages/index.astro` | astro-page | none | closed |
| Product features | `/produit/fonctionnalites` | `src/pages/produit/fonctionnalites.astro` | astro-page | none | closed |
| Blog index | `/ressources/blog` | `src/pages/ressources/blog/index.astro` plus `src/content/blog/motivation/*.md` summaries | astro-page + content-collection | none | closed |
| Leadership category | `/ressources/blog/categories/leadership-et-engagement` | `src/pages/ressources/blog/categories/leadership-et-engagement.astro` plus `src/content/blog/motivation/*.md` summaries | astro-page + content-collection | none | closed |
| Motivation article route | `/ressources/blog/motivation/[slug]` | `src/pages/ressources/blog/motivation/[slug].astro` plus `src/content/blog/motivation/*.md` | astro-page + content-collection | none | closed |

## Current Public-Route Owners

### Route files

- Static public routes currently live under `src/pages/`.
- One dynamic public route pattern currently lives at `src/pages/ressources/blog/motivation/[slug].astro`.

### Shared shell and transitional modules

- `src/data/site-pages.ts`
  Owns full-page `heroHtml` and `bodyHtml` blobs for 25 static public routes.
- `src/data/blog-articles.ts`
  Parses Motivation article Markdown from `src/pages/ressources/blog/motivation/*.md` with `readFileSync`.
- `src/content.config.ts`
  Defines a synthetic collection whose loader returns `articleEntries` from `src/data/blog-articles.ts`.

### Transitional Markdown under the routing tree

- `src/pages/ressources/blog/motivation/attentes.md`
- `src/pages/ressources/blog/motivation/autodetermination.md`
- `src/pages/ressources/blog/motivation/besoins-acquis.md`
- `src/pages/ressources/blog/motivation/besoins-de-maslow.md`
- `src/pages/ressources/blog/motivation/equite.md`
- `src/pages/ressources/blog/motivation/identite-pro.md`
- `src/pages/ressources/blog/motivation/mimetisme.md`
- `src/pages/ressources/blog/motivation/theorie-x-y.md`

## Required Quality Gates

### Build validation

- Command: `npm run build`
- Evidence target: record success or failure here once the final migration lands

### Local route validation

- Commands:
  - `astro dev --background`
  - `astro dev status`
  - `astro dev stop`
- Evidence target: confirm the background dev server starts and stops cleanly

### Ownership audits

- Commands:
  - `find src/pages -type f | sort`
  - `find src/content -type f | sort`
  - `rg "heroHtml|bodyHtml|getStaticPage" src/pages src/data`
  - `rg "readFileSync|src/pages/ressources/blog/motivation|articleEntries" src`
- Evidence target: show that consolidated areas no longer depend on transitional sources

## Representative Validation Surfaces

| Surface | Route | Expected final authoritative owner |
| --- | --- | --- |
| Home | `/` | `src/pages/index.astro` with clearly imported Astro components only |
| Product features | `/produit/fonctionnalites` | `src/pages/produit/fonctionnalites.astro` with clearly imported Astro components only |
| Blog index | `/ressources/blog` | `src/pages/ressources/blog/index.astro` plus collection-backed summaries from `src/content/blog/motivation/` |
| Leadership category | `/ressources/blog/categories/leadership-et-engagement` | `src/pages/ressources/blog/categories/leadership-et-engagement.astro` plus collection-backed summaries from `src/content/blog/motivation/` |
| Motivation article | `/ressources/blog/motivation/autodetermination` | `src/pages/ressources/blog/motivation/[slug].astro` rendered from `src/content/blog/motivation/autodetermination.md` |

## Validation Log

- `2026-07-02`: Baseline inventory created. Transitional ownership still present in `src/data/site-pages.ts`, `src/data/blog-articles.ts`, and `src/pages/ressources/blog/motivation/*.md`.
- `2026-07-02`: Representative source-discovery check completed.
  - `rg "getStaticPage\\(" src/pages` returned no active static routes still consuming `src/data/site-pages.ts`.
  - `rg "readFileSync|src/pages/ressources/blog/motivation|articleEntries" src` returned no active parser-based Motivation data flow.
  - `find src/content/blog/motivation -type f | sort` listed the eight collection-backed Motivation entries now used by summaries and the dynamic route.
  - `npm run build` succeeded after the migration.
  - Remaining warning: Astro reported route conflicts for `src/pages/ressources/blog/motivation/*.md`, confirming those retired files still need deletion before the ownership cleanup is closed.
- `2026-07-02`: Transitional-source cleanup completed.
  - `find src/pages -type f | sort` shows route files only in the consolidated areas.
  - `find src/content -type f | sort` shows the retained Motivation article sources under `src/content/blog/motivation/`.
  - `rg "heroHtml|bodyHtml|getStaticPage" src/pages src/data` returned no matches.
  - `rg "readFileSync|src/pages/ressources/blog/motivation|articleEntries" src` returned no matches.
  - `npm run build` succeeded again with no route-conflict warnings.
- `2026-07-02`: Visitor-path and shell validation completed against the rendered build output.
  - `src/data/site-shell.ts` internal navigation and sidebar links were checked against `dist/` and all 25 internal hrefs resolved to generated pages.
  - `dist/index.html` contains the home hero, `/produit/fonctionnalites`, `/ressources/blog`, and the primary CTA.
  - `dist/produit/fonctionnalites/index.html` contains the expected hero, beta cards, and roadmap content.
  - `dist/ressources/blog/index.html` contains the leadership category link, Motivation discovery cards, and the editorial CTA/contact block.
  - `dist/ressources/blog/categories/leadership-et-engagement/index.html` contains the Motivation series card grid including `/ressources/blog/motivation/autodetermination`.
  - `dist/ressources/blog/motivation/autodetermination/index.html` contains the article hero, `Retour à la catégorie`, and the expected section heading.
- `2026-07-02`: Local dev-server validation was attempted with `astro dev --background`.
  - Astro reported a background listener on IPv6 loopback, but direct loopback HTTP requests were unavailable from this sandbox session.
  - Fallback evidence used the generated `dist/` HTML to validate rendered output and route/link continuity.
  - Residual risk: no interactive browser rendering pass was possible inside this sandbox, so final visual QA still benefits from a human browser check outside the agent session.
- `2026-07-02`: Final quality-gate confirmation.
  - `npm run build` succeeded on the final repository state after cleanup and documentation updates.
