const users = [
	{
		id: '410544b2-4001-4271-9855-fec4b6a6442a',
		name: 'Aaron',
		email: 'user@nextmail.com',
		password: '123456',
	},
]

function slugify(str) {
	return str
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9-]+/g, '-')
}

const blogs = [
	{
		title: 'Test blog',
		slug: slugify('Test blog'),
		body: 'Here is my test blog. This is a new line. Here is another',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{test, test2, test3}',
	},
	{
		title: 'The Art of Minimalism: Declutter Your Life and Find Joy',
		slug: slugify('the-art-of-minimalism-declutter-your-life-and-find-joy'),
		body: 'Tired of feeling overwhelmed by clutter? Minimalism might be the answer. Discover the benefits of a simpler life and learn how to declutter your space and mind.',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{minimalism, lifestyle, productivity}',
	},
	{
		title: '5 Tips for Writing Compelling Blog Posts',
		slug: slugify('5-tips-for-writing-compelling-blog-posts'),
		body: 'Ready to captivate your audience with your writing? These five tips will help you craft engaging and informative blog posts that keep readers coming back for more.',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{writing, blogging, content creation}',
	},
	{
		title: 'The Power of Nature: Reconnect with Yourself and the World',
		slug: slugify('the-power-of-nature-reconnect-with-yourself-and-the-world'),
		body: 'Escape the digital noise and rediscover the beauty of the natural world. Learn how spending time in nature can benefit your physical and mental well-being.',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{nature, wellness, mental health}',
	},
	{
		title: 'Mastering the Art of Home Cooking: Simple and Delicious Recipes',
		slug: slugify(
			'mastering-the-art-of-home-cooking-simple-and-delicious-recipes'
		),
		body: "Impress your loved ones with your culinary skills! This collection of easy-to-follow recipes will guide you through creating mouthwatering dishes, even if you're a beginner in the kitchen.",
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{cooking, recipes, food}',
	},
	{
		title: 'Traveling Solo: Embark on an Adventure of Self-Discovery',
		slug: slugify('traveling-solo-embark-on-an-adventure-of-self-discovery'),
		body: 'Step outside your comfort zone and explore the world on your own terms. Discover the joys and challenges of solo travel and how it can lead to personal growth.',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{travel, solo travel, adventure}',
	},
	{
		title: 'The Importance of Mindfulness: Living in the Present Moment',
		slug: slugify('the-importance-of-mindfulness-living-in-the-present-moment'),
		body: 'Reduce stress and find inner peace through the practice of mindfulness. Learn how to be present in the moment, appreciate the little things, and let go of worries.',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{mindfulness, meditation, wellbeing}',
	},
	{
		title: 'Unleash Your Creativity: Discover Hidden Talents and Passions',
		slug: slugify(
			'unleash-your-creativity-discover-hidden-talents-and-passions'
		),
		body: 'Connect with your inner artist and explore new creative outlets. Learn how to tap into your imagination and discover hidden talents that will bring joy and fulfillment.',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{creativity, arts, self-expression}',
	},
	{
		title: 'Financial Freedom: Practical Tips for a Secure Future',
		slug: slugify('financial-freedom-practical-tips-for-a-secure-future'),
		body: 'Take control of your finances and build a secure future. Learn valuable tips for budgeting, saving, and investing, and pave the way for financial independence.',
		author: '410544b2-4001-4271-9855-fec4b6a6442a',
		tags: '{finance, budgeting, investment}',
	},
]

module.exports = {
	users,
	blogs,
}
