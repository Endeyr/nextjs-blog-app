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
	// if else to handle errors or insert into db
	// display on ui errors or success message
	return NextResponse.json({
		success: true,
	})
}
