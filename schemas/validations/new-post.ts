import { z } from "zod"

export const newPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(100, "Title must have less than 100 characters"),
  content: z.string().min(1, "Content is required"),
  image_url: z.string().trim().url("Invalid URL")
})

export type NewPostSchema = z.infer<typeof newPostSchema>
