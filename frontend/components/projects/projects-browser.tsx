"use client"

import { useMemo, useState } from "react"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectFilters, type FiltersState } from "@/components/projects/project-filters"
import { motion, AnimatePresence } from "framer-motion"
import { FileWarning } from "lucide-react"

export function ProjectsBrowser({ items }: { items: any[] }) {
  const [filters, setFilters] = useState<FiltersState>({ query: "", category: "all", tags: [] })

  // 1. Extract all unique tags
  const allTags = useMemo(() => {
    const s = new Set<string>()
    items.forEach((p) => p.tags.forEach((t: string) => s.add(t)))
    return Array.from(s).sort((a, b) => a.localeCompare(b))
  }, [items])

  // 2. Filter Logic
  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    
    return items.filter((p) => {
      // Normalize Category Matching (DB uses "Web Development", Filter uses "web-dev")
      const pCat = p.category.toLowerCase().replace(/\s+/g, '-'); // "Web Development" -> "web-development"
      const filterCat = filters.category;

      let categoryMatch = true;
      if (filterCat !== "all") {
         // Flexible matching: check if filter includes part of the category string
         categoryMatch = pCat.includes("web") && filterCat.includes("web") || 
                         pCat.includes("graphic") && filterCat.includes("graphic");
      }

      if (!categoryMatch) return false
      if (filters.tags.length && !filters.tags.every((t) => p.tags.includes(t))) return false
      
      if (!q) return true
      const hay = [p.title, p.description, ...p.tags].join(" ").toLowerCase()
      return hay.includes(q)
    })
  }, [items, filters])

  return (
    <div className="space-y-10">
      <ProjectFilters allTags={allTags} value={filters} onChange={setFilters} />

      <div className="min-h-[400px]">
        {filtered.length > 0 ? (
           <motion.div 
             layout
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
           >
             <AnimatePresence>
              {filtered.map((p, index) => (
                <ProjectCard key={index} project={p} index={index} />
              ))}
             </AnimatePresence>
           </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-full mb-4">
                <FileWarning className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold">No projects found</h3>
            <p className="text-slate-500">Try adjusting your search or filters.</p>
            <button 
                onClick={() => setFilters({ query: "", category: "all", tags: [] })}
                className="mt-4 text-purple-600 font-bold hover:underline"
            >
                Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}