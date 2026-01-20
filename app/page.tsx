import { Metadata } from 'next'
import Hero from '@/components/Hotel/Hero'
import FeaturedRooms from '@/components/Hotel/FeaturedRooms'
import Amenities from '@/components/Hotel/Amenities'
import { HOTELS } from '@/data/hotels'
import { ROOMS } from '@/data/rooms'

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description: 'Park Hotel ile unutulmaz bir konaklama deneyimi yaşayın. Modern odalar, lüks suite seçenekleri ve mükemmel hizmet anlayışıyla sizleri ağırlıyoruz.',
  openGraph: {
    title: 'Park Hotel - Lüks Konaklama Deneyimi',
    description: 'Park Hotel ile unutulmaz bir konaklama deneyimi yaşayın',
    type: 'website',
  },
}

export default function Home() {
  // Tüm otellerden rastgele görseller topla
  const allImages = HOTELS.flatMap((hotel) => hotel.images || [])

  // Rastgele 3 görsel seç
  let carouselImages: string[] = []
  if (allImages.length > 0) {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random())
    carouselImages = shuffled.slice(0, 3)
  }

  // Öne çıkan odalar: en son eklenen gibi davranmak için diziyi sondan alıyoruz
  const featuredRooms = [...ROOMS].slice(-3).reverse()

  return (
    <div>
      <Hero carouselImages={carouselImages} />
      <FeaturedRooms rooms={featuredRooms} />
      <Amenities />
    </div>
  )
}

