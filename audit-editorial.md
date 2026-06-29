# Audit editorial des contenus zzzbre

## Direction generale

- Marque a harmoniser : `zzzbre`.
- Domaine a utiliser : `https://zzzbre.com`.
- CTA principal : `Creer un compte`, vers `https://zzzbre.com/login`.
- Cible prioritaire : dirigeants de PME qui veulent clarifier la strategie, coordonner les equipes et suivre l'execution.
- Ton : accessible startup, direct, clair, moderne, credible.
- Maturite produit : beta/lancement. Les fonctionnalites disponibles doivent etre separees clairement des fonctionnalites en cours de developpement.

## Priorites de contenu

1. Accueil
2. Produit / Fonctionnalités
3. Cas d'usage / PME
4. Tarifs
5. Sécurité
6. Contact
7. Pages secondaires : ressources, equipe, presse, support, legal, API, intégrations, documentation

## Checklist globale

- [ ] Remplacer les occurrences `zzzebre` par `zzzbre`.
- [ ] Harmoniser le CTA principal : `Creer un compte`.
- [ ] Corriger les fautes visibles avant integration dans Astro.
- [ ] Distinguer partout `Disponible en beta` et `En developpement`.
- [ ] Ajouter une intention claire a chaque page.
- [ ] Ajouter au moins une preuve, un exemple ou un cas concret sur les pages principales.
- [ ] Ajouter une FAQ sur les pages Tarifs, Sécurité et Contact.
- [ ] Eviter les formulations trop vagues comme `Nos developpements en cours` lorsqu'une explication produit est necessaire.

---

## 1. Accueil

Fichier : `contenu/index.md`

### Deja exploitable

- Le positionnement general est present : outil de pilotage avec la donnee.
- La promesse mentionne strategie, coordination et suivi des equipes.
- Le CTA existe deja et pointe vers `https://zzzbre.com/login`.
- Un visuel produit est prevu.

### Manques

- La page ne dit pas clairement a qui s'adresse zzzbre.
- La promesse doit etre clarifiee sans transformer l'accueil en page longue.
- Il manque 3 benefices tres synthetiques : clarifier les priorites, aligner l'equipe, suivre les decisions/actions.
- Il manque des liens de suite vers les pages dediees : Produit, Cas d'usage, Tarifs, Securite.
- Le CTA principal doit etre simplifie.

### Sections a ajouter

- Hero court : titre, sous-titre, CTA principal, visuel produit.
- Accroche : une phrase sur la cible PME et le statut beta.
- Benefices courts : 3 points maximum.
- Liens de suite :
  - Decouvrir les fonctionnalites ;
  - Voir les cas d'usage ;
  - Consulter les tarifs ;
  - Lire la page securite si necessaire.

### A ne pas faire

- Ne pas recapituler toutes les pages du site dans l'accueil.
- Ne pas ajouter de FAQ dans l'accueil pour le moment.
- Ne pas detailler la roadmap, les tarifs, la securite ou le cas client ici : ces contenus doivent rester dans leurs pages dediees.
- Ne pas transformer l'accueil en page narrative principale.

### Incoherences

- `zzzebre` doit devenir `zzzbre`.
- `Creer` est sans accent dans le fichier actuel ; choisir une convention et l'appliquer partout.
- Le libelle actuel du CTA melange plusieurs intentions : creer un compte, acceder au produit, lancez-vous.
- Le visuel principal n'a pas de source.

### Priorite de redaction

Tres haute. L'accueil doit etre calibre comme une porte d'entree concise, puis renvoyer vers les pages de fond.

---

## 2. Produit / Fonctionnalités

Fichier : `contenu/Produit/1 Fonctionnalités.md`

### Deja exploitable

- Deux familles produit sont deja identifiees : `Innovation & Creativite` et `Motivation`.
- La matiere roadmap est tres riche.
- Le contenu montre une ambition large autour du pilotage, de la strategie, des RH, de la finance, de la data et de la transformation.

### Manques

- Le sous-titre et l'accroche sont vides.
- Les fonctionnalites disponibles ne sont pas assez detaillees.
- La roadmap est trop longue et ressemble a une liste interne.
- Il manque une lecture dirigeant PME : pourquoi ces fonctionnalites aident a piloter.
- Il manque des exemples d'usage concrets.
- Il manque un CTA.
- Il manque une separation nette entre beta disponible, prochainement, et vision long terme.

