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
- Contrainte de redaction : rediger du contenu editorial directement affichable cote client. Eviter les notes d'intention, consignes internes ou formulations de conception comme `cette page doit`, `cette categorie rassemblera`, `a venir`, `nous voulons expliquer`. Les titres, accroches, textes, listes et CTA doivent pouvoir etre repris tels quels dans le futur site Astro.

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
- [ ] Verifier que chaque page contient du texte final pour les visiteurs, pas des notes editoriales internes ou des intentions de redaction.

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

### Statut

Valide. La page rassure sur les acces granulaires, roles, donnees de pilotage et usages beta sans promettre une securite absolue.

### Points valides

- La page separe clairement `Disponible aujourd'hui` et `En developpement`.
- Les garanties existantes sont conservees : authentification, roles et permissions, sauvegardes regulieres, tests couvrant 90 % de la codebase.
- La gestion granulaire des acces est documentee : owner/administrateur, leaders, collaborateurs, capacite d'abonnement, secteurs et pages.
- Un encart visuel est prevu pour la capture `Zzzbre.png`, montrant les droits d'acces managers et la selection de pages/secteurs.
- La page explique pourquoi les donnees de data driven management meritent une attention particuliere : retours d'equipe, decisions, actions, priorites et donnees de pilotage.
- Les bonnes pratiques cote client sont ajoutees : invitations, roles, retrait des acces, sensibilisation et verification reguliere.
- La roadmap securite est formulee prudemment : MFA, surveillance renforcee des connexions suspectes, detection de signaux inhabituels.
- Une FAQ securite et un contact `support@zzzbre.com` sont presents.

### Attention pour la suite

- Ne pas ajouter de certifications, normes, hebergeur, chiffrement, SLA ou conformite detaillee sans source dediee.
- Garder une separation claire entre garanties disponibles et ameliorations en cours.
- Utiliser cette page comme reference de ton pour les autres contenus de confiance.

---

## 6. Contact

Fichier : `contenu/Contact/Contact.md`

### Statut

Valide. La page Contact est structuree, courte et exploitable comme page de confiance.

### Points valides

- Le titre `Parlons de votre pilotage` est present.
- Le CTA vers `https://zzzbre.com/login` est present au debut et en fin de page.
- L'email principal `contact@zzzbre.com` est conserve.
- Les motifs de contact sont explicites : beta, accompagnement, demande entreprise, partenariat, data driven management.
- L'adresse de l'incubateur Nomades Advanced Technologies a Geneve est conservee.
- Les contacts utiles sont separes : contact, support, presse.

### Attention pour la suite

- Ne pas transformer cette page en page commerciale longue.
- Garder l'approche sans formulaire tant que le site Astro n'est pas construit.
- Utiliser cette page comme reference pour completer les pages Support et Presse.

---

## 7. Produit / Intégrations

Fichier : `contenu/Produit/2 Intégrations.md`

### Statut

Valide. La page presente les integrations comme une roadmap produit en developpement, utile pour connecter zzzbre aux donnees et outils deja utilises par les entreprises.

### Points valides

- Le statut `En developpement` est explicite.
- La page explique l'objectif : limiter la double saisie, importer les collaborateurs, preparer les usages BI, reporting et analyse.
- Les integrations ciblees sont conservees : Excel, Tableau, Alteryx, Power BI et autres outils d'analyse.
- La distinction est claire entre import simple, connexions BI et synchronisations futures.
- Les cas d'usage prevus sont ajoutes : import collaborateurs, dashboard, exploitation des donnees de pilotage, analyses croisees.
- Le CTA renvoie vers `contact@zzzbre.com` pour demander une integration.

### Attention pour la suite

- Ne pas faire croire que les integrations sont deja disponibles.
- Garder la page coherente avec le statut beta.
- La page API doit prolonger cette logique d'exploitation des donnees.

---

## 8. Produit / API

Fichier : `contenu/Produit/3 API.md`

### Statut

