
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-ips-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">IPS Technologies</h3>
            <p className="text-gray-300 mb-4">
              Delivering innovative software solutions to help businesses grow and succeed in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Custom Software Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Web Application Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Enterprise Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Tech Park, Business District</li>
              <li className="text-gray-300">City, Country</li>
              <li className="text-gray-300">+1 (123) 456-7890</li>
              <li><a href="mailto:info@ipstechnologies.com" className="text-gray-300 hover:text-white transition-colors">info@ipstechnologies.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} IPS Technologies Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUpCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
