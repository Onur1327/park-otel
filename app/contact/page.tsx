'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Ad Soyad gereklidir'
    }
    if (name.trim().length < 2) {
      return 'Ad Soyad en az 2 karakter olmalıdır'
    }
    if (name.trim().length > 100) {
      return 'Ad Soyad en fazla 100 karakter olabilir'
    }
    if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(name.trim())) {
      return 'Ad Soyad sadece harf içermelidir'
    }
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'E-posta gereklidir'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Geçerli bir e-posta adresi giriniz'
    }
    return undefined
  }

  const validatePhone = (phone: string): string | undefined => {
    if (phone.trim() && phone.trim().length > 0) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/
      if (!phoneRegex.test(phone)) {
        return 'Geçerli bir telefon numarası giriniz'
      }
      const digitsOnly = phone.replace(/\D/g, '')
      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        return 'Telefon numarası 10-15 rakam arasında olmalıdır'
      }
    }
    return undefined
  }

  const validateSubject = (subject: string): string | undefined => {
    if (!subject) {
      return 'Konu seçimi gereklidir'
    }
    return undefined
  }

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Mesaj gereklidir'
    }
    if (message.trim().length < 10) {
      return 'Mesaj en az 10 karakter olmalıdır'
    }
    if (message.trim().length > 1000) {
      return 'Mesaj en fazla 1000 karakter olabilir'
    }
    return undefined
  }

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return validateName(value)
      case 'email':
        return validateEmail(value)
      case 'phone':
        return validatePhone(value)
      case 'subject':
        return validateSubject(value)
      case 'message':
        return validateMessage(value)
      default:
        return undefined
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name
    setTouched({ ...touched, [fieldName]: true })
    
    const error = validateField(fieldName, formData[fieldName as keyof typeof formData])
    setErrors({ ...errors, [fieldName]: error })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name
    const value = e.target.value
    
    setFormData({
      ...formData,
      [fieldName]: value,
    })

    // Real-time validation for touched fields
    if (touched[fieldName]) {
      const error = validateField(fieldName, value)
      setErrors({ ...errors, [fieldName]: error })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    newErrors.name = validateName(formData.name)
    newErrors.email = validateEmail(formData.email)
    newErrors.phone = validatePhone(formData.phone)
    newErrors.subject = validateSubject(formData.subject)
    newErrors.message = validateMessage(formData.message)

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    })

    return !Object.values(newErrors).some(error => error !== undefined)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setErrors({})
      setTouched({})
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Sorularınız, önerileriniz veya rezervasyon talepleriniz için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Adres</h3>
                    <p className="text-gray-100">
                      Gülük, Osman Kavuncu Blv. No:79<br />
                      38260 Melikgazi / Kayseri
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Telefon</h3>
                    <p className="text-gray-100">
                      <a
                        href="tel:+903523208384"
                        className="text-gray-100 hover:text-white transition-colors"
                      >
                        0 352 320 83 84
                      </a>
                      <br />
                      <a
                        href="tel:+905325183022"
                        className="text-gray-100 hover:text-white transition-colors"
                      >
                        +90 532 518 30 22
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">E-posta</h3>
                    <p className="text-gray-100">
                      <a
                        href="mailto:info@kayseriparkotel.com"
                        className="text-gray-100 hover:text-white transition-colors"
                      >
                        info@kayseriparkotel.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-100">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 10:00 - 16:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Harita buraya eklenecek</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Mesajınız Gönderildi!</h3>
                  <p className="text-green-700">En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field ${errors.name && touched.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="Adınız ve soyadınız"
                      aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1" role="alert">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field ${errors.email && touched.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="ornek@email.com"
                        aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                        aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1" role="alert">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field ${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="+90 555 123 45 67"
                        aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && touched.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1" role="alert">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field ${errors.subject && touched.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                      aria-invalid={errors.subject && touched.subject ? 'true' : 'false'}
                      aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Konu seçin</option>
                      <option value="rezervasyon">Rezervasyon</option>
                      <option value="bilgi">Genel Bilgi</option>
                      <option value="sikayet">Şikayet</option>
                      <option value="oneriler">Öneriler</option>
                      <option value="diger">Diğer</option>
                    </select>
                    {errors.subject && touched.subject && (
                      <p id="subject-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1" role="alert">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız * <span className="text-gray-500 text-xs font-normal">({formData.message.length}/1000)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field ${errors.message && touched.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="Mesajınızı buraya yazın..."
                      maxLength={1000}
                      aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                      aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                    />
                    {errors.message && touched.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center space-x-1" role="alert">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Mesaj Gönder</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

