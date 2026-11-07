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
  tags: z.array(z.string()).default([]),
  language: z.enum(["en", "ar"]).default("en")
});

const birdSchema = z.object({
  name: z.string(),
  nameAr: z.string().default(""),
  scientificName: z.string(),
  family: z.string(),
  habitat: z.string(),
  habitatAr: z.string().default(""),
  diet: z.string().default("Not specified"),
  dietAr: z.string().default("غير محدد"),
  image: z.string().url(),
  summary: z.string(),
  summaryAr: z.string().default(""),
  category: z.enum(["nature", "migratory", "ornamental", "raptors", "waterbirds", "garden"]).default("nature"),
  conservationStatus: z.string().default("Not assessed"),
  conservationSource: z.string().url().optional(),
  popular: z.boolean().default(false)
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