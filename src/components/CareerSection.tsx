
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon, GraduationCapIcon, RocketIcon, UsersIcon } from "lucide-react";

const CareerSection = () => {
  const careers = [
    {
      title: "ASP.NET CORE Intern",
      description: "Join our development team to build innovative solutions using cutting-edge technologies.",
      requirements: ["Bachelor's degree in Computer Science", "3+ years of experience", "Strong knowledge of modern frameworks"],
      icon: <BriefcaseIcon className="h-10 w-10 text-ips-accent mb-4" />
    },
    {
      title: "Python Backend Intern",
      description: "Create beautiful, intuitive user interfaces and experiences for our clients' products.",
      requirements: ["Design portfolio", "Experience with Figma/Adobe XD", "Understanding of user-centered design principles"],
      icon: <RocketIcon className="h-10 w-10 text-ips-accent mb-4" />
    },
    {
      title: "MERN Stack Intern",
      description: "Lead software development projects from inception to successful delivery.",
      requirements: ["PMP certification preferred", "5+ years in IT project management", "Excellent communication skills"],
      icon: <UsersIcon className="h-10 w-10 text-ips-accent mb-4" />
    },
    {
      title: "AI/ML Intern",
      description: "Start your tech career with our structured learning program for recent graduates.",
      requirements: ["Current student or recent graduate", "Passionate about technology", "Eager to learn and grow"],
      icon: <GraduationCapIcon className="h-10 w-10 text-ips-accent mb-4" />
    }
  ];

  return (
    <section id="careers" className="section-padding bg-ips-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <div className="w-16 h-1 bg-ips-accent mx-auto mb-6"></div>
          <p className="text-ips-gray max-w-3xl mx-auto">
            We're always looking for talented individuals to join our growing team. 
            Check out our current openings and become part of our success story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {careers.map((career, index) => (
            <Card key={index} className="card-shadow h-full">
              <CardHeader className="text-center">
                <div className="flex justify-center">
                  {career.icon}
                </div>
                <CardTitle className="text-xl">{career.title}</CardTitle>
                <CardDescription>{career.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2 text-sm text-ips-gray">Requirements:</h4>
                <ul className="list-disc pl-5 text-sm text-ips-gray">
                  {career.requirements.map((req, i) => (
                    <li key={i} className="mb-1">{req}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Button className="btn-primary w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-6 text-ips-gray">
            Don't see a position that matches your skills? Send us your resume anyway!
          </p>
          <Button asChild variant="outline" className="border-ips-accent text-ips-accent hover:bg-ips-accent hover:text-white">
            <a href="mailto:careers@ipstechnologies.com">
              Send Your Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
