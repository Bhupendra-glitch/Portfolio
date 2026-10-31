/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  Award,
  Cpu,
  Globe,
  GitBranch,
  Binary,
  Trophy,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  bg: '#E4E3E0',
  ink: '#141414',
  accent: '#F27D26',
  line: '#141414',
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 border-b border-black pb-4 print:hidden">
    <h2 className="font-serif italic text-4xl text-black">{title}</h2>
    {subtitle && <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-2">{subtitle}</p>}
  </div>
);

interface ProjectItem {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  bulletPoints?: string[];
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <motion.div 
    whileHover={{ backgroundColor: COLORS.ink, color: COLORS.bg }}
    className="group border border-black p-6 transition-colors duration-300 flex flex-col h-full bg-white/40 backdrop-blur-sm"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <span className="font-mono text-xs opacity-60 group-hover:text-white/60 block">{project.date}</span>
        {project.subtitle && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#F27D26]">{project.subtitle}</span>
        )}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="opacity-60 group-hover:opacity-100 group-hover:text-white transition-all hover:scale-110">
        <ExternalLink size={16} />
      </a>
    </div>
    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{project.title}</h3>
    <p className="text-sm mb-4 opacity-85 flex-grow group-hover:text-white/90">{project.description}</p>
    
    {project.bulletPoints && project.bulletPoints.length > 0 && (
      <ul className="text-xs space-y-1 mb-6 opacity-75 list-disc list-inside group-hover:text-white/80 hidden group-hover:block transition-all duration-300">
        {project.bulletPoints.map((point, index) => (
          <li key={index} className="line-clamp-2">{point}</li>
        ))}
      </ul>
    )}
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map((tag: string) => (
        <span key={tag} className="font-mono text-[10px] border border-current px-2 py-0.5 uppercase tracking-wider">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillCategory: React.FC<{ title: string; skills: string[]; icon: React.ElementType }> = ({ title, skills, icon: Icon }) => (
  <div className="border border-black p-6 bg-white/20 backdrop-blur-sm">
    <div className="flex items-center gap-3 mb-4">
      <Icon size={20} className="text-[#F27D26]" />
      <h3 className="font-bold uppercase tracking-widest text-sm">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="font-mono text-xs bg-black/5 hover:bg-black/10 border border-black/10 px-2 py-1 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  const [projectTab, setProjectTab] = useState<'featured' | 'all'>('featured');
  const [showPrintModal, setShowPrintModal] = useState(false);

  // Core resume projects from updated resume
  const featuredProjects: ProjectItem[] = [
    {
      title: "IPLAnalysis",
      subtitle: "Independent Development",
      date: "Nov 2025 – Apr 2026",
      description: "Built an interactive IPL Analytics Dashboard using Python, Streamlit, Pandas, and Plotly, processing 1,000+ matches and 200,000+ deliveries.",
      bulletPoints: [
        "Built an interactive IPL Analytics Dashboard using Python, Streamlit, Pandas, and Plotly, processing 1,000+ matches and 200,000+ deliveries.",
        "Developed 2 ML models for match-winner prediction and live-score forecasting, achieving 85%+ accuracy and reducing manual analysis time by 60%.",
        "Implemented 10+ interactive visualizations, player insights, Fantasy Team Generator, real-time predictions."
      ],
      tags: ["Python", "Streamlit", "Pandas", "Plotly", "Machine Learning", "EDA"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "CrediMerge",
      subtitle: "Independent Project",
      date: "Jan 2026 – Apr 2026",
      description: "CrediMerge is an AI-powered financial analytics platform designed to help users manage loans and understand their credit health.",
      bulletPoints: [
        "Provides loan consolidation analysis, cash-flow insights, financial risk simulation, and alternative credit health assessment to support smarter financial decisions.",
        "Built using modern full-stack technologies, CrediMerge aims to make financial insights more accessible, transparent, and data-driven."
      ],
      tags: ["Full Stack", "AI / ML", "Financial Analytics", "Risk Simulation", "Credit Health"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "PredictDemand",
      subtitle: "Independent Project",
      date: "Nov 2025 – Jan 2026",
      description: "Developed an AI-powered Demand Forecasting Web Application using Streamlit, processing 10K+ sales records with ARIMA and Exponential Smoothing models.",
      bulletPoints: [
        "Developed an AI-powered Demand Forecasting Web Application using Streamlit, processing 10K+ sales records with ARIMA and Exponential Smoothing models.",
        "Built 8+ interactive dashboard modules for EDA, forecasting, product analysis, and business intelligence.",
        "Automated demand recommendations and reporting, improving restocking efficiency by 30%+ and reducing manual reporting effort by 70%."
      ],
      tags: ["Python", "Streamlit", "ARIMA", "Exponential Smoothing", "EDA", "BI"],
      link: "https://github.com/Bhupendra-glitch"
    }
  ];

  // Combined additional/earlier projects
  const allProjects: ProjectItem[] = [
    ...featuredProjects,
    {
      title: "GigCred",
      subtitle: "HackBios Hackathon Finalist",
      date: "2025",
      description: "AI-powered financial intelligence and credit-health platform for gig workers, freelancers, micro-merchants, and new-to-credit users.",
      bulletPoints: [
        "Provides explainable financial health scoring, cash-flow forecasting, risk insights, and personalized credit guidance."
      ],
      tags: ["FinTech", "Explainable AI", "Cash-Flow Forecasting", "Credit Scoring"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "ChurnPredictAI Dashboard",
      date: "Jan 2026 – Apr 2026",
      description: "End-to-end customer segmentation and retention analytics platform analyzing over 7,000 customer records.",
      bulletPoints: [
        "Constructed predictive classification models reaching an overall accuracy of 85%+",
        "Implemented K-Means clustering to extract 3 distinct strategic customer segments.",
        "Created real-time actionable recommendations reducing manual analysis cycle times by 60%."
      ],
      tags: ["Python", "XGBoost", "LightGBM", "Scikit-Learn", "Streamlit", "Clustering"],
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
    { title: "Languages & Tools", icon: Code2, skills: ["Python", "C++", "Java"] },
    { title: "Backend & Databases", icon: Database, skills: ["FastAPI", "Node.js", "Express.js", "MySQL", "MongoDB", "Redis", "Kafka"] },
    { title: "AI / ML", icon: BrainCircuit, skills: ["Scikit-learn", "TensorFlow", "Keras", "NLP", "Generative AI", "OpenCV"] },
    { title: "Data", icon: LineChart, skills: ["NumPy", "Pandas", "Matplotlib", "Power BI"] },
    { title: "Cloud & DevOps", icon: Cloud, skills: ["GCP", "Docker", "Kubernetes", "Git", "GitHub"] },
    { title: "Core", icon: Binary, skills: ["DSA", "OOP", "REST APIs", "MERN Stack"] }
  ];

  const scholasticAchievements = [
    {
      title: "Top 10 Finalist — RaSoR (Ramanujan Society of Research-IIT Madras)",
      description: "Selected among Top 10 out of 420+ participants for the TinyML: Bringing Neural Networks to Microcontrollers research."
    },
    {
      title: "Certificate of Presentation — IASCSI Conference, IIT Ropar",
      description: "Presented research at the Integrated Approaches for Sustainable Crop Science Innovation Conference."
    },
    {
      title: "Tier-1 Achiever — Google Cloud GenAI Study Jams 2024",
      description: "Ranked among the Top 80 participants to achieve Tier 1 in the GenAI Study Jams program conducted by GDG On Campus, SSTC, with 80+ participants completing the Tier-1 journey."
    },
    {
      title: "Google Solution Challenge 2025 — Participant",
      description: "Participated in the Google Developer Groups Solution Challenge, building a technology-driven solution for a real-world problem."
    },
    {
      title: "Finalist — HackBios Hackathon",
      description: "Selected as a finalist for developing GigCred, an AI-powered financial intelligence and credit-health platform for gig workers, freelancers, micro-merchants, and new-to-credit users, providing explainable financial health scoring, cash-flow forecasting, risk insights, and personalized credit guidance."
    }
  ];

  const experiences = [
    {
      role: "Summer Research Intern",
      type: "Internship",
      company: "Vicharanashala Lab for Education Design – IIT Ropar",
      focus: "Open-Source Research & AI-Driven Educational Technology",
      date: "May 2026 – Jun 2026",
      bullets: [
        "Worked on real-world open-source research and development projects under the mentorship of the VLED Lab team at IIT Ropar.",
        "Collaborated remotely on educational technology and AI-driven initiatives.",
        "Contributed to project research, documentation, testing, and development tasks and explored and worked with open-source repositories, tools, and research materials."
      ],
      skills: ["Open-Source R&D", "Educational Technology", "AI Initiatives", "Python"]
    },
    {
      role: "Data Analytics Project Trainee",
      type: "Trainee",
      company: "Consulting & Analytics Club, IIT Guwahati",
      focus: "Customer Retention Analytics Solution",
      date: "Apr 2026 – May 2026",
      bullets: [
        "Developed an end-to-end Customer Retention Analytics Solution using Python, SQL, and Power BI.",
        "Performed customer segmentation, cohort analysis, and SQL-driven analysis to identify churn-risk patterns and repeat-purchase trends.",
        "Built an interactive executive dashboard and proposed data-backed strategies to improve retention and revenue decisions."
      ],
      skills: ["Python", "SQL", "Power BI", "Cohort Analysis", "Segmentation"]
    },
    {
      role: "Volunteer",
      type: "Community",
      company: "Google Developer Group – SSTC",
      focus: "Cloud Computing & AI Community Initiatives",
      date: "Nov 2025 – Jan 2026",
      bullets: [
        "Assisted in organizing cloud computing and AI workshops for students.",
        "Supported participants through hands-on labs and technical learning sessions.",
        "Promoted technology community growth through collaborative initiatives."
      ],
      skills: ["Google Cloud", "Vertex AI", "Gemini", "Streamlit"]
    },
    {
      role: "Open-Source Contributor",
      type: "Open Source",
      company: "GirlScript Summer of Code",
      focus: "Open-Source Software Development",
      date: "Jun 2025 – Nov 2025",
      bullets: [
        "Contributed to open-source projects by fixing bugs and implementing new features using Git and GitHub.",
        "Collaborated with developers to improve code quality and project functionality.",
        "Managed pull requests and issues using version control workflows."
      ],
      skills: ["Git", "GitHub", "Open Source", "Version Control"]
    }
  ];

  const positionsOfResponsibility = [
    {
      role: "Student Coordinator",
      org: "GDG SSTC / Technical Community",
      date: "2025 – Present",
      bullets: [
        "Organized institute-level technical workshops and events engaging 500+ students.",
        "Coordinated technical sessions, registrations, and student participation.",
        "Supported students during AI, Cloud, and Generative AI hands-on workshops.",
        "Contributed to technical community growth through collaborative initiatives."
      ]
    },
    {
      role: "Open Source Contributor",
      org: "GirlScript Summer of Code",
      date: "Aug 2025 – Dec 2025",
      bullets: [
        "Contributed to open-source projects by implementing features and resolving issues.",
        "Collaborated with developers through GitHub, pull requests, and code reviews.",
        "Improved project functionality and code quality through collaborative development."
      ]
    }
  ];

  const relevantCourses = [
    { name: "Applied Machine Learning using Python", ongoing: false },
    { name: "Deep Learning Techniques and Applications", ongoing: false },
    { name: "Applied Deep Learning using Python", ongoing: false },
    { name: "Natural Language Processing", ongoing: false },
    { name: "Google Cloud Computing & Generative AI", ongoing: false },
    { name: "RAG", ongoing: true },
    { name: "LangChain + LangGraph + LLaMA", ongoing: true },
    { name: "Statsmodels", ongoing: true },
    { name: "Computer Vision", ongoing: false },
    { name: "Computer Networks", ongoing: false }
  ];

  const handleDownloadPdf = () => {
    setShowPrintModal(true);
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0] relative">
      {/* Dynamic Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-black bg-[#E4E3E0]/90 backdrop-blur-md print:hidden">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" 
              alt="IIT Madras Logo" 
              className="h-8 w-auto hover:rotate-12 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="font-mono font-bold text-lg tracking-tighter">
              BKS<span className="opacity-40">.DS</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#about" className="hover:text-[#F27D26] hover:underline decoration-2 underline-offset-4 transition-all">About</a>
            <a href="#achievements" className="hover:text-[#F27D26] hover:underline decoration-2 underline-offset-4 transition-all">Achievements</a>
            <a href="#experience" className="hover:text-[#F27D26] hover:underline decoration-2 underline-offset-4 transition-all">Experience</a>
            <a href="#skills" className="hover:text-[#F27D26] hover:underline decoration-2 underline-offset-4 transition-all">Skills</a>
            <a href="#projects" className="hover:text-[#F27D26] hover:underline decoration-2 underline-offset-4 transition-all">Projects</a>
            <a href="#contact" className="hover:text-[#F27D26] hover:underline decoration-2 underline-offset-4 transition-all">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Bhupendra-glitch" target="_blank" rel="noopener noreferrer" className="hover:text-[#F27D26] transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/bhupendra-sahu-4aa30430b" target="_blank" rel="noopener noreferrer" className="hover:text-[#F27D26] transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Screen Presentation (Hidden during printing) */}
      <div className="print:hidden">
        {/* Hero Section */}
        <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs uppercase tracking-[0.25em] mb-4 text-[#F27D26] font-semibold"
              >
                Computer Science &amp; Engineering | Data Science
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
                className="text-lg max-w-lg opacity-85 leading-relaxed"
              >
                Specializing in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Generative AI</strong>. 
                Proven track record in open-source R&amp;D and end-to-end data products with modern Python, Full-Stack &amp; Google Cloud stacks.
              </motion.p>
            </div>
            
            {/* Quick Stats & Print Command */}
            <div className="flex flex-col items-start lg:items-end gap-6">
              <div className="font-mono text-xs text-left lg:text-right opacity-60 space-y-1">
                <div className="flex items-center gap-1 lg:justify-end"><Mail size={12} /> bhupendrasahu132004@gmail.com</div>
              </div>
              <motion.button 
                onClick={handleDownloadPdf}
                whileHover={{ scale: 1.05, backgroundColor: COLORS.accent }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-[#E4E3E0] px-8 py-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl"
              >
                Download Resume <Download size={16} />
              </motion.button>
            </div>
          </div>
        </header>

        {/* Main Sections */}
        <main className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
          
          {/* Educations Section */}
          <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            <div className="md:col-span-1">
              <SectionHeader title="Education" subtitle="Academic Background" />
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-black p-6 flex flex-col justify-between bg-white/20 backdrop-blur-sm shadow-sm">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <GraduationCap className="text-[#F27D26]" size={24} />
                    <span className="font-mono text-xs font-bold bg-black text-[#E4E3E0] px-2.5 py-1">CPI: 7.25</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase mb-1">B.S. in Data Science</h3>
                  <p className="text-sm opacity-70 mb-4">Indian Institute of Technology Madras</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-mono text-xs opacity-60">2025 – Present</span>
                  <span className="font-mono text-[10px] border border-black/30 px-2 py-0.5 rounded-full">Pursuing</span>
                </div>
              </div>
              
              <div className="border border-black p-6 flex flex-col justify-between bg-white/20 backdrop-blur-sm shadow-sm">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <GraduationCap className="text-[#F27D26]" size={24} />
                    <span className="font-mono text-xs font-bold bg-black text-[#E4E3E0] px-2.5 py-1">CPI: 7.5</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase mb-1">B.Tech in CSE</h3>
                  <p className="text-sm opacity-70 mb-4">Shri Shankaracharya Technical Campus</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-mono text-xs opacity-60">2024 – Present</span>
                  <span className="font-mono text-[10px] border border-black/30 px-2 py-0.5 rounded-full">Pursuing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Scholastic Achievements Section */}
          <section id="achievements" className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <SectionHeader title="Scholastic Achievements" subtitle="Honors & Recognition" />
            </div>
            <div className="md:col-span-2 space-y-4">
              {scholasticAchievements.map((item, idx) => (
                <div 
                  key={idx} 
                  className="border border-black p-6 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex gap-4 items-start"
                >
                  <Trophy className="shrink-0 text-[#F27D26] mt-0.5" size={20} />
                  <div>
                    <h3 className="font-bold text-base uppercase tracking-tight mb-1">{item.title}</h3>
                    <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experiences Section */}
          <section id="experience" className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <SectionHeader title="Experience" subtitle="Professional Timeline" />
            </div>
            <div className="md:col-span-2 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-black pl-8 relative">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#F27D26] border-2 border-black rounded-full" />
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <h3 className="text-xl font-bold uppercase leading-tight">{exp.role} <span className="text-xs font-mono font-normal tracking-wide lowercase border border-black/20 px-2 py-0.5 rounded bg-black/5">({exp.type})</span></h3>
                    <span className="font-mono text-xs opacity-65 bg-[#141414]/10 px-2 py-1">{exp.date}</span>
                  </div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#F27D26] mb-1">{exp.company}</p>
                  <p className="font-mono text-[11px] opacity-60 mb-4">{exp.focus}</p>
                  
                  <ul className="space-y-2 opacity-80 text-sm list-disc list-inside mb-4 leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-mono opacity-50 mr-2 uppercase tracking-widest text-[10px]">Tech:</span>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="font-mono text-[10px] bg-black/5 border border-black/15 px-2 py-0.5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <SectionHeader title="Technical Skills" subtitle="Comprehensive Capabilities" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, idx) => (
                <SkillCategory key={idx} {...group} />
              ))}
            </div>
          </section>

          {/* Projects Section with Tab Controls */}
          <section id="projects">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-black pb-4 gap-4">
              <div>
                <h2 className="font-serif italic text-4xl text-black">Projects</h2>
                <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-2">Selected Works &amp; Pipelines</p>
              </div>
              
              <div className="flex border border-black bg-white/20 p-1">
                <button 
                  onClick={() => setProjectTab('featured')}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${projectTab === 'featured' ? 'bg-black text-white' : 'hover:bg-black/10'}`}
                >
                  Resume Highlight
                </button>
                <button 
                  onClick={() => setProjectTab('all')}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${projectTab === 'all' ? 'bg-black text-white' : 'hover:bg-black/10'}`}
                >
                  All Projects ({allProjects.length})
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectTab === 'featured' ? (
                featuredProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))
              ) : (
                allProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))
              )}
            </div>
          </section>

          {/* Positions of Responsibility & Relevant Courses */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Positions of Responsibility" subtitle="Leadership & Community" />
              <div className="space-y-6">
                {positionsOfResponsibility.map((pos, idx) => (
                  <div key={idx} className="border border-black p-6 bg-white/20 backdrop-blur-sm">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-[#F27D26] shrink-0" />
                        <h4 className="font-bold text-base uppercase leading-tight">{pos.role}</h4>
                      </div>
                      <span className="font-mono text-xs opacity-60">{pos.date}</span>
                    </div>
                    <p className="text-[11px] font-mono text-[#F27D26] uppercase tracking-widest mb-3">{pos.org}</p>
                    <ul className="space-y-1.5 text-sm opacity-80 list-disc list-inside leading-relaxed">
                      {pos.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Relevant Courses" subtitle="Core & Ongoing Subjects" />
              <div className="space-y-3">
                {relevantCourses.map((course, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-black/10 py-2">
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className="text-[#F27D26]" />
                      <span className="text-sm font-medium">{course.name}</span>
                    </div>
                    {course.ongoing && (
                      <span className="font-mono text-[10px] uppercase tracking-wider bg-[#F27D26]/15 text-[#F27D26] border border-[#F27D26]/30 px-2 py-0.5">
                        Ongoing
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Contact Form & Contacts */}
          <section id="contact" className="border-t border-black pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">Let's build <br /> something <br /> intelligent.</h2>
                <p className="opacity-70 max-w-sm mb-8 leading-relaxed">
                  Open to remote/onsite internships, research collaborations, and engineering roles in Machine Learning, Generative AI, and Data Analytics.
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#F27D26]" />
                    <a href="mailto:bhupendrasahu132004@gmail.com" className="hover:text-[#F27D26] hover:underline">bhupendrasahu132004@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-6 mt-8">
                  <a href="https://www.linkedin.com/in/bhupendra-sahu-4aa30430b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white border border-black px-4 py-2 hover:bg-black hover:text-white transition-all shadow-md">
                    <Linkedin size={14} /> Linkedin
                  </a>
                  <a href="https://github.com/Bhupendra-glitch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white border border-black px-4 py-2 hover:bg-black hover:text-white transition-all shadow-md">
                    <Github size={14} /> Github
                  </a>
                </div>
              </div>

              {/* Console/Terminal Accent widget */}
              <div className="bg-black text-[#E4E3E0] p-8 flex flex-col justify-between border-2 border-black shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27D26]/10 rounded-full blur-3xl group-hover:bg-[#F27D26]/20 transition-all duration-500" />
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="font-mono text-[10px] opacity-40 ml-2">bhupendra@core-engine ~ bash</span>
                  </div>
                  <Terminal className="mb-6 text-[#F27D26]" size={40} />
                  <p className="font-mono text-sm mb-6 leading-relaxed">
                    <span className="text-[#F27D26]">$</span> cat philosophy.txt <br />
                    <span className="text-white/80">"Data is the new oil, but AI is the refinery that processes raw pipelines into strategy."</span>
                  </p>
                </div>
                <div className="text-[10px] font-mono opacity-40 uppercase tracking-[0.5em] mt-8">
                  Core AI Workspace &copy; 2026
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer Micro-details */}
        <footer className="px-6 py-8 border-t border-black/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
            <div>Built with React, Vite &amp; Tailwind</div>
            <div>IIT Madras | SSTC</div>
          </div>
        </footer>
      </div>

      {/* 
        ========================================================================
        PRINT LAYOUT (Activated ONLY when printing with window.print())
        Provides a beautifully formatted, standard 1-page resume
        ========================================================================
      */}
      <div className="hidden print:block bg-white text-black p-8 font-sans max-w-[21cm] mx-auto leading-normal text-xs">
        <div className="border-b-2 border-black pb-4 mb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tight">Bhupendra Kumar Sahu</h1>
            <p className="text-[#F27D26] font-semibold text-sm uppercase tracking-wider font-mono">Computer Science &amp; Engineering | Data Science</p>
          </div>
          <div className="text-right font-mono text-[10px] space-y-0.5 text-black/80">
            <div>bhupendrasahu132004@gmail.com</div>
            <div>LinkedIn: linkedin.com/in/bhupendra-sahu-4aa30430b</div>
            <div>GitHub: github.com/Bhupendra-glitch</div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Education</h2>
          <div className="space-y-1.5">
            <div className="flex justify-between font-semibold">
              <div>B.S. — Indian Institute of Technology Madras</div>
              <span className="font-normal text-[10px]">2025 – Present | CPI: 7.25</span>
            </div>
            <div className="flex justify-between font-semibold">
              <div>B.Tech — Shri Shankaracharya Technical Campus</div>
              <span className="font-normal text-[10px]">2024 – Present | CPI: 7.5</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Scholastic Achievements</h2>
          <ul className="list-disc list-inside space-y-0.5 text-black/85">
            {scholasticAchievements.map((ach, idx) => (
              <li key={idx}><span className="font-semibold">{ach.title}:</span> {ach.description}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Work Experience</h2>
          <div className="space-y-2.5">
            {experiences.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between font-semibold">
                  <div>{exp.role} <span className="font-normal text-black/60">| {exp.company}</span></div>
                  <span className="font-normal text-[10px]">{exp.date}</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-black/80 pl-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-tight">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Featured Projects</h2>
          <div className="space-y-2">
            {featuredProjects.map((project, idx) => (
              <div key={idx}>
                <div className="flex justify-between font-semibold">
                  <div>{project.title}</div>
                  <span className="font-normal text-[10px]">{project.date}</span>
                </div>
                <p className="text-black/80 pl-2">{project.description}</p>
                <div className="text-[9px] font-mono text-black/60 pl-2">Tools: {project.tags.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-black/90">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="font-bold">{group.title}:</span>
                <span className="text-right text-black/75">{group.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide dialog for printing/saving PDF */}
      <AnimatePresence>
        {showPrintModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-md print:hidden"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border-2 border-black p-8 max-w-md shadow-2xl relative"
            >
              <h3 className="font-serif italic text-2xl mb-4">Generating Clean PDF Resume</h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                We've formatted your resume specifically for standard A4 and Letter printing parameters.
                <br /><br />
                In the print preview dialog, select <strong>"Save as PDF"</strong> as the destination and ensure <strong>"Background graphics"</strong> is enabled for optimal color layout presentation.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    window.print();
                  }}
                  className="bg-black text-white px-6 py-2 font-mono text-xs uppercase tracking-widest hover:bg-[#F27D26] transition-colors"
                >
                  Print Again
                </button>
                <button 
                  onClick={() => setShowPrintModal(false)}
                  className="border border-black px-6 py-2 font-mono text-xs uppercase tracking-widest hover:bg-black/5 transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
