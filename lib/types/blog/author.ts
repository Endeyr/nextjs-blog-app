import { z } from 'zod'

export const authorSchema = z.object({
	name: z.string(),
	pfp: z.string()
})

export type TAuthorSchema = z.infer<typeof authorSchema>
