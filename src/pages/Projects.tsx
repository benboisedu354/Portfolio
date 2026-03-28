import { useEffect, useState } from 'react'
import { projects } from '../Data/Project.ts'
import FilterTagProject from '../components/Features/FilterTagProject.tsx'
import { useLocation } from 'react-router-dom'
import ProjectCard from '@/components/common/ProjectCard.tsx'

export default function Projects() {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const tag = queryParams.get('tag')

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

  useEffect(() => {
    if (tag) {
      setSelectedTag(tag)
    }
  }, [tag])
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Mes Réalisations
        </h1>
        {/* Responsive filter buttons */}
        <div className="flex gap-4 mb-12 justify-center md:justify-start md:flex-row flex-col items-center">
          <button
            onClick={() => setActiveFilter('dev')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeFilter === 'dev'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
            }`}
          >
            Projets de Développement
            <span
              className={`px-1 py-2 rounded-lg font-semibold transition-colors  ${
                activeFilter === 'dev'
                  ? 'text-white'
                  : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
              }`}
            >
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
            <span
              className={`px-1 py-2 rounded-lg font-semibold transition-colors${
                activeFilter === 'graphic'
                  ? 'text-white'
                  : 'bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10'
              }`}
            >
              ({projects.filter((project) => project.type === 'graphic').length})
            </span>
          </button>

          <FilterTagProject onTagChange={handleTagChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredByTagProjects.map((project, i) => ProjectCard({ project, index: i }))}
        </div>
      </div>
    </div>
  )
}
