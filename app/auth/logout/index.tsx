'use client'

import { signOut } from 'next-auth/react'

const Logout = () => {
	return (
		<button
			className="text-2xl text-black/80 hover:text-black/50 active:text-black/100 dark:text-white/80 dark:hover:text-white/50 dark:active:text-white/100 font-semibold"
			onClick={() => {
				signOut()
			}}
		>
			Logout
		</button>
	)
}
export default Logout
