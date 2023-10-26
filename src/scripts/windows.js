import { writable, derived } from "svelte/store";

export const windowStore = writable([]);

export const orderedWindows = derived(windowStore, ($windowStore) => {
	return $windowStore.sort((a, b) => a.order - b.order);
});

export const isMaximizing = writable(false);
