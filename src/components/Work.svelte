<script>
	import { Image } from "@unpic/svelte";
	export let work;
</script>

<ol class="work">
	{#each work as item}
		<li class="work__item">
			<div class="work__card card">
				<span class="work__content card__content">
					<div
						class="work__image-background"
						style={`background-color: ${item.data.color}`}>
						<div class="work__image-wrapper">
							<Image
								class=""
								src={item.data.image.url}
								layout={"constrained"}
								width={item.data.image.width}
								height={item.data.image.height}
								alt={item.data.image.alt} />
						</div>
					</div>
					<div class="work__main">
						<a
							class="card__link work__title text--heading"
							href={`/work/${item.slug}/`}>
							{item.data.title}
						</a>
						<p class="work__excerpt">{item.data.excerpt}</p>
					</div>
				</span>
			</div>
		</li>
	{/each}
</ol>

<style lang="scss">
	.work {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: 100%;
		margin: 0.5rem 0;
		padding: 0;
		list-style: none;
	}

	.work__item {
		container-type: inline-size;
		container-name: work;
		height: 100%;
	}

	.work__card {
		height: 100%;
	}

	.work__content {
		height: 100%;
		padding: 0;
	}

	.work__title {
		font-size: 1.5rem;
		color: currentColor;
	}

	.work__excerpt {
		margin-top: var(--border-thickness);
		line-height: 1.2;
		color: var(--color-window-text);
		font-size: 1.125rem;
	}

	.work__image-background {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1 1 20rem;
		margin: var(--border-thickness);
	}

	.work__main {
		padding: var(--text-padding);
	}

	.work__image-wrapper {
		@include pixel-borders();
		--max-width: 70%;
		margin: auto;
		width: var(--max-width);
		max-width: var(--max-width);
		max-height: var(--max-width);
		margin-block: 0.5rem;

		:global(img) {
			display: block;
			image-rendering: auto;
		}
	}

	@media (min-width: 30em) and (max-width: 62em) {
		.work {
			grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
		}
	}

	:global(.window__wrapper--maximized) {
		.work {
			grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
		}
	}

	@container work (min-width: 26rem) {
		.work__content {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.work__main {
			flex: 1 1 auto;
		}

		.work__image-background {
			flex: 1 1 12rem;
			min-width: 12rem;
			align-self: stretch;
		}

		.work__image-wrapper {
			--max-width: 80%;
			max-height: none;
		}
	}
</style>
