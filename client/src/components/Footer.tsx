import papitaLogo from "@assets/Papita Brewing - logo_1750859264654.jpg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={papitaLogo} alt="Papita Brewing Logo" className="h-12 w-12 rounded-lg object-contain bg-white p-1" />
                <span className="text-2xl font-display font-bold">Papita Brewing</span>
              </div>
              <p className="text-gray-400 mb-4">
                Crafting exceptional beers with patience and passion. 
                Where every sip tells a story and every moment is worth savoring.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-papita-yellow transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-papita-yellow transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-papita-yellow transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-papita-yellow transition-colors">
                  <i className="fab fa-untappd text-xl"></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')} 
                    className="hover:text-papita-yellow transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="hover:text-papita-yellow transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('beers')} 
                    className="hover:text-papita-yellow transition-colors"
                  >
                    Our Beers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('events')} 
                    className="hover:text-papita-yellow transition-colors"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="hover:text-papita-yellow transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-display font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>123 Brewery Lane</div>
                <div>Craftville, CV 12345</div>
                <div>(555) 123-BREW</div>
                <div>hello@papitabrewing.com</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <div className="mb-4 md:mb-0">
                © 2024 Papita Brewing. All rights reserved. Drink responsibly.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-papita-yellow transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-papita-yellow transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
