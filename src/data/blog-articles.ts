import { getCollection, type CollectionEntry } from "astro:content";

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

export type Article = CollectionEntry<"motivation">;

export type ArticleSummary = {
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  parentCategoryPath: string;
};

function articleHref(slug: string): string {
  return `/ressources/blog/motivation/${slug}`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderInlineMarkdown(value: string): string {
  const escaped = escapeHtml(value);
  return escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function sortArticles(articles: Article[]): Article[] {
  return [...articles].sort((left, right) => {
    const orderDiff = left.data.order - right.data.order;
    return orderDiff !== 0 ? orderDiff : left.id.localeCompare(right.id);
  });
}

export async function getMotivationArticles(): Promise<Article[]> {
  return sortArticles(await getCollection("motivation"));
}

export async function getArticleSummaries(): Promise<ArticleSummary[]> {
  const articles = await getMotivationArticles();
  return articles.map((article) => ({
    slug: article.id,
    title: article.data.title,
    subtitle: article.data.subtitle,
    href: articleHref(article.id),
    parentCategoryPath: article.data.parentCategoryPath,
  }));
}
