"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

export default function ItinerarySection() {
  const inclusions = [
    "Flights, Hotel, and All Transfers",
    "Daily breakfast at the hotel",
    "Full-day Pattaya tour (Nong Nooch Botanical Garden, Big Buddha & Viewpoint) with Indian lunch",
    "Coral Island day tour by speedboat with Indian lunch",
    "Tiger Park Pattaya entry",
    "Safari World & Marine Park tour with lunch",
    "Bangkok city tour covering Golden Buddha & Marble Temple",
  ];

  const exclusions = [
    "Personal expenses: minibar, beverages, room service, laundry, phone calls, porterage, tips",
    "Early check-in / late check-out charges (Standard: Check-in 2 PM, Check-out 12 PM)",
    "Items not listed under Package Inclusions",
    "Meals/services not specified in itinerary",
    "GST @5%; TCS – 5% for travel under ₹7L/year, 20% for over ₹10L/year",
  ];

  const QuadGallery = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?auto=format&fit=crop&w=1950&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2560&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-10 lg:px-12 bg-gradient-to-br from-[#f3fbff] via-[#ecf7f9] to-[#f6fcff]">
      {/* soft gradient blobs */}
      <div className="absolute top-[-60px] left-10 w-72 h-72 bg-[#b8e1ef]/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-10 w-96 h-96 bg-[#d6f4fa]/40 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-16">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-[#12394a] mb-3 text-center lg:text-left"
          >
            Thailand <span className="text-[#00a3af]">Retreat Experience</span>
          </motion.h2>

          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed text-center lg:text-left max-w-lg">
            Discover serene beaches, lush islands, and the charm of Thai culture
            — a perfect balance of peace and adventure.
          </p>

          {/* PRICE */}
          <div className="mb-8 text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#009ea3] drop-shadow-sm">
              ₹44,999
            </h3>
            <p className="text-[#64c3ce] font-medium mt-1">
              per person (all inclusive)
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
            {/* INCLUDED */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-5 border border-white/40 shadow-sm flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-[#009ea3] mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-[#00b3b3]" />
                Included
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-snug">
                {inclusions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 hover:translate-x-1 transition-transform"
                  >
                    <span className="w-2 h-2 mt-2 bg-[#00a3af] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* EXCLUDED */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-5 border border-white/40 shadow-sm flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-[#ff6f6f] mb-4 flex items-center gap-2">
                <XCircle className="text-[#ff6f6f]" />
                Not Included
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-snug">
                {exclusions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 hover:translate-x-1 transition-transform"
                  >
                    <span className="w-2 h-2 mt-2 bg-[#ff6f6f] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE - QUAD GALLERY */}
       <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex-1 relative flex justify-center items-center"
>
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 sm:gap-7 w-full max-w-2xl">
    {QuadGallery.map(({ imageLink }, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="relative aspect-[1/1.3] sm:aspect-[4/2.8]"
      >
        <Image
          src={imageLink}
          alt={`Gallery ${index + 1}`}
          fill
          className="rounded-2xl object-cover shadow-lg hover:scale-[1.05] transition-transform duration-500"
        />
      </motion.div>
    ))}
  </div>

  {/* glow */}
  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#93e2f0]/30 blur-3xl rounded-full"></div>
</motion.div>

      </div>
    </section>
  );
}
