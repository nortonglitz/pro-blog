import Link from "next/link"
import { BlogCard } from "../BlogCard"
import { InputText } from "@/components"
import { IconSearch, IconX } from "@tabler/icons-react"
import { getPosts } from "@/db/actions/posts"
import { extractTextFromDeltaOps } from "@/libs/quill"

export default async function Home() {
  const posts = await getPosts(20)

  return (
    <main className="px-2 md:px-5 h-screen overflow-y-auto py-20">
      <h1
        className="
          text-4xl
          font-bold
          pb-10
          uppercase
          tracking-wider
          underline-offset-8
          decoration-[2px]
          underline
          decoration-emerald-500
        "
      >
        Blog
      </h1>
      <section>
        <div className="flex flex-col lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-10">
          {posts.map(({ id, title, content, image_url }) => (
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
        </div>
      </section>
    </main>
  )
}
