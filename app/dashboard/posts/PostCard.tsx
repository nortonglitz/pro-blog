"use client"

import { Button } from "@/components/UI"
import { IconTrash, IconEdit } from "@tabler/icons-react"
import clsx from "clsx"
import { useState } from "react"
import { Post } from "@/db/types"
import { format } from "date-fns"
import { deletePost } from "@/db/actions/posts"
import { usePosts } from "@/contexts/PostsPageContext"
import Link from "next/link"
import { extractTextFromDeltaOps } from "@/libs/quill"

type DeleteModalProps = {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

const DeleteModal = ({ isOpen, onClose, onDelete }: DeleteModalProps) => (
  <div
    className={clsx(
      "absolute inset-0 left-0 right-0 top-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center",
      isOpen ? "flex" : "hidden"
    )}
    role="dialog"
    aria-modal="true"
  >
    <section>
      <h4 className="text-lg font-semibold">Are you sure you want to delete this post?</h4>
      <p className="text-center">This action can not be undone</p>
      <div className="flex items-center gap-5 w-full justify-center mt-10">
        <Button onClick={onClose}>Keep post</Button>
        <Button
          color="error"
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </section>
  </div>
)

type PostCardProps = {
  data: Post
}

export const PostCard = ({ data }: PostCardProps) => {
  const { setPosts } = usePosts()
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  if (!data) return null

  const text = extractTextFromDeltaOps(data.content)

  const handleDeletePost = (id: number) => {
    deletePost(id)
    setPosts(posts => posts?.filter(post => post.id !== id))
  }

  return (
    <article className="overflow-hidden transition flex h-96 xl:h-48 hover:bg-neutral-900 border border-neutral-800 group relative flex-wrap xl:flex-nowrap">
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onDelete={() => handleDeletePost(data.id)}
      />
      <figure className="relative w-full h-48 xl:w-52 flex-shrink-0 overflow-hidden">
        <Link
          href={`/blog/posts/${data.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            className="object-cover w-full h-full hover:scale-110 transition duration-300"
            src={data.image_url}
            alt={`${data.title}`}
          />
        </Link>
      </figure>
      <section className="px-5 py-2 flex flex-col justify-between w-full">
        <div>
          <header className="flex justify-between gap-5 mb-2">
            <h3 className="text-lg font-semibold line-clamp-1">{data.title}</h3>
            <menu
              className="
                flex
                flex-nowrap
                gap-5
                absolute
                top-0
                right-0
                bg-black/90
                p-2
                
                md:static
                md:invisible
                md:group-hover:visible
                md:bg-transparent
                md:p-0"
            >
              <Button
                variant="ghost"
                color="error"
                onClick={() => setOpenDeleteModal(true)}
              >
                <IconTrash stroke={1.5} />
              </Button>
              <Link href={`/dashboard/posts/${data.id}/edit`}>
                <Button
                  variant="ghost"
                  color="primary"
                >
                  <IconEdit stroke={1.5} />
                </Button>
              </Link>
            </menu>
          </header>
          <p className="line-clamp-4 text-justify text-neutral-500">{text}</p>
        </div>
        <footer className="self-end text-sm text-neutral-500">
          {format(data.created_at, "MM-dd-yyyy")}
        </footer>
      </section>
    </article>
  )
}
