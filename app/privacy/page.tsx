import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Eye, Cookie, FileText, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Park Hotel gizlilik politikası. Kişisel verilerinizin korunması bizim için önemlidir.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gizlilik Politikası</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Kişisel verilerinizin korunması bizim için önemlidir
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Giriş</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Park Hotel olarak, ziyaretçilerimizin ve müşterilerimizin kişisel verilerinin 
              korunmasına büyük önem vermekteyiz. Bu Gizlilik Politikası, web sitemizi 
              ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda topladığımız bilgilerin 
              nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>

          {/* Data Collection */}
          <section id="data-collection">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-6 w-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Toplanan Veriler</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Otomatik Olarak Toplanan Veriler</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP adresi</li>
                  <li>Tarayıcı türü ve versiyonu</li>
                  <li>İşletim sistemi</li>
                  <li>Ziyaret edilen sayfalar</li>
                  <li>Ziyaret tarihi ve saati</li>
                  <li>Referans URL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Gönüllü Olarak Sağlanan Veriler</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>İletişim formu aracılığıyla sağlanan ad, e-posta, telefon</li>
                  <li>Rezervasyon talepleri</li>
                  <li>E-posta abonelikleri</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Policy */}
          <section id="cookies">
            <div className="flex items-center space-x-3 mb-4">
              <Cookie className="h-6 w-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Çerez Politikası</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Web sitemiz, kullanıcı deneyimini iyileştirmek ve site işlevselliğini sağlamak 
                için çerezler kullanmaktadır.
              </p>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kullandığımız Çerez Türleri</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Zorunlu Çerezler</h4>
                    <p className="text-sm text-gray-600">
                      Web sitesinin temel işlevlerini sağlamak için gereklidir. Bu çerezler 
                      olmadan site düzgün çalışmaz.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Performans Çerezleri</h4>
                    <p className="text-sm text-gray-600">
                      Site performansını analiz etmek ve kullanıcı deneyimini iyileştirmek 
                      için kullanılır.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">İşlevsellik Çerezleri</h4>
                    <p className="text-sm text-gray-600">
                      Tercihlerinizi hatırlamak ve kişiselleştirilmiş deneyim sunmak için kullanılır.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Çerezleri Yönetme</h3>
                <p className="text-sm leading-relaxed">
                  Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz. Ancak, 
                  bazı çerezleri devre dışı bırakmak web sitesinin bazı özelliklerinin 
                  çalışmamasına neden olabilir.
                </p>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Verilerin Kullanımı</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                Topladığımız veriler aşağıdaki amaçlar için kullanılmaktadır:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Hizmetlerimizi sağlamak ve iyileştirmek</li>
                <li>Müşteri taleplerini yanıtlamak</li>
                <li>Rezervasyon işlemlerini gerçekleştirmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                <li>Güvenlik ve dolandırıcılık önleme</li>
                <li>İstatistiksel analizler yapmak</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="h-6 w-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Veri Güvenliği</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve idari önlemler 
                almaktayız. Verileriniz şifrelenmiş bağlantılar üzerinden iletilir ve güvenli 
                sunucularda saklanır.
              </p>
              <p className="leading-relaxed">
                Ancak, internet üzerinden veri iletiminin %100 güvenli olmadığını unutmayın. 
                Bu nedenle, mutlak güvenlik garantisi veremeyiz.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haklarınız</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">İletişim</h2>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Gizlilik politikamız hakkında sorularınız veya kişisel verilerinizle ilgili 
                talepleriniz için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>E-posta:</strong>{' '}
                  <a
                    href="mailto:info@kayseriparkotel.com"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    info@kayseriparkotel.com
                  </a>
                </p>
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a
                    href="tel:+903523208384"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    0 352 320 83 84
                  </a>{' '}
                  /{' '}
                  <a
                    href="tel:+905325183022"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    +90 532 518 30 22
                  </a>
                </p>
                <p>
                  <strong>Adres:</strong> Gülük, Osman Kavuncu Blv. No:79, 38260 Melikgazi / Kayseri
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

