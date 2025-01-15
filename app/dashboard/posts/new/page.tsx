"use client"

import { Button, InputText } from "@/components/UI"
import { Popover, QuillEditor } from "@/components/UI/client"
import { IconHelp } from "@tabler/icons-react"
import Link from "next/link"
import { useRef, useState } from "react"

const TIPS = {
  thumbnail:
    "This image will be used as thumbnail and also to display on post page. Use a free hoster to host your image and copy the direct link here.",
  title: "Don't write it too long."
}

type InputLabelProps = {
  children: React.ReactNode
  htmlFor: string
  title: string
  tip?: string
}

const InputLabel = ({ children, htmlFor, title, tip }: InputLabelProps) => {
  return (
    <label htmlFor={htmlFor}>
      <div className="flex gap-2 mb-0.5 items-center">
        <h3>{title}</h3>
        {tip && (
          <Popover text={tip}>
            <IconHelp
              className="cursor-help text-neutral-600"
              size="1.2rem"
              stroke={2}
            />
          </Popover>
        )}
      </div>
      {children}
    </label>
  )
}

export default function NewPost() {
  const [content, setContent] = useState("")
  const quillRef = useRef<any | null>(null)

  return (
    <main className="h-screen overflow-y-auto px-10 py-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">New post</h1>
      </header>
      <section className="flex flex-col gap-5 w-full [&_h3]:text-lg h-4/5">
        <InputLabel
          tip={TIPS.thumbnail}
          title="Thumbnail"
          htmlFor="thumbnail"
        >
          <InputText
            placeholder="Image URL"
            id="thumbnail"
          />
        </InputLabel>
        <InputLabel
          title="Title"
          htmlFor="title"
        >
          <InputText
            placeholder="Title"
            id="title"
          />
        </InputLabel>

        <QuillEditor
          value={content}
          onChange={setContent}
          editorRef={quill => (quillRef.current = quill)}
        />
      </section>
      <section className="flex w-full justify-between mt-5">
        <Link href="/dashboard/posts">
          <Button>Dismiss</Button>
        </Link>
        <Button color="success">Save</Button>
      </section>
    </main>
  )
}
