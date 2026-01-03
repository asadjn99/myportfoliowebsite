"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, X, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [showAllTags, setShowAllTags] = useState(false)

  const toggleTag = (tag: string) => {
    const exists = value.tags.includes(tag)
    const nextTags = exists ? value.tags.filter((t) => t !== tag) : [...value.tags, tag]
    onChange({ ...value, tags: nextTags })
  }

  const clearAll = () => onChange({ query: "", category: "all", tags: [] })

  // Categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web-dev", label: "Web Dev" },
    { id: "graphic-design", label: "Graphic Design" },
  ]

  // Limit visible tags logic
  const visibleTags = showAllTags ? allTags : allTags.slice(0, 10)

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      
      {/* Top Row: Search & Category Tabs */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Modern Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            placeholder="Search projects..."
            value={value.query}
            onChange={(e) => onChange({ ...value, query: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-950 border-none rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-sm transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-950 rounded-xl overflow-hidden w-full md:w-auto">
           {categories.map((cat) => (
             <button
                key={cat.id}
                onClick={() => onChange({ ...value, category: cat.id as any })}
                className={cn(
                    "flex-1 md:flex-none px-4 py-2 text-sm font-medium rounded-lg transition-all",
                    value.category === cat.id 
                        ? "bg-white dark:bg-slate-800 text-purple-600 shadow-sm" 
                        : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                )}
             >
                {cat.label}
             </button>
           ))}
        </div>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      {/* Tags Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Filter className="w-4 h-4" /> Filter by Tech
            </div>
            {value.tags.length > 0 && (
                <button onClick={clearAll} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                    <X className="w-3 h-3" /> Reset
                </button>
            )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tag) => {
            const selected = value.tags.includes(tag)
            return (
              <Badge
                key={tag}
                onClick={() => toggleTag(tag)}
                variant={selected ? "default" : "outline"}
                className={cn(
                    "cursor-pointer select-none px-3 py-1.5 text-xs transition-all hover:scale-105 active:scale-95",
                    selected 
                        ? "bg-purple-600 hover:bg-purple-700 border-transparent text-white" 
                        : "bg-transparent border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-purple-300"
                )}
              >
                {tag}
              </Badge>
            )
          })}
          
          {/* Show More Button */}
          {allTags.length > 10 && (
              <button 
                onClick={() => setShowAllTags(!showAllTags)}
                className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1 px-2"
              >
                {showAllTags ? <><ChevronUp className="w-3 h-3"/> Show Less</> : <><ChevronDown className="w-3 h-3"/> +{allTags.length - 10} More</>}
              </button>
          )}
        </div>
      </div>
    </div>
  )
}