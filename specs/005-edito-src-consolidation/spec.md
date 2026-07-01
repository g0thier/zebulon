# Feature Specification: Consolidation edito src

**Feature Branch**: `main`

**Created**: 2026-07-02

**Status**: Draft

**Input**: User description: "Maintenant que le site existe, je souhaite integrer proprement dans le dossier src ce qui est encore dans edito pour pouvoir supprimer le dossier edito definitivement."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Preserver toutes les pages publiques (Priority: P1)

En tant que visiteur du site, je dois retrouver les memes pages, la meme
navigation, les memes contenus, les memes CTA utiles et les memes medias apres
la consolidation afin que la suppression du dossier historique ne change pas
l'experience publique.

**Why this priority**: La valeur principale de cette initiative est de retirer
une dependance interne sans casser le site deja en ligne. Si le rendu public
regresse, la consolidation rate son objectif principal.

**Independent Test**: Comparer l'accueil, les pages de contenu, les categories,
les articles de la serie Motivation, le header, le footer et la sidebar avant
et apres consolidation, puis verifier que chaque page attendue reste accessible
avec le meme message public.

**Acceptance Scenarios**:

1. **Given** le site public actuel sert de reference, **When** la consolidation
   est terminee, **Then** chaque page publique existante reste accessible avec
   le meme slug, le meme titre et un contenu equivalent.
2. **Given** un visiteur parcourt le header, le footer et les liens rapides,
   **When** il navigue entre les sections du site, **Then** il retrouve les
   memes destinations et la meme hierarchie de navigation.
3. **Given** un visiteur ouvre une page contenant des cartes, FAQ, CTA, liens
   ou visuels, **When** la page s'affiche apres consolidation, **Then** ces
   elements restent lisibles, complets et coherents avec la version de
   reference.

---

### User Story 2 - Rendre le contenu maintenable depuis src (Priority: P2)

En tant qu'editeur ou mainteneur du site, je dois pouvoir retrouver dans `src/`
toutes les informations necessaires a la publication du site afin de ne plus
dependre d'un dossier editorial parallele pour corriger ou faire evoluer le
contenu.

**Why this priority**: Une fois le site stabilise, le benefice attendu est de
ramener la source exploitee par le produit dans un seul espace de travail afin
de simplifier la maintenance courante.

**Independent Test**: Reprendre un echantillon representatif comprenant une
page principale, une page secondaire, un article, un bloc de navigation et un
bloc de layout, puis verifier que chacun peut etre relu et modifie depuis `src/`
sans consultation obligatoire de `edito/`.

**Acceptance Scenarios**:

1. **Given** un mainteneur doit corriger un contenu de page, **When** il ouvre
   la source correspondante dans `src/`, **Then** il trouve l'information
   complete sans devoir recuperer un fragment depuis `edito/`.
2. **Given** un mainteneur doit ajuster un lien ou un libelle de navigation,
   **When** il consulte la source de navigation dans `src/`, **Then** il peut
   realiser le changement a cet endroit unique.
3. **Given** un mainteneur doit verifier l'origine d'un article ou d'une serie,
   **When** il parcourt les donnees editoriales consolidees, **Then** la
   structure reste comprehensible et suffisamment ordonnee pour des evolutions
   futures.

---

### User Story 3 - Retirer edito sans risque (Priority: P3)

En tant que responsable du depot, je dois pouvoir supprimer definitivement le
dossier `edito/` avec confiance afin d'eliminer les doublons, les references
obsoletes et les incertitudes sur la vraie source du site.

**Why this priority**: La suppression propre du dossier legacy est le resultat
attendu, mais elle n'a de valeur qu'une fois le contenu et les dependances
runtime correctement absorbes ailleurs.

**Independent Test**: Verifier qu'aucun parcours de build, de rendu, de
navigation ou de lecture de contenu ne depend encore de `edito/`, puis confirmer
que le dossier peut etre retire sans page vide, lien casse ni erreur de source
introuvable.

**Acceptance Scenarios**:

1. **Given** la consolidation est terminee, **When** on audite les references
   aux sources editoriales du site, **Then** aucune dependance active ne pointe
   encore vers `edito/`.
2. **Given** le dossier legacy n'est plus requis, **When** il est supprime du
   repo de travail, **Then** le site continue a produire ses pages attendues
   sans erreur de contenu manquant.
3. **Given** un relecteur compare le perimetre migre avec l'arborescence
   historique, **When** il verifie pages, layouts, structure et articles,
   **Then** rien d'utile au site public n'a ete oublie pendant la migration.

### Edge Cases

- Les slugs publics, y compris ceux issus de titres contenant espaces,
  apostrophes ou caracteres accentues, doivent rester stables apres
  consolidation.
- Les liens internes historiquement resolus depuis des chemins Markdown doivent
  continuer a mener vers la bonne page publique sans exiger l'ancienne logique
  de resolution relative a `edito/`.
- Les contenus de navigation et de layout partages ne doivent pas diverger entre
  header, footer, sidebar et pages apres leur deplacement dans `src/`.
- Les articles de la serie Motivation et leurs regroupements doivent rester
  complets, dans le bon ordre, sans perte de relation avec leur categorie.
- Les medias, captures et autres ressources affichees par les pages doivent
  rester disponibles meme si leur reference d'origine change de place.
- La consolidation ne doit pas introduire un second duplicata du contenu dans
  `src/` qui rendrait a nouveau ambigu l'endroit ou maintenir le site.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le systeme MUST permettre au site de produire toutes les pages
  publiques actuellement servies sans lecture runtime du dossier `edito/`.
