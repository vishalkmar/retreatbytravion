import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';

const itinerary = [
  {
    day: 1,
    title: "Arrival at Pattaya City",
    highlights: [
      "Flight from DEL to BKK (10:15 am from IGI Airport T3)",
      "Transfers from the airport to Arawana Regency North Pattaya (SIC)",
      "Dinner at a local restaurant"
    ],
    image: "https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 2,
    title: "Pattaya Day Tour",
    highlights: [
      "Breakfast at the hotel",
      "Full-day Pattaya tour with Indian lunch (Nong Nooch Botanical Garden, Big Buddha & Viewpoint)",
      "Rest at hotel"
    ],
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 3,
    title: "Coral Island & Tiger Park",
    highlights: [
      "Breakfast at the hotel",
      "Coral Island day tour by speedboat with Indian lunch",
      "Tiger Park Pattaya (SIC)",
      "Rest at hotel"
    ],
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 4,
    title: "Bangkok Half-Day City Tour",
    highlights: [
      "Breakfast at the hotel",
      "Checkout from Arawana Regency North Pattaya",
      "Transfers from Pattaya to Bangkok hotel (SIC)",
      "Check-in at Golden Tulip Mandison Suites",
      "Bangkok Temple & City Tour (Golden Buddha / Marble Temple)"
    ],
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 5,
    title: "Safari World & Marine Park Tour",
    highlights: [
      "Breakfast at the hotel",
      "Safari World & Marine Park with lunch (SIC)"
    ],
    image: "https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    day: 6,
    title: "Check-Out & Departure",
    highlights: [
      "Breakfast at the hotel",
      "Shopping at Indra Market (around 1 hour)",
      "Transfers from Bangkok hotel to the airport (SIC)",
      "Flight from BKK to DEL (8:40 am from Suvarnabhumi Airport)"
    ],
    image: "https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function ThailandItinerary() {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            5 Days Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Thailand Itinerary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {itinerary.map((day, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={day.day}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
              >
                <div className="lg:w-1/2 relative">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${isEven ? 'from-blue-200 to-cyan-200' : 'from-cyan-200 to-blue-200'} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>

                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
                    <img
                      src={day.image}
                      alt={day.title}
                      className="w-full h-72 md:h-46 object-cover"
                    />

                    <div className="absolute top-6 left-6 z-20">
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-2 text-blue-600">
                          <Calendar className="w-5 h-5" />
                          <span className="text-2xl font-bold">Day {day.day}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className={`inline-block bg-gradient-to-r ${isEven ? 'from-blue-500 to-cyan-500' : 'from-cyan-500 to-blue-500'} text-transparent bg-clip-text`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#00a3af] ">{day.title}</h3>
                  </div>

                  <div className="space-y-1">
                    {day.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 items-start bg-white/70 backdrop-blur-sm p-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-2 border border-blue-100"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${isEven ? 'from-blue-400 to-cyan-400' : 'from-cyan-400 to-blue-400'} flex items-center justify-center shadow-lg`}>
                          <Clock className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed pt-1.5">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* <div className={`h-1 w-32 bg-gradient-to-r ${isEven ? 'from-blue-400 to-cyan-400' : 'from-cyan-400 to-blue-400'} rounded-full`}></div> */}
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
