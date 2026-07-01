# Audit contenu site vitrine Astro zzzbre

## Verdict global

Statut : **majoritairement prêt pour construire un site vitrine Astro multi-pages**.

Le corpus éditorial contient déjà les pages front nécessaires : accueil, produit, cas d'usage, tarifs, sécurité, ressources, contact, support, à propos, clients et légal.

La bonne approche n'est pas de tout ramener dans `contenu/index.md`. L'accueil doit servir de porte d'entrée courte : il présente la promesse de zzzbre, le CTA principal, quelques bénéfices, puis oriente vers les pages dédiées. Les autres fichiers Markdown restent des pages front complètes, avec leur propre rôle éditorial.

Point important : aucun projet Astro n'est présent dans le repo à ce stade. Cet audit évalue donc la préparation éditoriale du site vitrine Astro, pas l'implémentation technique.

## Modèle éditorial recommandé

- `contenu/index.md` : page d'accueil et hub de navigation.
- Pages Produit : expliquer les fonctionnalités, la sécurité, les intégrations et l'API.
- Pages Cas d'usage : adapter la promesse à des contextes distincts.
- Page Tarifs : présenter les offres beta, les prix, les quotas et la FAQ.
- Pages Ressources : organiser blog, guides, documentation et webinaires.
- Pages À propos, Presse, Clients : ajouter du contexte et de la confiance sans inventer de preuve.
- Pages Contact, Support, Légal : rassurer, orienter et couvrir les besoins pratiques.

## Rôle précis de l'accueil

`index.md` ne doit pas devenir une page longue qui absorbe les contenus des autres pages. Il doit rester lisible en première intention et faire pointer vers les bonnes destinations.

Sections actuelles et recommandées pour `index.md` :

1. Hero
   - Titre, sous-titre, accroche, CTA `Créer un compte`, visuel produit.
   - Source actuelle : déjà présent dans `contenu/index.md`.

2. Bénéfices
   - Clarifier les priorités.
   - Aligner les équipes.
   - Suivre les décisions et les actions.
   - Source actuelle : déjà présent dans `contenu/index.md`.

3. Produit
   - Texte court pour orienter vers Fonctionnalités, Sécurité, Intégrations et API.
   - Statut : ajouté.
   - Objectif : aider le visiteur à comprendre ce que zzzbre permet aujourd'hui et ce qui est en développement.

4. Cas d'usage
   - Texte court : découvrir comment zzzbre aide selon le contexte d'entreprise.
   - Cards vers PME, Grandes entreprises et Secteurs.
   - Statut : ajouté.
   - Objectif : ne pas tout expliquer sur l'accueil, mais envoyer vers les pages dédiées.

5. Tarifs
   - Résumé court ou lien vers la page Tarifs.
   - Statut : ajouté.
   - Objectif : rendre l'accès aux offres visible sans répéter toute la FAQ.

6. Ressources
   - Liens vers Blog, Guides, Webinaires et Documentation.
   - Statut : ajouté.
   - Objectif : montrer que le site a une profondeur éditoriale.

7. Clients
   - Lien vers Études de cas.
   - Statut : ajouté.
   - Objectif : préparer les futurs retours d'expérience sans inventer de preuve client.

8. À propos
   - Liens vers Équipe, Carrières et Presse.
   - Statut : ajouté.
   - Objectif : donner du contexte sur le projet, la vision et les informations corporate.

9. Support, Contact et Légal
   - Liens vers les pages dédiées.
   - Statut : ajouté.
   - Objectif : orienter les demandes pratiques et les informations de confiance.

10. CTA final
   - CTA final `Créer un compte`.
   - Contact alternatif pour les besoins spécifiques.
   - Statut : ajouté.

## Pages front déjà prêtes

