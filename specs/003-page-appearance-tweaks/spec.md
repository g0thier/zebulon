# Feature Specification: Ajustements visuels mineurs des pages

**Feature Branch**: `main`

**Created**: 2026-07-01

**Status**: Draft

**Input**: User description: "Nouvelle phase avec des modifications mineures de l'apparence des pages."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Corriger les irritants visuels restants (Priority: P1)

Un visiteur parcourt les pages publiques apres la premiere phase de finition et
beneficie de corrections locales qui rendent les pages plus propres, plus
equilibrees et plus faciles a lire, sans changement de fond editorial ni
nouveau parcours.

**Why this priority**: Cette phase est explicitement mineure; la valeur
principale consiste a eliminer les petits defauts visibles qui reduisent la
qualite percue d'une vitrine deja fonctionnelle.

**Independent Test**: Revoir les pages publiques representatives avant et apres
les ajustements, puis confirmer que chaque changement corrige un irritant
observable sans modifier le contenu, les liens, les statuts ni les appels a
l'action existants.

**Acceptance Scenarios**:

1. **Given** une page publique avec un espacement, alignement ou rythme visuel
   imparfait, **When** les ajustements mineurs sont appliques, **Then** la page
   parait plus reguliere sans ajout ni suppression de message public.
2. **Given** un visiteur consulte plusieurs pages consecutives, **When** il
   compare les sections, cartes, listes, badges et appels a l'action, **Then**
   les differences de presentation non intentionnelles sont reduites.
3. **Given** un editeur verifie une page ajustee avec sa source `edito/`,
   **When** il controle le texte visible, les liens et les statuts, **Then**
   toute modification visible reste conforme a la source authoritative.

---

### User Story 2 - Affiner les pages de contenu sensible ou dense (Priority: P2)

Un prospect consulte des pages comme Produit, Securite, Tarifs, Support,
Contact, Legal, Ressources ou A propos et repere plus vite les informations
importantes grace a de petits ajustements de presentation.

**Why this priority**: Les pages denses portent des informations de confiance,
d'offre ou de contact; leur lisibilite doit rester impeccable meme lorsque les
changements sont modestes.

**Independent Test**: Selectionner au moins cinq pages denses et verifier qu'un
lecteur peut identifier rapidement l'information principale, les limites, les
statuts, les contacts et l'action suivante sans confusion visuelle.

**Acceptance Scenarios**:

1. **Given** une page contient plusieurs blocs de contenu, **When** un lecteur
   la scanne rapidement, **Then** les titres, intertitres, listes et blocs
   importants restent clairement differencies.
2. **Given** une page presente des informations sensibles comme securite, prix,
   statut, contact ou mention legale, **When** son apparence est ajustee,
   **Then** ces informations restent visibles, lisibles et non ambigues.
3. **Given** une page contient des liens ou CTA existants, **When** un visiteur
   cherche l'action suivante, **Then** les elements interactifs sont faciles a
   distinguer du contenu non interactif.

---

### User Story 3 - Verifier le rendu sur formats courants (Priority: P3)

Un visiteur consulte le site sur grand ecran, tablette ou petit ecran et obtient
une experience stable, sans chevauchement, debordement de texte ni rupture de
hierarchie provoquee par les ajustements mineurs.

**Why this priority**: Meme une petite retouche d'apparence peut creer une
regression responsive; cette histoire protege l'experience sur les formats les
plus courants.

**Independent Test**: Parcourir l'accueil et un echantillon de pages profondes
sur plusieurs largeurs, puis confirmer que les contenus, actions et elements de
navigation restent lisibles et accessibles.

**Acceptance Scenarios**:

1. **Given** un visiteur ouvre une page sur petit ecran, **When** il fait
   defiler le contenu, **Then** aucun bloc critique ne chevauche un autre bloc
   et aucun texte essentiel ne devient illisible.
2. **Given** une page contient un titre long, une adresse email, un prix ou un
   lien long, **When** l'espace horizontal est limite, **Then** l'information
   reste contenue dans la page et comprehensible.
3. **Given** un visiteur utilise la navigation, le footer ou un CTA sur un
   format courant, **When** il interagit avec ces elements, **Then** les zones
   d'action restent identifiables et confortables.

---

### Edge Cases

- Une page tres courte ne doit pas sembler artificiellement vide ou
  disproportionnee apres les ajustements.
- Une page tres dense ne doit pas devenir plus lourde visuellement a cause de
  bordures, fonds, cartes ou espacements excessifs.
- Les titres, emails, URLs, prix, statuts ou CTA longs doivent rester lisibles
  sur les largeurs courantes.
- Les statuts beta, limites d'offre, messages de securite et mentions legales
  ne doivent jamais etre attenues au point de devenir secondaires ou ambigus.
- Les pages profondes visitees directement doivent garder une entree, une
  navigation et une suite logique suffisamment claires.
- Les retouches visuelles ne doivent pas introduire de promesse produit, preuve
  client, integration, illustration ou contenu decoratif non source.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Les pages publiques MUST conserver tous les contenus, liens,
  statuts, prix, contacts, mentions et appels a l'action presents avant cette
  phase, sauf correction editoriale explicitement sourcee.
- **FR-002**: Les ajustements MUST se limiter a des modifications mineures de
  presentation, de lisibilite, d'espacement, d'alignement, de contraste, de
  hierarchie ou d'etat interactif.
