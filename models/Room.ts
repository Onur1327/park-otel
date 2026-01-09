import mongoose, { Schema, Document } from 'mongoose'

export interface IRoom extends Document {
  name: string
  type: 'standard' | 'suite'
  description: string
  shortDescription: string
  images: string[]
  features: string[]
  price: number
  size: string
  capacity: number
  amenities: string[]
  createdAt: Date
  updatedAt: Date
}

const RoomSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Oda adı gereklidir'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['standard', 'suite'],
      required: [true, 'Oda tipi gereklidir'],
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
    features: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: [true, 'Fiyat gereklidir'],
    },
    size: {
      type: String,
      required: [true, 'Oda boyutu gereklidir'],
    },
    capacity: {
      type: Number,
      required: [true, 'Kapasite gereklidir'],
      min: [1, 'Kapasite en az 1 olmalıdır'],
    },
    amenities: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Room || mongoose.model<IRoom>('Room', RoomSchema)

