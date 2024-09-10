<script>
	import { onMount } from "svelte";
	import {
		windowStore,
		isMaximizing,
		isMinimizing,
	} from "../scripts/windows.js";

	export let title = "",
		style = "",
		order,
		ref = null,
		flex = false,
		titleTag = "h2",
		isAbsolute = false,
		scrollBody = true;

	export let id = title.replaceAll(" ", "-").toLowerCase() || "window";
	let activeWindow;
	let bottomPadding = 0;

	const getTransitionName = ($isMinimizing, $isMaximizing) => {
		if ($isMinimizing && $isMinimizing === title) {
			return `view-transition-name: window-${order}; `;
		} else if ($isMinimizing === null && $isMaximizing === null) {
			return `view-transition-name: window-${order}; `;
		}
	};

	$: activeWindow = $windowStore.find((window) => window.name === title);
	$: transitionName = getTransitionName($isMinimizing, $isMaximizing);

	onMount(() => {
		// emit global event;
		const loadEvent = new CustomEvent("window-loaded", { detail: { id } });
		const unloadEvent = new CustomEvent("window-unloaded", { detail: { id } });
		document.dispatchEvent(loadEvent);

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
			document.dispatchEvent(unloadEvent);
		};
	});

	function startMaximizeWindow() {
		// We're doing this because I think the way the maximizing transition looks is kind of janky when using the morphing animation, so we're resetting to the default crossfade
		let transition;

		$isMaximizing = title;
		bottomPadding = document.getElementById("footer").clientHeight;

		if (document.startViewTransition) {
			transition = document.startViewTransition(() => maximizeWindow());
			transition.finished.then(() => {
				$isMaximizing = null;
			});
		} else {
			maximizeWindow();
			$isMaximizing = null;
		}
	}

	function maximizeWindow() {
		activeWindow.isMaximized = !activeWindow.isMaximized;
		$windowStore = $windowStore;
	}

	function startMinimizeWindow() {
		let transition;
		$isMinimizing = title;

		if (document.startViewTransition) {
			transition = document.startViewTransition(() => minimizeWindow());
			transition.finished.then(() => {
				$isMinimizing = null;
			});
		} else {
			minimizeWindow();
			$isMinimizing = null;
		}
	}

	function minimizeWindow() {
		activeWindow.isMinimized = true;
		$windowStore = $windowStore;

		const nextActiveWindow = $windowStore.find(
			(window) => window.order > activeWindow.order && !window.isMinimized,
		);
		if (nextActiveWindow && nextActiveWindow.id) {
			document
				.getElementById(nextActiveWindow.id)
				.focus({ preventScroll: true });
		} else {
			const toFocus = document.querySelector(`[aria-controls="${id}"]`);
			toFocus.focus({ preventScroll: true });
		}
	}
</script>

<section
	class="window__wrapper"
	class:window__wrapper--absolute={isAbsolute}
	class:window__wrapper--maximized={activeWindow
		? activeWindow.isMaximized
		: false}
	class:window__wrapper--minimized={activeWindow
		? activeWindow.isMinimized
		: false}
	class:window__wrapper--flex={flex}
	style={`${transitionName || ""}; ${style || ""}; --bottom-padding: ${bottomPadding}px`}
	bind:this={ref}
	tabindex="-1"
	{id}>
	<div class="window">
		<div class="window__header">
			<div class="window__title-wrapper">
				<svelte:element
					this={titleTag}
					class="window__title"
					id={`window-title-${id}`}>
					{title ? title : ""}
				</svelte:element>
			</div>
			<div class="window__controls">
				<button
					class="button--ui window__control window__control--minimize"
					on:click={startMinimizeWindow}>
					<span class="button--ui__content">
						<svg width="16" height="16">
							<use href="#icon-minimize"></use>
						</svg>
						<span class="visually-hidden">Minimize {title ? title : ""}</span>
					</span></button>
				<button
					class="button--ui window__control window__control--maximize"
					on:click={startMaximizeWindow}
					aria-pressed={activeWindow ? activeWindow.isMaximized : false}>
					<span class="button--ui__content">
						<svg width="16" height="16">
							<use href="#icon-maximize"></use>
						</svg>
						<span class="visually-hidden">Maximize {title ? title : ""}</span>
					</span>
				</button>
			</div>
		</div>
		<div
			class="window__body"
			tabindex={scrollBody === false ? null : "0"}
			role="region"
			aria-labelledby={`window-title-${id}`}
			id={`window-body-${id}`}>
			<slot />
		</div>
	</div>
