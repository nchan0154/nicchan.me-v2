<script>
	import TextExpand from "./TextExpand.svelte";
	export let testimonials;
</script>

<div class="stack testimonials">
	{#each testimonials as testimonial}
		<div class="testimonial">
			<h3 class="testimonial__name text--base">
				{testimonial.name}, {testimonial.title}
			</h3>
			<div class="testimonial__quote rte" data-text-expand tabindex="-1">
				<svg
					class="testimonial__arrow"
					viewBox="0 0 8 13"
					preserveAspectRatio="xMidYMid meet"
					aria-hidden="true"
					role="presentation"
				>
					<path
						fill="currentColor"
						d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
					></path>
				</svg>
				<TextExpand text={testimonial.testimonial} />
			</div>
		</div>
	{/each}
	<div class="testimonial testimonial--response">
		<h3 class="testimonial__name text--base">Nic Chan</h3>
		<div class="testimonial__quote rte">
			<svg
				class="testimonial__arrow"
				viewBox="0 0 8 13"
				preserveAspectRatio="xMidYMid meet"
				aria-hidden="true"
				role="presentation"
			>
				<path
					fill="currentColor"
					d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
				></path>
			</svg>
			Aww thanks everyone! I really appreciate you all taking the time to write me
			a testimonial. 😍
		</div>
	</div>
</div>

<style lang="scss">
	.testimonial {
		padding: 0 0.75rem;
	}

	.testimonial__name {
		font-size: 1.125rem;
		margin: 0 0.75rem;
		color: var(--color-testimonial-name);
	}

	.testimonial__quote {
		--color: var(--color-testimonial-bg);
		position: relative;
		padding: 0.5rem 0.75rem;
		background-color: var(--color);
		border-radius: 0.5rem;
		border-start-start-radius: 0;
		max-inline-size: 66ch;
	}

	.testimonial__arrow {
		position: absolute;
		inset-block-start: 0;
		inset-inline-start: 0;
		transform: translateX(-100%);
		color: var(--color);
		inline-size: 0.75rem;
	}

	.testimonial--response {
		.testimonial__name {
			color: var(--color-response-name);
			text-align: right;
		}

		.testimonial__quote {
			--color: var(--color-response-bg);
			border-start-start-radius: 0.5rem;
			border-start-end-radius: 0rem;
			margin-inline-start: auto;
			margin-inline-end: 0.75rem;
		}

		.testimonial__arrow {
			inset-inline-start: auto;
			inset-inline-end: 0;
			transform: translateX(100%) scaleX(-1);
		}
	}
</style>
