import { useMemo } from "react"
import { QuillDelta } from "@/types"

export const useQuillPlainText = (delta: QuillDelta): string => {
  return useMemo(() => {
    if (!delta || !delta.ops) return ""

    return delta.ops
      .map((op: any) => {
        // Verifica se o `insert` é texto e ignora objetos ou conteúdos especiais
        if (typeof op.insert === "string") {
          return op.insert
        }
        return "" // Ignora conteúdos que não são texto
      })
      .join("")
  }, [delta])
}
