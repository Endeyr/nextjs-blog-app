import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { sql } from '@vercel/postgres'
import axios from 'axios'
const getBlogs = async () => {
	const res = await axios.get('')
	return res.data
}
const postBlog = () => {
	return
}

// const BlogCard = () => {
// 	const queryClient = useQueryClient()
// 	const {
// 		data: blogs,
// 		error,
// 		isLoading,
// 	} = useQuery({ queryKey: ['blogs'], queryFn: getBlogs })
// 	const mutation = useMutation({
// 		mutationFn: postBlog,
// 		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['blogs'] }),
// 	})
// 	return (
// 		<div>
// 			<ul>
// 				{/* Define a blog type */}
// 				{blogs?.map((blog: any) => (
// 					<li key={blog.id}>{blog.title}</li>
// 				))}
// 			</ul>
// 			{/* Form goes here */}
// 			<button
// 				onClick={() => {
// 					mutation.mutate({ id: Date.now(), title: 'New Blog' })
// 				}}
// 			>
// 				Add Blog
// 			</button>
// 		</div>
// 	)
// }
// export default BlogCard
