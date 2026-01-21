import { Metadata } from 'next'
import { Hotel, Award, Users, Heart, Shield, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Park Hotel hakkında bilgi edinin. Misyonumuz, vizyonumuz ve değerlerimiz hakkında daha fazla bilgi.',
  keywords: ['hakkımızda', 'otel hakkında', 'misyon', 'vizyon', 'değerler'],
  openGraph: {
    title: 'Hakkımızda | Park Hotel',
    description: 'Park Hotel olarak misafirlerimize en iyi hizmeti sunmak için buradayız',
    type: 'website',
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Misyonumuz',
      description: 'Misafirlerimize unutulmaz bir konaklama deneyimi sunarak, onların memnuniyetini en üst seviyede tutmak ve her ziyarette yeniden tercih edilen bir marka olmak.',
    },
    {
      icon: Star,
      title: 'Vizyonumuz',
      description: 'Türkiye\'nin önde gelen otel zincirlerinden biri olmak ve dünya standartlarında hizmet kalitesi ile sektörde öncü konumda yer almak.',
    },
    {
      icon: Shield,
      title: 'Değerlerimiz',
      description: 'Müşteri memnuniyeti, kalite, güvenilirlik ve sürdürülebilirlik ilkelerimiz doğrultusunda hizmet vermekteyiz.',
    },
  ]

  const features = [
    {
      icon: Hotel,
      title: 'Lüks Konaklama',
      description: 'Modern ve şık odalarımızda konforlu bir konaklama deneyimi yaşayın.',
    },
    {
      icon: Award,
      title: 'Ödüllü Hizmet',
      description: 'Yılların deneyimi ve mükemmel hizmet anlayışımızla sektörde öncüyüz.',
    },
    {
      icon: Users,
      title: 'Profesyonel Ekip',
      description: 'Alanında uzman ve misafirperver ekibimiz her zaman yanınızda.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Park Hotel olarak misafirlerimize en iyi hizmeti sunmak için buradayız
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Park Hotel, yılların deneyimi ve misafirperverlik anlayışıyla kurulmuş, 
                  Türkiye'nin önde gelen otel zincirlerinden biridir. Misafirlerimize 
                  unutulmaz bir konaklama deneyimi sunmak için sürekli kendimizi 
                  geliştiriyor ve yeniliyoruz.
                </p>
                <p>
                  Modern mimari, şık tasarım ve en son teknolojik imkanlarla donatılmış 
                  tesislerimizde, her detay misafirlerimizin konforu ve memnuniyeti 
                  için düşünülmüştür. Profesyonel ekibimiz, 7/24 hizmet anlayışıyla 
                  yanınızda olmaya devam ediyor.
                </p>
                <p>
                  Sürdürülebilir turizm anlayışımız ve çevreye duyarlı yaklaşımımızla, 
                  gelecek nesillere daha iyi bir dünya bırakmak için çalışıyoruz.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <Hotel className="h-32 w-32 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-gray-600 text-lg">
              İş yapış şeklimizi belirleyen temel değerlerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-gray-600 text-lg">
              Size sunduğumuz özel imkanlar ve hizmetler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-200">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-primary-200">Mutlu Misafir</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-primary-200">Oda Sayısı</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8</div>
              <div className="text-primary-200">Ortalama Puan</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

