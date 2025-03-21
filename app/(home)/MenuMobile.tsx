"use client"

import { IconSocialLink } from "@/components"
import { SocialMedia } from "@/components/icons"
import { LINKS } from "@/content"
import { UserInfo } from "@/db/types"
import { IconMenu2, IconX } from "@tabler/icons-react"
import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"

type MenuMobileProps = {
  userInfo: UserInfo
}

export const MenuMobile = ({ userInfo }: MenuMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(LINKS[0])
  const linksId = LINKS.map(title => title.replace(" ", "-").toLocaleLowerCase())

  const handleLinkClick = (title: string) => {
    setActiveLink(title)
    setIsOpen(false)
  }

  return (
    <>
      <header
        className="
          md:hidden
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
        <Link href="/">
          <span className="text-3xl font-jura font-bold text-emerald-500 select-none">
            {userInfo.first_name.charAt(0) + userInfo.last_name.charAt(0)}
          </span>
        </Link>
        <button onClick={() => setIsOpen(true)}>
          <IconMenu2
            size="2rem"
            stroke="1px"
          />
        </button>
      </header>
      <div
        className={`
          fixed
          z-30
          inset-0
          ${isOpen ? "flex" : "hidden"}
          md:hidden
          py-10
          flex-col
          justify-between
          bg-stone-950/90
          backdrop-blur
        `}
      >
        <button
          className="absolute top-0 right-0 mr-5 mt-5"
          onClick={() => setIsOpen(false)}
        >
          <IconX size="2rem" />
        </button>
        <header
          className={clsx(
            "px-4 mx-auto",
            "[&_h3]:text-3xl [&_h3]:font-jura [&_h3]:text-nowrap",
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
          {Object.entries(userInfo.socials).map(([social, link], i) => {
            return (
              <IconSocialLink
                social={social as SocialMedia}
                key={`social-${social}-${i}`}
                href={link}
              />
            )
          })}
        </footer>
      </div>
    </>
  )
}
