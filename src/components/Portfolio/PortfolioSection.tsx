
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from '../UI/AnimatedText';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Animation Suite',
    category: 'Professional Work',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'Designed and developed a comprehensive animation library for a major e-commerce platform, improving user engagement by 32%.',
    technologies: ['React', 'Framer Motion', 'SCSS', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    category: 'Professional Work',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Created an animated, real-time financial dashboard with interactive data visualizations and micro-interactions.',
    technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Motion UI Kit',
    category: 'Freelance Projects',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'Developed a comprehensive UI kit with 50+ animated components for a design agency, significantly reducing development time.',
    technologies: ['React', 'GSAP', 'Storybook', 'Styled Components'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: '3D Product Configurator',
    category: 'Personal Animations',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Built an interactive 3D product configurator with realistic lighting and physics-based animations.',
    technologies: ['Three.js', 'WebGL', 'React', 'R3F'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Interactive Onboarding Flow',
    category: 'Freelance Projects',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Designed and developed a gamified onboarding experience for a SaaS platform, increasing completion rates by 47%.',
    technologies: ['React', 'Lottie', 'TypeScript', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Animated Weather App',
    category: 'Personal Animations',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Created a weather application with beautiful weather-based animations and smooth transitions between states.',
    technologies: ['React', 'Canvas API', 'GSAP', 'Weather API'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

const categories = ['All', 'Professional Work', 'Freelance Projects', 'Personal Animations'];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      if (selectedCategory === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === selectedCategory));
      }
      setIsAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

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
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300",
          isAnimating ? "opacity-0" : "opacity-100"
        )}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl opacity-0",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
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
                <span className="inline-block px-3 py-1 bg-portfolio-teal/80 text-black text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-white/10 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
