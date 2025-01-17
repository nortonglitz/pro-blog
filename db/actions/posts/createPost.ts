"use server"

import db from "@/db"
import { postsTable } from "@/schemas/drizzle"
import { NewPost } from "@/db/types"

export const createPost = async (newPost: NewPost) => {
  try {
    const result = await db
      .insert(postsTable)
      .values({
        title: newPost.title,
        content: newPost.content,
        image_url: newPost.image_url
      })
      .returning()

    return result[0]
  } catch (err) {
    console.error("Error creating post:", err)
    throw new Error("Failed to create post")
  }
}
