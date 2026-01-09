// Google Analytics utility functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return

  // Check if user has accepted cookies
  const cookieConsent = localStorage.getItem('cookie-consent')
  if (cookieConsent !== 'accepted') {
    return
  }

  // Load gtag script
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script1)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer?.push(args)
  }
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', GA_TRACKING_ID, {
    page_path: window.location.pathname,
  })
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag || !GA_TRACKING_ID) return

  const cookieConsent = localStorage.getItem('cookie-consent')
  if (cookieConsent !== 'accepted') return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window === 'undefined' || !window.gtag || !GA_TRACKING_ID) return

  const cookieConsent = localStorage.getItem('cookie-consent')
  if (cookieConsent !== 'accepted') return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

