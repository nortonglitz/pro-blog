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
    <main className="h-screen overflow-y-auto px-10 py-10 flex flex-col items-center">
      <MessageModal
        message={message}
        isOpen={!!message}
        onClose={() => setMessage(null)}
      />
      <header className="border-b border-neutral-800 pb-2 w-full mb-10">
        <h1 className="text-xl font-semibold tracking-wide uppercase">Messages</h1>
      </header>
      <div className="w-full">
        <table className="w-full">
          <tbody>
            {MESSAGES.map(({ from, content, read, receivedOn, subject }, i) => (
              <tr
                key={`msg-${from}-${i}`}
                className={clsx(
                  read ? "bg-neutral-900 text-neutral-400 outline-white" : "bg-neutral-800",
                  "[&_td]:py-4 hover:outline cursor-pointer hover:scale-[101%] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-neutral-700"
                )}
                onClick={() => setMessage({ from, content, read, receivedOn, subject })}
              >
                <td className="pl-4">
                  {read ? <IconMailOpened stroke={1.5} /> : <IconMail stroke={1} />}
                </td>
                <td className="truncate text-ellipsis max-w-full font-semibold">{subject}</td>
                <td>{from}</td>
                <td className="pr-4">{formatDistanceToNow(receivedOn) + " ago"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
