import Link, { LinkProps } from "next/link"
import { AnchorHTMLAttributes } from "react"
import {
  IconProps,
  SocialMedia,
  IconBrandGithub,
  IconBrandLinkedIn,
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTikTok,
  IconBrandYoutube
} from "@/components/icons"

const icons: Record<SocialMedia, React.FC<IconProps>> = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedIn,
  x: IconBrandX,
  facebook: IconBrandFacebook,
  instagram: IconBrandInstagram,
  pinterest: IconBrandPinterest,
  tiktok: IconBrandTikTok,
  youtube: IconBrandYoutube
}

type IconSocialLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    social: SocialMedia
  }

export const IconSocialLink = ({
  href = "#",
  rel = "noopener noreferrer",
  target = "_blank",
  social,
  ...props
}: IconSocialLinkProps) => {
  const Icon = icons[social]

  return (
    <Link
      className="bg-neutral-900 hover:bg-emerald-700 transition h-8 w-8 flex items-center justify-center"
      target={target}
      rel={rel}
      href={href}
      {...props}
    >
      <Icon className="h-5" />
    </Link>
  )
}
