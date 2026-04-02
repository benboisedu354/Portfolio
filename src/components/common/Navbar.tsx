import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-darker/80 backdrop-blur-md z-50 border-b border-indigo-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transform group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Benjamin Boisédu
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À Propos</NavLink>
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-indigo-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-indigo-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-indigo-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileNavLink to="/">Accueil</MobileNavLink>
            <MobileNavLink to="/about">À Propos</MobileNavLink>
            <MobileNavLink to="/projects">Projets</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </div>
        )}
        <div className="text-white text-center py-2">
          <p className="text-sm font-bold text-red-600">
            ⚠️ Ce portfolio est en cours de développement. Certaines fonctionnalités peuvent ne pas être disponibles ou fonctionner de manière optimale. Merci de votre compréhension !
          </p>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-indigo-400 transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
    </Link>
  )
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block text-gray-300 hover:text-indigo-400 transition-colors px-4 py-2"
    >
      {children}
    </Link>
  )
}
