import { z } from 'zod'

export const registerSchema = z
	.object({
		firstName: z.string(),
		lastName: z.string(),
		email: z.string().email(),
		password: z.string().min(10, 'Password must be at least 10 characters.'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match.',
		path: ['confirmPassword'],
	})

export type TRegisterSchema = z.infer<typeof registerSchema>
