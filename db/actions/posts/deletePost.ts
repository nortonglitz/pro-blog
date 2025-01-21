"use server"

import db from "@/db"
import { postsTable } from "@/schemas/drizzle"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const deletePost = async (id: number) => {
  try {
    const result = await db.delete(postsTable).where(eq(postsTable.id, id))

    return result.rowCount > 0
  } catch (err) {
    console.error("Error deleting post:", err)
    throw new Error("Failed to delete post")
  } finally {
    revalidatePath("/")
    revalidatePath("/blog")
  }
}
