"use server"

import db from "@/db"
import { postsTable } from "@/schemas/drizzle"
import { eq } from "drizzle-orm"
import { NewPost } from "@/db/types"

export const editPost = async (id: number, updatedPost: NewPost) => {
  try {
    const result = await db
      .update(postsTable)
      .set({
        title: updatedPost.title,
        content: updatedPost.content,
        image_url: updatedPost.image_url
      })
      .where(eq(postsTable.id, id))
      .returning()

    if (result.length === 0) {
      throw new Error("Post not found or update failed")
    }

    return result[0]
  } catch (err) {
    console.error("Error editing post:", err)
    throw new Error("Failed to edit post")
  }
}
