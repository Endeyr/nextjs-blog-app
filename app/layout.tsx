import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import Logout from './auth/logout'
import Footer from './components/footer'
import Navigation from './components/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Blog App',
	description: 'my blog app',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession()
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				{!!session && <Logout />}
				{!session && <span>No User Found</span>}
				{children}
				<Footer />
			</body>
		</html>
	)
}
