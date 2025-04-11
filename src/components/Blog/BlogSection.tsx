
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedText from '../UI/AnimatedText';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content?: string; // Full content for the blog post
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Creating Performant UI Animations: Best Practices",
    excerpt: "Learn how to create smooth animations that don't compromise your application's performance.",
    date: "April 5, 2025",
    readTime: "6 min read",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1633355444132-695d5876cd00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: "Creating performant animations is essential for a smooth user experience. In this article, we'll explore techniques to optimize animations, including GPU acceleration, requestAnimationFrame, and smart throttling. We'll also cover common pitfalls and how to avoid them when implementing complex UI animations in modern web applications."
  },
  {
    id: 2,
    title: "The Psychology of Motion: Designing Meaningful Animations",
    excerpt: "Discover how thoughtful animation can improve user experience and create emotional connections.",
    date: "March 22, 2025",
    readTime: "8 min read",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: "Animation is more than just aesthetics—it's about psychology. This article dives into the emotional impact of motion design, explaining how proper timing, easing, and purpose can create interfaces that feel more human and intuitive. We'll explore real-world examples and research that demonstrate how thoughtful animations can reduce cognitive load and create memorable experiences."
  },
  {
    id: 3,
    title: "Implementing 3D Elements in Web Interfaces",
    excerpt: "A comprehensive guide to adding 3D elements to your web projects using Three.js and React.",
    date: "March 10, 2025",
    readTime: "12 min read",
    category: "3D Development",
    image: "https://images.unsplash.com/photo-1633354931133-49ce2107b5b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: "3D web experiences are becoming increasingly popular. This comprehensive guide walks through implementing 3D elements in React applications using Three.js. Starting with basic scene setup and progressing to advanced techniques like post-processing and performance optimization, you'll learn how to create immersive 3D experiences that work across devices."
  },
  {
    id: 4,
    title: "State Management Patterns for Animation in React",
    excerpt: "Explore different approaches to managing state for complex animations in React applications.",
    date: "February 28, 2025",
    readTime: "7 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: "Managing state for complex animations presents unique challenges. This article compares different approaches to animation state management in React, from useState and useReducer to specialized libraries like Framer Motion and React Spring. We'll analyze trade-offs in terms of performance, developer experience, and implementation complexity."
  },
  {
    id: 5,
    title: "Case Study: Revitalizing a Fintech App with Motion Design",
    excerpt: "How strategic use of animation transformed a complex financial application's user experience.",
    date: "February 15, 2025",
    readTime: "10 min read",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: "This case study examines how we transformed a fintech application's user experience through strategic motion design. With a focus on data visualization transitions, microinteractions, and guided user flows, we'll show how animation improved user comprehension and engagement with complex financial data, resulting in measurable improvements in user retention and satisfaction."
  },
  {
    id: 6,
    title: "Animation Accessibility: Ensuring Inclusive Motion Design",
    excerpt: "Guidelines and techniques for creating animations that respect user preferences and accessibility needs.",
    date: "February 3, 2025",
    readTime: "5 min read",
    category: "Accessibility",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: "Accessibility should never be an afterthought in animation design. This article covers essential techniques for creating inclusive animations, from respecting reduced-motion preferences to ensuring animations don't trigger vestibular disorders. Learn practical implementation strategies and testing methods to ensure your motion design enhances the experience for all users, regardless of their abilities."
  }
];

const BlogSection = () => {
  const navigate = useNavigate();
  
  const handleReadMore = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section id="blog" className="py-24 bg-portfolio-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Blog & Insights" 
            className="section-heading mx-auto" 
            as="h2" 
          />
          <AnimatedText 
            text="Thoughts on UI/UX, animation, and development" 
            className="text-gray-400 mt-4 max-w-2xl mx-auto" 
            as="p" 
            animation="fade-in" 
            delay={200} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="block h-full transform transition-transform duration-300 hover:-translate-y-2"
            >
              <Card className="glass-card border-portfolio-teal/20 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 right-4 bg-portfolio-teal text-black px-3 py-1 text-xs font-semibold rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <CardHeader className="px-6 pb-0 pt-5">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{post.title}</h3>
                </CardHeader>
                
                <CardContent className="px-6 py-4 flex-grow">
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                </CardContent>
                
                <CardFooter className="px-6 pb-5">
                  <Button
                    variant="ghost"
                    onClick={() => handleReadMore(post.id)}
                    className="flex items-center text-portfolio-teal hover:text-portfolio-teal/80 group p-0"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">Read more</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-black"
            onClick={() => navigate('/blog')}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
