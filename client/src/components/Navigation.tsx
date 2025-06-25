import { useState, useEffect } from "react";
import papitaLogo from "@assets/Papita Brewing - logo_1750859264654.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'sticky-nav' : 'bg-papita-blue'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src={papitaLogo} alt="Papita Brewing Logo" className="h-12 w-12 rounded-full" />
            <span className="text-white text-xl font-bold">Papita Brewing</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-papita-yellow transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-papita-yellow transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('beers')} className="text-white hover:text-papita-yellow transition-colors">
              Our Beers
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-papita-yellow transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('events')} className="text-white hover:text-papita-yellow transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-papita-yellow transition-colors">
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-papita-yellow transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-papita-yellow transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('beers')} className="text-white hover:text-papita-yellow transition-colors text-left">
                Our Beers
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-papita-yellow transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('events')} className="text-white hover:text-papita-yellow transition-colors text-left">
                Events
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-papita-yellow transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
