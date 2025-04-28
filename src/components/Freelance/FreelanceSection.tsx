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
    title: "Office Core SSO",
    client: "Office Core Inc.",
    description:
      "An auth system for Office Core's web applications, integrating with existing systems and enhancing security protocols. with Single Sign-On (SSO) capabilities. allowing users to access multiple applications with a single set of credentials.",
    testimonial:
      "The SSO system has streamlined our user experience and significantly improved security. The integration was seamless, and the team was highly responsive to our needs.",
    clientName: "Lagvendra",
    clientPosition: "Developer, Office Core",
    image: "./freelance-officecore.png",
  },
  {
    id: 2,
    title: "Real Estate Website Development & SEO Optimization",
    client: "RK Realtors & Consultants",
    description:
      "Designed and developed a modern, responsive website for a real estate firm, featuring property listings, lead capture forms, and SEO-optimized content to improve online visibility.",
    testimonial:
      "The new website truly elevated our brand. Clients now find us more easily, and the clean design helps them navigate listings effortlessly.",
    clientName: "Rahul",
    clientPosition: "Board Member, RK Realtors",
    image: "./rk-freelance.png",
    link: "https://www.rkrealco.com",
  },

  {
    id: 3,
    title: "Login/Sigup, Google Authentication",
    client: "MyLynk",
    description:
      "Developed a secure login/signup system with Google authentication for MyLynk's web application. This feature enhances user experience by allowing users to log in using their Google accounts, streamlining the registration process.",
    testimonial:
      "The Google authentication feature has made our app much more user-friendly. Users love the convenience of logging in with their Google accounts.",
    clientName: "Anmol",
    clientPosition: "Founder, Valencware",
    image: "./mylynk-freelance-4.png",
    link: "https://valenceware.com",
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
                        <img src={project.image} alt={project.title} />
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
