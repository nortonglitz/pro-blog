"use client"

import { useEffect, useRef } from "react"
import "quill/dist/quill.snow.css"
import "./styles.css"
import clsx from "clsx"

interface QuillEditorProps {
  value: string // Valor inicial (HTML)
  onChange: (html: string, ops: any) => void // Retorna o HTML e os `ops` (JSON plano)
  editorRef?: (quill: any) => void // Passa a instância do editor para o pai
  className?: string
  error?: string
  disabled?: boolean // Desabilita o editor
}

export const QuillEditor = ({
  value,
  onChange,
  editorRef,
  className,
  error,
  disabled = false
}: QuillEditorProps) => {
  const editorContainerRef = useRef<HTMLDivElement | null>(null) // Ref do contêiner do editor
  const quillInstance = useRef<any | null>(null) // Instância do Quill

  // Inicializa o Quill
  useEffect(() => {
    const initializeQuill = async () => {
      if (!editorContainerRef.current || quillInstance.current) return

      const Quill = (await import("quill")).default

      quillInstance.current = new Quill(editorContainerRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // Formatação
            [{ header: [1, 2, 3, false] }], // Títulos
            [{ list: "ordered" }, { list: "bullet" }], // Listas
            ["link"],
            ["clean"] // Limpar formatação
          ]
        },
        readOnly: disabled
      })

      // Lida com alterações de texto
      quillInstance.current.on("text-change", (delta: any) => {
        if (!disabled) {
          const html = quillInstance.current.root.innerHTML // HTML atual
          const ops = delta.ops // Extrai apenas os `ops` do Delta
          onChange(html, ops) // Passa HTML e `ops` ao pai
        }
      })

      // Passa a instância para o pai (opcional)
      if (editorRef) {
        editorRef(quillInstance.current)
      }

      // Define o valor inicial (apenas no momento da inicialização)
      if (value) {
        quillInstance.current.clipboard.dangerouslyPasteHTML(value)
      }
    }

    initializeQuill()

    return () => {
      quillInstance.current?.off("text-change")
      quillInstance.current = null
    }
  }, [disabled])

  // Atualiza o editor quando `value` mudar
  useEffect(() => {
    if (quillInstance.current) {
      const currentContent = quillInstance.current.root.innerHTML
      if (value !== currentContent) {
        quillInstance.current.clipboard.dangerouslyPasteHTML(value)
      }
    }
  }, [value])

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
