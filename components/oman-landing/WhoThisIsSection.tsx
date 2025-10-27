/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const WhoThisIsForSection = () => {
  const points = [
    "Seek peace and clarity amid life’s fast pace",
    "Want to reconnect with nature and inner stillness",
    "Feel mentally or emotionally drained and crave renewal",
    "Wish to reflect deeply and realign their path in life",
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-emerald-50 to-emerald-100 overflow-hidden">
      {/* Soft abstract shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-emerald-200 opacity-25 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 opacity-25 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Who This Experience is For
          </h2>
          <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            This retreat welcomes seekers of peace, clarity, and rejuvenation — those ready to slow down and reconnect.
          </p>
        </motion.div>

        {/* Dynamic Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 via-white to-green-50 p-[1px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 transition-colors duration-500">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-green-500 to-teal-400 rounded-t-2xl"
                ></motion.div>
                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-base md:text-lg mt-16 italic text-center max-w-3xl mx-auto"
        >
          You don’t need experience with yoga or meditation — just the openness to slow down and rediscover your inner rhythm.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
