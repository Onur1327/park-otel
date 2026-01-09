export interface StaticHotel {
  id: string
  name: string
  description: string
  shortDescription: string
  images: string[]
  amenities: string[]
  location: string
  bookingLink: string
  featured?: boolean
}

// Örnek veri: Buradaki alanları kendi otel bilgileriniz ve görsel URL'lerinizle güncelleyebilirsiniz.
export const HOTELS: StaticHotel[] = [
  {
    id: 'hotel-1',
    name: 'Park Otel Merkez',
    description:
      'Şehrin kalbinde yer alan Park Otel Merkez, modern tasarımı ve konforlu odalarıyla misafirlerine unutulmaz bir konaklama deneyimi sunar.',
    shortDescription: 'Şehrin kalbinde modern ve konforlu otel.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    ],
    amenities: [
      'İnternet',
      'Otopark',
      'Restoran',
      'Oda Servisi',
      '24/7 Güvenlik',
      'Toplantı Alanı',
    ],
    location: 'Şişli, İstanbul',
    bookingLink: 'https://www.orneksite.com/rezervasyon/hotel-1',
    featured: true,
  },
  {
    id: 'hotel-2',
    name: 'Park Otel Deniz',
    description:
      'Deniz manzaralı odaları ve sakin atmosferiyle Park Otel Deniz, tatil ve iş seyahatleri için ideal bir seçenektir.',
    shortDescription: 'Deniz manzaralı, sakin ve huzurlu otel.',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
    ],
    amenities: ['İnternet', 'Otopark', 'Restoran', '24/7 Güvenlik'],
    location: 'Kadıköy, İstanbul',
    bookingLink: 'https://www.orneksite.com/rezervasyon/hotel-2',
    featured: false,
  },
]


