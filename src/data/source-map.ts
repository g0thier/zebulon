import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export type SourceType = "structure" | "content" | "layout";

export type SourceTrace = {
  sourcePath: string;
  sourceLabel?: string;
  sourceLineHint?: string;
};

export type LinkItem = {
  label: string;
  href: string;
  sourcePath: string;
};

export type Cta = LinkItem & {
  kind:
    | "account"
    | "pricing"
    | "documentation"
    | "contact"
    | "support"
    | "press"
    | "legal";
};

export type TextField = {
  label: string;
  value: string;
};

export type VisualAsset = {
  label: string;
  src: string;
  description?: string;
};

export type DataListEntry = {
  value: string | LinkItem;
  depth: number;
};

export type DataList = {
  label: string;
  items: Array<string | LinkItem | DataListEntry>;
};

export type Card = {
  title: string;
  text?: string;
  badge?: string;
  price?: string;
  href?: string;
  cta?: Cta;
  fields: TextField[];
  lists: DataList[];
  sourcePath: string;
};

export type ContentBlock = {
  heading?: string;
  kind: "text" | "list" | "cards" | "faq" | "contact" | "quote" | "media";
  text: string[];
  fields: TextField[];
  lists: DataList[];
  cards: Card[];
  ctas: Cta[];
  visual?: VisualAsset;
  sourceLabel?: string;
  sourcePath: string;
};

export type EditorialPage = {
  slug: string;
  sourcePath: string;
  section: string;
  title: string;
  subtitle?: string;
  intro?: string;
  status?: string;
  blocks: ContentBlock[];
  ctas: Cta[];
  relatedLinks: LinkItem[];
  visual?: VisualAsset;
};

export type Article = {
  id: string;
  slug: string;
  sourcePath: string;
  heading: string;
  title: string;
  subtitle: string;
  status: string;
  questionCount: number;
  category: string;
  series?: string;
  sections: ContentBlock[];
  cta?: Cta;
};

export type NavigationGroup = {
  label: string;
  type: "link" | "accordion" | "column" | "sidebar-section";
  href?: string;
  items?: LinkItem[];
  sourcePath: string;
};

export type EditorialSource = {
  sourcePath: string;
  sourceType: SourceType;
  title: string;
  rawMarkdown: string;
};

type ParsedMarkdown = {
  heading?: string;
  title?: string;
  subtitle?: string;
  intro?: string;
  status?: string;
  questionCount?: number;
  category?: string;
  blocks: ContentBlock[];
  ctas: Cta[];
  relatedLinks: LinkItem[];
  visual?: VisualAsset;
};

type RouteSource = {
  sourcePath: string;
  slug: string;
  section: string;
};

const root = process.cwd();

