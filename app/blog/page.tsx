// import BlogCard from './BlogCard'
import { getDomain } from '../lib/getDomain'
const getData = async () => {
	try {
		const domain = getDomain()
		// Grab api endpoint
		const endpoint = `${domain}/api/posts` // Errors are likely when you depend on something like a 3rd party api
		const res = await fetch(endpoint) // HTTP GET method by default
		// check if fetch was successful
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		// assumes endpoint is json data format
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
	return (
		<article className="flex flex-col gap-4">
			<h1>Posts:</h1>
			<ul>
				{items &&
					items.map((item, idx) => {
						return <li key={`post-${idx}`}>{item.title}</li>
					})}
			</ul>
		</article>
	)
}
export default Blogs
