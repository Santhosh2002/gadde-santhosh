import React from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../UI/AnimatedText";

const timelineItems = [
  {
    year: "2025",
    title: "Software Developer Engineer I",
    company: "Reccopilot Inc.",
    description:
      "Built AI-driven recruitment features using RAG and automated workflows with Zapier and Power Automate. Developed scalable C# APIs and crafted responsive UIs with React and Redux.",
  },
  {
    year: "2024",
    title: "SDE Intern",
    company: "Reccopilot Inc.",
    description:
      "Focused on R&D and developed POCs for AI and automation features, many of which were scaled to production. Contributed to both frontend (React) and backend (C#) foundations.",
  },
  {
    year: "2023",
    title: "Full Stack Developer Intern",
    company: "Reccopilot Inc.",
    description:
      "Worked on end-to-end feature development, integrating frontend components with backend services. Contributed to scalable UI design and API connectivity across the platform.",
  },

  {
    year: "2023",
    title: "AI & ML Developer Intern",
    company: "RIG Enterprises",
    description:
      "Worked on Project Recco, building AI/ML models for text, speech, and image processing. Contributed to NLP tasks, model fine-tuning, and DevOps for deploying AI in production.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-portfolio-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container">
        <AnimatedText
          text="About Me"
          className="section-heading mb-16"
          animation="fade-in-up"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedText
              text="I'm a Software Development Engineer with expertise in AI, Full-Stack Development"
              className="text-2xl font-semibold text-gradient mb-4"
              animation="fade-in-up"
            />

            <div className="space-y-4">
              <AnimatedText
                text="From designing frontend frameworks and crafting seamless UIs to building scalable APIs and integrating AI features like RAG, I turn complex ideas into impactful products."
                className="text-gray-400 leading-relaxed"
                animation="fade-in-up"
                delay={100}
              />

              <AnimatedText
                text="With hands-on experience in automation, AI/ML model deployment, and prompt engineering, I bring together data-driven intelligence and robust engineering practices."
                className="text-gray-400 leading-relaxed"
                animation="fade-in-up"
                delay={200}
              />

              <AnimatedText
                text="My unique blend of design thinking, backend logic, and AI innovation helps me create advanced digital solutions that are efficient, scalable, and user-centric."
                className="text-gray-400 leading-relaxed"
                animation="fade-in-up"
                delay={300}
              />
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-portfolio-teal via-portfolio-purple to-transparent"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative pl-8 opacity-0",
                    index % 2 === 0
                      ? "animate-fade-in-up"
                      : "animate-fade-in-up"
                  )}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-portfolio-teal"></div>
                  </div>
                  <div className="glass-card p-6 rounded-xl">
                    <span className="text-portfolio-teal font-semibold text-sm">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.company}</p>
                    <p className="mt-2 text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
