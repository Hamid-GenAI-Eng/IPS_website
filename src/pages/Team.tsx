
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in software development and business management, John leads our company's vision and strategy. His expertise in building scalable solutions has helped numerous enterprises achieve digital transformation.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Emily Johnson",
    role: "CTO",
    bio: "Emily brings 12 years of technical leadership experience, specializing in cloud architecture and AI solutions. She drives our technical innovation and ensures we stay at the forefront of technology.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "A full-stack developer with expertise in modern web technologies, Michael leads our development team in creating robust and scalable applications. He's passionate about code quality and mentoring.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Williams",
    role: "UX Designer",
    bio: "Sarah has transformed user experiences for numerous clients with her innovative design approach. She combines aesthetic excellence with user-centered design principles.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "David Martinez",
    role: "Project Manager",
    bio: "David excels in managing complex projects and ensuring timely delivery. His strategic approach and communication skills help maintain strong client relationships.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Lisa Zhang",
    role: "Data Scientist",
    bio: "Lisa leads our data analytics initiatives, helping clients derive meaningful insights from their data. Her expertise in machine learning drives our AI-powered solutions.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-ips-blue mb-6">Our Team</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the talented individuals who make IPS Technologies a leader in software solutions.
                Our diverse team brings together expertise from various domains to deliver excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-4xl font-bold text-ips-blue">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <h3 className="text-xl font-bold text-ips-blue text-center">{member.name}</h3>
                    <CardDescription className="text-center">{member.role}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 text-center mb-6">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="text-gray-500 hover:text-ips-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon size={20} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-gray-500 hover:text-ips-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon size={20} />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-gray-500 hover:text-ips-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon size={20} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;