export const routeSources: RouteSource[] = [
  { sourcePath: "edito/contenu/Produit/1 Fonctionnalités.md", slug: "produit/fonctionnalites", section: "Produit" },
  { sourcePath: "edito/contenu/Produit/2 Intégrations.md", slug: "produit/integrations", section: "Produit" },
  { sourcePath: "edito/contenu/Produit/3 API.md", slug: "produit/api", section: "Produit" },
  { sourcePath: "edito/contenu/Produit/4 Sécurité.md", slug: "produit/securite", section: "Produit" },
  { sourcePath: "edito/contenu/Cas d'usage/1 PME.md", slug: "cas-d-usage/pme", section: "Cas d'usage" },
  { sourcePath: "edito/contenu/Cas d'usage/2 Grandes entreprises.md", slug: "cas-d-usage/grandes-entreprises", section: "Cas d'usage" },
  { sourcePath: "edito/contenu/Cas d'usage/3 Secteurs.md", slug: "cas-d-usage/secteurs", section: "Cas d'usage" },
  { sourcePath: "edito/contenu/Tarifs/Tarifs.md", slug: "tarifs", section: "Tarifs" },
  { sourcePath: "edito/contenu/Ressources/1 Blog.md", slug: "ressources/blog", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/2 Guides.md", slug: "ressources/guides", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/3 Webinaires.md", slug: "ressources/webinaires", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/4 Documentation.md", slug: "ressources/documentation", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/Blog/Categories/1 Pilotage PME.md", slug: "ressources/blog/categories/pilotage-pme", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/Blog/Categories/2 Leadership et engagement.md", slug: "ressources/blog/categories/leadership-et-engagement", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/Blog/Categories/3 Ateliers et decision.md", slug: "ressources/blog/categories/ateliers-et-decision", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/Blog/Categories/4 Indicateurs et tableaux de bord.md", slug: "ressources/blog/categories/indicateurs-et-tableaux-de-bord", section: "Ressources" },
  { sourcePath: "edito/contenu/Ressources/Blog/Categories/5 IA appliquee au management.md", slug: "ressources/blog/categories/ia-appliquee-au-management", section: "Ressources" },
  { sourcePath: "edito/contenu/Clients/Études de cas.md", slug: "clients/etudes-de-cas", section: "Clients" },
  { sourcePath: "edito/contenu/À propos/1 Équipe.md", slug: "a-propos/equipe", section: "À propos" },
  { sourcePath: "edito/contenu/À propos/2 Carrières.md", slug: "a-propos/carrieres", section: "À propos" },
  { sourcePath: "edito/contenu/À propos/3 Presse.md", slug: "a-propos/presse", section: "À propos" },
  { sourcePath: "edito/contenu/Support/Support.md", slug: "support", section: "Support" },
  { sourcePath: "edito/contenu/Contact/Contact.md", slug: "contact", section: "Contact" },
  { sourcePath: "edito/contenu/Légal/Légal.md", slug: "legal", section: "Légal" },
];

export const homeSourcePath = "edito/contenu/index.md";
export const structureSourcePath = "edito/structure.md";
export const layoutSourcePaths = [
  "edito/layout/1 Header.md",
  "edito/layout/2 Footer.md",
  "edito/layout/3 Sidebar.md",
];

export const articleSourceSlugs: Record<string, string> = {
  "edito/contenu/Ressources/Blog/Motivation/1 Theorie X-Y.md": "theorie-x-y",
  "edito/contenu/Ressources/Blog/Motivation/2 Identite Pro.md": "identite-pro",
  "edito/contenu/Ressources/Blog/Motivation/3 Besoins de Maslow.md": "besoins-de-maslow",
  "edito/contenu/Ressources/Blog/Motivation/4 Autodetermination.md": "autodetermination",
  "edito/contenu/Ressources/Blog/Motivation/5 Attentes.md": "attentes",
  "edito/contenu/Ressources/Blog/Motivation/6 Equite.md": "equite",
  "edito/contenu/Ressources/Blog/Motivation/7 Besoins acquis.md": "besoins-acquis",
  "edito/contenu/Ressources/Blog/Motivation/8 Mimetisme.md": "mimetisme",
};

export const sourcePathToHref = new Map<string, string>([
  [homeSourcePath, "/"],
  ...routeSources.map((entry) => [entry.sourcePath, `/${entry.slug}`] as const),
  ...Object.entries(articleSourceSlugs).map(
    ([sourcePath, slug]) => [sourcePath, `/ressources/blog/motivation/${slug}`] as const,
  ),
]);

export const authoritativeSourcePaths = [
  structureSourcePath,
  homeSourcePath,
  ...routeSources.map((entry) => entry.sourcePath),
  ...Object.keys(articleSourceSlugs),
  ...layoutSourcePaths,
];

export function readSource(sourcePath: string): string {
  return readFileSync(path.join(root, sourcePath), "utf8");
}

export function createSourceRegistry(): EditorialSource[] {
  return authoritativeSourcePaths.map((sourcePath) => ({
    sourcePath,
    sourceType: sourcePath === structureSourcePath ? "structure" : sourcePath.startsWith("edito/layout/") ? "layout" : "content",
    title: path.basename(sourcePath, ".md").replace(/^\d+\s+/, ""),
    rawMarkdown: readSource(sourcePath),
  }));
}

export const sourceRegistry = createSourceRegistry();

export function sourceHref(sourcePath: string): string {
  return sourcePathToHref.get(sourcePath) ?? "#";
}

export function resolveEditorialHref(rawHref: string, fromSourcePath: string): string {
  if (/^(https?:|mailto:|#|\/)/.test(rawHref)) return rawHref;

  const baseDir = path.dirname(fromSourcePath);
  const decodedHref = decodeURIComponent(rawHref);
  const normalized = path.normalize(path.join(baseDir, decodedHref)).replaceAll("\\", "/");
  const withoutLeading = normalized.replace(/^(\.\.\/)+/, "edito/");

  if (sourcePathToHref.has(withoutLeading)) return sourceHref(withoutLeading);
  if (sourcePathToHref.has(normalized)) return sourceHref(normalized);

  const contentRelative = normalized.replace(/^edito\/layout\/\.\.\/contenu\//, "edito/contenu/");
  return sourcePathToHref.get(contentRelative) ?? rawHref;
}

export function parseMarkdownLink(value: string, sourcePath: string): LinkItem | undefined {
  const match = value.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!match) return undefined;
  return {
    label: cleanValue(match[1]),
    href: resolveEditorialHref(match[2], sourcePath),
    sourcePath,
  };
}

export function ctaFromValue(value: string, sourcePath: string, kind?: Cta["kind"]): Cta | undefined {
  const link = parseMarkdownLink(value, sourcePath);
  if (link) {
    return {
      ...link,
      kind: kind ?? inferCtaKind(link.label, link.href),
    };
  }

  const email = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
  if (!email) return undefined;
  return {
    label: email,
    href: `mailto:${email}`,
    sourcePath,
    kind: inferCtaKind(value, `mailto:${email}`),
  };
}

export function cleanValue(value: string): string {
  return value.trim().replaceAll("`", "").replaceAll("\\'", "'");
}

export function renderInlineMarkdown(value: string, sourcePath?: string): string {
  const escaped = escapeHtml(cleanValue(value));
  return escaped
    .replace(/!\[([^\]]*)\]\(([^)]*)\)/g, (_full, alt, href) => {
      if (!href) return "";
      const src = sourcePath ? resolveAssetHref(href, sourcePath) : href;
      return `<img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" />`;
    })
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_full, label, href) => {
      const resolved = sourcePath ? resolveEditorialHref(href, sourcePath) : href;
      return `<a href="${escapeAttribute(resolved)}">${label}</a>`;
    })
    .replace(/`([^`]+)`/g, "<strong>$1</strong>");
}

export function parseEditorialPage(sourcePath: string, slug: string, section: string): EditorialPage {
  const parsed = parseEditorialMarkdown(sourcePath);
  return {
    slug,
    sourcePath,
    section,
    title: parsed.title ?? parsed.heading ?? section,
    subtitle: parsed.subtitle,
    intro: parsed.intro,
    status: parsed.status,
    blocks: parsed.blocks,
    ctas: parsed.ctas,
    relatedLinks: parsed.relatedLinks,
    visual: parsed.visual,
  };
}

export function parseHomePage(): EditorialPage {
  return parseEditorialPage(homeSourcePath, "", "Accueil");
}

export function parseArticle(sourcePath: string): Article {
  const parsed = parseEditorialMarkdown(sourcePath);
  const slug = articleSourceSlugs[sourcePath];
  return {
    id: slug,
    slug,
    sourcePath,
    heading: parsed.heading ?? parsed.title ?? slug,
    title: parsed.title ?? parsed.heading ?? slug,
    subtitle: parsed.subtitle ?? "",
    status: parsed.status ?? "",
    questionCount: parsed.questionCount ?? 0,
    category: parsed.category ?? "Motivation",
    series: "Motivation",
    sections: parsed.blocks,
    cta: parsed.ctas[0],
  };
}

export function listArticleSourcePaths(): string[] {
  const motivationDir = path.join(root, "edito/contenu/Ressources/Blog/Motivation");
  if (!existsSync(motivationDir)) return Object.keys(articleSourceSlugs);

  return readdirSync(motivationDir)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }))
    .map((file) => `edito/contenu/Ressources/Blog/Motivation/${file}`)
    .filter((sourcePath) => sourcePath in articleSourceSlugs);
}

function parseEditorialMarkdown(sourcePath: string): ParsedMarkdown {
  const lines = readSource(sourcePath).split(/\r?\n/);
  const parsed: ParsedMarkdown = { blocks: [], ctas: [], relatedLinks: [] };
  let current: ContentBlock | undefined;
  let currentList: DataList | undefined;
  let currentCard: Card | undefined;
  let currentCardList: DataList | undefined;
  let inCards = false;

  const ensureBlock = (heading?: string, kind: ContentBlock["kind"] = "text") => {
    if (!current || heading) {
      current = {
        heading,
        kind,
        text: [],
        fields: [],
        lists: [],
        cards: [],
        ctas: [],
        sourcePath,
      };
      parsed.blocks.push(current);
    }
    return current;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === "```") continue;

    const heading = trimmed.match(/^(#{2,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = cleanValue(heading[2]);
      currentList = undefined;
      currentCard = undefined;
      currentCardList = undefined;
      inCards = false;

      if (!parsed.heading && level <= 3) {
        parsed.heading = text;
      } else {
        ensureBlock(text, level >= 4 ? "faq" : "text");
      }
      continue;
    }

    const indent = line.match(/^ */)?.[0].length ?? 0;
    const bullet = trimmed.match(/^-\s+(.+)$/);
    if (bullet) {
      const content = bullet[1];
      const parsedLabel = splitKnownLabel(content);

      if (indent === 0) {
        currentCard = undefined;
        currentCardList = undefined;

        if (parsedLabel?.label.toLowerCase() === "cards") {
          inCards = true;
          ensureBlock(undefined, "cards");
          currentList = undefined;
          continue;
        }

        if (parsedLabel) {
          const { label, value } = parsedLabel;
          if (!current && applyPageField(parsed, label, value, sourcePath)) continue;

          const block = ensureBlock();
          applyBlockLabel(block, label, value, sourcePath);
          currentList = !value ? last(block.lists) : undefined;
          inCards = false;
          continue;
        }

        ensureBlock().text.push(cleanValue(content));
        continue;
      }

      if (inCards && current && indent === 2 && !parsedLabel) {
        currentCard = {
          title: cleanValue(content),
          fields: [],
          lists: [],
          sourcePath,
        };
        current.cards.push(currentCard);
        currentCardList = undefined;
        continue;
      }

      if (inCards && currentCard && indent >= 4) {
        if (parsedLabel) {
          applyCardLabel(currentCard, parsedLabel.label, parsedLabel.value, sourcePath);
          currentCardList = !parsedLabel.value ? last(currentCard.lists) : undefined;
        } else if (currentCardList) {
          currentCardList.items.push(parseListValue(content, sourcePath, listDepth(indent - 2)));
        } else {
          currentCard.text = appendSentence(currentCard.text, cleanValue(content));
        }
        continue;
      }

      if (currentList && indent >= 2) {
        currentList.items.push(parseListValue(content, sourcePath, listDepth(indent)));
        continue;
      }

      if (parsedLabel) {
        const block = ensureBlock();
        applyBlockLabel(block, parsedLabel.label, parsedLabel.value, sourcePath);
        currentList = !parsedLabel.value ? last(block.lists) : undefined;
        continue;
      }

      ensureBlock().text.push(cleanValue(content));
      continue;
    }

    ensureBlock().text.push(cleanValue(trimmed));
  }

  parsed.blocks = parsed.blocks.filter(
    (block) =>
      block.heading ||
      block.text.length ||
      block.fields.length ||
      block.lists.some((list) => list.items.length) ||
      block.cards.length ||
      block.ctas.length,
  );

  return parsed;
}

