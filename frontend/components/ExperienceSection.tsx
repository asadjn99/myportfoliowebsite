"use client"

import { useState, useEffect } from "react"
import { AnimatedSection } from "@/components/client-animations"

interface Job {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export function ExperienceSection() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/experience')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Failed to fetch Experience data"))
  }, [])

  if (!data) return null;

  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{data.sectionTitle}</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {data.jobs?.map((job: Job, index: number) => (
                <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">{job.company}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{job.duration}</p>
                    </div>
                    <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      {job.description.map((point, i) => (
                          <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
  )
}