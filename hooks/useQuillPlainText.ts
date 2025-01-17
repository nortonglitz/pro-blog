import { useMemo } from "react"
import { QuillOps } from "@/types"

export const useQuillPlainText = (ops: QuillOps): string => {
  return useMemo(() => {
    if (!ops) return ""

    return ops
      .map((op: any) => {
        // Verifica se o `insert` é texto e ignora objetos ou conteúdos especiais
        if (typeof op.insert === "string") {
          return op.insert
        }
        return "" // Ignora conteúdos que não são texto
      })
      .join("")
  }, [ops])
}
