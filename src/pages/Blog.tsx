
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../components/Blog/BlogSection';
import AnimatedText from '../components/UI/AnimatedText';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';

const Blog = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-portfolio-dark text-white min-h-screen">
      <Navbar />
      
      <section className="py-24 bg-portfolio-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div>
              <AnimatedText 
                text="All Articles" 
                className="text-4xl md:text-5xl font-bold text-gradient mb-2" 
              />
              <p className="text-gray-400">Explore insights on UI/UX, animation, and development</p>
            </div>
            
            <Button 
              variant="outline"
              className="mt-4 md:mt-0 flex items-center text-portfolio-teal border-portfolio-teal"
              onClick={() => navigate('/')}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="block h-full transform transition-transform duration-300 hover:-translate-y-2"
              >
                <Card className="glass-card border-portfolio-teal/20 overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-portfolio-teal/10 transition-all">
                  <div className="h-52 overflow-hidden relative">
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
                      onClick={() => navigate(`/blog/${post.id}`)}
                      className="flex items-center text-portfolio-teal hover:text-portfolio-teal/80 group p-0"
                    >
                      <span className="mr-2 group-hover:mr-3 transition-all">Read full article</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
