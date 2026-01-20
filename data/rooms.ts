export type RoomType = 'standard' | 'suite'

export interface StaticRoom {
  id: string
  name: string
  type: RoomType
  description: string
  shortDescription: string
  images: string[]
  price: number
  size: string
  capacity: number
  amenities: string[]
}

// Örnek veri: Buradaki alanları kendi oda bilgileriniz ve görsel URL'lerinizle güncelleyebilirsiniz.
export const ROOMS: StaticRoom[] = [
  {
    id: 'standard-1',
    name: 'Standart Oda',
    type: 'standard',
    description:
      'Modern tasarımlı, şehir manzaralı standart odamız konforlu bir konaklama için idealdir.',
    shortDescription: 'Modern ve konforlu standart oda.',
    images: [
      '/standartoda1.jpeg.jpeg',
      '/standartoda2.jpeg.jpeg',
      '/standartoda3.jpeg.jpeg',
    ],
    price: 1500,
    size: '25 m²',
    capacity: 2,
    amenities: ['İnternet', 'Otopark', 'Oda Servisi'],
  },
  {
    id: 'standard-2',
    name: 'Aile Odası',
    type: 'standard',
    description:
      'Aileler için düşünülmüş, geniş yatak seçenekleri ve ekstra alan sunan oda.',
    shortDescription: 'Aileler için geniş standart oda.',
    images: [
      '/aileodasi1.jpeg.jpeg',
      '/aileodasi.jpeg.jpeg',
      '/aileodasi2.jpeg.jpeg',
    ],
    price: 2200,
    size: '35 m²',
    capacity: 4,
    amenities: ['İnternet', 'Otopark', '24/7 Güvenlik'],
  },
  {
    id: 'standard-3',
    name: 'Standart Oda',
    type: 'standard',
    description:
      'Rahat ve şık tasarımlı standart odamız, konforlu bir konaklama deneyimi sunar.',
    shortDescription: 'Rahat ve şık standart oda.',
    images: [
      '/standartoda4.jpeg.jpeg',
      '/standartoda5.jpeg.jpeg',
      '/standartoda6.jpeg.jpeg',
    ],
    price: 1500,
    size: '25 m²',
    capacity: 2,
    amenities: ['İnternet', 'Otopark', 'Oda Servisi'],
  },
]


