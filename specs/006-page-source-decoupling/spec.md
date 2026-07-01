# Feature Specification: Page source decoupling

**Feature Branch**: `main`

**Created**: 2026-07-02

**Status**: Draft

**Input**: User description: "Decomplexifier et ne plus dependre de editorial pour le code des pages."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Rendre le code des pages lisible (Priority: P1)

En tant que mainteneur du site, je dois pouvoir comprendre rapidement comment
une page publique est composee et rendue afin de modifier son comportement sans
traverser une chaine globale de mapping editorial.

**Why this priority**: La demande exprime d'abord un besoin de simplification
du code des pages. Si le point d'entree d'une page reste difficile a suivre, la
complexite operationnelle demeure meme si les contenus sont deplaces.

**Independent Test**: Prendre un echantillon representatif comprenant
l'accueil, une page standard, une page a composition speciale et un article,
puis verifier qu'un mainteneur peut identifier pour chacun le point
d'assemblage de la page et la source de son contenu sans explorer une couche
editoriale globale.

**Acceptance Scenarios**:

1. **Given** un mainteneur ouvre le code d'une page publique, **When** il
   recherche comment cette page assemble son hero, ses blocs et ses sections
   associees, **Then** il trouve cette logique dans la page elle-meme ou dans
   un module voisin clairement relie a cette page.
2. **Given** un mainteneur doit ajuster une regle propre a une page
   particuliere, **When** il localise la logique de rendu concernee, **Then**
   il peut raisonner sur ce changement sans parcourir un registre global de
   chemins editoriaux.

---

### User Story 2 - Decorreler le code des pages des sources editoriales (Priority: P2)

En tant que mainteneur du site, je dois pouvoir faire evoluer l'emplacement ou
la forme des contenus publics sans devoir reecrire le code des routes a chaque
fois qu'une source editoriale change.

**Why this priority**: Une fois la lisibilite retablie, le gain principal est
de supprimer le couplage structurel entre le code de page et une arborescence
de contenu specifique.

**Independent Test**: Examiner une page representative et un contenu partage,
puis verifier que le code de page depend d'interfaces ou de definitions
metier stables plutot que de chemins, conventions de nommage ou structures de
dossier propres a `src/content/editorial/`.

**Acceptance Scenarios**:

1. **Given** une source de contenu publique doit etre deplacee ou absorbee
   ailleurs dans le repo, **When** ce changement est effectue, **Then** les
   routes de page non concernees ne demandent pas de mise a jour de leurs
   details de lecture.
2. **Given** un mainteneur lit le code d'une route, **When** il verifie ses
   dependances, **Then** il ne voit pas de connaissance directe des chemins,
   numerotations ou conventions de dossier de `src/content/editorial/`.

---

### User Story 3 - Preserver l'experience publique (Priority: P3)

En tant que visiteur du site, je dois retrouver les memes routes publiques, les
memes contenus utiles et les memes parcours de navigation apres la
decomplexification afin que l'amelioration interne ne degrade pas le site.

**Why this priority**: La simplification interne n'a de valeur que si elle ne
change pas la qualite percue du site public.

**Independent Test**: Verifier un echantillon representatif de pages, de menus,
de sections speciales et d'articles apres le decouplage, puis confirmer que
les pages restent completes, atteignables et coherentes.

**Acceptance Scenarios**:

1. **Given** le site public actuel sert de reference, **When** la
   decomplexification est terminee, **Then** les pages existantes restent
   accessibles avec leurs slugs et leurs contenus utiles.
2. **Given** un visiteur parcourt les pages ayant des compositions particulieres,
   **When** elles s'affichent apres le refactoring, **Then** les regroupements,
   CTA, liens associes et contenus mis en avant restent disponibles.

### Edge Cases

- Les pages ayant des compositions particulieres ne doivent pas perdre leur
  comportement specifique lorsque la logique n'est plus pilotee par une couche
  editoriale globale.
- Une source publique peut rester en Markdown ou etre absorbee dans Astro, tant
  que le code de page n'expose pas ce detail comme une dependance structurante.
- Une page ne doit pas devenir vide ou partiellement composee si une source
  attendue change de place; le probleme doit etre detectable pendant la
  validation.
- Les contenus partages comme la navigation ou les liens de contexte ne doivent
  pas imposer aux routes de connaitre leur stockage concret.
- Le refactoring ne doit pas creer deux sources autoritaires concurrentes pour
  une meme page publique.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le systeme MUST permettre d'identifier, pour chaque famille de
  pages publiques, un point d'assemblage clair du rendu de page sans passer par
  une cartographie editoriale globale.
- **FR-002**: Le code runtime des pages MUST ne plus dependre directement des
  chemins, conventions de nommage, numerotations ou structures de dossier de
  `src/content/editorial/`.
