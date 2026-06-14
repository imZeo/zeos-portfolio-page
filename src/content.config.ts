import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const recipes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    aliases: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, recipes };
