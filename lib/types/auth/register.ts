import { z } from 'zod'

export const registerSchema = z
	.object({
		firstName: z
			.string()
			.min(2, 'First name must be at least 2 characters.')
			.max(256, 'First name must not be longer than 256 characters.'),
		lastName: z
			.string()
			.min(2, 'Last name must be at least 2 characters.')
			.max(256, 'Last name must not be longer than 256 characters.'),
		email: z
			.string()
			.email()
			.min(5, 'Email must be at least 5 characters.')
			.max(256, 'Email must not be longer than 256 characters.'),
		password: z
			.string()
			.min(3, 'Password must be at least 3 characters.')
			.max(256, 'Password must not be longer than 256 characters.'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match.',
		path: ['confirmPassword'],
	})

export type TRegisterSchema = z.infer<typeof registerSchema>
