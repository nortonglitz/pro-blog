import "./setup" // Load env

import db from "@/db"
import { messagesTable } from "@/schemas/drizzle"
import { faker } from "@faker-js/faker"

if (process.env.NODE_ENV !== "development") {
  console.error("Seeds can only be run in development mode.")
  process.exit(1)
}

const generateMessages = (count: number) =>
  Array.from({ length: count }).map(() => ({
    from: faker.internet.email(),
    subject: faker.company.catchPhrase(),
    content: faker.lorem.paragraphs(),
    read: faker.datatype.boolean(0.3),
    created_at: faker.date.recent({ days: 100 })
  }))

const seedMessages = async () => {
  try {
    const messages = generateMessages(20)
    await db.insert(messagesTable).values(messages)
    console.log("Seed messages data inserted successfully")
  } catch (err) {
    console.error("Error inserting seed data:", err)
    process.exit(1)
  }
}

seedMessages()
