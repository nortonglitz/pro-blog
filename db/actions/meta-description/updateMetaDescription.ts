"use server"

import db from "@/db"
import { eq } from "drizzle-orm"
import { metaDescriptionTable } from "@/schemas/drizzle"
import { metaFormSchema } from "@/schemas/validations"
import { NewMetaDescription } from "@/db/types"
import { revalidatePath } from "next/cache"

export const updateMetaDescription = async (data: NewMetaDescription) => {
  try {
    const validatedData = metaFormSchema.parse(data)

    const existing = await db.select().from(metaDescriptionTable).limit(1)

    if (existing.length > 0) {
      const updated = await db
        .update(metaDescriptionTable)
        .set(validatedData)
        .where(eq(metaDescriptionTable.id, existing[0].id))
        .returning()

      return updated[0]
    } else {
      const inserted = await db.insert(metaDescriptionTable).values(validatedData).returning()

      return inserted[0]
    }
  } catch (err) {
    console.error("Error updating meta description:", err)
    throw new Error("Failed to update meta description")
  } finally {
    revalidatePath("/")
  }
}
