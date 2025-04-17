import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-ips-blue">IPS <span className="text-ips-accent">Technologies</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-gray-700 hover:text-ips-accent transition-colors">Home</a>
            <a href="#services" className="font-medium text-gray-700 hover:text-ips-accent transition-colors">Services</a>
            <a href="#about" className="font-medium text-gray-700 hover:text-ips-accent transition-colors">About</a>
            <a href="#projects" className="font-medium text-gray-700 hover:text-ips-accent transition-colors">Projects</a>
            <a href="#team" className="font-medium text-gray-700 hover:text-ips-accent transition-colors">Team</a>
            <a href="#careers" className="font-medium text-gray-700 hover:text-ips-accent transition-colors">Careers</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-ips-accent transition-colors">Contact</a>
          </nav>

          {/* CTA Button and Mobile Menu Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-primary px-6 py-2">
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="font-medium text-gray-700 hover:text-ips-accent transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#services" className="font-medium text-gray-700 hover:text-ips-accent transition-colors py-2" onClick={toggleMenu}>Services</a>
            <a href="#about" className="font-medium text-gray-700 hover:text-ips-accent transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#projects" className="font-medium text-gray-700 hover:text-ips-accent transition-colors py-2" onClick={toggleMenu}>Projects</a>
            <a href="#team" className="font-medium text-gray-700 hover:text-ips-accent transition-colors py-2" onClick={toggleMenu}>Team</a>
            <a href="#careers" className="font-medium text-gray-700 hover:text-ips-accent transition-colors py-2" onClick={toggleMenu}>Careers</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-ips-accent transition-colors py-2" onClick={toggleMenu}>Contact</a>
            <Button asChild className="btn-primary w-full py-2">
              <a href="#contact" onClick={toggleMenu}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
