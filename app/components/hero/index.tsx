const Hero = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold break-words">
						Hello, I&apos;m Aaron
					</h1>
				</div>
				<div className="col-span-5 place-self-center mt-4 sm:mt-0">
					<div className="w-[180px] h-[250px] lg:w-[280px] lg:h-[380px]  relative"></div>
				</div>
			</div>
		</section>
	)
}
export default Hero
