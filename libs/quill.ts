import { Op } from "quill"

export const extractTextFromDeltaOps = (ops: Op[]): string => {
  return ops
    .map(op => {
      if (typeof op.insert === "string") {
        return op.insert // Extrai o texto
      }
      return "" // Ignora operações que não são texto
    })
    .join("") // Junta os textos extraídos em uma única string
}
