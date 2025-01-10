import { POSTS } from "@/content"
import Link from "next/link"
import { useId } from "react"
import { BlogCard } from "../BlogCard"
import { InputText } from "@/components"
import { IconSearch, IconX } from "@tabler/icons-react"

export default function Home() {
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
        <div className="m-auto mb-10 max-w-prose">
          <InputText
            type="text"
            icon={IconSearch}
            placeholder="Looking for something specific?"
          />
        </div>
        <p
          className="text-neutral-500 mb-5 flex gap-1 items-center cursor-pointer"
          title="Delete search"
        >
          Showing results for: <span className="text-emerald-500">technology</span>
          <IconX size={16} />
        </p>
      </section>
      <section>
        <div className="flex flex-col lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-10">
          {POSTS.map(({ title, content, image_url }) => (
            <Link
              href="/blog/posts/2"
              key={`blog-card-${useId()}`}
            >
              <BlogCard
                title={title}
                content={content}
                imgUrl={image_url}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
