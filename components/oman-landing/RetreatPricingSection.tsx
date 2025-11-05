/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { lato } from "@/lib/fonts";

const RetreatPricingSection = () => {
  const inclusions = [
    "3 Nights Stay",
    "All Vegetarian Meals",
    "Daily Yoga & Meditation",
    "Sound Healing Sessions",
    "Naad Activities",
    "Relaxation Therapies",
    "Group Ceremonies",
  ];

  const exclusions = [
    "Personal Therapies",
    "Flights",
    "Additional Personal Expenses",
  ];

  return (
   <section className={`${lato.variable} relative overflow-hidden py-24 px-6 md:px-12 bg-gradient-to-b from-emerald-50 via-white to-teal-50`}>
      {/* Floating blurred backgrounds */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-200 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 opacity-25 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Your <span className="text-emerald-600">Retreat Investment</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          We believe wellness should be accessible — experience 3 transformative days in Oman designed to restore your energy and awaken your inner harmony.
        </motion.p>

        {/* Price Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mt-14 mx-auto max-w-md bg-white/40 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-2xl p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-5xl md:text-6xl font-extrabold text-emerald-700 mb-3">
              ₹39,999
            </h3>
            <p className="text-gray-700 text-base mb-6">
              Full access to your wellness journey – stay, meals, sessions & more.
            </p>
            <a
              href="#"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Reserve Your Spot
            </a>
          </div>
        </motion.div>

        {/* Dynamic Lists */}
        <div className="mt-20 flex flex-col md:flex-row justify-center gap-12">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex justify-center items-center gap-2">
              <CheckCircle className="text-emerald-600 w-6 h-6" />
              What’s Included
            </h3>
            <ul className="flex flex-wrap justify-center gap-3">
              {inclusions.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-100/70 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Excluded */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1 bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-red-100 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-teal-700 mb-6 flex justify-center items-center gap-2">
              <XCircle className="text-teal-600 w-6 h-6" />
              What’s Not Included
            </h3>
            <ul className="flex flex-wrap justify-center gap-3">
              {exclusions.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-50 border border-red-100 text-red-600 px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-gray-500 italic max-w-2xl mx-auto"
        >
          Each price includes a holistic experience carefully curated to rejuvenate your mind, body, and soul amidst Oman’s serene landscapes.
        </motion.p>
      </div>
    </section>
  );
};

export default RetreatPricingSection;
