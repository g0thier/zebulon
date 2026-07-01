# Feature Specification: Site vitrine Zzzbre

**Feature Branch**: `main`

**Created**: 2026-07-01

**Status**: Draft

**Input**: User description: "Depuis l'arborescence (`edito/structure.md`), le contenu editorial (`edito/contenu/`) et les layouts (`edito/layout/`) dans `edito`, je souhaite creer un site vitrine pour presenter Zzzbre. L'IA n'invente rien et transcript strictement les contenus de `edito/` en site."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Comprendre la proposition Zzzbre (Priority: P1)

Un dirigeant, fondateur ou leader d'equipe arrive sur le site et doit comprendre
rapidement ce que Zzzbre propose, a qui la plateforme s'adresse, quels benefices
elle apporte et quelles actions sont possibles ensuite, uniquement a partir des
contenus deja presents dans `edito/`.

**Why this priority**: La page d'accueil et le premier niveau de navigation
conditionnent la comprehension du produit et la capacite du visiteur a poursuivre
vers un compte, un tarif, un cas d'usage ou un contact.

**Independent Test**: Un visiteur decouvre la page d'accueil sans contexte
externe et peut expliquer en moins de deux minutes que Zzzbre aide les leaders a
piloter avec la donnee, coordonner les equipes et suivre les actions.

**Acceptance Scenarios**:

1. **Given** un visiteur arrive sur la page d'accueil, **When** il lit le premier
   ecran, **Then** il voit la marque Zzzbre, la promesse principale, les
   benefices cles et un appel a creer un compte.
2. **Given** un visiteur veut explorer le produit, **When** il consulte la
   navigation principale, **Then** il peut acceder aux pages Produit, Cas
   d'usage, Tarifs, Ressources, Clients, A propos, Support, Contact et Legal.
3. **Given** un visiteur veut verifier la credibilite de la beta, **When** il
   consulte les sections Produit et Securite, **Then** il distingue clairement
   les modules disponibles, les elements en developpement et les garanties
   affichees.
4. **Given** un editeur compare la page affichee avec le fichier `edito/`
   source, **When** il controle les titres, paragraphes, listes, CTA, contacts,
   statuts et liens, **Then** il ne trouve aucune promesse, formulation ou
   information ajoutee par l'IA.

---

### User Story 2 - Explorer un besoin ou un profil d'entreprise (Priority: P2)

Un prospect compare les pages de cas d'usage, de fonctionnalites, de tarifs et
de securite pour determiner si Zzzbre convient a son contexte d'entreprise et a
son premier usage, sans que le site enrichisse ou reformule les contenus sources
au-dela de leur presentation.

**Why this priority**: Le site doit transformer une promesse generale en parcours
concret pour les PME, grandes organisations, equipes pilotes et visiteurs qui
veulent evaluer le prix, les roles, les donnees et les conditions d'acces.

**Independent Test**: Un prospect peut partir d'un cas d'usage, consulter les
fonctionnalites et les tarifs, puis choisir entre creer un compte ou contacter
Zzzbre pour un besoin specifique.

**Acceptance Scenarios**:

1. **Given** un responsable de PME cherche une solution de pilotage, **When** il
   consulte le cas d'usage PME, **Then** il comprend les premiers usages beta,
   le cycle de pilotage propose et les resultats attendus.
2. **Given** un prospect compare les offres, **When** il ouvre Tarifs, **Then**
   il voit l'acces libre, les offres beta, les utilisateurs inclus, les limites
   de chaque offre et les reponses aux questions frequentes.
3. **Given** un visiteur se preoccupe des donnees d'equipe, **When** il consulte
   Securite ou Legal, **Then** il comprend les principes de roles, permissions,
   acces, confidentialite et contacts utiles.

---

### User Story 3 - Acceder aux ressources et contacter Zzzbre (Priority: P3)

Un visiteur souhaite approfondir le data driven management, trouver une aide,
lire des contenus pratiques, proposer un retour d'experience ou entrer en
contact avec l'equipe Zzzbre a partir des liens, emails et textes deja fournis
dans `edito/`.

**Why this priority**: Les ressources, le support et les contacts prolongent la
decouverte du produit et servent les visiteurs qui ne sont pas prets a creer un
compte immediatement.

**Independent Test**: Un visiteur peut rejoindre une ressource, retrouver un
contact adapte et revenir vers une action de conversion depuis les zones de
navigation, le footer ou la sidebar.

**Acceptance Scenarios**:

1. **Given** un visiteur veut apprendre, **When** il consulte Ressources, **Then**
   il peut acceder au blog, aux guides, aux webinaires et a la documentation.
