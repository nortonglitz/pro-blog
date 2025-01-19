import { useMemo } from "react"
import { Op } from "quill"

export const useQuillPlainText = (ops: Op[]): string => {
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
