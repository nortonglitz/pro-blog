import { InputText } from "@/components"
import { IconSearch } from "@tabler/icons-react"
import { getPosts } from "@/db/actions/posts"
import Link from "next/link"

export const BlogNavigation = async () => {
  const posts = await getPosts(5)

  return (
    <aside className="py-10 pl-10 pr-5 gap-5 flex flex-col justify-center">
      <section>
        <InputText
          type="text"
          icon={IconSearch}
          placeholder="Search"
        />
      </section>
      <section>
        <header>
          <h4 className="text-lg underline underline-offset-4 font-semibold decoration-emerald-500 mb-3 tracking-wider">
            Latest posts
          </h4>
        </header>
        <ul className="list-[square] [&_li]:mt-5">
          {posts.map(({ title, id }) => (
            <li
              key={`post-${id}`}
              className="marker:text-emerald-900 hover:marker:text-emerald-500"
            >
              <Link href={`/blog/posts/${id}`}>
                <p
                  className="
                    transition-all
                    duration-300
                    text-neutral-400
                    line-clamp-2

                    hover:underline
                    hover:underline-offset-4
                    hover:cursor-pointer
                    hover:text-white
                "
                >
                  {title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
