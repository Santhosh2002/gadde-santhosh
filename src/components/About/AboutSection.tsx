import React from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../UI/AnimatedText";

const timelineItems = [
  {
    year: "2023",
    title: "Lead UI/UX Engineer",
    company: "Tech Innovations Inc.",
    description:
      "Led a team of developers to create cutting-edge user interfaces and animations for enterprise products.",
  },
  {
    year: "2021",
    title: "Senior Front-end Developer",
    company: "Digital Solutions LLC",
    description:
      "Specialized in React animations and interactive experiences for major client websites.",
  },
  {
    year: "2019",
    title: "UI/UX Developer",
    company: "Creative Minds Studio",
    description:
      "Designed and implemented responsive interfaces and micro-interactions for mobile applications.",
  },
  {
    year: "2017",
    title: "Web Developer",
    company: "StartUp Ventures",
    description:
      "Developed interactive websites and implemented front-end animations using modern frameworks.",
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
              text="I'm a Software Developer Engineer specialized in UI/UX design and animations"
              className="text-2xl font-semibold text-gradient mb-4"
              animation="fade-in-up"
            />

            <div className="space-y-4">
              <AnimatedText
                text="With a passion for creating beautiful and functional user experiences, I combine technical expertise with creative design thinking to build engaging digital products."
                className="text-gray-400 leading-relaxed"
                animation="fade-in-up"
                delay={100}
              />

              <AnimatedText
                text="My background in both design and development allows me to bridge the gap between aesthetics and functionality, creating seamless experiences that delight users and achieve business goals."
                className="text-gray-400 leading-relaxed"
                animation="fade-in-up"
                delay={200}
              />

              <AnimatedText
                text="I specialize in motion design and interactive animations, using modern web technologies to push the boundaries of what's possible in digital experiences."
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
