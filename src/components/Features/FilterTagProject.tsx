import { projects } from '../../Data/Project'

export default function FilterTagProject({ onTagChange }: { onTagChange: (tag: string) => void }) {
  // Extraire les tags uniques de tous les projets
  const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTag = e.target.value
    // Ici, vous pouvez implémenter la logique pour filtrer les projets en fonction du tag sélectionné
    // Par exemple, vous pourriez émettre un événement ou mettre à jour un état global pour que le composant parent puisse filtrer les projets
    onTagChange(selectedTag)
  }


  return (
    <div className="flex flex-wrap gap-2 mb-6 items-center justify-end">
        <form className="w-full md:w-auto sm:col-span-2 md:col-span-3 lg:col-span-4">
          <select
            name="tags"
            id="tags"
            className="px-4 py-2 rounded-lg border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors w-full md:w-auto text-sm font-semibold text-white"
            onChange={handleChange}
          >
            <option value="" className='bg-gradient-to-r from-indigo-500 to-purple-500 text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500/50 hover:to-purple-500/50 hover:text-white transition-colors '>
              Filtrer par tag
            </option>
            {uniqueTags.map((tag, i) => (
              <option key={i} value={tag} className='bg-gradient-to-r from-indigo-500 to-purple-500 text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500/50 hover:to-purple-500/50 hover:text-white transition-colors '>
                {tag}
              </option>
            ))}
          </select>
        </form>
    </div>
  )
}
