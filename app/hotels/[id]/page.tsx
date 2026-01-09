import { HOTELS } from '@/data/hotels'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function HotelDetailPage({ params }: PageProps) {
  const { id } = await params
  const hotel = HOTELS.find((h) => h.id === id)

  if (!hotel) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/hotels"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Otellere Dön</span>
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px]">
            {hotel.images && hotel.images.length > 0 ? (
              <Image
                src={hotel.images[0]}
                alt={hotel.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">{hotel.name.charAt(0)}</span>
              </div>
            )}
          </div>

          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{hotel.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{hotel.location}</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{hotel.description}</p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">Telefon</p>
                  <p className="font-semibold text-gray-900">{hotel.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">E-posta</p>
                  <p className="font-semibold text-gray-900">{hotel.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 md:col-span-2">
                <MapPin className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-gray-600">Adres</p>
                  <p className="font-semibold text-gray-900">{hotel.contact.address}</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            {hotel.amenities && hotel.amenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Olanaklar</h2>
                <div className="flex flex-wrap gap-3">
                  {hotel.amenities.map((amenity, index) => (
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
            {hotel.images && hotel.images.length > 1 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Galeri</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {hotel.images.slice(1).map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${hotel.name} - Resim ${index + 2}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Booking Button */}
            <div className="pt-6 border-t">
              <a
                href={hotel.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Rezervasyon Yap</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

