import { writable, derived } from "svelte/store";

export const windowStore = writable([]);

export const orderedWindows = derived(windowStore, ($windowStore) => {
	return $windowStore.sort((a, b) => a.order - b.order);
});

export const isMaximizing = writable(null);

export const isMinimizing = writable(null);

export const highestIndex = derived(windowStore, ($windowStore) => {
	if (!$windowStore) return;
	return $windowStore?.reduce(
		(max, current) => {
			return max.zIndex > current.zIndex ? max : current;
		},
		{ zIndex: 0 }
	).zIndex;
});

export const hasMaximizedWindow = derived(windowStore, ($windowStore) => {
	if (!$windowStore) return false;
	return $windowStore?.find(window => {
		return window.isMaximized && !window.isMinimized;
	});
});
