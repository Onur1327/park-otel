# Park Hotel - Otel Tanıtım Sitesi

Modern ve kullanışlı bir otel tanıtım sitesi. React.js, Next.js, TypeScript ve MongoDB kullanılarak geliştirilmiştir.

## Özellikler

- 🏨 Otel tanıtım sayfaları
- 🖼️ Statik JSON verisi ile oda/otel/galeri yönetimi
- 🔗 Rezervasyon linki yönlendirme
- 📱 Responsive tasarım
- 🎨 Modern ve kullanıcı dostu arayüz

## Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın

`.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
MONGODB_URI=
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Google Analytics (Opsiyonel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification (Opsiyonel)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## Google Analytics Kurulumu

1. [Google Analytics](https://analytics.google.com/) hesabı oluşturun
2. Yeni bir özellik (property) oluşturun ve Measurement ID'yi alın (G-XXXXXXXXXX formatında)
3. `.env` dosyasına `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` ekleyin
4. Google Analytics, kullanıcılar çerezleri kabul ettikten sonra otomatik olarak aktif olacaktır

## Google Search Console Kurulumu

1. [Google Search Console](https://search.google.com/search-console) hesabı oluşturun
2. Sitenizi ekleyin ve doğrulama yöntemini seçin
3. HTML etiketi yöntemini seçin ve verification code'u alın
4. `.env` dosyasına `NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code` ekleyin
5. Site yeniden yüklendiğinde doğrulama otomatik olarak yapılacaktır

## Kullanım

### Statik Veri Yapısı

Tüm oda, otel ve galeri verileri `data` klasöründeki dosyalarda tutulur:

- `data/rooms.ts` → Odalar (`ROOMS` dizisi)
- `data/hotels.ts` → Oteller (`HOTELS` dizisi)
- `data/gallery.ts` → Galeri kategorileri (`GALLERY_CATEGORIES` dizisi)

Bu dizilerdeki alanları (başlık, açıklama, fiyat, görsel URL'leri vb.) düzenleyerek site içeriğini güncelleyebilirsiniz.

### Rezervasyon Linki

Her otel için bir rezervasyon linki ekleyebilirsiniz. Bu link, otel detay sayfasında "Rezervasyon Yap" butonu ile yeni bir sekmede açılır.

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **MongoDB** - Veritabanı
- **Mongoose** - MongoDB ODM
- **Tailwind CSS** - Stilizasyon
- **Lucide React** - İkonlar

## Proje Yapısı

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes (sadece read-only)
│   ├── hotels/            # Otel sayfaları
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
├── lib/                   # Yardımcı fonksiyonlar
├── models/                # MongoDB modelleri
└── public/                # Statik dosyalar
```

## Lisans

Bu proje özel kullanım içindir.

