import { Link } from 'react-router-dom'
import { Project } from '@/Data/Project'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`} key={index} className="no-underline" preventScrollReset >
                <div
                  key={index}
                  className=" grid grid-cols-1 grid-rows-1 group h-full bg-indigo-500/5 border border-indigo-500/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:to-purple-500/40 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-l font-bold text-indigo-300 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <span>
                          {project.statut === 'En cours' ? (
                            <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                              En cours
                            </span>
                          ) : project.statut === 'Terminé' ? (
                            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                              Terminé
                            </span>
                          ) : (
                            <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                              À venir
                            </span>
                          )}
                        </span>
                      </div>
                      
                      <span className="text-xs text-indigo-400 uppercase tracking-wide">
                        {project.place} - {project.date}
                      </span>
                    </div>
                    <p className="text-gray-400">{project.description.substring(0, 100)}...</p>
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
                    <div className="flex flex-row gap-2 flex-wrap mt-4 items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-indigo-400 hover:text-purple-400 transition-colors font-semibold"
                      >
                        Voir le projet 
                      </a>
                    </div>
                  </div>
                </div>
                </Link>
  )
}
