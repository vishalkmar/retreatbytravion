"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { lato } from "@/lib/fonts";
const itinerary = [
  {
    day: 1,
    title: "Arrival & Muscat City Tour",
    highlights: [
      "Airport pickup & hotel check-in",
      "Muscat City Tour – Qurum Park, Mutrah Souq, Corniche, National Museum",
    ],
  },
  {
    day: 2,
    title: "Nizwa Fort & Al Hoota Cave",
    highlights: [
      "Breakfast at hotel",
      "Explore historic Nizwa Fort",
      "Visit Al Hoota Cave and return by evening",
    ],
  },
  {
    day: 3,
    title: "Dolphin Watching & Leisure",
    highlights: [
      "Early morning dolphin watching cruise",
      "Afternoon free for leisure",
    ],
  },
  {
    day: 4,
    title: "Leisure & Optional Tours",
    highlights: [
      "Relax at hotel or choose optional tours",
      "Wahiba Sands Desert Safari or Wadi Bani Khalid",
    ],
  },
  {
    day: 5,
    title: "Departure & Optional Activities",
    highlights: [
      "Breakfast & checkout",
      "Optional coastal tour to Sur or shopping",
    ],
  },
];

export default function DynamicOmanItinerary() {
  return (
    <section
     className={`${lato.variable} relative text-white overflow-hidden py-24 px-6 md:px-12`}
      style={{
        backgroundImage: `url('/oman-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        clipPath:
          "polygon(0 8%, 100% 0, 100% 92%, 0% 100%)", // creates the curved tilt at top & bottom
      }}
    >
      {/* soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100 backdrop-blur-sm"></div>

      {/* glowing orbs */}
      <div className="absolute top-16 left-12 w-64 h-64 bg-teal-400/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-12 w-96 h-96 bg-green-400/25 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#a87000]  text-4xl md:text-6xl font-extrabold mb-4"
        >
          Oman Journey Experience
        </motion.h2>
       

        {/* Timeline */}
        <div className="relative before:absolute before:left-1/2 before:top-0 before:h-full before:w-[3px] before:bg-gradient-to-b before:from-teal-300 before:via-green-400 before:to-teal-500">
          {itinerary.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center md:justify-between mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Connector dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-[6px] border-teal-400 w-6 h-6 rounded-full z-10 shadow-lg"></div>

              {/* Glass Card */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? -1 : 1 }}
                className="  bg-gradient-to-b from-emerald-900/70 via-emerald-800/60 to-emerald-900/80
                           backdrop-blur-md border border-white/20 p-[2px] rounded-[2rem] 
                           mx-4 mt-8 md:mt-0 shadow-[0_8px_40px_rgba(0,0,0,0.2)]
                           hover:border-teal-400/40 transition-all duration-500"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-6 w-full md:w-[480px]">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-white drop-shadow-sm">
                      {day.title}
                    </h3>
                    <span className="text-sm  bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold px-3 py-1 rounded-full font-medium">
                      Day {day.day}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {day.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-startn text-[1rem] text-gray-100 gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-300 mt-1" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
    </section>
  );
}
