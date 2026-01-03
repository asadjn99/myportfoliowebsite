"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const pathname = usePathname()
  
  const observerRef = useRef<IntersectionObserver | null>(null)

  // 1. HANDLE SCROLL & FORCE HERO STATE AT TOP
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 10)

      // ✅ FIX: If we are at the very top, force "hero" active state
      // This clears any other highlights (like Experience) immediately
      if (pathname === "/" && scrollY < 150) {
        setActiveSection("hero")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // 2. SCROLL SPY (Observer)
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    if (pathname !== "/") {
      setActiveSection("") 
      return
    }

    let attempts = 0
    
    const initObserver = () => {
        const sections = document.querySelectorAll("section[id]")
        
        if (sections.length === 0) {
            if (attempts < 20) {
                attempts++
                setTimeout(initObserver, 100)
            }
            return
        }

        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Only update if we are scrolled down past the hero area
              if (window.scrollY >= 150 && entry.isIntersecting) {
                setActiveSection(entry.target.id)
              }
            })
          },
          {
            // Focus on the middle-top of the screen
            rootMargin: "-20% 0px -50% 0px", 
            threshold: 0.1
          }
        )

        sections.forEach((section) => observerRef.current?.observe(section))
    }

    initObserver()

    return () => {
        if (observerRef.current) observerRef.current.disconnect()
    }
  }, [pathname])

  const toggleMenu = () => setIsOpen(!isOpen)

  // 3. NAV LINKS
  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ]

  // 4. HIGHLIGHT LOGIC
  const isLinkActive = (linkHref: string, linkId: string) => {
    if (pathname === "/projects") return linkHref === "/projects"
    if (pathname === "/") {
        // if (linkHref === "/projects") return false
        return activeSection === linkId
    }
    return false
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-800" 
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/"
              className="group relative flex items-center gap-1 text-xl font-extrabold tracking-tight"
            >
               <span className="text-purple-600 dark:text-purple-400 font-mono text-2xl group-hover:-translate-x-1 transition-transform duration-300">{`<`}</span>
               <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  Asad Ullah
               </span>
               <span className="text-blue-600 dark:text-blue-400 font-mono text-2xl group-hover:translate-x-1 transition-transform duration-300">{`/>`}</span>
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href, link.id)
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive 
                      ? "text-white dark:text-white" 
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              )
            })}
            
            <div className="pl-4 ml-4 border-l border-gray-200 dark:border-gray-800">
              <ThemeToggle />
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                 const isActive = isLinkActive(link.href, link.id)
                 return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-l-4 border-purple-600"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                 )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}