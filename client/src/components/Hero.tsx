import papitaLogo from "@assets/Papita Brewing - logo_1750859264654.jpg";

export default function Hero() {
  const scrollToBeers = () => {
    const element = document.getElementById('beers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background image: Craft brewery interior with warm lighting and beer barrels */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <img src={papitaLogo} alt="Papita Brewing Logo" className="mx-auto mb-8 h-40 w-40 rounded-xl shadow-2xl object-contain bg-white p-2" />
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Welcome to <span className="papita-blue logo-font">Papita Brewing</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Where craft meets comfort. Quality beers, fast friendships, lasting memories and the perfect pace for life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToBeers}
            className="bg-papita-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <i className="fas fa-beer mr-2"></i>Explore Our Beers
          </button>
          <button 
            onClick={scrollToContact}
            className="border-2 border-white text-white hover:bg-white hover:text-papita-blue px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <i className="fas fa-map-marker-alt mr-2"></i>Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