### Sections a ajouter

- Introduction : ce que permet la plateforme aujourd'hui.
- Disponible en beta :
  - ateliers d'innovation et de creativite ;
  - questionnaires motivation/cohesion ;
  - espace collaborateur ;
  - suivi d'actions ou decisions si deja present dans le produit.
- Pour le dirigeant : mieux cadrer, mieux animer, mieux suivre.
- Exemples d'utilisation : atelier d'ideation, diagnostic equipe, suivi d'un plan d'action.
- Roadmap organisee en 4 familles lisibles :
  - Strategie et pilotage ;
  - Finance et performance ;
  - Equipes et RH ;
  - Data, IA et transformation.
- CTA : `Creer un compte`.

### Incoherences

- Orthographe a corriger : `9 type`, `connaitre`, `cohesion`, `Diagnostique`, `Mis en oeuvre`, `Manageriale`, `Methodologie`, etc.
- La roadmap contient des termes tres academiques. Il faudra les traduire en benefices business.
- Certaines entrees sont entre parentheses, ce qui donne un effet brouillon.
- `AI` devrait etre harmonise avec `IA`.

### Priorite de redaction

Tres haute. C'est la page qui doit transformer la matiere brute en proposition produit claire.

---

## 3. Cas d'usage / PME

Fichier : `contenu/Cas d'usage/1 PME.md`

### Deja exploitable

- Le titre est bon et adapte a la cible.
- Le sous-titre est clair.
- Les benefices principaux sont deja presents.

### Manques

- La page reste trop courte pour une page de conversion.
- Il manque une situation de depart typique.
- Il manque un scenario d'utilisation.
- Il manque des resultats attendus.
- Il manque un CTA.
- Il manque une preuve ou un exemple.

### Sections a ajouter

- Probleme : priorites dispersees, reunions peu suivies, decisions mal tracees.
- Reponse zzzbre : centraliser objectifs, ateliers, questionnaires et plans d'action.
- Cas concret : `En 6 semaines, une PME peut...`.
- Benefices : visibilite, rythme de pilotage, engagement, decisions plus rapides.
- Pour qui : fondateur, dirigeant, responsable operationnel, manager.
- CTA : `Creer un compte`.

### Incoherences

- Aucun nom de marque n'est present, donc la page pourrait parler de n'importe quel outil.
- Pas de mention beta/lancement.

### Priorite de redaction

Tres haute. Cette page doit devenir la page cible principale.

---

## 4. Tarifs

Fichier : `contenu/Tarifs/Tarifs.md`

### Deja exploitable

- Trois offres sont deja posees.
- Le sous-titre est clair.
- Les quotas administrateur/leader/collaborateur donnent une base concrete.
- L'offre de lancement est coherente avec le positionnement beta.

### Manques

- Il manque la periode de facturation : mensuel, annuel, paiement unique ou lancement.
- Les prix `99€` et `299€` n'indiquent pas leur frequence.
- L'offre Startup n'a pas de CTA.
- Il manque les fonctionnalites incluses par plan.
- Il manque les limites d'usage.
- Il manque une FAQ tarifaire.
- Il manque un message rassurant sur beta/lancement.
- Il manque une offre `sur mesure` si les grandes entreprises restent dans l'arborescence.

### Sections a ajouter

- Introduction : prix de lancement pour tester zzzbre avec son equipe.
- Cartes tarifs completes :
  - prix ;
  - frequence ;
  - utilisateurs inclus ;
  - fonctionnalites incluses ;
  - CTA.
- FAQ :
  - peut-on changer de plan ;
  - que se passe-t-il apres l'offre de lancement ;
  - quelles donnees sont conservees ;
  - comment inviter son equipe ;
  - existe-t-il un accompagnement.
- Mention beta : les prix peuvent evoluer, les premiers clients beneficient d'un acces privilegie.

### Incoherences

- `Offre de lancement` a `Prix : 0€` et `Prix mensuel : 24,99€`, mais la relation entre les deux n'est pas expliquee.
- `Freelance` semble moins coherent avec la cible dirigeants PME ; peut-etre renommer en `Solo`, `Independant` ou `Equipe`.
- `Startup` peut etre confondu avec la cible du site. Si la cible est PME, une offre `Equipe` ou `PME` serait plus claire.
- Les CTA disent `Choisir ce plan`, alors que le CTA global est `Creer un compte`.

### Priorite de redaction

