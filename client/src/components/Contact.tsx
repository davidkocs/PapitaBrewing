// Contact component without form - displays contact information only
import beerQuoteImage from "@assets/FB_IMG_1500294487723_1751229763762.jpg";

export default function Contact() {
  // Function to scroll to different sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-papita-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Contact Us</h2>
            <p className="text-xl papita-yellow max-w-3xl mx-auto">
              We'd love to hear from you! Whether you're curious about our latest brews, want a custom-made beer for a special event, or just want to say cheers.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-3xl font-display font-bold mb-8">Got questions? Want to chat beer?</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center">
                  <i className="fas fa-map-marker-alt papita-yellow mr-4 text-2xl"></i>
                  <div>
                    <a href="https://maps.google.com/?q=St.+Charles,+MO" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">St. Charles, MO</a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <i className="fas fa-envelope papita-yellow mr-4 text-2xl"></i>
                  <div>
                    <a href="mailto:david.kocs@papitabrewing.com" className="text-xl font-semibold hover:underline">david.kocs@papitabrewing.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fun beer quote image */}
            <div className="mt-12 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-sm">
                <img 
                  src={beerQuoteImage} 
                  alt="Funny craft beer quote about drinking as a hobby" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}