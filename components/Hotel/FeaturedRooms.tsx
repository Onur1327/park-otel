import Image from 'next/image'
import Link from 'next/link'
import { Bed, Users, Square, ArrowRight } from 'lucide-react'
import type { StaticRoom } from '@/data/rooms'
import { siteConfig } from '@/config/site'

interface FeaturedRoomsProps {
  rooms: StaticRoom[]
}

export default function FeaturedRooms({ rooms }: FeaturedRoomsProps) {
  // En fazla 3 oda göster
  const displayedRooms = rooms.slice(0, 3)

  if (displayedRooms.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Odalarımız
            </h2>
            <p className="text-gray-600 text-lg">
              Konforlu ve şık odalarımızda unutulmaz bir konaklama deneyimi yaşayın
            </p>
          </div>
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <Bed className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg mb-4">Henüz oda eklenmemiş.</p>
            <p className="text-gray-500">Lütfen daha sonra tekrar kontrol edin.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Odalarımız
          </h2>
          <p className="text-gray-600 text-lg">
            Konforlu ve şık odalarımızda unutulmaz bir konaklama deneyimi yaşayın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedRooms.map((room) => (
            <div
              key={room.id}
              className="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Link href="/rooms" className="block">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  {room.images && room.images.length > 0 ? (
                    <Image
                      src={room.images[0]}
                      alt={`${room.name} - ${room.type === 'standard' ? 'Standart Oda' : 'Suite Oda'}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      unoptimized={room.images[0]?.startsWith('http') && !room.images[0]?.includes('localhost')}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <Bed className="h-16 w-16 text-white opacity-50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                    {room.type === 'standard' ? 'Standart' : 'Suite'}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <Link href="/rooms" className="block">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">
                    {room.shortDescription}
                  </p>
                </Link>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{room.capacity} Kişi</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{room.size}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/rooms/${room.id}`}
                    className="btn-secondary w-full flex items-center justify-center space-x-2"
                  >
                    <span>Detaya Git</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={siteConfig.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <span>Rezervasyon Yap</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tüm Odaları Gör Linki */}
        <div className="text-center mt-12">
          <Link
            href="/rooms"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors"
          >
            <span>Tüm Odaları Gör</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

