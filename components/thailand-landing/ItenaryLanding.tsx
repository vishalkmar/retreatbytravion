"use client";
import React from "react";
import { motion } from "framer-motion";

const ItineraryLanding = () => {
  const daysLeft = [
    {
      day: "1",
      title: "Arrival & Welcome",
      desc: [
        "Arrive at retreat center.",
        "Check-in and welcome drink.",
        "Evening meditation and group introduction.",
      ],
    },
    {
      day: "2",
      title: "Mindfulness & Nature Walk",
      desc: [
        "Morning yoga session.",
        "Guided forest walk with reflection time.",
        "Evening journaling under the stars.",
      ],
    },
    {
      day: "3",
      title: "Cultural Connection",
      desc: [
        "Local organic breakfast.",
        "Visit nearby village and meet artisans.",
        "Bonfire dinner with soulful music.",
      ],
    },
  ];

  const daysRight = [
    {
      day: "4",
      title: "Rejuvenation & Self-Care",
      desc: [
        "Morning breathing workshop.",
        "Spa therapy and relaxation time.",
        "Evening gratitude circle.",
      ],
    },
    {
      day: "5",
      title: "Departure & Reflection",
      desc: [
        "Sunrise meditation.",
        "Farewell breakfast.",
        "Sharing session and departure.",
      ],
    },
  ];

  const includes = [
    "Meals",
    "Workshops",
    "Accommodation",
    "Local Transport",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-100">
      {/* 🌄 Top Banner Section */}
      <div className="relative h-[280px] md:h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Retreat Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-2"
          >
            Five Days Retreat Itinerary
          </motion.h1>
          <p className="text-lg md:text-xl font-medium text-teal-100">
            Reconnect • Recharge • Renew
          </p>
        </div>
      </div>

      {/* Wavy border */}
      <div className="absolute top-[270px] md:top-[370px] left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.6c-58.9 4.2-113.75 22.2-172.6 26.8C743.17 115.9 672 97 600 97s-143.17 18.9-213.06 13.4C328.75 105.8 273.9 87.8 215 83.6 131.29 77.7 65.3 95.4 0 104.5V0h1200v104.5c-65.3-9.1-131.29-26.8-214.34-20.9z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-gray-800 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900"
        >
          Day-by-Day Itinerary
        </motion.h2>
        <p className="text-center text-lg text-emerald-700 mb-16">
          Experience serenity, mindfulness, and rejuvenation each day.
        </p>

        {/* Two column layout with double lines */}
        <div className="relative grid md:grid-cols-2 gap-16">
          {/* Center two connecting lines */}
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-[6px] h-full bg-gradient-to-b from-emerald-400 via-teal-500 to-sky-600 rounded-full"></div>
          <div className="hidden md:block absolute left-[calc(50%-20px)] top-0 w-[2px] h-full bg-gradient-to-b from-sky-400 to-emerald-500 rounded-full opacity-70"></div>
          <div className="hidden md:block absolute left-[calc(50%+20px)] top-0 w-[2px] h-full bg-gradient-to-b from-sky-400 to-emerald-500 rounded-full opacity-70"></div>

          {/* Left days */}
          <div className="space-y-12">
            {daysLeft.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white border border-emerald-100 shadow-lg rounded-3xl p-6 md:pr-10 hover:shadow-xl transition-all"
              >
                <div className="absolute -right-[34px] top-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  {item.day}
                </div>
                <h3 className="text-xl font-bold text-emerald-700 mb-2">
                  {item.title}
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  {item.desc.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right days */}
          <div className="space-y-12">
            {daysRight.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white border border-emerald-100 shadow-lg rounded-3xl p-6 md:pl-10 hover:shadow-xl transition-all"
              >
                <div className="absolute -left-[34px] top-6 bg-gradient-to-br from-teal-600 to-sky-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  {item.day}
                </div>
                <h3 className="text-xl font-bold text-emerald-700 mb-2">
                  {item.title}
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  {item.desc.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Includes Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Retreat Package Includes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {includes.map((inc, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-emerald-100 rounded-2xl shadow-sm py-5 font-medium text-gray-800"
              >
                <span className="inline-block text-emerald-600 font-bold mr-1">
                  {i + 1}.
                </span>
                {inc}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.6c-58.9 4.2-113.75 22.2-172.6 26.8C743.17 115.9 672 97 600 97s-143.17 18.9-213.06 13.4C328.75 105.8 273.9 87.8 215 83.6 131.29 77.7 65.3 95.4 0 104.5V0h1200v104.5c-65.3-9.1-131.29-26.8-214.34-20.9z"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  );
};

export default ItineraryLanding;
