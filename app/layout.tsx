import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Artista - The Content Machine | Natural Brands Win On Shelf & Online',
  description:
    'Cinematic product content, short-form growth engines, and high-converting websites for natural and organic beverage & CPG brands. Expo West 2026.',
  keywords: [
    'natural brands',
    'CPG content',
    'beverage video production',
    'short-form content',
    'Expo West 2026',
    'product video',
    'brand story',
  ],
  openGraph: {
    title: 'Artista - The Content Machine',
    description:
      'We help natural brands win on shelf & online with cinematic content and conversion-ready websites.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {/* Netlify Forms detection (required for Next.js sites) */}
        <form
          name="expo-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="expo-contact" />
          <input name="bot-field" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>

        {children}
        <Analytics />
      </body>
    </html>
  )
}