Valide. La page presente l'API comme une roadmap en developpement pour exploiter les donnees de pilotage dans des dashboards, analyses, automatisations et outils internes.

### Points valides

- Le statut `En developpement` est explicite.
- La page cible les equipes data, developpeurs, partenaires et outils internes.
- La promesse est coherente avec la vision data driven management : reporting, BI, analyses croisees, automatisations.
- Les elements initiaux sont conserves : connexion avec tokens et acces aux donnees pour analyse.
- L'acces aux donnees est formule prudemment : donnees accessibles selon droits, roles et perimetres configures.
- La securite API est reliee aux permissions et a la page Securite.
- Le CTA renvoie vers `contact@zzzbre.com` pour exprimer un besoin API.

### Attention pour la suite

- Ne pas faire croire que l'API est deja disponible.
- Ne pas promettre de details techniques non confirmes.
- Les prochains cas d'usage doivent rester coherents avec cette logique d'exploitation progressive des donnees.

---

## 9. Cas d'usage / Grandes entreprises

Fichier : `contenu/Cas d'usage/2 Grandes entreprises.md`

### Statut

Valide. La page presente zzzbre comme une solution a tester progressivement sur une equipe, direction, site ou perimetre pilote dans une organisation multi-equipes.

### Points valides

- La page garde l'idee d'alignement a grande echelle sans promettre un deploiement enterprise complet.
- Le statut `Approche pilote recommandee` est explicite.
- Les defis sont poses : pratiques heterogenes, indicateurs disperses, silos, remontee terrain, gouvernance.
- La page met en avant un cadre commun de pilotage et une logique de leadership distribue.
- La gouvernance des acces, roles, pages, secteurs et donnees est mentionnee.
- Les premiers cas d'usage sont ajoutes : barometre motivation, leadership distribue, ateliers multi-equipes, pilotage des actions, donnees de pilotage.
- Le CTA renvoie vers `contact@zzzbre.com`.

### Attention pour la suite

- Ne pas promettre SLA, SSO, conformite ou deploiement grand compte non documente.
- Garder cette page comme prolongement secondaire par rapport a la cible PME.
- La page Secteurs devra rester plus transversale et ne pas repeter toute la logique grandes entreprises.

---

## 10. Cas d'usage / Secteurs

Fichier : `contenu/Cas d'usage/3 Secteurs.md`

### Statut

Valide. La page presente les secteurs comme des exemples d'adaptation de zzzbre a differents contextes metier, sans transformer la plateforme en solution verticale par secteur.

### Points valides

- La page explique que les secteurs ont des realites differentes, mais des besoins communs : comprendre les equipes, structurer les decisions, faire remonter les signaux et suivre les actions.
- Les secteurs existants sont conserves : services et conseil, retail et reseaux multi-sites, industrie et operations, startups et scale-ups, associations et organismes de formation.
- Chaque secteur dispose d'exemples d'usages concrets sans faire croire a des modules sectoriels dedies.
- La page reste coherente avec le data driven management : retours collaborateurs, motivation, bien-etre, leadership, donnees de pilotage, decisions et plans d'action.
- La section `Ce que les secteurs ont en commun` clarifie les fondations transversales.
- Le CTA renvoie vers `contact@zzzbre.com` pour discuter d'un contexte metier.

### Attention pour la suite

- Ne pas ajouter de promesses verticales ou de fonctionnalites specialisees par secteur sans preuve produit.
- Garder cette page comme page d'adaptation, pas comme catalogue d'offres sectorielles.
- La prochaine priorite est `Clients / Études de cas`.

---

## 11. Clients / Études de cas

Fichier : `contenu/Clients/Études de cas.md`

### Statut

Valide apres repositionnement. La page ne presente plus de cas client invente : elle devient un appel a retours d'experience pour les entreprises qui utilisent zzzbre et souhaitent valoriser leur usage.

### Points valides

