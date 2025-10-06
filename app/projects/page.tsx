import { projects } from "@/data/projects"
import { ProjectsBrowser } from "@/components/projects/projects-browser"

export default function ProjectsPage() {
  return (
    
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">Projects</h1>
          <p className="text-muted-foreground mt-2">
            Explore selected work across Graphic Design and Web Development. Use the search and filters to refine.
          </p>
        </div>
        <ProjectsBrowser items={projects} />
      </section>
    </main>
  )
}
