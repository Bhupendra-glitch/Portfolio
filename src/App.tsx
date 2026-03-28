/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  BrainCircuit, 
  LineChart, 
  Cloud, 
  Terminal,
  ChevronRight,
  Download,
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  Globe,
  GitBranch,
  Binary
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  bg: '#E4E3E0',
  ink: '#141414',
  accent: '#F27D26',
  line: '#141414',
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 border-b border-black pb-4">
    <h2 className="font-serif italic text-4xl text-black">{title}</h2>
    {subtitle && <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-2">{subtitle}</p>}
  </div>
);

const ProjectCard: React.FC<{ project: { title: string; date: string; description: string; tags: string[]; link: string } }> = ({ project }) => (
  <motion.div 
    whileHover={{ backgroundColor: COLORS.ink, color: COLORS.bg }}
    className="group border border-black p-6 transition-colors duration-300 flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="font-mono text-xs opacity-60">{project.date}</span>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={16} />
      </a>
    </div>
    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{project.title}</h3>
    <p className="text-sm mb-6 opacity-80 flex-grow">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag: string) => (
        <span key={tag} className="font-mono text-[10px] border border-current px-2 py-0.5 uppercase">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillCategory: React.FC<{ title: string; skills: string[]; icon: React.ElementType }> = ({ title, skills, icon: Icon }) => (
  <div className="border border-black p-6">
    <div className="flex items-center gap-3 mb-4">
      <Icon size={20} />
      <h3 className="font-bold uppercase tracking-widest text-sm">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="font-mono text-xs bg-black/5 px-2 py-1">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "IPL Analysis",
      date: "Sep 2025 - Jan 2026",
      description: "Analyzed 200K+ IPL ball-by-ball records using Python to uncover team and player performance trends. Created 25+ visualizations.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "Customer Segmentation",
      date: "Jan 2026 - Feb 2026",
      description: "Applied SMOTE for class imbalance, achieving F1-score of 0.60–0.70 for churn prediction. Compared XGBoost, LightGBM, and Stacking models.",
      tags: ["Machine Learning", "XGBoost", "LightGBM", "Scikit-learn"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "Demand Forecasting",
      date: "Nov 2025 - Jan 2026",
      description: "Analyzed 30,000+ Walmart product time series across 3 states using Python for hierarchical sales forecasting.",
      tags: ["Time Series", "ARIMA", "Holt's Linear Trend", "Python"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "Experimentation Uplift Modeling",
      date: "Feb 2026",
      description: "Focuses on EDA and Uplift Modeling to predict customer response to marketing campaigns.",
      tags: ["EDA", "Uplift Modeling", "Marketing Analytics", "Python"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "NLP Insights from Unstructured Data",
      date: "Mar 2026",
      description: "Performs Sentiment Analysis on unstructured text data using multiple NLP techniques.",
      tags: ["NLP", "Sentiment Analysis", "Text Mining", "Python"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "CampusElite",
      date: "Ongoing",
      description: "AI-powered campus ecosystem for exam prep, coding practice, peer learning, and placement readiness.",
      tags: ["AI", "EdTech", "Full Stack", "Community"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "MentalInsightAI",
      date: "Ongoing",
      description: "Analyzes behavioral data to provide personalized recommendations and predictive insights for mental and emotional well-being.",
      tags: ["AI", "HealthTech", "Machine Learning", "Predictive Analytics"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "AceMind",
      date: "Ongoing",
      description: "Intelligent poker-playing bot designed to analyze game states, evaluate hand strength, and model opponent behavior.",
      tags: ["AI", "Game Theory", "Bot", "Strategy"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "Alumni Connect",
      date: "Ongoing",
      description: "Platform designed to bridge the gap between students and alumni through networking, mentorship, and career guidance.",
      tags: ["Networking", "Mentorship", "Community", "Web App"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "Twitter Sentiment Analysis",
      date: "Mar 2026",
      description: "Predicting the sentiment of text whether it is positive or negative using machine learning and text extraction.",
      tags: ["NLP", "Twitter API", "Machine Learning", "Sentiment Analysis"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "Iris Flower Classification",
      date: "Jan 2026",
      description: "Classifies Iris flowers into three species—Setosa, Versicolor, and Virginica—using machine learning algorithms.",
      tags: ["Machine Learning", "Classification", "Scikit-learn", "Data Science"],
      link: "https://github.com/Bhupendra-glitch"
    }
  ];

  const skillGroups = [
    { title: "Programming Languages", icon: Code2, skills: ["Python", "C", "C++", "R"] },
    { title: "Backend & Databases", icon: Database, skills: ["FastAPI", "REST APIs", "MySQL"] },
    { title: "Data Analysis & Viz", icon: LineChart, skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "MS Excel", "Power BI", "Google Analytics"] },
    { title: "Web Technologies", icon: Globe, skills: ["HTML", "CSS", "JavaScript", "MERN Stack"] },
    { title: "Machine Learning & AI", icon: BrainCircuit, skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV"] },
    { title: "Cloud & DevOps", icon: GitBranch, skills: ["Git", "GitHub", "GCP", "Streamlit"] },
    { title: "Deep Learning & NLP", icon: Cpu, skills: ["ANN", "CNN", "RNN", "NLP", "Generative AI"] },
    { title: "Tools & IDEs", icon: Terminal, skills: ["Jupyter Notebook", "Google Colab", "VS Code"] },
    { title: "CS Fundamentals", icon: Binary, skills: ["Data Structures & Algorithms", "OOPs"] }
  ];

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-black bg-[#E4E3E0]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" 
              alt="IIT Madras Logo" 
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
            <div className="font-mono font-bold text-lg tracking-tighter">
              BKS<span className="opacity-40">.DS</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#about" className="hover:line-through">About</a>
            <a href="#skills" className="hover:line-through">Skills</a>
            <a href="#projects" className="hover:line-through">Projects</a>
            <a href="#contact" className="hover:line-through">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Bhupendra-glitch" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/bhupendra-sahu-4aa30430b" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs uppercase tracking-[0.3em] mb-4 opacity-60"
            >
              Aspiring Data Scientist
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
            >
              BHUPENDRA <br /> KUMAR SAHU
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-md opacity-80 leading-relaxed"
            >
              Skilled in Machine Learning, Deep Learning, and Generative AI. 
              Currently pursuing Data Science at IIT Madras.
            </motion.p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-left lg:text-right opacity-40">
              Based in India <br />
              IIT Madras 2025-2029 <br />
              SSTC 2024-2028
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-[#E4E3E0] px-8 py-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest hover:bg-[#F27D26] transition-colors"
            >
              Download Resume <Download size={16} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        
        {/* About / Experience Section */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <SectionHeader title="Experience" subtitle="Professional Journey" />
          </div>
          <div className="md:col-span-2 space-y-12">
            <div className="border-l-2 border-black pl-8 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black rounded-full" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold uppercase">GirlScript Summer of Code</h3>
                <span className="font-mono text-xs opacity-60">June 2025 – Nov 2025</span>
              </div>
              <p className="font-mono text-sm mb-4 opacity-60 uppercase tracking-widest">Remote Contributor</p>
              <ul className="space-y-3 opacity-80 text-sm list-disc list-inside">
                <li>Contributed to open-source projects by fixing bugs and implementing new features using Git and GitHub.</li>
                <li>Collaborated with developers across teams, improving code quality and project functionality.</li>
                <li>Worked with version control systems, pull requests, and issue tracking in a real-world development environment.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <SectionHeader title="Education" subtitle="Academic Background" />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-black p-6 flex flex-col justify-between">
              <div>
                <GraduationCap className="mb-4" size={24} />
                <h3 className="text-lg font-bold uppercase mb-1">BS in Data Science</h3>
                <p className="text-sm opacity-70 mb-4">Indian Institute of Technology Madras</p>
              </div>
              <span className="font-mono text-xs opacity-60">2025 - 2029</span>
            </div>
            <div className="border border-black p-6 flex flex-col justify-between">
              <div>
                <GraduationCap className="mb-4" size={24} />
                <h3 className="text-lg font-bold uppercase mb-1">B.Tech in CS</h3>
                <p className="text-sm opacity-70 mb-4">Shri Shankaracharya Technical Campus</p>
              </div>
              <span className="font-mono text-xs opacity-60">2024 - 2028</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeader title="Tools & Skills" subtitle="Technical Stack" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <SkillCategory 
                key={idx} 
                title={group.title} 
                skills={group.skills} 
                icon={group.icon} 
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeader title="Projects" subtitle="Selected Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard 
                key={idx} 
                project={project} 
              />
            ))}
          </div>
        </section>

        {/* Coursework & Achievements */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Coursework" subtitle="Core Subjects" />
            <div className="space-y-4">
              {[
                "Machine Learning & Deep Learning",
                "Natural Language Processing",
                "Generative AI",
                "Linear Algebra & Optimization",
                "Probability & Statistics",
                "Data Structures & Algorithms"
              ].map(course => (
                <div key={course} className="flex items-center gap-3 border-b border-black/10 py-2">
                  <ChevronRight size={14} />
                  <span className="text-sm font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Certificates" subtitle="Recognition" />
            <div className="space-y-6">
              {[
                { title: "Applied Machine Learning using Python", provider: "Certification" },
                { title: "Applied Deep Learning using Python", provider: "Certification" },
                { title: "Deep Learning Techniques and Application", provider: "Certification" },
                { title: "Google Cloud Computing & Generative AI", provider: "Specialization" },
                { title: "Deep Learning and Neural Network", provider: "International Conference (IIT Ropar)" }
              ].map((cert, idx) => (
                <div key={idx} className="flex gap-4">
                  <Award className="shrink-0 opacity-40" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase leading-tight">{cert.title}</h4>
                    <p className="text-[10px] font-mono opacity-60 uppercase tracking-widest mt-1">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-black pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">Let's build <br /> something <br /> intelligent.</h2>
              <p className="opacity-60 max-w-sm mb-8">
                Open for collaborations in Data Science, Machine Learning, and AI research.
              </p>
              <div className="flex gap-6">
                <a href="mailto:25f1000135@ds.study.iitm.ac.in" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-[#F27D26] transition-colors">
                  <Mail size={16} /> Email
                </a>
                <a href="https://www.linkedin.com/in/bhupendra-sahu-4aa30430b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-[#F27D26] transition-colors">
                  <Linkedin size={16} /> Linkedin
                </a>
                <a href="https://github.com/Bhupendra-glitch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-[#F27D26] transition-colors">
                  <Github size={16} /> Github
                </a>
              </div>
            </div>
            <div className="bg-black text-[#E4E3E0] p-12 flex flex-col justify-center items-center text-center">
              <Terminal className="mb-6 opacity-40" size={48} />
              <p className="font-mono text-sm mb-8 opacity-60">
                "Data is the new oil, but AI is the refinery."
              </p>
              <div className="text-[10px] font-mono opacity-30 uppercase tracking-[0.5em]">
                Bhupendra Kumar Sahu &copy; 2026
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Micro-details */}
      <footer className="px-6 py-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
          <div>Built with React & Tailwind</div>
          <div>IIT Madras | SSTC</div>
          <div>Last Updated: March 2026</div>
        </div>
      </footer>
    </div>
  );
}
