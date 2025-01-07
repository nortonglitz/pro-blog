import { ButtonLink, Sidebar } from "@/components"
import { USER_CONTENT } from "@/content"
import Image from "next/image"
import { TextLoop } from "@/components"
import { LINKS } from "@/content"

const linksId = LINKS.map(title => title.replace(" ", "-").toLocaleLowerCase())

export default function Home() {
  return (
    <div className="grid grid-cols-[14rem_1fr]">
      <Sidebar />
      <main className="flex-1 h-screen overflow-auto mt-20">
        <section
          id={linksId[0]}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-40
            bg-contain
            bg-no-repeat
            bg-bottom
            bg-[url('/backgrounds/wave.svg')]
          "
        >
          <div className="text-justify max-w-prose">
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
            <ButtonLink
              href={`#${linksId[linksId.length - 1]}`}
              className="mt-10"
            >
              Contact me
            </ButtonLink>
          </div>
          <Image
            className="h-auto w-64"
            src="/personal.png"
            width={1141}
            height={2177}
            alt="personal picture"
          />
        </section>
        <section
          id={linksId[1]}
          className="
            flex
            items-center
            justify-center
            gap-40
            bg-contain
            bg-no-repeat
            bg-top
            bg-[url('/backgrounds/wave-2.svg')]
          "
        >
          <header>
            <h2 className="text-4xl font-bold mb-10">{LINKS[1]}</h2>
          </header>
        </section>
      </main>
    </div>
  )
}
