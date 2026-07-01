# Contract: Public Routes

## Purpose

Define the public route inventory expected for the Zzzbre showcase site.

## Route Principles

- Routes MUST reflect `edito/structure.md`.
- Links MUST use standard anchor navigation.
- Dynamic routes MUST be generated at build time from known source entries.
- A route MUST NOT exist for a page that has no authoritative source.

## Static Routes

| Route | Source |
|-------|--------|
| `/` | `edito/contenu/index.md` |

## Dynamic Editorial Page Route

Route pattern:

```text
/{slug}
```

Astro page:

```text
src/pages/[...slug].astro
```

`getStaticPaths()` MUST generate paths from normalized `EditorialPage` entries.

Expected route families:
- `/produit/fonctionnalites`
- `/produit/integrations`
- `/produit/api`
- `/produit/securite`
- `/cas-d-usage/pme`
- `/cas-d-usage/grandes-entreprises`
- `/cas-d-usage/secteurs`
- `/tarifs`
- `/ressources/blog`
- `/ressources/guides`
- `/ressources/webinaires`
- `/ressources/documentation`
- `/ressources/blog/categories/pilotage-pme`
- `/ressources/blog/categories/leadership-et-engagement`
- `/ressources/blog/categories/ateliers-et-decision`
- `/ressources/blog/categories/indicateurs-et-tableaux-de-bord`
- `/ressources/blog/categories/ia-appliquee-au-management`
- `/clients/etudes-de-cas`
- `/a-propos/equipe`
- `/a-propos/carrieres`
- `/a-propos/presse`
- `/support`
- `/contact`
- `/legal`

## Dynamic Motivation Article Route

Route pattern:

```text
/ressources/blog/motivation/{slug}
```

Astro page:

```text
src/pages/ressources/blog/motivation/[slug].astro
```

`getStaticPaths()` MUST generate one route for each collection entry from
`edito/contenu/Ressources/Blog/Motivation/*.md`.

Expected slugs:
- `theorie-x-y`
- `identite-pro`
- `besoins-de-maslow`
- `autodetermination`
- `attentes`
- `equite`
- `besoins-acquis`
- `mimetisme`

## Link Contract

- Header links come from `edito/layout/1 Header.md`.
- Footer links and contacts come from `edito/layout/2 Footer.md`.
- Sidebar links and contacts come from `edito/layout/3 Sidebar.md`.
- Account CTAs use the source URL `https://zzzbre.com/login`.
- Email links use source email values exactly.

## Acceptance Checks

- Every generated route returns a public page.
- Every top-level route is reachable from header or footer.
- Every Motivation article route is reachable from the Leadership et engagement
  category page or resource index.
- Missing source entries do not generate routes.
