import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { articleEntries } from "./data/editorial-pages";

const articles = defineCollection({
  loader: async () => articleEntries,
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    sourcePath: z.string(),
    heading: z.string(),
    title: z.string(),
    subtitle: z.string(),
    status: z.string(),
    questionCount: z.number(),
    category: z.string(),
    series: z.string().optional(),
    sections: z.array(z.any()),
    cta: z.any().optional(),
  }),
});

export const collections = { articles };
