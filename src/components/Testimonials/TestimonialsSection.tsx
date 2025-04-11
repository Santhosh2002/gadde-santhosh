import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";
import AnimatedText from "../UI/AnimatedText";
import { Card, CardContent } from "@/components/UI/card";
import { Quote } from "lucide-react";

type Testimonial = {
  id: number;
  content: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Working with this developer was an absolute pleasure. Their attention to detail and animation expertise brought our project to life in ways we couldn't have imagined.",
    name: "Alexandra Chen",
    position: "Product Manager",
    company: "TechInnovate Inc.",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    content:
      "The UI/UX solutions provided were not only visually stunning but also incredibly functional. The animations added a layer of polish that made our app stand out from competitors.",
    name: "Marcus Johnson",
    position: "CTO",
    company: "Digital Frontiers",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    content:
      "I was impressed by how seamlessly the animations enhanced the user experience without compromising performance. The attention to micro-interactions made all the difference.",
    name: "Sophia Williams",
    position: "Creative Director",
    company: "Design Collective",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    content:
      "Exceptional work ethic and technical skill. The developer consistently delivered beyond expectations and was able to translate our vision into beautiful, functional interfaces.",
    name: "Raj Patel",
    position: "Founder",
    company: "NextGen Solutions",
    avatar: "/placeholder.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-portfolio-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Testimonials"
            className="section-heading mx-auto"
            as="h2"
          />
          <AnimatedText
            text="What clients and colleagues say about my work"
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            as="p"
            animation="fade-in"
            delay={200}
          />
        </div>

        <div className="relative px-12">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-1">
                    <Card className="glass-card border-portfolio-teal/20 h-full flex flex-col">
                      <CardContent className="pt-6 px-6 pb-6 flex flex-col h-full">
                        <Quote className="text-portfolio-teal mb-4 w-10 h-10" />
                        <p className="text-gray-300 italic flex-grow">
                          "{testimonial.content}"
                        </p>

                        <div className="flex items-center mt-6 pt-6 border-t border-white/10">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-portfolio-gray flex items-center justify-center mr-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-6 h-6 opacity-50"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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

export default TestimonialsSection;
