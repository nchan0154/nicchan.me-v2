<script>
	import Setting from "./Setting.svelte";
	import SettingMotion from "./SettingMotion.svelte";
	let isOpen = false;

	function toggleDisclosure() {
		isOpen = !isOpen;
	}
</script>

<div class="disclosure">
	<button
		class="disclosure__button button--ui"
		on:click={toggleDisclosure}
		aria-expanded={isOpen}>
		<span class="button--ui__content" aria-label="Settings">
			<svg class="button__icon" xmlns="http://www.w3.org/2000/svg">
				<use href={`#icon-settings`} />
			</svg>
			<span class="button__label">Settings</span>
		</span>
	</button>
	<div class="disclosure__container">
		<Setting
			namespace="font"
			label="Font family"
			values={["Pixel", "Antialiased"]}
			defaultValue="Pixel" />
		<div class="color-scheme">
			<Setting
				namespace="scheme"
				label="Color scheme"
				values={["System preference", "Light", "Dark"]}
				defaultValue={"System preference"} />
		</div>
		<div>
			<Setting
				namespace="motion"
				label="Animation"
				values={["System preference", "Enabled", "Disabled"]}
				defaultValue={"System preference"} />
		</div>
		<a href="/accessibility-statement">Accessibility Statement</a>
	</div>
</div>

<style lang="scss">
	@import "../styles/_mixins.scss";
	.disclosure {
		position: relative;
	}
	.disclosure__button {
		margin-inline-start: calc(var(--border-thickness) * -1);

		&[aria-expanded="true"] {
			& + .disclosure__container {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	.button--ui__content {
		display: flex;
		gap: 0.25rem;
		align-items: center;
		padding-inline: calc(var(--border-thickness) * 1.75);
	}

	.button__icon {
		inline-size: 1rem;
		block-size: 1rem;
		//hack: magic number
		margin-block-start: -0.15rem;
	}

	.button__label {
		display: none;
	}

	.disclosure__container {
		--divider-thickness: 0.125rem;
		--border-color: var(--color-violet-lighter);
		position: absolute;
		inline-size: 15rem;
		inset-block-end: calc(2rem + var(--border-thickness));
		inset-inline-end: 0;
		padding: var(--border-thickness);
		padding-inline-start: calc(var(--border-thickness) + 1.5rem);
		padding-inline-end: calc(var(--border-thickness) * 3);
		line-height: 1.4;
		opacity: 0;
		visibility: hidden;
		color: var(--color-button-ui-text);
		background-color: var(--color-settings-bg);
		transition: all 0.3s ease;
		@include pixel-borders();

		&::before {
			content: "";
			position: absolute;
			inset: var(--border-thickness);
			inset-inline-end: auto;
			inline-size: 1rem;
			block-size: auto;
			background-color: var(--color-magenta);
		}
	}

	:global(.disclosure__container > *) {
		padding: 0 0 calc(var(--border-thickness) * 2);
	}

	:global(.disclosure__container > * + *) {
		position: relative;
		border-top: var(--divider-thickness) solid var(--color-button-ui-shadow);
		padding: calc(var(--border-thickness) * 2 + var(--divider-thickness)) 0
			calc(var(--border-thickness) * 2);

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			bottom: auto;
			height: var(--divider-thickness);
			background-color: var(--color-button-ui-highlight);
		}
	}

	.color-scheme {
		display: none;
	}

	@media (min-width: 38em) {
		.button__label {
			display: block;
		}
	}

	@supports (color-scheme: light dark) {
		.color-scheme {
			display: block;
		}
	}
</style>
