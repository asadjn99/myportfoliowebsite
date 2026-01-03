"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/client-animations" // Assuming you have this

export function AboutSection() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/about')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Failed to fetch About data"))
  }, [])

  if (!data) return null; // Or a skeleton loader

  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Paragraphs */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                {data.paragraphs?.map((text: string, index: number) => (
                    <p key={index} className="text-lg text-gray-700 dark:text-gray-300">
                        {text}
                    </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Key Expertise */}
            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  {data.expertise?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start group">
                        <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
  )
}