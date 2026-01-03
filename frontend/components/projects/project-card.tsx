// "use client"

// import Link from "next/link"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Github, ExternalLink } from "lucide-react"
// import { useState } from "react"
// import { motion } from "framer-motion"

// export function ProjectCard({ project, index }: { project: any, index: number }) {
//   const [imageError, setImageError] = useState(false)

//   return (
//     <motion.div
//         layout
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         transition={{ duration: 0.3, delay: index * 0.05 }}
//         className="group h-full flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
//     >
//       {/* Image Container with Fixed Aspect Ratio */}
//       <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
//         <span className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10">
//             {project.category}
//         </span>
        
//         {!imageError ? (
//           <img
//             src={project.image || "/images/placeholder.jpg"}
//             alt={project.title}
//             className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//             onError={() => setImageError(true)}
//           />
//         ) : (
//           <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
//             <span className="text-sm">Image not available</span>
//           </div>
//         )}
        
//         {/* Overlay with Quick Actions */}
//         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
//              {project.links?.live && (
//                  <Link href={project.links.live} target="_blank">
//                     <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
//                         <ExternalLink className="w-4 h-4" />
//                     </Button>
//                  </Link>
//              )}
//              {project.links?.github && (
//                  <Link href={project.links.github} target="_blank">
//                     <Button size="icon" className="rounded-full bg-slate-900 text-white hover:bg-black border border-slate-700">
//                         <Github className="w-4 h-4" />
//                     </Button>
//                  </Link>
//              )}
//         </div>
//       </div>
      
//       {/* Content */}
//       <div className="p-6 flex flex-col flex-1">
//         <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{project.title}</h3>
        
//         <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
//             {project.description}
//         </p>

//         {/* Tags */}
//         <div className="mt-auto flex flex-wrap gap-2">
//           {project.tags.slice(0, 4).map((t: string) => (
//             <span key={t} className="text-[10px] font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
//               {t}
//             </span>
//           ))}
//           {project.tags.length > 4 && (
//               <span className="text-[10px] font-medium px-2 py-1 bg-slate-50 text-slate-400 rounded">+{project.tags.length - 4}</span>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   )
// }


























// "use client"

// import Link from "next/link"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Github, ExternalLink, Eye } from "lucide-react" // ✅ Added Eye icon
// import { useState } from "react"
// import { motion } from "framer-motion"

// export function ProjectCard({ project, index }: { project: any, index: number }) {
//   const [imageError, setImageError] = useState(false)

//   return (
//     <motion.div
//         layout
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         transition={{ duration: 0.3, delay: index * 0.05 }}
//         className="group h-full flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
//     >
//       {/* Image Container */}
//       <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
//         <span className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10">
//             {project.category}
//         </span>
        
//         {!imageError ? (
//           <img
//             src={project.image || "/images/placeholder.jpg"}
//             alt={project.title}
//             className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//             onError={() => setImageError(true)}
//           />
//         ) : (
//           <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
//             <span className="text-sm">Image not available</span>
//           </div>
//         )}
        
//         {/* Overlay with Quick Actions */}
//         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
             
//              {/* 1. View Details (Internal Page) */}
//              <Link href={`/project?slug=${project.slug}`}>
//                  <Button size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 border border-purple-500" title="View Details">
//                      <Eye className="w-4 h-4" />
//                  </Button>
//              </Link>

//              {/* 2. Live Demo (External) */}
//              {/* Checks for 'demo' (from your data) OR 'live' (fallback) */}
//              {(project.links?.demo || project.links?.live) && (
//                  <Link href={project.links?.demo || project.links?.live} target="_blank">
//                     <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90" title="Live Demo">
//                         <ExternalLink className="w-4 h-4" />
//                     </Button>
//                  </Link>
//              )}

//              {/* 3. Github (External) */}
//              {project.links?.github && (
//                  <Link href={project.links.github} target="_blank">
//                     <Button size="icon" className="rounded-full bg-slate-900 text-white hover:bg-black border border-slate-700" title="View Code">
//                         <Github className="w-4 h-4" />
//                     </Button>
//                  </Link>
//              )}
//         </div>
//       </div>
      
//       {/* Content */}
//       <div className="p-6 flex flex-col flex-1">
//         {/* Title is also a link now */}
//         <Link href={`/project?slug=${project.slug}`} className="block w-fit">
//            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{project.title}</h3>
//         </Link>
        
//         <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
//             {project.description}
//         </p>

//         {/* Tags */}
//         <div className="mt-auto flex flex-wrap gap-2">
//           {project.tags.slice(0, 4).map((t: string) => (
//             <span key={t} className="text-[10px] font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
//               {t}
//             </span>
//           ))}
//           {project.tags.length > 4 && (
//               <span className="text-[10px] font-medium px-2 py-1 bg-slate-50 text-slate-400 rounded">+{project.tags.length - 4}</span>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   )
// }
























"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Eye } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function ProjectCard({ project, index }: { project: any, index: number }) {
  const [imageError, setImageError] = useState(false)

  // MongoDB uses '_id', make sure to use that
  const projectId = project._id || project.id 

  return (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="group h-full flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
        <span className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10">
            {project.category}
        </span>
        
        {!imageError ? (
          <img
            src={project.image || "/images/placeholder.jpg"}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
            <span className="text-sm">Image not available</span>
          </div>
        )}
        
        {/* Overlay with Quick Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
             
             {/* 1. View Details (Internal Page via ID) */}
             <Link href={`/project?id=${projectId}`}>
                 <Button size="icon" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 border border-purple-500" title="View Details">
                     <Eye className="w-4 h-4" />
                 </Button>
             </Link>

             {/* 2. Live Demo */}
             {(project.links?.demo || project.links?.live) && (
                 <Link href={project.links?.demo || project.links?.live} target="_blank">
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90" title="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                    </Button>
                 </Link>
             )}

             {/* 3. Github */}
             {project.links?.github && (
                 <Link href={project.links.github} target="_blank">
                    <Button size="icon" className="rounded-full bg-slate-900 text-white hover:bg-black border border-slate-700" title="View Code">
                        <Github className="w-4 h-4" />
                    </Button>
                 </Link>
             )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/project?id=${projectId}`} className="block w-fit">
           <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{project.title}</h3>
        </Link>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
            {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags?.slice(0, 4).map((t: string) => (
            <span key={t} className="text-[10px] font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}