import { integer, pgTable, timestamp, varchar, jsonb } from "drizzle-orm/pg-core"
import { QuillOps } from "@/types"

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  image_url: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 100 }).notNull(),
  content: jsonb().$type<QuillOps>().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
  created_at: timestamp().defaultNow().notNull()
})
