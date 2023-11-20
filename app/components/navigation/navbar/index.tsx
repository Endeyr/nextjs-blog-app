'use client'

import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'
import MenuOverlay from '../menu-overlay/index'
import NavLink from './navlink'

// Allows adding more navlinks to the navbar
const navLinks = [
	{
		title: 'Blog',
		path: '/blog',
	},
	{
		title: 'Single Post',
		path: '/blog/id',
	},
	{
		title: 'Pages',
		path: '/pages',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
]

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

	const toggle = () => setNavbarOpen(!navbarOpen)

	return (
		<>
			<nav className="w-full h-20 sticky top-0 z-10">
				<div className="container mx-auto p-4 h-full">
					<div className="flex justify-between gap-4 items-center h-full">
						<button
							onClick={() => {
								setNavbarOpen(false)
							}}
						>
							<Link href={'/'}>
								<p className="text-5xl text-black hover:text-black/50 active:text-black/100 dark:text-white dark:hover:text-white/50 dark:active:text-white/100 font-semibold">
									Home
								</p>
							</Link>
						</button>
						<div className="mobile-menu block sm:hidden" id="mobile-navbar">
							{navbarOpen ? (
								<button
									className="flex items-center p-2 border rounded dark:border-white  text-black hover:text-black/50 active:text-black/100 dark:text-white dark:hover:text-white/50 dark:active:text-white/100"
									onClick={() => {
										setNavbarOpen(false)
									}}
								>
									<XMarkIcon className="h-5 w-5" />
								</button>
							) : (
								<button
									className="flex items-center p-2 border rounded dark:border-white  text-black hover:text-black/50 active:text-black/100 dark:text-white dark:hover:text-white/50 dark:active:text-white/100"
									onClick={() => {
										setNavbarOpen(true)
									}}
								>
									<Bars4Icon className="h-5 w-5" />
								</button>
							)}
						</div>
						<div className="menu hidden sm:block sm:w-auto" id="navbar">
							<ul className="hidden sm:flex sm:flex-row gap-x-6">
								{navLinks.map((link, index) => (
									<li key={index}>
										<NavLink href={link.path} title={link.title} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{navbarOpen ? <MenuOverlay links={navLinks} toggle={toggle} /> : null}
			</nav>
		</>
	)
}

export default Navbar
