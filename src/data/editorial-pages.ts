import {
  getArticleSources,
  getBrokenInternalLinks,
  getDuplicateRouteHrefs,
  getRouteSources,
  parseArticle,
  parseEditorialPage,
  parseHomePage,
  sourceHref,
  type Article,
  type EditorialPage,
} from "./source-map";

const duplicateRouteHrefs = getDuplicateRouteHrefs();
if (duplicateRouteHrefs.length > 0) {
  throw new Error(`Duplicate editorial hrefs detected: ${duplicateRouteHrefs.join(", ")}`);
}

const brokenInternalLinks = getBrokenInternalLinks();
if (brokenInternalLinks.length > 0) {
  const formattedIssues = brokenInternalLinks.map((issue) => `${issue.sourcePath} -> ${issue.href}`).join("; ");
  throw new Error(`Broken editorial links detected: ${formattedIssues}`);
}

export const homePage = parseHomePage();

export const editorialPages: EditorialPage[] = getRouteSources().map((entry) =>
  parseEditorialPage(entry.sourcePath, entry.slug, entry.section),
);

export const allPages: EditorialPage[] = [homePage, ...editorialPages];

export const articleEntries: Article[] = getArticleSources().map((entry) => parseArticle(entry.sourcePath));

export const motivationArticleLinks = articleEntries.map((article) => ({
  label: article.heading ?? article.title,
  href: sourceHref(article.sourcePath),
  sourceKey: article.sourceKey,
  sourcePath: article.sourcePath,
}));

export function getPageBySlug(slug: string | undefined): EditorialPage | undefined {
  const normalizedSlug = slug ?? "";
  return allPages.find((page) => page.slug === normalizedSlug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articleEntries.find((article) => article.slug === slug);
}
