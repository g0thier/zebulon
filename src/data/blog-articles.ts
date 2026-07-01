import { readFileSync } from "node:fs";

export type LinkItem = {
  label: string;
  href: string;
};

export type Cta = LinkItem & {
  kind?: "primary" | "secondary";
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
  sourcePath: string;
};

export type Article = {
  id: string;
  slug: string;
  heading: string;
  title: string;
  subtitle: string;
  status: string;
  questionCount: number;
  category: string;
  series?: string;
  sections: ContentBlock[];
  cta?: Cta;
  parentCategoryPath: string;
  sourcePath: string;
};

export type ArticleSummary = {
  slug: string;
  heading: string;
  title: string;
  subtitle: string;
  href: string;
  parentCategoryPath: string;
};

const articleSources = [
  { slug: "theorie-x-y", heading: "Theorie X-Y", sourcePath: "src/content/blog/motivation/theorie-x-y.md" },
  { slug: "identite-pro", heading: "Identite Pro", sourcePath: "src/content/blog/motivation/identite-pro.md" },
  { slug: "besoins-de-maslow", heading: "Besoins de Maslow", sourcePath: "src/content/blog/motivation/besoins-de-maslow.md" },
  { slug: "autodetermination", heading: "Autodetermination", sourcePath: "src/content/blog/motivation/autodetermination.md" },
  { slug: "attentes", heading: "Attentes", sourcePath: "src/content/blog/motivation/attentes.md" },
  { slug: "equite", heading: "Equite", sourcePath: "src/content/blog/motivation/equite.md" },
  { slug: "besoins-acquis", heading: "Besoins acquis", sourcePath: "src/content/blog/motivation/besoins-acquis.md" },
  { slug: "mimetisme", heading: "Mimetisme", sourcePath: "src/content/blog/motivation/mimetisme.md" },
] as const;

export const motivationCategoryPath = "/ressources/blog/categories/leadership-et-engagement";

function articleHref(slug: string): string {
  return `/ressources/blog/motivation/${slug}`;
}

function parseMarkdownLink(value: string): LinkItem | undefined {
  const match = value.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!match) return undefined;
  return {
    label: match[1].trim(),
    href: match[2].trim(),
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderInlineMarkdown(value: string, _sourcePath?: string): string {
  const escaped = escapeHtml(value);
  return escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function listEntry(rawLine: string): DataListEntry {
  const match = rawLine.match(/^(\s*)-\s+(.*)$/);
  if (!match) {
    return { value: rawLine.trim(), depth: 0 };
  }
  return {
    value: match[2].trim(),
    depth: Math.floor(match[1].length / 2),
  };
}

function parseArticle(sourcePath: string, slug: string, fallbackHeading: string): Article {
  const raw = readFileSync(sourcePath, "utf8").replaceAll("\r\n", "\n").trim();
  const sections = raw.split(/\n(?=### )/).map((section) => section.trim()).filter(Boolean);
  const metadataLines = sections.shift()?.split("\n") ?? [];

  const heading = metadataLines[0]?.replace(/^###\s+/, "").trim() || fallbackHeading;
  const metadata = new Map<string, string>();
  for (const line of metadataLines.slice(1)) {
    const match = line.match(/^- ([^:]+)\s*:\s*(.*)$/);
    if (match) metadata.set(match[1].trim().toLowerCase(), match[2].trim());
  }

  const contentBlocks: ContentBlock[] = [];
  let articleCta: Cta | undefined;

  for (const section of sections) {
    const lines = section.split("\n").map((line) => line.trimEnd());
    const blockHeading = lines[0].replace(/^###\s+/, "").trim();
    const text: string[] = [];
    const listItems: DataListEntry[] = [];
    const ctas: Cta[] = [];

    let inList = false;
    for (const line of lines.slice(1)) {
      if (!line.trim()) continue;
      if (line.startsWith("- liste")) {
        inList = true;
        continue;
      }
      if (line.startsWith("- Texte :")) {
        inList = false;
        text.push(line.replace(/^- Texte\s*:\s*/, "").trim());
        continue;
      }
      if (line.startsWith("- Call to action :")) {
        inList = false;
        const link = parseMarkdownLink(line.replace(/^- Call to action\s*:\s*/, "").trim());
        if (link) {
          const cta = { ...link, kind: "secondary" as const };
          ctas.push(cta);
          if (blockHeading === "Commencer") articleCta = cta;
        }
        continue;
      }
      if (inList && line.match(/^\s*-\s+/)) {
        listItems.push(listEntry(line));
      }
    }

    contentBlocks.push({
      heading: blockHeading,
      kind: listItems.length > 0 ? "list" : "text",
      text,
      fields: [],
      lists: listItems.length > 0 ? [{ label: "Liste", items: listItems }] : [],
      cards: [],
      ctas,
      sourcePath,
    });
  }

  return {
    id: slug,
    slug,
    heading,
    title: metadata.get("titre") ?? heading,
    subtitle: metadata.get("sous-titre") ?? "",
    status: metadata.get("statut") ?? "",
    questionCount: Number(metadata.get("nombre de questions") ?? "0"),
    category: metadata.get("categorie") ?? "Motivation",
    series: "Motivation",
    sections: contentBlocks,
    cta: articleCta,
    parentCategoryPath: motivationCategoryPath,
    sourcePath,
  };
}

export const articleEntries: Article[] = articleSources.map((source) =>
  parseArticle(source.sourcePath, source.slug, source.heading),
);

export const articleSummaries: ArticleSummary[] = articleEntries.map((article) => ({
  slug: article.slug,
  heading: article.heading,
  title: article.title,
  subtitle: article.subtitle,
  href: articleHref(article.slug),
  parentCategoryPath: article.parentCategoryPath,
}));

export function getArticleBySlug(slug: string): Article | undefined {
  return articleEntries.find((article) => article.slug === slug);
}

export function getArticleSummaries(): ArticleSummary[] {
  return articleSummaries;
}
