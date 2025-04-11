
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts, BlogPost } from '../components/Blog/BlogSection';
import AnimatedText from '../components/UI/AnimatedText';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';
import { Separator } from '@/components/ui/separator';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    if (id) {
      const blogPost = blogPosts.find(post => post.id === parseInt(id));
      if (blogPost) {
        setPost(blogPost);
      } else {
        // If post not found, redirect to blog page
        navigate('/blog');
      }
    }
  }, [id, navigate]);
  
  if (!post) {
    return (
      <div className="bg-portfolio-dark text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-portfolio-dark text-white min-h-screen">
      <Navbar />
      
      <article className="py-24 bg-portfolio-dark relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            variant="outline"
            className="mb-8 flex items-center text-portfolio-teal border-portfolio-teal"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Articles
          </Button>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-portfolio-teal text-black text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            
            <AnimatedText 
              text={post.title} 
              className="text-3xl md:text-4xl font-bold mb-6" 
              animation="fade-in-up"
            />
            
            <div className="flex items-center text-sm text-gray-400 mb-8">
              <Calendar size={16} className="mr-1" />
              <span className="mr-4">{post.date}</span>
              <Clock size={16} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-10 h-[400px]">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">{post.excerpt}</p>
            
            <p className="mb-6">
              {post.content || "Full article content will go here. This is a placeholder for the detailed content of the blog post."}
            </p>
            
            <p className="mb-6">
              Animation plays a crucial role in modern web development. It's not just about making things look pretty—it's about creating intuitive, engaging user experiences that guide users through digital interfaces naturally and effectively.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-6">Key Principles of Effective UI Animation</h2>
            
            <p className="mb-6">
              When implementing animations in user interfaces, there are several principles to consider:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Purpose: Every animation should serve a clear purpose, whether it's providing feedback, guiding attention, or explaining changes.</li>
              <li>Timing: The duration and easing of animations are crucial for maintaining a natural feel.</li>
              <li>Subtlety: In most cases, subtle animations are more effective than flashy ones.</li>
              <li>Performance: Animations should never compromise the performance of the application.</li>
            </ul>
            
            <p className="mb-6">
              By following these principles, developers can create animations that enhance rather than detract from the user experience.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-6">Looking Forward</h2>
            
            <p>
              As web technologies continue to evolve, the possibilities for animation in user interfaces will only expand. From 3D effects to physics-based interactions, the future of UI animation is bright and full of potential for creating even more engaging, intuitive user experiences.
            </p>
          </div>
          
          <Separator className="my-10 bg-gray-700" />
          
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium mb-1">Share this article</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
            
            <Button
              onClick={() => navigate('/blog')}
              variant="outline"
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-black"
            >
              More Articles
            </Button>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
