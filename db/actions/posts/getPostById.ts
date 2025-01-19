"use server"

import db from "@/db"
import { postsTable } from "@/schemas/drizzle"
import { eq } from "drizzle-orm"

export const getPostById = async (id: number) => {
  try {
    if (!id || typeof id !== "number") {
      throw new Error("Invalid ID provided")
    }

    const posts = await db.select().from(postsTable).where(eq(postsTable.id, id)).limit(1)

    return posts[0] || null
  } catch (err) {
    console.error("Error fetching post:", err)
    throw new Error("Failed to fetch post")
  }
}
