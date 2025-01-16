import { integer, jsonb, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core"

export const userInfoTable = pgTable("user_info", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(), // ID único para o usuário
  first_name: varchar({ length: 100 }).notNull(), // Primeiro nome do usuário
  last_name: varchar({ length: 100 }).notNull(), // Último nome do usuário
  jobs: jsonb().notNull(), // Lista de trabalhos
  socials: jsonb().notNull(), // Links de redes sociais
  about: text().notNull(), // Texto sobre o usuário
  updated_at: timestamp().defaultNow().notNull(),
  created_at: timestamp().defaultNow().notNull()
})
