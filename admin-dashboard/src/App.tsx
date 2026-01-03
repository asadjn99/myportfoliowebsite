/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/immutability */
// import { useState, useEffect } from "react";
// import type { ChangeEvent } from "react";
// import DashboardLayout from "./layouts/DashboardLayout";
// import Modal from "./components/Modal";
// import axios from "axios";
// import { Toaster, toast } from "sonner";

import { useState, useEffect, type ChangeEvent } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import Modal from "./components/Modal";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
import Login from "./Login";


// --- TYPES ---
interface HeroData {
  name: string;
  designation: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
  socials: {
    email: string;
    github: string;
    linkedin: string;
  };
}

interface AboutData {
  paragraphs: string[];
  expertise: string[];
}

interface ExperienceJob {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

interface ExperienceData {
  sectionTitle: string;
  jobs: ExperienceJob[];
}

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
}

interface ProjectsData {
  sectionTitle: string;
  items: ProjectItem[];
}


interface SkillCategory {
  title: string;
  code: string;
  theme: string;
  skills: string[];
}

interface SkillsData {
  sectionTitle: string;
  categories: SkillCategory[];
  additionalSkills: string[];
}

interface EducationData {
  education: {
    degree: string;
    institution: string;
    year: string;
    specialization: string; 
    finalYearProject: { title: string; link: string; }; 
    tags: string[];
  };
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
  trainings: {
    title: string;
    category: string;
  }[];
}

interface ContactData {
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  description: string;
}












function App() {
  const [activeTab, setActiveTab] = useState("Hero");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  
  // Data States
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(null);
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [projectsForm, setProjectsForm] = useState<Partial<ProjectsData>>({});
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);
  const [skillsForm, setSkillsForm] = useState<Partial<SkillsData>>({});
  const [eduData, setEduData] = useState<EducationData | null>(null);
  const [eduForm, setEduForm] = useState<Partial<EducationData>>({});
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [contactForm, setContactForm] = useState<Partial<ContactData>>({});
  
  // Form States
  const [heroForm, setHeroForm] = useState<Partial<HeroData>>({});
  const [aboutForm, setAboutForm] = useState<Partial<AboutData>>({});
  const [experienceForm, setExperienceForm] = useState<Partial<ExperienceData>>({});

  // Initial Fetch
  useEffect(() => {
    fetchHero();
    fetchAbout();
    fetchExperience();
    fetchProjects();
    fetchSkills();
    fetchEducation();
    fetchContact();
  }, []);

  const fetchHero = () => axios.get("${import.meta.env.VITE_API_URL}/api/hero").then(res => setHeroData(res.data));
  const fetchAbout = () => axios.get("${import.meta.env.VITE_API_URL}/api/about").then(res => setAboutData(res.data));
  const fetchExperience = () => axios.get("${import.meta.env.VITE_API_URL}/api/experience").then(res => setExperienceData(res.data));
  const fetchProjects = () => axios.get("${import.meta.env.VITE_API_URL}/api/projects").then(res => setProjectsData(res.data));
  const fetchSkills = () => axios.get("${import.meta.env.VITE_API_URL}/api/skills").then(res => setSkillsData(res.data));
  const fetchEducation = () => axios.get("${import.meta.env.VITE_API_URL}/api/education").then(res => setEduData(res.data));
  const fetchContact = () => axios.get("${import.meta.env.VITE_API_URL}/api/contact").then(res => setContactData(res.data));

  // --- HANDLERS ---

  const openEditModal = () => {
    if (activeTab === "Hero" && heroData) {
        setHeroForm(heroData);
    } else if (activeTab === "About" && aboutData) {
        setAboutForm(JSON.parse(JSON.stringify(aboutData)));
    } else if (activeTab === "Experience" && experienceData) {
        setExperienceForm(JSON.parse(JSON.stringify(experienceData)));
    } else if (activeTab === "Projects" && projectsData) {
        setProjectsForm(JSON.parse(JSON.stringify(projectsData)));
    } else if (activeTab === "Skills" && skillsData) {
        setSkillsForm(JSON.parse(JSON.stringify(skillsData)));
    } else if (activeTab === "Education" && eduData) {
        setEduForm(JSON.parse(JSON.stringify(eduData)));
    } else if (activeTab === "Contact" && contactData) {
        setContactForm(contactData);
    }
    setIsModalOpen(true);
  };


