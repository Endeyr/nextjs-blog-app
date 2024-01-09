import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT, JWT } from 'next-auth/jwt'

// Extend the default types to add user role and id
// import type user
declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			role: string
		} & DefaultSession['user']
	}

	interface User extends DefaultUser {
		role: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends DefaultJWT {
		role: string
	}
}
