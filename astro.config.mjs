import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import sectionize from "remark-sectionize";

import light from "./light.js";
import dark from "./dark.js";

// https://astro.build/config
export default defineConfig({
	site: "https://www.nicchan.me/",
	integrations: [mdx(), sitemap(), svelte()],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
        	silenceDeprecations: ["legacy-js-api"],
					additionalData: `@use "@styles/mixins" as *;`,
				},
			},
		},
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: light,
				dark: dark,
			},
			langs: ["liquid", "scss"],
		},
		remarkPlugins: [sectionize],
	},
});
