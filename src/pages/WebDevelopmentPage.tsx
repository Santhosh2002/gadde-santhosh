import React, { useEffect } from "react";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import WebDevelopmentSection from "@/components/Services/WebDevelopmentSection";

const WebDevelopment = () => {
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
      <WebDevelopmentSection />
      <Footer />
    </div>
  );
};

export default WebDevelopment;
