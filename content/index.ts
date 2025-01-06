import { SocialMedia } from "@/components/icons"

type UserContent = {
  name: string
  socials: Partial<Record<SocialMedia, string>>
}

export const USER_CONTENT: UserContent = {
  name: "Dwight Dunkley", // 2 names only
  socials: {
    linkedin: "https://www.linkedin.com/in/dwightdunkley/",
    github: "",
    x: ""
  }
}
