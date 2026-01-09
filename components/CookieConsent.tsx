'use client'

import { useState, useEffect } from 'react'
import { Cookie, X, Check } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Çerez onayını kontrol et
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      // Kısa bir gecikme ile banner'ı göster (sayfa yüklendikten sonra)
      setTimeout(() => {
        setShowBanner(true)
      }, 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    
    // Trigger custom event for Google Analytics initialization
    window.dispatchEvent(new Event('cookie-consent-accepted'))
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    // Gerekirse çerezleri temizle
    document.cookie.split(';').forEach((c) => {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
    })
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-2 border-primary-600 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-4 flex-1">
            <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
              <Cookie className="h-6 w-6 text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Çerez Kullanımı
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Bu web sitesi, size en iyi deneyimi sunmak için çerezler kullanmaktadır. 
                Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.{' '}
                <Link 
                  href="/privacy" 
                  className="text-primary-600 hover:text-primary-700 underline font-medium"
                >
                  Gizlilik Politikası
                </Link>
                {' '}ve{' '}
                <Link 
                  href="/privacy#cookies" 
                  className="text-primary-600 hover:text-primary-700 underline font-medium"
                >
                  Çerez Politikası
                </Link>
                {' '}hakkında daha fazla bilgi edinebilirsiniz.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              Reddet
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Check className="h-4 w-4" />
              <span>Kabul Et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

