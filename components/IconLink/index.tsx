import Link, { LinkProps } from "next/link"
import { AnchorHTMLAttributes } from "react"
import { IconProps } from "@/components/icons"

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    icon: React.ElementType<IconProps>
    external?: boolean
  }

export const IconLink = ({
  href = "#",
  rel,
  target,
  external,
  icon: Icon,
  ...props
}: IconLinkProps) => {
  return (
    <Link
      className="bg-neutral-900 hover:bg-emerald-700 transition h-8 w-8 flex items-center justify-center"
      target={external ? "_blank" : target}
      rel={external ? "noopener noreferrer" : rel}
      href={href}
      {...props}
    >
      <Icon className="h-4 w-auto" />
    </Link>
  )
}
