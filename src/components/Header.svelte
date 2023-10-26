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
	.nav__list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav__link {
		position: relative;
		display: block;
		padding: 0.5rem;
		text-decoration: none;
		text-align: center;
		@include focus(0);
	}

	.nav__icon {
		display: block;
		margin: 0 auto;
	}

	div.nav__icon {
		width: 3rem;
		height: 3rem;
	}

	/*
	.nav__item + .nav__item {
		margin-top: 0.25rem;
	} */

	.nav__link-text {
		display: inline-block;
		margin-top: 0.5rem;
		padding: 0.125rem 0.25rem 0;
		font-size: 1rem;
		background-color: var(--color-nav-link-bg);
		color: var(--color-nav-link-text);
	}
</style>
