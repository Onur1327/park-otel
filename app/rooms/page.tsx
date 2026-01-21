import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Bed, Users, Square, ArrowRight } from 'lucide-react'
import { ROOMS } from '@/data/rooms'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Odalarımız',
  description: 'Park Hotel\'in konforlu standart ve lüks suite odalarını keşfedin. Modern tasarım, geniş alanlar ve tüm konforlar.',
  keywords: ['otel odaları', 'standart oda', 'suite oda', 'konaklama', 'rezervasyon'],
  openGraph: {
    title: 'Odalarımız | Park Hotel',
    description: 'Konforlu ve şık odalarımızda unutulmaz bir konaklama deneyimi yaşayın',
    type: 'website',
  },
}

export default function RoomsPage() {
  const standardRooms = ROOMS.filter((room) => room.type === 'standard')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Odalarımız</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Konforlu ve şık odalarımızda unutulmaz bir konaklama deneyimi yaşayın
            </p>
          </div>
        </div>
      </section>

      {/* Standard Rooms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Standart Odalar
            </h2>
            <p className="text-gray-100 text-lg">
              Modern ve konforlu standart odalarımız
            </p>
          </div>

          {standardRooms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-lg">
              <Bed className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-4">Henüz standart oda eklenmemiş.</p>
              <p className="text-gray-500">Lütfen daha sonra tekrar kontrol edin.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standardRooms.map((room) => (
                <div key={room.id} className="card group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    {room.images && room.images.length > 0 ? (
                      <Image
                        src={room.images[0]}
                        alt={`${room.name} - ${room.type === 'standard' ? 'Standart Oda' : 'Suite Oda'}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        unoptimized={room.images[0]?.startsWith('http') && !room.images[0]?.includes('localhost')}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <Bed className="h-16 w-16 text-white opacity-50" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{room.shortDescription}</p>
                    
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
          )}
        </div>
      </section>

    </div>
  )
}

