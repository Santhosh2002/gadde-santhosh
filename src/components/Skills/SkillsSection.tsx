
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from '../UI/AnimatedText';

const skills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'CSS/SCSS', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Frontend' },
  { name: 'Framer Motion', level: 90, category: 'Animation' },
  { name: 'Three.js', level: 75, category: 'Animation' },
  { name: 'GSAP', level: 85, category: 'Animation' },
  { name: 'Figma', level: 90, category: 'Design' },
  { name: 'Adobe XD', level: 85, category: 'Design' },
  { name: 'Adobe After Effects', level: 75, category: 'Design' },
  { name: 'UI/UX Design', level: 85, category: 'Design' },
  { name: 'Responsive Design', level: 95, category: 'Frontend' },
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-progress-bar');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.progress}%`;
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

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
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => (
            <div 
              key={category} 
              className={cn(
                "glass-card p-8 rounded-xl opacity-0",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${catIndex * 200}ms`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-semibold mb-6 text-portfolio-teal">{category}</h3>
              
              <div className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-portfolio-gray rounded-full overflow-hidden">
                      <div 
                        className="skill-progress-bar h-full bg-gradient-to-r from-portfolio-teal to-portfolio-purple rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                        data-progress={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
