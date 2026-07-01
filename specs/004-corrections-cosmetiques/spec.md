# Feature Specification: Nouvelles corrections cosmetiques

**Feature Branch**: `main`

**Created**: 2026-07-01

**Status**: Draft

**Input**: User description: "nouvelles correction cosmetique"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Alleger les visuels de presentation (Priority: P1)

Un visiteur consulte l'accueil et la page Securite et voit les captures
produit presentees de maniere plus directe, sans encadrement inutile qui alourdit
la lecture ou donne une impression de double carte.

**Why this priority**: Ces deux visuels sont visibles tres tot dans le parcours
et influencent immediatement la perception de qualite et de clarte du site.

**Independent Test**: Ouvrir `/` et `/produit/securite`, comparer le rendu avant
et apres correction, puis verifier que chaque capture reste visible, bien
cadree et accompagnee de son texte d'origine sans effet de carte superflu.

**Acceptance Scenarios**:

1. **Given** un visiteur ouvre la page d'accueil, **When** il arrive sur le
   visuel principal du produit, **Then** la capture d'ecran apparait hors de la
   carte qui l'encadrait auparavant et la section reste equilibree.
2. **Given** un visiteur consulte `/produit/securite`, **When** il atteint
   l'encadre visuel de gestion des droits d'acces, **Then** la capture d'ecran
   du compte apparait sans carte supplementaire et conserve sa lisibilite.
3. **Given** un editeur compare les deux pages a leur source editoriale,
   **When** il relit les titres, textes et legendes, **Then** aucun message
   public n'a change en dehors de la presentation visuelle visee.

---

### User Story 2 - Retirer les actions secondaires non souhaitees (Priority: P2)

Un visiteur consulte l'accueil et la page Tarifs et ne voit plus d'actions
secondaires qui detournent l'attention du message principal ou du bon niveau
d'offre.

**Why this priority**: Les suppressions demandees concernent des elements
interactifs visibles qui peuvent modifier la hierarchie de lecture si elles ne
sont pas traitees proprement.

**Independent Test**: Verifier l'accueil et `/tarifs`, puis confirmer que les
actions explicitement ciblees ont disparu, que les autres liens utiles restent
presents et que la structure de page ne laisse ni vide maladroit ni rupture de
parcours.

**Acceptance Scenarios**:

1. **Given** un visiteur lit la section "Benefices" de l'accueil, **When** il
   atteint la zone contenant les liens de navigation secondaires, **Then** les
   cartes "Decouvrir les fonctionnalites", "Voir les cas d'usage", "Consulter
   les tarifs" et "Lire la page securite" ne sont plus affichees.
2. **Given** un visiteur consulte `/tarifs`, **When** il arrive juste avant la
   section "Offres beta", **Then** le bouton "Creer un compte" place au-dessus
   de cette section n'est plus affiche.
3. **Given** un visiteur poursuit sa navigation apres ces suppressions,
   **When** il cherche comment continuer vers le produit ou les offres, **Then**
   les autres actions deja prevues par la page restent identifiables.

---

### User Story 3 - Normaliser les references de contact sur la page legale (Priority: P3)

Un visiteur lit la page Legale et distingue mieux les informations juridiques
du site lorsque certaines adresses de contact sont presentees comme du texte
informatif plutot que comme des boutons d'action.

**Why this priority**: La page legale doit privilegier la clarte documentaire
et la lisibilite, meme pour des changements d'apparence tres localises.

**Independent Test**: Relire `/legal` et verifier que les cinq passages cites
dans la demande affichent leurs references de contact en texte, tout en gardant
les memes adresses email et le meme sens juridique.

**Acceptance Scenarios**:

1. **Given** un visiteur lit les sections legales citees dans la demande,
   **When** il rencontre `contact@zzzbre.com` ou `support@zzzbre.com` dans ces
   paragraphes, **Then** ces references apparaissent comme du texte et non comme
   des boutons.
2. **Given** un lecteur parcourt la page legale du debut a la fin, **When** il
   compare les passages de contact avec le reste de la page, **Then** le rendu
   parait homogene et adapte a une lecture juridique.
3. **Given** un editeur relit les paragraphes concernes, **When** il compare le
   contenu apres correction, **Then** aucune information legale, de support ou
   de confidentialite n'a ete retiree ou reformulee involontairement.

---

### Edge Cases

- Retirer l'encadrement des captures ne doit ni rogner l'image, ni casser son
  alignement, ni creer un espace vide disproportionne autour d'elle.
- Supprimer les cartes de la section "Benefices" ne doit pas laisser un bloc
  vide, un titre orphelin ou une mise en page desequilibree sur l'accueil.
- Supprimer le bouton au-dessus de "Offres beta" ne doit pas retirer les autres
  appels a l'action utiles de la page Tarifs, en particulier ceux des offres.
- Transformer des boutons en texte sur la page Legale ne doit pas masquer les
  adresses email, ni empecher leur lecture ou leur copie.
- Les corrections ciblees ne doivent pas modifier d'autres pages, d'autres
  CTA, ni l'ordre editorial des sections non mentionnees dans la demande.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La page `/` MUST afficher la capture d'ecran principale du produit
  sans la carte visuelle qui l'encadrait auparavant, tout en conservant le meme
  contenu, le meme ordre editorial et la meme lisibilite generale.
