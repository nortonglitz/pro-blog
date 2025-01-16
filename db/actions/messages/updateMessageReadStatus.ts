"use server"

import db from "@/db"
import { messagesTable } from "@/schemas/drizzle"
import { eq } from "drizzle-orm"

export const updateMessageReadStatus = async (id: number, read: boolean) => {
  try {
    const updated = await db
      .update(messagesTable)
      .set({ read })
      .where(eq(messagesTable.id, id))
      .returning()

    if (updated.length === 0) {
      throw new Error(`Message with ID ${id} not found.`)
    }

    return updated[0]
  } catch (err) {
    console.error("Error updating message read status:", err)
    throw new Error("Failed to update message read status.")
  }
}
