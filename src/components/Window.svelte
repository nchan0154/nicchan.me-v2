<script>
	import { draggable } from "@neodrag/svelte";
	import { onMount } from "svelte";
	import {
		windowStore,
		isMaximizing,
		isMinimizing,
		highestIndex,
		hasMaximizedWindow,
	} from "../scripts/windows.js";

	export let title = "",
		style = "",
		order,
		ref = null,
		flex = false,
		titleTag = "h2",
		initiallyMaximized = false,
		initiallyMinimized = false;

	export let id = title.replaceAll(" ", "-").toLowerCase() || "window";
	let activeWindow, windowBody, observer;
	let tabindex = false;
	let offsetX = 0;
	let offsetY = 0;
	let zIndex = order;

	const getTransitionName = ($isMinimizing, $isMaximizing) => {
		if ($isMinimizing && $isMinimizing === title) {
			return `view-transition-name: window-${order}; `;
		} else if ($isMinimizing === null && $isMaximizing === null) {
			return `view-transition-name: window-${order}; `;
		}
	};

	$: activeWindow = $windowStore.find((window) => window.name === title);
	$: transitionName = getTransitionName($isMinimizing, $isMaximizing);
	$: inert =
		title === "Table of Contents"
			? activeWindow?.isMinimized
			: $hasMaximizedWindow && $hasMaximizedWindow.name !== title;

	onMount(() => {
		const loadEvent = new CustomEvent("window-loaded", { detail: { id } });
		const unloadEvent = new CustomEvent("window-unloaded", { detail: { id } });
		document.dispatchEvent(loadEvent);

		$windowStore = [
			...$windowStore,
			{
				name: title,
				id,
				order,
				zIndex,
				isMinimized: initiallyMinimized || false,
				isMaximized: initiallyMaximized || false,
			},
		];
		addResizeObserver();

		return () => {
			observer.disconnect();
			$windowStore = $windowStore.filter((window) => window.name !== title);
			document.dispatchEvent(unloadEvent);
		};
	});

	function addResizeObserver() {
		observer = new ResizeObserver((entries) => {
			if (windowBody.scrollHeight > windowBody.clientHeight) {
				tabindex = "0";
			} else {
				tabindex = false;
			}
		});
		observer.observe(windowBody);
	}
	function startMaximizeWindow() {
		// We're doing this because I think the way the maximizing transition looks is kind of janky when using the morphing animation, so we're resetting to the default crossfade
		let transition;

		$isMaximizing = title;

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

	function onDragEnd(event) {
		offsetX = event.detail.offsetX;
		offsetY = event.detail.offsetY;
	}

	function onFocus(event) {
		activeWindow.zIndex = $highestIndex + 1;
		$windowStore = $windowStore;
	}
</script>

<section
	use:draggable={{ handle: ".window__drag-handle" }}
	on:neodrag:end={onDragEnd}
	class={`window__wrapper ${initiallyMaximized && "window__wrapper--maximized"} ${initiallyMinimized && "window__wrapper--minimized"}`}
	class:window__wrapper--maximized={activeWindow
		? activeWindow.isMaximized
		: false}
	class:window__wrapper--minimized={activeWindow
		? activeWindow.isMinimized
		: false}
	class:window__wrapper--flex={flex}
	style={`${transitionName || ""}; ${style || ""}; translate: ${offsetX}px ${offsetY}px; z-index: ${activeWindow ? activeWindow.zIndex : order}`}
	bind:this={ref}
	{inert}
	tabindex="-1"
	on:focus={onFocus}
	{id}>
	<div class="window">
		<div class="window__header">
			<div class="window__drag-handle"></div>
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
			role="region"
			aria-labelledby={`window-title-${id}`}
			id={`window-body-${id}`}
			bind:this={windowBody}
			tabindex={tabindex !== false && tabindex}>
			<slot />
		</div>
	</div>
</section>

<style lang="scss">
	@import "../styles/_mixins.scss";

	.window__wrapper {
		--offset: calc(var(--border-thickness) * -1);
		display: flex;
		inline-size: var(--width, fit-content);
		max-inline-size: var(--max-width);
		max-inline-size: round(var(--max-width), 1px);
		font-size: 1.25rem;
		transform: translate3d(0, 0, 0), scale(1.0000001);
		-webkit-backface-visibility: hidden;
		transform-style: preserve-3d;
		will-change: transform;
		container: window;
		touch-action: auto !important; //We don't need to disable touch actions on small scren

		&--flex {
			--max-width: 100%;
			--width: 100%;

			.window {
				flex: 1;
			}
		}

		@include focus("focus-visible");
	}

	:global(.no-js) .window__wrapper {
		&:focus,
		&:focus-within {
			z-index: 100 !important;
		}
	}

	.window__wrapper--absolute {
		max-block-size: none;
	}

	.window {
		--border-color: var(--color-black);
		display: flex;
		flex-direction: column;
		padding: var(--border-thickness);
		background-color: var(--color-window-bg);
		color: var(--color-window-text);
		min-inline-size: 0;
		inline-size: var(--width);
		@include pixel-borders();
	}

	.window__header {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: var(--border-thickness) calc(var(--border-thickness) * 2);
		justify-content: space-between;
		background: var(--color-window-header-bg);
		color: var(--color-window-header-text);
		pointer-events: none;
	}

	.window__controls {
		position: relative;
		display: flex;
		flex-shrink: 0;
		z-index: 2;
		pointer-events: auto;
	}

	.window__control {
		margin-inline-start: calc(var(--border-thickness) * -1);
	}

	.window__title-wrapper {
		flex-shrink: 1;
		min-inline-size: 0;
	}

	.window__title {
		font-family: var(--font-base);
		font-size: 1.375rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--color-window-header-text);
		overflow: hidden;
	}

	.window__drag-handle {
		display: none;
	}

	.window__body {
		block-size: 100%;
		max-block-size: 100%;
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

	@media (max-width: 61.99em) {
		.window__wrapper {
			translate: 0 !important;
		}
	}

	@media (min-width: 38em) {
		.window__wrapper {
			font-size: 1.5rem;
		}
	}

	@media (min-width: 62em) {
		.window__wrapper {
			position: absolute;
			max-block-size: 100%;
			inline-size: 100%;
			max-inline-size: var(--large-max-width, var(--max-width));
			inset-inline-start: var(--inline-start, auto);
			inset-inline-end: var(--inline-end, auto);
			inset-block-start: calc(
				var(--block-start, auto) + var(--page-block-padding) +
					var(--title-font-size)
			);
			inset-block-end: var(--block-end, auto);
			touch-action: none !important; // Reset to allow dragging
		}

		.window__header {
			pointer-events: auto;
		}

		.window__drag-handle {
			position: absolute;
			inset: 0;
			display: block;
			z-index: 1;
		}
	}

	.window__wrapper--maximized {
		position: fixed;
		max-block-size: 100%;
		margin: 0;
		inset: 0;
		inline-size: 100%;
		max-inline-size: none;
		padding-block-end: 0;
		/* We have to override some inline styles here */
		z-index: 200 !important;
		translate: 0 !important;

		.window {
			inline-size: 100%;
		}

		.window__drag-handle {
			display: none;
		}
	}

	@media (min-height: 36em) {
		.window__wrapper--maximized {
			inset-block-end: var(--footer-height);
		}
	}
	#table-of-contents {
		z-index: 250 !important;
	}

	.window__wrapper--minimized {
		position: fixed;
		margin: 0;
		inset: auto auto 0 0;
		inline-size: 0;
		block-size: 0;
		inset-block-start: auto;
		visibility: hidden;
		overflow: hidden;
	}

	@media (min-width: 90em) {
		.window__body {
			font-size: 1.5rem;
		}
	}

	@media (pointer: coarse) {
		.window__drag-handle {
			display: none;
		}
	}
</style>
