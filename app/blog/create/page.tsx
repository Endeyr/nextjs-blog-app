'use client'

import { useState } from 'react'

const BlogsCreateForm = () => {
	const [results, setResults] = useState<string | null>(null)
	const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// create an object with the form values
		const formData = new FormData(e.currentTarget)
		const data = Object.fromEntries(formData)
		// JSON object
		const JSONData = JSON.stringify(data)
		// Send data to backend
		// update endpoint
		const endpoint = '/api/posts/'
		// update header
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONData,
		}
		const res = await fetch(endpoint, options)
		const result = await res.json()
		setResults(result)
	}
	return (
		<article className="flex flex-col gap-4">
			<form
				onSubmit={handleForm}
				className="flex flex-col gap-2 justify-center items-center"
			>
				<div className="flex gap-2">
					<label htmlFor="title">Title: </label>
					<input name="title" type="text" className="rounded-xl px-1 py-0.5" />
				</div>
				<div className="flex gap-2">
					<label htmlFor="body">Body: </label>
					<input name="body" type="text" className="rounded-xl px-1 py-0.5" />
				</div>
				<button type="submit">Submit</button>
			</form>
			<div>{results && JSON.stringify(results)}</div>
		</article>
	)
}

export default BlogsCreateForm
