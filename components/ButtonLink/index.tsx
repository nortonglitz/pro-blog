import Link, { LinkProps } from "next/link"

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export const ButtonLink = ({ children, className, ...props }: ButtonLinkProps) => {
  return (
    <Link {...props}>
      <button
        className={`
          transition
          duration-300
          border-2
          px-4
          py-2
          border-emerald-500

          hover:bg-emerald-500
          hover:text-black

          ${className}
        `}
      >
        {children}
      </button>
    </Link>
  )
}
