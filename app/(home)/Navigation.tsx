"use client"

import { USER_CONTENT } from "@/content"
import Link from "next/link"
import { IconSocialLink } from "@/components"
import { useState } from "react"
import { SocialMedia } from "@/components/icons"
import { LINKS } from "@/content"
import { MenuMobile } from "./MenuMobile"

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState(LINKS[0])
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
        <header className="px-4 mx-auto">
          {USER_CONTENT.name.split(" ").map((name, i) => (
            <h3
              key={`name-title-${i}`}
              className="
                text-4xl
                font-jura
                w-44

                first:text-left
                last:text-right
              "
            >
              <span className="text-emerald-500 font-semibold">{name[0]}</span>
              {name.slice(1)}
            </h3>
          ))}
        </header>
        <nav>
          <ul>
            {LINKS.map((title, i) => (
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
                    ${activeLink === title ? "border-r-emerald-500 bg-white/10 font-semibold" : "border-r-transparent"}
                  `}
              >
                <Link
                  className="transition w-full h-full block py-3 pointer-events-auto hover:scale-110"
                  onClick={() => setActiveLink(title)}
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
