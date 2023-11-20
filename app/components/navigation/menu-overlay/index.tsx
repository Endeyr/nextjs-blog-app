import NavLink from '../navbar/navlink'

const MenuOverlay = ({
	links,
	toggle,
}: {
	links: { title: string; path: string }[]
	toggle: () => void
}) => {
	return (
		<ul className="flex flex-col p-4 items-center dark:bg-[#181A2A] bg-[#FFFFFF] divide-y divide-solid divide-white ">
			{links.map((link, index) => (
				<li key={index}>
					<button onClick={toggle}>
						<NavLink href={link.path} title={link.title} />
					</button>
				</li>
			))}
		</ul>
	)
}
export default MenuOverlay
