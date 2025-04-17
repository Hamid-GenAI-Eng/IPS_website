
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => { 
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <p className="inline-block px-3 py-1 text-sm font-medium text-ips-accent bg-blue-100 rounded-full mb-4">
                Innovative Software Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ips-blue mb-4">
                Transforming Ideas Into <span className="text-gradient">Software Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                IPS Technologies delivers custom software development, enterprise solutions, and digital transformation services to businesses worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary px-8 py-6 text-base">
                <a href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 text-base border-2 text-ips-blue border-gray-300 hover:border-ips-accent">
                <a href="#services">Our Services</a>
              </Button>
            </div>
            
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 shadow-2xl border border-gray-200 card-shadow">
              <div className="h-[400px] bg-ips-blue/5 rounded-xl overflow-hidden p-4">
                <div className="w-full h-4 mb-4 flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 mb-3">
                  <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                    <div className="h-2 w-full bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-blue-200 rounded"></div>
                  </div>
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                    <div className="h-2 w-full bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-blue-200 rounded"></div>
                  </div>
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                    <div className="h-2 w-full bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-blue-200 rounded"></div>
                  </div>
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                    <div className="h-2 w-full bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-blue-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-ips-accent rounded-2xl z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl z-[-1] opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
