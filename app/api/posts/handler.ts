import { sql } from '@vercel/postgres'
import {
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	uniqueIndex,
	uuid,
	varchar,
} from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/vercel-postgres'

// Obj to send drizzle queries to db
export const db = drizzle(sql)

export const roleEnum = pgEnum('role', ['user', 'author', 'admin'])
// pgTable that maps to db table
export const UsersTable = pgTable(
	'users',
	{
		id: uuid('id').primaryKey(),
		name: varchar('name').notNull(),
		email: text('email').notNull().unique(),
		password: text('password').notNull(),
		user_role: roleEnum('role').default('user'),
	},
	(users) => {
		return {
			uniqueIdx: uniqueIndex('unique_idx').on(users.email),
		}
	}
)

export const getUsersTable = async () => {
	const selectUserResult = await db.select().from(UsersTable)
	console.log('Results', selectUserResult)
}

export const BlogsTable = pgTable(
	'blogs',
	{
		id: uuid('id').primaryKey(),
		title: text('title').notNull(),
		slug: text('slug').notNull(),
		body: text('body').notNull(),
		author: uuid('author').references(() => UsersTable.id),
		tags: text('tags').array().default(['uncategorized']),
		created_at: timestamp('created_at', {
			precision: 6,
			withTimezone: true,
		}).defaultNow(),
		updated_at: timestamp('updated_at', {
			precision: 6,
			withTimezone: true,
		}).defaultNow(),
		thumbnail_url: varchar('thumbnail_url').default(''),
	},
	(blogs) => {
		return {
			uniqueIdx: uniqueIndex('unique_idx').on(blogs.id),
		}
	}
)

export const getBlogsTable = async () => {
	const selectBlogResult = await db.select().from(BlogsTable)
	console.log('Results', selectBlogResult)
}
