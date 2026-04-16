import { defineCollection, z } from "astro:content";

const isoDateSchema = z.preprocess((value) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return value;
}, z.string().regex(/^\d{4}-\d{2}-\d{2}$/));

const answers = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
    description: z.string().min(1),
    excerpt: z.string().min(1),
    type: z.enum(["answer", "use-case", "update"]),
    publishedAt: isoDateSchema,
    updatedAt: isoDateSchema,
    author: z.object({
      name: z.string().min(1),
      role: z.string().optional(),
      url: z.string().url().optional(),
    }),
    tags: z.array(z.string().min(1)).min(1),
    featured: z.boolean().default(false),
    question: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    ctaHref: z.string().url(),
    ctaLabel: z.string().min(1),
    relatedSlugs: z.array(z.string()).default([]),
  }),
});

export const collections = { answers };
