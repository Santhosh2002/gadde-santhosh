import React, { useEffect, useRef } from "react";
import { ArrowDown, Briefcase } from "lucide-react";
import AnimatedText from "../UI/AnimatedText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/UI/hover-card";

const HeroSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById("hero-container");
      const items = document.querySelectorAll(".parallax-item");

      if (hero) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        items.forEach((item, index) => {
          const speed = 1 + index * 0.5;
          const htmlItem = item as HTMLElement;

          const moveX = (x - 0.5) * speed * 30;
          const moveY = (y - 0.5) * speed * 30;

          htmlItem.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      }

      // Add 3D effect to profile picture
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = y * 0.02;
        const rotateY = -x * 0.02;

        profileRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-portfolio-purple/20 rounded-full blur-3xl parallax-item"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-portfolio-teal/20 rounded-full blur-3xl parallax-item"></div>
      </div>

      <div
        id="hero-container"
        className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto"
      >
        <div className="max-w-6xl mx-auto stagger-animate">
          {/* Role tag at the top - like in the image */}
          <div className="mb-6 animate-fade-in-up animation-delay-100">
            <span className="inline-block px-5 py-2 rounded-full bg-portfolio-gray/50 backdrop-blur-sm text-sm font-medium text-portfolio-teal border border-portfolio-teal/20">
              Software Engineer & Freelancer
            </span>
          </div>

          {/* Two column layout - Text on left, Profile on right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Text content - Left Column (3/5 width) */}
            <div className="md:col-span-3 text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                <AnimatedText
                  text="Creating digital"
                  className="block mb-2"
                  animation="fade-in-up"
                  delay={200}
                />
                <AnimatedText
                  text="experiences with"
                  className="block mb-2"
                  animation="fade-in-up"
                  delay={300}
                />
                <span className="text-gradient">precision and elegance</span>
              </h1>

              <p className="text-gray-400 text-lg max-w-xl mb-8 animate-fade-in-up animation-delay-400">
                I craft interfaces that tell stories through motion and code,
                bringing digital products to life with both technical precision
                and artistic sensibility.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-500">
                <a
                  href="#portfolio"
                  className="px-8 py-3 bg-portfolio-teal text-black font-medium rounded-full hover:bg-white transition-colors"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  About Me
                </a>
              </div>
            </div>

            {/* Profile Image - Right Column (2/5 width) */}
            <div className="md:col-span-2 flex justify-center md:justify-end animate-fade-in-up animation-delay-300">
              <div
                // ref={profileRef}
                className="relative transition-transform duration-200 ease-out"
              >
                <div className="absolute -inset-6 bg-gradient-to-r rounded-full blur opacity-50 animate-pulse"></div>

                <Avatar className="w-80 h-80 sm:w-80 sm:h-80 border-4 border-portfolio-teal shadow-lg shadow-portfolio-teal/20 cursor-pointer bg-transparent">
                  <AvatarImage src="./pixar1.png" />
                  <AvatarFallback className="bg-portfolio-gray text-5xl font-bold">
                    JS
                  </AvatarFallback>
                </Avatar>
                <div className=" mt-4 flex flex-col space-y-2 glass-card w-80 z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                  <h4 className="text-xl font-semibold">Gadde Sai Santhosh</h4>
                  <p className="text-sm text-gray-400">
                    Software Engineer with 1.5+ years of experience creating
                    immersive digital experiences
                  </p>
                  <div className="flex items-center text-sm">
                    <Briefcase className="mr-1 h-4 w-4 text-portfolio-teal" />
                    <span>Software Engineer at Reccopilot Inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <ArrowDown className="text-portfolio-teal" size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