2. **Given** un visiteur a besoin d'aide, **When** il consulte Support ou la
   sidebar, **Then** il trouve les contacts support et documentation utiles.
3. **Given** un visiteur veut parler a l'equipe, **When** il consulte Contact ou
   le footer, **Then** il trouve l'email general, les contacts support/presse et
   l'adresse postale.

---

### Edge Cases

- Le contenu editorial indique un statut beta ou "en developpement" : le site
  doit l'afficher sans promettre une disponibilite immediate.
- Une page de contenu ne comporte pas encore de visuel ou de cas client reel :
  le site doit presenter uniquement l'information disponible ou omettre le bloc,
  sans inventer d'element non valide.
- Un contenu source contient un libelle editorial tel que "Titre", "Texte",
  "Call to action" ou "cards" : le site doit utiliser ce libelle comme structure
  de contenu et afficher uniquement la valeur publique correspondante lorsque le
  libelle n'est pas lui-meme un contenu public.
- Un contenu source est incomplet, vide ou ambigu : le site ne doit pas le
  completer par generation; l'ecart doit etre signale pour correction editoriale.
- Un visiteur arrive directement sur une page profonde : il doit pouvoir revenir
  vers l'accueil, les tarifs, le contact ou la creation de compte.
- Un lien de conversion externe est indisponible : le visiteur doit toujours
  disposer d'un contact email visible.
- Le visiteur consulte le site sur un petit ecran : la navigation, les contenus
  essentiels et les appels a l'action doivent rester accessibles.
- Les informations legales ou de securite evoluent : les pages correspondantes
  doivent rester accessibles depuis la navigation globale et le footer.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Le site MUST presenter la marque Zzzbre, sa promesse, son public
  cible et ses benefices principaux des la page d'accueil.
- **FR-002**: Le site MUST reprendre l'arborescence definie dans
  `edito/structure.md` pour organiser les pages et les familles de contenus.
- **FR-003**: Le site MUST exposer une navigation globale conforme au header
  editorial, avec les sections Accueil, Produit, Cas d'usage, Tarifs,
  Ressources, Clients, A propos, Support, Contact et Legal.
- **FR-004**: Le site MUST integrer un footer donnant acces aux principales
  sections, aux ressources, aux contacts utiles et a l'appel a creer un compte.
- **FR-005**: Le site MUST proposer les appels a l'action existants vers la
  creation de compte, la consultation des tarifs, la documentation et le contact.
- **FR-006**: Les pages Produit MUST distinguer les fonctionnalites disponibles
  en beta, les integrations/API en developpement et les sujets de securite.
- **FR-007**: Les pages Cas d'usage MUST aider les visiteurs a se projeter selon
  leur contexte d'organisation, notamment PME, grandes entreprises et secteurs.
- **FR-008**: La page Tarifs MUST afficher l'acces libre, les offres beta, les
  prix, les utilisateurs inclus, les usages recommandes, les limites et la FAQ.
- **FR-009**: Les pages Ressources MUST donner acces au blog, aux guides, aux
  webinaires, a la documentation et aux contenus de categorie disponibles.
- **FR-010**: Les pages Support, Contact et Legal MUST afficher les emails,
  l'adresse et les informations utiles sans masquer les limites de la beta.
- **FR-011**: Le site MUST conserver le contenu editorial comme source
  authoritative et ne pas introduire de texte interne, de note d'intention ou de
  placeholder visible.
- **FR-012**: Le site MUST transcrire strictement les contenus de `edito/` :
  titres, sous-titres, accroches, paragraphes, listes, cartes, statuts, prix,
  emails, adresses, liens et appels a l'action doivent rester fideles a leur
  source.
- **FR-013**: Le site MUST NOT inventer, reformuler creativement, completer ou
  extrapoler une promesse, une fonctionnalite, une offre, un statut, une preuve,
  un contact, une information legale, une information de securite ou un cas
  client absent de `edito/`.
- **FR-014**: Toute adaptation de presentation MUST conserver le sens, l'ordre
  editorial, les limites beta, les liens et les statuts indiques dans les
  fichiers sources.
- **FR-015**: Si un contenu necessaire a une page est absent, vide ou non valide,
  le site MUST signaler le manque pour correction editoriale plutot que generer
  un contenu de remplacement.
- **FR-016**: Le site MUST permettre a un visiteur d'atteindre une action de
  conversion ou de contact depuis chaque grande section.
- **FR-017**: Le site MUST presenter les informations de securite, de roles,
  d'acces et de confidentialite de maniere claire pour les visiteurs evaluant la
  confiance produit.
- **FR-018**: Le site MUST rester comprehensible sans compte utilisateur, car il
  sert de vitrine publique avant l'acces a la plateforme.
