import { resolveEditorialHref, sourceHref, type Cta, type LinkItem, type NavigationGroup } from "./source-map";

const headerSource = "edito/layout/1 Header.md";
const footerSource = "edito/layout/2 Footer.md";
const sidebarSource = "edito/layout/3 Sidebar.md";

function link(label: string, rawHref: string, sourcePath: string): LinkItem {
  return {
    label,
    href: resolveEditorialHref(rawHref, sourcePath),
    sourcePath,
  };
}

export const brandLink = {
  label: "zzzbre",
  href: sourceHref("edito/contenu/index.md"),
  sourcePath: headerSource,
};

export const accountCta: Cta = {
  label: "Créer un compte",
  href: "https://zzzbre.com/login",
  sourcePath: headerSource,
  kind: "account",
};

export const headerNavigation: NavigationGroup[] = [
  {
    label: "Accueil",
    type: "link",
    href: "/",
    sourcePath: headerSource,
  },
  {
    label: "Produit",
    type: "accordion",
    sourcePath: headerSource,
    items: [
      link("Fonctionnalités", "../contenu/Produit/1%20Fonctionnalités.md", headerSource),
      link("Intégrations", "../contenu/Produit/2%20Intégrations.md", headerSource),
      link("API", "../contenu/Produit/3%20API.md", headerSource),
      link("Sécurité", "../contenu/Produit/4%20Sécurité.md", headerSource),
    ],
  },
  {
    label: "Cas d'usage",
    type: "accordion",
    sourcePath: headerSource,
    items: [
      link("PME", "../contenu/Cas%20d'usage/1%20PME.md", headerSource),
      link("Grandes entreprises", "../contenu/Cas%20d'usage/2%20Grandes%20entreprises.md", headerSource),
      link("Secteurs", "../contenu/Cas%20d'usage/3%20Secteurs.md", headerSource),
    ],
  },
  {
    label: "Tarifs",
    type: "link",
    href: "/tarifs",
    sourcePath: headerSource,
  },
  {
    label: "Ressources",
    type: "accordion",
    sourcePath: headerSource,
    items: [
      link("Blog", "../contenu/Ressources/1%20Blog.md", headerSource),
      link("Guides", "../contenu/Ressources/2%20Guides.md", headerSource),
      link("Webinaires", "../contenu/Ressources/3%20Webinaires.md", headerSource),
      link("Documentation", "../contenu/Ressources/4%20Documentation.md", headerSource),
    ],
  },
  {
    label: "Clients",
    type: "link",
    href: "/clients/etudes-de-cas",
    sourcePath: headerSource,
  },
  {
    label: "À propos",
    type: "accordion",
    sourcePath: headerSource,
    items: [
      link("Équipe", "../contenu/À%20propos/1%20Équipe.md", headerSource),
      link("Carrières", "../contenu/À%20propos/2%20Carrières.md", headerSource),
      link("Presse", "../contenu/À%20propos/3%20Presse.md", headerSource),
    ],
  },
  {
    label: "Support",
    type: "link",
    href: "/support",
    sourcePath: headerSource,
  },
  {
    label: "Contact",
    type: "link",
    href: "/contact",
    sourcePath: headerSource,
  },
  {
    label: "Légal",
    type: "link",
    href: "/legal",
    sourcePath: headerSource,
  },
];

export const footerText =
  "zzzbre aide les dirigeants, leaders et équipes à piloter avec plus de clarté, des données utiles et des actions suivies.";

