import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daily gm',
  description: 'A simple Farcaster Frame for daily gms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
