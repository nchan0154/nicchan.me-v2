<script>
	import { onMount } from "svelte";
	import { windowStore, isMaximizing } from "../scripts/windows.js";

	export let title, style, order, back, backText, ref;
	export let id = title.replace(" ", "-").toLowerCase() || "window";
	export let titleTag = "h2";
	export let isStacked = false;
	let activeWindow;
	let bottomPadding = 0;

	onMount(() => {
		$windowStore = [
			...$windowStore,
			{
				name: title,
				id,
				order,
				isMinimized: false,
				isMaximized: false,
			},
		];

		return () => {
			$windowStore = $windowStore.filter((window) => window.name !== title);
		};
	});

	$: activeWindow = $windowStore.find((window) => window.name === title);
	$: transitionName = $isMaximizing
		? ""
		: `view-transition-name: window-${order}; `;

	function startMaximizeWindow() {
		// We're doing this because I think the way the maximizing transition looks is kind of janky when using the morphing animation, so we're resetting to the default crossfade

		$isMaximizing = true;
		bottomPadding = document.getElementById("footer").clientHeight;

		const transition = document.startViewTransition(() => maximizeWindow());

		transition.finished.then(() => {
			$isMaximizing = false;
		});
	}

	function maximizeWindow() {
		activeWindow.isMaximized = !activeWindow.isMaximized;
		$windowStore = $windowStore;
	}

	function startMinimizeWindow() {
		const transition = document.startViewTransition(() => minimizeWindow());
	}

	function minimizeWindow() {
		activeWindow.isMinimized = true;
		$windowStore = $windowStore;
	}
</script>

<section
	class="window__wrapper"
	class:window__wrapper--stacked={isStacked}
	class:window__wrapper--maximized={activeWindow
		? activeWindow.isMaximized
		: false}
	class:window__wrapper--minimized={activeWindow
		? activeWindow.isMinimized
		: false}
	style={`${transitionName} ${
		style && `${style};`
	} --bottom-padding: ${bottomPadding}px`}
	bind:this={ref}
	{id}
>
	<div class="window" tabindex="-1">
		<div class="window__header">
			<svelte:element this={titleTag} class="window__title">
				{title ? title : ""}
			</svelte:element>
			<div class="window__controls">
				<button
					class="button--ui window__control window__control--minimize"
					on:click={startMinimizeWindow}
				>
					<img class="window__icon" src="/pixels/minimize.svg" alt="" />
					<span class="visually-hidden">Minimize</span>
				</button>
				<button
					class="button--ui window__control window__control--maximize"
					on:click={startMaximizeWindow}
					aria-pressed={activeWindow ? activeWindow.isMaximized : false}
				>
					<img class="window__icon" src="/pixels/maximize.svg" alt="" />
					<span class="visually-hidden">Maximize</span>
				</button>
				{#if back}
					<button class="button--ui window__control window__control--close">
						<img class="window__icon" src="/pixels/close-2.svg" alt="" />
						<span class="visually-hidden">{backText}</span>
					</button>
				{/if}
			</div>
		</div>
		<div class="window__body">
			<slot />
		</div>
	</div>
</section>

<style lang="scss">
	@import "../styles/_mixins.scss";

	.window__wrapper {
		display: flex;
		max-width: var(--max-width);
		max-height: 100%;
		font-size: 1.25rem;
		width: fit-content;

		&:focus,
		&:focus-within {
			z-index: 2;
		}
	}

	.window__wrapper--stacked {
		max-height: none;
		margin-block-start: var(--window-margin-block-start);
	}

	.window {
		display: flex;
		flex-direction: column;
		padding: var(--border-thickness);
		background-color: var(--color-window-bg);
		color: var(--color-window-text);

		@include pixel-borders(#000);
	}

	.window__header {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: var(--text-padding);
		justify-content: space-between;
		background: var(--color-window-header-bg);
		color: var(--color-window-header-text);
	}

	.window__controls {
		display: flex;
	}

	.window__control {
		margin-inline-start: calc(var(--border-thickness) * -1);
	}

	.window__icon {
		width: 0.875rem;
	}

	.window__title {
		font-family: var(--font-base);
		font-size: 1.375rem;
	}

	.window__body {
		max-height: 100%;
		padding: var(--text-padding);
		overflow-y: auto;
		animation: none;

		& > * + :where(astro-island, astro-slot) > *:first-child {
			margin-top: 0.5rem;
		}
	}

	@media (min-width: 62em) {
		.window__wrapper {
			max-width: var(--large-max-width, var(--max-width));
		}

		.window__wrapper--stacked {
			position: absolute;
			max-height: var(--max-height, 100%);
			margin: 0;
			inset-inline-start: var(--inline-start, auto);
			inset-inline-end: var(--inline-end, auto);
			inset-block-start: calc(
				var(--block-start, auto) + var(--page-block-padding) +
					var(--title-font-size)
			);
			inset-block-end: var(--block-end, auto);
			padding-block-end: var(--padding-block-end);
		}
	}

	.window__wrapper--maximized {
		position: absolute;
		max-height: 100%;
		margin: 0;
		inset: 0;
		width: 100%;
		inset-block-end: var(--bottom-padding);
		max-width: none;
		padding-block-end: 0;
		z-index: 1;

		.window {
			width: 100%;
		}

		@media (min-width: 40em) {
			inset-block-end: 0;
		}
	}

	.window__wrapper--minimized {
		position: absolute;
		left: 0;
		margin: 0;
		inset-block-start: auto;
		bottom: 0;
		width: 0;
		height: 0;
		visibility: hidden;
		overflow: hidden;
	}
</style>
