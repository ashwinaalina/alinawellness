import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const testUsersTable = sqliteTable('users_test', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').unique().notNull(),
});

export const testPostsTable = sqliteTable('posts_test', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => testUsersTable.id, { onDelete: 'cascade' }),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export type InsertUser = typeof testUsersTable.$inferInsert;
export type SelectUser = typeof testUsersTable.$inferSelect;

export type InsertPost = typeof testPostsTable.$inferInsert;
export type SelectPost = typeof testPostsTable.$inferSelect;
