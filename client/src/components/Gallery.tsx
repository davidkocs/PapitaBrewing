export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Brewery interior with copper tanks"
    },
    {
      src: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Beer tasting flight"
    },
    {
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Brewery staff working"
    },
    {
      src: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Brewery taproom atmosphere"
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
