import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Navigation from './components/navigation'
import AuthProvider from './context/AuthProvider'
import Provider from './context/Provider'
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
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} ${GeistSans.className} min-h-screen antialiased`}
			>
				<AuthProvider>
					<Provider>
						<Navigation />
						<main className="flex justify-center items-start p-6 section-min-height">
							{children}
							<SpeedInsights />
						</main>
						<Footer />
					</Provider>
				</AuthProvider>
			</body>
		</html>
	)
}
