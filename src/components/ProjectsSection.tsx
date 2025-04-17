
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GalleryHorizontal } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Built a scalable e-commerce platform with React and Node.js, featuring real-time inventory management and secure payment processing.",
    image: "/placeholder.svg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Healthcare Management System",
    description: "Developed a comprehensive healthcare management system for tracking patient records and scheduling appointments.",
    image: "/placeholder.svg",
    tech: ["Angular", "Python", "PostgreSQL", "Docker"]
  },
  {
    title: "Mobile Banking App",
    description: "Created a secure mobile banking application with biometric authentication and real-time transaction tracking.",
    image: "/placeholder.svg",
    tech: ["React Native", "Java", "Spring Boot", "Oracle"]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Implemented an analytics dashboard with machine learning capabilities for business intelligence.",
    image: "/placeholder.svg",
    tech: ["Vue.js", "Python", "TensorFlow", "AWS"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GalleryHorizontal className="h-8 w-8 text-ips-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-ips-blue">Our Projects</h2>
          </div>
          <p className="text-lg text-ips-gray max-w-2xl mx-auto">
            Discover our portfolio of successful projects where we've delivered innovative solutions to help businesses thrive.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardHeader>
                    <div className="aspect-video bg-gray-100 rounded-md mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-ips-accent/10 text-ips-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;