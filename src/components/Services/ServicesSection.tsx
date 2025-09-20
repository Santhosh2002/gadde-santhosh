import React from "react";
import AnimatedText from "../UI/AnimatedText";
import { Card, CardContent, CardFooter } from "@/components/UI/card";
import {
  Code,
  Globe,
  Wrench,
  Search,
  Server,
  ExternalLink,
} from "lucide-react";

type Service = {
  id: number;
  title: string;
  category: string;
  description: string;
  link?: string;
  icon: React.ReactNode;
  image?: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    category: "Frontend & Backend",
    description:
      "Building responsive, modern, and scalable websites using React, Next.js, Node.js, and .NET backends.",
    link: "https://yourportfolio.com/webdev",
    icon: <Code className="w-20 h-20 text-portfolio-teal opacity-20" />,
    image: "webdevelopment.png",
  },
  {
    id: 2,
    title: "Custom Development",
    category: "SaaS & Applications",
    description:
      "Developing tailored applications with AI integrations, dashboards, and microservice architectures.",
    link: "https://yourportfolio.com/customdev",
    icon: <Globe className="w-20 h-20 text-portfolio-teal opacity-20" />,
    image: "customdevelopment.jpg",
  },
  {
    id: 3,
    title: "Website Maintenance",
    category: "Support & Optimization",
    description:
      "Regular updates, bug fixes, speed optimization, and security enhancements to keep your site running smoothly.",
    link: "https://yourportfolio.com/maintenance",
    icon: <Wrench className="w-20 h-20 text-portfolio-teal opacity-20" />,
    image: "webmaintanence.jpg",
  },
  {
    id: 4,
    title: "SEO Optimization",
    category: "Search Engine Ranking",
    description:
      "Boost your website’s visibility on Google with SEO strategies including keyword research, on-page/off-page SEO, and performance improvements.",
    link: "https://yourportfolio.com/seo",
    icon: <Search className="w-20 h-20 text-portfolio-teal opacity-20" />,
    image: "seooptimization.jpg",
  },
  {
    id: 5,
    title: "Website Hosting",
    category: "Cloud & Servers",
    description:
      "Affordable and reliable hosting solutions with setup, SSL certificates, and server monitoring for uninterrupted performance.",
    link: "https://yourportfolio.com/hosting",
    icon: <Server className="w-20 h-20 text-portfolio-teal opacity-20" />,
    image: "webhosting.png",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 bg-portfolio-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Services"
            className="section-heading mx-auto"
            as="h2"
          />
          <AnimatedText
            text="Freelancing solutions to help you build and grow online"
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            as="p"
            animation="fade-in"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animate">
          {services.map((service) => (
            <Card
              key={service.id}
              className="glass-card border-portfolio-teal/20 overflow-hidden h-full flex flex-col"
            >
              <div className="h-80 bg-portfolio-gray relative overflow-hidden flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full absolute inset-0 opacity-70"
                />
              </div>

              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.category}</p>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>

              {service.link && (
                <CardFooter className="p-6 pt-0">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-teal hover:text-white transition-colors flex items-center gap-2"
                  >
                    Learn More <ExternalLink size={14} />
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
