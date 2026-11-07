import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const slugSchema = z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const imageSchema = z.string().trim().min(1).refine(
  (value) => value.startsWith("/birds/images/uploads/") || /^https?:\/\//i.test(value),
  "Use an absolute image URL or a path under /birds/images/uploads/."
);

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().trim().min(5).max(120),
    description: z.string().trim().min(30).max(320),
    category: z.string().trim().min(2).max(50),
    categorySlug: slugSchema,
    publishedAt: z.coerce.date(),
    author: z.string().trim().min(2).max(80).default("Avian World Editorial Team"),
    cover: imageSchema,
    featured: z.boolean().default(false),
    readTime: z.number().int().min(1).max(90).default(5),
    tags: z.array(z.string().trim().min(1).max(30)).max(12).default([]),
    relatedBirds: z.array(slugSchema).max(12).default([]),
    relatedArticles: z.array(slugSchema).max(12).default([]),
    language: z.literal("en").default("en")
  }).strict()
});

const birds = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/birds" }),
  schema: z.object({
    commonName: z.string().trim().min(2).max(100),
    scientificName: z.string().trim().min(3).max(120),
    family: z.string().trim().min(2).max(100),
    order: z.string().trim().min(2).max(100),
    description: z.string().trim().min(40).max(320),
    habitat: z.array(z.string().trim().min(2).max(100)).min(1).max(12),
    diet: z.array(z.string().trim().min(2).max(100)).min(1).max(12),
    range: z.string().trim().min(10).max(500),
    size: z.string().trim().min(2).max(100),
    wingspan: z.string().trim().min(2).max(100).optional(),
    conservationStatus: z.enum([
      "Least Concern",
      "Near Threatened",
      "Vulnerable",
      "Endangered",
      "Critically Endangered",
      "Extinct in the Wild",
      "Extinct",
      "Data Deficient",
      "Not Evaluated"
    ]),
    cover: imageSchema,
    featured: z.boolean().default(false),
    relatedBirds: z.array(slugSchema).max(12).default([]),
    relatedArticles: z.array(slugSchema).max(12).default([]),
    tags: z.array(z.string().trim().min(1).max(30)).max(12).default([]),
    language: z.literal("en").default("en")
  }).strict()
});

export const collections = { blog, birds };
