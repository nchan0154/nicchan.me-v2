import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		image: z.optional(z.string()),
		alt: z.optional(z.string()),
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

const work = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		image: z.object({
			url: z.string(),
			width: z.number(),
			height: z.number(),
			alt: z.string(),
		}),
		color: z.string(),
		technology: z.array(z.string()),
		excerpt: z.string(),
	}),
});

export const collections = { blog, artwork, work };
