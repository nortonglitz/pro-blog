import { z } from "zod"

export const personalInfoSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  jobs: z
    .array(z.string().trim().min(1, "Job is required"))
    .min(1, "At least one job is required")
    .max(4, "Jobs amount must be between 1 and 4."),
  socialMedias: z
    .record(z.string().trim().url("Invalid URL"))
    .refine(obj => Object.keys(obj).length <= 3, "You can select up to 3 social media links"),
  about: z
    .string()
    .min(450, "About must have between 450 and 550 characters")
    .max(550, "About must have between 450 and 550 characters"),
  newURL: z.string().trim().url("Invalid URL").optional()
})

export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>
