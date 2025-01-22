import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core"

export const metaDescriptionTable = pgTable("meta_description", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 60 }).notNull(),
  description: varchar({ length: 160 }).notNull(),
  updated_at: timestamp().$onUpdate(() => new Date()),
  created_at: timestamp().defaultNow().notNull()
})
