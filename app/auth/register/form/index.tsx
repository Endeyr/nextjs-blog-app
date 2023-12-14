'use client'

import { FormEvent } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
	message: null,
}

const SubmitButton = () => {
	const { pending } = useFormStatus()

	return (
		<button type="submit" aria-disabled={pending}>
			Register
		</button>
	)
}

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault()
	const formData = new FormData(e.currentTarget)
	const response = await fetch('/api/auth/register', {
		method: 'POST',
		body: JSON.stringify({
			email: formData.get('email'),
			password: formData.get('password'),
		}),
	})
}

const RegisterForm = () => {
	// const [state, formAction] = useFormState(createUser, initialState)
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-2 mx-auto w-full"
		>
			{/* action={formAction} */}
			<label htmlFor="email">Enter Email</label>
			<input
				className="rounded-lg dark:text-black"
				type="email"
				id="email"
				name="email"
				required
			/>
			{/* Need to add password confirm + validation */}
			<label htmlFor="password">Enter Password</label>
			<input
				className="rounded-lg dark:text-black"
				type="password"
				id="password"
				name="password"
				required
			/>
			{/* Add hidden input for role + pfp */}
			<SubmitButton />
			<p aria-live="polite" className="sr-only" role="status">
				{/* {state?.message} */}
			</p>
		</form>
	)
}
export default RegisterForm
