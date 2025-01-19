"use client"

import clsx from "clsx"
import "quill/dist/quill.snow.css"
import "./styles.css"
import { RefObject, useEffect, useRef } from "react"
import Quill, { Delta } from "quill"

interface QuillTestProps {
  disabled?: boolean
  className?: string
  error?: string
  onChange?: (delta: Delta, html: string) => void
  editorRef?: RefObject<Quill | null>
}

export const QuillEditor = ({
  disabled,
  className,
  error,
  onChange,
  editorRef
}: QuillTestProps) => {
  const editorContainerRef = useRef<HTMLDivElement | null>(null)
  const quillInstance = useRef<Quill | null>(null)

  useEffect(() => {
    const initializeQuill = async () => {
      if (!editorContainerRef.current) return

      const Quill = (await import("quill")).default
      const quill = new Quill(editorContainerRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // Formatação
            [{ header: [1, 2, 3, false] }], // Títulos
            [{ list: "ordered" }, { list: "bullet" }], // Listas
            ["link"], // Links
            ["clean"] // Limpar formatação
          ]
        }
      })

      quill.on("text-change", delta => {
        if (onChange) {
          onChange(delta, quill.getSemanticHTML())
        }
      })

      quillInstance.current = quill
      if (editorRef) {
        editorRef.current = quill
      }
    }

    if (!quillInstance.current) {
      initializeQuill()
    }

    return () => {
      quillInstance.current?.off("text-change")
    }
  }, [editorContainerRef])

  useEffect(() => {
    if (!quillInstance.current) return
    if (disabled) {
      quillInstance.current.disable()
    } else {
      quillInstance.current.enable()
    }
  }, [disabled])

  return (
    <div
      className={clsx(
        "h-full w-full mb-[44px]",
        className,
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div ref={editorContainerRef} />
      {error && <p className="text-sm mt-0.5 text-red-600">{error}</p>}
    </div>
  )
}
