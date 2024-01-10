'use client'

import { TRegisterSchema, registerSchema } from '@/lib/types/auth/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

const RegisterForm = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TRegisterSchema>({ resolver: zodResolver(registerSchema) })

	const onSubmit: SubmitHandler<TRegisterSchema> = async (data) => {
		const response = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const responseData = await response.json()
		if (!response.ok) {
			// response status is not 2xx
			alert('Submitting form failed!')
			return
		}
		if (responseData.errors) {
			const errors = responseData.errors
			if (errors.firstName) {
				setError('firstName', {
					type: 'server',
					message: errors.firstName,
				})
			} else if (errors.lastName) {
				setError('lastName', {
					type: 'server',
					message: errors.lastName,
				})
			} else if (errors.email) {
				setError('email', {
					type: 'server',
					message: errors.email,
				})
			} else if (errors.password) {
				setError('password', {
					type: 'server',
					message: errors.password,
				})
			} else if (errors.confirmPassword) {
				setError('confirmPassword', {
					type: 'server',
					message: errors.confirmPassword,
				})
			} else {
				alert('Something went wrong!')
			}
		}
		router.push('/auth/login')
		router.refresh()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-2 mx-auto w-1/3"
		>
			<label htmlFor="firstName">Enter First Name</label>
			<input
				className="rounded-lg px-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white"
				type="text"
				id="firstName"
				{...register('firstName')}
			/>
			{errors.firstName && (
				<p className="text-red-500">{`${errors.firstName.message}`}</p>
			)}
			<label htmlFor="lastName">Enter Last Name</label>
			<input
				className="rounded-lg px-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white"
				type="lastName"
				id="lastName"
				{...register('lastName')}
			/>
			{errors.lastName && (
				<p className="text-red-500">{`${errors.lastName.message}`}</p>
			)}
			<label htmlFor="email">Enter Email</label>
			<input
				className="rounded-lg px-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white"
				type="email"
				id="email"
				{...register('email')}
			/>
			{errors.email && (
				<p className="text-red-500">{`${errors.email.message}`}</p>
			)}
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
			<label htmlFor="confirm-password">Confirm Password</label>
			<input
				className="rounded-lg px-2 bg-zinc-200 dark:bg-zinc-700 dark:text-white"
				type="password"
				id="confirm-password"
				{...register('confirmPassword')}
			/>
			{errors.confirmPassword && (
				<p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
			)}
			<button
				disabled={isSubmitting}
				type="submit"
				className="bg-blue-500 disabled:bg-gray-500 rounded py-2 w-[100px] mt-2"
			>
				Register
			</button>
		</form>
	)
}
export default RegisterForm
