import { z } from 'zod'
import { authorSchema } from './author'

export const postSchema = z.object({
	slug: z.string(),
	title: z.string(),
	date: z.string(),
	coverImage: z.string(),
	author: authorSchema,
	excerpt: z.string(),
	image: z.string(),
	content: z.string(),
})

export type TPostSchema = z.infer<typeof postSchema>
