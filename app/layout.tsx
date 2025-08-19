import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FashionTV',
  description: 'Experience the luxury of cosmetics at FashionTV.',
  keywords: ['fashion', 'FashionTV', 'luxury', 'cosmetics'],
  authors: [{ name: 'FashionTV' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} bg-pink-100 text-gray-900 min-h-screen antialiased`}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}