import { Spinner } from "@/components/UI"
import { Icon } from "@tabler/icons-react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  icon?: Icon
  loading?: boolean
}

export const BlogCardMore = ({
  icon: Icon,
  title,
  disabled,
  loading = false,
  ...props
}: ButtonProps) => (
  <button
    disabled={disabled || loading}
    className="
      transition-[background]
      duration-300
      w-full
      h-full
      min-h-96
      flex
      items-center
      justify-center
      flex-col
      border
      bg-transparent
      border-emerald-900
      hover:bg-emerald-500/10
      hover:outline
      hover:outline-4
      hover:outline-emerald-500
      cursor-pointer

      disabled:cursor-not-allowed
      disabled:opacity-50
    "
    {...props}
  >
    {loading ? (
      <Spinner
        size="xl"
        className="mb-2"
      />
    ) : (
      Icon && (
        <Icon
          size="4rem"
          stroke="1px"
        />
      )
    )}
    <p className="text-xl">{title}</p>
  </button>
)
