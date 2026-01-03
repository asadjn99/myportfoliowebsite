import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFloat } from "@/components/whatsapp-float" // Import the button

const inter = Inter({ subsets: ["latin"] })

// 1. VIEWPORT CONFIG (Separate export in Next.js 14+)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" }, // Matches slate-950
  ],
  width: "device-width",
  initialScale: 1,
}

// 2. COMPREHENSIVE METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://asadjn99.netlify.app"), 
  title: {
    default: "Asad Ullah | Creative Developer & Designer",
    template: "%s | Asad Ullah",
  },
  description: "Portfolio of Asad Ullah, a skilled software engineer specializing in Web Development (MERN), Graphic Design and IoT Solutions.",
  keywords: [
    "Asad Ullah", 
    "Web Developer", 
    "Graphic Designer", 
    "IoT Developer", 
    "MERN Stack", 
    "Next.js Portfolio",
    "Peshawar Tech"
  ],
  authors: [{ name: "Asad Ullah", url: "https://github.com/asadjn99" }],
  creator: "Asad Ullah",
  
  // Custom Icons (Removes default React/Vercel logos)
  icons: {
    icon: "/images/profile.png",
    shortcut: "/images/profile.png",
    apple: "/images/profile.png", 
  },

  // Open Graph (For neat cards on Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asadjn.com",
    title: "Asad Ullah | Portfolio",
    description: "Software Engineer specializing in Web Development, Design, and IoT.",
    siteName: "Asad Ullah Portfolio",
    images: [
      {
        url: "/images/profile.png", // Ensure this image is high quality
        width: 1200,
        height: 630,
        alt: "Asad Ullah - Portfolio Cover",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Asad Ullah | Creative Developer",
    description: "Check out my latest projects in Web Dev, Design, and IoT.",
    images: ["/images/profile.png"],
    creator: "@asadjn99", // Update if you have a handle
  },

  // Robots (SEO)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-purple-500/30`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
        >
          
          {/* Main App Content */}
          {children}
          
          {/* Floating Elements */}
          <WhatsAppFloat />
          <Toaster />
          
        </ThemeProvider>
      </body>
    </html>
  )
}