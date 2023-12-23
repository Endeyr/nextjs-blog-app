import { NextResponse } from 'next/server'

// API endpoints connect the db to the frontend
export const GET = async () => {
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
// export const POST = async () => {
// 	return NextResponse.json({ hello: 'World' })
// }
