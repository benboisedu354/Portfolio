import { useEffect, useState } from 'react'
import { languages, otherProjects, skills, timeline } from '../Data/Project.ts'
import { Link } from 'react-router-dom'

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // {I want to add a small animation when the user clicks on an event in the timeline, it will expand to show more details and branches}
  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }


  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-darker to-dark">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Mon Parcours
        </h1>
        <p className="text-gray-400 text-lg mb-16">
          Un voyage du bac vers l'excellence en développement
        </p>

        {/* Timeline Main */}
        <div className="relative">
          {/* Ligne principale verticale */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500" />

          {/* Événements */}
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={index} className="relative pl-24">
                {/* Point sur la timeline */}
                <div
                  className={`absolute left-0 top-2 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all cursor-pointer ${
                    event.type === 'milestone'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-300 shadow-lg shadow-indigo-500/50'
                      : 'bg-darker border-indigo-500 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30'
                  }`}
                  onClick={() => toggleExpanded(index)}
                >
                  <span className="text-xl font-bold text-white">{event.year.split('-')[0]}</span>
                </div>

                {/* Contenu */}
                <div
                  className={`p-6 rounded-lg border transition-all cursor-pointer ${
                    expandedIndex === index
                      ? 'bg-indigo-500/20 border-indigo-400/60 shadow-lg shadow-indigo-500/20'
                      : 'bg-indigo-500/10 border-indigo-500/30 hover:bg-indigo-500/15 hover:border-indigo-400/40'
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-indigo-300 mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                    <div className="text-2xl ml-4">{expandedIndex === index ? '−' : '+'}</div>
                  </div>

                  {/* Branches */}
                  {expandedIndex === index && event.branches && (
                    <div className="mt-6 pt-6 border-t border-indigo-500/30">
                      <p className="text-sm text-indigo-300 mb-4 font-semibold">
                        Influences & soutiens
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {event.branches.map((branch, branchIndex) => (
                          <div
                            key={branchIndex}
                            className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">{branch.icon}</span>
                              <div>
                                <h4 className="font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
                                  {branch.title}
                                </h4>
                                <p className="text-sm text-gray-400">{branch.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Double Licence', value: 'Bac+3', color: 'from-indigo-400 to-indigo-600' },
            { label: 'Projets réalisés', value: '4+', color: 'from-purple-400 to-purple-600' },
            { label: 'Technologies', value: '10+', color: 'from-pink-400 to-pink-600' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-8 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 border border-opacity-30 text-center hover:bg-opacity-20 transition-all`}
            >
              <div
                className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text mb-3`}
              >
                {stat.value}
              </div>
              <p className="text-white font-semibold text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Compétences */}
        <div className="mt-20 space-y-8">
          <h2 className="text-3xl font-bold text-indigo-400">Compétences & Intérêts</h2>

          <div>
            <h3 className="text-xl font-semibold text-purple-300 mb-4">
              Langages de programmation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20 hover:border-purple-500/50 transition-all group"
                >
                  <span className="text-gray-300 group-hover:text-purple-300 transition-colors">
                    ⚙️ {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Centres d'intérêt</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Automatisation de tâches', icon: '🤖' },
                { title: 'Sécurité Web', icon: '🔒' },
                { title: 'Systèmes & Réseaux', icon: '🌐' },
              ].map((interest, i) => (
                <div
                  key={i}
                  className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-all group"
                >
                  <span className="text-gray-300 group-hover:text-purple-300 transition-colors">
                    {interest.icon} {interest.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Qualités</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Rigoureux', 'Autonome', 'Autodidacte', 'Curieux'].map((quality, i) => (
                <div
                  key={i}
                  className="p-3 bg-pink-500/10 border border-pink-500/30 rounded-lg text-center hover:bg-pink-500/20 transition-all"
                >
                  <span className="text-gray-300 text-sm">{quality}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Langues</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20 transition-all"
                >
                  <div className="text-2xl mb-2">{lang.icon}</div>
                  <div className="font-semibold text-purple-300">{lang.lang}</div>
                  <div className="text-sm text-gray-400">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projets Techniques */}
        <div className="mt-20 space-y-8">
          <h2 className="text-3xl font-bold text-indigo-400">Projets Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, i) => (
              // {redirect to the project page}
              <Link to={project.link || '#'} target="_blank" rel="noopener noreferrer" key={i} className="group">
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-lg hover:border-purple-500/50 hover:shadow-lg hover:shadow-indigo-500/20 transition-all group"
                >
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold text-indigo-300 mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.tech}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
