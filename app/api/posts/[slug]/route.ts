import { NextResponse } from 'next/server'

// API endpoints connect the db to the frontend
export const GET = async (request: any, context: any) => {
	const { params } = context
	const { slug } = params
	console.log(request, context)
	return NextResponse.json({ slug: slug })
}
export const POST = async (request: any, context: any) => {
	console.log(request, context)
	return NextResponse.json({ hello: 'World' })
}
