import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose | null> | null
  isConnected: boolean
}

declare global {
  var mongoose: MongooseCache | undefined
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null, isConnected: false }

if (!global.mongoose) {
  global.mongoose = cached
}

async function connectDB() {
  if (!MONGODB_URI) {
    console.warn('MONGODB_URI is not defined. Database features will be disabled.')
    return null
  }

  // Eğer zaten bağlıysa, mevcut bağlantıyı döndür
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn
  }

  // Eğer bağlantı kuruluyorsa, bekleyin
  if (cached.promise) {
    try {
      cached.conn = await cached.promise
      if (cached.conn && mongoose.connection.readyState === 1) {
        cached.isConnected = true
        return cached.conn
      }
    } catch (error) {
      cached.promise = null
      cached.isConnected = false
    }
  }

  // Yeni bağlantı kur
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // 10 saniye timeout
      socketTimeoutMS: 45000,
      family: 4, // IPv4 kullan
      maxPoolSize: 10,
      minPoolSize: 1,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('✅ MongoDB bağlantısı başarılı')
        cached.isConnected = true
        cached.conn = mongoose
        return mongoose
      })
      .catch((error) => {
        cached.promise = null
        cached.isConnected = false
        console.error('❌ MongoDB bağlantı hatası:', error.message)
        console.error('MONGODB_URI:', MONGODB_URI ? 'Tanımlı' : 'Tanımsız')
        return null
      })
  }

  try {
    cached.conn = await cached.promise
    if (cached.conn && mongoose.connection.readyState === 1) {
      cached.isConnected = true
      return cached.conn
    } else {
      cached.promise = null
      cached.isConnected = false
      return null
    }
  } catch (e: any) {
    cached.promise = null
    cached.isConnected = false
    console.error('❌ MongoDB bağlantı hatası:', e?.message || e)
    return null
  }
}

export default connectDB

