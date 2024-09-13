<script>
	import { onMount } from "svelte";
	export let namespace = "disable-motion";

	const preferenceNamespace = `preference-${namespace}`;
	let disableAnimations = false;

	onMount(() => {
		const localStorageValue = localStorage.getItem(preferenceNamespace);
		if (localStorageValue) {
			disableAnimations = !!localStorageValue;
		} else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			disableAnimations = true;
		}
		setValue(disableAnimations, namespace);
	});

	function setValue(value, namespace) {
		if (value) {
			localStorage.setItem(preferenceNamespace, value);
			document.documentElement.setAttribute(`data-user-${namespace}`, value);
		} else {
			localStorage.removeItem(preferenceNamespace, value);
			document.documentElement.removeAttribute(`data-user-${namespace}`);
		}
	}
</script>

<div>
	<div class="rc-wrapper">
		<input
			name={namespace}
			class="rc__input"
			type="checkbox"
			bind:checked={disableAnimations}
			id={`${namespace}}`}
			on:change={() => setValue(disableAnimations, namespace)} />
		<label class="rc__label" for={`${namespace}`}>Disable animations</label>
	</div>
</div>
