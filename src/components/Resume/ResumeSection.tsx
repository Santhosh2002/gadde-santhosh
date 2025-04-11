
import React, { useState } from 'react';
import AnimatedText from '../UI/AnimatedText';
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from 'lucide-react';

const ResumeSection = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const resumeUrl = "#"; // Replace with actual resume URL

  return (
    <section id="resume" className="py-24 bg-portfolio-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Resume" 
            className="section-heading mx-auto" 
            as="h2" 
          />
          <AnimatedText 
            text="My professional journey and qualifications" 
            className="text-gray-400 mt-4 max-w-2xl mx-auto" 
            as="p" 
            animation="fade-in" 
            delay={200} 
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card border-portfolio-teal/20 p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <FileText className="w-12 h-12 text-portfolio-teal mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">My Resume</h3>
                  <p className="text-gray-400">Updated: April 2025</p>
                </div>
              </div>
              
              <div className="flex gap-4 flex-wrap justify-center">
                <Button
                  variant="outline"
                  className="border-portfolio-teal/50 hover:bg-portfolio-teal hover:text-black"
                  onClick={() => setIsViewerOpen(true)}
                >
                  <Eye className="mr-2 h-4 w-4" /> View Resume
                </Button>
                <Button
                  className="bg-portfolio-teal text-black hover:bg-white"
                  onClick={() => window.open(resumeUrl, '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>
            </div>
          </div>
          
          {isViewerOpen && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl h-[80vh] bg-portfolio-gray rounded-lg">
                <Button
                  variant="outline"
                  className="absolute top-4 right-4 z-10"
                  onClick={() => setIsViewerOpen(false)}
                >
                  Close
                </Button>
                <div className="w-full h-full p-4">
                  <div className="w-full h-full flex items-center justify-center bg-portfolio-dark rounded">
                    {/* Replace with actual PDF viewer or iframe */}
                    <div className="text-center">
                      <FileText className="w-16 h-16 mx-auto text-portfolio-teal mb-4 opacity-50" />
                      <p className="text-gray-400">PDF Viewer would be implemented here</p>
                      <p className="text-gray-500 text-sm mt-2">Using a PDF viewer library like react-pdf</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-8">
            <p className="text-gray-400">Looking for a more detailed overview of my professional experience?</p>
            <div className="mt-4 flex justify-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-teal hover:text-white transition-colors"
              >
                Visit my LinkedIn Profile
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="#contact" 
                className="text-portfolio-teal hover:text-white transition-colors"
              >
                Contact me directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
