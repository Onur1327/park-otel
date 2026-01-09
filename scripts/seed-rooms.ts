import connectDB from '../lib/mongodb'
import Room from '../models/Room'

const standardRooms = [
  {
    name: 'Standart Tek Kişilik Oda',
    type: 'standard' as const,
    description: 'Modern ve konforlu standart tek kişilik odamız, iş seyahatleri ve kısa konaklamalar için idealdir. Şık dekorasyonu ve tüm modern olanaklarıyla rahat bir konaklama deneyimi sunar.',
    shortDescription: 'Modern ve konforlu standart tek kişilik oda, iş seyahatleri için ideal.',
    price: 850,
    size: '25 m²',
    capacity: 1,
    features: [
      'Balkon',
      'Şehir Manzarası',
      'Mini Bar',
      'Kasa',
      'Çalışma Masası',
      'WiFi'
    ],
    amenities: [
      'WiFi',
      'TV',
      'Klima',
      'Banyo',
      'Duş',
      'Saç Kurutma Makinesi',
      'Telefon',
      'Kahve Makinesi'
    ],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=800&q=80'
    ]
  },
  {
    name: 'Standart Çift Kişilik Oda',
    type: 'standard' as const,
    description: 'Geniş ve ferah standart çift kişilik odamız, çiftler ve arkadaş grupları için mükemmeldir. Rahat yatakları, modern mobilyaları ve şehir manzarasıyla unutulmaz bir konaklama sunar.',
    shortDescription: 'Geniş ve ferah standart çift kişilik oda, çiftler için ideal.',
    price: 1200,
    size: '30 m²',
    capacity: 2,
    features: [
      'Balkon',
      'Şehir Manzarası',
      'Mini Bar',
      'Kasa',
      'Çalışma Masası',
      'WiFi',
      'Banyo'
    ],
    amenities: [
      'WiFi',
      'TV',
      'Klima',
      'Banyo',
      'Duş',
      'Saç Kurutma Makinesi',
      'Telefon',
      'Kahve Makinesi',
      'Ütü',
      'Ütü Masası'
    ],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'
    ]
  },
  {
    name: 'Standart Aile Odası',
    type: 'standard' as const,
    description: 'Aileler için özel olarak tasarlanmış geniş standart oda. İki yatak odası ve oturma alanı ile ailelerin rahatça konaklayabileceği ideal bir mekan.',
    shortDescription: 'Aileler için geniş standart oda, iki yatak odası ve oturma alanı.',
    price: 1800,
    size: '45 m²',
    capacity: 4,
    features: [
      'Balkon',
      'Şehir Manzarası',
      'Mini Bar',
      'Kasa',
      'Çalışma Masası',
      'WiFi',
      'Oturma Alanı',
      'İki Yatak Odası'
    ],
    amenities: [
      'WiFi',
      'TV',
      'Klima',
      'Banyo',
      'Duş',
      'Saç Kurutma Makinesi',
      'Telefon',
      'Kahve Makinesi',
      'Ütü',
      'Ütü Masası',
      'Bebek Yatağı'
    ],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
    ]
  }
]

