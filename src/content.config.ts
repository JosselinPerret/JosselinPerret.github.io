import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
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
