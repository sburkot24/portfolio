import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    coverImage: image(),
    images: z.array(image()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    link: z.string().url().optional(),
    doi: z.string().optional(),
  }),
});

const patents = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    inventors: z.string(),
    patentNumber: z.string(),
    year: z.number(),
    link: z.string().url().optional(),
    image: image().optional(),
  }),
});

export const collections = {
  projects,
  publications,
  patents,
};
