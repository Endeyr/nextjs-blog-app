import { sql } from '@vercel/postgres'
import { compare } from 'bcrypt'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials, req) {
				// add some validation
				const response = await sql`
          SELECT * FROM users WHERE email=${credentials?.email}
        `
				const user = response.rows[0]
				const passwordCorrect = await compare(
					credentials?.password || '',
					user.password
				)
				if (passwordCorrect) {
					return {
						id: user.id,
						email: user.email,
					}
				}
				return null
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
}
