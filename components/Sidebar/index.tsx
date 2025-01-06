"use client"

import { USER_CONTENT } from "@/content"
import Link from "next/link"
import { IconSocialLink } from "@/components"
import { useState } from "react"
import { SocialMedia } from "@/components/icons"

const LINKS = ["About me", "Projects", "Contact"]

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(LINKS[0])

  return (
    <aside
      className="
        fixed
        w-56
        border-black
        h-screen
        py-10
      "
    >
      <header className="px-4">
        {USER_CONTENT.name.split(" ").map((name, i) => (
          <h3
            key={`name-title-${i}`}
            className="
              text-4xl
              font-jura

              first:text-left
              last:text-right
            "
          >
            <span className="text-emerald-500 font-semibold">{name[0]}</span>
            {name.slice(1)}
          </h3>
        ))}
      </header>
      <nav className="mt-10">
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
                  border-r-transparent
                  pointer-events-none

                  last:border-b-0
                  ${activeLink === title ? "border-r-emerald-500 bg-white/10 font-semibold" : ""}
                `}
            >
              <Link
                className="transition w-full h-full block py-3 pointer-events-auto hover:scale-110"
                onClick={() => setActiveLink(title)}
                href={`#${title.split(" ").join("-").toLocaleLowerCase()}`}
                key={`side-nav-${i}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="flex justify-center gap-4 mt-10">
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
  )
}
