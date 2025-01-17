"use client"

import { Button, InputText } from "@/components/UI"
import { Popover, QuillEditor } from "@/components/UI/client"
import { IconHelp } from "@tabler/icons-react"
import Link from "next/link"
import { useRef, useState } from "react"
import { useZodForm } from "@/hooks"
import { newPostSchema } from "@/schemas/validations"
import { createPost } from "@/db/actions/posts"
import toast from "react-hot-toast"

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
  const [isLoading, setIsLoading] = useState(false)
  const [deltaOps, setDeltaOps] = useState()
  const quillRef = useRef<any | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useZodForm({
    schema: newPostSchema
  })

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true)
      const deltaData = {
        ...data,
        content: deltaOps
      }
      await createPost(deltaData)
      toast.success("Post created")
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error creating new post:", err)
      }
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="h-screen overflow-y-auto px-2 pt-20 md:pt-10 md:px-10 pb-10 flex flex-col items-center">
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">New post</h1>
      </header>
      <form
        className="w-full h-full"
        onSubmit={handleSubmit(data => onSubmit(data))}
      >
        <fieldset className="flex flex-col gap-5 w-full [&_h3]:text-lg h-4/5">
          <InputLabel
            tip={TIPS.thumbnail}
            title="Thumbnail"
            htmlFor="thumbnail"
          >
            <InputText
              disabled={isLoading}
              placeholder="Image URL"
              id="thumbnail"
              {...register("image_url")}
              error={errors.image_url?.message}
            />
          </InputLabel>
          <InputLabel
            title="Title"
            htmlFor="title"
          >
            <InputText
              disabled={isLoading}
              placeholder="Title"
              id="title"
              {...register("title")}
              error={errors.title?.message}
            />
          </InputLabel>

          <QuillEditor
            disabled={isLoading}
            value={watch("content")}
            onChange={(html, deltaOps) => {
              setValue("content", html)
              setDeltaOps(deltaOps)
            }}
            editorRef={quill => (quillRef.current = quill)}
            error={errors.content?.message}
          />
        </fieldset>
        <fieldset className="flex w-full justify-between mt-10">
          <Link href="/dashboard/posts">
            <Button>Dismiss</Button>
          </Link>
          <Button
            loading={isLoading}
            color="success"
            type="submit"
          >
            Save
          </Button>
        </fieldset>
      </form>
    </main>
  )
}
