'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Hotel, Menu, X, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [bookingLink, setBookingLink] = useState('#')
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  // İlk öne çıkan otelin rezervasyon linkini al
  useEffect(() => {
    const fetchBookingLink = async () => {
      try {
        const response = await fetch('/api/featured-hotel')
        if (response.ok) {
          const data = await response.json()
          if (data.bookingLink) {
            setBookingLink(data.bookingLink)
          }
        }
      } catch (error) {
        console.error('Error fetching booking link:', error)
      }
    }
    fetchBookingLink()
  }, [])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Ana navigasyon" itemScope itemType="https://schema.org/SiteNavigationElement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2" aria-label="Ana Sayfa - Park Hotel">
            <Hotel className="h-10 w-10 text-primary-600" aria-hidden="true" />
            <span className="text-3xl font-bold text-primary-600">Park Hotel</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/rooms"
              className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/rooms')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Odalarımız
            </Link>
            <Link
              href="/gallery"
              className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/gallery')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Galeri
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              İletişim
            </Link>
            {/* Admin linki kaldırıldı - site artık statik kullanılıyor */}
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 booking-button booking-button-glow bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 relative"
            >
              <Calendar className="h-5 w-5" />
              <span>Rezervasyon Yap</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1"
              aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu" role="menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-lg font-medium ${
                isActive('/')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/rooms"
              className={`block px-3 py-2 rounded-md text-lg font-medium ${
                isActive('/rooms')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Odalarımız
            </Link>
            <Link
              href="/gallery"
              className={`block px-3 py-2 rounded-md text-lg font-medium ${
                isActive('/gallery')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Galeri
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-lg font-medium ${
                isActive('/about')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-lg font-medium ${
                isActive('/contact')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            {/* Admin linki kaldırıldı - site artık statik kullanılıyor */}
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 mt-2 booking-button booking-button-glow bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-3 rounded-lg font-semibold text-base text-center shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 relative"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              <span>Rezervasyon Yap</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

