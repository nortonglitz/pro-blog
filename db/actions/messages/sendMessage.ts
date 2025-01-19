"use server"

import db from "@/db"
import { messagesTable } from "@/schemas/drizzle"
import { NewMessage } from "@/db/types"

export const sendMessage = async (message: NewMessage) => {
  try {
    const result = await db.insert(messagesTable).values(message).returning()

    return result[0] || null
  } catch (err) {
    console.error("Error sending message:", err)
    throw new Error("Failed to send message")
  }
}
