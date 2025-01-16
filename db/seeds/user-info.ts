import "./setup" // Load env

import db from "../"
import { userInfoTable } from "@/schemas/drizzle"
import { faker } from "@faker-js/faker"

if (process.env.NODE_ENV !== "development") {
  console.error("Seeds can only be run in development mode.")
  process.exit(1)
}

const generateUserInfo = () => ({
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  jobs: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() =>
    faker.person.jobTitle()
  ),
  socials: {
    linkedin: faker.internet.url(),
    github: faker.internet.url(),
    x: faker.internet.url()
  },
  about: faker.lorem.paragraphs(2, "\n"),
  updated_at: faker.date.recent({ days: 30 }),
  created_at: faker.date.recent({ days: 200 })
})

const seedUserInfo = async () => {
  try {
    const userInfo = generateUserInfo()
    await db.insert(userInfoTable).values(userInfo)
    console.log("Seed user info data inserted successfully")
  } catch (err) {
    console.error("Error inserting seed data:", err)
    process.exit(1)
  }
}

seedUserInfo()
