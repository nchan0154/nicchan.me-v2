import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { Feed } from "feed";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getCollection } from "astro:content";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";
import { SITE_TITLE } from "../consts";

export async function GET(context) {
	// Get the URL to prepend to relative site links. Based on `site` in `astro.config.mjs`.
	let baseUrl = context.site.href || "https://example.com";
	if (baseUrl.at(-1) === "/") baseUrl = baseUrl.slice(0, -1);

	// Load MDX renderer. Other renderers for UI frameworks (e.g. React, Vue, etc.) would need adding here if you were using those.
	const renderers = await loadRenderers([getMDXRenderer()]);

	// Create a new Astro container that we can render components with.
	// See https://docs.astro.build/en/reference/container-reference/
	const container = await AstroContainer.create({ renderers });

	// Load the content collection entries to add to our RSS feed.
	const posts = (await getCollection("blog"))
		.filter((post) => {
			return post.data.draft !== true || post.data.pubDate < new Date();
		})
		.sort((a, b) =>
			// Sort by publication date descending.
			a.data.pubDate > b.data.pubDate ? -1 : 1
		);

	const feed = new Feed({
		title: SITE_TITLE,
		description: "The personal blog of Nic Chan, a front-end web developer.",
		id: baseUrl,
		link: baseUrl,
		language: "en",
		image: `${baseUrl}/pixels/portrait.png`,
		favicon: `${baseUrl}/favicon.svg`,
		feedLinks: {
			atom: `${baseUrl}/feed.xml`,
		},
		author: {
			name: "Nic Chan",
		},
	});

	for (const post of posts) {
		// Get the `<Content/>` component for the current post.
		const { Content } = await post.render();
		// Use the Astro container to render the content to a string.
		const rawContent = await container.renderToString(Content);
		const content = await transform(
			rawContent.replace(/^<!DOCTYPE html>/, ""),
			[
				async (node) => {
					await walk(node, (node) => {
						if (node.name === "a" && node.attributes.href?.startsWith("/")) {
							node.attributes.href = baseUrl + node.attributes.href;
						}
						if (node.name === "img" && node.attributes.src?.startsWith("/")) {
							node.attributes.src = baseUrl + node.attributes.src;
						}
					});
					return node;
				},
				sanitize({ dropElements: ["script", "style"] }),
			]
		);
		feed.addItem({
			...post.data,
			date: post.data.updated || post.data.pubDate,
			published: post.data.pubDate,
			link: `${baseUrl}/blog/${post.slug}/`,
			content,
		});
	}

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