- Le cas type Nomades Advanced Technologies et les chiffres associes sont supprimes.
- La page explique clairement que seuls des retours reels, assumes et utiles doivent etre publies.
- Le contenu invite les entreprises utilisatrices a partager leur contexte, leur usage, leurs apprentissages et leur progression.
- La page valorise la promotion des entreprises : initiatives de leadership, transformation, bien-etre, engagement et data driven management.
- Le CTA renvoie vers `contact@zzzbre.com` pour proposer un retour d'experience.
- `zzzebre` ne doit plus apparaitre dans cette page.

### Attention pour la suite

- Ne pas publier de chiffres, citations ou noms d'entreprise sans validation explicite.
- Cette page ne remplace pas encore une preuve client : elle prepare la collecte de vrais temoignages.
- La prochaine priorite est `Ressources / Guides`.

---

## 12. Ressources / Guides

Fichier : `contenu/Ressources/2 Guides.md`

### Statut

Valide. La page Guides devient une page d'appui editoriale pour aider les dirigeants, leaders et equipes a demarrer avec zzzbre et a installer progressivement de meilleures pratiques de pilotage.

### Points valides

- L'introduction explique que les guides servent a rendre les methodes de management et le data driven management plus concrets.
- `zzzebre` est corrige en `zzzbre`.
- Le guide prioritaire `Lancer son premier cycle de pilotage en 30 jours` est ajoute.
- Les guides existants sont conserves et reorganises.
- Les statuts `Beta`, `En preparation` et `A venir` evitent de faire croire que tous les guides complets sont deja publies.
- Le CTA vers `https://zzzbre.com/login` est present.

### Attention pour la suite

- Garder cette page comme page ressource, pas comme documentation technique complete.
- Les guides pourront devenir des articles dedies plus tard.
- La prochaine priorite est `Ressources / Blog`.

---

## 13. Ressources / Blog

Fichier : `contenu/Ressources/1 Blog.md`

### Statut

Valide. La page Blog pose une ligne editoriale claire pour les futurs contenus zzzbre, sans faire croire qu'une bibliotheque d'articles est deja publiee.

### Points valides

- Le statut `En preparation` est explicite.
- La promesse editoriale est clarifiee : aider les dirigeants, leaders et equipes a mieux piloter sans jargon.
- Les categories sont reformulees autour de sujets accessibles : pilotage PME, leadership et engagement, ateliers et decision, indicateurs, IA appliquee au management.
- Les categories disposent maintenant de pages dediees dans `contenu/Ressources/Blog/Categories/`.
- La categorie brute `deep learning` est remplacee par un angle business plus coherent avec la cible.
- Les pages categories listent les sujets a venir sans les presenter comme des articles deja publies.
- Les blocs `Sujets a venir` ont ete retires des pages categories pour garder des textes directement affichables cote client.
- Les formulations de l'index Blog ont ete ajustees pour eviter les notes d'intention visibles cote client.
- La premiere serie d'articles est creee dans `contenu/Ressources/Blog/Motivation/`, avec un article par quiz Motivation.
- La page Blog renvoie vers les pages categories, pas directement vers les articles.
- La serie Motivation est rangee dans la categorie `Leadership et engagement`.
- Le CTA vers `https://zzzbre.com/login` et le contact editorial `contact@zzzbre.com` sont presents.

### Attention pour la suite

- Continuer a separer les pages d'index du blog et les articles par series.
- Garder la logique hub > categories > series > articles pour la future integration Astro.
- Ne pas promettre de resultats scientifiques ou RH non prouves dans les articles de quiz.
- Garder le blog accessible, pas academique ni trop technique.
- La prochaine priorite est `Ressources / Webinaires`.

---

## 14. Ressources / Webinaires

Fichier : `contenu/Ressources/3 Webinaires.md`

### Statut

Valide. La page presente les webinaires comme des sessions video a venir autour des quiz et ateliers zzzbre, sans inventer d'agenda, de dates ou d'archives.

### Points valides

