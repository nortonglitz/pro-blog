import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./db/drizzle",
  schema: "./schemas/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEONDB_URL
  }
})
