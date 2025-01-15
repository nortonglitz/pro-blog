"use client"
import { MESSAGES } from "@/content"
import { MessageModal } from "./MessageModal"
import { formatDistanceToNow } from "date-fns"
import { IconMail, IconMailOpened } from "@tabler/icons-react"
import clsx from "clsx"
import { Message } from "@/content"
import { useState } from "react"

export default function Messages() {
  const [message, setMessage] = useState<Message | undefined | null>(undefined)

  return (
    <main className="h-screen overflow-y-auto pt-20 md:pt-10 md:px-10 md:pb-10 flex flex-col items-center">
      <MessageModal
        message={message}
        isOpen={!!message}
        onClose={() => setMessage(null)}
      />
      <header className="px-2 md:px-0 border-b border-neutral-800 pb-2 w-full md:mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Messages</h1>
      </header>
      <div className="w-full flex flex-col">
        {MESSAGES.map(({ from, content, read, receivedOn, subject }, i) => (
          <button
            key={`msg-${from}-${i}`}
            className={clsx(
              read ? "bg-neutral-900 text-neutral-400 outline-white" : "bg-neutral-800",
              "flex gap-4 items-center py-4 px-2 md:px-4 flex-wrap relative",
              "hover:outline hover:scale-[101%] cursor-pointer",
              "[&:not(:last-child)]:border-b [&:not(:last-child)]:border-neutral-700"
            )}
            onClick={() => setMessage({ from, content, read, receivedOn, subject })}
          >
            <span>{read ? <IconMailOpened stroke={1.5} /> : <IconMail stroke={1} />}</span>
            <div className="flex flex-wrap flex-1 justify-between">
              <span className="line-clamp-1 text-left font-semibold flex-1 min-w-60">
                {subject}
              </span>
              <span className="text-sm md:text-base text-left flex-1 min-w-60">{from}</span>
            </div>
            <span className="text-xs lg:text-base absolute lg:static right-2 bottom-1">
              {formatDistanceToNow(receivedOn) + " ago"}
            </span>
          </button>
        ))}
      </div>
    </main>
  )
}
