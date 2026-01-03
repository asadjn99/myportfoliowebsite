"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection, ClientMotion } from "@/components/client-animations"

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
}

export function ProjectsSection() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/projects')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Failed to fetch Projects"))
  }, [])

  if (!data) return null;

  // Limit to 6 projects for the homepage
  const displayedProjects = data.items?.slice(0, 6) || [];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">{data.sectionTitle}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project: Project, index: number) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/images/placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.links.github && (
                        <Link href={project.links.github} target="_blank" className="p-2 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                            <Github size={20} />
                        </Link>
                    )}
                    {project.links.live && (
                        <Link href={project.links.live} target="_blank" className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </Link>
                    )}
                  </div>
                  <span className="absolute top-2 right-2 bg-purple-600/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View More Button */}
        <AnimatedSection delay={0.4}>
            <div className="flex justify-center">
                <Button asChild size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                    <Link href="/projects">
                        View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </div>
        </AnimatedSection>

      </div>
    </section>
  )
}