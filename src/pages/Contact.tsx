import { useEffect, useState, useRef } from 'react'
import { sendContactEmail, ContactFormData } from '@utils/emailService'

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
    if (errors[id as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setFeedback(null)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    const result = await sendContactEmail(formData)

    if (result.success) {
      setFeedback({
        type: 'success',
        message: result.message || 'Message envoyé avec succès !',
      })
      setFormData({ name: '', email: '', message: '' })
      timeoutRef.current = setTimeout(() => {
        setFeedback(null)
      }, 5000)
    } else {
      setFeedback({
        type: 'error',
        message: result.message || 'Erreur lors de l\'envoi du message',
      })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Contact
        </h1>

        <div className="space-y-8">
          <p className="text-gray-300 text-lg">
            Je suis actuellement à la recherche d'opportunités professionnelles en tant que développeur web. N'hésitez pas à me contacter !
          </p>
          <div className="space-y-4">
            {[
              { label: 'Email', value: 'benjaminboisedu354@gmail.com', href: 'mailto:benjaminboisedu354@gmail.com' },
              { label: 'LinkedIn', value: 'linkedin.com/in/benjamin-boisédu-09434a241/', href: 'https://www.linkedin.com/in/benjamin-bois%C3%A9du-09434a241/' },
              { label: 'GitHub', value: 'github.com/benboisedu354', href: 'https://github.com/benboisedu354' },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                className="block p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20 hover:border-purple-500/50 transition-all group"
              >
                <div className="text-indigo-400 group-hover:text-purple-300 transition-colors font-semibold mb-1">
                  {contact.label}
                </div>
                <div className="text-gray-300">{contact.value}</div>
              </a>
            ))}
          </div>

          {feedback && (
            <div
              className={`p-4 rounded-lg border ${
                feedback.type === 'success'
                  ? 'bg-green-500/10 border-green-500/30 text-green-300'
                  : 'bg-red-500/10 border-red-500/30 text-red-300'
              } ${
                feedback.type === 'success'
                  ? 'animate-success-bounce'
                  : 'animate-fade-in'
              } flex items-center gap-3`}
            >
              {feedback.type === 'success' && (
                <svg
                  className="w-6 h-6 flex-shrink-0 animate-checkmark-draw"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span>{feedback.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-12">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-darker/50 border rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-indigo-500/30 focus:border-purple-500'
                }`}
                placeholder="Votre nom"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-darker/50 border rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-indigo-500/30 focus:border-purple-500'
                }`}
                placeholder="votre.email@example.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-darker/50 border rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                  errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-indigo-500/30 focus:border-purple-500'
                }`}
                placeholder="Votre message..."
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
