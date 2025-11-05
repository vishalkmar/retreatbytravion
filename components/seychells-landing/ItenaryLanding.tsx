"use client";
import React from "react";

const itineraryData = [
  {
    day: "01",
    title: "ARRIVAL IN SEYCHELLES",
    details: [
      "Arrival at Seychelles International Airport",
      "Warm welcome and transfer to resort",
      "Relax by the turquoise beaches",
    ],
    image: "/seychelles/1.jpg",
  },
  {
    day: "02",
    title: "ISLAND DISCOVERY",
    details: [
      "Morning yoga by the beach",
      "Explore Mahé Island and local Creole culture",
      "Evening meditation under palm trees",
    ],
    image: "/seychelles/2.jpg",
  },
  {
    day: "03",
    title: "ADVENTURE & NATURE",
    details: [
      "Hike through Morne Seychellois National Park",
      "Lunch with a view of the ocean",
      "Sunset boat cruise and reflection",
    ],
    image: "/seychelles/3.jpg",
  },
  {
    day: "04",
    title: "CULTURE & CONNECTION",
    details: [
      "Cultural tour of Victoria Market",
      "Cooking workshop with local chef",
      "Evening community bonding",
    ],
    image: "/seychelles/4.jpg",
  },
  {
    day: "05",
    title: "RELAXATION & WELLNESS",
    details: [
      "Spa and wellness retreat experience",
      "Free time for snorkeling or kayaking",
      "Dinner by candlelight on the beach",
    ],
    image: "/seychelles/5.jpg",
  },
  {
    day: "06",
    title: "DEPARTURE",
    details: [
      "Farewell breakfast at the resort",
      "Sharing reflections and goodbyes",
      "Transfer to airport for flight home",
    ],
    image: "/seychelles/6.jpg",
  },
];

const SeychellesItinerary = () => {
  return (
    <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white overflow-hidden">
      {/* ---------- HEADER SECTION ---------- */}
      <div className="w-full text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-4">
          SEYCHELLES RETREAT ITINERARY
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
          A 6-day transformational journey designed to help you unwind, reconnect,
          and embrace the natural beauty of Seychelles — where the ocean meets serenity.
        </p>
      </div>

      {/* ---------- ITINERARY SECTION ---------- */}
      <div className="py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center">
          {itineraryData.map((day, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="relative mb-12 flex flex-col items-center">
                {/* White Curved Cap Outside Circle */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                  <svg
                    width="200"
                    height="80"
                    viewBox="0 0 200 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10,70 Q100,0 190,70"
                      fill="none"
                      stroke="white"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex justify-center items-start pt-6">
                    <span className="text-white font-bold text-base bg-emerald-400 px-3 py-1 rounded-full shadow">
                      Day {day.day}
                    </span>
                  </div>
                </div>

                {/* Circle Image */}
                <div className="w-52 h-52 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden border-[3px] border-white shadow-lg relative z-0">
                  <img
                    src={day.image}
                    alt={day.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold uppercase mb-4 text-emerald-400 tracking-wide">
                {day.title}
              </h3>

              {/* Details */}
              <ul className="text-base text-gray-200 space-y-2 leading-relaxed max-w-xs">
                {day.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeychellesItinerary;
