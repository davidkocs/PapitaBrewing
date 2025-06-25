export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 sloth-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold papita-blue mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like our mascot, we believe in taking things slow. Every beer is crafted with patience, 
              passion, and a commitment to quality that can't be rushed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Brewery founders working with brewing equipment */}
              <img 
                src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Brewery founders crafting beer" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold papita-brown mb-6">The Papita Philosophy</h3>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2018 by a group of friends who shared a love for great beer and the simple pleasures of life, 
                Papita Brewing embodies the spirit of taking time to enjoy what matters most.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our sloth mascot isn't just cute - it's a reminder that the best things in life aren't rushed. 
                From our extended fermentation processes to our cozy taproom atmosphere, we're all about 
                savoring the moment.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-papita-yellow papita-blue px-4 py-2 rounded-full font-semibold">Small Batch</span>
                <span className="bg-papita-yellow papita-blue px-4 py-2 rounded-full font-semibold">Locally Sourced</span>
                <span className="bg-papita-yellow papita-blue px-4 py-2 rounded-full font-semibold">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
