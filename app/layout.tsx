import "./globals.css"
import type { Metadata } from "next"
import { USER_CONTENT } from "@/content"
import { Jura } from "next/font/google"
import { Onest } from "next/font/google"
import { Azeret_Mono } from "next/font/google"
import { Toaster } from "react-hot-toast"

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono"
})

const onestFont = Onest({
  subsets: ["latin"],
  variable: "--font-onest"
})

const juraFont = Jura({
  subsets: ["latin"],
  variable: "--font-jura"
})

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
          ${azeretMono.variable}
        `}
      >
        <Toaster
          toastOptions={{
            style: {
              borderRadius: 0,
              color: "#fff",
              backgroundColor: "#0a0a0a",
              border: "1px solid #404040"
            }
          }}
        />
        {children}
      </body>
    </html>
  )
}
