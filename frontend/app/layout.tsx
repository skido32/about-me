import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shunsuke Kido | Web Developer Portfolio',
  description: 'Hi, I\'m Shunsuke Kido - I enjoy building web apps with Rails and Next.js.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