Tres haute. Les tarifs doivent etre comprehensibles sans explication orale.

---

## 5. Sécurité

Fichier : `contenu/Produit/4 Sécurité.md`

### Deja exploitable

- La page existe et pose le sujet de la securite.
- Trois garanties sont mentionnees : authentification, roles/permissions, sauvegardes, tests.
- La roadmap securite mentionne MFA et detection de connexions suspectes.

### Manques

- Le discours est trop court pour inspirer confiance.
- Il manque une section sur les donnees client.
- Il manque une section sur les acces et permissions.
- Il manque une section sur les sauvegardes.
- Il manque une section sur la beta : quelles garanties sont deja en place.
- Il manque une FAQ securite.
- Il manque un point de contact pour les questions securite.

### Sections a ajouter

- Promesse : vos donnees de pilotage doivent rester accessibles aux bonnes personnes.
- Disponible aujourd'hui :
  - authentification ;
  - roles et permissions ;
  - sauvegardes ;
  - tests automatises.
- En developpement :
  - MFA ;
  - surveillance des connexions suspectes.
- Bonnes pratiques cote client : gestion des acces, invitations, retrait d'un collaborateur.
- FAQ : hebergement, acces, sauvegardes, beta, incident, confidentialite.

### Incoherences

- Orthographe : `rôle`, `permissions strict`, `sauvegardes régulier`, `convrant`.
- `Le risque 0 n'existe pas` est honnete mais trop defensif en accroche principale.
- `machine learning` peut paraitre flou ou survendu si la fonctionnalite n'existe pas encore.

### Priorite de redaction

Haute. Cette page est importante pour rassurer des dirigeants avant creation de compte.

---

## 6. Contact

Fichier : `contenu/Contact/Contact.md`

### Deja exploitable

- L'email de contact existe.
- L'adresse physique a Geneve est presente.

### Manques

- Il manque un titre marketing.
- Il manque des motifs de contact.
- Il manque une alternative au contact email : creation de compte, demo, support.
- Il manque une phrase rassurante sur les delais de reponse.
- Il manque une separation entre contact commercial, support et presse.

### Sections a ajouter

- Titre : `Parlons de votre pilotage`.
- Sous-titre : invitation simple pour dirigeants de PME.
- CTA principal : `Creer un compte`.
- Contact direct : `contact@zzzbre.com`.
- Cas de contact :
  - question sur la beta ;
  - besoin d'accompagnement ;
  - demande entreprise ;
  - partenariat.
- Adresse : incubateur de Nomades Advanced Technologies, Geneve.

### Incoherences

- Orthographe : `contactez nous` doit devenir `contactez-nous`.
- Le texte est une seule ligne, pas encore exploitable comme page.

### Priorite de redaction

Haute. Page simple mais essentielle pour la confiance.

---

## 7. Produit / Intégrations

Fichier : `contenu/Produit/2 Intégrations.md`

### Deja exploitable

- Les integrations ciblees sont identifiees : Excel, Tableau, Alteryx, Power BI.
- La page assume que ces integrations sont en developpement.

### Manques

- Il manque une promesse : eviter de ressaisir, connecter les donnees existantes.
- Il manque une distinction entre import simple et integration complete.
- Il manque des cas d'usage.
- Il manque un CTA ou une invitation a demander une integration.

### Sections a ajouter

- Pourquoi les integrations comptent pour les PME.
- En developpement :
  - import Excel ;
  - connexion BI ;
  - synchronisation des listes collaborateurs.
- Cas d'usage : importer une liste d'equipe, relier un dashboard, exporter des donnees.
- CTA secondaire : `Demander une integration`.

### Incoherences

- Orthographe : `employées` devrait etre `employes` ou `collaborateurs`.
- `Connecter à` doit etre reformule.

### Priorite de redaction

Moyenne. Utile, mais pas bloquant pour une premiere landing page.

---

## 8. Produit / API

Fichier : `contenu/Produit/3 API.md`

### Deja exploitable

- La page identifie une future API avec tokens.
- L'intention d'acces aux donnees est presente.

### Manques

- Il manque une cible : developpeurs, equipes data, partenaires.
- Il manque des exemples d'usage.
- Il manque le statut beta/roadmap.
- Il manque un message sur la securite des tokens.
- Il manque un CTA pour etre prevenu ou contacter l'equipe.

### Sections a ajouter

