"use server"

import db from "@/db"
import { messagesTable } from "@/schemas/drizzle"
import { desc } from "drizzle-orm"

export const getMessages = async () => {
  try {
    const messages = await db
      .select()
      .from(messagesTable)
      .orderBy(desc(messagesTable.created_at))
      .limit(20)

    return messages || null
  } catch (err) {
    console.error("Error fetching messages:", err)
    throw new Error("Failed to fetch messages")
  }
}
