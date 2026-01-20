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
  contact: {
    phone: string
    email: string
    address: string
  }
}

// Örnek veri: Buradaki alanları kendi otel bilgileriniz ve görsel URL'lerinizle güncelleyebilirsiniz.
export const HOTELS: StaticHotel[] = [
  {
    id: 'hotel-1',
    name: 'Park Hotel Merkez',
    description:
      'Şehrin kalbinde yer alan Park Hotel Merkez, modern tasarımı ve konforlu odalarıyla misafirlerine unutulmaz bir konaklama deneyimi sunar.',
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
    contact: {
      phone: '+90 (212) 123 45 67',
    email: 'info@kayseriparkotel.com',
      address: 'Atatürk Mahallesi, Park Caddesi No:123, Şişli, İstanbul, Türkiye',
    },
  },
  {
    id: 'hotel-2',
    name: 'Park Hotel Deniz',
    description:
      'Deniz manzaralı odaları ve sakin atmosferiyle Park Hotel Deniz, tatil ve iş seyahatleri için ideal bir seçenektir.',
    shortDescription: 'Deniz manzaralı, sakin ve huzurlu otel.',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
    ],
    amenities: ['İnternet', 'Otopark', 'Restoran', '24/7 Güvenlik'],
    location: 'Kadıköy, İstanbul',
    bookingLink: 'https://www.orneksite.com/rezervasyon/hotel-2',
    featured: false,
    contact: {
      phone: '+90 (212) 123 45 67',
    email: 'info@kayseriparkotel.com',
      address: 'Atatürk Mahallesi, Park Caddesi No:123, Şişli, İstanbul, Türkiye',
    },
  },
]


