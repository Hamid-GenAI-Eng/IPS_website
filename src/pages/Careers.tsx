
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon, GraduationCapIcon, RocketIcon, UsersIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const careers = [
  {
    title: "Software Engineer",
    description: "Join our development team to build innovative solutions using cutting-edge technologies.",
    requirements: [
      "Bachelor's degree in Computer Science",
      "3+ years of experience in software development",
      "Strong knowledge of modern frameworks (React, Node.js)",
      "Experience with cloud platforms (AWS, Azure)",
      "Excellent problem-solving skills"
    ],
    responsibilities: [
      "Design and implement scalable software solutions",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Participate in code reviews",
      "Mentor junior developers"
    ],
    icon: BriefcaseIcon
  },
  {
    title: "UI/UX Designer",
    description: "Create beautiful, intuitive user interfaces and experiences for our clients' products.",
    requirements: [
      "Proven UI/UX design experience",
      "Strong portfolio demonstrating UI design skills",
      "Proficiency in Figma and Adobe Creative Suite",
      "Understanding of user-centered design principles",
      "Experience with design systems"
    ],
    responsibilities: [
      "Create user-centered designs",
      "Develop UI mockups and prototypes",
      "Conduct user research and testing",
      "Collaborate with developers",
      "Maintain design system documentation"
    ],
    icon: RocketIcon
  },
  {
    title: "Project Manager",
    description: "Lead software development projects from inception to successful delivery.",
    requirements: [
      "PMP certification preferred",
      "5+ years in IT project management",
      "Strong understanding of Agile methodologies",
      "Excellent communication and leadership skills",
      "Experience with project management tools"
    ],
    responsibilities: [
      "Lead project planning and execution",
      "Manage project resources and timelines",
      "Facilitate team communication",
      "Monitor project progress and risks",
      "Report to stakeholders"
    ],
    icon: UsersIcon
  },
  {
    title: "Internship Program",
    description: "Start your tech career with our structured learning program for recent graduates.",
    requirements: [
      "Current student or recent graduate",
      "Strong academic performance",
      "Basic programming knowledge",
      "Eager to learn and grow",
      "Good communication skills"
    ],
    responsibilities: [
      "Learn from experienced mentors",
      "Work on real projects",
      "Participate in team meetings",
      "Complete training modules",
      "Present project results"
    ],
    icon: GraduationCapIcon
  }
];

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-ips-blue mb-6">Join Our Team</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our growing team.
                Explore our current openings and become part of our success story.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {careers.map((career, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-ips-accent/10 flex items-center justify-center text-ips-accent">
                        <career.icon size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{career.title}</CardTitle>
                        <CardDescription>{career.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-ips-blue">Requirements:</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {career.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-ips-blue">Key Responsibilities:</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {career.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <a href={`mailto:careers@ipstechnologies.com?subject=Application for ${career.title}`}>
                        Apply Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center bg-ips-accent/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-ips-blue mb-4">Don't see a position that matches your skills?</h3>
              <p className="text-gray-600 mb-6">
                We're always interested in meeting talented individuals. Send us your resume and we'll keep it on file for future opportunities.
              </p>
              <Button variant="outline" className="border-ips-accent text-ips-accent hover:bg-ips-accent hover:text-white" asChild>
                <a href="mailto:careers@ipstechnologies.com">Send Your Resume</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;