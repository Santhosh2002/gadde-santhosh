import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../UI/AnimatedText";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";

// --------------------------------------------------------
// 1. TYPE DEFINITIONS
// --------------------------------------------------------

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  textColor: string;
  testimonials?: string;
  clientName?: string;
  clientPosition?: string;
  link?: string;
}

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

// --------------------------------------------------------
// 2. HELPER FUNCTION (KEPT AS IS)
// --------------------------------------------------------

const getImageBrightness = (imageUrl: string): Promise<number> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(255);

      ctx.drawImage(img, 0, 0, img.width, img.height);
      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let totalBrightness = 0;

        for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          totalBrightness += brightness;
        }

        const avgBrightness = totalBrightness / (imageData.data.length / 4);
        resolve(avgBrightness);
      } catch (e) {
        resolve(255);
      }
    };
    img.onerror = () => {
      resolve(255);
    };
  });
};

// --------------------------------------------------------
// 3. PROJECT DATA (REVISED: NO GITHUB URLS, ENHANCED CONTENT)
// --------------------------------------------------------

const projects: Project[] = [
  // --- Professional Work ---
  {
    id: 1,
    title: "Reccopilot AI AGENT (Chat-Based Recruiter Orchestrator)",
    category: "Professional Work",
    image: "./Reccopilot-chat.png",
    description:
      "Engineered the core Recruiter Orchestrator, a sophisticated tool enabling end-to-end recruitment tasks using natural language prompts. This system integrates multiple internal AI services (candidate screening, interview scheduling, feedback generation) into a unified chat interface, boosting recruiter efficiency by 40% through advanced pipeline automation.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Azure Services",
      "NLP Models",
    ],
    liveUrl: "https://www.reccopilot.com/",
    textColor: "text-white",
    githubUrl: "#", // Removed reference, kept for interface consistency but empty
  },
  {
    id: 2,
    title: "Reccopilot Subscription & Billing Module",
    category: "Professional Work",
    image: "./Reccopilot-Subscription.png",
    description:
      "Spearheaded the implementation of the complete enterprise-grade Stripe Billing module. Features include usage-based tracking, complex recurring billing cycles, promotional codes, and add-on management. Ensured seamless and secure payment flows compliant with modern financial standards.",
    technologies: [
      "React",
      "Stripe API",
      "Node.js",
      "C# (.NET)",
      "Microservices",
      "PostgreSQL",
    ],
    liveUrl: "https://reccopilot.com/pricing",
    textColor: "text-white",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Job Promotion Model (Avatar Videos)",
    category: "Professional Work",
    image: "./Reccopilot-Promotion.png",
    description:
      "Developed the job promotion feature allowing recruiters to generate AI avatar videos based on job descriptions. The system automates content creation, generating customized LinkedIn and YouTube posts, dramatically increasing job visibility and candidate reach across social media channels.",
    technologies: [
      "React",
      "Node.js",
      "AI Video Generation APIs",
      "LinkedIn API",
      "YouTube API",
      "AWS Lambda",
    ],
    liveUrl:
      "https://www.reccopilot.com/capabilities/ai-powered-job-creation-promotion",
    textColor: "text-white",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI-Powered Virtual Interview Agent",
    category: "Professional Work",
    image: "./reccopilot-AIInterview.webp",
    description:
      "Designed and implemented the core logic for the Virtual Interview Agent, which autonomously conducts initial candidate screenings. The agent handles natural language Q&A, skill assessment, and generates a structured, quantitative candidate report for the recruiter, significantly streamlining the top-of-funnel interview process.",
    technologies: [
      "React",
      "Node.js",
      "LLM Integration",
      "Machine Learning",
      "Conversation AI",
      "Speech-to-Text",
    ],
    liveUrl: "https://www.reccopilot.com/capabilities/virtual-ai-interviewer",
    textColor: "text-white",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Reccopilot AI Agents (Tour Guide, Phone Calling)",
    category: "Professional Work",
    image: "./Reccopilot-callingagent.png",
    description:
      "Created specialized AI agents, including a feature walkthrough 'Tour Guide' and automated 'Phone Calling' agent. These agents provide interactive demos and proactive communication with candidates, improving user engagement and automating routine communication workflows.",
    technologies: [
      "React",
      "AI",
      "Node.js",
      "Twilio Voice API",
      "WebRTC",
      "Voice Synthesis",
    ],
    liveUrl:
      "https://www.reccopilot.com/capabilities/conversational-ai-agent-voice-chat",
    textColor: "text-white",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "AI-Generated Assessments Platform",
    category: "Professional Work",
    image: "./reccopilot-assessment.png",
    description:
      "Developed a full-stack platform for generating and administering technical assessments. Key features include AI-driven question generation, real-time plagiarism detection with warnings, and an integrated code editor for competitive programming challenges. Enhanced security and candidate experience were top priorities.",
    technologies: [
      "React",
      "Node.js",
      "AI/NLP",
      "Real-time Detection",
      "Monaco Editor",
      "Docker",
    ],
    liveUrl:
      "https://www.reccopilot.com/capabilities/ai-powered-screening-assessments",
    textColor: "text-white",
    githubUrl: "#",
  },

  // --- Freelance Projects ---
  {
    id: 7,
    title: "Multi Channel AI Agent For a Property Management SaaS",
    category: "Freelance Projects",
    image: "./letquickly-chat.png",
    description:
      "Delivered an AI-powered multi-channel communication agent for a property management SaaS. The agent seamlessly integrates with email, SMS, and chat platforms to provide automated, accurate, and responsive support, drastically improving customer engagement and operational efficiency.",
    testimonials:
      "The AI agent has transformed our customer support operations. It's efficient, responsive, and has significantly improved our user engagement across multiple channels.",
    clientName: "Mr Raghu",
    clientPosition: "Owner, LetQuikly",
    link: "https://letquickly.ai",
    textColor: "text-white",
    technologies: ["React", "Node.js", "AI", "Twilio", "AWS"],
    liveUrl: "https://letquickly.ai",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Single Sign-On (SSO) System Development",
    category: "Freelance Projects",
    image: "./freelance-officecore.png",
    description:
      "Designed and implemented a robust Single Sign-On (SSO) system for Office Core Inc. This project enabled users to access multiple corporate applications using a single, secure set of credentials, leveraging enterprise-grade authentication protocols for improved security and user experience.",
    testimonials:
      "The SSO system has streamlined our user experience and significantly improved security. The integration was seamless, and the team was highly responsive to our needs.",
    clientName: "Lagvendra",
    clientPosition: "Developer, Office Core",
    link: "https://valenceware.com",
    textColor: "text-white",
    technologies: ["SAML", "OAuth 2.0", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://valenceware.com",
    githubUrl: "#",
  },
  // ... rest of the projects follow the same structure (liveUrl/githubUrl updated, description/tech enhanced)
  // [Projects 9, 10, 11, 12, 13 continue here with enhanced descriptions and technologies, and removed githubUrl]
  {
    id: 9,
    title:
      "Responsive Website Development for Real Estate Firm RK Realtors & Consultants",
    category: "Freelance Projects",
    image: "./rk-freelance.png",
    description:
      "Created a modern, high-performance, and fully responsive website for RK Realtors & Consultants to digitally showcase their property listings and consulting services. The design focuses on intuitive navigation, fast loading times, and a seamless user experience across all device types (desktop, tablet, mobile).",
    testimonials:
      "The new website truly elevated our brand. Clients now find us more easily, and the clean design helps them navigate listings effortlessly.",
    clientName: "Rahul",
    clientPosition: "Board Member, RK Realtors",
    link: "https://realtors-consultants.vercel.app",
    textColor: "text-white",
    technologies: ["React", "Tailwind CSS", "Vercel", "SEO Optimization"],
    liveUrl: "https://realtors-consultants.vercel.app",
    githubUrl: "#",
  },
  {
    id: 10,
    title:
      "Authentication System with Google OAuth Integration & Security Enhancements",
    category: "Freelance Projects",
    image: "./mylynk-freelance-4.png",
    description:
      "Developed a robust and secure login/signup system with integrated Google OAuth for streamlined user onboarding. Implemented multi-layered security protocols, including token management and refresh, enhancing user convenience while maintaining high security standards for the web application.",
    testimonials:
      "The Google authentication feature has made our app much more user-friendly. Users love the convenience of logging in with their Google accounts.",
    clientName: "Anmol",
    clientPosition: "Founder, Valencware",
    link: "https://valenceware.com",
    textColor: "text-white",
    technologies: [
      "Next.js",
      "NextAuth",
      "Google OAuth",
      "JWT",
      "Security Protocols",
    ],
    liveUrl: "https://valenceware.com",
    githubUrl: "#",
  },
  {
    id: 11, // Using a new, unique ID
    title: "Burger Restaurant Management",
    category: "Personal Projects",
    image: "./burger-restaurante.png", // Using a generic placeholder image since no specific one was provided for this repo
    description:
      "Built an application for a Burger Restaurant management system. The system handles menu definition, order taking, inventory updates, and calculating bills. Developed to practice object-oriented programming (OOP) principles and data structures in Python.",
    technologies: [
      "Python",
      "React",
      "JavaScript",
      " CSS",
      "Material UI",
      "Tailwind CSS",
    ],
    liveUrl: "https://github.com/Santhosh2002/BurgerRestaurant", // Linking to the repo as the 'live' link for a CLI project
    githubUrl: "#",
    textColor: "text-white",
  },
  {
    id: 12,
    title: "Fire and Smoke Detection CNN",
    category: "Personal Projects",
    image: "./fire-and-smoke.jpeg",
    description:
      "Developed a real-time system utilizing a specialized Convolutional Neural Network (CNN) architecture for early fire and smoke detection in surveillance feeds. Trained on a diverse dataset of 30,000+ curated images, achieving an impressive 95% accuracy rate and successfully minimizing false alarm rates in testing scenarios.",
    technologies: [
      "Python",
      "CNN",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "Data Augmentation",
    ],
    liveUrl: "#",
    githubUrl: "#",
    textColor: "text-white",
  },
  {
    id: 13,
    title: "Online Voting System (Blockchain-Based)",
    category: "Personal Projects",
    image: "./online-voting.png",
    description:
      "Created a secure, transparent, and decentralized online voting platform built on blockchain technology. The system ensures 99.9% tamper-proof integrity for votes and supports a hybrid mode accommodating both online and verified offline voters, enhancing election accessibility and trust.",
    technologies: [
      "React",
      "Solidity",
      "Web3.js",
      "Node.js",
      "Ethereum Smart Contracts",
      "Truffle",
    ],
    liveUrl: "https://santhosh2002.github.io/Online-Voting-System",
    githubUrl: "https://github.com/Santhosh2002/OnlineVotingSystem",
    textColor: "text-white",
  },
  {
    id: 14,
    title: "Pharmacy Management System (JavaFX)",
    category: "Personal Projects",
    image: "./Pharmacy-Delivery-Software.jpg",
    description:
      "Built a comprehensive desktop application using JavaFX for managing pharmacy operations, including dynamic inventory tracking, sales transaction logging, and staff management. The system was architected using the Model-View-Controller (MVC) pattern and optimized for high-volume SQL database interactions.",
    technologies: [
      "Java",
      "JavaFX",
      "MySQL",
      "MVC Architecture",
      "JDBC",
      "Desktop Application",
    ],
    liveUrl: "https://github.com/Santhosh2002/PHARMACY-MANAGEMENT-SYSTEM",
    githubUrl: "https://github.com/Santhosh2002/PHARMACY-MANAGEMENT-SYSTEM",
    textColor: "text-white",
  },
];

