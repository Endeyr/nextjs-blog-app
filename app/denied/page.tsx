import Link from 'next/link'

const Denied = () => {
	return (
		<section>
			<p>Access Denied</p>
			<div>
				You are logged in, but you do not have the required access level to view
				this page.
			</div>
			<Link href="/">Return to Home Page</Link>
		</section>
	)
}
export default Denied
