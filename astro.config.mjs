// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://keithnazal-oss.github.io/sanandsemi/
// If a custom domain is confirmed later, update `site` and drop `base`.
export default defineConfig({
	site: 'https://keithnazal-oss.github.io',
	base: '/sanandsemi',
	integrations: [sitemap()],
});
