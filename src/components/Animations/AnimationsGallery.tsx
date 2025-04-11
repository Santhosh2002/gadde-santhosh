
import React, { useState } from 'react';
import AnimatedText from '../UI/AnimatedText';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Maximize2 } from 'lucide-react';

type AnimationProject = {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  liveUrl?: string;
};

const animationProjects: AnimationProject[] = [
  {
    id: 1,
    title: "Liquid Motion Effects",
    description: "Experimental liquid animations using WebGL and GSAP",
    category: "Experimental",
    thumbnail: "/placeholder.svg",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "3D Product Showcase",
    description: "Interactive 3D product viewer with custom animations",
    category: "Commercial",
    thumbnail: "/placeholder.svg",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Particle System Navigation",
    description: "Navigation concept using interactive particle systems",
    category: "UI/UX",
    thumbnail: "/placeholder.svg",
    videoUrl: "#"
  },
  {
    id: 4,
    title: "Data Visualization Transitions",
    description: "Smooth transitions between complex data states",
    category: "Data Viz",
    thumbnail: "/placeholder.svg",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Scroll-driven Storytelling",
    description: "Narrative unfolding through scroll-based animations",
    category: "Storytelling",
    thumbnail: "/placeholder.svg",
    videoUrl: "#"
  },
  {
    id: 6,
    title: "Typography Animation System",
    description: "Comprehensive system for animated text effects",
    category: "Typography",
    thumbnail: "/placeholder.svg",
    liveUrl: "#"
  }
];

const AnimationsGallery = () => {
  const [filter, setFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<AnimationProject | null>(null);
  
  const filteredProjects = filter === "all" 
    ? animationProjects 
    : animationProjects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  const categories = ["all", ...new Set(animationProjects.map(project => project.category.toLowerCase()))];

  return (
    <section id="animations" className="py-24 bg-portfolio-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Animations Gallery" 
            className="section-heading mx-auto" 
            as="h2" 
          />
          <AnimatedText 
            text="Explore my collection of experimental and commercial animations" 
            className="text-gray-400 mt-4 max-w-2xl mx-auto" 
            as="p" 
            animation="fade-in" 
            delay={200} 
          />
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === category
                  ? 'bg-portfolio-teal text-black'
                  : 'bg-portfolio-gray/50 hover:bg-portfolio-gray text-white'
              }`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animate">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-card border-portfolio-teal/20 overflow-hidden group">
              <CardContent className="p-0 relative">
                <div className="aspect-video bg-portfolio-gray overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-portfolio-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-3">
                      {project.videoUrl && (
                        <button 
                          onClick={() => setActiveItem(project)}
                          className="p-3 rounded-full bg-portfolio-teal text-black hover:bg-white transition-colors"
                        >
                          <Play size={20} />
                        </button>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-portfolio-teal text-black hover:bg-white transition-colors"
                        >
                          <Maximize2 size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-portfolio-gray/70 text-portfolio-teal">
                      {project.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* If no items match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No animations found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnimationsGallery;
