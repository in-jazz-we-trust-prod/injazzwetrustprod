// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://injazzwetrustprod.com',
	trailingSlash: 'always',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [icon(), mdx(), sitemap()],
	fonts: [{
		provider: fontProviders.fontsource(),
		name: 'Darumadrop One',
		cssVariable: '--font-darumadrop-one',
		unicodeRange: ['U+0025-00FF'],
	}, {
		provider: fontProviders.fontsource(),
		name: 'Lato',
		cssVariable: '--font-lato',
		unicodeRange: ['U+0025-00FF'],
	}],
	build: {
		inlineStylesheets: 'always',
	},
	image: {
		responsiveStyles: true,
		layout: 'constrained',
		remotePatterns: [{
			protocol: 'https',
			hostname: 'f4.bcbits.com',
		}],
	},
});
