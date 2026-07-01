# Feature Specification: Finitions d'apparence des pages

**Feature Branch**: `main`

**Created**: 2026-07-01

**Status**: Draft

**Input**: User description: "Nouvelle phase avec des modifications mineures de l'apparence des pages."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Renforcer la coherence visuelle des pages (Priority: P1)

Un visiteur parcourt les pages publiques de Zzzbre et percoit une experience
plus soignee, homogene et professionnelle, sans changement du fond editorial, de
la navigation ou des appels a l'action existants.

**Why this priority**: Les pages existent deja; la valeur principale de cette
phase est d'ameliorer la confiance immediate et la qualite percue sans rouvrir
le contenu ni le perimetre fonctionnel.

**Independent Test**: Comparer les pages principales avant et apres la phase et
verifier que les espacements, alignements, contrastes et rythmes visuels sont
plus reguliers sans disparition de contenu source.

**Acceptance Scenarios**:

1. **Given** un visiteur arrive sur la page d'accueil, **When** il observe le
   premier ecran et les sections suivantes, **Then** la hierarchie visuelle, les
   espacements et les appels a l'action paraissent coherents avec une vitrine
   SaaS professionnelle.
2. **Given** un visiteur consulte plusieurs pages de contenu, **When** il passe
   d'une page a l'autre, **Then** les titres, blocs, listes, cartes, badges et
   liens gardent une apparence stable et previsible.
3. **Given** un editeur compare les pages avec les sources `edito/`, **When** il
   controle les textes, liens, statuts et CTA, **Then** aucune modification
   d'apparence n'a change le sens, l'ordre editorial ou la presence des
   contenus publies.

---

### User Story 2 - Ameliorer la lisibilite et le scan des contenus (Priority: P2)

Un prospect lit des pages denses comme Produit, Tarifs, Ressources, Support ou
Legal et doit pouvoir reperer plus facilement les sections importantes, les
statuts beta, les listes, les prix, les contacts et les prochaines actions.

**Why this priority**: Les contenus editoriaux sont nombreux; de petites
ameliorations de presentation peuvent reduire l'effort de lecture et rendre la
vitrine plus convaincante sans ajouter de nouveaux messages.

**Independent Test**: Demander a un lecteur de trouver une information ciblee
sur au moins cinq pages publiques et verifier qu'il y parvient rapidement sans
confusion entre contenu, navigation et action.

**Acceptance Scenarios**:

1. **Given** un prospect consulte une page de detail, **When** il cherche les
   points cles, **Then** les titres, intertitres, listes et blocs importants
   guident naturellement la lecture.
2. **Given** une page contient des badges, statuts, prix ou contacts, **When**
   un visiteur la scanne rapidement, **Then** ces informations restent visibles
   et distinguables sans dominer le contenu principal.
3. **Given** un visiteur atteint le bas d'une page, **When** il cherche une
   suite logique, **Then** les liens, CTA ou contacts existants sont faciles a
   identifier.

---

### User Story 3 - Preserver une experience soignee sur petits ecrans (Priority: P3)

Un visiteur consulte le site sur mobile ou sur une fenetre etroite et doit
retrouver une experience lisible, stable et confortable, avec les memes contenus
et actions que sur grand ecran.

**Why this priority**: Les finitions visuelles doivent profiter a tous les
visiteurs, notamment ceux qui arrivent depuis un lien partage ou consultent le
site en mobilite.

**Independent Test**: Parcourir l'accueil et un echantillon de pages profondes
sur petit ecran et verifier que les contenus essentiels, la navigation et les
CTA restent accessibles sans chevauchement ni rupture visuelle.

**Acceptance Scenarios**:

1. **Given** un visiteur ouvre une page sur petit ecran, **When** il fait
   defiler la page, **Then** les blocs restent lisibles, aeres et correctement
   ordonnes.
2. **Given** une page contient des cartes, listes ou blocs de contact, **When**
   l'espace horizontal est limite, **Then** les elements s'adaptent sans texte
   tronque de maniere illisible ni chevauchement.
3. **Given** un visiteur utilise la navigation ou un CTA sur mobile, **When** il
   interagit avec les controles visibles, **Then** les zones cliquables sont
   suffisamment claires et les actions restent identifiables.

---

### Edge Cases

- Une page contient tres peu de contenu : les ajustements d'apparence doivent
  eviter un ecran vide ou disproportionne tout en respectant le contenu source.
- Une page contient beaucoup de listes ou de cartes : les espacements et la
  hierarchie doivent rester lisibles sans effet de surcharge.
- Un titre, un prix, une adresse email ou un lien est long : l'affichage doit
  rester propre sur petit ecran et ne pas deborder de son conteneur.
- Un statut beta, "en developpement" ou "a venir" est present : il doit rester
  visible et non ambigu apres les changements visuels.
- Les visiteurs naviguent directement vers une page profonde : les finitions ne
  doivent pas rendre la navigation globale, le footer ou les retours vers les
  actions principales moins accessibles.
- Les changements d'apparence ne doivent pas introduire de contenu decoratif qui
  suggere des fonctionnalites, clients, preuves ou integrations non sources.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Les pages publiques MUST conserver tous les contenus, liens,
  statuts, contacts et appels a l'action deja publies avant cette phase, sauf
  correction editoriale explicitement sourcee.
- **FR-002**: Les changements MUST ameliorer la coherence visuelle globale des
  pages, notamment la hierarchie, les espacements, les alignements, les
  contrastes et le rythme de lecture.
- **FR-003**: Les composants repetes de presentation MUST afficher une apparence
  stable d'une page a l'autre pour les titres, sections, cartes, listes, badges,
  liens, CTA, zones de contact et blocs de navigation.
