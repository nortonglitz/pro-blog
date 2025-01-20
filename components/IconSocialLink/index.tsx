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
import { IconQuestionMark } from "@tabler/icons-react"

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
    social: string
  }

export const IconSocialLink = ({
  href = "#",
  rel = "noopener noreferrer",
  target = "_blank",
  social,
  ...props
}: IconSocialLinkProps) => {
  let Icon = null

  if (social in icons) {
    Icon = icons[social as SocialMedia]
  } else {
    Icon = IconQuestionMark
  }

  return (
    <Link
      className="
        transition
        bg-neutral-900
        h-10
        w-10
        flex
        items-center
        justify-center

        [&:hover_svg]:text-white
        hover:bg-emerald-700
      "
      target={target}
      rel={rel}
      href={href}
      {...props}
    >
      <Icon className="h-5 text-neutral-500 transition" />
    </Link>
  )
}