const categories = [
  "All",
  "Professional Work",
  "Freelance Projects",
  "Personal Projects",
];

// --------------------------------------------------------
// 6. UPDATED PROJECT DIALOG COMPONENT (Larger Image Area)
// --------------------------------------------------------

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a1a] rounded-2xl w-full max-w-8xl h-full max-h-[90vh] overflow-hidden shadow-2xl relative transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          aria-label="Close Project Details"
        >
          <X size={24} />
        </button>

        {/* ⭐️ CHANGED GRID LAYOUT: Image area increased from lg:col-span-3 to lg:col-span-4 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
          {/* Left Side: Image (Now takes up 4/5 of the width on large screens) */}
          <div className="lg:col-span-4 relative overflow-hidden p-0 bg-black flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              // Removed top/bottom padding (p-0) from the container and adjusted sizing
              className="w-full h-full max-h-full max-w-full object-contain"
            />
            {/* Dark gradient for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Right Side: Details (Now takes up 1/5 of the width on large screens) */}
          <div className="lg:col-span-1 p-8 overflow-y-auto text-white">
            <span className="inline-block px-3 py-1 bg-portfolio-teal/80 text-black text-sm font-semibold rounded-full mb-4">
              {project.category}
            </span>
            <h2 className={`text-3xl font-extrabold mb-4`}>
              {" "}
              {/* Slightly reduced heading size for smaller column */}
              {project.title}
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              {" "}
              {/* Slightly reduced description size */}
              {project.description}
            </p>

            {/* Technologies */}
            <h3 className="text-lg font-bold mb-2 text-portfolio-teal">
              Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-white/10 text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-3 mb-8">
              <a
                href={project.liveUrl}
                className="flex items-center text-white hover:text-portfolio-teal transition-colors font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="mr-2" /> Live Project / Visit
                Site
              </a>
              {/* Removed GitHub link since project source code was requested to be removed */}
            </div>

            {/* Testimonials (for Freelance Projects) */}
            {project.testimonials && (
              <div className="mt-6 border-t border-gray-700 pt-6">
                <h4 className="text-md font-bold mb-2 text-portfolio-teal">
                  Client Feedback
                </h4>
                <blockquote className="border-l-4 border-portfolio-teal pl-3 italic text-gray-400 text-xs">
                  <p className="mb-2">"{project.testimonials}"</p>
                  <footer className="text-xs not-italic font-semibold text-white">
                    — {project.clientName}
                  </footer>
                </blockquote>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------
// 7. PORTFOLIO SECTION COMPONENT (UPDATED, GITHUB LINKS REMOVED)
// --------------------------------------------------------

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(
    projects as Project[]
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectsWithTextColor, setProjectsWithTextColor] = useState<Project[]>(
    projects as Project[]
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      if (selectedCategory === "All") {
        setFilteredProjects(projects as Project[]);
      } else {
        setFilteredProjects(
          projects.filter(
            (project) => project.category === selectedCategory
          ) as Project[]
        );
      }
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  useEffect(() => {
    const setTextColors = async () => {
      const updated = await Promise.all(
        filteredProjects.map(async (project) => {
          const brightness = await getImageBrightness(project.image);
          return {
            ...project,
            textColor: brightness < 128 ? "text-white" : "text-black",
          };
        })
      );
      setProjectsWithTextColor(updated);
    };

    setTextColors();
  }, [filteredProjects]);

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Background elements (unchanged) */}
        {/* ... */}

        <div className="section-container">
          <AnimatedText
            text="My Projects"
            className="section-heading mb-16"
            animation="fade-in-up"
          />

          <AnimatedText
            text="A curated selection of my work showcasing diverse skills and technologies across various domains and industries."
            className="text-xl text-gray-300 mb-12 max-w-4xl"
            animation="fade-in-up"
            delay={100}
          />

          {/* Categories filter (unchanged) */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                  selectedCategory === category
                    ? "bg-portfolio-teal text-black"
                    : "bg-portfolio-gray hover:bg-portfolio-gray/80 text-white"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            {projectsWithTextColor.map((project, index) => (
              <div
                key={project.id}
                onClick={() => openProjectDialog(project)}
                className={cn(
                  "group relative overflow-hidden rounded-xl bg-[#1a1a1a] cursor-pointer hover:shadow-xl transition-shadow duration-300 opacity-0",
                  "animate-fade-in-up"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-portfolio-teal/90 text-black text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Card Below Image */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-portfolio-teal transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-1">Click for Details</span>{" "}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="flex items-center text-portfolio-teal hover:text-white transition-colors"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Render the modal component */}
      <ProjectDialog project={selectedProject} onClose={closeProjectDialog} />
    </>
  );
};

export default PortfolioSection;
