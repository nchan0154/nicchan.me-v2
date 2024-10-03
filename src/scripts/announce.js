export function announce(text, el) {
	if (!window.LRTimer) {
		window.LRTimer = {};
	}

	let element = el || document.getElementById("live-region");
	let id = element.getAttribute("id");

	element.textContent = text;

	if (window.LRTimer[id]) {
		clearTimeout(window.LRTimer[id]);
	}

	window.LRTimer[id] = setTimeout(() => {
		element.textContent = "";
	}, 3000);
}
