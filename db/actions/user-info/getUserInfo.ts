"use server"

import db from "@/db"
import { desc } from "drizzle-orm"
import { userInfoTable } from "@/schemas/drizzle"

export const getUserInfo = async () => {
  try {
    const userInfo = await db.select().from(userInfoTable).orderBy(desc(userInfoTable.id)).limit(1)
    return userInfo[0] || null
  } catch (err) {
    console.error("Error fetching user info:", err)
    throw new Error("Failed to fetch user info")
  }
}
