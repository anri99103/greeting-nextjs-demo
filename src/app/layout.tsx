import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Greeting Nextjs Demo",
  description: "You can check two easy API request behavior called via Server Component, Client Component, Server Actions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
