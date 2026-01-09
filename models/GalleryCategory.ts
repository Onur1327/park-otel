import mongoose, { Schema, Document } from 'mongoose'

export interface IGalleryCategory extends Document {
  name: string
  description: string
  images: string[]
  order: number
  createdAt: Date
  updatedAt: Date
}

const GalleryCategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Kategori adı gereklidir'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.GalleryCategory || mongoose.model<IGalleryCategory>('GalleryCategory', GalleryCategorySchema)

