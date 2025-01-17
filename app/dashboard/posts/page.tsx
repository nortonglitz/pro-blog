"use client"

import { Button } from "@/components/UI"
import { IconPlus } from "@tabler/icons-react"
import Link from "next/link"
import { useEffect } from "react"
import { getPosts } from "@/db/actions/posts"
import { PostListSkeleton } from "./PostListSkeleton"
import { PostsList } from "./PostsList"
import { usePosts } from "@/contexts/PostsPageContext"

export default function Posts() {
  const { posts, setPosts } = usePosts()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching posts")
        }
        setPosts(null)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="h-screen overflow-y-auto px-2 pt-20 md:pt-10 md:px-10 pb-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Posts</h1>
      </header>
      <section>
        <Link href="posts/new">
          <Button
            size="large"
            className="mb-10 flex items-center gap-5 font-semibold"
          >
            Create new post
            <IconPlus stroke={2.5} />
          </Button>
        </Link>
      </section>
      {typeof posts === "undefined" ? <PostListSkeleton /> : <PostsList data={posts} />}
    </main>
  )
}
