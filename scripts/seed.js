// Seed the database with blog post and authors
const { db } = require('@vercel/postgres')
const { blogs, users } = require('../app/lib/placeholder-data')
const bcrypt = require('bcrypt')

const seedUsers = async (client) => {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        user_role Role DEFAULT 'user'
      );
    `

		console.log(`Created "users" table`)

		const insertedUsers = await Promise.all(
			users.map(async (user) => {
				const hashedPassword = await bcrypt.hash(user.password, 10)
				return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
			})
		)

		console.log(`Seeded ${insertedUsers.length} users`)

		return {
			createTable,
			users: insertedUsers,
		}
	} catch (error) {
		console.log(error)
	}
}
const seedBlogs = async (client) => {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        slug VARCHAR(255) UNIQUE,
        body TEXT NOT NULL,
        author UUID REFERENCES users(id) ON DELETE CASCADE,
        tags TEXT[] DEFAULT '{uncategorized}', 
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        thumbnail_url VARCHAR(255) DEFAULT NULL
      )
    `
		console.log('Created blog table')

		const insertedBlogs = await Promise.all(
			blogs.map(async (blog) => {
				return client.sql`
          INSERT INTO blogs (title, slug, body, author, tags)
          VALUES (${blog.title}, ${blog.slug}, ${blog.body}, ${blog.author}, ${blog.tags})
					ON CONFLICT (slug) DO NOTHING;
        `
			})
		)

		console.log(`Seeded ${insertedBlogs.length} blogs`)
		return {
			createTable,
			blogs: insertedBlogs,
		}
	} catch (error) {
		console.log('Error seeding blogs', error)
		throw error
	}
}

const main = async () => {
	const client = await db.connect()

	await seedUsers(client)
	await seedBlogs(client)

	await client.end()
}

main().catch((err) => {
	console.error('An error occurred while attempting to seed the database:', err)
})
