<script>
	import { onMount } from "svelte";

	function addIntersectionObserver() {
		const observer = new IntersectionObserver((sections) => {
			sections.forEach((section) => {
				const heading = section.target.querySelector("h2, h3, h4, h5");
				if (!heading) return;
				const id = heading.getAttribute("id");

				if (section.intersectionRatio > 0) {
					document
						.querySelector(`nav.toc li a[href="#${id}"]`)
						.parentElement.classList.add("active");
				} else {
					document
						.querySelector(`nav.toc li a[href="#${id}"]`)
						.parentElement.classList.remove("active");
				}
			});
		});

		document.querySelectorAll(".post__content section").forEach((section) => {
			observer.observe(section);
		});
	}

	onMount(addIntersectionObserver);
</script>