- **FR-002**: La section "Benefices" de la page `/` MUST NOT afficher les quatre
  cartes de navigation "Decouvrir les fonctionnalites", "Voir les cas d'usage",
  "Consulter les tarifs" et "Lire la page securite".
- **FR-003**: La suppression des cartes de la section "Benefices" MUST laisser
  une presentation propre, sans conteneur vide ni rupture visible dans le rythme
  de la page.
- **FR-004**: La page `/produit/securite` MUST afficher la capture d'ecran du
  compte sans la carte visuelle qui l'encadrait auparavant, en conservant son
  contexte explicatif et sa lisibilite.
- **FR-005**: La page `/tarifs` MUST NOT afficher le bouton "Creer un compte"
  situe au-dessus de la section "Offres beta".
- **FR-006**: La page `/tarifs` MUST conserver les autres informations
  commerciales, offres, prix, quotas, badges et appels a l'action deja presents.
- **FR-007**: La page `/legal` MUST afficher sous forme de texte, et non comme
  des boutons, les references de contact incluses dans les cinq paragraphes
  explicitement cites dans la demande de correction.
- **FR-008**: La page `/legal` MUST conserver inchanges le texte, les adresses
  email et la portee juridique des passages concernes, hors changement de style
  de presentation.
- **FR-009**: Les quatre pages ciblees MUST conserver leur contenu editorial,
  leurs titres, leur structure et leurs autres actions non mentionnees dans la
  demande.
- **FR-010**: Chaque correction MUST etre verifiable visuellement sur desktop et
  sur petit ecran, sans chevauchement, debordement critique ni perte de
  comprehension.
- **FR-011**: La portee de cette demande MUST rester limitee aux quatre pages
  ciblees et aux elements explicitement enumeres dans `Correction.md`.
- **FR-012**: Editorial changes MUST identify the authoritative `edito/` source
  files and keep public copy directly publishable without internal notes.
- **FR-013**: Website changes MUST state the Astro pages, layouts, components,
  assets, or content collections affected.

### Key Entities *(include if feature involves data)*

- **Page ciblee**: Une des quatre pages publiques explicitement nommees dans la
  demande: l'accueil, Securite, Tarifs et Legal.
- **Capture de presentation**: Visuel produit ou compte actuellement visible
  dans une carte et qui doit etre presente plus directement.
- **Carte de navigation secondaire**: Element cliquable de l'accueil dans la
  zone "Benefices" qui doit etre retire sans impact sur le reste du parcours.
- **CTA tarifaire cible**: Bouton "Creer un compte" situe uniquement au-dessus
  de "Offres beta" sur la page Tarifs.
- **Reference de contact legale**: Adresse email affichee dans un paragraphe
  juridique ou informatif et qui doit etre rendue comme texte.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% des corrections listees dans `Correction.md` sont visibles et
  conformes sur `/`, `/produit/securite`, `/tarifs` et `/legal`.
- **SC-002**: 0 element cible supprime par erreur en dehors du perimetre
  demande, notamment aucun CTA d'offre sur `/tarifs` et aucun texte legal sur
  `/legal`.
- **SC-003**: Les quatre pages ciblees sont revues sur grand ecran et petit
  ecran sans chevauchement visible, debordement critique ou section vide issue
  des suppressions demandees.
- **SC-004**: Lors d'une revue manuelle, un lecteur identifie en moins de 15
  secondes la fonction principale de chaque page ciblee apres correction.
- **SC-005**: 100% des adresses email mentionnees dans les cinq passages legaux
  cibles restent lisibles, exactes et presentes apres transformation en texte.

## Constitution Alignment *(mandatory)*

- **Editorial source**: `edito/contenu/index.md`, `edito/contenu/Produit/4 Sécurité.md`, `edito/contenu/Tarifs/Tarifs.md`, `edito/contenu/Légal/Légal.md`, ainsi que `edito/structure.md` pour la hierarchie publique des pages.
- **Astro scope**: Les routes publiques `/`, `/produit/securite`, `/tarifs` et `/legal`, ainsi que les layouts, composants de cartes, composants de CTA, rendus de contenu riche et styles partages necessaires a ces quatre pages uniquement.
- **Quality gates**: Comparaison visuelle avec `Correction.md`, verification des sources editoriales correspondantes, revue desktop/petit ecran des quatre pages ciblees, controle des emails et CTA restants, et verification manuelle du parcours de lecture.
- **Security/privacy**: Aucun secret, script tiers, collecte supplementaire ou nouvelle donnee utilisateur. Les references de contact et informations legales doivent rester exactes et visibles.

## Assumptions

- `Correction.md` represente la liste exhaustive des corrections attendues pour
  cette demande.
- Les suppressions visees concernent uniquement l'affichage public des elements
  cites et non la suppression de leur source editoriale d'origine.
- Les autres CTA "Creer un compte" presents ailleurs sur le site ou dans les
  cartes d'offres de `/tarifs` restent souhaites.
- Les adresses email de la page Legale doivent rester du texte lisible et
  coherent avec le reste du contenu juridique, sans ajout de nouveau message.
- Aucune nouvelle page, aucun nouveau contenu editorial et aucun changement
  d'offre commerciale ne font partie de ce perimetre.
