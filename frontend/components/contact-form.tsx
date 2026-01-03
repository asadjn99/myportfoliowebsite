"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Send, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"


interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  isTextArea?: boolean
  rows?: number
}

const FloatingInput = ({ label, isTextArea, className, value, rows, ...props }: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value && String(value).length > 0

  return (
    <div className="relative group">
      {isTextArea ? (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          rows={rows}
          className={cn(
            "block w-full px-4 py-4 text-gray-900 dark:text-gray-100 bg-gray-50/50 dark:bg-gray-900/50 border-2 border-transparent rounded-xl focus:outline-none focus:border-purple-500/50 focus:bg-white dark:focus:bg-gray-900 transition-all duration-300 resize-none placeholder-transparent peer",
            className
          )}
          placeholder={label}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <input
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className={cn(
            "block w-full px-4 py-4 text-gray-900 dark:text-gray-100 bg-gray-50/50 dark:bg-gray-900/50 border-2 border-transparent rounded-xl focus:outline-none focus:border-purple-500/50 focus:bg-white dark:focus:bg-gray-900 transition-all duration-300 placeholder-transparent peer",
            className
          )}
          placeholder={label}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      
      {/* Floating Label */}
      <label
        className={cn(
          "absolute left-4 transition-all duration-300 pointer-events-none text-gray-500 dark:text-gray-400",
          (isFocused || hasValue) 
            ? "-top-2.5 text-xs bg-white dark:bg-gray-800 px-2 text-purple-600 font-bold rounded-full shadow-sm"
            : "top-4 text-base"
        )}
      >
        {label}
      </label>

      
    </div>
  )
}

// --- MAIN FORM COMPONENT ---
export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // ✅ CHANGED: Use fetch to call your Node.js Backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // 4. Clear Form immediately
        setFormData({ name: "", email: "", subject: "", message: "" })
        
        // Show Popup
        setShowSuccess(true)

        // 3. Auto Close Popup after 3 seconds
        setTimeout(() => {
            setShowSuccess(false)
        }, 3000)

      } else {
        toast({ title: "Error", description: result.error || "Something went wrong.", variant: "destructive" })
      }
    } catch (error) {
      console.error(error)
      toast({ title: "Error", description: "Failed to send.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative w-full">
      
      {/* SUCCESS MODAL OVERLAY */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-center p-6"
            >
              {/* Animated Tick */}
              <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 mb-6 relative overflow-hidden">
                <motion.div
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Check className="w-12 h-12 text-white" strokeWidth={4} />
                </motion.div>
                <motion.div 
                    animate={{ x: [ -100, 100 ] }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                    className="absolute inset-0 bg-white/20 -skew-x-12 w-1/2"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-gray-500 dark:text-gray-300 mb-6 max-w-[200px] mx-auto text-sm">
                I'll get back to you as soon as possible.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FORM CONTENT */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FloatingInput 
            label="Your Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <FloatingInput 
            label="Email Address" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <FloatingInput 
          label="Subject" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        />
        
        <FloatingInput 
          label="Your Message" 
          name="message" 
          isTextArea 
          rows={5}
          value={formData.message} 
          onChange={handleChange} 
          required 
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold text-sm md:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </div>
  )
}