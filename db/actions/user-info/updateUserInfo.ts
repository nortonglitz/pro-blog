"use server"

import db from "@/db"
import { eq } from "drizzle-orm"
import { userInfoTable } from "@/schemas/drizzle"
import { NewUserInfo } from "@/db/types"
import { userInfoSchema } from "@/schemas/validations"

export const updateUserInfo = async (data: NewUserInfo) => {
  try {
    const { newURL: _, ...validatedData } = userInfoSchema.parse(data)

    const existing = await db.select().from(userInfoTable).limit(1)

    if (existing.length > 0) {
      const updated = await db
        .update(userInfoTable)
        .set(validatedData)
        .where(eq(userInfoTable.id, existing[0].id))
        .returning()

      return updated[0]
    } else {
      const inserted = await db.insert(userInfoTable).values(validatedData).returning()

      return inserted[0]
    }
  } catch (err) {
    console.error("Error saving user info:", err)
    throw new Error("Failed to save user info")
  }
}
