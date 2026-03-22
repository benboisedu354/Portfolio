import { useEffect, useState } from 'react'
import { projects } from '../Data/Project.ts'

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // I want function to switch between dev project and graphic project, but for now I will just display the dev projects, I will add the graphic projects later

  const [activeFilter, setActiveFilter] = useState('dev')

  const filteredProjects = projects.filter((project) => project.type === activeFilter)

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Projets
        </h1>
        {/* Input to chose between dev project and graphic project when the input is active change the background color */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('dev')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeFilter === 'dev'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
            }`}
          >
            Projets de Développement
          </button>
          <button
            onClick={() => setActiveFilter('graphic')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeFilter === 'graphic'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
            }`}
          >
            Projets Graphiques
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-indigo-500/5 border border-indigo-500/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:to-purple-500/40 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-indigo-300 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-indigo-400 hover:text-purple-400 transition-colors font-semibold"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
