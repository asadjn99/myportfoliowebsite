"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"
import { useState } from "react"

export function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      {/* Image Container - Shows full image without cropping */}
      <div className="relative w-full bg-muted overflow-hidden">
        {!imageError ? (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-auto hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-40 flex items-center justify-center bg-gray-300 dark:bg-gray-600">
            <span className="text-gray-500 dark:text-gray-400">Image not found</span>
          </div>
        )}
      </div>
      
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary" className="rounded">
              {t}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="text-sm text-muted-foreground">
        <p>{project.description}</p>
      </CardContent>
      
      <CardFooter className="mt-auto">
        <Link href={`/projects/${project.slug}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}