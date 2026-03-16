import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: 'Projet 3D Interactif',
      description: 'Une expérience interactive utilisant Three.js et React Three Fiber',
      tags: ['React', 'Three.js', 'TypeScript'],
      link: '#',
    },
    {
      title: 'Application Web',
      description: 'Application full stack avec React et Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Visualisation Données',
      description: 'Dashboard interactif avec graphiques 3D',
      tags: ['React Three Fiber', 'D3.js', 'WebGL'],
      link: '#',
    },
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Projets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-indigo-500/5 border border-indigo-500/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:to-purple-500/40 transition-colors" />
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
