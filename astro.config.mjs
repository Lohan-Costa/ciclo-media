// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ciclo.media',
	i18n: {
		defaultLocale: 'pt',
		locales: ['pt', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
