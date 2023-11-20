import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import RegisterForm from './form'

const Register = async () => {
	const session = await getServerSession()
	if (session) {
		redirect('/')
	}
	return <RegisterForm />
}
export default Register
