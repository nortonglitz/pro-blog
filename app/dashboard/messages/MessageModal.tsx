import { Button } from "@/components/UI"
import { Message } from "@/content"
import { IconX } from "@tabler/icons-react"
import { formatDistanceToNow } from "date-fns"

type MessageModalProps = {
  message?: Message | null
  isOpen?: boolean
  onClose?: () => void
}

export const MessageModal = ({ message, isOpen, onClose }: MessageModalProps) => {
  if (!isOpen || !message) return null

  console.log(message)
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-30 bg-black/60 backdrop-blur-sm">
      <article className="bg-neutral-900 p-4 flex flex-col border-neutral-800 border">
        <header className="border-b border-neutral-600 pb-2 flex justify-between gap-10 items-center">
          <h1 className="text-xl">{message.subject}</h1>
          <Button
            onClick={() => onClose?.()}
            variant="ghost"
            className="w-fit self-end"
          >
            <IconX />
          </Button>
        </header>
        <div className="flex justify-between items-baseline gap-10 mt-2 text-neutral-400 mb-4">
          <p>{message.from}</p>
          <p className="text-sm">{formatDistanceToNow(message.receivedOn) + " ago"}</p>
        </div>
        <p className="mt-2 p-4 bg-neutral-800 text-justify max-w-prose">{message.content}</p>
      </article>
    </div>
  )
}
