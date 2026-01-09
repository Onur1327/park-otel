import { Wifi, Car, Utensils, Bell, Shield, Presentation } from 'lucide-react'

const amenities = [
  {
    icon: Wifi,
    title: 'İnternet',
    description: 'Tüm alanlarda yüksek hızlı ücretsiz internet erişimi',
  },
  {
    icon: Car,
    title: 'Otopark',
    description: 'Güvenli ve ücretsiz otopark hizmeti',
  },
  {
    icon: Utensils,
    title: 'Restoran',
    description: 'Lezzetli yemekler ve zengin menü seçenekleri',
  },
  {
    icon: Bell,
    title: 'Oda Servisi',
    description: '7/24 oda servisi ile konforlu hizmet',
  },
  {
    icon: Shield,
    title: '24/7 Güvenlik',
    description: 'Kesintisiz güvenlik ve güvenli konaklama',
  },
  {
    icon: Presentation,
    title: 'Toplantı Alanı',
    description: 'Modern ve donatımlı toplantı salonları',
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Olanaklarımız
          </h2>
          <p className="text-gray-600 text-lg">
            Konforunuz için sunduğumuz tüm hizmetler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

