export function throttle(callback, limit) {
	let waiting = false; // Initially, we're not waiting
	return function () {
		if (!waiting) {
			callback.apply(this, arguments);
			waiting = true;
			setTimeout(function () {
				waiting = false;
			}, limit);
		}
	};
}
