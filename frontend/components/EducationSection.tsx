"use client"

import { useState, useEffect } from "react"
import { AnimatedSection } from "@/components/client-animations"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Users, CheckCircle2, Rocket, ExternalLink } from "lucide-react"

export function EducationSection() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/education')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Failed to fetch Education"))
  }, [])

  if (!data) return null;

  // Filter trainings into categories for better layout
  const professionalTraining = data.trainings?.filter((t: any) => t.category === "Training") || [];
  const memberships = data.trainings?.filter((t: any) => t.category === "Membership") || [];

  return (
    <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
          </AnimatedSection>

          {/* 1. Main Degree */}
          {/* <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="text-purple-600" /> Education
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-sm border-l-4 border-purple-600 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl md:texl-2xl font-bold text-gray-900 dark:text-white">{data.education.degree}</h4>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mt-1">{data.education.institution}</p>
                  </div>
                  <span className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-sm h-fit mt-4 md:mt-0 text-gray-600 dark:text-gray-300">
                    {data.education.year}
                  </span>
                </div>
                <div>
                  <h5 className="font-medium mb-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Focus Areas</h5>
                  <div className="flex flex-wrap gap-2">
                    {data.education.tags.map((tag: string, i: number) => (
                        <Badge key={i} variant="secondary" className="px-3 py-1">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div> */}
          {/* 1. Main Degree Card */}
          <div className="mb-12">
          <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-purple-600" /> Education
              </h3>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
              {/* Decorative Background Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-0 group-hover:bg-purple-500/10 transition-all duration-500"></div>

              <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                          <h4 className="text-xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                          {data.education.degree}
                          </h4>
                          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 font-medium">
                          {data.education.institution}
                          </p>
                          
                          {/* Specialization Badge */}
                          {data.education.specialization && (
                              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold border border-purple-200 dark:border-purple-800">
                                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                                  <span className="text-xs md:text-lg"> Specialization: {data.education.specialization} </span>
                              </div>
                          )}
                      </div>
                      
                      <span className="inline-block mt-4 md:mt-0 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
                          {data.education.year}
                      </span>
                  </div>

                  {/* Final Year Project Section */}
                  {data.education.finalYearProject?.title && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-900 rounded-xl border border-blue-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                              <div className="p-2 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-500/30">
                                  <Rocket className="w-5 h-5" />
                              </div>
                              <div>
                                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Final Year Project</p>
                                  <p className="font-bold text-gray-900 dark:text-white text-sm">{data.education.finalYearProject.title}</p>
                              </div>
                          </div>
                          {data.education.finalYearProject.link && (
                              <a 
                                  href={data.education.finalYearProject.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-sm font-bold text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow"
                              >
                                  View Project <ExternalLink size={14} />
                              </a>
                          )}
                      </div>
                  )}

                  <div>
                      <h5 className="font-medium mb-3 text-xs uppercase tracking-widest text-gray-400">Core Modules</h5>
                      <div className="flex flex-wrap gap-2">
                          {data.education.tags.map((tag: string, i: number) => (
                          <Badge 
                              key={i} 
                              variant="secondary" 
                              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                          >
                              {tag}
                          </Badge>
                          ))}
                      </div>
                  </div>
              </div>
              </div>
          </AnimatedSection>
          </div>


          {/* 2. Certifications Grid */}
          <div className="mb-16">
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-blue-600" /> Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.certifications.map((cert: any, i: number) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-600">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{cert.title}</h4>
                        <div className="text-sm">
                            <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">{cert.issuer}</p>
                            <p className="text-gray-500 dark:text-gray-400">{cert.year}</p>
                        </div>
                    </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* 3. The Redesigned "Additional" Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Left: Professional Development */}
             <AnimatedSection delay={0.4} direction="up">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 h-full border border-blue-100 dark:border-blue-800">
                    <h4 className="text-sm md:text-xl font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <CheckCircle2 size={20}/> Professional Development
                    </h4>
                    <ul className="space-y-3">
                        {professionalTraining.map((t: any, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                                {t.title}
                            </li>
                        ))}
                    </ul>
                </div>
             </AnimatedSection>

             {/* Right: Community & Memberships */}
             <AnimatedSection delay={0.5} direction="up">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 h-full border border-green-100 dark:border-green-800">
                    <h4 className="text-sm md:text-xl font-bold mb-4 flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Users size={20}/> Volunteer
                    </h4>
                    <ul className="space-y-3">
                        {memberships.map((t: any, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                                {t.title}
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