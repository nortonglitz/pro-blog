import clsx from "clsx"

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
}

const baseStyles = "w-full h-full bg-neutral-900 border border-neutral-800 px-2 py-1 resize-none"
const focusStyles = "focus:outline focus:outline-emerald-500"
const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed"

export const TextArea = ({ className, error, ...props }: TextAreaProps) => (
  <div className="h-full w-full">
    <textarea
      className={clsx(baseStyles, focusStyles, disabledStyles, className)}
      {...props}
    />
    {error && <p className="text-sm mt-0.5 text-red-600">{error}</p>}
  </div>
)
