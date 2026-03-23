import { useEffect, useState } from 'react'
import { projects } from '../Data/Project.ts'
import FilterTagProject from '../components/Features/FilterTagProject.tsx'

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeFilter, setActiveFilter] = useState('dev')
  const filteredProjects = projects.filter((project) => project.type === activeFilter)
  const [selectedTag, setSelectedTag] = useState('')

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag)
  }

  const filteredByTagProjects = selectedTag
    ? filteredProjects.filter((project) => project.tags.includes(selectedTag))
    : filteredProjects

  

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Mes Réalisations
        </h1>
        <div className="flex gap-4 mb-12">
          {/* {I want a small number next to the button to indicate the number of projects} */}
          <button
            onClick={() => setActiveFilter('dev')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeFilter === 'dev'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
            }`}
          >
            Projets de Développement
          <span className={`px-1 py-2 rounded-lg font-semibold transition-colors  ${
              activeFilter === 'dev'
                ? 'text-white'
                : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
            }`}>
            ({projects.filter((project) => project.type === 'dev').length})
          </span>
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
          <span className={`px-1 py-2 rounded-lg font-semibold transition-colors${
              activeFilter === 'graphic'
                ? 'text-white'
                : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
            }`}> 
            ({projects.filter((project) => project.type === 'graphic').length})
          </span>
          </button>

          <FilterTagProject onTagChange={handleTagChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredByTagProjects.map((project, i) => (
            <div
              key={i}
              className=" grid grid-cols-1 grid-rows-1 group bg-indigo-500/5 border border-indigo-500/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
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
                <div className="flex flex-row gap-2 flex-wrap mt-4 justify-around ">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-indigo-400 hover:text-purple-400 transition-colors font-semibold"
                  >
                    Voir le projet 
                  </a>
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-indigo-400 hover:text-purple-400 transition-colors font-semibold"
                    > 
                      Voir la vidéo 
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
