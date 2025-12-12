<script>
	import { onMount } from "svelte";
	import Setting from "./Setting.svelte";
	let isOpen = false;
	let ref, disclosure, button;

	onMount(() => {
		const listener = document.addEventListener("click", (event) => {
			if (ref?.contains(event.target)) return;
			if (!isOpen) return;
			isOpen = false;
		});
		return document.removeEventListener("click", listener);
	});

	function toggleDisclosure() {
		isOpen = !isOpen;
	}

	function onFocusOut(event) {
		if (!event.relatedTarget) return;
		if (event.relatedTarget.tagName === "MAIN") return;
		if (disclosure.contains(event.relatedTarget)) return;
		isOpen = false;
	}

	function onLinkKeyDown(event) {
		if (event.code === "Tab") {
			isOpen = false;
		}
	}

	function onKeyDown(event) {
		if (event.code === "Escape") {
			isOpen = false;
			button.focus();
		}
	}
</script>

<div class="disclosure" bind:this={ref}>
	<button
		class="disclosure__button button--ui"
		on:click={toggleDisclosure}
		on:focusout={onFocusOut}
		aria-expanded={isOpen}
		aria-label="Settings"
		bind:this={button}>
		<span class="button--ui__content">
			<svg class="button__icon" xmlns="http://www.w3.org/2000/svg">
				<use href={`#icon-settings`} />
			</svg>
			<span class="button__label">Settings</span>
		</span>
	</button>
	<div
		class="disclosure__container"
		bind:this={disclosure}
		on:keydown={onKeyDown}>
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
		<div>
			<a
				class="disclosure__link"
				href="/accessibility-statement"
				on:keydown={onLinkKeyDown}>
				Accessibility Statement
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	@use "@styles/mixins" as *;

	.disclosure {
		position: relative;
	}

	.disclosure__button {
		aspect-ratio: 1 / 1;
		margin-inline-start: calc(var(--border-thickness) * -1);

		&[aria-expanded="true"] {
			& + .disclosure__container {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	.button--ui__content {
		flex: 1 1 100%;
		display: flex;
		gap: 0.25rem;
		justify-content: center;
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

	.disclosure__link {
		display: block;
		color: currentColor;
		@include focus();
	}

	@media (min-width: 38em) {
		.disclosure__button {
			aspect-ratio: initial;
		}
		.button__label {
			display: block;
		}
	}

	@supports (color: light-dark(white, black)) {
		.color-scheme {
			display: block;
		}
	}
</style>
