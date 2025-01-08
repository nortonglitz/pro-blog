type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = ({ className, ...props }: TextAreaProps) => (
  <textarea
    className="
      bg-neutral-900
      border
      border-neutral-800
      focus:outline
      focus:outline-emerald-500
      px-2
      py-1
      resize-none
    "
    {...props}
  />
)