- **FR-002**: Le systeme MUST preserver les slugs publics existants, y compris
  l'accueil, les pages de premier niveau, les sous-pages, les categories et les
  articles deja exposes.
- **FR-003**: Le systeme MUST preserver pour chaque page migree le titre public,
  le sous-titre, l'introduction, les blocs de contenu, les CTA, les liens
  associes et les visuels utiles a la lecture.
- **FR-004**: Le systeme MUST consolider dans `src/` les contenus actuellement
  portes par `edito/contenu/`, `edito/layout/` et `edito/structure.md`.
- **FR-005**: Le systeme MUST offrir dans `src/` un point de maintenance unique
  pour la navigation principale, le footer, la sidebar et les autres contenus
  partages aujourd'hui derives de `edito/layout/`.
- **FR-006**: Le systeme MUST conserver la hierarchie publique du site telle
  qu'elle est exposee aujourd'hui, sauf ecart explicitement documente dans une
  suite de travail separee.
- **FR-007**: Le systeme MUST conserver les relations entre categories, series,
  pages et articles de maniere a ne perdre aucun chemin de navigation ou de
  decouverte de contenu.
- **FR-008**: Le systeme MUST maintenir une structure de contenu dans `src/`
  qui soit lisible par un mainteneur sans devoir reconstruire mentalement
  l'ancienne arborescence `edito/`.
- **FR-009**: Le systeme MUST fournir une facon verifiable de confirmer que plus
  aucune reference active du site ne depend de chemins `edito/`.
- **FR-010**: Le systeme MUST permettre la suppression definitive du dossier
  `edito/` sans perte de rendu public ni erreur de chargement de contenu.
- **FR-011**: La consolidation MUST exclure tout changement editorial de fond
  non necessaire a la migration, notamment pas de reecriture de message public,
  pas de modification de promesse commerciale et pas de nouveau parcours
  utilisateur.
- **FR-012**: La migration MUST couvrir les contenus de page, les contenus de
  layout, la structure de navigation, les mappings de routes et les references
  d'articles encore issus de `edito/`.
- **FR-013**: Editorial changes MUST identify the authoritative `edito/` source
  files being absorbed and keep public copy directly publishable without
  internal notes during the transition.
- **FR-014**: Website changes MUST state the Astro pages, layouts, components,
  assets, or content collections affected by the removal of `edito/`.

### Key Entities *(include if feature involves data)*

- **Source editoriale legacy**: Un contenu, une structure ou un element de
  layout encore stocke sous `edito/` et actuellement utilise pour rendre le
  site.
- **Source consolidee**: La representation finale dans `src/` qui devient
  l'unique reference maintenable pour une page, une navigation ou un article.
- **Entree de page publique**: Une unite de contenu associee a un slug public,
  avec titre, intro, blocs, CTA, liens associes et eventuels visuels.
- **Bloc de navigation partage**: Un ensemble de liens ou libelles servant au
  header, au footer, a la sidebar ou a d'autres points d'entree communs.
- **Relation editoriale**: Un lien structurel entre une categorie, une serie,
  un article, une page de liste ou une destination publique.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% des pages publiques existantes avant migration restent
  accessibles apres consolidation avec leur slug attendu et sans contenu vide.
- **SC-002**: 100% des liens de navigation du header, du footer et de la
  sidebar mappent toujours vers une destination valide apres consolidation.
- **SC-003**: 0 reference active a `edito/` ne subsiste dans les parcours
  necessaires au rendu et a la navigation du site cible.
- **SC-004**: Un relecteur peut modifier au moins un exemple de page, un
  exemple de navigation partagee et un exemple d'article directement depuis
  `src/` sans consulter `edito/`.
- **SC-005**: La suppression du dossier `edito/` n'entraine aucune regression
  constatee lors d'une revue manuelle des pages, menus et articles representatifs
  du site.

## Constitution Alignment *(mandatory)*

- **Editorial source**: Tous les fichiers aujourd'hui encore utilises sous
  `edito/`, en particulier `edito/structure.md`, `edito/layout/*.md` et
  `edito/contenu/**/*.md`, constituent la source legacy a absorber proprement
  dans `src/` avant suppression du dossier.
- **Astro scope**: `src/data/source-map.ts`, `src/data/editorial-pages.ts`,
  `src/data/navigation.ts`, `src/content.config.ts`, `src/pages/index.astro`,
  `src/pages/[...slug].astro`, les composants de rendu de contenu et de layout,
  ainsi que les assets ou collections de contenu relies a cette consolidation.
- **Quality gates**: Revue de correspondance entre contenu legacy et contenu
  consolide, verification des slugs et menus publics, verification manuelle d'un
  echantillon representatif de pages et d'articles, `astro build`, et audit des
  references restantes a `edito/`.
- **Security/privacy**: Aucun secret ni donnee utilisateur nouvelle. La
  consolidation ne doit pas introduire de dependance tierce non revue ni exposer
  accidentellement des contenus internes en remplacant les sources editoriales.

## Assumptions

- Le contenu public deja visible sur le site constitue la reference fonctionnelle
  a preserver pendant cette migration.
- La demande porte sur une consolidation de source et non sur une refonte
  editoriale, structurelle ou commerciale du site.
- Les assets deja servis par le site peuvent etre deplaces ou remappes si
  necessaire, a condition que leur rendu public reste equivalent.
- La structure finale dans `src/` peut differer de l'arborescence historique
  `edito/` tant qu'elle reste claire, maintenable et complete.
- Les futures corrections editoriales devront etre faites dans la nouvelle
  source consolidee au lieu de recreer un depot parallele de contenu.
