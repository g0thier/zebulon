import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { allPages, articleEntries } from "./data/editorial-pages";
import { sourceRegistry } from "./data/source-map";

const pages = defineCollection({
  loader: async () => allPages,
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    section: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    intro: z.string().optional(),
    status: z.string().optional(),
    blocks: z.array(z.any()),
    ctas: z.array(z.any()),
    relatedLinks: z.array(z.any()),
    visual: z.any().optional(),
    sourceKey: z.string(),
    sourcePath: z.string(),
  }),
});

const articles = defineCollection({
  loader: async () => articleEntries,
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    heading: z.string(),
    title: z.string(),
    subtitle: z.string(),
    status: z.string(),
    questionCount: z.number(),
    category: z.string(),
    series: z.string().optional(),
    sections: z.array(z.any()),
    cta: z.any().optional(),
    parentCategorySlug: z.string(),
    sourceKey: z.string(),
    sourcePath: z.string(),
  }),
});

const editorialSources = defineCollection({
  loader: async () => sourceRegistry.map((source) => ({ id: source.sourceKey, ...source })),
  schema: z.object({
    id: z.string(),
    sourceKey: z.string(),
    sourcePath: z.string(),
    sourceType: z.enum(["structure", "content", "layout"]),
    title: z.string(),
    rawMarkdown: z.string(),
  }),
});

export const collections = { pages, articles, editorialSources };