// 3. LOGOUT HANDLER (Pass this to Sidebar later)
  const handleLogout = () => {
      localStorage.removeItem("token");
      setToken(null);
      toast.success("Logged out successfully");
  };





  // 1. Hero Handlers
  const handleHeroChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes("socials.")) {
        const socialKey = name.split(".")[1];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setHeroForm(prev => ({ ...prev, socials: { ...prev.socials, [socialKey]: value } as any }));
    } else {
        setHeroForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // 2. About Handlers
  const handleAboutArrayChange = (type: 'paragraphs' | 'expertise', index: number, value: string) => {
      const newArray = [...(aboutForm[type] || [])];
      newArray[index] = value;
      setAboutForm(prev => ({ ...prev, [type]: newArray }));
  };
  const addAboutItem = (type: 'paragraphs' | 'expertise') => {
      setAboutForm(prev => ({ ...prev, [type]: [...(prev[type] || []), ""] }));
  };
  const removeAboutItem = (type: 'paragraphs' | 'expertise', index: number) => {
      const newArray = [...(aboutForm[type] || [])];
      newArray.splice(index, 1);
      setAboutForm(prev => ({ ...prev, [type]: newArray }));
  };

  // 3. Experience Handlers
  const handleExpTitleChange = (val: string) => setExperienceForm(prev => ({ ...prev, sectionTitle: val }));
  
  const handleJobChange = (index: number, field: keyof ExperienceJob, value: string) => {
    const newJobs = [...(experienceForm.jobs || [])];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    newJobs[index][field] = value;
    setExperienceForm(prev => ({ ...prev, jobs: newJobs }));
  };


  // 4 --- PROJECT HANDLERS ---
  const handleProjTitleChange = (val: string) => setProjectsForm(prev => ({ ...prev, sectionTitle: val }));

  const handleProjectChange = (index: number, field: string, value: string) => {
    const newItems = [...(projectsForm.items || [])];
    
    if (field.includes("links.")) {
        const linkType = field.split(".")[1];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        newItems[index].links[linkType] = value;
    } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        newItems[index][field] = value;
    }
    setProjectsForm(prev => ({ ...prev, items: newItems }));
  };

  const handleTagsChange = (index: number, value: string) => {
     // We split by comma to create array
     const newItems = [...(projectsForm.items || [])];
     newItems[index].tags = value.split(",").map(tag => tag.trim());
     setProjectsForm(prev => ({ ...prev, items: newItems }));
  };

  const addProject = () => {
    setProjectsForm(prev => ({
        ...prev,
        items: [...(prev.items || []), { 
            title: "New Project", 
            description: "", 
            image: "", 
            category: "Web Development",
            tags: [], 
            links: { live: "", github: "" } 
        }]
    }));
  };

  const removeProject = (index: number) => {
    const newItems = [...(projectsForm.items || [])];
    newItems.splice(index, 1);
    setProjectsForm(prev => ({ ...prev, items: newItems }));
  };
// end of proj



// --- SKILLS HANDLERS ---
  const handleSkillTitleChange = (val: string) => setSkillsForm(prev => ({ ...prev, sectionTitle: val }));

  // Handle Category Fields (Title, Code, Theme)
  const handleCategoryChange = (index: number, field: keyof SkillCategory, value: string) => {
    const newCats = [...(skillsForm.categories || [])];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    newCats[index][field] = value;
    setSkillsForm(prev => ({ ...prev, categories: newCats }));
  };

  // Handle Skills Array inside a Category (Comma separated for easy editing)
  const handleCatSkillsChange = (index: number, value: string) => {
    const newCats = [...(skillsForm.categories || [])];
    newCats[index].skills = value.split(",").map(s => s.trim());
    setSkillsForm(prev => ({ ...prev, categories: newCats }));
  };

  const addCategory = () => {
    setSkillsForm(prev => ({
        ...prev,
        categories: [...(prev.categories || []), { title: "New Category", code: "NC", theme: "purple", skills: [] }]
    }));
  };

  const removeCategory = (index: number) => {
    const newCats = [...(skillsForm.categories || [])];
    newCats.splice(index, 1);
    setSkillsForm(prev => ({ ...prev, categories: newCats }));
  };

  // Handle Additional Skills (Bottom section)
  const handleAdditionalSkillsChange = (value: string) => {
      setSkillsForm(prev => ({ ...prev, additionalSkills: value.split(",").map(s => s.trim()) }));
  };
  // end of skilssssssssssssssss



