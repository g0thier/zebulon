import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const motivation = defineCollection({
  loader: glob({
    base: "./src/content/blog/motivation",
    pattern: "**/*.md",
  }),
  schema: z.object({
    order: z.number().int().nonnegative(),
    title: z.string(),
    subtitle: z.string(),
    status: z.string(),
    questionCount: z.number().int().nonnegative(),
    category: z.string(),
    series: z.string().optional(),
    parentCategoryPath: z.string(),
    cta: z
      .object({
        label: z.string(),
        href: z.string(),
        kind: z.enum(["primary", "secondary"]).optional(),
      })
      .optional(),
  }),
});

export const collections = { motivation };
