import { integer, pgTable, timestamp, varchar, jsonb } from "drizzle-orm/pg-core"
import { QuillDelta } from "@/types"

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  image_url: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  content: jsonb().$type<QuillDelta>().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
  created_at: timestamp().defaultNow().notNull()
})
