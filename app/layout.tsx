import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Park Otel - Lüks Konaklama Deneyimi',
    template: '%s | Park Otel',
  },
  description: 'Park Otel ile unutulmaz bir konaklama deneyimi yaşayın. Modern odalar, lüks suite seçenekleri ve mükemmel hizmet anlayışıyla sizleri ağırlıyoruz.',
  keywords: ['otel', 'konaklama', 'rezervasyon', 'lüks otel', 'istanbul otel', 'suite oda', 'standart oda'],
  authors: [{ name: 'Park Otel' }],
  creator: 'Park Otel',
  publisher: 'Park Otel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: 'Park Otel',
    title: 'Park Otel - Lüks Konaklama Deneyimi',
    description: 'Park Otel ile unutulmaz bir konaklama deneyimi yaşayın',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Park Otel',
    description: 'Park Otel ile unutulmaz bir konaklama deneyimi yaşayın. Modern odalar, lüks suite seçenekleri ve mükemmel hizmet anlayışıyla sizleri ağırlıyoruz.',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Atatürk Mahallesi, Park Caddesi No:123',
      addressLocality: 'Şişli',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-212-123-45-67',
      contactType: 'customer service',
      email: 'info@parkotel.com',
    },
    priceRange: '$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '5',
    },
  }

  return (
    <html lang="tr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Ana içeriğe atla
        </a>
        <Navbar />
        <main className="min-h-screen" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingContactButtons />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  )
}

