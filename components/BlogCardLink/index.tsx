import { IconFileDescription } from "@tabler/icons-react"
import Link, { LinkProps } from "next/link"

type BlogCardLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

export const BlogCardLink = ({ ...props }: BlogCardLinkProps) => (
  <Link {...props}>
    <div
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
      "
    >
      <IconFileDescription
        size="4rem"
        stroke="1px"
      />
      <p className="text-xl">See all posts</p>
    </div>
  </Link>
)