- Les placeholders `Nos prochains evenements` et `Evenements passe` sont supprimes.
- La page est directement affichable cote client.
- Les videos sont presentees comme `A venir`, avec un bouton `Demander en priorite`.
- Une session video est prevue pour expliquer les quiz Motivation.
- Les autres sessions couvrent les ateliers visibles dans le produit : Paper Brain, On continue arrete tente, Defectuologie, Speed Boat, Matrice croisee, Mind Mapping, Six chapeaux de Bono, Design Thinking et World Cafe.
- Le contact `contact@zzzbre.com` est present pour demander une video en priorite.
- Le CTA vers `https://zzzbre.com/login` est present.

### Attention pour la suite

- Ne pas ajouter de dates, archives ou inscriptions a des evenements tant qu'ils ne sont pas confirmes.
- Garder cette page orientee videos explicatives a venir, pas webinaires live confirmes.
- La prochaine priorite est `Ressources / Documentation`.

---

## 15. Ressources / Documentation

Fichier : `contenu/Ressources/4 Documentation.md`

### Statut

Valide. La page Documentation devient une page d'orientation directement affichable cote client, centree sur les usages plateforme et collaborateur.

### Points valides

- La formule `Nos developpements en cours` est supprimee.
- Les deux axes sont conserves et clarifies : documentation plateforme et documentation collaborateur.
- Les rubriques plateforme couvrent demarrage, roles et permissions, questionnaires, ateliers, plans d'action, securite et acces.
- Les rubriques collaborateur couvrent connexion, questionnaire, atelier, actions et acces.
- Le support `support@zzzbre.com` est present.
- Le CTA vers `https://zzzbre.com/login` est present.

### Attention pour la suite

- La page reste une entree documentaire, pas encore une documentation detaillee article par article.
- Ne pas ajouter de procedures techniques non confirmees.
- La prochaine priorite est `À propos / Équipe`.

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
- Sécurité validee : la page rassure sur acces, roles, donnees de pilotage, beta et ameliorations en cours.
- Contact validee : la page donne les motifs de contact, les contacts utiles, l'adresse et le CTA.
- Intégrations validee : la page presente les integrations comme une roadmap en developpement pour connecter donnees, collaborateurs et outils BI.
- API validee : la page presente l'exploitation future des donnees de pilotage via tokens, permissions et outils internes.
- Grandes entreprises validee : la page presente une approche pilote pour harmoniser pilotage, acces et donnees dans les organisations multi-equipes.
- Support, Légal et Presse restent des placeholders.
- La preuve client existe dans `Études de cas` et doit rester prioritairement sur la page client, avec un renvoi possible depuis l'accueil.
- Le nom de marque doit etre harmonise partout en `zzzbre`.

## Ordre recommande pour la suite

1. Calibrer `contenu/index.md` comme accueil court : promesse, CTA, 3 benefices et liens vers les pages dediees.
2. Valide : `contenu/Produit/1 Fonctionnalités.md` presente la vision plateforme, les modules beta et `Notre Roadmap`.
3. Valide : `contenu/Cas d'usage/1 PME.md` presente le fonctionnement d'une PME data driven fondee sur motivation, bien-etre et leadership contemporain.
4. Valide : `contenu/Tarifs/Tarifs.md` presente l'acces libre owner, les offres mensuelles beta et la FAQ tarifaire.
5. Valide : `contenu/Produit/4 Sécurité.md` rassure sur les acces, roles, donnees et garanties beta.
6. Valide : `contenu/Contact/Contact.md` presente les contacts utiles, l'adresse et le CTA.
7. Valide : `contenu/Produit/2 Intégrations.md` presente les integrations en developpement et leurs cas d'usage.
8. Valide : `contenu/Produit/3 API.md` presente l'API en developpement et ses usages data/reporting.
9. Valide : `contenu/Cas d'usage/2 Grandes entreprises.md` presente une approche pilote pour organisations multi-equipes.
10. Priorite active : completer `contenu/Cas d'usage/3 Secteurs.md`.
