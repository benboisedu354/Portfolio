import { projects } from '../../Data/Project'

export default function FilterTagProject() {
  // Extraire les tags uniques de tous les projets
  const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  return (
    <div className="flex flex-wrap gap-2">
      {/* {Select input for filtering by tag} */}
      <form action="" className="w-full md:w-auto">
        <select
          name="tags"
          id="tags"
          className="px-4 py-2 rounded-lg border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/10 transition-colors w-full md:w-auto text-sm font-semibold text-white"
        >
          <option value="">Filtrer par tag</option>
          {uniqueTags.map((tag, i) => (
            <option key={i} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}
