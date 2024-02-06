<script>
	export let posts;

	const formatDate = (date) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(date).toLocaleDateString(undefined, options);
	};
</script>

<ol class="posts">
	{#each posts as post}
		<li class="post">
			<a class="post__link button button--ui" href={`/blog/${post.slug}/`}>
				<span class="post__date">{formatDate(post.data.date)}</span>
				<span class="post__title text--heading">{post.data.title}</span>
			</a>
		</li>
	{/each}
</ol>

<style lang="scss">
	.posts {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.post__date {
		position: relative;
		padding: calc(var(--border-thickness)) calc(var(--border-thickness))
			0.0625rem;
		display: inline-block;
		margin-block-end: var(--border-thickness);
		background-color: var(--color-post-tag-bg);
		color: var(--color-post-tag-text);
		font-size: 1.25rem;
		z-index: 1;
	}

	.post + .post {
		margin-block-start: calc(var(--border-thickness) * 2);
	}

	.post__link {
		display: block;
	}

	.post__title {
		display: block;
		font-size: 1.5rem;
		text-decoration: underline;
	}
</style>