</section>

<style lang="scss">
	@import "../styles/_mixins.scss";

	.window__wrapper {
		--offset: calc(var(--border-thickness) * -1);
		--window-spacing: var(--window-margin-block-start);
		display: flex;
		max-width: var(--max-width);
		max-width: round(var(--max-width), 1px);
		font-size: 1.5rem;
		transform: translate3d(0, 0, 0), scale(1.0000001);
		-webkit-backface-visibility: hidden;
		transform-style: preserve-3d;
		will-change: transform;
		container: window;

		&--flex {
			--max-width: 100%;
			--width: 100%;

			.window {
				flex: 1;
			}
		}

		&:focus,
		&:focus-within {
			z-index: 2;
		}

		@include focus();
	}

	.window__wrapper--absolute {
		max-height: none;
	}

	:global(astro-island)
		+ :global(astro-island)
		.window__wrapper:not(.window__wrapper--maximized):not(
			.window__wrapper--maximized
		),
	:global(.layout__cell)
		+ :global(.layout__cell)
		.window__wrapper:not(.window__wrapper--maximized):not(
			.window__wrapper--maximized
		) {
		margin-block-start: var(--window-spacing);
	}

	.window {
		--border-color: var(--color-black);
		display: flex;
		flex-direction: column;
		padding: var(--border-thickness);
		background-color: var(--color-window-bg);
		color: var(--color-window-text);
		min-width: 0;
		width: var(--width);
		@include pixel-borders();
	}

	.window__header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: var(--border-thickness) calc(var(--border-thickness) * 2);
		justify-content: space-between;
		background: var(--color-window-header-bg);
		color: var(--color-window-header-text);
	}

	.window__controls {
		display: flex;
		flex-shrink: 0;
	}

	.window__control {
		margin-inline-start: calc(var(--border-thickness) * -1);
	}

	.window__title-wrapper {
		flex-shrink: 1;
		min-width: 0;
	}

	.window__title {
		font-family: var(--font-base);
		font-size: 1.375rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.window__body {
		height: 100%;
		max-height: 100%;
		padding: var(--text-padding);
		overflow-y: auto;
		animation: none;

		& > * + :where(astro-island, astro-slot) > *:first-child {
			margin-block-start: 0.5rem;
		}

		& :global(*) {
			scroll-margin-block: var(--space-xs);
		}
	}

	@media screen and (-ms-high-contrast: active) {
		.window__control :global(svg) {
			fill: ButtonText;
		}
	}

	@media (min-width: 62em) and (min-height: 34em) {
		.window__wrapper {
			--window-spacing: 0;
			max-height: 100%;
			max-width: var(--large-max-width, var(--max-width));
			width: var(--width, fit-content);
			height: fit-content;
			margin-left: auto;
			margin-right: auto;
		}

		.window__wrapper--absolute {
			position: absolute;
			max-height: var(--max-height, calc(100% - var(--page-block-padding) * 2));
			margin: 0;
			inset-inline-start: var(--inline-start, auto);
			inset-inline-end: var(--inline-end, auto);
			inset-block-start: calc(
				var(--block-start, auto) + var(--page-block-padding) +
					var(--title-font-size)
			);
			inset-block-end: var(--block-end, auto);
		}
	}

	.window__wrapper--maximized {
		position: absolute;
		max-height: 100%;
		margin: 0;
		inset: 0;
		width: 100%;
		max-width: none;
		height: calc(100% - var(--bottom-padding));
		inset-block-end: var(--bottom-padding);
		padding-block-end: 0;
		z-index: 10;

		.window {
			width: 100%;
		}

		@media (min-width: 40em) {
			inset-block-end: 0;
			height: 100%;
		}
	}

	.window__wrapper--minimized {
		position: absolute;
		margin: 0;
		inset: auto auto 0 0;
		width: 0;
		height: 0;
		inset-block-start: auto;
		visibility: hidden;
		overflow: hidden;
	}

	@media (min-width: 90em) {
		.window__body {
			font-size: 1.5rem;
		}
	}
</style>
