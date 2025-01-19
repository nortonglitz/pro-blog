"use server"

import db from "@/db"
import { desc } from "drizzle-orm"
import { metaDescriptionTable } from "@/schemas/drizzle"

export const getMetaDescription = async () => {
  try {
    const metaDescription = await db
      .select()
      .from(metaDescriptionTable)
      .orderBy(desc(metaDescriptionTable.id))
      .limit(1)
    return metaDescription[0] || null
  } catch (err) {
    console.error("Error fetching meta description:", err)
    throw new Error("Failed to fetch meta description")
  }
}
