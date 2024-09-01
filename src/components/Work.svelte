<script>
	import { Image } from "@unpic/svelte";
	export let work;
</script>

<ol class="work">
	{#each work as item}
		<li class="work__item">
			<a class="card" href={`/work/${item.slug}/`}>
				<span class="work__content card__content">
					<span class="work__title text--heading">{item.data.title}</span>
					<div class="work__image-wrapper">
						<Image
							class=""
							src={item.data.image.url}
							layout={"constrained"}
							width={item.data.image.width}
							height={item.data.image.height}
							alt={item.data.image.alt}
							sizes="100px"
							breakpoints={[100, 200, 400]} />
					</div>
				</span>
			</a>
		</li>
	{/each}
</ol>

<style lang="scss">
	.work {
		display: grid;
		grid-template-columns: 100%;
		grid-row: auto;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.work__item {
		container-type: inline-size;
		container-name: work;
	}

	.work__title {
		font-size: 1.5rem;
	}

	@container work (min-width: 20rem) {
		.work__content {
			display: flex;
			gap: 1rem;
			justify-content: space-between;
		}

		.work__image-wrapper {
			margin-block-start: calc(var(--border-thickness) * -2);
			margin-block-end: calc(var(--border-thickness) * -3);
			margin-inline-end: calc(var(--border-thickness) * -2 + 2px);

			:global(img) {
				image-rendering: auto;
			}
		}
	}
</style>
