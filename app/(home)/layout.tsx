import { Navigation } from "./Navigation"

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="md:grid md:grid-cols-[14rem_1fr]">
      <Navigation />
      {children}
    </div>
  )
}
