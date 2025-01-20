import { QuillDeltaToHtmlConverter } from "quill-delta-to-html"
import { Op } from "quill"

type DeltaOpsRendererProps = {
  deltaOps: Op[]
}

export const DeltaOpsRenderer = ({ deltaOps }: DeltaOpsRendererProps) => (
  <div
    className="
      text-lg
      [&_h1]:text-3xl
      [&_h1]:font-bold
      [&_h1]:my-2
      [&_h2]:text-2xl
      [&_h2]:font-bold
      [&_h2]:my-2
      [&_h3]:text-xl
      [&_h3]:font-bold
      [&_h3]:my-2

      [&_ol]:list-inside
      [&_ol]:list-decimal
      [&_ol]:ml-10

      [&_ul]:list-[square]
      [&_ul]:list-inside
      [&_ul]:ml-10

      [&_li]:mt-2

      [&_a]:text-emerald-500
      [&_a:hover]:underline
      [&_a:hover]:text-emerald-300
    "
    dangerouslySetInnerHTML={{ __html: new QuillDeltaToHtmlConverter(deltaOps).convert() }}
  />
)