// --- EDUCATION HANDLERS ................---
  const handleDegreeChange = (field: string, value: string) => {
      setEduForm(prev => ({ ...prev, education: { ...prev.education!, [field]: value } }));
  };
  const handleDegreeTags = (val: string) => {
      setEduForm(prev => ({ ...prev, education: { ...prev.education!, tags: val.split(",").map(t=>t.trim()) } }));
  };
  const handleFinalProject = (field: string, val: string) => {
      setEduForm(p => ({
          ...p, 
          education: { 
              ...p.education!, 
              finalYearProject: { ...p.education!.finalYearProject, [field]: val } 
          }
      }));
  };

  // Certifications
  const handleCertChange = (index: number, field: string, value: string) => {
      const newCerts = [...(eduForm.certifications || [])];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newCerts[index][field] = value;
      setEduForm(prev => ({ ...prev, certifications: newCerts }));
  };
  const addCert = () => setEduForm(prev => ({ ...prev, certifications: [...(prev.certifications || []), { title: "", issuer: "", year: "" }] }));
  const removeCert = (index: number) => {
      const newCerts = [...(eduForm.certifications || [])];
      newCerts.splice(index, 1);
      setEduForm(prev => ({ ...prev, certifications: newCerts }));
  };

  // Trainings
  const handleTrainingChange = (index: number, field: string, value: string) => {
      const newTrain = [...(eduForm.trainings || [])];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newTrain[index][field] = value;
      setEduForm(prev => ({ ...prev, trainings: newTrain }));
  };
  const addTraining = () => setEduForm(prev => ({ ...prev, trainings: [...(prev.trainings || []), { title: "", category: "Training" }] }));
  const removeTraining = (index: number) => {
      const newTrain = [...(eduForm.trainings || [])];
      newTrain.splice(index, 1);
      setEduForm(prev => ({ ...prev, trainings: newTrain }));
  };
  // education certificate's end





  // Contact Handler 
  const handleContactChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContactForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };







  const addJob = () => {
    setExperienceForm(prev => ({
        ...prev,
        jobs: [...(prev.jobs || []), { role: "", company: "", duration: "", description: [""] }]
    }));
  };
  const removeJob = (index: number) => {
    const newJobs = [...(experienceForm.jobs || [])];
    newJobs.splice(index, 1);
    setExperienceForm(prev => ({ ...prev, jobs: newJobs }));
  };

  const handleJobDescChange = (jobIndex: number, descIndex: number, value: string) => {
    const newJobs = [...(experienceForm.jobs || [])];
    newJobs[jobIndex].description[descIndex] = value;
    setExperienceForm(prev => ({ ...prev, jobs: newJobs }));
  };
  const addJobDesc = (jobIndex: number) => {
    const newJobs = [...(experienceForm.jobs || [])];
    newJobs[jobIndex].description.push("");
    setExperienceForm(prev => ({ ...prev, jobs: newJobs }));
  };
  const removeJobDesc = (jobIndex: number, descIndex: number) => {
    const newJobs = [...(experienceForm.jobs || [])];
    newJobs[jobIndex].description.splice(descIndex, 1);
    setExperienceForm(prev => ({ ...prev, jobs: newJobs }));
  };


  const handleSave = async () => {
    try {
      if (activeTab === "Hero") {
        await axios.put("${import.meta.env.VITE_API_URL}/api/hero", heroForm);
        fetchHero();
      } else if (activeTab === "About") {
        await axios.put("${import.meta.env.VITE_API_URL}/api/about", aboutForm);
        fetchAbout();
      } else if (activeTab === "Experience") {
        await axios.put("${import.meta.env.VITE_API_URL}/api/experience", experienceForm);
        fetchExperience();
      }else if (activeTab === "Projects") {
        await axios.put("${import.meta.env.VITE_API_URL}/api/projects", projectsForm);
        fetchProjects();
      }else if (activeTab === "Skills") {
        await axios.put("${import.meta.env.VITE_API_URL}/api/skills", skillsForm);
        fetchSkills();
      }else if (activeTab === "Education") {
        await axios.put("${import.meta.env.VITE_API_URL}/api/education", eduForm);
        fetchEducation();
      }else if (activeTab === "Contact") {
        await axios.put("${import.meta.env.VITE_API_URL}/api/contact", contactForm);
        fetchContact();
      }

      setIsModalOpen(false);
      toast.success(`${activeTab} updated successfully!`);
    } catch (err) {
      toast.error("Failed to update");
    }
  };






