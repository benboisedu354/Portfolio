import { useEffect } from 'react'
import ThreeDScene from '@components/3d/ThreeDScene'

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section - Responsive Layout */}
      <div className="relative h-screen flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden">
        
        {/* 3D Scene - Background on mobile, right side on desktop */}
        <div className="absolute inset-0 md:static md:flex-1 w-full h-full">
          <ThreeDScene />
        </div>

        {/* Text Content - Centered on mobile, left side on desktop */}
        <div className="absolute inset-0 md:static md:flex-1 flex flex-col items-center justify-center md:justify-start md:items-start z-10 space-y-6 px-6 sm:px-8 md:px-12 lg:px-16 md:py-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Benjamin Boisédu
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 animate-slide-in">
            Développeur web, automatisation et cyber-sécurité
          </p>
          <div className="flex gap-3 sm:gap-4 pt-8 justify-center md:justify-start flex-wrap">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_#6366f1] relative group overflow-hidden text-sm sm:text-base">
              <a href="/projects">
                <span className="relative z-10">Voir mes projets</span>
              </a>
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-indigo-400 bg-indigo-500/5 transition-all transform hover:scale-105 relative group overflow-hidden text-sm sm:text-base">
              <a href="/contact">
                <span className="relative z-10">Me contacter</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-darker/50 backdrop-blur-sm border-t border-indigo-500/20">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Change les Stats par mes années d'etudes, mes projets etc */}
            {[
              { number: '4+', label: 'Projets complétés' },
              { number: '3+', label: 'Années de fac' },
              { number: '10+', label: 'Technologies maîtrisées' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
