import React from "react";
import AnimatedText from "../UI/AnimatedText";
import { Card, CardContent, CardFooter } from "@/components/UI/card";
import { Award, Calendar, ExternalLink } from "lucide-react";

type Achievement = {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  certificateLink?: string;
  image: string;
};

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Best Employee Award",
    organization: "Reccopilot Inc.",
    date: "January 2025",
    description:
      "Recognized for outstanding contributions to product development, specifically for implementing innovative AI systems.",
    certificateLink:
      "https://www.linkedin.com/posts/sai-santhosh-gadde-3092a61ba_gratitude-recognition-employeeofthequarter-activity-7289258136610205696-LBsK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADLxzDkBjsAB_s_0k7MZPITcugNFITPIrzA",
    image: "./award.jpg",
  },
  {
    id: 2,
    title: "Unstop Awards",
    organization: "Flipkart Inc.",
    date: "September 2023",
    description:
      "Achieved a rank of Top 70 in the Unstop Competitive E-School Leader 2023 Nominations.",
    certificateLink:
      "https://unstop.com/awards/o/indian-institute-of-information-technology-iiit-vadodara-10554/2023",
    image: "./unstop.jpeg",
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-24 bg-portfolio-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Achievements"
            className="section-heading mx-auto"
            as="h2"
          />
          <AnimatedText
            text="Recognition for excellence in design and development"
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            as="p"
            animation="fade-in"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animate">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="glass-card border-portfolio-teal/20 overflow-hidden h-full flex flex-col"
            >
              <div className="h-60 bg-portfolio-gray relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-20 h-20 text-portfolio-teal opacity-20" />
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-portfolio-dark to-transparent h-1/2"></div>
              </div>

              <CardContent className="p-6 flex-grow">
                <div className="flex items-center text-sm text-portfolio-teal mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{achievement.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {achievement.organization}
                </p>
                <p className="text-gray-300">{achievement.description}</p>
              </CardContent>

              {achievement.certificateLink && (
                <CardFooter className="p-6 pt-0">
                  <a
                    href={achievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-teal hover:text-white transition-colors flex items-center gap-2"
                  >
                    View Certificate <ExternalLink size={14} />
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

export default AchievementsSection;
