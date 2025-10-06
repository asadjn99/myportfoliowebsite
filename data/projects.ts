export type ProjectCategory = "graphic-design" | "web-dev"

export interface ProjectLink {
  github?: string
  demo?: string
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  tags: string[]
  image: string
  links?: ProjectLink
}

export const projects: Project[] = [
  // Graphic Design (first section)
  {
    slug: "health-awareness-poster",
    title: "Health Awareness Poster",
    category: "graphic-design",
    description: "A poster campaign design focusing on public health awareness and prevention.",
    tags: ["Photoshop", "Poster", "Social Media"],
    image: "/health-awareness-poster-design.jpg",
  },
  {
    slug: "cafe-brand-identity",
    title: "Cafe Brand Identity",
    category: "graphic-design",
    description: "Logo, color system, and menu layout for a cozy local cafe.",
    tags: ["Branding", "Illustrator", "Menu"],
    image: "/cafe-brand-identity-logo-and-menu.jpg",
  },
  {
    slug: "travel-social-templates",
    title: "Travel Social Media Templates",
    category: "graphic-design",
    description: "Engaging travel templates designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Template"],
    image: "/travel-social-media-templates.jpg",
  },

  // Web Development (last section)
  {
    slug: "portfolio-website-ui",
    title: "Modern Portfolio Website",
    category: "web-dev",
    description: "Responsive portfolio layout with sections for experience, skills, and contact.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/modern-portfolio-website-ui.jpg",
    links: { demo: "https://example.com", github: "https://github.com/asadjn99" },
  },
  {
    slug: "iot-dashboard-ui",
    title: "IoT Dashboard UI",
    category: "web-dev",
    description: "Dashboard interface concept for IoT sensor monitoring and alerts.",
    tags: ["Dashboard", "UI", "IoT"],
    image: "/iot-dashboard-ui-charts.jpg",
  },
]
