export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  type: "link" | "accordion" | "column" | "sidebar-section";
  href?: string;
  items?: NavLink[];
};

export type FooterContact = {
  address: string[];
  emails: NavLink[];
};

export const brandLink: NavLink = {
  label: "zzzbre",
  href: "/",
};

export const accountCta: NavLink = {
  label: "Créer un compte",
  href: "https://zzzbre.com/login",
};

export const headerNavigation: NavGroup[] = [
  { label: "Accueil", type: "link", href: "/" },
  {
    label: "Produit",
    type: "accordion",
    items: [
      { label: "Fonctionnalités", href: "/produit/fonctionnalites" },
      { label: "Intégrations", href: "/produit/integrations" },
      { label: "API", href: "/produit/api" },
      { label: "Sécurité", href: "/produit/securite" },
    ],
  },
  {
    label: "Cas d'usage",
    type: "accordion",
    items: [
      { label: "PME", href: "/cas-d-usage/pme" },
      { label: "Grandes entreprises", href: "/cas-d-usage/grandes-entreprises" },
      { label: "Secteurs", href: "/cas-d-usage/secteurs" },
    ],
  },
  { label: "Tarifs", type: "link", href: "/tarifs" },
  {
    label: "Ressources",
    type: "accordion",
    items: [
      { label: "Blog", href: "/ressources/blog" },
      { label: "Guides", href: "/ressources/guides" },
      { label: "Webinaires", href: "/ressources/webinaires" },
      { label: "Documentation", href: "/ressources/documentation" },
    ],
  },
  { label: "Clients", type: "link", href: "/clients/etudes-de-cas" },
  {
    label: "À propos",
    type: "accordion",
    items: [
      { label: "Équipe", href: "/a-propos/equipe" },
      { label: "Carrières", href: "/a-propos/carrieres" },
      { label: "Presse", href: "/a-propos/presse" },
    ],
  },
  { label: "Support", type: "link", href: "/support" },
  { label: "Contact", type: "link", href: "/contact" },
  { label: "Légal", type: "link", href: "/legal" },
];

export const footerText =
  "zzzbre aide les dirigeants, leaders et équipes à piloter avec plus de clarté, des données utiles et des actions suivies.";

export const footerColumns: NavGroup[] = [
  {
    label: "Accueil, Produit, Cas d'usage, Tarifs",
    type: "column",
    items: [
      { label: "Accueil", href: "/" },
      { label: "Fonctionnalités", href: "/produit/fonctionnalites" },
      { label: "Intégrations", href: "/produit/integrations" },
      { label: "API", href: "/produit/api" },
      { label: "Sécurité", href: "/produit/securite" },
      { label: "PME", href: "/cas-d-usage/pme" },
      { label: "Grandes entreprises", href: "/cas-d-usage/grandes-entreprises" },
      { label: "Secteurs", href: "/cas-d-usage/secteurs" },
      { label: "Tarifs", href: "/tarifs" },
    ],
  },
  {
    label: "Ressources",
    type: "column",
    items: [
      { label: "Blog", href: "/ressources/blog" },
      { label: "Pilotage PME", href: "/ressources/blog/categories/pilotage-pme" },
      { label: "Leadership et engagement", href: "/ressources/blog/categories/leadership-et-engagement" },
      { label: "Ateliers et décision", href: "/ressources/blog/categories/ateliers-et-decision" },
      { label: "Indicateurs et tableaux de bord", href: "/ressources/blog/categories/indicateurs-et-tableaux-de-bord" },
      { label: "IA appliquée au management", href: "/ressources/blog/categories/ia-appliquee-au-management" },
      { label: "Guides", href: "/ressources/guides" },
      { label: "Webinaires", href: "/ressources/webinaires" },
      { label: "Documentation", href: "/ressources/documentation" },
    ],
  },
  {
    label: "Clients, À propos, Support, Contact, Légal",
    type: "column",
    items: [
      { label: "Études de cas", href: "/clients/etudes-de-cas" },
      { label: "Équipe", href: "/a-propos/equipe" },
      { label: "Carrières", href: "/a-propos/carrieres" },
      { label: "Presse", href: "/a-propos/presse" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "Légal", href: "/legal" },
    ],
  },
];

export const footerContact: FooterContact = {
  address: ["Zzzbre, Pépinière Nomades", "Rte des Acacias 24", "1227 Genève", "Suisse"],
  emails: [
    { label: "Contact général", href: "mailto:contact@zzzbre.com" },
    { label: "Support", href: "mailto:support@zzzbre.com" },
    { label: "Presse", href: "mailto:press@zzzbre.com" },
  ],
};

export const sidebarSections: NavGroup[] = [
  {
    label: "Commencer avec zzzbre",
    type: "sidebar-section",
    items: [
      { label: "Créer un compte", href: "https://zzzbre.com/login" },
      { label: "Consulter les tarifs", href: "/tarifs" },
      { label: "Consulter la documentation", href: "/ressources/documentation" },
    ],
  },
  {
    label: "Contacts utiles",
    type: "sidebar-section",
    items: [
      { label: "contact@zzzbre.com", href: "mailto:contact@zzzbre.com" },
      { label: "support@zzzbre.com", href: "mailto:support@zzzbre.com" },
    ],
  },
  {
    label: "Liens rapides",
    type: "sidebar-section",
    items: [
      { label: "Fonctionnalités", href: "/produit/fonctionnalites" },
      { label: "Cas d'usage PME", href: "/cas-d-usage/pme" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
