import { ROOMS } from '@/data/rooms'
import Image from 'next/image'
import Link from 'next/link'
import { Bed, Users, Square, ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const room = ROOMS.find((r) => r.id === id)

  if (!room) {
    return {
      title: 'Oda Bulunamadı',
    }
  }

  return {
    title: `${room.name} | Park Otel`,
    description: room.description || room.shortDescription,
    keywords: ['otel odası', room.name, 'rezervasyon', 'konaklama'],
    openGraph: {
      title: `${room.name} | Park Otel`,
      description: room.description || room.shortDescription,
      images: room.images && room.images.length > 0 ? [room.images[0]] : [],
      type: 'website',
    },
  }
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { id } = await params
  const room = ROOMS.find((r) => r.id === id)

  if (!room) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/rooms"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Odalara Dön</span>
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          {room.images && room.images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
              <div className="relative h-96 md:h-[500px] md:col-span-2 rounded-lg overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 100vw"
                  quality={90}
                  unoptimized={room.images[0]?.startsWith('http') && !room.images[0]?.includes('localhost')}
                />
              </div>
              {room.images.length > 1 && (
                <>
                  {room.images.slice(1, 3).map((image: string, index: number) => (
                    <div key={index} className="relative h-48 md:h-[244px] rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${room.name} - Görsel ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                        unoptimized={image?.startsWith('http') && !image?.includes('localhost')}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          ) : (
            <div className="relative h-96 md:h-[500px]">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <Bed className="h-32 w-32 text-white opacity-50" />
              </div>
            </div>
          )}

          <div className="p-8">
            <div className="mb-6">
              <div className="mb-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{room.name}</h1>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {room.type === 'standard' ? 'Standart Oda' : 'Suite Oda'}
                </span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{room.description}</p>
            </div>

            {/* Room Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">Kapasite</p>
                  <p className="font-semibold text-gray-900">{room.capacity} Kişi</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Square className="h-6 w-6 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">Oda Boyutu</p>
                  <p className="font-semibold text-gray-900">{room.size}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Bed className="h-6 w-6 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">Oda Tipi</p>
                  <p className="font-semibold text-gray-900">
                    {room.type === 'standard' ? 'Standart' : 'Suite'}
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            {room.amenities && room.amenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Olanaklar</h2>
                <div className="flex flex-wrap gap-3">
                  {room.amenities.map((amenity: string, index: number) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Images */}
            {room.images && room.images.length > 3 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Galeri</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {room.images.slice(3).map((image: string, index: number) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src={image}
                        alt={`${room.name} - Görsel ${index + 4}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={85}
                        unoptimized={image?.startsWith('http') && !image?.includes('localhost')}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reservation Button */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href={siteConfig.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full md:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 text-lg"
              >
                <span>Rezervasyon Yap</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

