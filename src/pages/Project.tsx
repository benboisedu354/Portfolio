import { projects } from '@/Data/Project'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

export default function Project() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // I want to get the project title from the url and display the project details based on the title
    const { title } = useParams()
    const project = projects.find((p) => p.title.replace(/\s+/g, '-').toLowerCase() === title)

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-darker to-dark">
        <div className="max-w-6xl mx-auto px-4 pt-10">
            <Link to="/projects" className=" text-md text-indigo-400 hover:text-indigo-500 transition-colors ">
                &larr; Retour à la liste des projets
            </Link>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-20">
            <div>
                <span className="text-sm text-indigo-400 uppercase tracking-wide">
                    {project?.type === 'dev' ? 'Projet de Développement' : 'Projet Graphique'}
                </span>
            </div>
            <div className="mt-4 mb-8 flex flex-row items-center gap-6 align-center">
                {project?.image && (
                    <img src={project.image} alt={project.title} className="w-[10%] h-auto rounded-lg shadow-lg" />
                )}
                <h1 className="text-5xl font-bold  bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {project?.title}
                </h1>
            </div>
            <div className="flex flex-wrap gap-4 mb-6 items-center">
                {project?.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm hover:bg-indigo-500/20 transition-colors cursor-pointer ">
                        {/* Redirect to projects page with tag filter */}
                       <Link to={`/projects?tag=${tag}`} className="no-underline text-indigo-400 hover:text-indigo-500 transition-colors">
                            {tag}
                        </Link>
                    </span>
                ))}
                <span className="text-sm text-indigo-400 uppercase tracking-wide">
                    {project?.place} - {project?.date}
                </span>
            </div>
            <p className="text-lg text-gray-300 mb-6">{project?.description}</p>
            {project?.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                    Voir le github
                </a>
            )}
            {project?.video && (
                <div className="mt-10 w-full h-auto">
                    <ReactPlayer src={project.video} controls width="100%" height="800px" className='w-full h-full md:h-[200px]' />
                </div>
            )}
        </div>
    </div>
  )
}
