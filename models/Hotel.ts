import mongoose, { Schema, Document } from 'mongoose'

export interface IHotel extends Document {
  name: string
  description: string
  shortDescription: string
  images: string[]
  amenities: string[]
  location: string
  contact: {
    phone: string
    email: string
    address: string
  }
  bookingLink: string
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

const HotelSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Otel adı gereklidir'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Açıklama gereklidir'],
    },
    shortDescription: {
      type: String,
      required: [true, 'Kısa açıklama gereklidir'],
      maxlength: [200, 'Kısa açıklama en fazla 200 karakter olabilir'],
    },
    images: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    location: {
      type: String,
      required: [true, 'Konum gereklidir'],
    },
    contact: {
      phone: {
        type: String,
        required: [true, 'Telefon numarası gereklidir'],
      },
      email: {
        type: String,
        required: [true, 'E-posta gereklidir'],
      },
      address: {
        type: String,
        required: [true, 'Adres gereklidir'],
      },
    },
    bookingLink: {
      type: String,
      required: [true, 'Rezervasyon linki gereklidir'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Hotel || mongoose.model<IHotel>('Hotel', HotelSchema)

