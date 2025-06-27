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
                <span className="text-2xl font-display font-bold logo-font">Papita Brewing</span>
                <a href="https://untappd.com/PapitaBrewing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-papita-yellow transition-colors ml-3">
                  <i className="fab fa-untappd text-xl"></i>
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                Crafting exceptional beers with patience and passion. 
                Where every sip tells a story and every moment is worth savoring.
              </p>
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
              <h4 className="text-lg font-display font-bold mb-4">Got questions? Want to chat beer?</h4>
              <div className="space-y-2 text-gray-400">
                <div>St. Charles, MO</div>
                <div>david.kocs@papitabrewing.com</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400">
              © 2025 Papita Brewing. All rights reserved. Drink responsibly.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
