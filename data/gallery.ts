export interface StaticGalleryCategory {
  id: string
  name: string
  description?: string
  images: string[]
  order?: number
}

// Örnek veri: Buradaki alanları kendi kategori isimleriniz ve görsel URL'lerinizle güncelleyebilirsiniz.
export const GALLERY_CATEGORIES: StaticGalleryCategory[] = [
  {
    id: 'lobby',
    name: 'Lobi',
    description: 'Misafirlerimizi karşıladığımız modern ve ferah lobi alanı.',
    images: [
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
    ],
    order: 1,
  },
  {
    id: 'rooms',
    name: 'Odalar',
    description: 'Konforlu ve şık odalarımızdan bazı örnekler.',
    images: [
      '/oda-1-grsl.jpeg',
      '/oda-2-grsl.jpeg',
      '/oda-2-2-grsl.jpeg',
      '/oda-3-grsl.jpeg',
      '/oda-3-1-grsl.jpeg',
      '/oda-4-grsl.jpeg',
      '/oda-5-grsl.jpeg',
      '/oda-5-1-grsl.jpeg',
      '/oda-ayna-1.jpeg',
      '/oda-ayna-koltuk-1.jpeg',
      '/oda-oturmakoltugu-1.jpeg',
      '/banyo-1.jpeg',
    ],
    order: 2,
  },
  {
    id: 'restaurant',
    name: 'Restoran',
    description: 'Zengin menümüz ve şık restoran alanımız.',
    images: [
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80',
    ],
    order: 3,
  },
]


