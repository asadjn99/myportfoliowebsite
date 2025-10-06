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
  //dental health posters
  {
    slug: "dental-health-awareness-poster",
    title: "Dental Health Poster",
    category: "graphic-design",
    description: "Poster design for a dental health awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "/supreme-1.jpg",
  },
  {
    slug: "infected-teeth-poster",
    title: "Infected Teeth Poster",
    category: "graphic-design",
    description: "Poster design for a dental infected teeth awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "infected-teeth.jpg",
  },
  {
    slug: "missing-teeth-poster",
    title: "Missing Teeth Poster",
    category: "graphic-design",
    description: "Poster design for a dental missing teeth awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "missing-teeth.jpg",
  },
  {
    slug: "brush-teeth-poster",
    title: "Brush your Teeth",
    category: "graphic-design",
    description: "Poster design for a dental brush teeth awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "brush-teeth.jpg",
  },
  {
    slug: "child-smile-teeth-poster",
    title: "Keep Your Child Smile",
    category: "graphic-design",
    description: "Poster design for a dental keep your child smile awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "child-smile-teeth.jpg",
  },
  //end dental health posters
  // Encoder Bytes pvt ltd posters
  {
    slug: "learn-industry-standard-skills-poster",
    title: "Learn Industry Standard Skills",
    category: "graphic-design",
    description: "Poster design for a free courses on graphic design and digital marketing awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "child-smile-teeth.jpg",
  },
  {
    slug: "eid-mubarak-poster",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "eid1.jpg",
  },
  {
    slug: "eid-mubarak-poster",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "eid2.jpg",
  },
  {
    slug: "digital-marketing-poster",
    title: "Digital Marketing",
    category: "graphic-design",
    description: "Poster design for digital marketing awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "digital-marketing.jpg",
  },
  {
    slug: "eid-mubarak-poster",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "eid3.jpg",
  },
  {
    slug: "tutor-at-home-poster",
    title: "Tutor Academy",
    category: "graphic-design",
    description: "Poster design for Tutor at Home awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "tutor.jpg",
  },
  {
    slug: "eid-mubarak-poster",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "eid4.jpg",
  },
  {
    slug: "robotech-expo-poster",
    title: "Robotech Expo",
    category: "graphic-design",
    description: "Poster design for Robotech Expo awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "robots.jpg",
  },
  {
    slug: "school-admission-poster",
    title: "School Admissions Open",
    category: "graphic-design",
    description: "Poster design for School Admissions Open awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "school.jpg",
  },
  {
    slug: "teachrica-classes-poster",
    title: "Teachrica Classes",
    category: "graphic-design",
    description: "Poster design for Teachrica Classes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "teachrica.jpg",
  },
  {
    slug: "stem-education-poster",
    title: "STEM Education",
    category: "graphic-design",
    description: "Poster design for STEM Education awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "stem.jpg",
  },

// cheezios poster / Restaurant poster
{
    slug: "cheezios-restaurant-poster",
    title: "Cheezios Pakistan",
    category: "graphic-design",
    description: "Poster design for Cheezios awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "cheezious.jpg",
  },
{
    slug: "cheezios-restaurant-poster",
    title: "Cheezios Pakistan",
    category: "graphic-design",
    description: "Poster design for Cheezios awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: "cheezious-1.jpg",
  },
// other
  {
    slug: "cafe-brand-identity",
    title: "Cafe Brand Identity",
    category: "graphic-design",
    description: "Logo, color system, and menu layout for a cozy local cafe.",
    tags: ["Branding", "Illustrator", "Menu"],
    image: "/cafe-brand-identity-logo-and-menu.jpg",
  },
  

  // Travel Social Media Posts
  {
    slug: "travel-social-templates",
    title: "Travel & Tourism Social Media",
    category: "graphic-design",
    description: "Engaging travel poster designed for Instagram and Facebook campaigns.",
    tags: ["Branding", "Illustrator", "Poster"],
    image: "letszu.jpg",
  },

  {
    slug: "travel-social-templates",
    title: "Travel Social Media",
    category: "graphic-design",
    description: "Engaging travel templates designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: "/travel-social-media-templates.jpg",
  },
  // Cricket Tournment Posters Project
  {
    slug: "cricket-tournament-poster",
    title: "Cricket Points Table Poster",
    category: "graphic-design",
    description: "Cricket Points Table Poster designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: "/cricket1.jpg",
  },
  {
    slug: "cricket-tournament-poster",
    title: "Cricket Match Poster",
    category: "graphic-design",
    description: "Cricket Match Poster designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: "/cricket2.jpg",
  },
  {
    slug: "cricket-tournament-poster",
    title: "Cricket Man of the Match Poster",
    category: "graphic-design",
    description: "Cricket Man of the Match Poster designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: "/cricket3.jpg",
  },
  {
    slug: "cricket-tournament-poster",
    title: "Cricket Points Table Poster",
    category: "graphic-design",
    description: "Points Table Poster designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: "/cricket4.jpg",
  },

// Certificate for print
  {
    slug: "certificate-design-print",
    title: "Certificate Design",
    category: "graphic-design",
    description: "Professional certificate template for academic and training achievements.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: "/certificate.jpg",
  },
  {
    slug: "certificate-design-print",
    title: "Certificate Design",
    category: "graphic-design",
    description: "Professional certificate template for academic and training achievements.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: "/certificate1.jpg",
  },
  {
    slug: "certificate-design-print",
    title: "Certificate Design",
    category: "graphic-design",
    description: "Professional certificate template for academic and training achievements.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: "/certificate2.jpg",
  },
// other graphic design projects
{
    slug: "asad-at-usecs",
    title: "Me at USECS University",
    category: "graphic-design",
    description: "Poster design for Me at USECS University awareness campaign.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: "/asad.jpg",
  },
{
    slug: "president-student-socity",
    title: "President Student Socity Poster",
    category: "graphic-design",
    description: "Poster design for President Student Socity awareness campaign.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: "/president.jpg",
  },









  // Web Development (last section)
  {
    slug: "portfolio-website-ui",
    title: "Modern Portfolio Website",
    category: "web-dev",
    description: "Responsive portfolio layout with sections for experience, skills, and contact.",
    tags: ["React", "Next.js", "Tailwind CSS", "UI/UX"],
    image: "/modern-portfolio-website-ui.jpg",
    links: { demo: "https://asadjn99.netlify.app", github: "https://github.com/asadjn99" },
  },
  // {
  //   slug: "iot-dashboard-ui",
  //   title: "IoT Dashboard UI",
  //   category: "web-dev",
  //   description: "Dashboard interface concept for IoT sensor monitoring and alerts.",
  //   tags: ["Dashboard", "UI", "IoT"],
  //   image: "/iot-dashboard-ui-charts.jpg",
  // },
]
