import { Button } from "@/components/UI"
import { PostCard } from "./PostCard"
import { POSTS } from "@/content"
import { IconPlus } from "@tabler/icons-react"
import Link from "next/link"

export default function Posts() {
  return (
    <main className="h-screen overflow-y-auto px-10 py-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Posts</h1>
      </header>
      <section>
        <Link href="posts/new">
          <Button
            size="large"
            className="text-xl mb-10 flex items-center gap-5 font-semibold"
          >
            Create new post
            <IconPlus stroke={2.5} />
          </Button>
        </Link>
      </section>
      <section className="grid grid-cols-2 w-full gap-5">
        {POSTS.map(post => (
          <PostCard
            post={post}
            key={`card-${post.title}`}
          />
        ))}
      </section>
    </main>
  )
}
