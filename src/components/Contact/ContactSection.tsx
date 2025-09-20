import React from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../UI/AnimatedText";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
      variant: "default",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-portfolio-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container">
        <AnimatedText
          text="Get In Touch"
          className="section-heading mb-16"
          animation="fade-in-up"
        />

        <AnimatedText
          text="Let's collaborate to create something amazing together"
          className="text-xl text-gray-300 mb-16 max-w-2xl"
          animation="fade-in-up"
          delay={100}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-portfolio-teal mr-4" size={20} />
                  <a
                    href="mailto:saisanthoshgadde2002@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    saisanthoshgadde2002@gmail.com
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone className="text-portfolio-teal mr-4" size={20} />
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 9515871972
                  </a>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-portfolio-teal mr-4" size={20} />
                  <span className="text-gray-300">Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <h3 className="text-2xl font-semibold mb-6">Connect</h3>
              <div className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/in/sai-santhosh-gadde-3092a61ba"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-portfolio-gray hover:bg-portfolio-teal hover:text-black transition-all duration-300"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/Santhosh2002"
                  target="_blank"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-portfolio-gray hover:bg-portfolio-teal hover:text-black transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://x.com/gadde_santhosh"
                  target="_blank"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-portfolio-gray hover:bg-portfolio-teal hover:text-black transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href="https://www.instagram.com/_santhosh10"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-portfolio-gray hover:bg-portfolio-teal hover:text-black transition-all duration-300"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-in-up glass-card p-8 rounded-xl"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form
              action="https://formsubmit.co/saisanthoshgadde2002@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-portfolio-gray/50 border border-white/10 rounded-lg focus:outline-none focus:border-portfolio-teal text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-portfolio-gray/50 border border-white/10 rounded-lg focus:outline-none focus:border-portfolio-teal text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-portfolio-gray/50 border border-white/10 rounded-lg focus:outline-none focus:border-portfolio-teal text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  className="w-full px-4 py-3 bg-portfolio-gray/50 border border-white/10 rounded-lg focus:outline-none focus:border-portfolio-teal text-white resize-none"
                  required
                ></textarea>
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <button
                type="submit"
                className="px-8 py-3 bg-portfolio-teal text-black font-medium rounded-lg hover:bg-white transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
