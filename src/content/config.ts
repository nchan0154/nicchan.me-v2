import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updated: z.optional(z.coerce.date()),
		tags: z.array(z.string()),
		draft: z.boolean().default(false),
	}),
});

const artwork = defineCollection({
	schema: z.object({
		title: z.string(),
		url: z.string(),
		width: z.number(),
		height: z.number(),
		medium: z.string(),
		year: z.number(),
		alt: z.string(),
	}),
});

export const collections = { blog, artwork };
