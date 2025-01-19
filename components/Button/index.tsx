import { Spinner } from "../UI"
import clsx from "clsx"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

const baseStyles = "transition duration-300 border-2 px-4 py-2 border-emerald-500"
const hoverStyles = "hover:bg-emerald-500 hover:text-black"
const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed"
const loadingStyles = "flex gap-4"

export const Button = ({ className, children, disabled, loading, ...props }: ButtonProps) => (
  <button
    disabled={disabled || loading}
    className={clsx(baseStyles, hoverStyles, disabledStyles, loading && loadingStyles, className)}
    {...props}
  >
    {loading && <Spinner />}
    {children}
  </button>
)
