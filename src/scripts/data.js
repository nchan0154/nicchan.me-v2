import { getCollection } from "astro:content";

export async function getPosts() {
	const posts = await getCollection("blog");
	return posts
		.sort((a, b) => {
			return new Date(b.data.date) - new Date(a.data.date);
		})
		.filter((post) => {
			return post.data.draft !== true;
		});
}

export async function getTags(posts) {
	const tags = [...new Set(posts.map((post) => post.data.tags).flat())];
	return tags.sort((a, b) => a.localeCompare(b));
}