- **FR-003**: Les changements MUST NOT creer de nouvelle page publique, nouvelle
  rubrique de navigation, nouvelle offre, nouveau message produit ou nouveau
  parcours utilisateur.
- **FR-004**: Les ajustements MUST reduire les incoherences visibles entre les
  composants repetes, notamment sections, cartes, listes, badges, liens,
  boutons, blocs de contact, zones de navigation et footer.
- **FR-005**: Les pages denses MUST rester faciles a scanner, avec une
  distinction claire entre contenu principal, details secondaires, statuts,
  informations sensibles et actions disponibles.
- **FR-006**: Les informations de confiance, securite, prix, contact, legal et
  statut MUST rester au moins aussi visibles et comprehensibles qu'avant les
  ajustements.
- **FR-007**: Les pages MUST rester lisibles et utilisables sur les formats
  courants, sans chevauchement visible, debordement critique, texte essentiel
  tronque ou cible d'action difficile a identifier.
- **FR-008**: Chaque ajustement visible MUST pouvoir etre rattache a un irritant
  d'apparence observable ou a une amelioration de lisibilite verifiable.
- **FR-009**: Les changements MUST preserver l'ordre editorial, le sens et la
  priorite des contenus issus de `edito/`.
- **FR-010**: Les retouches MUST conserver une apparence coherente avec la
  vitrine Zzzbre existante et avec la phase de finition precedente.
- **FR-011**: Les elements interactifs visibles MUST garder un signal d'action
  clair pour distinguer liens, boutons et informations non interactives.
- **FR-012**: La validation MUST couvrir l'accueil et au moins six pages
  representatives incluant Produit, Securite, Tarifs, Support ou Contact,
  Ressources ou Blog, et Legal ou A propos.
- **FR-013**: Editorial changes MUST identify the authoritative `edito/` source
  files and keep public copy directly publishable without internal notes.
- **FR-014**: Website changes MUST state the Astro pages, layouts, components,
  assets, or content collections affected.

### Key Entities *(include if feature involves data)*

- **Page publique existante**: Page deja publiee de la vitrine Zzzbre concernee
  par une retouche d'apparence mineure.
- **Irritant visuel**: Probleme observable de presentation, lisibilite,
  espacement, alignement, contraste, hierarchie ou signal d'interaction.
- **Bloc de contenu**: Ensemble visible tel qu'une section, carte, liste, badge,
  zone de contact, information de statut, prix, lien ou CTA.
- **Source editoriale**: Fichier de `edito/` qui reste la reference pour les
  textes, liens, statuts, contacts, offres et mentions publiques.
- **Echantillon de verification**: Ensemble de pages representatives utilise
  pour valider que les retouches restent mineures, coherentes et sans regression.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% des pages de l'echantillon conservent les textes, liens,
  statuts, prix, contacts, mentions et CTA existants, sauf correction
  editoriale explicitement sourcee.
- **SC-002**: Au moins 8 pages representatives sont revues avant/apres et chaque
  page revue presente au moins un irritant visuel corrige ou aucune regression
  visuelle constatee.
- **SC-003**: Aucun chevauchement visible, debordement critique ou texte
  essentiel illisible n'est observe sur l'echantillon en grand ecran, tablette
  et petit ecran.
- **SC-004**: 90% des lecteurs testes identifient en moins de 30 secondes
  l'information principale et l'action suivante sur une page dense representative.
- **SC-005**: 100% des informations de securite, prix, contact, legal et statut
  presentes dans l'echantillon restent visibles et non ambigues apres retouche.
- **SC-006**: Une revue stakeholder qualifie les pages retouchees comme au moins
  aussi professionnelles qu'avant, et plus soignees pour 80% des pages modifiees.

## Constitution Alignment *(mandatory)*

- **Editorial source**: `edito/structure.md`, `edito/layout/1 Header.md`,
  `edito/layout/2 Footer.md`, `edito/layout/3 Sidebar.md` et les fichiers
  concernes sous `edito/contenu/` restent authoritative. Toute correction de
  texte public doit etre directement publiable et sourcee dans `edito/`.
- **Astro scope**: Les routes publiques existantes, le layout global, les
  composants de navigation, les composants de contenu, les composants
  d'interface reutilises, les assets existants et les styles globaux peuvent
  etre concernes uniquement pour soutenir des ajustements visuels mineurs.
- **Quality gates**: Revue visuelle avant/apres, verification source editoriale
  vers page visible, controle responsive sur formats courants, verification des
  liens/CTA sur l'echantillon, validation de construction du site et parcours
  manuel des pages representatives.
- **Security/privacy**: Aucun secret, donnee privee, script tiers ou nouvelle
  dependance ne doit etre ajoute. Les contenus Legal, Securite, contact et
  confidentialite doivent rester accessibles, exacts et non contredits.

## Assumptions

- Cette phase suit la spec `002-page-appearance-polish` et se concentre sur des
  retouches locales plutot que sur une nouvelle refonte.
- Les pages, contenus et parcours existants sont globalement valides; les
  modifications attendues portent sur l'apparence, la lisibilite et la finition.
- Les sources `edito/` restent la verite de publication pour tout texte, lien,
  statut, contact, offre ou mention visible.
- Les visiteurs cibles restent les prospects, dirigeants, managers, editeurs et
  parties prenantes qui evaluent la clarte et la qualite percue de Zzzbre.
- Aucun nouvel outil, suivi tiers, asset externe ou dependance n'est necessaire
  pour atteindre les objectifs de cette phase mineure.
