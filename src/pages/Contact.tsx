import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Contact
        </h1>

        <div className="space-y-8">
          <p className="text-gray-300 text-lg">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter. Je serais ravi de collaborer avec vous !
          </p>

          <div className="space-y-4">
            {[
              { label: 'Email', value: 'votre.email@example.com', href: 'mailto:votre.email@example.com' },
              { label: 'LinkedIn', value: 'linkedin.com/in/votreprofil', href: '#' },
              { label: 'GitHub', value: 'github.com/votreprofil', href: '#' },
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

          <form className="space-y-4 mt-12">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-darker/50 border border-indigo-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-darker/50 border border-indigo-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="votre.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-darker/50 border border-indigo-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:scale-105"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
