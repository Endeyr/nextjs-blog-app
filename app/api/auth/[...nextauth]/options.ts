import { sql } from '@vercel/postgres'
import { compare } from 'bcrypt'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

export const options: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		GoogleProvider({
			profile(profile: GoogleProfile) {
				console.log(profile)
				return {
					...profile,
					role: profile.role ?? 'user',
					id: profile.id,
					image: profile.avatar_url,
				}
			},
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				const credentialDetails = {
					email: credentials?.email,
					password: credentials?.password,
				}
				const response = await sql`
          SELECT * FROM users WHERE email=${credentialDetails.email}
        `
				const user = response.rows[0]
				const passwordCorrect = await compare(
					credentialDetails.password || '',
					user.password
				)
				if (passwordCorrect) {
					// what you want returned from the user db
					return {
						id: user.id,
						email: user.email,
						role: user.role,
						image: user.image ?? '',
					}
				}
				return null
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.role = user.role
			return token
		},
		async session({ session, token }) {
			if (session?.user) session.user.role = token.role
			return session
		},
	},
	pages: {
		signIn: '/auth/login',
	},
}
