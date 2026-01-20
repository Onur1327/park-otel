'use client'

import { useState } from 'react'
import Image from 'next/image'

interface RoomImageGalleryProps {
  images: string[]
  roomName: string
}

export default function RoomImageGallery({ images, roomName }: RoomImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="p-2 md:p-4">
      {/* Büyük Görsel */}
      <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4 shadow-lg">
        <Image
          src={images[selectedImageIndex]}
          alt={`${roomName} - Görsel ${selectedImageIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={selectedImageIndex === 0}
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={90}
          unoptimized={images[selectedImageIndex]?.startsWith('http') && !images[selectedImageIndex]?.includes('localhost')}
        />
      </div>

      {/* Küçük Görseller (Thumbnails) */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative h-20 md:h-24 lg:h-28 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedImageIndex === index
                  ? 'ring-4 ring-primary-500 ring-offset-2 scale-105 shadow-lg'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
              aria-label={`${roomName} görsel ${index + 1}'i seç`}
            >
              <Image
                src={image}
                alt={`${roomName} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                quality={75}
                unoptimized={image?.startsWith('http') && !image?.includes('localhost')}
              />
              {selectedImageIndex === index && (
                <div className="absolute inset-0 bg-primary-500 bg-opacity-20" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

