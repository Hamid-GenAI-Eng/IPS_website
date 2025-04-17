
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    "10+ years of industry experience",
    "100+ successful projects delivered",
    "Team of 50+ skilled professionals",
    "Agile development methodology",
    "ISO certified quality processes",
    "24/7 technical support"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                {/* Placeholder for company image */}
                <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
  <img
    src="/images/office.PNG"
    alt="IPS Technologies"
    className="w-full h-full object-cover"
  />
</div>

              </div>
            </div>
            
            <div className="absolute top-10 -left-10 w-24 h-24 bg-blue-200 rounded-lg z-0"></div>
            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-gradient-to-br from-ips-accent to-blue-700 rounded-lg z-0"></div>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-ips-accent font-medium mb-2">About Our Company</p>
              <h2 className="text-3xl md:text-4xl font-bold text-ips-blue mb-4">
                Your Trusted Partner for Technology Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                IPS Technologies is a leading software development company founded in 2010. We specialize in delivering high-quality technology solutions to businesses of all sizes, from startups to large enterprises.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to help businesses leverage the power of technology to drive growth, improve efficiency, and stay ahead of the competition. We combine technical expertise with industry knowledge to deliver solutions that address real business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ips-accent shrink-0 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button asChild className="btn-primary px-8 py-6 text-base">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
