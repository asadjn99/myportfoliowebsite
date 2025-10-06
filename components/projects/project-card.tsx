"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
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
