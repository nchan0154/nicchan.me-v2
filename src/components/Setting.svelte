<script>
	import { onMount } from "svelte";
	export let label, namespace, values, defaultValue;

	const preferenceNamespace = `preference-${namespace}`;
	let currentValue = defaultValue;

	onMount(() => {
		const localStorageValue = localStorage.getItem(preferenceNamespace);
		if (localStorageValue && values.includes(localStorageValue)) {
			currentValue = localStorageValue;
			setValue(currentValue, namespace);
		}
	});

	function setValue(value, namespace) {
		if (value === "System preference") {
			localStorage.removeItem(preferenceNamespace);
			document.documentElement.removeAttribute(`data-user-${namespace}`);
		} else {
			localStorage.setItem(preferenceNamespace, value);
			document.documentElement.setAttribute(
				`data-user-${namespace}`,
				value.toLowerCase(),
			);
		}
	}
</script>

<div>
	<fieldset>
		<legend>{label}</legend>
		{#each values as value}
			<div class="rc-wrapper">
				<input
					name={namespace}
					class="rc__input"
					type="radio"
					checked={currentValue === value}
					id={`${namespace}-${value.replaceAll(" ", "-").toLowerCase()}`}
					on:change={() => setValue(value, namespace)} />
				<label
					class="rc__label"
					for={`${namespace}-${value.replaceAll(" ", "-").toLowerCase()}`}
					>{value}</label>
			</div>
		{/each}
	</fieldset>
</div>
