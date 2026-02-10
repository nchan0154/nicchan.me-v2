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
				src={`https://res.cloudinary.com/nicchan/image/upload/f_auto/${client.toLowerCase().replace(" ", "-")}.png`}
				width="130"
				height="50"
				loading="lazy"
				alt={client} />
		</li>
	{/each}
</ul>

<style lang="scss">
	.clients {
		display: grid;
		max-inline-size: 100%;
		grid-template-columns: repeat(auto-fit, 8.3125rem);
		gap: var(--border-thickness);
		margin-block-end: 0;
		padding: 0;
		list-style: none;
	}

	.clients__logo {
		--border-color: var(--color-black);
		display: block;
		inline-size: 8.3125rem;
		@include pixel-borders();
		border-radius: 0;
	}
</style>
