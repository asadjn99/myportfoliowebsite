import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Icon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, ParticleBackground, AnimatedGradientBackground } from "@/components/client-animations"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {
                    "My passion for computer science has made me a skilled graphic designer, front-end web developer, and IoT developer. Having worked on various innovative solutions for real problems, I possess strong technical skills in programming, design, and automation in the field of the Internet of Things."
                  }
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {
                    "I am eager to develop my skills further and contribute to research. I am interested in studying internationally in the same field."
                  }
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {"Current focus areas: Documents Control, Web Development, Graphic Design, and IoT + CCTV."}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Documents Control & Office Administration</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Graphic Design (Adobe Photoshop, Illustrator, Canva)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Front‑End Web Development (HTML, CSS, JavaScript, WordPress)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      IoT & CCTV (Arduino, Raspberry Pi, Sensors, Installation)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Social Media Design & Digital Marketing</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Web Developer - intern </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Encoder Bytes Private Limited</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Nov 2025 – Apr 2026 (current)</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Developing responsive web components and maintaining front-end code quality across active projects.</li>
                  <li>Supporting ongoing website updates, bug fixes, and UI/UX improvements to enhance overall performance.</li>
                </ul>
              </div>
            </AnimatedSection>
{/* Graphic DEsign at EncoderBytes */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Graphic Designer - intern</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Encoderbytes Pvt Ltd, Peshawar</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jan 2024 – Jul 2024</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Produced designs for print and digital, aligned to brand and campaign objectives.</li>
                  <li>Collaborated with teams to meet timelines and quality standards.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Administrative and IT Executive</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Ideal Business Products</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jul 2025 – Oct 2025</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Managed document workflows, archiving, and version control for business operations.</li>
                  <li>Ensured accuracy, accessibility, and security of records across departments.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Graphic Designer - remote</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      Supreme Dental Associates, Peshawar
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Apr 2024 – Jul 2025</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Designed social media graphics and marketing creatives to grow engagement and brand reach.</li>
                  <li>Delivered consistent, on-brand visuals across platforms and campaigns.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Graphic Designer - remote</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      Letszu Tours and Travel, Peshawar
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Apr 2024 – May 2025</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Designed social media graphics and marketing creatives to grow engagement and brand reach.</li>
                  <li>Delivered consistent, on-brand visuals across platforms and campaigns.</li>
                </ul>
              </div>
            </AnimatedSection>

            

            <AnimatedSection delay={0.5}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Volunteer & Graphics Designer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      Insan Dost Foundation, Dir Lower Khall
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2021 – Present</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Support on-site volunteer efforts, provide aid in communities and during emergencies.</li>
                  <li>Design visuals for fundraising and awareness campaigns to boost impact.</li>
                  <li>Contribut to organizing activities and field operations during relief efforts.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="hidden" />

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">GD</span>
                    </span>
                    Graphic Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      Adobe Photoshop
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Adobe Illustrator
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Canva
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Branding
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Social Media Creatives
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Print Design
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Layout & Typography
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Photo Editing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">FE</span>
                    </span>
                    Front‑End Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      HTML
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      CSS
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Responsive Design
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      WordPress
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Git & GitHub
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Version Control
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Basic Python
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">IoT</span>
                    </span>
                    IoT & CCTV
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      Arduino
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Raspberry Pi
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Sensors & Modules
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      CCTV Installation
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Networking Basics
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Automation
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Troubleshooting
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Safety & Cabling
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">DOC</span>
                    </span>
                    Office & Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      MS Word
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      MS Excel
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      MS PowerPoint
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Document Control
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      File Management
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Reporting
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Communication
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Time Management
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skills Tags */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Digital & Communication Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
                >
                  Social Media Design
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                >
                  Digital Marketing
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                >
                  Freelancing
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800"
                >
                  WordPress
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
                >
                  Git & GitHub
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800"
                >
                  Google Workspace
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">BS Computer Science (ICS/IT)</h4>
                    <p className="text-purple-600 dark:text-purple-400">The University of Agriculture Peshawar</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Nov 2021 – Jul 2025</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Focus & Activities:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Web Design</Badge>
                    <Badge variant="secondary">Programming Fundamentals</Badge>
                    <Badge variant="secondary">Database & Networking</Badge>
                    <Badge variant="secondary">IoT Basics</Badge>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Certifications & Awards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg  hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Web Development — BanoQabil IT Program</h4>
                  <p className="text-gray-600 dark:text-gray-400">2024 – 2025 • Peshawar, Pakistan</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg  hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Graphic Design — Encoderbytes Pvt Ltd (hope87)</h4>
                  <p className="text-gray-600 dark:text-gray-400">Jan 2024 – Mar 2024 • Peshawar, Pakistan</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg  hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Diploma in Information Technology — CBA Timergara</h4>
                  <p className="text-gray-600 dark:text-gray-400">Feb 2022 – Feb 2023 • Dir Lower, Pakistan</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg  hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">IoT Certificate — NAVTTC (Islamia College Peshawar)</h4>
                  <p className="text-gray-600 dark:text-gray-400">Jun 2023 – Aug 2023 • Peshawar, Pakistan</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg  hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">CCTV (1‑Month) — University of Skills</h4>
                  <p className="text-gray-600 dark:text-gray-400">2025 • Peshawar, Pakistan</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg  hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">English Language — USECS</h4>
                  <p className="text-gray-600 dark:text-gray-400">Jun 2024 – Jan 2025 • Peshawar, Pakistan</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 md:col-span-2 shadow-md hover:shadow-lg  hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Additional Training & Memberships</h4>
                  <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                    <li>
                      Communication & Interpersonal Skills: MHPSS, Team Building & Strategic Time Management (3‑day)
                    </li>
                    <li>Management & Leadership: Business Plan & Marketing Strategy (5‑day)</li>
                    <li>Digiskills: WordPress (Jul 2024 – Oct 2024)</li>
                    <li>Digiskills: Graphic Design (Mar 2024 – Jul 2024)</li>
                    
                    <li>Member – Dir Student Society (AUP): Orientation, cultural events, and community engagement (Feb 2021 – Feb 2025)</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:asadjn99@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      asadjn99@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/asad-jn99"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      Linkedin
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://github.com/asadjn99"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </div>
                  {/* <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      // href="https://x.com/asadjn99"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      X
                    </a>
                  </div> */}
                  {/* <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://facebook.com/asadjn99"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://instagram.com/asadjn99"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://snapchat.com/add/asadjn99"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      Snapchat
                    </a>
                  </div> */}
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://wa.me/923075993029"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                  {/* <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">WeChat: @asadjn99</span>
                  </div> */}
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Asad Ullah</h2>
              <p className="text-gray-400">Graphic Designer • Front‑End Developer • IoT Developer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/asadjn99"
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
              {/* <Link
                href="https://x.com/asadjn99"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </Link> */}
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
