/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { 
  User, Code, Briefcase, LogOut, Layers, Info, 
  GraduationCap, Mail, Menu, X 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  text: string;
  active: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon: Icon, text, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={`relative flex items-center w-full px-4 py-3 my-1 font-medium transition-all duration-200 rounded-xl group ${
      active
        ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/20"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
    }`}
  >
    <Icon size={20} className={`mr-3 ${active ? "animate-pulse" : ""}`} />
    <span>{text}</span>
    {active && (
      <motion.div
        layoutId="active-pill"
        className="absolute right-0 w-1 h-6 bg-white rounded-l-full"
      />
    )}
  </button>
);

// Updated Props Interface to accept control from Parent
interface LayoutProps {
    children: React.ReactNode;
    activeTab: string;
    onTabChange: (tab: string) => void;
    onLogout?: () => void;
}

// export default function DashboardLayout({ children, activeTab, onTabChange }: LayoutProps) {
export default function DashboardLayout({ children, activeTab, onTabChange, onLogout }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  // Helper to handle navigation click (closes sidebar on mobile)
  const handleNavClick = (tab: string) => {
    onTabChange(tab);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden font-sans">
      
      {/* --- MOBILE BACKDROP --- */}
      {/* Clicking outside the sidebar closes it */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* --- SIDEBAR --- */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/95 lg:bg-slate-900/50 
          backdrop-blur-xl border-r border-slate-800 flex flex-col 
          transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white">
                    A
                </div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Admin OS
                </h1>
            </div>
            {/* Close button for mobile */}
            <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="lg:hidden text-slate-400 hover:text-white"
            >
                <X size={24} />
            </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Content</p>
          
          <SidebarItem icon={User} text="Hero" active={activeTab === "Hero"} onClick={() => handleNavClick("Hero")} />
          <SidebarItem icon={Info} text="About" active={activeTab === "About"} onClick={() => handleNavClick("About")} />
          <SidebarItem icon={Code} text="Skills" active={activeTab === "Skills"} onClick={() => handleNavClick("Skills")} />
          <SidebarItem icon={Layers} text="Projects" active={activeTab === "Projects"} onClick={() => handleNavClick("Projects")} />
          <SidebarItem icon={Briefcase} text="Experience" active={activeTab === "Experience"} onClick={() => handleNavClick("Experience")} />
          <SidebarItem icon={GraduationCap} text="Education" active={activeTab === "Education"} onClick={() => handleNavClick("Education")} />
          <SidebarItem icon={Mail} text="Contact" active={activeTab === "Contact"} onClick={() => handleNavClick("Contact")} />
        </nav>

        <div className="p-4 border-t border-slate-800">
        <SidebarItem 
            icon={LogOut} 
            text="Logout" 
            active={false} 
            onClick={() => {
                if(confirm("Are you sure you want to logout?")) {
                    onLogout && onLogout();
                }
            }} 
        />
    </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 overflow-y-auto relative flex flex-col w-full">
         
         {/* Top Glass Bar */}
        <header className="sticky top-0 z-30 w-full px-4 md:px-8 py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-4">
                {/* Hamburger Menu Button (Mobile Only) */}
                <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="lg:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-xl md:text-2xl font-bold text-white truncate">{activeTab} Manager</h2>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs md:text-sm text-slate-400 hidden md:inline">Database: <span className="text-green-400">Connected</span></span>
            </div>
        </header>
        
        <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
            {children}
        </div>
      </main>
    </div>
  );
}