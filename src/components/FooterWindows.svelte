<script>
	import { windowStore, orderedWindows } from "../scripts/windows.js";

	function onWindowClick(window) {
		const transition = document.startViewTransition(() =>
			toggleWindow(window, window.isMinimized)
		);
	}

	function toggleWindow(window, isMinimized) {
		windowStore.update((w) => {
			const index = w.findIndex((w) => w.name === window.name);
			w[index] = {
				...window,
				isMinimized: !isMinimized,
			};
			return w;
		});
	}
</script>

<ul class="windows__list" aria-label="Windows list">
	{#each $orderedWindows as window}
		<li class="windows__item">
			<button
				class="button--ui"
				aria-expanded={window.isMinimized ? false : true}
				aria-controls={window.id}
				on:click={() => onWindowClick(window)}
			>
				{window.name}
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
</style>
