export type QuillOps = Array<{
  insert?: string | object
  attributres?: {
    bold?: boolean
    italic?: boolean
    underline?: boolean
  }
  delete?: number
  retain?: number
}>
