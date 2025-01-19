"use client"

import React, { useEffect, useRef } from "react"
import Quill from "quill"

interface QuillDeltaRendererProps {
  delta: any // O Delta do Quill que será convertido
}

const QuillDeltaRenderer: React.FC<QuillDeltaRendererProps> = ({ delta }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<Quill | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Cria uma única instância do Quill (se ainda não existir)
    if (!quillRef.current) {
      quillRef.current = new Quill(containerRef.current, {
        theme: "snow", // Tema básico; ajuste se necessário
        readOnly: true, // Configura como apenas leitura
        modules: { toolbar: false } // Remove a toolbar
      })
    }

    // Define o conteúdo do Quill usando o Delta
    quillRef.current.setContents(delta)
  }, [delta]) // Atualiza o conteúdo somente quando o delta muda

  return (
    <div>
      {/* Contêiner onde o Quill renderizará o conteúdo */}
      <div ref={containerRef} />
    </div>
  )
}

export default QuillDeltaRenderer