- Promesse : recuperer et exploiter ses donnees de pilotage.
- En developpement :
  - acces par tokens ;
  - endpoints de donnees ;
  - export analytique.
- Exemples : reporting interne, dashboard BI, automatisation.
- CTA : `Nous contacter pour l'API`.

### Incoherences

- Orthographe : `Access` doit devenir `Acces`; `souhaiter` doit s'accorder.
- La formulation `toutes vos donnees` doit etre precisee pour eviter une promesse trop large.

### Priorite de redaction

Moyenne basse. Important pour la vision, secondaire pour dirigeants PME.

---

## 9. Cas d'usage / Grandes entreprises

Fichier : `contenu/Cas d'usage/2 Grandes entreprises.md`

### Deja exploitable

- Le titre et le sous-titre sont coherents.
- Les benefices sont pertinents pour une cible multi-equipes.

### Manques

- La cible prioritaire etant PME, cette page doit etre presentee comme un prolongement, pas comme le coeur du site.
- Il manque une section deploiement progressif.
- Il manque un angle securite/gouvernance.
- Il manque un CTA adapte : contact ou demo.

### Sections a ajouter

- Probleme : pratiques heterogenes, indicateurs disperses, coordination complexe.
- Reponse zzzbre : cadre commun de pilotage, roles, donnees partagees.
- Deploiement : commencer par une equipe pilote.
- CTA : `Nous contacter`.

### Incoherences

- Pas de mention beta : pour les grandes entreprises, il faut etre prudent et parler de pilote.

### Priorite de redaction

Moyenne. Utile pour ne pas fermer la porte, mais a traiter apres les pages PME.

---

## 10. Cas d'usage / Secteurs

Fichier : `contenu/Cas d'usage/3 Secteurs.md`

### Deja exploitable

- Plusieurs secteurs sont listes.
- Le sous-titre est adaptable.

### Manques

- Les secteurs ne sont pas developpes.
- Il manque des exemples par secteur.
- Il manque un lien avec les fonctionnalites disponibles.
- Il manque un CTA.

### Sections a ajouter

- Services et conseil : ateliers, plans d'action, suivi client.
- Retail et multi-sites : alignement, priorites, indicateurs.
- Industrie et operations : performance, amelioration continue.
- Startups et scale-ups : rythme, objectifs, execution.
- Associations et formation : animation, questionnaire, suivi.

### Incoherences

- Trop generique pour le moment.
- Certains secteurs peuvent elargir le message avant que la cible PME soit solide.

### Priorite de redaction

Moyenne basse. A enrichir apres la page PME.

---

## 11. Clients / Études de cas

Fichier : `contenu/Clients/Études de cas.md`

### Deja exploitable

- Un cas client existe : Nomades Advanced Technologies.
- Le cas contient objectif SMART, resultats chiffres et benefice.
- C'est une tres bonne base de preuve pour la landing page.

### Manques

- Il manque un titre global et une introduction.
- Il manque le contexte de depart.
- Il manque les fonctionnalites utilisees.
- Il manque une citation client si possible.
- Il manque un CTA de fin.

### Sections a ajouter

- Introduction : comment zzzbre aide les premieres equipes beta.
- Cas Nomades :
  - contexte ;
  - objectif ;
  - usage de la plateforme ;
  - resultats ;
  - apprentissages.
- CTA : `Creer un compte` ou `Decouvrir zzzbre`.

### Incoherences

- `zzzebre` doit devenir `zzzbre`.
- Les resultats sont forts ; il faut s'assurer qu'ils sont assumables publiquement.

### Priorite de redaction

Haute. Cette page peut fournir la preuve manquante de l'accueil.

---

## 12. Ressources / Guides

Fichier : `contenu/Ressources/2 Guides.md`

### Deja exploitable

- C'est une des pages secondaires les plus solides.
- Les guides sont coherents avec le produit et la cible.
- Les titres couvrent onboarding, ateliers, engagement, KPI, pilotage et securite.

### Manques

- Il manque une introduction qui explique pourquoi ces guides existent.
- Il manque un statut : disponibles maintenant ou a venir.
- Il manque un CTA vers la creation de compte.
- Il manque peut-etre un guide special dirigeant PME.

### Sections a ajouter

- Introduction : apprendre a piloter plus simplement avec zzzbre.
- Badges par guide : `Disponible`, `Bientot`, `Beta`.
- Guide prioritaire : `Lancer son premier cycle de pilotage en 30 jours`.
- CTA : `Creer un compte`.

