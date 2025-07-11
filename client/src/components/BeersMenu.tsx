import tenTenTwentyImage from "@assets/TenTenTwenty_1750875081132.jpg";
import threeToedImage from "@assets/3Toed_5x4_1750875505592.jpg";
import blondeChalkImage from "@assets/BlondeChalkAle_1750875866102.jpg";
import applesOfMyEyeImage from "@assets/ApplesOfMyEye_1750876020824.jpg";
import iDoHefeweizen from "@assets/I DO Hefeweizen option 2_1750876155957.jpg";
import hoppilyEverAfterImage from "@assets/Hoppily Wheat Ale Final_1750890179307.png";
import hairOfThePhogImage from "@assets/20160104_195455_1750891192618.jpg";
import toHaveAndToHazeImage from "@assets/IMG_20250711_133849_1752259793456.png";

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
      name: "Hair of the Phog",
      abv: "4.7% ABV",
      ibu: "67 IBU",
      description: "Flagship Hazy IPA bursting with citrus and tangerine flavor. Tradition beer for the annual KU basketball game at Allen Fieldhouse with friends.",
      price: "$7.50",
      image: hairOfThePhogImage
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
      name: "I DO Hefeweizen",
      abv: "4.6% ABV",
      ibu: "14 IBU",
      description: "Refreshing, unfiltered wheat beer with notes of banana, clove, and citrus. Commemorates Eric and Maddy's 12-11-21 wedding celebration.",
      price: "$6.50",
      image: iDoHefeweizen
    },
    {
      name: "Hoppily Ever After",
      abv: "4.6% ABV",
      ibu: "7 IBU",
      description: "Light, easy-drinking ale with a crisp finish. Commemorates Zach and Jordyn's July 12, 2025 wedding celebration.",
      price: "$6.50",
      image: hoppilyEverAfterImage
    },
    {
      name: "To Have and To Haze",
      abv: "5.9% ABV",
      ibu: "75 IBU",
      description: "A refreshing Mango Citra Milkshake IPA brewed in the spirit of celebration. When the groom's parents wanted more beer to fuel the pre- and post-wedding festivities, this juicy tribute to friendship was born.",
      price: "$7.50",
      image: toHaveAndToHazeImage
    },
    {
      name: "Apples of My Eye",
      abv: "6.4% ABV",
      ibu: "0 IBU",
      description: "This sweet hard cider showcases 100% fresh apples and commemorates Megan and Kerrie's preference for ciders instead of beer.",
      price: "$7.00",
      image: applesOfMyEyeImage
    }
  ];

  return (
    <section id="beers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold papita-blue mb-6">Our Craft Beers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each beer tells a story. Discover some of our popular handcrafted beers, 
            from hop-forward IPAs to smooth, easy-drinking malty ales. Our beer recipes are designed for special events or year round enjoyment by friends and family.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
            Find our full selection of Papita Brewing beers on{" "}
            <a 
              href="https://untappd.com/PapitaBrewing/beer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="papita-blue hover:underline font-semibold"
            >
              Untappd
            </a>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beers.map((beer, index) => (
            <div key={index} className="brew-card bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <img 
                src={beer.image} 
                alt={`${beer.name} beer`} 
                className="w-full h-64 object-contain bg-white image-rendering-crisp"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.1) brightness(1.05)'
                }}
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold papita-brown mb-2">{beer.name}</h3>
                <p className="papita-red font-semibold mb-3">{beer.abv} | {beer.ibu}</p>
                <p className="text-gray-700 mb-4 flex-1">
                  {beer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
