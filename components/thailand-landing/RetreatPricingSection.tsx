/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const RetreatPricingSection = () => {
  const inclusions = [
    "3 Nights Stay",
    "All Vegetarian Meals",
    "Daily Yoga & Meditation",
    "Sound Healing Sessions",
    "Relaxation Therapies",
    "Group Ceremonies",
  ];

  const exclusions = [
    "Personal Therapies",
    "Flights",
    "Additional Personal Expenses",
  ];

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8"
        >
          Your <span className="text-teal-600">Seychelles Retreat Package</span>
        </motion.h2>

        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          Experience the calm and rejuvenation of Seychelles — a retreat designed
          to restore your body, mind, and spirit.
        </motion.p> */}

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="relative my-16 mx-auto max-w-2xl text-center text-white rounded-[2rem] shadow-2xl overflow-hidden"
>
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0096c7] via-[#00b4d8] to-[#48cae4]"></div>

  {/* Decorative wavy bottom border */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[40px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44C234.25,34,117.12,12,0,0V120H1200V0C1036.91,27.22,871.65,53.11,721.39,71.44,541.09,93,401.48,79.93,321.39,56.44Z"
        fill="#ffffff22"
      ></path>
    </svg>
  </div>

  {/* Content */}
  <div className="relative z-10 py-6 px-8">
    <h3 className="text-4xl font-extrabold mb-2 drop-shadow-lg">₹39,999</h3>
    <p className="text-white/90 text-sm md:text-base mb-4 truncate">
      Full access to your transformative Seychelles retreat — stay, meals, sessions & more.
    </p>
    <a
      href="#"
      className="inline-block bg-white text-[#007f91] font-semibold px-7 py-2 rounded-full shadow-md hover:bg-gray-100 transition-transform hover:scale-105"
    >
      Reserve Your Spot
    </a>
  </div>
</motion.div>


        {/* Card Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
  {/* Included */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-center"
  >
    {/* Decorative shapes */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[130px] border-r-[220px] border-t-teal-500 border-r-transparent"></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[130px] border-l-[220px] border-b-sky-400 border-l-transparent"></div>
    </div>

    <div className="relative z-10 p-10 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <CheckCircle className="text-teal-600 w-6 h-6" />
        What’s Included
      </h3>
      <ul className="space-y-3 text-left">
        {inclusions.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.03, x: 5 }}
            className="flex items-center gap-3 text-gray-700 font-medium"
          >
            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>

  {/* Excluded */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-center"
  >
    {/* Decorative shapes */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[130px] border-r-[220px] border-t-gray-900 border-r-transparent"></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[130px] border-l-[220px] border-b-sky-500 border-l-transparent"></div>
    </div>

    <div className="relative z-10 p-10 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <XCircle className="text-red-500 w-6 h-6" />
        What’s Not Included
      </h3>
      <ul className="space-y-3 text-left">
        {exclusions.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.03, x: 5 }}
            className="flex items-center gap-3 text-gray-700 font-medium"
          >
            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
</div>

      
        


      </div>
    </section>
  );
};

export default RetreatPricingSection;
