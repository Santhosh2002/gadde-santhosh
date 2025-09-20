import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../UI/AnimatedText";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
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
    };
  });
};

const projects = [
  {
    id: 1,
    title: "Fire and Smoke Detection CNN",
    category: "Machine Learning",
    image:
      "https://private-user-images.githubusercontent.com/77265502/255156337-e4fc4ef6-e17e-498a-a01a-78e1eba953a9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ0NjQ4MDgsIm5iZiI6MTc1NDQ2NDUwOCwicGF0aCI6Ii83NzI2NTUwMi8yNTUxNTYzMzctZTRmYzRlZjYtZTE3ZS00OThhLWEwMWEtNzhlMWViYTk1M2E5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODA2VDA3MTUwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNjOTRhZDA0ZjhmMDUyM2JmYzhkZThhYmI3ZWZhNDVkZTc5MWQwZTIzYTBkNzkxMzMzN2ZkMjI5OWNmNGRhZmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.YOr_etBb36b4A0rv4LYGeLny1M_ijYc_4mGmmhkybUM",
    description:
      "Developed a real-time fire and smoke detection system using advanced CNN architecture. Trained on 30,000+ curated images, achieving 95% accuracy and minimizing false alarms.",
    technologies: ["Python", "CNN", "OpenCV", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "#",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Online Voting System",
    category: "Web3 Development",
    image: "./online-voting.png",
    description:
      "Developed a blockchain-based voting platform enabling remote and secure voting. Ensured 99.9% tamper-proof integrity and hybrid mode for online and offline voters.",
    technologies: ["React", "Solidity", "Web3.js", "Node.js"],
    liveUrl: "https://santhosh2002.github.io/Online-Voting-System",
    githubUrl: "https://github.com/Santhosh2002/OnlineVotingSystem",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Pharmacy Management System",
    category: "Java Development",
    image:
      "https://user-images.githubusercontent.com/77265502/220199249-fb959e1d-e40f-45dd-8cf5-9cae37cc11d7.png",
    description:
      "Built a JavaFX-based system for pharmacy operations including inventory and sales. Designed with MVC architecture and optimized SQL interactions for performance.",
    technologies: ["Java", "JavaFX", "MySQL", "MVC"],
    liveUrl: "https://github.com/Santhosh2002/PHARMACY-MANAGEMENT-SYSTEM",
    githubUrl: "https://github.com/Santhosh2002/PHARMACY-MANAGEMENT-SYSTEM",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "E-Commerce Animation Suite",
    category: "Professional Work",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1074&q=80",
    description:
      "Designed and developed an animation library for a major e-commerce platform, improving user engagement by 32%.",
    technologies: ["React", "Framer Motion", "SCSS", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    textColor: "text-white",
  },
  {
    id: 5,
    title: "Financial Dashboard",
    category: "Professional Work",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
    description:
      "Built an animated, real-time financial dashboard with interactive visualizations and micro-interactions.",
    technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    textColor: "text-white",
  },
  {
    id: 6,
    title: "Motion UI Kit",
    category: "Freelance Projects",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1074&q=80",
    description:
      "Developed a UI kit with 50+ animated components for a design agency, reducing frontend development time.",
    technologies: ["React", "GSAP", "Storybook", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
    textColor: "text-white",
  },
  {
    id: 7,
    title: "Interactive Onboarding Flow",
    category: "Freelance Projects",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1170&q=80",
    description:
      "Built a gamified onboarding experience for a SaaS platform, increasing completion rates by 47%.",
    technologies: ["React", "Lottie", "TypeScript", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    textColor: "text-white",
  },
  {
    id: 8,
    title: "Animated Weather App",
    category: "Personal Animations",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1170&q=80",
    description:
      "Designed a weather app with stunning weather-based animations and transitions using GSAP and Canvas.",
    technologies: ["React", "Canvas API", "GSAP", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
    textColor: "text-white",
  },
];

const categories = [
  "All",
  "Professional Work",
  "Freelance Projects",
  "Personal Animations",
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectsWithTextColor, setProjectsWithTextColor] = useState(projects);
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      if (selectedCategory === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.category === selectedCategory)
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
      setProjectsWithTextColor(updated); // store this in a state variable
    };

    setTextColors();
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-portfolio-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container">
        <AnimatedText
          text="My Portfolio"
          className="section-heading mb-16"
          animation="fade-in-up"
        />

        <AnimatedText
          text="Explore my recent projects showcasing UI design, animations, and interactive experiences"
          className="text-xl text-gray-300 mb-12 max-w-4xl"
          animation="fade-in-up"
          delay={100}
        />

        {/* Categories filter */}
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
              className={cn(
                "group relative overflow-hidden rounded-xl opacity-0",
                "animate-fade-in-up"
              )}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-portfolio-teal/80 text-black text-xs font-semibold rounded-full mb-3 mt-3">
                  {project.category}
                </span>
                <h3 className={`text-xl font-bold mb-2 ${project.textColor}`}>
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs ${project.textColor} px-2 py-1 rounded-md `}
                      style={{
                        backgroundColor:
                          project.textColor === "text-white"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p
                  className={`text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${project.textColor}`}
                >
                  {project.description}
                </p>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-portfolio-teal hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-portfolio-teal hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" /> Source Code
                  </a>
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
  );
};

export default PortfolioSection;
