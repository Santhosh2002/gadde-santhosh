import React from "react";
import { Code, CheckCircle2, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const WebDevelopmentSection = () => {
  return (
    <section className="bg-portfolio-dark text-white">
      {/* Hero Section */}
      <div className="relative py-24 px-6 md:px-12 lg:px-20 text-center bg-gradient-to-r from-portfolio-gray to-portfolio-dark">
        <Code className="w-16 h-16 text-portfolio-teal mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Web Development Services
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          I build fast, responsive, and scalable websites tailored to your
          business needs — from simple landing pages to advanced SaaS platforms.
        </p>
        <div className="max-w-4xl mx-auto mb-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-xl shadow-lg"
          >
            <SwiperSlide>
              <img
                src="/Reccopilot.png"
                alt="Project 1"
                className="w-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/doctoo.png"
                alt="Project 2"
                className="w-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/burger.png"
                alt="Project 3"
                className="w-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-portfolio-teal text-black font-medium rounded-xl hover:bg-white transition"
        >
          Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          From frontend design to backend development, I provide end-to-end web
          solutions. My focus is on delivering clean, maintainable code with
          high-performance results. Every website I build is SEO-friendly,
          mobile-responsive, and optimized for growth.
        </p>
      </div>

      {/* Features */}
      <div className="bg-portfolio-gray py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What You Get
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Responsive design for all devices",
            "SEO-friendly architecture",
            "Performance optimization",
            "Secure backend & database integration",
            "Scalable cloud-ready solutions",
            "Ongoing support & maintenance",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-portfolio-dark p-6 rounded-xl border border-portfolio-teal/30 hover:shadow-lg transition"
            >
              <CheckCircle2 className="text-portfolio-teal w-6 h-6 mt-1" />
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">How I Work</h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            "Consultation",
            "Design",
            "Development",
            "Testing",
            "Launch & Support",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-portfolio-gray p-6 rounded-xl border border-portfolio-teal/30"
            >
              <div className="text-4xl font-bold text-portfolio-teal mb-2">
                {index + 1}
              </div>
              <h3 className="font-medium">{step}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-portfolio-gray py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          {[
            "React",
            "Next.js",
            "Node.js",
            ".NET",
            "TailwindCSS",
            "SQL / MongoDB",
            "Azure / AWS",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-portfolio-dark rounded-lg border border-portfolio-teal/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-portfolio-gray rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
            >
              <div className="h-40 bg-gray-700 flex items-center justify-center text-gray-400">
                Project Screenshot {project}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Project {project}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Short description of the project goes here, highlighting
                  business impact and technologies used.
                </p>
                <a
                  href="#"
                  className="text-portfolio-teal hover:text-white transition text-sm flex items-center gap-1"
                >
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-portfolio-teal to-portfolio-dark py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Ready to Build Your Website?
        </h2>
        <p className="text-black mb-6">
          Let’s create something amazing for your business.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition"
        >
          Contact Me <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
