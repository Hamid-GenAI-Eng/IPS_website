
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Built a scalable e-commerce platform with React and Node.js, featuring real-time inventory management and secure payment processing.",
    image: "/placeholder.svg",
    category: "web",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "Global Retail Inc.",
    duration: "6 months",
    challenge: "Creating a high-performance platform capable of handling thousands of concurrent users while maintaining real-time inventory accuracy."
  },
  {
    title: "Healthcare Management System",
    description: "Developed a comprehensive healthcare management system for tracking patient records and scheduling appointments.",
    image: "/placeholder.svg",
    category: "enterprise",
    tech: ["Angular", "Python", "PostgreSQL", "Docker"],
    client: "MedCare Solutions",
    duration: "8 months",
    challenge: "Ensuring HIPAA compliance while delivering a user-friendly interface for both medical staff and patients."
  },
  {
    title: "Mobile Banking App",
    description: "Created a secure mobile banking application with biometric authentication and real-time transaction tracking.",
    image: "/placeholder.svg",
    category: "mobile",
    tech: ["React Native", "Java", "Spring Boot", "Oracle"],
    client: "SecureBank Ltd.",
    duration: "12 months",
    challenge: "Implementing robust security measures while maintaining excellent app performance and user experience."
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Implemented an analytics dashboard with machine learning capabilities for business intelligence.",
    image: "/placeholder.svg",
    category: "enterprise",
    tech: ["Vue.js", "Python", "TensorFlow", "AWS"],
    client: "DataSmart Analytics",
    duration: "5 months",
    challenge: "Processing and visualizing large datasets in real-time while providing accurate AI-driven insights."
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GalleryHorizontal className="h-8 w-8 text-ips-accent" />
                <h1 className="text-4xl md:text-5xl font-bold text-ips-blue">Our Projects</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of successful projects where we've delivered innovative solutions
                to help businesses thrive in the digital age.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex justify-center mb-8">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise Solutions</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-ips-blue mb-2">Technologies Used:</h4>
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
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-ips-blue">Client:</p>
                            <p className="text-gray-600">{project.client}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-ips-blue">Duration:</p>
                            <p className="text-gray-600">{project.duration}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {["web", "mobile", "enterprise"].map((category) => (
                <TabsContent
                  key={category}
                  value={category}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {projects
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      // ... Same card component as in "all" tab
                      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-sm text-ips-blue mb-2">Technologies Used:</h4>
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
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="font-semibold text-ips-blue">Client:</p>
                                <p className="text-gray-600">{project.client}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-ips-blue">Duration:</p>
                                <p className="text-gray-600">{project.duration}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;