import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    skills: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};
