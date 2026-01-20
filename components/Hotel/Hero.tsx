'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeroProps {
  carouselImages: string[]
}

export default function Hero({ carouselImages }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Eğer görsel yoksa varsayılan görseller kullan
  const images = carouselImages.length > 0 
    ? carouselImages 
    : [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80'
      ]

  // Otomatik carousel
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // 5 saniyede bir değişir

    return () => clearInterval(interval)
  }, [images.length, isPaused])

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setTimeout(() => setIsPaused(false), 5000) // 5 saniye sonra otomatik geçişi tekrar başlat
  }

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setTimeout(() => setIsPaused(false), 5000) // 5 saniye sonra otomatik geçişi tekrar başlat
  }

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex(index)
    setTimeout(() => setIsPaused(false), 5000) // 5 saniye sonra otomatik geçişi tekrar başlat
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Park Hotel - ${index === 0 ? 'Ana görsel' : `Galeri görseli ${index + 1}`}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={85}
              unoptimized={image.startsWith('http') && !image.includes('localhost')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer pointer-events-auto"
        aria-label="Önceki görsel"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer pointer-events-auto"
        aria-label="Sonraki görsel"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex space-x-2 pointer-events-auto">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => goToSlide(index, e)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Görsel ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Park Hotel'e Hoş Geldiniz
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Lüks konaklama deneyimi ve unutulmaz anılar için ideal adresiniz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Link
              href="#amenities"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Olanaklarımız</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/gallery"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 shadow-lg"
            >
              Galerimizi İnceleyin
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