function splitKnownLabel(content: string): { label: string; value: string } | undefined {
  const match = content.match(/^([^:]+)\s+:\s*(.*)$/);
  if (!match) return undefined;
  const label = cleanValue(match[1]);
  return { label, value: cleanValue(match[2]) };
}

function applyPageField(parsed: ParsedMarkdown, label: string, value: string, sourcePath: string): boolean {
  const normalized = label.toLowerCase();
  if (normalized === "titre") {
    parsed.title = value;
    return true;
  }
  if (normalized === "sous-titre") {
    parsed.subtitle = value;
    return true;
  }
  if (normalized === "accroche") {
    parsed.intro = value;
    return true;
  }
  if (normalized === "statut") {
    parsed.status = value;
    return true;
  }
  if (normalized === "nombre de questions") {
    parsed.questionCount = Number.parseInt(value, 10);
    return true;
  }
  if (normalized === "catégorie") {
    parsed.category = value;
    return true;
  }
  if (normalized.includes("call to action")) {
    const cta = ctaFromValue(value, sourcePath);
    if (cta) parsed.ctas.push(cta);
    return true;
  }
  if (normalized === "visuel principal" || normalized === "image à intégrer") {
    const visual = visualFromValue(label, value, sourcePath);
    if (visual) parsed.visual = visual;
    return true;
  }
  return false;
}

