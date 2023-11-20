import Link from 'next/link'

const Navlink = ({ href, title }: { href: string; title: string }) => {
	return (
		<>
			<Link href={href}>
				<p className="text-2xl text-black/80 hover:text-black/50 active:text-black/100 dark:text-white/80 dark:hover:text-white/50 dark:active:text-white/100 font-semibold">
					{title}
				</p>
			</Link>
		</>
	)
}
export default Navlink
