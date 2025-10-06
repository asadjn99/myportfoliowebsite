"use client"

import { useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type FiltersState = {
  query: string
  category: "all" | "graphic-design" | "web-dev"
  tags: string[]
}

export function ProjectFilters({
  allTags,
  value,
  onChange,
}: {
  allTags: string[]
  value: FiltersState
  onChange: (next: FiltersState) => void
}) {
  const toggleTag = (tag: string) => {
    const exists = value.tags.includes(tag)
    const nextTags = exists ? value.tags.filter((t) => t !== tag) : [...value.tags, tag]
    onChange({ ...value, tags: nextTags })
  }

  const clearAll = () => onChange({ query: "", category: "all", tags: [] })

  const tagCounts = useMemo(
    () => Object.fromEntries(allTags.map((t) => [t, t.length])) as Record<string, number>, // simple uniqueness reference
    [allTags],
  )

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <Input
          placeholder="Search by title, description, or tag..."
          value={value.query}
          onChange={(e) => onChange({ ...value, query: e.target.value })}
          className="md:col-span-2"
        />
        <div className="flex items-center gap-2">
          <Button
            variant={value.category === "all" ? "default" : "outline"}
            onClick={() => onChange({ ...value, category: "all" })}
          >
            All
          </Button>
          <Button
            variant={value.category === "graphic-design" ? "default" : "outline"}
            onClick={() => onChange({ ...value, category: "graphic-design" })}
          >
            Graphic Design
          </Button>
          <Button
            variant={value.category === "web-dev" ? "default" : "outline"}
            onClick={() => onChange({ ...value, category: "web-dev" })}
          >
            Web Dev
          </Button>
        </div>
        <div className="flex justify-end">
          <Button variant="ghost" onClick={clearAll}>
            Clear
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const selected = value.tags.includes(tag)
          return (
            <Badge
              key={tag}
              onClick={() => toggleTag(tag)}
              variant={selected ? "default" : "outline"}
              className="cursor-pointer select-none"
              title={`${tag} ${tagCounts[tag] ? `(${tagCounts[tag]})` : ""}`}
            >
              {tag}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}
