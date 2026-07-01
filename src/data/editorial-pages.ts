import {
  articleSourceSlugs,
  homeSourcePath,
  listArticleSourcePaths,
  parseArticle,
  parseEditorialPage,
  parseHomePage,
  routeSources,
  sourceHref,
  type Article,
  type EditorialPage,
} from "./source-map";

export const homePage = parseHomePage();

export const editorialPages: EditorialPage[] = routeSources.map((entry) =>
  parseEditorialPage(entry.sourcePath, entry.slug, entry.section),
);

export const allPages: EditorialPage[] = [homePage, ...editorialPages];

export const articleEntries: Article[] = listArticleSourcePaths().map((sourcePath) => parseArticle(sourcePath));

export const motivationArticleLinks = Object.entries(articleSourceSlugs).map(([sourcePath, slug]) => {
  const article = articleEntries.find((entry) => entry.sourcePath === sourcePath);
  return {
    label: article?.heading ?? article?.title ?? slug,
    href: sourceHref(sourcePath),
    sourcePath,
  };
});

export function getPageBySlug(slug: string | undefined): EditorialPage | undefined {
  const normalizedSlug = slug ?? "";
  return allPages.find((page) => page.slug === normalizedSlug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articleEntries.find((article) => article.slug === slug);
}
