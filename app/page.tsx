import Hero from './components/hero'

export default function Home() {
	return (
		<main className="flex flex-col">
			<div className="container section-min-height mx-auto px-12 py-4 my-12">
				<Hero />
			</div>
		</main>
	)
}
