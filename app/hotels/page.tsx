import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, ArrowRight } from 'lucide-react'
import { HOTELS } from '@/data/hotels'

export const metadata: Metadata = {
  title: 'Tüm Otellerimiz',
  description: 'Park Hotel\'in tüm otellerini keşfedin. Size en uygun konaklama seçeneğini bulun.',
  keywords: ['otel', 'konaklama', 'rezervasyon', 'istanbul otel'],
  openGraph: {
    title: 'Tüm Otellerimiz | Park Hotel',
    description: 'Size en uygun konaklama seçeneğini bulun',
    type: 'website',
  },
}

export default function HotelsPage() {
  const hotels = [...HOTELS] // Gerekirse sıralama burada değiştirilebilir

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tüm Otellerimiz
          </h1>
          <p className="text-gray-600 text-lg">
            Size en uygun konaklama seçeneğini bulun
          </p>
        </div>

        {hotels.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">Henüz otel eklenmemiş.</p>
            <p className="text-gray-500">Lütfen daha sonra tekrar kontrol edin.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="card group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  {hotel.images && hotel.images.length > 0 ? (
                    <Image
                      src={hotel.images[0]}
                      alt={`${hotel.name} - ${hotel.location}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      unoptimized={hotel.images[0]?.startsWith('http') && !hotel.images[0]?.includes('localhost')}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {hotel.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  {hotel.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Öne Çıkan
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold">5.0</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{hotel.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/hotels/${hotel.id}`}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <span>Detayları Gör</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

