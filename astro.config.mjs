import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import light from "./light.js";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap(), svelte()],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "./src/styles/_mixins.scss";`,
				},
			},
		},
	},
	markdown: {
		shikiConfig: {
			experimentalThemes: {
				light: light,
				dark: "dracula",
			},
			langs: ["liquid", "scss"],
		},
	},
});
