import { IconFileOff } from "@tabler/icons-react"
import { PostCard } from "./PostCard"
import { Post } from "@/db/types"

type PostsListProps = {
  data: Post[] | null
}

export const PostsList = ({ data }: PostsListProps) => {
  if (data === null) {
    return (
      <section className="flex flex-col items-center text-neutral-400 mt-10 md:mt-0">
        <IconFileOff
          size="10rem"
          stroke={0.5}
        />
        <h3 className="text-xl">No posts yet</h3>
      </section>
    )
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 w-full gap-5">
      {data.map(post => (
        <PostCard
          data={post}
          key={`card-${post.title}`}
        />
      ))}
    </section>
  )
}
