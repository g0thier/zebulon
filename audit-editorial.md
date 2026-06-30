# Audit editorial des contenus zzzbre

## Direction generale

- Marque a harmoniser : `zzzbre`.
- Domaine a utiliser : `https://zzzbre.com`.
- CTA principal : `Creer un compte`, vers `https://zzzbre.com/login`.
- Cible prioritaire : dirigeants de PME qui veulent clarifier la strategie, coordonner les equipes et suivre l'execution.
- Positionnement long terme : plateforme generale de data driven management qui transforme les grands concepts et methodes etudies en MBA en outils operationnels, utilisables par les dirigeants et leurs equipes.
- Ton : accessible startup, direct, clair, moderne, credible.
- Maturite produit : beta/lancement. Les modules disponibles aujourd'hui doivent etre presentes comme les premiers points d'entree de la plateforme, sans reduire zzzbre a ces seuls usages.
- Equilibre editorial : parler clairement de ce qui existe, mais toujours garder la vision generale en fil rouge : strategie, finance, RH, operations, innovation, gouvernance, data, IA et pilotage de la performance.

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
- [ ] Presenter les modules beta comme des premiers outils, pas comme le perimetre complet de zzzbre.
- [ ] Relier les contenus aux grands domaines du management enseignes en MBA : strategie, finance, marketing, RH, operations, gouvernance, innovation, data et IA.
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
- La promesse doit etre clarifiee sans transformer l'accueil en page longue : zzzbre doit etre compris comme une plateforme de data driven management, pas seulement comme un outil de coordination.
- Il manque 3 benefices tres synthetiques : clarifier les priorites, aligner l'equipe, suivre les decisions/actions.
- Il manque des liens de suite vers les pages dediees : Produit, Cas d'usage, Tarifs, Securite.
- Le CTA principal doit etre simplifie.

### Sections a ajouter

- Hero court : titre, sous-titre, CTA principal, visuel produit.
- Accroche : une phrase sur la cible PME, le statut beta et la vision data driven management.
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

### Statut

Valide. La page a ete restructuree pour separer les modules disponibles en beta, la valeur pour les dirigeants, `Notre Roadmap` et le CTA final.

### Points valides

- La page presente zzzbre comme une plateforme generale de data driven management.
- Les modules beta sont presentes comme les premiers points d'entree, pas comme le perimetre complet du produit.
- Les intitules academiques et MBA sont conserves et reorganises sans etre transformes en slogans marketing.
- `Notre Roadmap` remplace l'ancienne liste brute `Nos developpements en cours`.
- Le CTA vers `https://zzzbre.com/login` est present.

### Attention pour la suite

- Garder cette page comme reference pour la vision plateforme.
- Ne pas repeter toute la roadmap dans les pages de cas d'usage.
- Les pages suivantes doivent traduire cette vision en situations client concretes.

---

## 3. Cas d'usage / PME

Fichier : `contenu/Cas d'usage/1 PME.md`

### Statut

Valide apres ajustement. La page presente le cas PME comme une explication concrete du data driven management applique a une entreprise humaine, collective, orientee bien-etre collaborateur et leadership contemporain.

### Points valides

- La page explique que le pilotage data driven ne se limite pas aux indicateurs financiers ou operationnels.
- Les collaborateurs sont presentes comme la base de l'entreprise : motivation, bien-etre, cohesion, engagement et envie de faire reussir le projet.
- La page met en avant l'adoption de bonnes pratiques de leadership contemporain : ecoute du terrain, partage de l'information, responsabilisation et decision methodique.
- Les questionnaires sont clarifies comme des outils pour comprendre la motivation, le bien-etre et la cohesion des equipes.
- La page explique le fonctionnement general d'une plateforme de data driven management : ecouter, comprendre, structurer, decider, agir et apprendre.
- Les premiers usages beta sont cites : questionnaires motivation et bien-etre, questionnaires cohesion, ateliers, application collaborateur.
- Le CTA vers `https://zzzbre.com/login` est present.

### Attention pour la suite

- Garder cette page centree sur le fonctionnement general d'une PME data driven et humaine.
- Eviter de la ramener a une simple logique de suivi manageriale ou de reporting descendant.
- Ne pas y ajouter la roadmap MBA complete.
- Utiliser cette page comme reference pour les autres pages de cas d'usage.

---

## 4. Tarifs

Fichier : `contenu/Tarifs/Tarifs.md`

### Statut

Valide. La page clarifie l'acces libre owner, les offres mensuelles beta, les quotas utilisateurs, les CTA et une FAQ tarifaire.

### Points valides

- L'acces libre avec 1 owner est presente separement comme une option pour explorer zzzbre.
- Les offres payantes sont affichees en prix mensuels : 24,99€ / mois, 99€ / mois et 299€ / mois.
- La reference au `0€` de l'ancienne offre de lancement est supprimee.
- Les quotas existants sont conserves pour chaque plan.
- Tous les plans ont un CTA vers `https://zzzbre.com/login`.
- La page contient une FAQ sur l'acces libre, deploiement equipe, prix mensuels, changement de plan, roles inclus, accompagnement et evolution des tarifs.

### Attention pour la suite

- Ne pas inventer d'engagement annuel, de duree d'essai ou de remise tant que ces conditions ne sont pas definies.
- Garder la mention beta : les tarifs peuvent evoluer avec la plateforme.
- Les besoins particuliers doivent continuer a renvoyer vers `contact@zzzbre.com`.

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
- Fonctionnalités validee : la page sert maintenant de reference pour la vision plateforme, les modules beta et `Notre Roadmap`.
- Cas d'usage PME valide : la page traduit la vision zzzbre en fonctionnement data driven, humain et collectif pour PME.
- Tarifs validee : la page clarifie l'acces libre owner, les offres mensuelles beta et la FAQ tarifaire.
- Sécurité trop courte : il faut rassurer sur les donnees et acces.
- Contact, Support, Légal et Presse sont des placeholders.
- La preuve client existe dans `Études de cas` et doit rester prioritairement sur la page client, avec un renvoi possible depuis l'accueil.
- Le nom de marque doit etre harmonise partout en `zzzbre`.

## Ordre recommande pour la suite

1. Calibrer `contenu/index.md` comme accueil court : promesse, CTA, 3 benefices et liens vers les pages dediees.
2. Valide : `contenu/Produit/1 Fonctionnalités.md` presente la vision plateforme, les modules beta et `Notre Roadmap`.
3. Valide : `contenu/Cas d'usage/1 PME.md` presente le fonctionnement d'une PME data driven fondee sur motivation, bien-etre et leadership contemporain.
4. Valide : `contenu/Tarifs/Tarifs.md` presente l'acces libre owner, les offres mensuelles beta et la FAQ tarifaire.
5. Priorite active : renforcer `contenu/Produit/4 Sécurité.md`.
6. Completer `contenu/Contact/Contact.md`.
7. Nettoyer les pages secondaires avant integration Astro.
