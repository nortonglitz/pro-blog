"use client"
import { IconFilePlus } from "@tabler/icons-react"
import { BlogCardMore } from "../BlogCardMore"
import { BlogCard } from "../BlogCard"
import { useRef, useState } from "react"
import { getPosts } from "@/db/actions/posts"
import { Post } from "@/db/types"
import { extractTextFromDeltaOps } from "@/libs/quill"
import Link from "next/link"

export const MorePosts = () => {
  const [posts, setPosts] = useState<Post[] | undefined | null>(undefined)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const offset = useRef(1)

  const handleMoreClick = async () => {
    try {
      setIsLoading(true)
      const newPosts = await getPosts(10, 10 * offset.current)
      if (newPosts.length < 10 || newPosts === null) {
        setHasMore(false)
      }

      if (newPosts.length > 0) {
        setPosts(oldPosts => [...(oldPosts || []), ...newPosts])
      }
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to fetch new posts")
      }
    } finally {
      setIsLoading(false)
    }

    offset.current = offset.current + 1
  }

  return (
    <>
      {posts &&
        posts.map(({ id, title, content, image_url }) => (
          <Link
            href={`/blog/posts/${id}`}
            key={`blog-card-${id}`}
          >
            <BlogCard
              title={title}
              content={extractTextFromDeltaOps(content)}
              imgUrl={image_url}
            />
          </Link>
        ))}
      {hasMore && (
        <BlogCardMore
          loading={isLoading}
          title="Load more"
          onClick={handleMoreClick}
          icon={IconFilePlus}
        />
      )}
    </>
  )
}
