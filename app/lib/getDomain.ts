// helper function for fetching from backend api
export const getDomain = () => {
	const protocol = process.env.VERCEL_ENV === 'production' ? 'https' : 'http'
	const domain = process.env.VERCEL_URL
		? process.env.VERCEL_URL
		: 'nextjs-blog-app-mauve.vercel.app' // default to url
	return `${protocol}://${domain}`
}
