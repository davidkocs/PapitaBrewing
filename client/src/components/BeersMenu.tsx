export default function BeersMenu() {
  const beers = [
    {
      name: "Sloth's Slow IPA",
      abv: "7.2% ABV",
      ibu: "65 IBU",
      description: "A hop-forward IPA with tropical fruit notes and a smooth finish. Extended dry-hopping gives it complexity that unfolds slowly.",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Lazy Sunday Stout",
      abv: "8.5% ABV",
      ibu: "35 IBU",
      description: "Rich and velvety with notes of chocolate and coffee. Perfect for those moments when you want to slow down and savor.",
      price: "$8.00",
      image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Papita Wheat",
      abv: "5.2% ABV",
      ibu: "18 IBU",
      description: "Light and refreshing wheat beer with hints of citrus and coriander. Our signature brew that started it all.",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Hangout Amber",
      abv: "6.8% ABV",
      ibu: "28 IBU",
      description: "Smooth amber ale with caramel malts and subtle hop balance. The perfect beer for hanging out with friends.",
      price: "$7.00",
      image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Tropical Sloth Sour",
      abv: "4.8% ABV",
      ibu: "8 IBU",
      description: "Tart and refreshing with mango and passion fruit. A seasonal favorite that brings the tropics to your glass.",
      price: "$8.50",
      image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Chill Pilsner",
      abv: "5.6% ABV",
      ibu: "32 IBU",
      description: "Crisp and clean with a floral hop aroma. The perfect beer for those laid-back moments.",
      price: "$6.75",
      image: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="beers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold papita-blue mb-6">Our Craft Beers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each beer tells a story. Discover our rotating selection of handcrafted brews, 
            from hop-forward IPAs to smooth, malty stouts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beers.map((beer, index) => (
            <div key={index} className="brew-card bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img 
                src={beer.image} 
                alt={`${beer.name} beer`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold papita-brown mb-2">{beer.name}</h3>
                <p className="papita-red font-semibold mb-3">{beer.abv} | {beer.ibu}</p>
                <p className="text-gray-700 mb-4">
                  {beer.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="papita-blue font-bold text-lg">{beer.price}</span>
                  <button className="bg-papita-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                    Try It
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