### Incoherences

- `zzzebre` doit devenir `zzzbre`.

### Priorite de redaction

Moyenne. Bonne page d'appui, pas prioritaire avant Accueil/Produit/Tarifs.

---

## 13. Ressources / Blog

Fichier : `contenu/Ressources/1 Blog.md`

### Deja exploitable

- Les categories de sujets existent : business, framework, modeles, deep learning.

### Manques

- La page est encore un placeholder.
- Il manque une ligne editoriale.
- Il manque des idees d'articles.
- Il manque le lien avec les dirigeants de PME.
- Il manque un statut : blog ouvert ou a venir.

### Sections a ajouter

- Promesse editoriale : aider les dirigeants a mieux piloter sans jargon.
- Categories :
  - pilotage PME ;
  - ateliers et decision ;
  - indicateurs et tableaux de bord ;
  - IA appliquee au management.
- 5 a 8 idees d'articles.
- CTA : s'inscrire ou creer un compte.

### Incoherences

- `deep learning` est probablement trop technique pour la cible principale s'il n'est pas relie a un usage business.

### Priorite de redaction

Basse pour la landing page initiale. A garder simple.

---

## 14. Ressources / Webinaires

Fichier : `contenu/Ressources/3 Webinaires.md`

### Deja exploitable

- La page existe avec l'intention d'evenements.

### Manques

- Il n'y a pas de webinaire concret.
- `Evenements passe` est seul et incomplet.
- Il manque une proposition de valeur.
- Il manque un CTA.

### Sections a ajouter

- Introduction : sessions courtes pour apprendre a piloter avec zzzbre.
- Prochains sujets possibles :
  - lancer un atelier utile ;
  - structurer ses objectifs ;
  - suivre la motivation d'equipe ;
  - passer de la reunion au plan d'action.
- Archives : evenements passes.
- CTA : etre prevenu ou creer un compte.

### Incoherences

- Orthographe : `evenements`, `passe`.
- A ne pas afficher comme page riche si aucun evenement n'existe encore.

### Priorite de redaction

Basse. Peut rester une page `a venir`.

---

## 15. Ressources / Documentation

Fichier : `contenu/Ressources/4 Documentation.md`

### Deja exploitable

- Deux axes existent : plateforme et application.

### Manques

- Il manque la structure documentaire.
- Il manque le statut de disponibilite.
- Il manque les rubriques d'aide essentielles.

### Sections a ajouter

- Documentation plateforme :
  - demarrage ;
  - roles et permissions ;
  - ateliers ;
  - questionnaires ;
  - plans d'action ;
  - securite.
- Documentation application collaborateur :
  - connexion ;
  - repondre aux questionnaires ;
  - participer aux ateliers ;
  - suivre ses actions.
- CTA : contacter le support.

### Incoherences

- La page est presentee comme `Nos developpements en cours`, ce qui ne suffit pas pour une documentation.

### Priorite de redaction

Moyenne basse. Utile pour rassurer, mais peut etre minimale au lancement.

---

## 16. À propos / Équipe

Fichier : `contenu/À propos/1 Équipe.md`

### Deja exploitable

- Le fondateur est identifie.
- Le role produit, technique et operationnel est clair.

### Manques

- Il manque une introduction sur la mission.
- Il manque une bio plus humaine et credible.
- Il manque le lien avec la vision zzzbre.
- Il manque potentiellement photo, LinkedIn ou contact.

### Sections a ajouter

- Mission : aider les PME a mieux piloter sans empiler les outils.
- Fondateur : parcours, role, pourquoi zzzbre.
- Valeurs : simplicite, clarte, execution, confiance.
- CTA : contacter ou creer un compte.

### Incoherences

- `zzzebre` doit devenir `zzzbre`.

### Priorite de redaction

Moyenne. Important pour une beta, car les premiers clients achetent aussi une relation de confiance.

---

## 17. À propos / Carrières

Fichier : `contenu/À propos/2 Carrières.md`

### Deja exploitable

- Beaucoup de roles futurs sont listes.
- Le ton startup est present et vivant.
- La page donne une image d'ambition produit.

### Manques

- La page doit clarifier qu'il n'y a pas encore de recrutements ouverts.
- L'accroche actuelle peut sembler maladroite pour des candidats ou clients.
- Il manque une intro plus professionnelle.
- Il manque un CTA de candidature spontanee.
- Les postes doivent etre classes par famille.