- **FR-004**: Les pages MUST rester faciles a scanner, avec une distinction
  claire entre contenu principal, informations secondaires, statuts, prix,
  contacts, liens et prochaines actions.
- **FR-005**: Les pages MUST rester lisibles et utilisables sur les formats
  mobiles courants, sans chevauchement visible, texte critique tronque ou zones
  d'action difficiles a identifier.
- **FR-006**: Les changements visuels MUST conserver l'ordre editorial et le sens
  des contenus issus de `edito/`.
- **FR-007**: Les modifications MUST NOT ajouter de nouvelles promesses produit,
  preuves client, fonctionnalites, offres, contenus juridiques, informations de
  securite ou messages marketing non presents dans les sources autorisees.
- **FR-008**: Les statuts beta, elements en developpement, limites d'offre,
  prix, contacts et mentions legales MUST rester aussi visibles et
  comprehensibles qu'avant les ajustements.
- **FR-009**: Les finitions MUST ameliorer l'apparence des pages existantes sans
  creer de nouvelle section de navigation, nouveau parcours utilisateur ou
  nouvelle page publique non demandee.
- **FR-010**: Les pages MUST conserver des contrastes suffisants pour une lecture
  confortable des textes, liens, badges et controles.
- **FR-011**: Les elements interactifs visibles MUST conserver un signal
  d'action clair afin que les visiteurs distinguent les liens, boutons et
  informations non interactives.
- **FR-012**: Les changements MUST etre verifies sur un echantillon representatif
  incluant l'accueil, au moins une page Produit, une page Cas d'usage, Tarifs,
  Ressources, Support, Contact ou Legal, et une page A propos ou Clients.
- **FR-013**: Editorial changes MUST identify the authoritative `edito/` source
  files and keep public copy directly publishable without internal notes.
- **FR-014**: Website changes MUST state the Astro pages, layouts, components,
  assets, or content collections affected.

### Key Entities *(include if feature involves data)*

- **Page publique**: Page de la vitrine Zzzbre deja existante, issue des sources
  editoriales et concernee par les ajustements d'apparence.
- **Bloc de contenu**: Groupe visuel presentant un titre, paragraphe, liste,
  carte, statut, contact, prix, lien ou appel a l'action.
- **Element de navigation**: Header, footer, sidebar ou lien interne permettant
  de parcourir les pages publiques.
- **Signal visuel**: Choix observable d'espacement, alignement, contraste,
  taille, couleur, bordure, etat interactif ou rythme servant la lisibilite.
- **Source editoriale**: Fichier de `edito/` qui reste la reference pour tout
  contenu public visible pendant cette phase.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Lors d'une revue comparative, 100% des pages testees conservent
  les textes, liens, statuts, contacts et CTA deja publies avant les finitions.
- **SC-002**: Sur au moins 8 pages representatives, aucun chevauchement visible,
  debordement critique ou texte illisible n'est observe sur grand ecran et petit
  ecran.
- **SC-003**: 90% des lecteurs testes peuvent identifier en moins de 30 secondes
  le titre principal, l'information cle et l'action suivante sur une page
  representative.
- **SC-004**: 100% des statuts beta, limites d'offre, prix, contacts et mentions
  legales presents dans l'echantillon verifie restent visibles apres les
  changements d'apparence.
- **SC-005**: Une revue stakeholder qualifie l'apparence generale comme plus
  coherente ou plus professionnelle sur au moins 80% des pages comparees.
- **SC-006**: Les visiteurs peuvent toujours atteindre une action de conversion
  ou de contact en trois interactions maximum depuis chaque grande famille de
  pages testee.

## Constitution Alignment *(mandatory)*

- **Editorial source**: `edito/structure.md`, `edito/layout/1 Header.md`,
  `edito/layout/2 Footer.md`, `edito/layout/3 Sidebar.md` et les fichiers de
  `edito/contenu/` restent les sources authoritative. Cette phase ne doit pas
  inventer ni reformuler les contenus publics.
- **Astro scope**: Les pages publiques existantes, le layout global, les
  composants de navigation, les composants de contenu, les composants d'interface
  reutilises et les styles globaux peuvent etre affectes dans la mesure ou cela
  sert les finitions d'apparence.
- **Quality gates**: Revue visuelle comparative, verification mobile, revue
  source editoriale -> page visible, verification des liens/CTA sur
  l'echantillon, validation de construction du site et parcours manuel sur les
  pages representatives.
- **Security/privacy**: Aucun secret, donnee privee, script tiers ou nouvelle
  dependance ne doit etre ajoute pour cette phase. Les informations Legal,
  Securite, contact et confidentialite doivent rester accessibles et non
  contredites.

## Assumptions

- La phase est volontairement mineure et porte sur l'apparence des pages
  existantes, pas sur une refonte de marque, une nouvelle architecture de
  contenu ou de nouveaux parcours.
- Les contenus de `edito/` sont deja valides et doivent rester la source de
  verite pendant les ajustements visuels.
- Les visiteurs cibles restent les prospects, dirigeants, leaders d'equipe,
  editeurs et parties prenantes qui evaluent la qualite et la clarte de la
  vitrine Zzzbre.
- Les finitions attendues incluent des ajustements visibles mais limites :
  hierarchie, espacement, alignement, lisibilite, contrastes, coherence des
  blocs, etats interactifs et adaptation mobile.
- L'objectif n'est pas d'ajouter de nouvelles images, preuves, integrations,
  offres ou promesses sauf si elles existent deja dans les sources autorisees.
