import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../UI/AnimatedText";
import { Button } from "@/components/UI/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/UI/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "./Blogs";
import { blogPosts } from "./Blogs";
const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section
      id="blog"
      className="py-24 bg-portfolio-dark relative overflow-hidden"
    >
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
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    {post.title}
                  </h3>
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
                    <span className="mr-2 group-hover:mr-3 transition-all">
                      Read more
                    </span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
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
            onClick={() => navigate("/blog")}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
