import { Metadata } from 'next'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { GALLERY_CATEGORIES } from '@/data/gallery'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Park Hotel\'in farklı bölümlerinden görseller. Odalarımız, tesislerimiz ve hizmetlerimiz hakkında görsel bir tur.',
  keywords: ['galeri', 'otel görselleri', 'oda görselleri', 'tesis görselleri'],
  openGraph: {
    title: 'Galeri | Park Hotel',
    description: 'Otelimizin farklı bölümlerinden görseller',
    type: 'website',
  },
}

export default function GalleryPage() {
  const categories = [...GALLERY_CATEGORIES].sort(
    (a, b) => (a.order || 999) - (b.order || 999)
  )

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galeri
          </h1>
          <p className="text-gray-600 text-lg">
            Otelimizin farklı bölümlerinden görseller
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-16">
            <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg mb-4">Henüz kategori eklenmemiş.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                    {category.description && (
                      <p className="text-gray-600">{category.description}</p>
                    )}
                  </div>

                  {category.images && category.images.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {category.images.map((image: string, index: number) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                        >
                          <Image
                            src={image}
                            alt={`${category.name} kategorisi - Görsel ${index + 1}${category.description ? ` - ${category.description}` : ''}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            quality={80}
                            loading="lazy"
                            unoptimized={image?.startsWith('http') && !image?.includes('localhost')}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Bu kategoride henüz görsel yok.</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

