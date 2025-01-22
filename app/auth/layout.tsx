import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | Pro Blog"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
