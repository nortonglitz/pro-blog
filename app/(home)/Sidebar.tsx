"use client"

import { USER_CONTENT } from "@/content"
import Link from "next/link"
import { IconSocialLink } from "@/components"
import { useEffect, useState } from "react"
import { SocialMedia } from "@/components/icons"
import { LINKS } from "@/content"
import { useScreenSize } from "@/hooks"
import { IconMenu2, IconX } from "@tabler/icons-react"

export const Sidebar = () => {
  const { isMobile } = useScreenSize()

  const [activeLink, setActiveLink] = useState(LINKS[0])
  const [isOpen, setIsOpen] = useState(false)
  const linksId = LINKS.map(title => title.replace(" ", "-").toLocaleLowerCase())

  useEffect(() => {
    if (isMobile === undefined) {
      setIsOpen(false)
    } else {
      setIsOpen(!isMobile)
    }
  }, [isMobile])

  const handleLinkClick = (title: string) => {
    if (isMobile) {
      setIsOpen(false)
    }
    setActiveLink(title)
  }

  return (
    <>
      <header
        className="
          md:invisible
          fixed
          top-0
          h-16
          right-0
          left-0
          flex
          justify-between
          px-10
          items-center
          z-20
          drop-shadow
          bg-neutral-950
        "
      >
        <span className="text-3xl font-jura font-bold text-emerald-500">
          {USER_CONTENT.name.split(" ").map(name => name.charAt(0))}
        </span>
        <button onClick={() => setIsOpen(true)}>
          <IconMenu2
            size="2rem"
            stroke="1px"
          />
        </button>
      </header>
      <aside
        className={`
          ${isOpen ? "visible" : "invisible"}
          border-black
          h-screen
          py-10
          flex
          flex-col
          justify-between
          md:relative

          fixed
          w-full
          bg-stone-950
          z-30
        `}
      >
        {isMobile && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5"
          >
            <IconX size={"2rem"} />
          </button>
        )}
        <header className="px-4 mx-auto relative">
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
                  onClick={() => handleLinkClick(title)}
                  href={`#${linksId[i]}`}
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