function applyBlockLabel(block: ContentBlock, label: string, value: string, sourcePath: string) {
  const normalized = label.toLowerCase();
  if (normalized === "texte") {
    if (value) block.text.push(value);
    return;
  }
  if (normalized === "titre") {
    if (value) block.text.unshift(value);
    return;
  }
  if (normalized === "description") {
    if (value) block.text.push(value);
    return;
  }
  if (normalized === "visuel principal" || normalized === "image à intégrer") {
    const visual = visualFromValue(label, value, sourcePath);
    if (visual) block.visual = visual;
    return;
  }
  if (normalized.includes("call to action")) {
    const cta = ctaFromValue(value, sourcePath);
    if (cta) block.ctas.push(cta);
    return;
  }
  if (normalized === "contact" || normalized.includes("email")) {
    const cta = ctaFromValue(value, sourcePath);
    if (cta) block.ctas.push(cta);
    else if (value) block.fields.push({ label, value });
    return;
  }
  if (!value) {
    block.lists.push({ label, items: [] });
    block.kind = normalized.includes("contact") ? "contact" : "list";
    return;
  }
  const link = parseMarkdownLink(value, sourcePath);
  if (link) {
    block.lists.push({ label, items: [link] });
    return;
  }
  block.fields.push({ label, value });
}