- **FR-019**: Les contenus clients MUST indiquer que les etudes de cas seront
  publiees uniquement lorsqu'elles seront reelles, validees et utiles.
- **FR-020**: Editorial changes MUST identify the authoritative `edito/` source
  files and keep public copy directly publishable without internal notes.
- **FR-021**: Website changes MUST state the Astro pages, layouts, components,
  assets, or content collections affected.

### Key Entities *(include if feature involves data)*

- **Page editoriale**: Une page publique issue de `edito/contenu/`, avec titre,
  sous-titre, accroche, blocs de contenu, liens, CTA et statut eventuel.
- **Source editoriale**: Fichier Markdown dans `edito/structure.md`,
  `edito/contenu/` ou `edito/layout/` servant de reference unique pour les
  textes, liens, statuts, prix, contacts et regroupements affiches.
- **Navigation globale**: Ensemble des liens et groupes issus du header, du
  footer et de la sidebar, permettant de parcourir le site vitrine.
- **Appel a l'action**: Lien ou contact permettant de creer un compte, consulter
  les tarifs, lire la documentation ou contacter Zzzbre.
- **Offre beta**: Presentation commerciale comprenant nom, prix, utilisateurs
  inclus, usage recommande, limites et possibilite de contact.
- **Ressource**: Contenu d'approfondissement tel que blog, guide, webinaire,
  documentation ou categorie editoriale.
- **Contact**: Information utile pour joindre Zzzbre selon le besoin general,
  support, presse, securite ou legal.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% des visiteurs testes peuvent identifier en moins de deux
  minutes ce que propose Zzzbre, a qui le service s'adresse et l'action suivante
  possible.
- **SC-002**: 100% des sections presentes dans `edito/structure.md` sont
  accessibles depuis la navigation globale ou le footer.
- **SC-003**: Un visiteur peut acceder a la creation de compte, aux tarifs ou au
  contact en trois interactions maximum depuis chaque grande section.
- **SC-004**: 100% des textes, liens, prix, statuts, emails et adresses visibles
  sur le site sont tracables a un fichier source dans `edito/`.
- **SC-005**: Un audit source -> site ne releve aucune information inventee,
  promesse ajoutee, cas client non valide, offre non sourcee ou reformulation qui
  change le sens du contenu editorial.
- **SC-006**: 100% des offres, statuts beta et elements en developpement sont
  presentes sans contradiction avec les contenus editoriaux sources.
- **SC-007**: 90% des visiteurs testes comprennent la difference entre contenu
  produit, cas d'usage, tarifs, ressources et support apres une navigation libre.

## Constitution Alignment *(mandatory)*

- **Editorial source**: `edito/structure.md`, tous les fichiers de
  `edito/contenu/`, et les layouts `edito/layout/1 Header.md`,
  `edito/layout/2 Footer.md`, `edito/layout/3 Sidebar.md` sont les seules
  sources authoritative de la vitrine. Aucun contenu public ne doit etre invente
  en dehors de ces sources.
- **Astro scope**: Toutes les pages publiques de presentation de Zzzbre sont
  concernees, avec une attention particuliere a l'accueil, aux pages de contenu,
  a la navigation globale, au footer, a la sidebar et aux visuels publics.
- **Quality gates**: Revue editoriale contre les fichiers `edito/`, audit
  source -> site pour confirmer l'absence d'invention, verification de
  navigation complete, verification mobile, verification des liens de CTA et de
  contact, validation de construction du site, et parcours manuel accueil ->
  produit/cas d'usage -> tarifs/contact.
- **Security/privacy**: Les pages Securite et Legal doivent rester accessibles,
  les informations de roles/acces/confidentialite ne doivent pas etre
  contredites, et aucun secret, donnee privee ou information client non validee
  ne doit etre publie.

## Assumptions

- Le site vitrine est public et consultable sans authentification.
- Les contenus existants dans `edito/` sont la source de verite initiale et ne
  doivent pas etre reinventes pendant la creation de la vitrine.
- L'IA ou tout outil de generation ne sert qu'a structurer la presentation du
  site; il ne cree pas de nouveau contenu public, ne complete pas les blancs et
  ne modifie pas le sens des textes sources.
- La cible prioritaire comprend les dirigeants, fondateurs, leaders, responsables
  d'equipe et prospects PME interesses par le data driven management.
- La creation de compte pointe vers le lien existant `https://zzzbre.com/login`.
- Les contenus marques beta, en developpement ou a venir doivent rester presentes
  comme tels jusqu'a mise a jour editoriale.
- Les etudes de cas client ne doivent pas etre inventees; seules des experiences
  reelles et validees pourront etre publiees.
