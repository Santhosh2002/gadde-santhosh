import React, { useEffect } from "react";
import Navbar from "../components/UI/Navbar";
import HeroSection from "../components/Hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import SkillsSection from "../components/Skills/SkillsSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import AnimationsGallery from "../components/Animations/AnimationsGallery";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import AchievementsSection from "../components/Achievements/AchievementsSection";
import ResumeSection from "../components/Resume/ResumeSection";
import BlogSection from "../components/Blog/BlogSection";
import FreelanceSection from "../components/Freelance/FreelanceSection";
import ContactSection from "../components/Contact/ContactSection";
import EducationSection from "../components/Education/EducationSection";
import Footer from "../components/UI/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize scroll-based animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".stagger-animate > *");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up");
              // Fix TypeScript error by casting to HTMLElement before accessing style property
              const target = entry.target as HTMLElement;
              target.style.opacity = "1";
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));
    };

    animateOnScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="bg-portfolio-dark text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <PortfolioSection />
      <FreelanceSection />
      <AnimationsGallery />
      <TestimonialsSection />
      <AchievementsSection />
      <ResumeSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
