import { integer, pgTable, timestamp, varchar, jsonb } from "drizzle-orm/pg-core"
import { Op } from "quill"

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  image_url: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 100 }).notNull(),
  content: jsonb().$type<Op[]>().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
  created_at: timestamp().defaultNow().notNull()
})
