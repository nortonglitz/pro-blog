import { SocialMedia } from "@/components/icons"

export const LINKS = ["About me", "Blog", "Contact"]

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

export type Post = {
  title: string
  content: string
  image_url: string
}

export const POSTS: Post[] = [
  {
    title: "Top Technology Trends for 2025",
    content:
      "Discover the technologies shaping the future, from artificial intelligence to quantum computing.",
    image_url: "/posts/technology-trends-2025.webp"
  },
  {
    title: "How Artificial Intelligence Is Transforming Businesses",
    content:
      "Learn how companies are using AI to automate processes, personalize experiences, and boost productivity.",
    image_url: "/posts/artificial-intelligence.webp"
  },
  {
    title: "Best Gadgets to Boost Your Productivity in 2025",
    content: "Check out a list of gadgets that can help you work more efficiently.",
    image_url: "/posts/best-gadgets-2025.webp"
  },
  {
    title: "Blockchain: Beyond Cryptocurrencies",
    content:
      "Explore how blockchain technology is being used in areas like healthcare, logistics, and security.",
    image_url: "/posts/blockchain-cryptocurrencies.webp"
  },
  {
    title: "5 Web Development Tools You Need to Know",
    content:
      "Discover tools that are making life easier for web developers and streamlining projects.",
    image_url: "/posts/5-web-dev-tools.webp"
  },
  {
    title: "Augmented Reality: A New Way to Interact with the World",
    content: "Learn how AR is transforming fields like education, entertainment, and e-commerce.",
    image_url: "/posts/augmented-reality.webp"
  },
  {
    title: "Cybersecurity in 2025: Key Challenges and Solutions",
    content: "With increasing digital threats, see how to protect your data and your business.",
    image_url: "/posts/cybersecurity-2025.webp"
  },
  {
    title: "The Role of Cloud Computing in the Corporate World",
    content:
      "Discover how cloud computing is transforming the way businesses store and access data.",
    image_url: "/posts/cloud-computing-corporate-world.webp"
  },
  {
    title: "5 Programming Languages in High Demand for 2025",
    content: "Learn which programming languages are most in demand in the job market and why.",
    image_url: "/posts/programming-languages-2025.webp"
  },
  {
    title: "Technology and Sustainability: Innovations for a Better Future",
    content: "Explore how new technologies are helping create a more sustainable world.",
    image_url: "/posts/tech-sustain-future.webp"
  }
]

export type Message = (typeof MESSAGES)[0]

export const MESSAGES = [
  {
    from: "gabriel14@gregory-morales.com",
    receivedOn: "2025-01-03 09:12:31",
    subject: "Throughout difference paper beautiful seem.",
    read: false,
    content: "That tax almost page instead."
  },
  {
    from: "stephanie93@harris-hahn.com",
    receivedOn: "2025-01-01 17:34:28",
    subject: "Common court manage degree daughter language.",
    read: false,
    content:
      "Cut shake place dark phone amount close. Kid tough director drop some job task cup. Professor change cover ahead."
  },
  {
    from: "rosemcintyre@hotmail.com",
    receivedOn: "2025-01-08 17:41:06",
    subject: "Consumer law base with media seem third.",
    read: true,
    content:
      "Grow inside newspaper husband wind indicate. Act grow rather south prove evening. Front lay early wind oil point."
  },
  {
    from: "joneschristina@yahoo.com",
    receivedOn: "2025-01-08 20:34:22",
    subject: "Product a imagine worker.",
    read: false,
    content:
      "Amount organization center red fish political about. Worker fill ten morning firm since share. Central dark fund."
  },
  {
    from: "nguyenbrian@yahoo.com",
    receivedOn: "2025-01-09 04:36:53",
    subject: "Event boy medical over crime they.",
    read: false,
    content:
      "Wide back late. Week heart score until relationship grow. System tend describe walk series."
  },
  {
    from: "zcervantes@gmail.com",
    receivedOn: "2025-01-05 08:22:33",
    subject: "Somebody sound heavy eat.",
    read: true,
    content: "Meet policy player skill college during capital."
  },
  {
    from: "sanchezcristina@martinez.com",
    receivedOn: "2025-01-03 21:47:29",
    subject: "Impact everybody trade tree expert quite.",
    read: false,
    content: "On pick member determine defense. Region heavy should purpose need."
  },
  {
    from: "ythomas@underwood.com",
    receivedOn: "2025-01-11 13:38:27",
    subject: "Before foreign feeling fund interesting.",
    read: true,
    content:
      "Two page for democratic study media once. Your bank table including away southern if. Fight quite red position."
  },
  {
    from: "johnwhite@marquez.com",
    receivedOn: "2025-01-09 11:12:04",
    subject: "Have shoulder street project human.",
    read: true,
    content:
      "Free plant step evening ten line. Significant painting role challenge why while. Career figure central he."
  },
  {
    from: "bcarlson@davis.com",
    receivedOn: "2025-01-04 18:57:09",
    subject: "Picture article study that wall same.",
    read: true,
    content:
      "Ball story from case tonight. Interview here with recent. It break study different street interview part fund."
  }
]
