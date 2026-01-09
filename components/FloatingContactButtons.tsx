'use client'

import { Phone, MessageCircle, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function FloatingContactButtons() {
  const [isExpanded, setIsExpanded] = useState(false)

  const phoneNumber = '+902121234567'
  const whatsappNumber = '905551234567'
  const instagramUrl = 'https://www.instagram.com/parkotel'

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="WhatsApp ile iletişime geç"
        title="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Instagram'da bizi takip et"
        title="Instagram"
      >
        <Instagram className="h-6 w-6 md:h-7 md:w-7" />
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Instagram
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Telefon ile ara"
        title="Telefon"
      >
        <Phone className="h-6 w-6 md:h-7 md:w-7" />
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {phoneNumber}
        </span>
      </a>
    </div>
  )
}