- Accueil : promesse courte, CTA principal, bénéfices et premiers liens de suite.
- Produit / Fonctionnalités : vision plateforme, modules disponibles en beta, roadmap générale.
- Produit / Sécurité : accès, rôles, permissions, bonnes pratiques et FAQ.
- Produit / Intégrations : page en développement, utile pour la vision data et BI.
- Produit / API : page en développement, utile pour les équipes data et outils internes.
- Cas d'usage / PME : page prioritaire pour la cible principale.
- Cas d'usage / Grandes entreprises : page adaptée à une approche pilote.
- Cas d'usage / Secteurs : page transversale par contexte métier.
- Tarifs : accès libre, offres beta mensuelles, quotas et FAQ.
- Ressources : blog, guides, webinaires, documentation et articles Motivation.
- Clients : appel à retours d'expérience réels, sans preuve inventée.
- À propos : équipe, carrières et presse.
- Contact et Support : contacts utiles et orientation simple.
- Légal : base éditoriale prudente à faire valider juridiquement.

## Sections ajoutées dans l'accueil

- Section Produit avec cards vers :
  - Fonctionnalités ;
  - Sécurité ;
  - Intégrations ;
  - API.
- Section Cas d'usage avec cards vers :
  - PME ;
  - Grandes entreprises ;
  - Secteurs.
- Section Tarifs avec lien vers :
  - Tarifs.
- Section Ressources avec liens vers :
  - Blog ;
  - Guides ;
  - Webinaires ;
  - Documentation.
- Section Clients avec lien vers :
  - Études de cas.
- Section À propos avec cards vers :
  - Équipe ;
  - Carrières ;
  - Presse.
- Sections Support, Contact et Légal avec liens vers les pages dédiées.
- CTA final avec `Créer un compte` et `contact@zzzbre.com`.

## Manques ou confirmations nécessaires

- Visuel hero : `contenu/index.md` contient un emplacement `![Capture d'écran du produit]()` sans source confirmée.
- Capture sécurité : `Capture-droit-access.png` est mentionnée dans la page Sécurité, mais le fichier doit être vérifié avant intégration.
- Preuves client : aucun témoignage, chiffre, logo client ou cas validé n'est disponible. Ne pas inventer de preuve.
- Légal : `contenu/Légal/Légal.md` doit être validé juridiquement avant usage comme document contractuel définitif.
- Astro : aucun `package.json`, `astro.config.*` ou dossier `src/` n'a été trouvé dans le repo. La future intégration devra créer la structure technique.
- Navigation : `structure.md` décrit maintenant l'accueil comme hub de navigation ; il reste à décider quels liens apparaissent dans le header et le footer Astro.

## Risques éditoriaux

- Risque de confusion : parler de landing sans préciser la logique multi-pages peut laisser penser que tout doit être concentré dans une seule page.
- Risque de dilution : l'accueil peut devenir trop long si toutes les pages sont résumées avec trop de détails.
- Risque de surpromesse : la roadmap Produit couvre beaucoup de domaines, mais seuls certains modules sont disponibles en beta.
- Risque de preuve faible : la page Études de cas prépare la collecte de retours, mais ne fournit pas encore de preuve commerciale.
- Risque juridique : les mentions légales sont prudentes, mais non validées juridiquement.
- Risque visuel : sans capture produit confirmée, l'accueil peut manquer de matérialité.

## Recommandations d'intégration Astro

- Construire le site comme un ensemble de pages front, pas comme une page unique.
- Garder `index.md` court et orienté navigation.
- Transformer les sections de l'accueil en composants Astro simples : Hero, Benefits, ProductLinks, UseCaseCards, PricingLink, ResourceLinks, ClientLink, AboutLinks, SupportLink, ContactLink, LegalLink, FinalCTA, Footer.
- Garder les pages longues pour les routes dédiées : Produit, Cas d'usage, Tarifs, Sécurité, Ressources, Contact, Support et Légal.
- Utiliser les fichiers Markdown comme source éditoriale, puis définir une convention de liens et d'assets pour Astro.
- Prévoir un lien clair vers la page Légal, avec mention interne que la validation juridique reste nécessaire.

## Conclusion actionnable

Le contenu éditorial est suffisant pour démarrer un site vitrine Astro multi-pages. `contenu/index.md` joue maintenant le rôle de hub d'accueil, oriente vers les principales pages front existantes et se termine par un CTA final.

Ordre recommandé :

1. Décider les liens du header et du footer Astro.
2. Valider ou produire le visuel hero.
3. Vérifier les assets produit avant intégration Astro.
4. Relire les textes de cards au moment de la création des composants Astro.
