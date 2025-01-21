"use client"

import { Button, InputText } from "@/components/UI"
import { Popover, QuillEditor } from "@/components/UI/client"
import { IconFileOff, IconHelp } from "@tabler/icons-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useZodForm } from "@/hooks"
import { newPostSchema, NewPostSchema } from "@/schemas/validations"
import { editPost, getPostById } from "@/db/actions/posts"
import toast from "react-hot-toast"
import { useParams, useRouter } from "next/navigation"
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html"
import Quill, { Op } from "quill"
import { usePosts } from "@/contexts/PostsPageContext"

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

export default function EditPostPage() {
  const params = useParams()
  const id = Number(params.id)
  const [isLoading, setIsLoading] = useState(true)

  const [deltaOps, setDeltaOps] = useState<Op[]>([])
  const { setPosts } = usePosts()
  const quillRef = useRef<Quill | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useZodForm({
    schema: newPostSchema
  })

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id)
      if (post) {
        reset({
          image_url: post.image_url,
          title: post.title
        })
      }
      if (quillRef.current && post.content) {
        quillRef.current.setContents(post.content)
        setValue("content", new QuillDeltaToHtmlConverter(post.content).convert())
      }
      setIsLoading(false)
    }

    fetchPost()
  }, [id, reset, setValue])

  const onSubmit = async (data: NewPostSchema) => {
    try {
      setIsLoading(true)
      const deltaData = {
        ...data,
        content: deltaOps
      }

      const editedPost = await editPost(id, deltaData)
      setPosts(oldPosts => {
        if (oldPosts) {
          return oldPosts.map(post => (post.id === editedPost.id ? editedPost : post))
        }
        return oldPosts
      })

      router.push("/dashboard/posts")
      toast.success("Post edited")
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error editing new post:", err)
      }
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  if (isNaN(id)) {
    return (
      <div className="flex flex-col items-center">
        <IconFileOff
          size="10rem"
          stroke={0.5}
        />
        <h1 className="text-xl">Invalid post ID</h1>
      </div>
    )
  }

  return (
    <form
      className="w-full h-full"
      onSubmit={handleSubmit(data => onSubmit(data))}
    >
      <fieldset className="flex flex-col gap-5 w-full [&_h3]:text-lg h-fit">
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
          className="h-[30rem]"
          disabled={isLoading}
          onChange={(delta, html) => {
            setDeltaOps(delta.ops)
            setValue("content", html)
          }}
          editorRef={quillRef}
          error={errors.content?.message}
        />
      </fieldset>
      <fieldset className="flex w-full justify-between mt-20">
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
  )
}
