<script>
	const links = [
		{
			text: "Home",
			link: "/",
			icon: "/home.png",
		},
		// note to self remember to redirect projects page
		{
			text: "Work",
			link: "/work/",
			icon: "",
		},
		{
			text: "Services",
			link: "/services/",
			icon: "",
		},
		{
			text: "Art",
			link: "/art/",
			icon: "",
		},
		{
			text: "About",
			link: "/about/",
			icon: "",
		},
		{
			text: "Blog",
			link: "/blog/",
			icon: "",
		},
	];
</script>

<header class="layout__header">
	<div class="skip-link-wrapper">
		<a class="skip-link" href="#main">Skip to main content</a>
	</div>
	<nav class="nav" aria-label="Main">
		<ul class="nav__list">
			{#each links as link}
				<li class="nav__item">
					<a class="nav__link" href={link.link}>
						{#if link.icon}
							<img class="nav__icon" src={`/pixels/${link.icon}`} alt="" />
						{:else}
							<div class="nav__icon" />
						{/if}
						<span class="nav__link-text">{link.text}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	.skip-link-wrapper {
		position: fixed;
		inset-block-start: 0;
		inset-inline-start: 0;
		z-index: 1;
	}

	.skip-link {
		--border-color: var(--color-violet-lighter);
		inline-size: fit-content;
		background-color: var(--color-button-ui-bg);
		padding: calc(var(--border-thickness) * 2);
		padding-inline-end: calc(var(--border-thickness) * 2 + 2px);
		color: var(--color-button-ui-text);
		font-size: 1rem;
		line-height: 1;
		text-decoration: none;
		@include pixel-borders();
		@include focus();
		opacity: 0;

		&:focus {
			opacity: 1;
		}
	}

	.nav__list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav__link {
		position: relative;
		display: block;
		padding: 0;
		text-decoration: none;
		text-align: center;
		@include focus();
	}

	.nav__icon {
		display: block;
		inline-size: 2rem;
		margin: 0 auto;
	}

	div.nav__icon {
		inline-size: 3rem;
		block-size: 3rem;
	}

	.nav__link-text {
		display: inline-block;
		margin-block-start: 0.5rem;
		padding: 0 0.25rem 0;
		font-size: 1rem;
		background-color: var(--color-nav-link-bg);
		color: var(--color-nav-link-text);
	}

	@media (min-height: 42em) {
		.nav__item + .nav__item {
			margin-block-start: 0.25rem;
		}

		.nav__icon {
			inline-size: 3rem;
			height: 3rem;
		}
	}
</style>
