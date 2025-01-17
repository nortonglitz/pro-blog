import { PostsPageProvider } from "@/contexts/PostsPageContext"

export default function PostsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PostsPageProvider>{children}</PostsPageProvider>
}
