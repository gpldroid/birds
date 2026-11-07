import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().trim().min(5).max(120),
    description: z.string().trim().min(30).max(320),
    category: z.string().trim().min(2).max(50),
    categorySlug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    publishedAt: z.coerce.date(),
    author: z.string().trim().min(2).max(80).default("Avian World Editorial Team"),
    cover: z.string().url(),
    featured: z.boolean().default(false),
    readTime: z.number().int().min(1).max(90).default(5),
    tags: z.array(z.string().trim().min(1).max(30)).max(12).default([])
  }).strict()
});
export const collections = { blog };