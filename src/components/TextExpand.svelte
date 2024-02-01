<script>
	export let text;

	let isExpanded = false;
	let excerpt;
	if (text.length > 300) {
		const split = text.split(".");
		excerpt = (split[0] + ". " + split[1]).replaceAll(/<[^>]*>/g, "");
	}

	function expandText(event) {
		isExpanded = true;
		const child = event.srcElement;
		const parent = child.closest("[data-text-expand]");
		setTimeout(() => {
			parent.focus({ preventScroll: true });
		}, 0);
	}
</script>

{#if text.length > 300}
	<div class="text-expand">
		{#if !isExpanded}
			<p>
				{excerpt}...
				<button class="text-expand__button text--base" on:click={expandText}>
					Read More
				</button>
			</p>
		{:else}
			<p>{@html text}</p>
		{/if}
	</div>
{:else}
	<p>{@html text}</p>
{/if}

<style lang="scss">
	@import "../styles/_mixins.scss";
	.text-expand__button {
		padding: 0;
		border: none;
		color: currentColor;
		background-color: transparent;
		text-decoration: underline;
		text-decoration-color: var(--color-link-underline);

		@include focus();
	}
</style>
