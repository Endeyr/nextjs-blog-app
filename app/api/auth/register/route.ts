import { registerSchema } from '@/lib/types/auth/register'
import { sql } from '@vercel/postgres'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

const saltRounds = 10
export const POST = async (request: Request) => {
	// destructure email + password from Credentials
	const body: unknown = await request.json()
	const result = registerSchema.safeParse(body)
	let zodErrors = {}
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
		})
	} else {
		const fullName = `${result.data.firstName} ${result.data.lastName}`
		const hashedPassword = await hash(result.data.password, saltRounds)
		const response = await sql`
		INSERT INTO users (name, email, password, User_role)
		VALUES (${fullName},${result.data.email}, ${hashedPassword}, 'user')
		`
	}

	return NextResponse.json(
		Object.keys(zodErrors).length > 0
			? { errors: zodErrors }
			: { success: true }
	)
}
