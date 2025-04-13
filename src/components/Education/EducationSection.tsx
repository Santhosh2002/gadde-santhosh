import React from "react";
import AnimatedText from "../UI/AnimatedText";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type Education = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
};

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Vadodara",
    period: "2020 - 2024",
    description:
      "Pursued a degree in Computer Science with a focus on UI/UX design and interactive systems. Developed a keen interest in motion design and its impact on user experience.",
    achievements: [
      "Research project on Online voting system using Blockchain",
      "Internship at Reccopilot Inc. focusing on AI-driven UI solutions",
      "Participated in Flipkart's Unstop Competitive E-School Leader 2023, ranked Top 70",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Narayana Junior College",
    period: "2018 - 2020",
    description:
      "Completed higher secondary education with a focus on Mathematics and Physics. Developed a strong foundation in analytical thinking and problem-solving skills.",
    achievements: [
      "Joint Entrance Examination (JEE) Mains qualified with 97.8%",
      "Achieved 93% in the board exams",
    ],
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 bg-portfolio-dark relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-portfolio-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-teal/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedText
            text="Education"
            className="section-heading text-center mb-12"
            as="h2"
          />

          <div className="space-y-8">
            {educations.map((edu, index) => (
              <div
                key={edu.id}
                className={cn(
                  "glass-card p-6 border border-portfolio-teal/20 rounded-xl relative",
                  "transform transition-all duration-500",
                  "opacity-0 animate-fade-in-up"
                )}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 bg-portfolio-teal/20 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                    <GraduationCap size={24} className="text-portfolio-teal" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center text-sm text-gray-400 mt-1">
                      <span className="mr-3">{edu.institution}</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="mt-3 text-gray-300">{edu.description}</p>

                    {edu.achievements && (
                      <div className="mt-3">
                        <h4 className="text-sm font-medium text-portfolio-teal flex items-center">
                          <Award size={14} className="mr-1" /> Achievements
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start text-sm text-gray-400"
                            >
                              <span className="mr-2 text-portfolio-teal">
                                •
                              </span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center text-portfolio-teal">
              <BookOpen size={18} className="mr-2" />
              <span className="text-sm">
                Continuous learner, always expanding knowledge in UI animation
                and interactive design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
