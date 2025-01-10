import { BlogNavigation } from "./BlogNavigation"

export default function BlogLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="xl:grid xl:grid-cols-[1fr_30ch]">
        {children}
        <BlogNavigation />
      </div>
    </>
  )
}
