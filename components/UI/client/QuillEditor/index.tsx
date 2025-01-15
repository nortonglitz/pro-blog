"use client"

import { useEffect, useRef } from "react"
import "quill/dist/quill.snow.css"
import "./styles.css"
import clsx from "clsx"

interface QuillEditorProps {
  value: string
  onChange: (content: string) => void
  editorRef?: (quill: any) => void // Passa a instância do editor para o pai
  className?: string
}

export const QuillEditor = ({ value, onChange, editorRef, className }: QuillEditorProps) => {
  const editorContainerRef = useRef<HTMLDivElement | null>(null) // Contêiner do editor
  const quillInstance = useRef<any | null>(null) // Instância do Quill

  // Inicialização do Quill
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
            ["link"], // Links
            ["clean"] // Limpar formatação
          ]
        }
      })

      quillInstance.current.on("text-change", () => {
        const content = quillInstance.current?.root.innerHTML || ""
        onChange(content)
      })

      // Passa a instância do Quill para o pai, se fornecido
      if (editorRef) {
        editorRef(quillInstance.current)
      }
    }

    initializeQuill()

    return () => {
      // Limpeza na desmontagem
      quillInstance.current?.off("text-change")
      quillInstance.current = null
    }
  }, []) // Executa apenas na montagem

  // Atualiza o valor do editor quando `value` mudar
  useEffect(() => {
    if (quillInstance.current && value !== quillInstance.current.root.innerHTML) {
      quillInstance.current.root.innerHTML = value
    }
  }, [value])

  return (
    <div className={clsx("h-full w-full mb-[44px]", className)}>
      <div ref={editorContainerRef} />
    </div>
  )
}
