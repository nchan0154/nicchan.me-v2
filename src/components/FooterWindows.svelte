<script>
	import { windowStore, orderedWindows } from "../scripts/windows.js";

	function onWindowClick(window) {
		const transition = document.startViewTransition(() =>
			toggleWindow(window, window.isMinimized),
		);
	}

	function toggleWindow(customWindow, isMinimized) {
		windowStore.update((w) => {
			const index = w.findIndex((w) => w.name === customWindow.name);
			w[index] = {
				...customWindow,
				isMinimized: !isMinimized,
			};
			if (isMinimized) {
				if (
					!window.matchMedia("(min-width: 62em) and (min-height: 34em)").matches
				)
					setTimeout(() => {
						document.getElementById(customWindow.id).scrollIntoView();
					}, 50);
			}
			return w;
		});
	}
</script>

<ul class="windows__list" aria-label="Windows list">
	{#each $orderedWindows as window}
		<li class="windows__item">
			<button
				class="windows__button button--ui"
				aria-expanded={window.isMinimized ? false : true}
				aria-controls={window.id}
				on:click={() => onWindowClick(window)}>
				<span class="button--ui__content"> {window.name}</span>
			</button>
		</li>
	{/each}
</ul>

<style lang="scss">
	.windows__list {
		margin: 0;
		padding: 0;
	}

	.windows__item {
		display: inline-block;

		& + & {
			margin-inline-start: calc(var(--border-thickness) * -1);
		}
	}

	.windows__button {
		--offset: 0;
	}
</style>
