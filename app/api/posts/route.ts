import { postSchema } from '@/lib/types/blog/post'
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// API endpoints connect the db to the frontend
export const GET = async () => {
	// fetch from db
	return NextResponse.json({
		items: [
			{ id: 1, title: 'New World' },
			{ id: 2, title: 'Can you believe' },
			{ id: 3, title: 'How is it not butter' },
			{ id: 4, title: 'Never Lucky' },
			{ id: 5, title: 'Trust No One' },
			{ id: 6, title: 'Forget me not' },
		],
	})
}
export const POST = async (request: Request) => {
	// add to db
	// destructure
	const body: unknown = await request.json()
	// validate body
	const result = postSchema.safeParse(body)
	// if else to handle errors or insert into db
	let zodErrors = {}
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
		})
	} else {
		const response = await sql`
		INSERT INTO posts ()
		VALUES ()
		`
	}

	// display on ui errors or success message
	return NextResponse.json(
		Object.keys(zodErrors).length > 0
			? { errors: zodErrors }
			: { success: true }
	)
}
