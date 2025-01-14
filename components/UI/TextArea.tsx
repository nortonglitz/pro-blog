import clsx from "clsx"

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
  resize?: boolean
}

const baseStyles = "border px-2 py-1 w-full bg-neutral-900 "
const standardStyles = "border-neutral-700"
const errorStyles = "border-red-600"

export const TextArea = ({ resize = false, error, ...props }: TextAreaProps) => {
  return (
    <div>
      <textarea
        className={clsx(baseStyles, error ? errorStyles : standardStyles, !resize && "resize-none")}
        {...props}
      />
      {error && <p className="text-sm mt-0.5 text-red-600">{error}</p>}
    </div>
  )
}
