import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  category: z.string().min(2),
  categorySlug: z.string().regex(/^[a-z0-9-]+$/),
  publishedAt: z.coerce.date(),
  author: z.string().default("BIRDS Editorial Team"),
  cover: z.string().url(),
  featured: z.boolean().default(false),
  readTime: z.number().int().positive().default(5),
  tags: z.array(z.string()).default([])
});

const birdSchema = z.object({
  name: z.string(),
  scientificName: z.string(),
  family: z.string(),
  habitat: z.string(),
  image: z.string().url(),
  summary: z.string()
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: articleSchema
});

const birds = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/birds" }),
  schema: birdSchema
});

export const collections = { blog, birds };