export const footerColumns: NavigationGroup[] = [
  {
    label: "Accueil, Produit, Cas d'usage, Tarifs",
    type: "column",
    sourcePath: footerSource,
    items: [
      link("Accueil", "../contenu/index.md", footerSource),
      link("Fonctionnalités", "../contenu/Produit/1%20Fonctionnalités.md", footerSource),
      link("Intégrations", "../contenu/Produit/2%20Intégrations.md", footerSource),
      link("API", "../contenu/Produit/3%20API.md", footerSource),
      link("Sécurité", "../contenu/Produit/4%20Sécurité.md", footerSource),
      link("PME", "../contenu/Cas%20d'usage/1%20PME.md", footerSource),
      link("Grandes entreprises", "../contenu/Cas%20d'usage/2%20Grandes%20entreprises.md", footerSource),
      link("Secteurs", "../contenu/Cas%20d'usage/3%20Secteurs.md", footerSource),
      link("Tarifs", "../contenu/Tarifs/Tarifs.md", footerSource),
    ],
  },
  {
    label: "Ressources",
    type: "column",
    sourcePath: footerSource,
    items: [
      link("Blog", "../contenu/Ressources/1%20Blog.md", footerSource),
      link("Pilotage PME", "../contenu/Ressources/Blog/Categories/1%20Pilotage%20PME.md", footerSource),
      link("Leadership et engagement", "../contenu/Ressources/Blog/Categories/2%20Leadership%20et%20engagement.md", footerSource),
      link("Ateliers et décision", "../contenu/Ressources/Blog/Categories/3%20Ateliers%20et%20decision.md", footerSource),
      link("Indicateurs et tableaux de bord", "../contenu/Ressources/Blog/Categories/4%20Indicateurs%20et%20tableaux%20de%20bord.md", footerSource),
      link("IA appliquée au management", "../contenu/Ressources/Blog/Categories/5%20IA%20appliquee%20au%20management.md", footerSource),
      link("Guides", "../contenu/Ressources/2%20Guides.md", footerSource),
      link("Webinaires", "../contenu/Ressources/3%20Webinaires.md", footerSource),
      link("Documentation", "../contenu/Ressources/4%20Documentation.md", footerSource),
    ],
  },
  {
    label: "Clients, À propos, Support, Contact, Légal",
    type: "column",
    sourcePath: footerSource,
    items: [
      link("Études de cas", "../contenu/Clients/Études%20de%20cas.md", footerSource),
      link("Équipe", "../contenu/À%20propos/1%20Équipe.md", footerSource),
      link("Carrières", "../contenu/À%20propos/2%20Carrières.md", footerSource),
      link("Presse", "../contenu/À%20propos/3%20Presse.md", footerSource),
      link("Support", "../contenu/Support/Support.md", footerSource),
      link("Contact", "../contenu/Contact/Contact.md", footerSource),
      link("Légal", "../contenu/Légal/Légal.md", footerSource),
    ],
  },
];

export const footerContact = {
  address: ["Zzzbre, Pépinière Nomades", "Rte des Acacias 24", "1227 Genève", "Suisse"],
  emails: [
    { label: "Contact général", href: "mailto:contact@zzzbre.com" },
    { label: "Support", href: "mailto:support@zzzbre.com" },
    { label: "Presse", href: "mailto:press@zzzbre.com" },
  ],
  sourcePath: footerSource,
};

export const sidebarSections: NavigationGroup[] = [
  {
    label: "Commencer avec zzzbre",
    type: "sidebar-section",
    sourcePath: sidebarSource,
    items: [
      { label: "Créer un compte", href: "https://zzzbre.com/login", sourcePath: sidebarSource },
      link("Consulter les tarifs", "../contenu/Tarifs/Tarifs.md", sidebarSource),
      link("Consulter la documentation", "../contenu/Ressources/4%20Documentation.md", sidebarSource),
    ],
  },
  {
    label: "Contacts utiles",
    type: "sidebar-section",
    sourcePath: sidebarSource,
    items: [
      { label: "contact@zzzbre.com", href: "mailto:contact@zzzbre.com", sourcePath: sidebarSource },
      { label: "support@zzzbre.com", href: "mailto:support@zzzbre.com", sourcePath: sidebarSource },
    ],
  },
  {
    label: "Liens rapides",
    type: "sidebar-section",
    sourcePath: sidebarSource,
    items: [
      link("Fonctionnalités", "../contenu/Produit/1%20Fonctionnalités.md", sidebarSource),
      link("Cas d'usage PME", "../contenu/Cas%20d'usage/1%20PME.md", sidebarSource),
      link("Tarifs", "../contenu/Tarifs/Tarifs.md", sidebarSource),
      link("Contact", "../contenu/Contact/Contact.md", sidebarSource),
    ],
  },
];
