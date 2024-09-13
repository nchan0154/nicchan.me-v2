<script>
	const links = [
		{
			text: "Home",
			link: "/",
			icon: "home",
		},
		// note to self remember to redirect projects page
		{
			text: "Work",
			link: "/work/",
			icon: "work",
		},
		{
			text: "Blog",
			link: "/blog/",
			icon: "blog",
		},
		{
			text: "Services",
			link: "/services/",
			icon: "services",
		},
		{
			text: "Art",
			link: "/art/",
			icon: "art",
		},
		{
			text: "About",
			link: "/about/",
			icon: "about",
		},
		{
			text: "Contact",
			link: "/contact/",
			icon: "contact",
		},
	];
</script>

<header class="layout__header">
	<div class="skip-link-wrapper">
		<a class="button--ui visually-hidden" href="#main">
			<span class="button--ui__content">Skip to main content</span>
		</a>
	</div>
	<nav class="nav" aria-label="Main">
		<ul class="nav__list">
			{#each links as link}
				<li class="nav__item">
					<a class="nav__link" href={link.link}>
						{#if link.icon}
							<svg class="nav__icon">
								<use href={`#icon-${link.icon}`} />
							</svg>
						{:else}
							<div class="nav__icon" />
						{/if}
						<span class="nav__link-text">{link.text}</span>
					</a>
				</li>
			{/each}
		</ul>
		<span class="tinylytics-hits">
			<span class="tinylytics_hits"></span> hits
		</span>
	</nav>
</header>

<style lang="scss">
	@import "../styles/_mixins.scss";

	.skip-link-wrapper {
		position: fixed;
		inset-block-start: 0;
		inset-inline-start: 0;
		z-index: 100;
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

	.nav__item + .nav__item {
		margin-block-start: 0.5rem;
	}

	.nav__icon {
		display: block;
		inline-size: 2rem;
		block-size: 2rem;
		margin: 0 auto;
	}

	.nav__link-text {
		display: inline-block;
		margin-block-start: 0.25rem;
		padding: 0 0.25rem 0;
		font-size: 1rem;
		line-height: 1.3;
		background-color: var(--color-nav-link-bg);
		color: var(--color-nav-link-text);
	}

	.tinylytics-hits {
		display: inline-block;
		--border-color: currentColor;
		padding: var(--border-thickness);
		inline-size: fit-content;
		margin-block-start: 0.5rem;
		position: relative;
		z-index: 1;
		line-height: 1;
		background-color: var(--color-lavender);
		color: var(--color-violet-darker);
		@include pixel-borders();

		&:has(.tinylytics_hits:empty) {
			visibility: hidden;
		}
	}

	@media (min-height: 38em) {
		.nav__item + .nav__item {
			margin-block-start: 1rem;
		}
	}

	@media (min-height: 45em) {
		.nav__icon {
			inline-size: 3rem;
			block-size: 3rem;
		}
	}
</style>
