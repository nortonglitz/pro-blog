import { PostsPageProvider } from "@/contexts/PostsPageContext"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Posts | Dashboard"
}

export default function PostsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PostsPageProvider>{children}</PostsPageProvider>
}
