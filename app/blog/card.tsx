'use client'

import { useState } from 'react'

const BlogCard = ({ title }: { title: string }) => {
	const [count, setCount] = useState<number>(1)
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		const countUp = count + 1
		setCount(countUp)
	}
	if (!title) {
		return <li>Empty</li>
	}
	return (
		<li>
			<button onClick={handleClick}>{title}</button>
			<div>{count}</div>
		</li>
	)
}

export default BlogCard
