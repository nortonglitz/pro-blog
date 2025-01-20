import Image from "next/image"

import { getPostById } from "@/db/actions/posts"
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html"

type PostProps = {
  params: Promise<{ id: string }>
}

export default async function Post({ params }: PostProps) {
  const id = (await params).id
  const post = await getPostById(Number(id))
  return (
    <main className="flex flex-col h-screen overflow-y-auto px-2 md:px-5">
      <header>
        <figure className="relative h-96 m-auto border-b-emerald-500 max-w-4xl border-b-2">
          <img
            className="object-cover h-full w-full"
            src={post.image_url}
            alt="post image"
          />
          <figcaption className="absolute bottom-0 right-0 left-0 bg-neutral-950/90 py-5">
            <h1 className="text-4xl text-center">{post.title}</h1>
          </figcaption>
        </figure>
      </header>
      <article
        className="text-lg mt-4 text-justify self-center max-w-prose"
        dangerouslySetInnerHTML={{
          __html: new QuillDeltaToHtmlConverter(post.content).convert()
        }}
      />
    </main>
  )
}
