import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Park Hotel ile iletişime geçin. Sorularınız, önerileriniz veya rezervasyon talepleriniz için bizimle iletişime geçin.',
  keywords: ['iletişim', 'rezervasyon', 'otel iletişim', 'adres', 'telefon'],
  openGraph: {
    title: 'İletişim | Park Hotel',
    description: 'Sorularınız, önerileriniz veya rezervasyon talepleriniz için bizimle iletişime geçin',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

