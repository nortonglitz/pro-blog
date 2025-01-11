type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <textarea
      className="
        bg-neutral-900
        border
        border-neutral-700
        px-2
        py-1
        w-full
        resize-none
      "
      {...props}
    />
  )
}
