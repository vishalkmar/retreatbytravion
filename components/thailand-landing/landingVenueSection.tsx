/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LandingVenueSection() {
  const images = [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1400",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400",
  ];

  const [selected, setSelected] = useState(images[0]);

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #d2f7e4 0%, #e7fff4 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at 10% 10%, transparent 18px, black 20px), radial-gradient(circle at 90% 90%, transparent 18px, black 20px)",
        WebkitMaskComposite: "destination-in",
        maskComposite: "intersect",
        borderRadius: "60px",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-700 drop-shadow-sm">
            Thailand Venue Experience
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Discover a paradise where nature, culture, and mindfulness meet —
            immerse yourself in the timeless beauty of Thailand’s coastlines,
            temples, and tranquility.
          </p>
        </motion.div>

        {/* Main Two-Column Layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-14">
          {/* Left Gallery */}
          <div className="md:w-[65%] space-y-6">
            {/* Main Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img
                src={selected}
                alt="Venue"
                className="w-full h-[520px] object-cover"
              />
            </motion.div>

            {/* Clickable Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setSelected(img)}
                  className={`cursor-pointer rounded-xl object-cover h-28 w-full transition-all duration-300 ${
                    selected === img
                      ? "ring-4 ring-emerald-500"
                      : "opacity-80 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-[35%] md:pl-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 leading-tight">
              A Serene Escape Awaits
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Step into a journey where lush greenery meets crystal-clear
              waters. This Thailand retreat blends mindful relaxation with
              tropical elegance — indulge in authentic wellness rituals,
              rejuvenating spa sessions, and sunset meditations by the sea.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Whether you seek inner calm or a connection with nature, each
              experience is crafted to bring harmony to your mind, body, and
              spirit.
            </p>

            <a
              href="#book-now"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-3 rounded-full font-medium shadow-lg transition-all"
            >
              Discover This Venue
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
