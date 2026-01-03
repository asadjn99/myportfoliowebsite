import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-6xl px-4 py-12">
        {/* Title & Tags */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">
            {project.title}
          </h1>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* ✅ Centered Image in Muted Background */}
        <div className="text-muted-foreground leading-relaxed mb-8 overflow-x-auto overflow-y-auto flex justify-center bg-muted rounded-lg p-4">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="rounded-md"
            style={{
              width: "50%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        {/* ✅ Buttons Section */}
        <div className="flex flex-wrap gap-3">
          {project.links?.demo && (
            <Link href={project.links.demo} target="_blank" rel="noreferrer">
              <Button>Live Demo</Button>
            </Link>
          )}
          {project.links?.github && (
            <Link href={project.links.github} target="_blank" rel="noreferrer">
              <Button variant="outline">GitHub</Button>
            </Link>
          )}
          {/* ✅ Back Button with Background */}
          <Link href="/projects">
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-foreground"
            >
              Back to Projects
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
