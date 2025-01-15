import { z } from "zod"

export const siteOptionsSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(60, "Title must have less than 60 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(160, "Description must have less than 160 characters")
})

export type SiteOptionsSchema = z.infer<typeof siteOptionsSchema>
