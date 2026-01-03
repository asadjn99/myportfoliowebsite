// import Link from "next/link"
// import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Icon } from "lucide-react"


// import { ScrollIndicator } from "@/components/scroll-indicator"
// import { SmoothScroll } from "@/components/smooth-scroll"
// import { AnimatedSection, ParticleBackground, AnimatedGradientBackground } from "@/components/client-animations"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Navbar } from "@/components/navbar"
// import { ContactForm } from "@/components/contact-form"
// import { HeroSection } from "@/components/hero-section"
// import { AboutSection } from "@/components/AboutSection"
// import { ExperienceSection } from "@/components/ExperienceSection"
// import { ProjectsSection } from "@/components/ProjectsSection"
// import { SkillsSection } from "@/components/SkillsSection"
// import { EducationSection } from "@/components/EducationSection"
// import { ContactSection } from "@/components/ContactSection"
// import { Spinner } from "@/components/ui/spinner"


// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
//       {/* Background Effects */}
//       <AnimatedGradientBackground />
//       <ParticleBackground />
//       <Spinner className="mr-2" size="sm" variant="white" />
//       <ScrollIndicator />
//       <SmoothScroll />

//       {/* Navigation */}
//       <Navbar />

//       {/* Hero Section */}
//       <HeroSection />

//       {/* About Section */}
//       <AboutSection />

//       {/* Experience Section */}
//       <ExperienceSection />

//       {/* Projects Section */}

//       <ProjectsSection />

//       {/* Skills Section */}
//       <SkillsSection />




//       {/* Education & Certifications */}
//       <EducationSection />

//       {/* Contact Section */}
//       <ContactSection />

//       {/* Footer */}
//       <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
//         <div className="container mx-auto max-w-6xl relative z-10">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h2 className="text-xl font-bold">Asad Ullah</h2>
//               <p className="text-gray-400">  Web Developer • Graphic Designer • IoT Developer</p>
//             </div>
//             <div className="flex space-x-4">
//               <Link
//                 href="https://linkedin.com/in/asad-jn99"
//                 target="_blank"
//                 className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </Link>
//               <Link
//                 href="https://github.com/asadjn99"
//                 target="_blank"
//                 className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
//               >
//                 <Github className="w-5 h-5" />
//               </Link>
//               <Link
//                 href="mailto:asadjn99@gmail.com"
//                 className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
//               >
//                 <Mail className="w-5 h-5" />
//               </Link>
//             </div>
//           </div>
//           <div className="mt-6 text-center text-gray-400 text-sm">
//             <p>© {new Date().getFullYear()} Asad Ullah. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


























"use client" // Ensure this is at the top

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { AnimatedGradientBackground, ParticleBackground } from "@/components/client-animations"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/AboutSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { EducationSection } from "@/components/EducationSection"
import { ContactSection } from "@/components/ContactSection"

export default function Home() {
  // 1. Add Loading State
  const [isLoading, setIsLoading] = useState(true)

  // 2. Simulate Loading (or wait for assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show spinner for 2 seconds
    return () => clearTimeout(timer)
  }, [])

  // 4. Show Main Website
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      
      {/* Scroll Helpers */}
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education & Certifications */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Asad Ullah</h2>
              <p className="text-gray-400">Web Developer • Graphic Designer • IoT Developer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/asad-jn99"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/asadjn99"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:asadjn99@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Asad Ullah. All rights reserved.</p>
          </div>
        </div>
      </footer>



    </div>
  )
}