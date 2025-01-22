import { integer, pgTable, timestamp, varchar, text, boolean } from "drizzle-orm/pg-core"

export const messagesTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  from: varchar({ length: 255 }).notNull(),
  subject: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
  read: boolean().default(false).notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().$onUpdate(() => new Date())
})
