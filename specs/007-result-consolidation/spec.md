# Feature Specification: Result Consolidation

**Feature Branch**: `[007-result-consolidation]`

**Created**: 2026-07-02

**Status**: Draft

**Input**: User description: "On va consolider le résultat au propre."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Clarifier les sources publiques (Priority: P1)

En tant que mainteneur du site, je veux que chaque surface publique ait une
source autoritative claire et unique afin de comprendre immédiatement où agir
quand une page ou un contenu doit être relu, corrigé ou déplacé.

**Why this priority**: Tant que plusieurs états transitoires coexistent, la
maintenance reste coûteuse et risquée. La consolidation de la source de vérité
est la base du nettoyage final.

**Independent Test**: Cette story peut être validée en prenant un échantillon
de pages publiques et d'articles Motivation, puis en vérifiant qu'un
mainteneur identifie leur source autoritative sans parcourir d'anciens chemins
ou un modèle intermédiaire.

**Acceptance Scenarios**:

1. **Given** une route publique existante, **When** un mainteneur cherche où
   modifier son contenu, **Then** il trouve une source autoritative unique et
   explicite sans dépendre d'un ancien arbre éditorial.
2. **Given** un article Motivation existant, **When** un mainteneur cherche sa
   source, **Then** il la trouve dans la zone qui possède déjà la route
   publique correspondante.

---

### User Story 2 - Nettoyer l'état transitoire (Priority: P2)

En tant que contributeur contenu ou produit, je veux que les anciens emplacements
ou doublons transitoires soient retirés du flux courant afin d'éviter les
modifications au mauvais endroit et les incohérences entre sources.

**Why this priority**: Une fois la source autoritative clarifiée, le principal
risque devient le maintien involontaire d'un état intermédiaire qui brouille les
revues, les corrections et les futures évolutions.

**Independent Test**: Cette story peut être validée en auditant les sources
publiques et les liens de navigation pour confirmer qu'aucun ancien chemin ou
source concurrente ne reste impliqué dans la publication courante.

**Acceptance Scenarios**:

1. **Given** un contributeur qui modifie le site, **When** il parcourt les
   sources publiques actives, **Then** il ne rencontre pas de doublon présenté
   comme encore autoritatif.
2. **Given** un audit de consolidation, **When** les chemins publics et
   partagés sont vérifiés, **Then** les anciens emplacements transitoires ne
   pilotent plus le rendu actuel.

---

### User Story 3 - Préserver l'expérience publique après consolidation (Priority: P3)

En tant que visiteur du site, je veux que la consolidation interne ne dégrade
pas les routes, la navigation, les liens parents, les CTA ou le contenu
public afin que l'expérience reste cohérente pendant le nettoyage.

**Why this priority**: La consolidation n'a de valeur que si elle simplifie le
travail interne sans introduire de régression visible pour les visiteurs.

**Independent Test**: Cette story peut être validée en rejouant un parcours
représentatif couvrant la page d'accueil, une page produit, le blog, une
catégorie et un article Motivation.

**Acceptance Scenarios**:

1. **Given** un visiteur qui navigue sur les routes publiques existantes,
   **When** la consolidation est terminée, **Then** les URL, la navigation et
   les liens clés restent valides et cohérents.
2. **Given** un visiteur qui ouvre un article Motivation, **When** il remonte
   vers sa catégorie ou poursuit la navigation, **Then** les liens de
   découverte et les CTA restent utiles et inchangés sauf correction
   explicitement voulue.

---

### Edge Cases

- Que se passe-t-il si un même contenu existe encore dans un emplacement
  transitoire et dans son emplacement final au moment de la consolidation ?
- Comment la consolidation gère-t-elle un article ou une page dont les liens
  parents, catégories ou CTA seraient incomplets après déplacement ?
- Que se passe-t-il si un ancien chemin n'est plus autoritatif mais reste cité
  dans un audit, une documentation ou un flux de validation ?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Chaque page publique non article et chaque article Motivation
  MUST avoir une source autoritative unique et identifiable.
- **FR-002**: Les mainteneurs MUST pouvoir identifier l'emplacement
  autoritatif d'une page publique ou d'un article représentatif en consultant
  au plus les fichiers de la zone qui possède déjà la route concernée.
- **FR-003**: La consolidation MUST supprimer ou neutraliser les sources
  transitoires qui pourraient laisser croire qu'un ancien emplacement reste
  responsable du rendu public courant.
- **FR-004**: Les contenus Motivation MUST rester modifiables comme des
  contenus individuels, regroupés dans la même zone de propriété que leurs
  routes publiques.
- **FR-005**: Les URL publiques existantes, les intitulés de navigation, les
  liens parents de catégorie et les CTA clés MUST être préservés sauf
  correction éditoriale explicitement décidée.
- **FR-006**: Editorial changes MUST identify the authoritative public content
  sources and keep public copy directly publishable without internal notes.
- **FR-007**: Website changes MUST state the Astro pages, layouts, components,
  assets, or content collections affected.
- **FR-008**: Les audits de consolidation MUST permettre de confirmer qu'aucun
  ancien chemin de source publique ne pilote encore le rendu des routes
  courantes.

### Key Entities *(include if feature involves data)*

- **Public Content Source**: surface éditoriale autoritative d'une page, d'un
  article ou d'un élément partagé, avec son périmètre de responsabilité et ses
  liens publics associés.
- **Motivation Article**: contenu individuel de la série Motivation, avec son
  slug public, son titre, sa catégorie parent et ses CTA de découverte.
- **Consolidation Audit Record**: preuve de validation regroupant les routes
  vérifiées, les incohérences trouvées, les chemins retirés et le résultat
  final de la consolidation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% des routes publiques actuelles et des articles Motivation
  vérifiés pendant la consolidation pointent vers une source autoritative
  unique.
- **SC-002**: Un mainteneur peut localiser la source autoritative de chacune
  des 5 surfaces représentatives définies dans la spec en moins de 2 minutes
  par surface.
- **SC-003**: 0 référence active à un ancien chemin de source publique retiré
  n'apparaît dans l'audit des sources actives défini pour la consolidation.
- **SC-004**: 100% du parcours représentatif de validation conserve des routes
  valides, des liens de navigation utiles et un contenu public non vide après
  consolidation.

## Constitution Alignment *(mandatory)*

- **Authoritative public content sources**: Routes publiques explicites sous
  `src/pages/`, éléments partagés de shell, et contenus individuels Motivation
  regroupés dans la zone propriétaire de `/ressources/blog/motivation`.
- **Astro scope**: Routes publiques du site, structure du blog Motivation,
  navigation partagée, et surfaces de validation liées à cette consolidation.
- **Quality gates**: Revue du contenu public, `astro build`, audit des sources
  actives, vérification manuelle d'un parcours représentatif, et mise à jour
  des preuves de validation.
- **Security/privacy**: Aucun nouveau secret, aucune nouvelle donnée privée,
  aucune dépendance externe supplémentaire ; la consolidation doit conserver les
  garde-fous de navigation et de publication existants.

## Assumptions

- La consolidation vise à finaliser l'état obtenu après le découplage des pages
  publiques, pas à redéfinir les routes publiques ou la stratégie éditoriale du
  site.
- La série Motivation reste le seul ensemble d'articles publics répétables à
  conserver comme contenus individuels distincts.
- Les ajustements de contenu restent limités aux corrections nécessaires pour
  préserver cohérence, lisibilité et liens publics pendant la consolidation.
- Le résultat attendu privilégie la clarté de maintenance et la suppression des
  états intermédiaires plutôt qu'un changement visible de l'expérience visiteur.