- **FR-003**: Le systeme MUST preserver les slugs publics existants et les
  destinations de navigation pendant la decomplexification.
- **FR-004**: Le systeme MUST permettre de faire evoluer une source de contenu
  publique sans imposer une reecriture des routes non concernees.
- **FR-005**: Le systeme MUST rendre explicites les regles de composition
  propres aux pages speciales, aux sections mises en avant et aux relations de
  contenu associees.
- **FR-006**: Le systeme MUST fournir aux pages des interfaces stables pour les
  contenus partages, sans exposer dans le code de route les details de stockage
  de ces contenus.
- **FR-007**: Le systeme MUST permettre a un mainteneur de modifier le
  comportement d'une page cible sans devoir auditer l'ensemble des mappings de
  contenu du site.
- **FR-008**: Le systeme MUST fournir un moyen verifiable de detecter qu'une
  page a perdu un contenu requis, une relation de contexte ou une destination
  publique pendant le refactoring.
- **FR-009**: Le refactoring MUST eviter de creer plusieurs sources
  autoritaires concurrentes pour une meme page publique.
- **FR-010**: Le refactoring MUST exclure toute reecriture editoriale de fond
  non necessaire a cette simplification.
- **FR-011**: Editorial changes MUST identify the authoritative public content
  sources involved and keep public copy directly publishable without internal
  notes.
- **FR-012**: Website changes MUST state the Astro pages, layouts, components,
  assets, and content access surfaces affected by the decoupling.

### Key Entities *(include if feature involves data)*

- **Definition de page publique**: Description autoritaire d'une page exposee
  au visiteur, avec son identite, son contenu utile et ses relations de
  navigation.
- **Regle de composition de page**: Logique qui determine comment une page
  assemble son hero, ses blocs, ses CTA, ses contenus associes et ses variantes
  specifiques.
- **Source de contenu publique**: Fichier ou ensemble de fichiers qui portent
  le contenu autoritaire d'une page ou d'un contenu partage.
- **Contenu partage**: Navigation, layout, liens ou contenus reutilises par
  plusieurs pages sans appartenir a une seule route.
- **Relation de contenu**: Lien fonctionnel entre une page, une categorie, une
  serie, un article ou une destination de navigation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Pour au moins l'accueil, une page standard, une page a
  composition speciale et un article, un mainteneur peut identifier en moins de
  5 minutes le point d'assemblage du rendu et la source de contenu autoritaire.
- **SC-002**: 0 reference runtime directe depuis le code des pages vers des
  chemins ou conventions internes de `src/content/editorial/` ne subsiste apres
  le refactoring cible.
- **SC-003**: 100% des routes publiques existantes dans le perimetre retenu
  restent accessibles avec un slug valide et sans contenu vide.
- **SC-004**: Une revue de changement montre qu'un deplacement ou une
  absorption representative de source publique n'impose pas de modifications
  aux routes non concernees.
- **SC-005**: Un relecteur confirme que les compositions particulieres
  representatives, la navigation partagee et les contenus lies restent
  disponibles apres la simplification.

## Constitution Alignment *(mandatory)*

- **Authoritative public content sources**: Les contenus publics actuels situes
  sous `src/content/editorial/`, ainsi que tout fichier Astro ou autre source
  de depot qui absorbera explicitement une partie de ce contenu pendant cette
  evolution, constituent les sources autoritaires a suivre.
- **Astro scope**: Les routes publiques, leurs layouts, les composants de
  rendu, les surfaces d'acces au contenu partage et les eventuelles collections
  de contenu ou modules de donnees utilises pour assembler les pages.
- **Quality gates**: Revue de lisibilite sur des routes representatives, audit
  des dependances directes du code de page a `src/content/editorial/`,
  verification des slugs et des parcours de navigation, `astro build`, et
  verification manuelle d'un echantillon de pages speciales et d'articles.
- **Security/privacy**: Aucun nouveau secret ni traitement de donnees
  personnelles. Le refactoring ne doit pas exposer de notes internes ni ouvrir
  l'acces a des contenus non destines a la publication en deplacant les sources
  publiques.

## Assumptions

- La demande vise a simplifier les frontieres de responsabilite du code des
  pages, pas a lancer une refonte editoriale ou visuelle du site.
- Les routes publiques et le contenu actuellement servis constituent la
  reference fonctionnelle a preserver.
- Certaines sources de contenu peuvent rester en Markdown apres cette evolution
  si le code des pages ne depend plus directement de leur emplacement ou de
  leur structure de dossier.
- Les contenus partages peuvent continuer a exister en dehors des fichiers de
  page tant que leur consommation par les routes reste stable et comprehensible.
- Le perimetre final devra couvrir toutes les familles de pages publiques
  concernees par la dependance actuelle, meme si la planification choisit un
  ordre d'execution progressif.
