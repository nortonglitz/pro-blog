import "./setup" // Load env

import db from "@/db"
import { postsTable } from "@/schemas/drizzle"
import { faker } from "@faker-js/faker"

if (process.env.NODE_ENV !== "development") {
  console.error("Seeds can only be run in development mode.")
  process.exit(1)
}

const generateContent = (paragraphs: number) => {
  const content = Array.from({ length: paragraphs }).flatMap(() => [
    { insert: faker.lorem.paragraph() },
    { insert: "\n" }
  ])

  return content
}

const generatePosts = (count: number) =>
  Array.from({ length: count }).map(() => ({
    image_url: faker.image.url(),
    title: faker.lorem.sentence(),
    content: generateContent(faker.number.int({ min: 5, max: 10 })),
    updated_at: faker.date.recent({ days: 30 }),
    created_at: faker.date.recent({ days: 200 })
  }))

const seedPosts = async () => {
  try {
    const posts = generatePosts(20)
    await db.insert(postsTable).values(posts)
    console.log("Seed posts data inserted successfully")
  } catch (err) {
    console.error("Error inserting seed data:", err)
    process.exit(1)
  }
}

seedPosts()
