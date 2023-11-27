import type { User } from 'next-auth'

type Props = {
	user: User
	pagetype: string
}

const Hero = ({ user, pagetype }: Props) => {
	// checks if the property exist on user object and then displays it
	const greeting = user?.email ? (
		<div>Hello {user?.email}!</div>
	) : (
		<div>Hello!</div>
	)

	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold break-words">
						{greeting}
					</h1>
					<p>{pagetype} Page!</p>
				</div>
				<div className="col-span-5 place-self-center mt-4 sm:mt-0">
					<div className="w-[180px] h-[250px] lg:w-[280px] lg:h-[380px]  relative"></div>
				</div>
			</div>
		</section>
	)
}
export default Hero
