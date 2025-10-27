/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Coffee, Sunrise, Heart, Mountain } from "lucide-react";

const ItineraryLandingV2 = () => {
  const days = [
    {
      day: "Day 1",
      title: "Arrival & Grounding",
      desc: "Arrive at the serene retreat space. Evening tea circle and gentle breathwork to settle into the environment.",
      icon: <Leaf className="w-6 h-6 text-white" />,
      color: "from-emerald-400 to-teal-500",
    },
    {
      day: "Day 2",
      title: "Inner Stillness",
      desc: "Morning yoga and meditation followed by creative journaling and an open evening discussion.",
      icon: <Mountain className="w-6 h-6 text-white" />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      day: "Day 3",
      title: "Nature Connection",
      desc: "Guided forest walk and mindful silence practice. Spend time with yourself in nature’s embrace.",
      icon: <Heart className="w-6 h-6 text-white" />,
      color: "from-pink-400 to-rose-500",
    },
    {
      day: "Day 4",
      title: "Reflection & Rebirth",
      desc: "Morning sound bath and sharing circle. Journaling for clarity and envisioning new paths ahead.",
      icon: <Coffee className="w-6 h-6 text-white" />,
      color: "from-purple-400 to-fuchsia-500",
    },
    {
      day: "Day 5",
      title: "Departure with Gratitude",
      desc: "Final sunrise meditation followed by closing gratitude ritual and healthy breakfast before departure.",
      icon: <Sunrise className="w-6 h-6 text-white" />,
      color: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-sky-50 via-white to-emerald-50 py-16 md:py-28 overflow-hidden">
      {/* Top Banner */}
      <div className="relative mb-16 md:mb-24">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
          alt="Retreat Banner"
          className="w-full h-[280px] md:h-[400px] object-cover rounded-b-[40px] shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white/60 rounded-b-[40px]" />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-semibold drop-shadow-lg">
            5-Day Rejuvenation Retreat
          </h1>
          <p className="mt-3 text-lg opacity-90">
            Flow through calm, clarity, and connection
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Connector Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-300 via-cyan-300 to-rose-300 rounded-full"></div>

        <div className="flex flex-col gap-16 relative z-10">
          {days.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div
                className={`bg-white shadow-lg rounded-2xl p-8 md:w-[48%] z-10 border border-gray-100 relative ${
                  i % 2 === 0
                    ? "md:ml-8 md:text-left text-center"
                    : "md:mr-8 md:text-right text-center"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${d.color} text-white shadow-md absolute ${
                    i % 2 === 0
                      ? "md:-left-6 md:top-6 left-1/2 -translate-x-1/2 -top-8"
                      : "md:-right-6 md:top-6 right-1/2 translate-x-1/2 -top-8"
                  }`}
                >
                  {d.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                  {d.day}: {d.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{d.desc}</p>
              </div>

              {/* Connector Dots */}
              <div className="hidden md:flex flex-col items-center justify-center w-6">
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full shadow-md"></div>
                {i !== days.length - 1 && (
                  <div className="flex-1 w-[2px] bg-gradient-to-b from-cyan-200 to-rose-200"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20">
        <p className="text-gray-700 text-lg font-medium mb-4">
          “Every step leads you closer to peace.”
        </p>
        <button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all">
          View Full Experience
        </button>
      </div>
    </section>
  );
};

export default ItineraryLandingV2;
