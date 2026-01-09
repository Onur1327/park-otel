'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { initGA, pageview } from '@/lib/analytics'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    // Check cookie consent
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (cookieConsent === 'accepted') {
      initGA()
    }
  }, [])

  useEffect(() => {
    // Track page views when route changes
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (cookieConsent === 'accepted' && pathname) {
      pageview(pathname)
    }
  }, [pathname])

  // Listen for cookie consent changes
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent' && e.newValue === 'accepted') {
        initGA()
        if (pathname) {
          pageview(pathname)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Also listen for custom event (same window)
    const handleCookieAccept = () => {
      initGA()
      if (pathname) {
        pageview(pathname)
      }
    }

    window.addEventListener('cookie-consent-accepted', handleCookieAccept)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cookie-consent-accepted', handleCookieAccept)
    }
  }, [pathname])

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Only initialize if cookies are accepted
            const cookieConsent = localStorage.getItem('cookie-consent');
            if (cookieConsent === 'accepted') {
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            }
          `,
        }}
      />
    </>
  )
}

