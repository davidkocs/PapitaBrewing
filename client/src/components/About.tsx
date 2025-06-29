import papitaGlassImage from "@assets/result_1611708279095_1751229553705.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 sloth-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold papita-blue mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like the sloth, we believe in taking things slow. Every beer is crafted with patience, 
              passion, and a commitment to quality that can't be rushed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              {/* Papita Brewing glass with sloth mascot logo */}
              <img 
                src={papitaGlassImage} 
                alt="Papita Brewing glass with sloth mascot logo" 
                className="rounded-xl shadow-lg max-w-sm h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold papita-brown mb-6">Papita History</h3>
              <p className="text-lg text-gray-700 mb-6">
                Papita Brewing is the culmination of David Kocs' love for unique craft beers, 15 years of homebrewing, formal education in brewing science and operations, and more than 25 years of successful business ownership.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The Papita Brewing name is inspired by a special memory signifying the close relationship to his daughters, Megan and Kerrie. The term "Papita" originated on a trip to Costa Rica in 2018. During a tropical rain forest tour, Megan and Kerrie held a baby sloth. The sloth used its claws to grasp their shirt and closely hold on for comfort and safety. The girls began referring to David as Papa Sloth, which transformed to Papita.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our sloth mascot isn't just cute - it's a reminder that the best things in life aren't rushed. 
                Papita Brewing embodies the spirit of taking time to enjoy what matters most. We share a love for 
                great beer, the simple pleasures of life, and savoring the moment.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-papita-yellow papita-blue px-4 py-2 rounded-full font-semibold">Small Batch</span>
                <span className="bg-papita-yellow papita-blue px-4 py-2 rounded-full font-semibold">Locally Sourced</span>
                <span className="bg-papita-yellow papita-blue px-4 py-2 rounded-full font-semibold">Sloth-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
