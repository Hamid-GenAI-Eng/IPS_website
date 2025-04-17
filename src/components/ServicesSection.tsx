
import { 
  Code, Database, Globe, BarChart, Smartphone, Shield 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your specific business requirements.",
    icon: Code,
  },
  {
    title: "Web Application Development",
    description: "Responsive and scalable web applications built with modern technologies.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
  },
  {
    title: "AI/ML Solutions",
    description: "Comprehensive enterprise-level software for streamlining your business processes.",
    icon: Database,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    icon: BarChart,
  },
  {
    title: "GenAI Services",
    description: "Protect your digital assets with our comprehensive security solutions.",
    icon: Shield,
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-ips-accent font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ips-blue mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-gray-600">
            We offer a wide range of services tailored to meet the diverse needs of businesses across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 card-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-ips-accent mb-4">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-ips-blue">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
