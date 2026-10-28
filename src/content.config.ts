import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actualites = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/actualites', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			metaDescription: z.string().optional(),
			author: z.string().optional(),
			pubDate: z.coerce.date(),
			heroImage: image().optional(),
			cta: z.object({
				text: z.string(),
				url: z.string(),
			}).optional(),
			endDate: z.coerce.date().optional(),
			socials: z.object({
				facebook: z.url().optional(),
				instagram: z.url().optional(),
				bandcamp: z.url().optional(),
				youtube: z.url().optional(),
				spotify: z.url().optional(),
			}).optional(),
			contact: z.object({
				person: z.string(),
				role: z.string(),
				tel: z.object({
					int: z.e164(),
					text: z.string(),
				}).optional(),
				email: z.email().optional(),
			}).optional(),
		}),
});

const artistes = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/artistes', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			bio: z.object({
				image: image().optional(),
				members: z.object({
					role: z.string(),
					name: z.string(),
				}).array(),
			}).optional(),
			links: z.object({
				socials: z.object({
					facebook: z.url().optional(),
					instagram: z.url().optional(),
					bandcamp: z.url().optional(),
					youtube: z.url().optional(),
					spotify: z.url().optional(),
				}).optional(),
				pro: z.object({
					epk: z.url().optional(),
					photos: z.url().optional(),
				}).optional(),
			}).optional(),
			videos: z.object({
				teaser: z.object({
					id: z.string(),
					title: z.string().optional()
				}).optional(),
				other: z.object({
					id: z.string(),
					title: z.string().optional()
				}).array().optional(),
				image: image().optional(),
			}).optional(),
			music: z.object({
				bandId: z.string(),
				albumId: z.string(),
				image: image().optional(),
			}).optional(),
			dates: z.string().optional(),
			contact: z.object({
				person: z.string(),
				role: z.string(),
				tel: z.object({
					int: z.e164(),
					text: z.string(),
				}).optional(),
				email: z.email().optional(),
			}).optional(),
		}),
});

export const collections = { actualites, artistes };
