import Link from "next/link"
import { IconSocialLink } from "@/components"
import { MenuMobile } from "./MenuMobile"
import { getUserInfo } from "@/db/actions/user-info"
import clsx from "clsx"
import { Links } from "./Links"

export const Navigation = async () => {
  const userInfo = await getUserInfo()

  return (
    <>
      <MenuMobile />
      <aside
        className="
          hidden
          md:flex
          md:relative
          flex-col
          border-black
          h-screen
          py-10
          justify-between
          bg-stone-950
        "
      >
        <header
          className={clsx(
            "px-4 mx-auto",
            "[&_h3]:text-4xl [&_h3]:font-jura [&_h3]:text-nowrap",
            "[&_span]:text-emerald-500 [&_span]:font-semibold"
          )}
        >
          <Link href="/">
            <h3 className="mr-[2ch]">
              <span>{userInfo?.first_name[0]}</span>
              {userInfo?.first_name.slice(1)}
            </h3>
            <h3 className="ml-[2ch] text-right">
              <span>{userInfo?.last_name[0]}</span>
              {userInfo?.last_name.slice(1)}
            </h3>
          </Link>
        </header>
        <Links />
        <footer className="flex justify-center gap-8 h-32">
          {Object.entries(userInfo.socials).map(([social, link], i) => {
            return (
              <IconSocialLink
                social={social}
                key={`social-${social}-${i}`}
                href={link}
              />
            )
          })}
        </footer>
      </aside>
    </>
  )
}
