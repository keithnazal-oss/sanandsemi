import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A content field that may still be an unverified placeholder. `status: 'placeholder'`
// means the copy is written but must be swapped for confirmed company content —
// rendered wrapped in <TodoNotice />.
const statusField = z.enum(['confirmed', 'placeholder']);

const linkedItem = z.object({
	name: z.string(),
	partner: z.string(),
	partnerSlug: z.string(),
});

const solutions = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
	schema: z.object({
		title: z.string(),
		order: z.number(),
		summary: z.string(),
		relatedProcesses: z.array(z.string()).default([]),
		overviewStatus: statusField,
		overview: z.string(),
		applicationsStatus: statusField,
		applications: z.string(),
		challengesStatus: statusField,
		challenges: z.string(),
		materials: z.array(linkedItem).default([]),
		equipment: z.array(linkedItem).default([]),
		downloadsStatus: statusField.default('placeholder'),
	}),
});

const partners = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
	schema: z.object({
		name: z.string(),
		order: z.number(),
		country: z.string(),
		founded: z.string().optional(),
		headquarters: z.string().optional(),
		website: z.string().optional(),
		certifications: z.array(z.string()).default([]),
		coreTechnologies: z.array(z.string()).default([]),
		productPortfolio: z.array(z.string()).default([]),
		solutionsOffered: z.array(z.string()).default([]),
		overview: z.string(),
		manufacturingExpertiseStatus: statusField,
		manufacturingExpertise: z.string(),
		industriesServedStatus: statusField,
		industriesServed: z.string(),
	}),
});

const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { solutions, partners, news };
