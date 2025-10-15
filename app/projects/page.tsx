"use client"

import { projects } from "@/data/projects"
import { ProjectsBrowser } from "@/components/projects/projects-browser"
import { Navbar } from "@/components/navbar"



export default function ProjectsPage() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar displayed at top */}

      {/* Add spacing under navbar */}
      <div className="h-16" /> 

      {/* ✅ Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-balance mb-4">
            My Creative Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore a collection of my work across software development, design, IoT, and more —
            bringing ideas to life with code and creativity.
          </p>

          {/* Optional CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition"
            >
              View Projects
            </a>
          </div>

          {/* Decorative background blur */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full opacity-50" />
          </div>
        </div>
      </section>

      {/* ✅ Main Content */}
      <main id="projects" className="min-h-screen bg-background">
        <section className="container mx-auto max-w-6xl px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-balance">Projects</h2>
            <p className="text-muted-foreground mt-2">
              A showcase of my projects, demonstrating my skills in software engineering, web development, graphic design, IoT, CCTV, MS Office, document control, and data entry.
            </p>
          </div>
          <ProjectsBrowser items={projects} />
        </section>
      </main>
    </>
  )
}
