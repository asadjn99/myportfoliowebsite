



// data/projects.ts
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

const CLOUDINARY_URL = "https://res.cloudinary.com/dvwqnzsgx/image/upload"

export const projects: Project[] = [
  // Graphic Design - Dental Health Posters
  {
    slug: "dental-health-awareness-poster",
    title: "Dental Health Poster",
    category: "graphic-design",
    description: "Poster design for a dental health awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211260/supreme-1_fnzifz.jpg`,
  },
  {
    slug: "infected-teeth-poster",
    title: "Infected Teeth Poster",
    category: "graphic-design",
    description: "Poster design for a dental infected teeth awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211287/infected-teeth_hwslt0.jpg`,
  },
  {
    slug: "dental-bleaching-poster",
    title: "Dental Bleaching Poster",
    category: "graphic-design",
    description: "Poster design for a dental bleaching awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760554012/dental_bleaching-01_szuxye.png`,
  },
  {
    slug: "missing-teeth-poster",
    title: "Missing Teeth Poster",
    category: "graphic-design",
    description: "Poster design for a dental missing teeth awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211053/missing-teeth_kaeihk.png`,
  },
  {
    slug: "dental-braces-poster",
    title: "Dental Braces Discount",
    category: "graphic-design",
    description: "Poster design for a dental braces discount awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760554088/dental_braces_discount_znq9ma.png`,
  },
  {
    slug: "dental-discount-poster",
    title: "Dental Discount on All Procedures",
    category: "graphic-design",
    description: "Poster design for a dental discount on all procedures awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760554090/dental_disc_on_all_procedures_j1qfgm.png`,
  },
  {
    slug: "brush-teeth-poster",
    title: "Brush your Teeth",
    category: "graphic-design",
    description: "Poster design for a dental brush teeth awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211219/brush-teeth_mk5bfn.png`,
  },
  {
    slug: "dental-treatment-poster",
    title: "Dental Treatment All Procedures",
    category: "graphic-design",
    description: "Poster design for a dental treatment all procedures awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760554087/dental_treatment2_vxr8q8.png`,
  },
  {
    slug: "child-smile-teeth-poster",
    title: "Keep Your Child Smile",
    category: "graphic-design",
    description: "Poster design for a dental keep your child smile awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211268/child-smile-teeth_hbqf42.jpg`,
  },
  {
    slug: "dental-treatment-poster-2",
    title: "Dental Treatment All Procedures",
    category: "graphic-design",
    description: "Poster design for a dental treatment all procedures awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760554086/dental_treatment_gaxlox.png`,
  },

  // Graphic Design - Other Campaigns
  {
    slug: "learn-industry-standard-skills-poster",
    title: "Learn Industry Standard Skills",
    category: "graphic-design",
    description: "Poster design for free courses on graphic design and digital marketing.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211240/free-courses_iys5wi.jpg`,
  },
  {
    slug: "eid-mubarak-poster-1",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211285/eid2_yfj1ua.jpg`,
  },
  {
    slug: "eid-mubarak-poster-2",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211280/eid1_e7qinb.jpg`,
  },
  {
    slug: "digital-marketing-poster",
    title: "Digital Marketing",
    category: "graphic-design",
    description: "Poster design for digital marketing awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211226/digital-marketing_zoukuh.jpg`,
  },
  {
    slug: "eid-mubarak-poster-3",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211234/eid4_wisohy.jpg`,
  },
  {
    slug: "eid-mubarak-poster-3",
    title: "Eid Mubarak",
    category: "graphic-design",
    description: "Poster design for Eid Mubarak wishes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211226/eid3_lcrif9.jpg`,
  },
  {
    slug: "tutor-at-home-poster",
    title: "Tutor Academy",
    category: "graphic-design",
    description: "Poster design for Tutor at Home awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211252/teachrica_r6i224.jpg`,
  },
  {
    slug: "robotech-expo-poster",
    title: "Robotech Expo",
    category: "graphic-design",
    description: "Poster design for Robotech Expo awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211241/robots_jet4p6.jpg`,
  },
  {
    slug: "school-admission-poster",
    title: "School Admissions Open",
    category: "graphic-design",
    description: "Poster design for School Admissions Open awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211298/school_nalari.jpg`,
  },
  {
    slug: "teachrica-classes-poster",
    title: "Teachrica Classes",
    category: "graphic-design",
    description: "Poster design for Teachrica Classes awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211254/tutor_mtjyld.jpg`,
  },
  

  {
    slug: "stem-education-poster",
    title: "STEM Education",
    category: "graphic-design",
    description: "Poster design for STEM Education awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211247/stem_ptojkt.jpg`,
  },

  // Graphic Design - Restaurants
  {
    slug: "cheezios-restaurant-poster-1",
    title: "Cheezios Pakistan",
    category: "graphic-design",
    description: "Poster design for Cheezios awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211279/cheezious-1_mroia4.jpg`,
  },
  {
    slug: "cheezios-restaurant-poster-2",
    title: "Cheezios Pakistan",
    category: "graphic-design",
    description: "Poster design for Cheezios awareness campaign.",
    tags: ["illustrator", "Poster", "Social Media"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211225/cheezious_corztq.jpg`,
  },

  // Graphic Design - Branding & Other
  {
    slug: "cafe-brand-identity",
    title: "Cafe Brand Identity",
    category: "graphic-design",
    description: "Logo, color system, and menu layout for a cozy local cafe.",
    tags: ["Branding", "Illustrator", "Menu"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211036/cafe-brand-identity-logo-and-menu_olxr1q.jpg`,
  },
  {
    slug: "travel-social-templates-1",
    title: "Travel & Tourism Social Media",
    category: "graphic-design",
    description: "Engaging travel poster designed for Instagram and Facebook campaigns.",
    tags: ["Branding", "Illustrator", "Poster"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211209/travel-social-media-templates_jy6nwv.jpg`,
  },
  {
    slug: "travel-social-templates-2",
    title: "Travel Social Media",
    category: "graphic-design",
    description: "Engaging travel templates designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211209/travel-social-media-design-templates_lffymf.jpg`,
  },

  // Graphic Design - Cricket Tournament
  {
    slug: "cricket-tournament-poster-1",
    title: "Cricket Points Table Poster",
    category: "graphic-design",
    description: "Cricket Points Table Poster designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211045/cricket4_m3ldg3.jpg`,
  },
  {
    slug: "cricket-tournament-poster-2",
    title: "Cricket Match Poster",
    category: "graphic-design",
    description: "Cricket Match Poster designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211279/cricket2_viqysn.jpg`,
  },
  {
    slug: "cricket-tournament-poster-3",
    title: "Cricket Man of the Match Poster",
    category: "graphic-design",
    description: "Cricket Man of the Match Poster designed for Instagram and Facebook campaigns.",
    tags: ["Canva", "Social Media", "Illustrator"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211048/cricket3_rjdwwi.jpg`,
  },



  // Graphic Design - Certificates
  {
    slug: "certificate-design-print-1",
    title: "Certificate Design",
    category: "graphic-design",
    description: "Professional certificate template for academic and training achievements.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211044/certificate1_unqyz8.jpg`,
  },
  {
    slug: "certificate-design-print-2",
    title: "Certificate Design",
    category: "graphic-design",
    description: "Professional certificate template for academic and training achievements.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211042/certificate_usrscr.jpg`,
  },
  {
    slug: "certificate-design-print-3",
    title: "Certificate Design",
    category: "graphic-design",
    description: "Professional certificate template for academic and training achievements.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211039/certificate2_ltamko.png`,
  },

  // Graphic Design - Personal
  {
    slug: "asad-at-usecs",
    title: "Me at USECS University",
    category: "graphic-design",
    description: "Poster design for Me at USECS University awareness campaign.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/asad_wzqrip.jpg`,
  },
  {
    slug: "president-student-socity",
    title: "Social Society Poster",
    category: "graphic-design",
    description: "Poster design for President Student Society awareness campaign.",
    tags: ["Illustrator", "Certificate", "Print"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211053/president_bx54rd.png`,
  },

  // Web Development
  {
    slug: "portfolio-website-ui",
    title: "Modern Portfolio Website",
    category: "web-dev",
    description: "Responsive portfolio layout with sections for experience, skills, and contact.",
    tags: ["React", "Next.js", "Tailwind CSS", "UI/UX"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211021/placeholder_enttqx.svg`,
    links: { demo: "https://asadjn99.netlify.app", github: "https://github.com/asadjn99" },
  },
  {
    slug: "finalyearproject-website-ui",
    title: "Tourism Hub (Final Year Project)",
    category: "web-dev",
    description: "Responsive final year project layout with sections for experience, skills, and contact.",
    tags: ["HTML", "CSS", "JSON", "bootstrap CSS", "UI/UX"],
    image: `https://res.cloudinary.com/dvwqnzsgx/image/upload/v1760211021/placeholder_enttqx.svg`,
    links: { demo: "https://pakhtunkhwa-tourism-hub.netlify.app", github: "https://github.com/asadjn99" },
  },
]