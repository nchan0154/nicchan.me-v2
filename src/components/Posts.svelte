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
			<div class="card" href={`/blog/${post.slug}/`}>
				<span class="card__content">
					<span class="post__date">{formatDate(post.data.pubDate)}</span>
					<a
						href={`/blog/${post.slug}/`}
						class="post__title text--heading card__link">
						{post.data.title}
					</a>
				</span>
			</div>
		</li>
	{/each}
</ol>

<style lang="scss">
	.posts {
		margin: 0;
		padding: var(--border-thickness) 0;
		list-style: none;
	}

	.post__date {
		position: relative;
		padding: calc(var(--border-thickness)) calc(var(--border-thickness))
			0.0625rem;
		display: inline-block;
		margin-block-end: var(--border-thickness);
		background-color: var(--color-card-tag-bg);
		color: var(--color-card-tag-text);
		font-size: 1.25rem;
		z-index: 1;
	}

	.post__link {
		display: block;
	}

	.post + .post {
		margin-block-start: calc(var(--border-thickness) * 2);
	}

	.post__title {
		display: block;
		font-size: 1.5rem;
		text-decoration: underline;
		color: var(--color-card-text);
	}
</style>
