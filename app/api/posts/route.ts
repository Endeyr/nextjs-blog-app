import { NextResponse } from 'next/server'

// API endpoints connect the db to the frontend
export const GET = async () => {
	return NextResponse.json({ items: [{ id: 1, title: 'Hello World' }] })
}
// export const POST = async () => {
// 	return NextResponse.json({ hello: 'World' })
// }
