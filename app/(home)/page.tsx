import { TextLoop, InputText, TextArea, Button } from "@/components"
import { Sidebar } from "./Sidebar"
import { BlogCard } from "./BlogCard"
import { BlogCardMore } from "./BlogCardMore"
import { USER_CONTENT, LINKS, POSTS } from "@/content"
import Image from "next/image"
import Link from "next/link"
import { useId } from "react"

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

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-[14rem_1fr]">
      <Sidebar />
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
                <TextLoop texts={USER_CONTENT.job} />
              </small>
              <h2 className="text-4xl font-bold mb-10">{USER_CONTENT.name}</h2>
            </header>
            {USER_CONTENT.about.map((paragraph, i) => (
              <p
                key={`desc-${i}`}
                className="indent-8 text-neutral-200"
              >
                {paragraph}
              </p>
            ))}
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
            {POSTS.slice(0, 7).map(({ title, content, image_url }) => (
              <BlogCard
                key={`blog-card-${useId()}`}
                title={title}
                content={content}
                imgUrl={image_url}
              />
            ))}
            <Link href="#">
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
            <form className="flex flex-col w-[60ch] gap-5">
              <InputText
                type="email"
                placeholder="E-mail"
              />
              <InputText
                type="text"
                placeholder="Subject"
              />
              <TextArea
                rows={10}
                placeholder="Type your message"
              />
              <Button
                type="submit"
                className="self-end"
              >
                Send message
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
