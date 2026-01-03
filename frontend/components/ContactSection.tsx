"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/client-animations"
// Assuming you have a ContactForm component, otherwise remove this line and the <ContactForm /> usage
import { ContactForm } from "@/components/contact-form" 

export function ContactSection() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('${process.env.NEXT_PUBLIC_API_URL}/api/contact')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Failed to fetch Contact data"))
  }, [])

  if (!data) return null;

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
                <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Email Card */}
                <a href={`mailto:${data.email}`} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:translate-x-1 transition-all border border-gray-100 dark:border-gray-700 group">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email Me</p>
                    <p className="text-xs md:text-lg font-medium text-gray-900 dark:text-white">{data.email}</p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:translate-x-1 transition-all border border-gray-100 dark:border-gray-700 group">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">WhatsApp</p>
                    <p className="text-xs md:text-lg font-medium text-gray-900 dark:text-white">Chat on WhatsApp</p>
                  </div>
                </a>

                {/* Social Row */}
                <div className="flex gap-4 pt-4">
                    {data.linkedin && (
                        <Link href={data.linkedin} target="_blank" className="flex-1 flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-700 dark:text-blue-300 font-bold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors gap-2">
                            <Linkedin size={20} /> LinkedIn
                        </Link>
                    )}
                    {data.github && (
                        <Link href={data.github} target="_blank" className="flex-1 flex items-center justify-center p-4 bg-gray-200 dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors gap-2">
                            <Github size={20} /> GitHub
                        </Link>
                    )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-lg md:text-xl font-bold mb-6">Send a Message</h3>
              {/* Keep your existing ContactForm logic here */}
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}