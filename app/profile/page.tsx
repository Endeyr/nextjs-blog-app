'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const GithubProfile = () => {
	const url = 'https://api.github.com/repos/Endeyr/nextjs-blog-app'
	const { data, error, isLoading } = useSWR(url, fetcher)
	if (error) return 'An Error Occurred'
	if (isLoading) return 'Loading...'

	return (
		<div>
			<h1>Name: {data?.owner.login}</h1>
			<p>Description: {data?.description}</p>
			<p>Subs: {data?.subscribers_count}</p>
			<p>Stars: {data?.stargazers_count}</p>
			<p>Forks: {data?.forks_count}</p>
		</div>
	)
}

export default GithubProfile
