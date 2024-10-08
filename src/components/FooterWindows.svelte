<script>
	import {
		windowStore,
		orderedWindows,
		isMinimizing,
	} from "../scripts/windows.js";
	import { onMount } from "svelte";
	import { announce } from "../scripts/announce.js";
	import { throttle } from "../scripts/throttle.js";

	let parent, backwards, forwards, scrollTimeout, observer;

	onMount(
		() => {
			addResizeObserver();
			parent.addEventListener("scroll", throttle(checkButtonAvailability, 300));
		},
		() => observer.disconnect(),
	);

	function addResizeObserver() {
		observer = new ResizeObserver((entries) => {
			checkButtonAvailability();
		});
		observer.observe(document.documentElement);
	}

	function checkButtonAvailability() {
		if (!parent) return;
		if (parent.clientWidth === parent.scrollWidth) {
			backwards.classList.add("windows__button--hidden");
			forwards.classList.add("windows__button--hidden");
		} else {
			backwards.classList.remove("windows__button--hidden");
			forwards.classList.remove("windows__button--hidden");
		}
		disableButtons();
	}

	function onWindowClick(window) {
		let transition;
		$isMinimizing = window.name;

		if (document.startViewTransition) {
			transition = document.startViewTransition(() =>
				toggleWindow(window, window.isMinimized),
			);
			transition.finished.then(() => {
				$isMinimizing = null;
			});
		} else {
			toggleWindow(window, window.isMinimized);
			$isMinimizing = null;
		}
	}

	function toggleWindow(customWindow, isMinimized) {
		windowStore.update((w) => {
			const index = w.findIndex((w) => w.name === customWindow.name);
			w[index] = {
				...customWindow,
				isMinimized: !isMinimized,
			};
			if (isMinimized) {
				setTimeout(() => {
					document.getElementById(customWindow.id).scrollIntoView(true);
					document
						.getElementById(customWindow.id)
						.focus({ preventScroll: true });
				}, 50);
			}
			return w;
		});
	}

	function onFocus(event) {
		event.target.scrollIntoView({
			block: "nearest",
			inline: "nearest",
		});
	}

	function onScrollForwards() {
		const buttons = parent.querySelectorAll("[data-window-item]");
		backwards.removeAttribute("aria-disabled");
		const nextButton = [...buttons].find((button) => {
			if (parent.scrollLeft + parent.clientWidth > button.offsetLeft)
				return false;
			let buttonIsVisible = isVisible(button, parent);
			if (buttonIsVisible === false) return true;
		});
		if (nextButton) {
			const left = nextButton.offsetLeft - parent.offsetLeft;
			parent.scrollTo({
				left,
				behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
					? "auto"
					: "smooth",
			});
			parent.addEventListener("scroll", setScrollTimer);
		}
		announce("Scrolled forwards.");
	}

	function setScrollTimer() {
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(function () {
			disableButtons();
			parent.removeEventListener("scroll", setScrollTimer);
		}, 100);
	}

	function disableButtons() {
		// numbers aren't precise as there are some minor rounding issues with scrollIntoView
		if (parent.scrollLeft + parent.clientWidth + 1 > parent.scrollWidth) {
			forwards.setAttribute("aria-disabled", true);
		} else {
			forwards.removeAttribute("aria-disabled");
		}
		if (parent.scrollLeft < 1) {
			backwards.setAttribute("aria-disabled", true);
		} else {
			backwards.removeAttribute("aria-disabled");
		}
	}

	function onScrollBackwards() {
		forwards.removeAttribute("aria-disabled");
		parent.scrollTo({
			left: Math.max(parent.scrollLeft - parent.clientWidth, 0),
			top: 0,
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
				? "auto"
				: "smooth",
		});
		parent.addEventListener("scroll", setScrollTimer);
		announce("Scrolled backwards.");
	}

	function isVisible(element, container) {
		const elRect = element.getBoundingClientRect();
		const conRect = container.getBoundingClientRect();

		let result = false;
		if (
			Math.round(elRect.x) >= Math.round(conRect.x) &&
			elRect.x + elRect.width <= conRect.x + conRect.width
		) {
			result = true;
		}
		return result;
	}
</script>

<ul class="windows__list" aria-label="Windows list" bind:this={parent}>
	{#each $orderedWindows as window}
		<li class="windows__item" data-window-item>
			<button
				class="windows__button button--ui"
				aria-expanded={window.isMinimized ? false : true}
				aria-controls={window.id}
				on:focus={onFocus}
				on:click={() => onWindowClick(window)}>
				<span class="button--ui__content"> {window.name}</span>
			</button>
		</li>
	{/each}
</ul>
<button
	class="windows__button button--ui windows__button--hidden windows__button--arrow"
	on:click={onScrollBackwards}
	bind:this={backwards}>
	<span class="button--ui__content">
		<svg class="windows__button-icon">
			<use href={`#icon-arrow`} />
		</svg>
		<span class="visually-hidden">Scroll windows list backwards</span>
	</span>
</button>
<button
	class="windows__button button--ui windows__button--hidden windows__button--arrow"
	on:click={onScrollForwards}
	bind:this={forwards}>
	<span class="button--ui__content">
		<svg class="windows__button-icon windows__button-icon--reverse">
			<use href={`#icon-arrow`} />
		</svg>
		<span class="visually-hidden">Scroll windows list forwards</span>
	</span>
</button>

<style lang="scss">
	.windows__list {
		display: flex;
		inline-size: 100%;
		margin: 0;
		margin-inline-end: -1px;
		padding: var(--border-thickness) 1px var(--border-thickness) 0;
		overflow-x: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
		scroll-snap-type: x mandatory;

		&::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}
	}

	.windows__item {
		display: inline-block;
		scroll-snap-align: start;

		& + & {
			margin-inline-start: calc(var(--border-thickness) * -1);
		}
	}

	.windows__button {
		transition: all 0.3s ease;

		& + & {
			margin-inline-start: calc(var(--border-thickness) * -1);
		}

		&--hidden {
			visibility: hidden;
			opacity: 0;
		}

		&--arrow {
			aspect-ratio: 1 / 1;

			.button--ui__content {
				width: 2.375rem;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	:global(.windows__button--hidden) {
		opacity: 0;
	}

	.windows__button-icon {
		display: block;
		inline-size: 0.75rem;
		block-size: 0.75rem;
		// visual balance
		margin-block-start: -0.125rem;

		&--reverse {
			transform: rotate(180deg);
			margin-inline-start: 0.0625rem;
		}
	}
</style>
