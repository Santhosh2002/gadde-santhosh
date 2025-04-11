import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import AnimatedText from "../UI/AnimatedText";
import { ExternalLink } from "lucide-react";

type FreelanceProject = {
  id: number;
  title: string;
  client: string;
  description: string;
  testimonial: string;
  clientName: string;
  clientPosition: string;
  image: string;
  link?: string;
};

const freelanceProjects: FreelanceProject[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    client: "Fashion Boutique",
    description:
      "Complete UI/UX overhaul with custom animations and improved user flow, resulting in 40% increase in conversion rates.",
    testimonial:
      "The redesign completely transformed our online presence. The animations and smooth interactions have made our brand stand out in a crowded market.",
    clientName: "Sarah Johnson",
    clientPosition: "Marketing Director",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile App Animation System",
    client: "Health Tech Startup",
    description:
      "Created a comprehensive animation system for a healthcare mobile app, enhancing user engagement and simplifying complex medical information.",
    testimonial:
      "The animations made complex health data easy to understand. Our user engagement metrics have improved significantly since implementation.",
    clientName: "Michael Chen",
    clientPosition: "Product Manager",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Interactive Dashboard",
    client: "Financial Services Company",
    description:
      "Designed and developed an interactive data visualization dashboard with real-time animations for financial metrics tracking.",
    testimonial:
      "The dashboard has revolutionized how we present data to our clients. The animations make complex financial information accessible and engaging.",
    clientName: "Jennifer Williams",
    clientPosition: "CTO",
    image: "/placeholder.svg",
    link: "#",
  },
];

const FreelanceSection = () => {
  return (
    <section
      id="freelance"
      className="py-24 bg-portfolio-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Freelance Contributions"
            className="section-heading mx-auto"
            as="h2"
          />
          <AnimatedText
            text="Impactful projects delivered for clients worldwide"
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            as="p"
            animation="fade-in"
            delay={200}
          />
        </div>

        <div className="relative px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {freelanceProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="md:basis-1/2 lg:basis-1/3 h-full"
                >
                  <Card className="glass-card border-portfolio-teal/20 h-full flex flex-col">
                    <CardHeader>
                      <div className="overflow-hidden rounded-lg mb-4 aspect-video bg-portfolio-gray flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-16 h-16 opacity-50"
                        />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-portfolio-teal">
                        {project.client}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="mt-6 border-l-2 border-portfolio-teal pl-4 italic text-gray-400">
                        <p>"{project.testimonial}"</p>
                        <div className="mt-2 text-sm text-portfolio-teal">
                          <p>{project.clientName}</p>
                          <p>{project.clientPosition}</p>
                        </div>
                      </div>
                    </CardContent>
                    {project.link && (
                      <CardFooter>
                        <a
                          href={project.link}
                          className="text-portfolio-teal hover:text-white flex items-center gap-2 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      </CardFooter>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-6 border-portfolio-teal/50 hover:bg-portfolio-teal hover:text-black" />
            <CarouselNext className="absolute -right-6 border-portfolio-teal/50 hover:bg-portfolio-teal hover:text-black" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
