import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          À Propos
        </h1>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            Développeur web, automatisation et cyber-sécurité 
            passionné par la création d&apos;expériences numériques innovantes. Avec plus de 3 ans d&apos;expérience, j&apos;ai travaillé sur une variété de projets allant du développement d&apos;applications web à la visualisation de données en 3D. Mon expertise inclut React, Three.js, Node.js, et bien plus encore. Je suis constamment à la recherche de nouveaux défis pour repousser les limites de la technologie et créer des solutions qui font une différence.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-400">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'React & TypeScript',
                'Three.js & React Three Fiber',
                'Node.js & Express',
                'WebGL & GLSL',
                'Tailwind CSS',
                'Vite & Webpack',
                'Git & GitHub',
                'API REST',
              ].map((skill, i) => (
                <div
                  key={i}
                  className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-400">Formation</h2>
            <div className="border-l-2 border-indigo-500 pl-4">
              <p className="font-semibold text-lg">Développeur Web Full Stack</p>
              <p className="text-gray-400">Année de formation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
