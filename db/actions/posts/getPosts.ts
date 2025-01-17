"use server"

import db from "@/db"
import { postsTable } from "@/schemas/drizzle"
import { desc } from "drizzle-orm"

export const getPosts = async () => {
  try {
    const posts = await db.select().from(postsTable).orderBy(desc(postsTable.created_at)).limit(20)

    return posts || null
  } catch (err) {
    console.error("Error fetching posts:", err)
    throw new Error("Failed to fetch posts")
  }
}