const suiteRooms = [
  {
    name: 'Deluxe Suite',
    type: 'suite' as const,
    description: 'Lüks ve şık deluxe suite odamız, geniş oturma alanı, ayrı yatak odası ve muhteşem şehir manzarası ile en üst düzey konfor sunar. Özel balkon ve jakuzili banyo ile unutulmaz bir deneyim.',
    shortDescription: 'Lüks deluxe suite, geniş oturma alanı ve jakuzili banyo ile.',
    price: 2500,
    size: '60 m²',
    capacity: 2,
    features: [
      'Geniş Balkon',
      'Panoramik Şehir Manzarası',
      'Mini Bar',
      'Kasa',
      'Çalışma Masası',
      'WiFi',
      'Oturma Alanı',
      'Jakuzili Banyo',
      'Ayrı Yatak Odası',
      'Balkon Jakuzi'
    ],
    amenities: [
      'WiFi',
      'Smart TV',
      'Klima',
      'Lüks Banyo',
      'Jakuzi',
      'Duş',
      'Saç Kurutma Makinesi',
      'Telefon',
      'Nespresso Kahve Makinesi',
      'Ütü',
      'Ütü Masası',
      'Banyo Terlikleri',
      'Bornoz',
      'Premium Yatak Çarşafları'
    ],
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
    ]
  },
  {
    name: 'Presidential Suite',
    type: 'suite' as const,
    description: 'En lüks ve geniş presidential suite odamız, iki yatak odası, geniş oturma alanı, özel yemek alanı ve muhteşem panoramik manzara ile en üst düzey konaklama deneyimi sunar.',
    shortDescription: 'En lüks presidential suite, iki yatak odası ve özel yemek alanı.',
    price: 4500,
    size: '120 m²',
    capacity: 4,
    features: [
      'Geniş Balkon',
      'Panoramik Şehir Manzarası',
      'Premium Mini Bar',
      'Kasa',
      'Çalışma Masası',
      'WiFi',
      'Geniş Oturma Alanı',
      'Jakuzili Banyo',
      'İki Yatak Odası',
      'Özel Yemek Alanı',
      'Balkon Jakuzi',
      'Özel Giriş'
    ],
    amenities: [
      'WiFi',
      'Smart TV (2 adet)',
      'Klima',
      'Lüks Banyo',
      'Jakuzi',
      'Duş',
      'Sauna',
      'Saç Kurutma Makinesi',
      'Telefon',
      'Nespresso Kahve Makinesi',
      'Ütü',
      'Ütü Masası',
      'Banyo Terlikleri',
      'Bornoz',
      'Premium Yatak Çarşafları',
      'Özel Butik Hizmet',
      '24/7 Oda Servisi'
    ],
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
    ]
  },
  {
    name: 'Honeymoon Suite',
    type: 'suite' as const,
    description: 'Romantik balayı çiftleri için özel olarak tasarlanmış honeymoon suite. Özel dekorasyon, şömine, jakuzili banyo ve muhteşem manzara ile unutulmaz bir balayı deneyimi.',
    shortDescription: 'Romantik honeymoon suite, şömine ve jakuzili banyo ile.',
    price: 3200,
    size: '70 m²',
    capacity: 2,
    features: [
      'Geniş Balkon',
      'Panoramik Manzara',
      'Premium Mini Bar',
      'Kasa',
      'WiFi',
      'Romantik Oturma Alanı',
      'Şömine',
      'Jakuzili Banyo',
      'Özel Dekorasyon',
      'Balkon Jakuzi'
    ],
    amenities: [
      'WiFi',
      'Smart TV',
      'Klima',
      'Lüks Banyo',
      'Jakuzi',
      'Duş',
      'Saç Kurutma Makinesi',
      'Telefon',
      'Nespresso Kahve Makinesi',
      'Ütü',
      'Ütü Masası',
      'Banyo Terlikleri',
      'Bornoz',
      'Premium Yatak Çarşafları',
      'Romantik Dekorasyon',
      'Şömine'
    ],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
    ]
  }
]

async function seedRooms() {
  try {
    await connectDB()
    console.log('MongoDB bağlantısı başarılı')

    // Mevcut odaları kontrol et
    const existingRooms = await Room.find({})
    if (existingRooms.length > 0) {
      console.log(`${existingRooms.length} oda zaten mevcut. Devam etmek için mevcut odaları silmek ister misiniz?`)
      console.log('Mevcut odaları silmek için Room.deleteMany({}) komutunu kullanabilirsiniz.')
      return
    }

    // Standart odaları ekle
    console.log('Standart odalar ekleniyor...')
    for (const roomData of standardRooms) {
      const room = new Room(roomData)
      await room.save()
      console.log(`✓ ${roomData.name} eklendi`)
    }

    // Suite odaları ekle
    console.log('Suite odalar ekleniyor...')
    for (const roomData of suiteRooms) {
      const room = new Room(roomData)
      await room.save()
      console.log(`✓ ${roomData.name} eklendi`)
    }

    console.log('\n✅ Tüm odalar başarıyla eklendi!')
    console.log(`Toplam: ${standardRooms.length} standart oda, ${suiteRooms.length} suite oda`)
  } catch (error) {
    console.error('Hata:', error)
  } finally {
    process.exit()
  }
}

seedRooms()

