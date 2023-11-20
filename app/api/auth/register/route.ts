import { sql } from '@vercel/postgres'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

const saltRounds = 10
export const POST = async (request: Request) => {
	try {
		// destructure email + password from Credentials
		const { email, password } = await request.json()
		// add some sort of validation for email + password ie Zod
		const hashedPassword = await hash(password, saltRounds)
		const response = await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword})
      `
	} catch (error) {
		console.log(error)
	}
	return NextResponse.json({ message: 'success' })
}
