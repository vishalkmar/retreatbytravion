/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const SeychellesExperienceSection = () => {
  const points = [
    "Long for ocean serenity and soulful rejuvenation",
    "Wish to escape the rush and reconnect with nature’s rhythm",
    "Crave a reset for body, mind, and heart under the island sun",
    "Seek deeper reflection and inner calm surrounded by the sea",
  ];

  return (
    <section className="relative py-20 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-sky-50 via-cyan-50 to-emerald-100 overflow-hidden">
      {/* Ambient gradient waves */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent"
        >
          Who This Island Retreat is For
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          A haven for those who wish to slow down, breathe deeply, and rediscover balance among Seychelles’ turquoise waters and whispering palms.
        </motion.p>

        {/* Floating list style */}
        <div className="relative mt-14 flex flex-col gap-6 items-center">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex items-center gap-4 backdrop-blur-md bg-white/70 hover:bg-white/90 transition-all px-6 py-4 rounded-full shadow-sm hover:shadow-lg border border-white/40 w-fit"
            >
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500"></span>
              <p className="text-gray-800 text-base md:text-lg font-medium">{point}</p>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default SeychellesExperienceSection;
