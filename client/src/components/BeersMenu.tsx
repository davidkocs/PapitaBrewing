import tenTenTwentyImage from "@assets/TenTenTwenty_1750875081132.jpg";
import threeToedImage from "@assets/3Toed_5x4_1750875505592.jpg";
import blondeChalkImage from "@assets/BlondeChalkAle_1750875866102.jpg";
import applesOfMyEyeImage from "@assets/ApplesOfMyEye_1750876020824.jpg";

export default function BeersMenu() {
  const beers = [
    {
      name: "3-Toed",
      abv: "7% ABV",
      ibu: "98 IBU",
      description: "Original IPA brewed by Papita Brewing to highlight the 3-Toed Sloth, the brewery namesake.",
      price: "$7.50",
      image: threeToedImage
    },
    {
      name: "Ten Ten Twenty",
      abv: "5.5% ABV",
      ibu: "77 IBU",
      description: "This hoppy american pale ale showcases citra hops and commemorates Megan and Collin's 10/10/20 wedding celebration.",
      price: "$7.50",
      image: tenTenTwentyImage
    },
    {
      name: "Blonde Chalk Ale",
      abv: "4.5% ABV",
      ibu: "21 IBU",
      description: "This light, easy drinking blond ale showcases a malt flavor with no hop bitterness and commemorates our Jayhawk family and friends.",
      price: "$6.50",
      image: blondeChalkImage
    },
    {
      name: "Apples of My Eye",
      abv: "6.4% ABV",
      ibu: "0 IBU",
      description: "This sweet hard cider showcases 100% fresh apples and commemorates Megan and Kerrie's preference for ciders instead of beer.",
      price: "$7.00",
      image: applesOfMyEyeImage
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
            <div key={index} className="brew-card bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <img 
                src={beer.image} 
                alt={`${beer.name} beer`} 
                className="w-full h-64 object-contain bg-gray-100"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold papita-brown mb-2">{beer.name}</h3>
                <p className="papita-red font-semibold mb-3">{beer.abv} | {beer.ibu}</p>
                <p className="text-gray-700 mb-4 flex-1">
                  {beer.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
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
