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


















"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { ProjectsBrowser } from "@/components/projects/projects-browser"
import { Loader2 } from "lucide-react"

export default function ProjectsPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/projects')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch projects", err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Navbar /> 
      <div className="h-16" /> 

      {/* Hero Section with Modern Gradient */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            {data?.sectionTitle || "My Creative Work"}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
             Explore a collection of my work across software development, design, IoT, and more — bringing ideas to life with code and creativity.
          </p>
        </div>
      </section>

      {/* Main Browser */}
      <main id="projects" className="min-h-screen bg-white dark:bg-black">
        <section className="container mx-auto max-w-7xl px-4 py-12">
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
            </div>
          ) : (
            // We pass the 'items' array from the DB to the browser
            <ProjectsBrowser items={data?.items || []} />
          )}
        </section>
      </main>
    </>
  )
}