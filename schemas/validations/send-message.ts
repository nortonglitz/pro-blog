import { z } from "zod"

export const sendMessageSchema = z.object({
  from: z.string().trim().email(),
  subject: z.string().trim().min(1, "Subject is required"),
  content: z.string().trim().min(1, "Content is required")
})

export type SendMessageSchema = z.infer<typeof sendMessageSchema>
