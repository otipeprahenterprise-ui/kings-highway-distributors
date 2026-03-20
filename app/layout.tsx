import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kings Highways Distributors | Personal Care, Pet Care & Cleaning Products',
  description: 'Kings Highways Distributors supplies trusted personal care, pet care, and cleaning products to households, retailers, and businesses with reliable fulfillment and consistent quality.',
  keywords: ['personal care products', 'pet care products', 'cleaning products', 'wholesale distributor', 'B2B distributor', 'Amazon seller'],
  authors: [{ name: 'Kings Highways Distributors' }],
  openGraph: {
    title: 'Kings Highways Distributors | Personal Care, Pet Care & Cleaning Products',
    description: 'Kings Highways Distributors supplies trusted personal care, pet care, and cleaning products to households, retailers, and businesses with reliable fulfillment and consistent quality.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
