import { SocialMedia } from "@/components/icons"

export const LINKS = ["About me", "Projects", "Contact"]

type UserContent = {
  name: string
  job: string[]
  socials: Partial<Record<SocialMedia, string>>
  about: string[]
}

export const USER_CONTENT: UserContent = {
  name: "Dwight Dunkley", // 2 names only
  job: ["Data Driven Email Marketing Pro", "Content Marketing Pro"],
  socials: {
    linkedin: "https://www.linkedin.com/in/dwightdunkley/",
    github: "",
    x: ""
  },
  about: [
    "I am an experienced professional in technology and strategic leadership, with a strong background in managing IT systems and business operations. My expertise lies in implementing robust technological solutions, optimizing processes, and aligning business objectives with digital strategies. With a results-driven and innovative approach, I excel at leading teams, driving digital transformations, and consistently delivering value to organizations. I am committed to operational excellence and continuous growth, always seeking opportunities to make a meaningful impact."
  ]
}
