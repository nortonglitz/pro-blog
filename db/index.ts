import { drizzle } from "drizzle-orm/neon-http"

if (!process.env.NEONDB_URL) {
  console.error("There is no database URL defined.")
  process.exit(1)
}

const db = drizzle(process.env.NEONDB_URL)

export default db