function applyCardLabel(card: Card, label: string, value: string, sourcePath: string) {
  const normalized = label.toLowerCase();
  if (normalized === "texte" || normalized === "accroche") {
    card.text = appendSentence(card.text, value);
    return;
  }
  if (normalized === "lien") {
    const link = parseMarkdownLink(value, sourcePath);
    if (link) card.href = link.href;
    return;
  }
  if (normalized === "badge") {
    card.badge = value;
    return;
  }
  if (normalized === "prix") {
    card.price = value;
    return;
  }
  if (normalized.includes("call to action")) {
    card.cta = ctaFromValue(value, sourcePath);
    return;
  }
  if (!value) {
    card.lists.push({ label, items: [] });
    return;
  }
  card.fields.push({ label, value });
}

function parseListValue(value: string, sourcePath: string, depth = 0): string | LinkItem | DataListEntry {
  const parsedLabel = splitKnownLabel(value);
  let parsedValue: string | LinkItem;

  if (parsedLabel && ["titre", "texte", "image à intégrer", "description"].includes(parsedLabel.label.toLowerCase())) {
    const nestedLink = parseMarkdownLink(parsedLabel.value, sourcePath);
    parsedValue = nestedLink ?? cleanValue(`${parsedLabel.label} : ${parsedLabel.value}`);
    return depth > 0 ? { value: parsedValue, depth } : parsedValue;
  }

  const link = parseMarkdownLink(value, sourcePath);
  if (link) parsedValue = link;
  else {
    const labelLink = value.match(/^Lien\s+:\s+(.+)$/);
    parsedValue = labelLink ? cleanValue(labelLink[1]) : cleanValue(value);
  }

  return depth > 0 ? { value: parsedValue, depth } : parsedValue;
}

function visualFromValue(label: string, value: string, sourcePath: string): VisualAsset | undefined {
  const image = value.match(/!\[([^\]]*)\]\(([^)]*)\)/);
  if (image) {
    const src = cleanValue(image[2]);
    if (!src) return undefined;
    return {
      label: cleanValue(image[1]) || label,
      src: resolveAssetHref(src, sourcePath),
    };
  }

  const cleaned = cleanValue(value);
  if (!cleaned) return undefined;
  return {
    label,
    src: resolveAssetHref(cleaned, sourcePath),
  };
}

function resolveAssetHref(rawHref: string, sourcePath: string): string {
  if (/^(https?:|\/)/.test(rawHref)) return rawHref;
  if (!rawHref.includes("/")) return `/${rawHref}`;

  const baseDir = path.dirname(sourcePath);
  return `/${path.normalize(path.join(baseDir, rawHref)).replaceAll("\\", "/")}`;
}

function listDepth(indent: number): number {
  return Math.max(0, Math.floor((indent - 2) / 2));
}

function inferCtaKind(label: string, href: string): Cta["kind"] {
  const text = `${label} ${href}`.toLowerCase();
  if (text.includes("tarif")) return "pricing";
  if (text.includes("documentation")) return "documentation";
  if (text.includes("support")) return "support";
  if (text.includes("press") || text.includes("presse")) return "press";
  if (text.includes("legal") || text.includes("légal")) return "legal";
  if (text.includes("contact") || text.includes("mailto:")) return "contact";
  return "account";
}

function appendSentence(existing: string | undefined, next: string): string {
  return existing ? `${existing} ${next}` : next;
}

function last<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value: string): string {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
