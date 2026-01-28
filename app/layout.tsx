import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucimondo | Precision Travel',
  description: 'Small carry-on bags for passports, cards, IDs, and multiple currencies. Quiet luxury for frequent travelers.',
  keywords: 'travel carry-on, luxury travel, organization, frequent traveler, precision travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}