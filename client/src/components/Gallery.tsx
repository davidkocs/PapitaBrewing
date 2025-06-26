import blondeChalksBottles from "@assets/20201006_191609_1750965949029.jpg";
import brewingProcess from "@assets/20230624_042937_1750965949032.jpg";
import tapHandles from "@assets/20230708_161210_1750965949036.jpg";
import kegeratorSetup from "@assets/f4afaae5-604f-4760-ac1f-a26ac8b3069b_1750965949042.jpg";

export default function Gallery() {
  const galleryImages = [
    {
      src: brewingProcess,
      alt: "Brewing process with grain in the mash tun"
    },
    {
      src: tapHandles,
      alt: "Custom tap handles showing beer selection"
    },
    {
      src: blondeChalksBottles,
      alt: "Blonde Chalk Ale bottles ready for distribution"
    },
    {
      src: kegeratorSetup,
      alt: "Kegerator setup with Papita Brewing branding"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-papita-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Brewery</h2>
          <p className="text-xl papita-yellow max-w-3xl mx-auto">
            Take a peek inside our brewing process and taproom atmosphere. 
            Every corner tells the story of our passion for craft beer.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt} 
              className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
