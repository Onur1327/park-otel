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
    images: [],
    order: 1,
  },
  {
    id: 'rooms',
    name: 'Odalar',
    description: 'Konforlu ve şık odalarımızdan bazı örnekler.',
    images: [
      '/standartoda1.jpeg.jpeg',
      '/standartoda2.jpeg.jpeg',
      '/standartoda3.jpeg.jpeg',
      '/aileodasi1.jpeg.jpeg',
      '/aileodasi.jpeg.jpeg',
      '/aileodasi2.jpeg.jpeg',
      '/standartoda4.jpeg.jpeg',
      '/standartoda5.jpeg.jpeg',
      '/standartoda6.jpeg.jpeg',
    ],
    order: 2,
  },
  {
    id: 'restaurant',
    name: 'Restoran',
    description: 'Zengin menümüz ve şık restoran alanımız.',
    images: [],
    order: 3,
  },
]


