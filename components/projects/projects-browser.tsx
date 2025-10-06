"use client"

import { useMemo, useState } from "react"
import type { Project } from "@/data/projects"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectFilters, type FiltersState } from "@/components/projects/project-filters"

export function ProjectsBrowser({ items }: { items: Project[] }) {
  const [filters, setFilters] = useState<FiltersState>({ query: "", category: "all", tags: [] })

  const allTags = useMemo(() => {
    const s = new Set<string>()
    items.forEach((p) => p.tags.forEach((t) => s.add(t)))
    return Array.from(s).sort((a, b) => a.localeCompare(b))
  }, [items])

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    return items.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category) return false
      if (filters.tags.length && !filters.tags.every((t) => p.tags.includes(t))) return false
      if (!q) return true
      const hay = [p.title, p.description, ...p.tags].join(" ").toLowerCase()
      return hay.includes(q)
    })
  }, [items, filters])

  const graphics = filtered.filter((p) => p.category === "graphic-design")
  const webdev = filtered.filter((p) => p.category === "web-dev")

  return (
    <div className="space-y-8">
      <ProjectFilters allTags={allTags} value={filters} onChange={setFilters} />

      {/* Graphic Design first */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Graphic Design</h2>
        {graphics.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphics.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No Graphic Design projects match your filters.</p>
        )}
      </section>

      {/* Web Development last */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Web Development</h2>
        {webdev.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webdev.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No Web Development projects match your filters.</p>
        )}
      </section>
    </div>
  )
}
