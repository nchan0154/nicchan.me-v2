import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()),
	}),
});

export const collections = { blog };
