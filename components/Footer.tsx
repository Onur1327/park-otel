import Link from 'next/link'
import { Hotel, Mail, Phone, MapPin, Navigation } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Hotel className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Park Hotel</span>
            </div>
            <p className="text-gray-400">
              Lüks konaklama deneyimi için tercihiniz. Unutulmaz anılar biriktirin.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-white transition-colors">
                  Odalarımız
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              {/* Admin Panel linki kaldırıldı - site artık statik kullanılıyor */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>0 352 320 83 84</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+90 532 518 30 22</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>info@kayseriparkotel.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Gülük, Osman Kavuncu Blv. No:79, 38260 Melikgazi / Kayseri</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Navigation className="h-5 w-5 text-primary-400" />
              <span>Konumumuz</span>
            </h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                Gülük, Osman Kavuncu Blv. No:79<br />
                38260 Melikgazi / Kayseri
              </p>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-48 border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.749317773689!2d28.9784!3d41.0351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzA2LjQiTiAyOMKwNTgnNDIuMiJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=41.0351,28.9784"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
              >
                <MapPin className="h-4 w-4" />
                <span>Haritada Aç</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Park Hotel. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

