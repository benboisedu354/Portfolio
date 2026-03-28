import { useEffect } from 'react'
import ThreeDScene from '@components/3d/ThreeDScene'
import { timeline } from '../Data/Project.ts'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      <div className="relative h-screen flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden">
        <div className="absolute inset-0 md:static md:flex-1 w-full h-full">
          <ThreeDScene />
        </div>

        <div className="absolute inset-0 md:static md:flex-1 flex flex-col items-center justify-center md:justify-start md:items-start z-10 space-y-6 px-6 sm:px-8 md:px-12 lg:px-16 md:py-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Benjamin Boisédu
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 animate-slide-in">
            Développeur web, automatisation et cyber-sécurité
          </p>
          <div className="flex gap-3 sm:gap-4 pt-8 justify-center md:justify-start flex-wrap">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_#6366f1] relative group overflow-hidden text-sm sm:text-base">
              <Link to="/projects">Voir mes projets</Link>
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-indigo-400 bg-indigo-500/5 transition-all transform hover:scale-105 relative group overflow-hidden text-sm sm:text-base">
              <Link to="/contact">Me contacter</Link>
            </button>
          </div>
        </div>

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 filter blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-30 filter blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="bg-darker/50 backdrop-blur-sm border-t border-indigo-500/20">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Double Licence', value: 'Bac+3', color: 'from-indigo-400 to-indigo-600' },
              { label: 'Projets réalisés', value: '4+', color: 'from-purple-400 to-purple-600' },
              { label: 'Technologies', value: '10+', color: 'from-pink-400 to-pink-600' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-indigo-400 mb-8">Mon parcours</h2>
          <div className="space-y-12">
            {timeline.map((event, i) => (
              <div key={i} className="relative pl-8">
                <div
                  className={`absolute left-0 top-0 w-4 h-4 rounded-full ${
                    event.type === 'milestone' ? 'bg-pink-500' : 'bg-indigo-500'
                  }`}
                />
                <div className="border-l border-gray-700 pl-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-400">{event.year}</span>
                    <h3 className="text-xl font-semibold text-indigo-300">{event.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  {event.branches && (
                    <div className="space-y-4">
                      {event.branches.map((branch, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20 transition-colors group"
                        >
                          <span className="text-2xl">{branch.icon}</span>
                          <div>
                            <h4 className="text-lg font-bold text-indigo-300 group-hover:text-purple-300 transition-colors">
                              {branch.title}
                            </h4>
                            <p className="text-sm text-gray-400">{branch.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
