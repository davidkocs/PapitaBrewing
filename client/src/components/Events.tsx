export default function Events() {
  const events = [
    {
      date: "1",
      month: "AUG",
      title: "Summer Beers",
      description: "What's more refreshing than a creamy, juicy milkshake IPA bursting with fruit flavor. We are releasing sunshine in a glass - Raspberry Phog. Chill one, sip slow, and let summer happen.",
      time: "7:00 PM - 9:00 PM",
      price: "Free Entry",
      bgColor: "bg-papita-yellow",
      textColor: "text-papita-blue"
    },
    {
      date: "10",
      month: "OCT",
      title: "Megan & Collin 5th Anniversary",
      description: "It's the annual release of Ten Ten Twenty to celebrate Megan & Collin's wedding anniversary. The original wedding day beer is brewed annually and tapped in their home for family and friends to enjoy.",
      time: "4:00 PM - 8:00 PM",
      price: "Limited Release",
      bgColor: "bg-papita-brown",
      textColor: "text-white"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold papita-blue mb-6">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There's always something brewing at Papita Brewing! Here are some upcoming special events, new releases, and community gatherings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${event.bgColor} ${event.textColor} p-4`}>
                <div className="text-center">
                  <div className="text-3xl font-bold">{event.date}</div>
                  <div className="text-sm">{event.month}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold papita-brown mb-2">{event.title}</h3>
                <p className="text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
