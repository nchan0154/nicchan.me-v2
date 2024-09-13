<script>
	import { isMaximizing } from "../scripts/windows.js";

	export let art;

	$: artworkMaximizing = $isMaximizing === art.title;
</script>

<div class="artwork">
	<img
		style={artworkMaximizing && "view-transition-name: artwork"}
		class="artwork__image"
		src={art.url}
		alt={art.alt}
		width={art.width}
		height={art.height} />
	<p class="artwork__caption">
		"{art.title}", {art.medium}, {art.year}
	</p>
</div>

<style lang="scss">
	.artwork__caption {
		position: absolute;
		inset-block-start: 0;
		margin-block-start: 0.5rem;
		font-size: 1rem;
		text-align: center;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;

		:global(.window__wrapper--maximized) & {
			visibility: visible;
			opacity: 1;
			position: relative;
		}
	}

	.artwork__image {
		display: block;
		image-rendering: auto;
		margin-block-start: var(--border-thickness);

		:global(.window__wrapper--maximized:not(.window__wrapper--minimized)) & {
			--text-padding: var(--space-xs);
			max-height: calc(100vh - 9.5rem);
			max-inline-size: 100%;
			margin-inline: auto;
			aspect-ratio: initial;
			inline-size: auto;
			block-size: auto;
		}
	}
</style>
