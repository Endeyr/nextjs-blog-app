// Basic way
// export { default } from 'next-auth/middleware'

import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

// add user token to request obj
export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		// add role based matching and redirects
		if (
			request.nextUrl.pathname.startsWith('/dashboard') &&
			request.nextauth.token?.role !== 'admin' &&
			request.nextauth.token?.role !== 'manager'
		) {
			return NextResponse.rewrite(new URL('/denied', request.url))
		}
	},
	{
		// only executes if authorized returns true ie need token
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
)
// Applies next-auth only to matching routes - can be regex
export const config = { matcher: ['/dashboard'] }
