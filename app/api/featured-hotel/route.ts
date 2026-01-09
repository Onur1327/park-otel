import { NextResponse } from 'next/server'
import { HOTELS } from '@/data/hotels'

export async function GET() {
  try {
    // İlk öne çıkan oteli bul
    const featuredHotel = HOTELS.find((hotel) => hotel.featured && hotel.bookingLink)

    if (featuredHotel) {
      return NextResponse.json({ bookingLink: featuredHotel.bookingLink })
    }

    // Öne çıkan otel yoksa ilk oteli al
    const firstHotel = HOTELS.find((hotel) => hotel.bookingLink)

    if (firstHotel) {
      return NextResponse.json({ bookingLink: firstHotel.bookingLink })
    }

    return NextResponse.json({ bookingLink: '#' })
  } catch (error) {
    console.error('Error fetching featured hotel:', error)
    return NextResponse.json({ bookingLink: '#' })
  }
}

