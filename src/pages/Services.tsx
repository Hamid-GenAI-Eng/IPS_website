
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, BarChart, Smartphone, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your specific business requirements.",
    icon: Code,
    details: "Our expert team leverages cutting-edge technologies to deliver custom software solutions that perfectly align with your business objectives. We follow industry best practices and agile methodologies to ensure high-quality, scalable, and maintainable software."
  },
  {
    title: "Web Application Development",
    description: "Responsive and scalable web applications built with modern technologies.",
    icon: Globe,
    details: "From simple websites to complex web applications, we create responsive and user-friendly solutions using the latest web technologies. Our focus is on delivering seamless user experiences across all devices."
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
    details: "We specialize in developing high-performance mobile applications that provide exceptional user experiences. Whether you need a native app or a cross-platform solution, we've got you covered."
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise-level software for streamlining your business processes.",
    icon: Database,
    details: "Transform your business operations with our enterprise solutions. We help organizations automate processes, improve efficiency, and make data-driven decisions."
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    icon: BarChart,
    details: "Unlock the power of your data with our advanced analytics solutions. We help you gather, process, and analyze data to make informed business decisions and gain competitive advantages."
  },
  {
    title: "Cybersecurity Services",
    description: "Protect your digital assets with our comprehensive security solutions.",
    icon: Shield,
    details: "In today's digital landscape, security is paramount. Our cybersecurity services help protect your business from threats while ensuring compliance with industry regulations."
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-ips-blue mb-6">Our Services</h1>
              <p className="text-lg text-gray-600">
                We offer comprehensive technology solutions to help businesses thrive in the digital age.
                Our expertise spans across various domains to meet your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-ips-accent/10 flex items-center justify-center text-ips-accent mb-4">
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold text-ips-blue">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.details}</p>
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

export default ServicesPage;
