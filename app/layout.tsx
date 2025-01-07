import "./globals.css"
import type { Metadata } from "next"
import { USER_CONTENT } from "@/content"
import { Jura } from "next/font/google"
import { Onest } from "next/font/google"

const onestFont = Onest({
  subsets: ["latin"],
  variable: "--font-onest"
})

const juraFont = Jura({
  subsets: ["latin"],
  variable: "--font-jura"
})

export const metadata: Metadata = {
  title: `${USER_CONTENT.name} Blog`,
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          bg-neutral-950
          text-white
          ${onestFont.className}
          ${juraFont.variable}
          ${onestFont.variable}
        `}
      >
        {children}
      </body>
    </html>
  )
}
