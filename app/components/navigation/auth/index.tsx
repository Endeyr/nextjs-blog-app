import Logout from '@/app/auth/logout'
import { useSession } from 'next-auth/react'
import Navlink from '../navbar/navlink'

const AuthLink = () => {
	// gets the current session to display login or logout
	const { data: session } = useSession()

	return (
		<>
			{!session?.user ? (
				<>
					<li>
						<Navlink href={'/auth/login'} title={'Login'} />
					</li>
					<li>
						<Navlink href={'/auth/register'} title={'Register'} />
					</li>
				</>
			) : (
				<li>
					<Logout />
				</li>
			)}
		</>
	)
}
export default AuthLink
