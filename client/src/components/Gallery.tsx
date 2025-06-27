import blondeChalksBottles from "@assets/20201006_191609_1750965949029.jpg";
import brewingProcess from "@assets/20230624_042937_1750965949032.jpg";
import tapHandles from "@assets/20230708_161210_1750965949036.jpg";
import kegeratorSetup from "@assets/f4afaae5-604f-4760-ac1f-a26ac8b3069b_1750965949042.jpg";
import brewingVideo from "@assets/20250606_172531 - Trim_1750966357311.mp4";

export default function Gallery() {
  const galleryItems = [
    {
      src: brewingProcess,
      alt: "Brewing process with grain in the mash tun",
      type: "image"
    },
    {
      src: brewingVideo,
      alt: "Brewing process video",
      type: "video"
    },
    {
      src: tapHandles,
      alt: "Custom tap handles showing beer selection",
      type: "image"
    },
    {
      src: blondeChalksBottles,
      alt: "Blonde Chalk Ale bottles ready for distribution",
      type: "image"
    },
    {
      src: kegeratorSetup,
      alt: "Kegerator setup with Papita Brewing branding",
      type: "image"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-papita-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Brewery</h2>
          <p className="text-xl papita-yellow max-w-3xl mx-auto">
            We are a small-batch home brewery crafting quality beers for family and friends. We don't just make beer - we make good times, great stories, lasting memories, and unforgettable sips. Come for the craft, stay for the community.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            item.type === "video" ? (
              <video 
                key={index}
                src={item.src}
                className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                controls
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                key={index}
                src={item.src} 
                alt={item.alt} 
                className="w-full h-48 md:h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
