'use client'
import { useState } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Navigation = (session: any) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			{/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
			<Navbar />
		</>
	)
}

export default Navigation
