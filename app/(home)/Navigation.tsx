import { USER_CONTENT } from "@/content"
import Link from "next/link"
import { IconSocialLink } from "@/components"
import { SocialMedia } from "@/components/icons"
import { LINKS } from "@/content"
import { MenuMobile } from "./MenuMobile"
import { getUserInfo } from "@/db/actions/user-info"

export const Navigation = async () => {
  const userInfo = await getUserInfo()
  const linksId = LINKS.map(title => title.replace(" ", "-").toLocaleLowerCase())

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
          className="
            px-4
            mx-auto

            [&_h3]:text-4xl
            [&_h3]:font-jura
            [&_h3]:w-44

            [&_span]:text-emerald-500
            [&_span]:font-semibold
          "
        >
          <h3>
            <span>{userInfo?.first_name[0]}</span>
            {userInfo?.first_name.slice(1)}
          </h3>
          <h3 className="text-right">
            <span>{userInfo?.last_name[0]}</span>
            {userInfo?.last_name.slice(1)}
          </h3>
        </header>
        <nav>
          <ul>
            {LINKS.map((title, i) => (
              /*activeLink === title ? "border-r-emerald-500 bg-white/10 font-semibold" : "border-r-transparent"*/
              <li
                key={`nav-item-${i}`}
                className={`
                    transition

                    text-center
                    border-b
                    border-b-neutral-800
                    border-r-2
                    pointer-events-none

                    last:border-b-0
                  `}
              >
                <Link
                  className="transition w-full h-full block py-3 pointer-events-auto hover:scale-110"
                  href={`/#${linksId[i]}`}
                  key={`side-nav-${i}`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="flex justify-center gap-8 h-32">
          {Object.entries(USER_CONTENT.socials).map(([social, link], i) => {
            return (
              <IconSocialLink
                social={social as SocialMedia}
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
