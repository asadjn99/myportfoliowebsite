import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",

  title: "Asad Ullah | Portfolio",
  description: "Portfolio of Asad Ullah, Graduate Computer Science Student specializing in  Web Development, Graphic Design, IoT, CCTV, Documents coltorlling and Volunteer",
    // generator: 'v0.app'
    icons: {
    icon: "/images/profile.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
