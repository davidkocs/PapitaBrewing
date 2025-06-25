export default function Events() {
  const events = [
    {
      date: "15",
      month: "JAN",
      title: "Brewery Tour & Tasting",
      description: "Join us for a behind-the-scenes look at our brewing process, followed by a guided tasting of our signature beers.",
      time: "3:00 PM - 5:00 PM",
      price: "$25",
      bgColor: "bg-papita-red",
      textColor: "text-white"
    },
    {
      date: "22",
      month: "JAN",
      title: "Trivia Night",
      description: "Test your knowledge while enjoying our craft beers. Prizes for the winning team!",
      time: "7:00 PM - 9:00 PM",
      price: "Free Entry",
      bgColor: "bg-papita-yellow",
      textColor: "text-papita-blue"
    },
    {
      date: "05",
      month: "FEB",
      title: "New Beer Release",
      description: "Be the first to try our latest seasonal brew: \"Hibernation Porter\" - rich, dark, and perfect for winter.",
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
            Join us for special events, tastings, and community gatherings. 
            There's always something brewing at Papita!
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
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <div className="flex justify-between items-center text-sm papita-blue">
                  <span><i className="fas fa-clock mr-1"></i>{event.time}</span>
                  <span><i className="fas fa-dollar-sign mr-1"></i>{event.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
