<script>
	export let clients = [
		"Boston Scientific",
		"Catchpoint",
		"Hinge",
		"Mplus",
		"Set Studio",
		"Smashing Magazine",
		"Swire Pacific",
		"Switch",
	];
</script>

<ul class="clients">
	{#each clients as client}
		<li>
			<img
				class="clients__logo"
				src={`/pixels/${client.replace(" ", "-").toLowerCase()}.png`}
				width="130"
				height="50"
				alt={client}
			/>
		</li>
	{/each}
</ul>

<style lang="scss">
	.clients {
		display: grid;
		max-inline-size: fit-content;
		grid-template-columns: 1fr 1fr 1fr;
		gap: var(--border-thickness);
		margin-block-end: 0;
		padding: 0;
		list-style: none;
	}

	.clients__logo {
		display: block;
		inline-size: 8.3125rem;
		image-rendering: auto;
		@include pixel-borders(#000);
		border-radius: 0;
	}
</style>