// 4. GATEKEEPER CHECK (If no token, show Login screen)
  if (!token) {
    return <Login onLogin={(t) => setToken(t)} />;
  }






  return (
    <>
      <Toaster position="top-right" theme="dark" />
      <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout}>
      {/* <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}> */}
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-lg md:text-3xl font-bold text-white">{activeTab} Management</h1>
            <button 
                onClick={openEditModal}
                className="text-sm md:text-xl  bg-blue-600 hover:bg-blue-500 text-white px-2 md:px-6 py-2 rounded-lg font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
                Edit {activeTab}
            </button>
        </div>

        {/* --- VIEW: HERO --- */}
        {activeTab === "Hero" && heroData && (
             <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
                <img src={heroData.profileImage} className="w-40 h-40 rounded-full object-cover border-4 border-slate-700" />
                <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white">{heroData.name}</h2>
                    <p className="text-purple-400">{heroData.designation}</p>
                    <p className="text-slate-400 max-w-xl">{heroData.bio}</p>
                    <div className="flex gap-2 justify-center md:justify-start pt-4">
                        <span className="bg-slate-800 px-3 py-1 rounded text-xs text-slate-300">GitHub: {heroData.socials?.github ? 'Linked' : 'No'}</span>
                        <span className="bg-slate-800 px-3 py-1 rounded text-xs text-slate-300">Resume: {heroData.resumeUrl ? 'Uploaded' : 'No'}</span>
                    </div>
                </div>
             </div>
        )}

        {/* --- VIEW: ABOUT --- */}
        {activeTab === "About" && aboutData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-slate-500 text-sm font-bold uppercase mb-4">Bio Paragraphs</h3>
                    <div className="space-y-4">
                        {aboutData.paragraphs.map((p, i) => (
                            <p key={i} className="text-slate-300 text-sm bg-slate-950 p-3 rounded-lg border border-slate-800">{p}</p>
                        ))}
                    </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-slate-500 text-sm font-bold uppercase mb-4">Key Expertise</h3>
                    <ul className="space-y-2">
                        {aboutData.expertise.map((item, i) => (
                            <li key={i} className="flex items-center text-slate-300 text-sm">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}

        {/* --- VIEW: EXPERIENCE --- */}
        {activeTab === "Experience" && experienceData && (
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                    Section Title: <span className="text-blue-400">{experienceData.sectionTitle}</span>
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {experienceData.jobs.map((job, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl border-l-4 border-l-purple-600">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                                    <p className="text-purple-400 text-sm">{job.company}</p>
                                </div>
                                <span className="text-slate-500 text-xs bg-slate-950 px-2 py-1 rounded">{job.duration}</span>
                            </div>
                            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 mt-3">
                                {job.description.map((d, j) => <li key={j}>{d}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* --- VIEW: PROJECTS --- */}
        {activeTab === "Projects" && projectsData && (
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                    Section Title: <span className="text-blue-400">{projectsData.sectionTitle}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.items.map((proj, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group">
                            <div className="h-40 bg-slate-800 relative">
                                {proj.image ? <img src={proj.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-slate-600">No Image</div>}
                                <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm border border-white/10">{proj.category}</span>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-white mb-1">{proj.title}</h3>
                                <p className="text-slate-400 text-sm line-clamp-2 mb-3">{proj.description}</p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {proj.tags.map((t, j) => <span key={j} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}


        {/* --- VIEW: SKILLS --- */}
        {activeTab === "Skills" && skillsData && (
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.categories.map((cat, i) => (
                        <div key={i} className={`bg-slate-900 border border-slate-800 p-6 rounded-xl border-t-4 border-t-${cat.theme === 'orange' ? 'orange-500' : cat.theme === 'green' ? 'green-500' : cat.theme === 'blue' ? 'blue-500' : 'purple-500'}`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="font-bold text-white bg-slate-800 px-2 py-1 rounded text-xs">{cat.code}</span>
                                <h3 className="font-bold text-white">{cat.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((s, j) => <span key={j} className="text-xs bg-slate-950 text-slate-400 px-2 py-1 rounded border border-slate-800">{s}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                     <h3 className="text-slate-500 text-sm font-bold uppercase mb-3">Additional Skills</h3>
                     <div className="flex flex-wrap gap-2">
                        {skillsData.additionalSkills.map((s, i) => <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">{s}</span>)}
                     </div>
                </div>
            </div>
        )} 
        {/* End */}

        {/* --- VIEW: EDUCATION --- */}
        {activeTab === "Education" && eduData && (
            <div className="space-y-8">
                {/* Degree */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <h3 className="text-white font-bold text-xl">{eduData.education.degree}</h3>
                    <p className="text-purple-400">{eduData.education.institution}</p>
                    <p className="text-slate-500 text-sm mb-3">{eduData.education.year}</p>
                    <div className="flex flex-wrap gap-2">{eduData.education.tags.map((t,i)=><span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">{t}</span>)}</div>
                </div>

                {/* Certs Grid */}
                <div>
                    <h3 className="text-slate-500 text-sm font-bold uppercase mb-3">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {eduData.certifications.map((c, i) => (
                            <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                                <h4 className="font-bold text-white text-sm">{c.title}</h4>
                                <p className="text-slate-400 text-xs">{c.issuer}</p>
                                <p className="text-slate-600 text-xs">{c.year}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Training List */}
                <div>
                    <h3 className="text-slate-500 text-sm font-bold uppercase mb-3">Training & Memberships</h3>
                    <div className="space-y-2">
                         {eduData.trainings.map((t, i) => (
                            <div key={i} className="flex items-center gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
                                <span className={`w-2 h-2 rounded-full ${t.category === 'Membership' ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                                <span className="text-slate-300 text-sm">{t.title}</span>
                                <span className="ml-auto text-[10px] uppercase text-slate-500">{t.category}</span>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
        )}
        {/* end */}

        {/* --- VIEW: CONTACT --- */}
        {activeTab === "Contact" && contactData && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-2xl">
                <h3 className="text-white font-bold text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <span className="text-slate-500 text-xs uppercase">Email</span>
                        <span className="text-white font-mono">{contactData.email}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-500 text-xs uppercase">WhatsApp</span>
                        <span className="text-green-400 font-mono">{contactData.whatsapp}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-500 text-xs uppercase">LinkedIn</span>
                        <a href={contactData.linkedin} target="_blank" className="text-blue-400 truncate">{contactData.linkedin}</a>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-500 text-xs uppercase">GitHub</span>
                        <a href={contactData.github} target="_blank" className="text-purple-400 truncate">{contactData.github}</a>
                    </div>
                    <div className="flex flex-col pt-4 border-t border-slate-800">
                        <span className="text-slate-500 text-xs uppercase">Intro Text</span>
                        <p className="text-slate-300 italic">"{contactData.description}"</p>
                    </div>
                </div>
            </div>
        )}
        {/* End... */}





        {/* --- EDIT MODAL --- */}
        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            title={`Edit ${activeTab}`}
        >
            {activeTab === "Hero" ? (
            // HERO FORM
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="label-text">Profile Image URL</label><input name="profileImage" value={heroForm.profileImage || ""} onChange={handleHeroChange} className="input-field" /></div>
                        <div><label className="label-text">Resume URL</label><input name="resumeUrl" value={heroForm.resumeUrl || ""} onChange={handleHeroChange} className="input-field" /></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="label-text">Name</label><input name="name" value={heroForm.name || ""} onChange={handleHeroChange} className="input-field" /></div>
                        <div><label className="label-text">Designation</label><input name="designation" value={heroForm.designation || ""} onChange={handleHeroChange} className="input-field" /></div>
                    </div>
                    <div><label className="label-text">Bio</label><textarea name="bio" value={heroForm.bio || ""} onChange={handleHeroChange} rows={3} className="input-field" /></div>
                    <div className="border-t border-slate-800 pt-4 mt-4">
                        <label className="label-text mb-2 block">Social Links</label>
                        <div className="grid grid-cols-1 gap-3">
                            <input name="socials.email" placeholder="Email" value={heroForm.socials?.email || ""} onChange={handleHeroChange} className="input-field" />
                            <input name="socials.github" placeholder="Github" value={heroForm.socials?.github || ""} onChange={handleHeroChange} className="input-field" />
                            <input name="socials.linkedin" placeholder="LinkedIn" value={heroForm.socials?.linkedin || ""} onChange={handleHeroChange} className="input-field" />
                        </div>
                    </div>
                </div>
            ) : activeTab === "About" ? (
            // ABOUT FORM
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="label-text">Bio Paragraphs</label>
                            <button onClick={() => addAboutItem('paragraphs')} type="button" className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"><Plus size={14}/> Add Paragraph</button>
                        </div>
                        <div className="space-y-3">
                            {aboutForm.paragraphs?.map((text, i) => (
                                <div key={i} className="flex gap-2">
                                    <textarea value={text} onChange={(e) => handleAboutArrayChange('paragraphs', i, e.target.value)} rows={3} className="input-field flex-1 text-sm"/>
                                    <button onClick={() => removeAboutItem('paragraphs', i)} className="text-red-500 hover:text-red-400 p-2"><Trash2 size={16}/></button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-6">
                        <div className="flex justify-between items-center mb-2">
                            <label className="label-text">Key Expertise List</label>
                            <button onClick={() => addAboutItem('expertise')} type="button" className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"><Plus size={14}/> Add Skill</button>
                        </div>
                        <div className="space-y-2">
                            {aboutForm.expertise?.map((text, i) => (
                                <div key={i} className="flex gap-2">
                                    <input value={text} onChange={(e) => handleAboutArrayChange('expertise', i, e.target.value)} className="input-field flex-1"/>
                                    <button onClick={() => removeAboutItem('expertise', i)} className="text-red-500 hover:text-red-400 p-2"><Trash2 size={16}/></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
            // EXPERIENCE FORM
                <div className="space-y-6">
                    <div>
                        <label className="label-text">Section Title</label>
                        <input value={experienceForm.sectionTitle || ""} onChange={(e) => handleExpTitleChange(e.target.value)} className="input-field" />
                    </div>
                    
                    <div className="space-y-4">
                         {experienceForm.jobs?.map((job, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl relative">
                                <button onClick={() => removeJob(i)} className="absolute top-2 right-2 text-red-500 hover:bg-slate-900 p-1 rounded"><Trash2 size={16}/></button>
                                
                                <div className="grid grid-cols-2 gap-3 mb-3">
                                    <div><label className="label-text">Role</label><input value={job.role} onChange={(e) => handleJobChange(i, 'role', e.target.value)} className="input-field" /></div>
                                    <div><label className="label-text">Company</label><input value={job.company} onChange={(e) => handleJobChange(i, 'company', e.target.value)} className="input-field" /></div>
                                </div>
                                <div className="mb-3"><label className="label-text">Duration</label><input value={job.duration} onChange={(e) => handleJobChange(i, 'duration', e.target.value)} className="input-field" /></div>
                                
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="label-text text-[10px]">Bullet Points</label>
                                        <button onClick={() => addJobDesc(i)} className="text-blue-400 text-[10px] flex items-center gap-1"><Plus size={12}/> Add Point</button>
                                    </div>
                                    <div className="space-y-2">
                                        {job.description.map((desc, j) => (
                                            <div key={j} className="flex gap-2">
                                                <input value={desc} onChange={(e) => handleJobDescChange(i, j, e.target.value)} className="input-field py-1 text-sm" />
                                                <button onClick={() => removeJobDesc(i, j)} className="text-slate-600 hover:text-red-500"><Trash2 size={14}/></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                         ))}
                         <button onClick={addJob} className="w-full py-3 border-2 border-dashed border-slate-800 text-slate-500 rounded-xl hover:bg-slate-900 hover:text-white transition-all flex justify-center items-center gap-2">
                            <Plus size={18} /> Add New Experience Position
                         </button>
                    </div>
                </div>
            )}

            {/* Projects FROM */}
            {activeTab === "Projects" ? (
                <div className="space-y-6">
                    <div>
                        <label className="label-text">Section Title</label>
                        <input value={projectsForm.sectionTitle || ""} onChange={(e) => handleProjTitleChange(e.target.value)} className="input-field" />
                    </div>
                    
                    <div className="space-y-6">
                         {projectsForm.items?.map((proj, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl relative">
                                <button onClick={() => removeProject(i)} className="absolute top-2 right-2 text-red-500 hover:bg-slate-900 p-1 rounded"><Trash2 size={16}/></button>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                    <div><label className="label-text">Project Title</label><input value={proj.title} onChange={(e) => handleProjectChange(i, 'title', e.target.value)} className="input-field" /></div>
                                    <div>
                                        <label className="label-text">Category</label>
                                        <select value={proj.category} onChange={(e) => handleProjectChange(i, 'category', e.target.value)} className="input-field cursor-pointer">
                                            <option value="Web Development">Web Development</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="label-text">Description</label>
                                    <textarea value={proj.description} onChange={(e) => handleProjectChange(i, 'description', e.target.value)} rows={2} className="input-field resize-none" />
                                </div>

                                <div className="mb-3">
                                    <label className="label-text">Image URL</label>
                                    <input value={proj.image} onChange={(e) => handleProjectChange(i, 'image', e.target.value)} placeholder="https://..." className="input-field" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-3">
                                    <div><label className="label-text">Live Link</label><input value={proj.links?.live} onChange={(e) => handleProjectChange(i, 'links.live', e.target.value)} className="input-field" /></div>
                                    <div><label className="label-text">GitHub Link</label><input value={proj.links?.github} onChange={(e) => handleProjectChange(i, 'links.github', e.target.value)} className="input-field" /></div>
                                </div>

                                <div>
                                    <label className="label-text">Tags (Comma Separated)</label>
                                    <input 
                                        value={proj.tags.join(", ")} 
                                        onChange={(e) => handleTagsChange(i, e.target.value)} 
                                        placeholder="React, Next.js, Photoshop"
                                        className="input-field" 
                                    />
                                </div>
                            </div>
                         ))}
                         <button onClick={addProject} className="w-full py-3 border-2 border-dashed border-slate-800 text-slate-500 rounded-xl hover:bg-slate-900 hover:text-white transition-all flex justify-center items-center gap-2">
                            <Plus size={18} /> Add New Project
                         </button>
                    </div>
                </div>
            ) : null}
            {/* proj end */}


            {/* Skills from */}
            {activeTab === "Skills" ? (
                <div className="space-y-6">
                    <div>
                        <label className="label-text">Section Title</label>
                        <input value={skillsForm.sectionTitle || ""} onChange={(e) => handleSkillTitleChange(e.target.value)} className="input-field" />
                    </div>

                    <div className="space-y-6">
                         {skillsForm.categories?.map((cat, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl relative">
                                <button onClick={() => removeCategory(i)} className="absolute top-2 right-2 text-red-500 hover:bg-slate-900 p-1 rounded"><Trash2 size={16}/></button>
                                
                                <div className="grid grid-cols-3 gap-3 mb-3">
                                    <div className="col-span-1"><label className="label-text">Code (e.g. GD)</label><input value={cat.code} onChange={(e) => handleCategoryChange(i, 'code', e.target.value)} className="input-field" /></div>
                                    <div className="col-span-2"><label className="label-text">Category Title</label><input value={cat.title} onChange={(e) => handleCategoryChange(i, 'title', e.target.value)} className="input-field" /></div>
                                </div>
                                
                                <div className="mb-3">
                                    <label className="label-text">Color Theme</label>
                                    <select value={cat.theme} onChange={(e) => handleCategoryChange(i, 'theme', e.target.value)} className="input-field cursor-pointer">
                                        <option value="purple">Purple (Design)</option>
                                        <option value="blue">Blue (Tech/Dev)</option>
                                        <option value="green">Green (IoT)</option>
                                        <option value="orange">Orange (Docs)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="label-text">Skills (Comma Separated)</label>
                                    <textarea 
                                        value={cat.skills.join(", ")} 
                                        onChange={(e) => handleCatSkillsChange(i, e.target.value)} 
                                        rows={2}
                                        className="input-field resize-none" 
                                    />
                                </div>
                            </div>
                         ))}
                         <button onClick={addCategory} className="w-full py-3 border-2 border-dashed border-slate-800 text-slate-500 rounded-xl hover:bg-slate-900 hover:text-white transition-all flex justify-center items-center gap-2">
                            <Plus size={18} /> Add New Category
                         </button>
                    </div>

                    <div className="border-t border-slate-800 pt-6">
                        <label className="label-text mb-2 block">Additional Skills (Comma Separated)</label>
                        <textarea 
                            value={skillsForm.additionalSkills?.join(", ") || ""} 
                            onChange={(e) => handleAdditionalSkillsChange(e.target.value)} 
                            rows={3}
                            className="input-field resize-none"
                        />
                    </div>
                </div>
            ) : null}


            {/* Education Modal */}
          {activeTab === "Education" ? (
                <div className="space-y-6">
                    {/* Degree Form */}
                        <div className="space-y-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                            <label className="label-text text-blue-400">Main Degree Details</label>
                            
                            <div className="grid grid-cols-2 gap-2">
                                <input value={eduForm.education?.degree||""} onChange={e=>handleDegreeChange('degree',e.target.value)} className="input-field" placeholder="Degree Title"/>
                                <input value={eduForm.education?.year||""} onChange={e=>handleDegreeChange('year',e.target.value)} className="input-field" placeholder="Year"/>
                            </div>
                            
                            <input value={eduForm.education?.institution||""} onChange={e=>handleDegreeChange('institution',e.target.value)} className="input-field" placeholder="Institution"/>
                            
                            {/* NEW SPECIALIZATION INPUT */}
                            <input value={eduForm.education?.specialization||""} onChange={e=>handleDegreeChange('specialization',e.target.value)} className="input-field" placeholder="Specialization (e.g. Web Development)"/>

                            {/* NEW FINAL YEAR PROJECT SECTION */}
                            <div className="pt-2 mt-2 border-t border-slate-800">
                                <label className="label-text text-xs text-slate-500 mb-1">Final Year Project</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <input 
                                        value={eduForm.education?.finalYearProject?.title||""} 
                                        onChange={e=>handleFinalProject('title',e.target.value)} 
                                        className="input-field" 
                                        placeholder="Project Title"
                                    />
                                    <input 
                                        value={eduForm.education?.finalYearProject?.link||""} 
                                        onChange={e=>handleFinalProject('link',e.target.value)} 
                                        className="input-field" 
                                        placeholder="Project Link (URL)"
                                    />
                                </div>
                            </div>

                            <input value={eduForm.education?.tags?.join(", ")||""} onChange={e=>handleDegreeTags(e.target.value)} className="input-field" placeholder="Tags (comma separated)"/>
                        </div>

                    {/* Certifications Form */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                             <label className="label-text">Certifications</label>
                             <button onClick={addCert} className="text-blue-400 text-xs flex items-center gap-1"><Plus size={14}/> Add Cert</button>
                        </div>
                        <div className="space-y-3">
                            {eduForm.certifications?.map((c, i) => (
                                <div key={i} className="flex gap-2 items-start">
                                    <div className="grid grid-cols-3 gap-2 flex-1">
                                        <input value={c.title} onChange={(e) => handleCertChange(i, 'title', e.target.value)} className="input-field text-xs" placeholder="Title" />
                                        <input value={c.issuer} onChange={(e) => handleCertChange(i, 'issuer', e.target.value)} className="input-field text-xs" placeholder="Issuer" />
                                        <input value={c.year} onChange={(e) => handleCertChange(i, 'year', e.target.value)} className="input-field text-xs" placeholder="Year" />
                                    </div>
                                    <button onClick={() => removeCert(i)} className="p-2 text-red-500"><Trash2 size={16}/></button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trainings Form */}
                    <div className="border-t border-slate-800 pt-4">
                        <div className="flex justify-between items-center mb-2">
                             <label className="label-text">Trainings & Memberships</label>
                             <button onClick={addTraining} className="text-blue-400 text-xs flex items-center gap-1"><Plus size={14}/> Add Item</button>
                        </div>
                        <div className="space-y-2">
                            {eduForm.trainings?.map((t, i) => (
                                <div key={i} className="flex gap-2">
                                    <select value={t.category} onChange={(e) => handleTrainingChange(i, 'category', e.target.value)} className="bg-slate-950 border border-slate-800 rounded px-2 text-xs text-slate-400">
                                        <option value="Training">Training</option>
                                        <option value="Membership">Membership</option>
                                        <option value="Volunteer">Volunteer</option>
                                    </select>
                                    <input value={t.title} onChange={(e) => handleTrainingChange(i, 'title', e.target.value)} className="input-field flex-1 text-xs" />
                                    <button onClick={() => removeTraining(i)} className="text-red-500"><Trash2 size={16}/></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
            {/* End education */}


            {/* Contact Form */}
            {activeTab === "Contact" ? (
                <div className="space-y-4">
                    <div><label className="label-text">Email Address</label><input name="email" value={contactForm.email || ""} onChange={handleContactChange} className="input-field" /></div>
                    <div>
                        <label className="label-text">WhatsApp Number</label>
                        <input name="whatsapp" value={contactForm.whatsapp || ""} onChange={handleContactChange} className="input-field" placeholder="e.g. 923001234567" />
                        <p className="text-[10px] text-slate-500 mt-1">Format: Country code + Number (no plus sign, no spaces). Ex: 923075993029</p>
                    </div>
                    <div><label className="label-text">LinkedIn URL</label><input name="linkedin" value={contactForm.linkedin || ""} onChange={handleContactChange} className="input-field" /></div>
                    <div><label className="label-text">GitHub URL</label><input name="github" value={contactForm.github || ""} onChange={handleContactChange} className="input-field" /></div>
                    <div><label className="label-text">Description Text</label><textarea name="description" value={contactForm.description || ""} onChange={handleContactChange} rows={3} className="input-field" /></div>
                </div>
            ) : null}








            <div className="pt-6 flex justify-end gap-3 border-t border-slate-800 mt-6">
                <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-400 hover:text-white">Cancel</button>
                <button onClick={handleSave} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg">Save Changes</button>
            </div>
        </Modal>

      </DashboardLayout>
    </>
  );
}

export default App;