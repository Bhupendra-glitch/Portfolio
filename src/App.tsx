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
  <div className="mb-12 border-b border-black pb-4 print:hidden">
    <h2 className="font-serif italic text-4xl text-black">{title}</h2>
    {subtitle && <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-2">{subtitle}</p>}
  </div>
);

const ProjectCard: React.FC<{ project: { title: string; date: string; description: string; bulletPoints?: string[]; tags: string[]; link: string } }> = ({ project }) => (
  <motion.div 
    whileHover={{ backgroundColor: COLORS.ink, color: COLORS.bg }}
    className="group border border-black p-6 transition-colors duration-300 flex flex-col h-full bg-white/40 backdrop-blur-sm"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="font-mono text-xs opacity-60 group-hover:text-white/60">{project.date}</span>
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

  // Core resume projects
  const featuredProjects = [
    {
      title: "IPL Analysis Dashboard",
      date: "Nov 2025 - Apr 2026",
      description: "An interactive analytics system processing over 1,000 matches and 200,000 deliveries with advanced predictive ML capabilities.",
      bulletPoints: [
        "Built dynamic visualizations with Streamlit, Pandas, and Plotly for deep trend discovery.",
        "Created ML models for match prediction & live score forecasting with 85%+ accuracy.",
        "Engineered SaaS features including Fantasy Team Generator and 3 premium subscription plans."
      ],
      tags: ["Python", "Streamlit", "Pandas", "Plotly", "Machine Learning", "EDA"],
      link: "https://github.com/Bhupendra-glitch"
    },
    {
      title: "ChurnPredictAI Dashboard",
      date: "Jan 2026 - Apr 2026",
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
      title: "PredictDemand Application",
      date: "Nov 2025 - Jan 2026",
      description: "AI-powered predictive forecasting system capable of processing 10,000+ records to optimize supply chain inventory metrics.",
      bulletPoints: [
        "Integrated advanced forecasting algorithms (ARIMA and Exponential Smoothing) for sales pipelines.",
        "Built 8 interactive dashboard modules mapping regional trends and hot-selling item clusters.",
        "Created recommendation systems reducing restocking reporting efforts by 70%."
      ],
      tags: ["Python", "ARIMA", "Statsmodels", "Sales Forecasting", "Plotly", "Streamlit"],
      link: "https://github.com/Bhupendra-glitch"
    }
  ];

  // Combined additional/earlier projects requested
  const allProjects = [
    ...featuredProjects,
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
    { title: "Programming Languages", icon: Code2, skills: ["Python", "C", "C++", "Java"] },
    { title: "Backend & Databases", icon: Database, skills: ["FastAPI", "REST APIs", "MySQL"] },
    { title: "Data Analysis & Viz", icon: LineChart, skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "MS Excel", "Power BI", "Google Analytics"] },
    { title: "Web Technologies", icon: Globe, skills: ["HTML", "CSS", "JavaScript", "MERN Stack"] },
    { title: "Machine Learning & AI", icon: BrainCircuit, skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV"] },
    { title: "Cloud & DevOps", icon: GitBranch, skills: ["Git", "GitHub", "Google Cloud Platform (GCP)", "Streamlit"] },
    { title: "Deep Learning & NLP", icon: Cpu, skills: ["ANN", "CNN", "RNN", "NLP", "Generative AI"] },
    { title: "Tools & IDEs", icon: Terminal, skills: ["Jupyter Notebook", "Google Colab", "VS Code"] },
    { title: "CS Fundamentals", icon: Binary, skills: ["Data Structures & Algorithms", "OOPs"] }
  ];

  const experiences = [
    {
      role: "Summer Research Intern",
      type: "Internship",
      company: "Vicharanashala Lab for Education Design - IIT ROPAR",
      location: "Remote | Rupnagar, Punjab, India",
      date: "May 2026 - Present",
      bullets: [
        "Worked on real-world open-source research and development projects under the mentorship of the VLED Lab team at IIT Ropar.",
        "Collaborated remotely on educational technology and AI-driven initiatives.",
        "Contributed to project research, documentation, testing, and development tasks.",
        "Explored and worked with open-source repositories, tools, and research materials."
      ],
      skills: ["Python", "React", "EDA"]
    },
    {
      role: "Data Analytics Project Trainee",
      type: "Trainee",
      company: "Consulting & Analytics Club, IIT Guwahati",
      location: "Remote",
      date: "Apr 2026 - Present",
      bullets: [
        "Developed an end-to-end Customer Retention Analytics Solution using Python, SQL, and Power BI, analyzing customer behavior to identify high-value segments and improve retention strategies.",
        "Engineered advanced features and executed customer segmentation, cohort analysis, and SQL-driven insights, uncovering repeat purchase trends, discount dependency, and churn-risk patterns.",
        "Built an interactive executive dashboard and proposed data-backed strategies that optimized promotions, increased loyalty focus, and supported revenue growth decisions."
      ],
      skills: ["Python", "SQL", "EDA"]
    },
    {
      role: "Volunteer",
      type: "Part-time",
      company: "Google Developer Group - SSTC",
      location: "On-site",
      date: "Nov 2025 - Jan 2026",
      bullets: [
        "Assisted in organizing cloud computing and AI workshops for students.",
        "Supported participants in hands-on labs and technical learning sessions.",
        "Coordinated event activities, registrations, and learner engagement.",
        "Promoted tech community growth through collaborative initiatives."
      ],
      skills: ["Google Cloud", "Vertex AI", "Gemini", "Streamlit"]
    },
    {
      role: "Contributor",
      type: "Internship",
      company: "GirlScript Summer of Code",
      location: "Remote",
      date: "Jun 2025 - Nov 2025",
      bullets: [
        "Contributed to open-source projects by fixing bugs and implementing new features using Git and GitHub.",
        "Collaborated with cross-team developers to enhance code quality and improve project functionality.",
        "Utilized version control systems to manage pull requests and track issues in a real-world development environment."
      ],
      skills: ["React", "Node.js", "MongoDB", "Python"]
    },
    {
      role: "Contributor",
      type: "Internship",
      company: "Social Summer of Code",
      location: "Remote",
      date: "May 2025 - Aug 2025",
      bullets: [
        "Selected for a competitive open-source program, contributing production-level features and resolving critical issues in live projects.",
        "Collaborated with mentors and developers worldwide through GitHub, code reviews, pull requests, and agile workflows.",
        "Delivered high-quality code, optimized project documentation, and strengthened problem-solving in real-world software development."
      ],
      skills: ["React", "Node.js", "Express", "Python", "MongoDB"]
    }
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
                className="font-mono text-xs uppercase tracking-[0.3em] mb-4 text-[#F27D26] font-semibold"
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
                className="text-lg max-w-lg opacity-85 leading-relaxed"
              >
                Specializing in **Machine Learning**, **Deep Learning**, and **Generative AI**. 
                Proven track record in open-source R&D and end-to-end data products with clean Python & Google Cloud stacks.
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
                  <GraduationCap className="mb-4 text-[#F27D26]" size={24} />
                  <h3 className="text-lg font-bold uppercase mb-1">BS in Data Science</h3>
                  <p className="text-sm opacity-70 mb-4">Indian Institute of Technology Madras</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-mono text-xs opacity-60">Sep 2025 - Present</span>
                  <span className="font-mono text-[10px] border border-black/30 px-2 py-0.5 rounded-full">Pursuing</span>
                </div>
              </div>
              
              <div className="border border-black p-6 flex flex-col justify-between bg-white/20 backdrop-blur-sm shadow-sm">
                <div>
                  <GraduationCap className="mb-4 text-[#F27D26]" size={24} />
                  <h3 className="text-lg font-bold uppercase mb-1">B.Tech in CS</h3>
                  <p className="text-sm opacity-70 mb-4">Shri Shankaracharya Technical Campus</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-mono text-xs opacity-60">Sep 2024 - Present</span>
                  <span className="font-mono text-[10px] border border-black/30 px-2 py-0.5 rounded-full">Pursuing</span>
                </div>
              </div>
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
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#F27D26] mb-3">{exp.company}</p>
                  <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest mb-4">{exp.location}</p>
                  
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
            <SectionHeader title="Tools & Skills" subtitle="Comprehensive Capabilities" />
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
                <p className="font-mono text-xs uppercase tracking-widest opacity-60 mt-2">Selected Works & Pipelines</p>
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

          {/* Coursework & Certificates */}
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
                    <ChevronRight size={14} className="text-[#F27D26]" />
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
                    <Award className="shrink-0 text-[#F27D26]" size={20} />
                    <div>
                      <h4 className="font-bold text-sm uppercase leading-tight">{cert.title}</h4>
                      <p className="text-[10px] font-mono opacity-60 uppercase tracking-widest mt-1">{cert.provider}</p>
                    </div>
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
            <div>Built with React, Vite & Tailwind</div>
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
            <p className="text-[#F27D26] font-semibold text-sm uppercase tracking-wider font-mono">BS - Data Science and Application</p>
          </div>
          <div className="text-right font-mono text-[10px] space-y-0.5 text-black/80">
            <div>bhupendrasahu132004@gmail.com</div>
            <div>LinkedIn: linkedin.com/in/bhupendra-sahu-4aa30430b</div>
            <div>GitHub: github.com/Bhupendra-glitch</div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Professional Summary</h2>
          <p className="opacity-90">
            Aspiring Data Scientist with expertise in Machine Learning, Deep Learning, and Generative AI. Proficient in Python and experienced with Google Cloud.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Education</h2>
          <div className="space-y-2">
            <div className="flex justify-between font-semibold">
              <div>Indian Institute of Technology Madras <span className="font-normal">| Chennai</span></div>
              <span className="font-normal text-[10px]">Sep 2025 - Present</span>
            </div>
            <div className="pl-4 text-black/70 italic">Pursuing BS(Data Science and Application)</div>
            
            <div className="flex justify-between font-semibold mt-1">
              <div>Shri Shankaracharya Technical Campus <span className="font-normal">| Bhilai</span></div>
              <span className="font-normal text-[10px]">Sep 2024 - Present</span>
            </div>
            <div className="pl-4 text-black/70 italic">Pursuing B.Tech(Computer Science)</div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 text-[#F27D26]">Work Experiences</h2>
          <div className="space-y-3">
            {experiences.slice(0, 3).map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between font-semibold">
                  <div>{exp.role} <span className="font-normal text-black/60">| {exp.company}</span></div>
                  <span className="font-normal text-[10px]">{exp.date}</span>
                </div>
                <div className="text-[9px] text-[#F27D26] font-mono mb-1">{exp.location}</div>
                <ul className="list-disc list-inside space-y-0.5 text-black/80 pl-2">
                  {exp.bullets.slice(0, 3).map((bullet, bIdx) => (
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
            {skillGroups.slice(0, 6).map((group, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="font-bold">{group.title}:</span>
                <span className="text-right text-black/75">{group.skills.slice(0, 5).join(', ')}</span>
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
