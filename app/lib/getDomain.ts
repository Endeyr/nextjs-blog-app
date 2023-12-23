// helper function for fetching from backend api
export const getDomain = () => {
	const protocol =
		process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'https' : 'http'
	const domain = process.env.NEXT_PUBLIC_VERCEL_URL
		? process.env.NEXT_PUBLIC_VERCEL_URL
		: 'localhost:3000'
	return `${protocol}://${domain}`
}
