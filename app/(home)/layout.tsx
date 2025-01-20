import { Navigation } from "./Navigation"
import { getMetaDescription } from "@/db/actions/meta-description"

export async function generateMetadata() {
  const metaDescription = await getMetaDescription()
  return {
    title: metaDescription.title,
    description: metaDescription.description
  }
}

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="md:grid md:grid-cols-[14rem_1fr]">
      <Navigation />
      {children}
    </div>
  )
}
