import { getDomain } from '../lib/getDomain'
import BlogCard from './card'
import BlogsCreateForm from './create/page'
// fetch caching options
// stores data in memory, default is force-cache; good for when you look something up once on being build
// no-store: trigger on render
// revalidate: trigger after set number of second, good for constant updates such as twitter
const getData = async () => {
	try {
		const domain = getDomain()
		// Grab api endpoint
		const endpoint = `${domain}/api/posts`
		// Errors are likely when you depend on something like a 3rd party api
		const res = await fetch(endpoint, { cache: 'no-store' }) // HTTP GET method by default
		// const res = await fetch(endpoint, { next: { revalidate: 10 } })
		// check if fetch was successful
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		// checks if the content is json data
		if (res.headers.get('content-type') !== 'application/json') {
			// if content isn't json data we return an empty list
			return { items: [] }
		}
		const result = await res.json()
		return result
	} catch (error) {
		console.log('getData error:', error)
		throw new Error('Failed to getData')
	}
}

const Blogs = async () => {
	const data = await getData()
	const items = data && data.items ? [...data.items] : []
	console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
	return (
		<section className="flex flex-col gap-4">
			<article className="flex flex-col gap-4">
				<h1>Posts:</h1>
				<ul>
					{items &&
						items.map((item, idx) => {
							return <BlogCard key={`post-${idx}`} title={item.title} />
						})}
				</ul>
			</article>
		</section>
	)
}
export default Blogs
