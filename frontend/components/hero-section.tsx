"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText, ClientMotion } from "@/components/client-animations"
import { Spinner } from "./ui/spinner"

export function HeroSection() {
  const [data, setData] = useState<any>(null)

  // Fetch data from backend
  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/hero')
      .then(res => res.json())
      .then(heroData => setData(heroData))
      .catch(err => console.error("Error fetching hero data:", err))
  }, [])

  // Loader
  if (!data) return <div className="h-screen flex items-center justify-center">
    // 3. Show Loading Screen
 
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 z-50 fixed inset-0">
        <Spinner size="lg" color="primary" className="mb-4" />
        <p className="text-sm text-gray-500 animate-pulse">Loading Portfolio...</p>
      </div>
    
  
  </div>

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              {/* Dynamic Name */}
              <AnimatedText text={data.name || "Asad Ullah"} className="text-4xl md:text-5xl font-bold tracking-tight" />
              
              {/* Dynamic Designation */}
              <AnimatedText
                text={data.designation || "Web Developer"}
                className="text-1xl md:text-2xl font-semibold mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                once={true}
              />
            </div>

            {/* Dynamic Bio */}
            <ClientMotion
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {data.bio}
            </ClientMotion>
            
            {/* BUTTONS */}
            <ClientMotion
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="relative overflow-hidden group">
                <Link href={`mailto:${data.socials?.email}`}>
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>

              <Button variant="outline" asChild className="relative overflow-hidden group bg-transparent">
                <Link href={"/projects"}>
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>

              {/* Dynamic Resume Link */}
              <Button variant="secondary" asChild className="relative overflow-hidden group">
                  <Link 
                    href={data.resumeUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span className="relative z-10">Resume</span>
                    <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Link>
              </Button>
            </ClientMotion>

            {/* SOCIAL LINKS */}
            <ClientMotion
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href={data.socials?.linkedin || "#"}
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href={data.socials?.github || "#"}
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
              
              <Link
                href={`mailto:${data.socials?.email}`}
                className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </ClientMotion>
          </div>

          {/* RIGHT CONTENT (IMAGE) */}
          <ClientMotion
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image 
                src={data.profileImage || "/images/profile.png"} 
                alt={data.name} 
                fill 
                className="object-cover" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 mix-blend-overlay" />
            </div>
          </ClientMotion>

        </div>
      </div>
    </section>
  )
}