// "use client"

// import { projects } from "@/data/projects"
// import { ProjectsBrowser } from "@/components/projects/projects-browser"
// import { Navbar } from "@/components/navbar"



// export default function ProjectsPage() {
//   return (
//     <>
//       <Navbar /> {/* ✅ Navbar displayed at top */}

//       {/* Add spacing under navbar */}
//       <div className="h-16" /> 

//       {/* ✅ Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background py-24">
//         <div className="container mx-auto max-w-6xl px-4 text-center">
//           <h1 className="text-5xl font-bold tracking-tight text-balance mb-4">
//             My Creative Projects
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Explore a collection of my work across software development, design, IoT, and more —
//             bringing ideas to life with code and creativity.
//           </p>

//           {/* Optional CTA */}
//           <div className="mt-8 flex justify-center">
//             <a
//               href="#projects"
//               className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition"
//             >
//               View Projects
//             </a>
//           </div>

//           {/* Decorative background blur */}
//           <div className="absolute inset-0 -z-10">
//             <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full opacity-50" />
//           </div>
//         </div>
//       </section>

//       {/* ✅ Main Content */}
//       <main id="projects" className="min-h-screen bg-background">
//         <section className="container mx-auto max-w-6xl px-4 py-12">
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold tracking-tight text-balance">Projects</h2>
//             <p className="text-muted-foreground mt-2">
//               A showcase of my projects, demonstrating my skills in software engineering, web development, graphic design, IoT, CCTV, MS Office, document control, and data entry.
//             </p>
//           </div>
//           <ProjectsBrowser items={projects} />
//         </section>
//       </main>
//     </>
//   )
// }


















// "use client"

// import { useState, useEffect } from "react"
// import { Navbar } from "@/components/navbar"
// import { ProjectsBrowser } from "@/components/projects/projects-browser"
// import { Loader2 } from "lucide-react"

// export default function ProjectsPage() {
//   const [data, setData] = useState<any>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('${process.env.NEXT_PUBLIC_API_URL}/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         setData(data)
//         setLoading(false)
//       })
//       .catch(err => {
//         console.error("Failed to fetch projects", err)
//         setLoading(false)
//       })
//   }, [])

//   return (
//     <>
//       <Navbar /> 
//       <div className="h-16" /> 

//       {/* Hero Section with Modern Gradient */}
//       <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-800">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//         <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
//             {data?.sectionTitle || "My Creative Work"}
//           </h1>
//           <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
//              Explore a collection of my work across software development, design, IoT, and more — bringing ideas to life with code and creativity.
//           </p>
//         </div>
//       </section>

//       {/* Main Browser */}
//       <main id="projects" className="min-h-screen bg-white dark:bg-black">
//         <section className="container mx-auto max-w-7xl px-4 py-12">
//           {loading ? (
//             <div className="flex h-64 items-center justify-center">
//               <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
//             </div>
//           ) : (
//             // We pass the 'items' array from the DB to the browser
//             <ProjectsBrowser items={data?.items || []} />
//           )}
//         </section>
//       </main>
//     </>
//   )
// }

















// "use client"

// import { Suspense } from "react"
// import { useSearchParams } from "next/navigation"
// import { projects } from "@/data/projects"
// import Link from "next/link"
// import Image from "next/image"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft, Github, Globe } from "lucide-react"

// function ProjectContent() {
//   const searchParams = useSearchParams()
//   // ✅ FIX: Get 'slug' from URL instead of 'id'
//   const slug = searchParams.get("slug")
  
//   // ✅ FIX: Find project by matching slugs
//   const project = projects.find((p) => p.slug === slug)

//   if (!project) {
//     return (
//       <div className="container py-20 text-center">
//         <h1 className="text-2xl font-bold">Project not found</h1>
//         <Link href="/#projects" className="text-purple-600 hover:underline">
//           Go back to projects
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-background pt-24 pb-12">
//       <div className="container max-w-4xl mx-auto px-4">
//         <Link 
//           href="/#projects"
//           className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
//         >
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           Back to Projects
//         </Link>

//         <div className="space-y-4 mb-8">
//           <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
//           <div className="flex flex-wrap gap-2">
//             {project.tags.map((tag) => (
//               <Badge key={tag} variant="secondary">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </div>

//         <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted mb-8">
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         <div className="flex gap-4 mb-12">
//           {project.links?.demo && (
//             <Button asChild size="lg">
//               <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
//                 <Globe className="mr-2 h-4 w-4" />
//                 Live Demo
//               </a>
//             </Button>
//           )}
//           {project.links?.github && (
//             <Button variant="outline" size="lg" asChild>
//               <a href={project.links.github} target="_blank" rel="noopener noreferrer">
//                 <Github className="mr-2 h-4 w-4" />
//                 View Code
//               </a>
//             </Button>
//           )}
//         </div>

//         <div className="prose prose-gray dark:prose-invert max-w-none">
//           <h2 className="text-2xl font-semibold mb-4">About this Project</h2>
//           <p className="text-lg leading-relaxed text-muted-foreground">
//             {project.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
//       <ProjectContent />
//     </Suspense>
//   )
// }







"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Globe } from "lucide-react"

function ProjectContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!id) return;

    // Fetch from your Live Backend
    const fetchProject = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`)
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setProject(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [id])

  if (loading) {
     return <div className="min-h-screen pt-32 text-center">Loading project details...</div>
  }

  if (error || !project) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/#projects" className="text-purple-600 hover:underline">
          Go back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/#projects"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted mb-8">
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover"
           />
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-12">
          {(project.links?.demo || project.links?.live) && (
            <Button asChild size="lg">
              <a href={project.links?.demo || project.links?.live} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.links?.github && (
            <Button variant="outline" size="lg" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>

        {/* Description */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">About this Project</h2>
          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ProjectContent />
    </Suspense>
  )
}