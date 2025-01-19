import { IconProps } from "@tabler/icons-react"
import clsx from "clsx"

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.FC<IconProps>
  error?: string
}

const baseStyles = "w-full bg-neutral-900 border border-neutral-800 px-2 py-1"
const focusStyles = "focus:outline focus:outline-emerald-500"
const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed"

export const InputText = ({
  className,
  type = "text",
  icon: Icon,
  error,
  ...props
}: InputTextProps) => (
  <div className="relative w-full [&:focus-within_svg]:text-emerald-500">
    <input
      className={clsx(Icon && "pr-10", baseStyles, focusStyles, disabledStyles, className)}
      type={type}
      {...props}
    />
    {Icon && (
      <div className="flex items-center absolute top-0 bottom-0 right-0 px-2 cursor-pointer">
        <Icon
          stroke={1}
          className="text-neutral-600"
        />
      </div>
    )}
    {error && <p className="text-sm mt-0.5 text-red-600">{error}</p>}
  </div>
)
