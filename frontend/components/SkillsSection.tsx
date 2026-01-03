"use client"

import { useState, useEffect } from "react"
import { AnimatedSection } from "@/components/client-animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCategory {
  title: string;
  code: string;
  theme: string;
  skills: string[];
}

export function SkillsSection() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/skills')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Failed to fetch Skills"))
  }, [])

  if (!data) return null;

  // Helper function to map theme names to Tailwind classes
  const getThemeClasses = (theme: string) => {
    switch (theme) {
        case 'blue': return { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-600 dark:text-blue-300' };
        case 'green': return { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-600 dark:text-green-300' };
        case 'orange': return { bg: 'bg-orange-100 dark:bg-orange-900', text: 'text-orange-600 dark:text-orange-300' };
        default: return { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-600 dark:text-purple-300' }; // Default purple
    }
  }

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{data.sectionTitle}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {data.categories?.map((cat: SkillCategory, index: number) => {
                const theme = getThemeClasses(cat.theme);
                
                return (
                    <AnimatedSection key={index} direction="up" delay={0.2 + (index * 0.1)}>
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${theme.bg}`}>
                              <span className={`${theme.text} text-sm font-bold`}>{cat.code}</span>
                            </span>
                            <span className="text-lg md:text-xl"> {cat.title} </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-3">
                            {cat.skills.map((skill, j) => (
                                <Badge key={j} variant="secondary" className="justify-center py-2">
                                  {skill}
                                </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                )
            })}
          </div>

          {/* Additional Skills Tags */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-6">Digital & Communication Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {data.additionalSkills?.map((skill: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
  )
}