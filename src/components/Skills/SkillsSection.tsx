import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../UI/AnimatedText";

const skills = [
  // AI / Agent Systems (your strongest differentiator)
  { name: "LLM Orchestration", level: 95, category: "AI/ML" },
  { name: "AI Agents & Tool Calling", level: 95, category: "AI/ML" },
  {
    name: "RAG (Retrieval-Augmented Generation)",
    level: 90,
    category: "AI/ML",
  },
  { name: "Prompt Engineering", level: 90, category: "AI/ML" },
  { name: "Semantic Search & Embeddings", level: 85, category: "AI/ML" },
  { name: "NLP", level: 80, category: "AI/ML" },
  { name: "TensorFlow / Keras", level: 75, category: "AI/ML" },

  // Backend (very strong in your profile)
  { name: "C#", level: 95, category: "Backend" },
  { name: ".NET / ASP.NET Core", level: 95, category: "Backend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Java (Spring Boot)", level: 85, category: "Backend" },
  { name: "Python (Flask)", level: 85, category: "Backend" },
  { name: "Microservices Architecture", level: 90, category: "Backend" },
  { name: "REST APIs", level: 90, category: "Backend" },

  // Frontend
  { name: "React", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Redux / Redux Toolkit", level: 85, category: "Frontend" },
  { name: "Material UI", level: 80, category: "Frontend" },

  // Databases & Search
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "Elasticsearch", level: 85, category: "Database" },
  { name: "Redis", level: 85, category: "Database" },
  { name: "Vector DB (Qdrant)", level: 85, category: "Database" },

  // DevOps & Cloud
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "Kubernetes", level: 70, category: "DevOps" },
  { name: "AWS", level: 75, category: "DevOps" },
  { name: "Azure", level: 75, category: "DevOps" },
  { name: "CI/CD Pipelines", level: 80, category: "DevOps" },
  { name: "Jenkins", level: 70, category: "DevOps" },

  // Real-time & Systems (important for your voice/LLM work)
  { name: "WebSockets & Real-time Systems", level: 90, category: "Systems" },
  { name: "Streaming Architectures", level: 85, category: "Systems" },
  { name: "Twilio Integrations", level: 85, category: "Systems" },
  { name: "Google STT / TTS", level: 85, category: "Systems" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Selenium", level: 75, category: "Tools" },
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-progress-bar");
            bars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${
                  (bar as HTMLElement).dataset.progress
                }%`;
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-portfolio-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-portfolio-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container">
        <AnimatedText
          text="Skills & Expertise"
          className="section-heading mb-16"
          animation="fade-in-up"
        />

        <AnimatedText
          text="I've spent years refining my skills in UI development, animation, and design to create exceptional digital experiences"
          className="text-xl text-gray-300 mb-16 max-w-4xl"
          animation="fade-in-up"
          delay={100}
        />

        <div
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills], catIndex) => (
              <div
                key={category}
                className={cn(
                  "glass-card p-8 rounded-xl opacity-0",
                  "animate-fade-in-up",
                )}
                style={{
                  animationDelay: `${catIndex * 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <h3 className="text-xl font-semibold mb-6 text-portfolio-teal">
                  {category}
                </h3>

                <div className="space-y-6">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-portfolio-gray rounded-full overflow-hidden">
                        <div
                          className="skill-progress-bar h-full bg-gradient-to-r from-portfolio-teal to-portfolio-purple rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "0%" }}
                          data-progress={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
