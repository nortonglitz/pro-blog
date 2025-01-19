import { TextLoop, InputText, TextArea, Button } from "@/components"
import { BlogCard } from "./BlogCard"
import { BlogCardMore } from "./BlogCardMore"
import { LINKS } from "@/content"
import Image from "next/image"
import Link from "next/link"
import { getPosts } from "@/db/actions/posts"
import { extractTextFromDeltaOps } from "@/libs/quill"
import { getUserInfo } from "@/db/actions/user-info"
import { Form } from "./Form"

const linksId = LINKS.map(title => title.replace(" ", "-").toLocaleLowerCase())

const Title = ({ text }: { text: string }) => (
  <h2
    className="
      text-4xl
      font-bold
      mb-10
      uppercase
      tracking-wider
      underline-offset-8
      decoration-[2px]
      underline
      decoration-emerald-500
    "
  >
    {text}
  </h2>
)

export default async function Home() {
  const posts = await getPosts(7)
  const userInfo = await getUserInfo()
  return (
    <main
      className="
          flex-1
          flex
          flex-col
          h-screen
          overflow-auto

          [&>section]:pt-20
          [&>section]:md:px-10
          [&>section]:px-2
          [&>section:last-child]:pb-20
        "
    >
      <section
        id={linksId[0]}
        className="
            flex
            flex-wrap
            w-full
            items-center
            justify-center
            gap-10
            xl:gap-20
            2xl:gap-40
            bg-contain
            bg-no-repeat
            bg-bottom
            bg-[url('/backgrounds/wave.svg')]
          "
      >
        <div className="text-justify max-w-prose md:min-w-[40ch] min-w-full flex-1">
          <header>
            <small className="uppercase text-emerald-500">
              <TextLoop texts={userInfo.jobs} />
            </small>
            <h2 className="text-4xl font-bold mb-10">{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
          </header>
          <p className="indent-8 text-neutral-200">{userInfo.about}</p>
          <Link href={`#${linksId[linksId.length - 1]}`}>
            <Button className="mt-10">Contact me</Button>
          </Link>
        </div>
        <Image
          className="h-auto w-64 border border-emerald-950 bg-white/5"
          src="/personal.png"
          width={1141}
          height={2177}
          priority
          alt="personal picture"
        />
      </section>
      <section
        id={linksId[1]}
        className="
            bg-contain
            bg-no-repeat
            bg-top
            bg-[url('/backgrounds/wave-2.svg')]
          "
      >
        <header>
          <Title text={LINKS[1]} />
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10">
          {posts.map(({ title, content, id, image_url }) => (
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
          <Link href="/blog">
            <BlogCardMore />
          </Link>
        </div>
      </section>
      <section
        className="
            bg-contain
            bg-no-repeat
            bg-bottom
            bg-[url('/backgrounds/wave.svg')]"
        id={linksId[linksId.length - 1]}
      >
        <header>
          <Title text={LINKS[LINKS.length - 1]} />
        </header>
        <div className="flex justify-center">
          <Form />
        </div>
      </section>
    </main>
  )
}
