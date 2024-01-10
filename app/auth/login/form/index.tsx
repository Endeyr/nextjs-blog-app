'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TLoginSchema, loginSchema } from '../../../../lib/types/auth/login'

const LoginForm = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) })

	const onSubmit: SubmitHandler<TLoginSchema> = async (data) => {
		const response = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		})
		if (!response?.ok) {
			// response status is not 2xx
			setError('password', {
				type: 'server',
				message: 'Email not found or password incorrect.',
			})
			return
		}
		// Check if response.error is null
		if (!response?.error) {
			router.push('/')
			router.refresh()
		}
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=" flex flex-col gap-2 mx-auto w-1/3"
		>
			<label htmlFor="email">Enter Email</label>
			<input
				className="rounded-lg px-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white"
				type="email"
				id="email"
				{...register('email')}
			/>

			<label htmlFor="password">Enter Password</label>
			<input
				className="rounded-lg px-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white"
				type="password"
				id="password"
				{...register('password')}
			/>
			{errors.password && (
				<p className="text-red-500">{`${errors.password.message}`}</p>
			)}
			<button
				disabled={isSubmitting}
				type="submit"
				className="bg-blue-500 disabled:bg-gray-500 rounded py-2 w-[100px] mt-2"
			>
				Login
			</button>
		</form>
	)
}
export default LoginForm
