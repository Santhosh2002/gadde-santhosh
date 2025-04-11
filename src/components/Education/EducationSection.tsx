
import React from 'react';
import AnimatedText from '../UI/AnimatedText';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2018 - 2020",
    description: "Specialized in Human-Computer Interaction with focus on motion design and user experience.",
    achievements: [
      "Graduated with Distinction",
      "Published research paper on Cognitive Effects of UI Animation",
      "Led student project for AR interface design"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Arts in Digital Media Design",
    institution: "Rhode Island School of Design",
    period: "2014 - 2018",
    description: "Combined technical development skills with creative design principles.",
    achievements: [
      "Dean's List all semesters",
      "Best Interactive Project Award",
      "Internship at Google Creative Lab"
    ]
  },
  {
    id: 3,
    degree: "Certificate in UI/UX Animation",
    institution: "Interaction Design Foundation",
    period: "2019",
    description: "Advanced program focused on motion principles and animation techniques for digital interfaces.",
    achievements: [
      "Top performer in cohort",
      "Created award-winning animation showcase"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-portfolio-dark relative overflow-hidden">
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
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 bg-portfolio-teal/20 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                    <GraduationCap size={24} className="text-portfolio-teal" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
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
                            <li key={i} className="flex items-start text-sm text-gray-400">
                              <span className="mr-2 text-portfolio-teal">•</span>
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
              <span className="text-sm">Continuous learner, always expanding knowledge in UI animation and interactive design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