### Sections a ajouter

- Statut : pas de poste ouvert pour le moment, mais candidatures spontanees possibles.
- Pourquoi rejoindre zzzbre.
- Familles de futurs roles :
  - produit/design ;
  - engineering ;
  - data/IA ;
  - go-to-market ;
  - support/customer success.
- CTA : envoyer une candidature.

### Incoherences

- Nombreuses fautes a corriger avant publication.
- Certains passages sont tres familiers ; a garder seulement si ce ton est assume.
- Les liens vides `[Marcel]()` et `[Astro]()` doivent etre corriges ou retires.
- Un caractere grec apparait dans `n'αvons`.

### Priorite de redaction

Basse pour la conversion client. A nettoyer avant mise en ligne.

---

## 18. À propos / Presse

Fichier : `contenu/À propos/3 Presse.md`

### Deja exploitable

- L'email presse existe.

### Manques

- Il manque une presentation courte de zzzbre.
- Il manque un kit presse ou une liste de ressources.
- Il manque un contact clair.
- Il manque des elements reutilisables : boilerplate, logo, captures.

### Sections a ajouter

- Boilerplate : description de zzzbre en 2 ou 3 phrases.
- Contact presse : `press@zzzbre.com`.
- Ressources a venir : logo, captures, dossier presse.
- CTA : contacter l'equipe.

### Incoherences

- `contactez nous` doit devenir `contactez-nous`.

### Priorite de redaction

Basse. Peut rester minimal, mais propre.

---

## 19. Support

Fichier : `contenu/Support/Support.md`

### Deja exploitable

- L'email support existe.

### Manques

- Il manque une structure d'aide.
- Il manque les motifs de support.
- Il manque les delais de reponse.
- Il manque une FAQ courte.
- Il manque le lien vers la documentation.

### Sections a ajouter

- Titre : `Besoin d'aide sur zzzbre ?`
- Motifs :
  - connexion ;
  - invitation equipe ;
  - configuration ;
  - questionnaire ;
  - atelier ;
  - donnees/securite.
- Email : `support@zzzbre.com`.
- Documentation : lien vers la page documentation.
- FAQ support.

### Incoherences

- `contactez nous` doit devenir `contactez-nous`.
- Page trop courte pour rassurer un client beta.

### Priorite de redaction

Moyenne. Important pour une beta, meme si la page reste simple.

---

## 20. Légal

Fichier : `contenu/Légal/Légal.md`

### Deja exploitable

- La page existe.
- Le besoin CGV est identifie.

### Manques

- Il manque les CGV.
- Il manque les mentions legales.
- Il manque la politique de confidentialite.
- Il manque la politique cookies si necessaire.
- Il manque les informations societe.
- Il manque les contacts legaux.

### Sections a ajouter

- Mentions legales.
- Conditions generales de vente ou d'utilisation.
- Politique de confidentialite.
- Gestion des cookies si le futur site en utilise.
- Contact : `contact@zzzbre.com`.

### Incoherences

- `CGV` seul ne suffit pas pour une page legale publiable.
- Le contenu legal devra etre valide avec une source juridique adaptee avant publication.

### Priorite de redaction

Moyenne. Obligatoire avant publication publique, mais a traiter avec prudence.

---

## Synthese des manques critiques

- Accueil a clarifier : il doit rester court et orienter vers les pages dediees.
- Fonctionnalités trop brutes : il faut transformer la liste interne en benefices lisibles.
- Tarifs incomplets : frequence, CTA, inclusions et FAQ manquent.
- Sécurité trop courte : il faut rassurer sur les donnees et acces.
- Contact, Support, Légal et Presse sont des placeholders.
- La preuve client existe dans `Études de cas` et doit rester prioritairement sur la page client, avec un renvoi possible depuis l'accueil.
- Le nom de marque doit etre harmonise partout en `zzzbre`.

## Ordre recommande pour la suite

1. Calibrer `contenu/index.md` comme accueil court : promesse, CTA, 3 benefices et liens vers les pages dediees.
2. Restructurer `contenu/Produit/1 Fonctionnalités.md`.
3. Completer `contenu/Cas d'usage/1 PME.md`.
4. Clarifier `contenu/Tarifs/Tarifs.md`.
5. Renforcer `contenu/Produit/4 Sécurité.md`.
6. Completer `contenu/Contact/Contact.md`.
7. Nettoyer les pages secondaires avant integration Astro.
