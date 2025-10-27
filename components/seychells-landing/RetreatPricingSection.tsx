"use client";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

const RetreatPricingSection = () => {
  const inclusions = [
    "Luxury beachside villa stay",
    "All daily meals included",
    "Guided mindfulness sessions",
    "Island exploration tours",
  ];

  const exclusions = [
    "International airfare",
    "Personal expenses",
    "Travel insurance",
    "Optional excursions",
  ];

  return (
   <section
  className="relative py-20 my-[50px] bg-gradient-to-br from-[#00c6a7] to-[#0072ff] text-gray-900  shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden"

 style={{borderTopLeftRadius:'300px',borderBottomRightRadius:'300px'}}
>
  <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-black mb-8"
          >
            Your <span className="text-white">Seychelles Retreat Package</span>
          </motion.h2>


      <div className="max-w-6xl mx-auto px-6">
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


        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* --- Included Card --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300"
          >
            {/* Left Teal Section */}
            <div
              className="relative w-1/2 bg-gradient-to-br from-[#00b8a9] to-[#007aff] text-white p-8 flex flex-col justify-center"
              style={{
                clipPath:
                  "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
              }}
            >
              <ul className="space-y-3">
                {inclusions.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.05, x: 6 }}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right White Section */}
            <div className="relative w-1/2 bg-white text-gray-900 flex flex-col justify-center items-center p-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle className="text-[#00b8a9] w-6 h-6" />
                What’s Included
              </h3>
            </div>
          </motion.div>

          {/* --- Excluded Card --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300"
          >
            {/* Right Gradient Section */}
            <div
              className="relative w-1/2 order-2 bg-gradient-to-br from-[#003d99] to-[#00c6a7] text-white p-8 flex flex-col justify-center"
              style={{
                clipPath:
                  "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <ul className="space-y-3">
                {exclusions.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.05, x: 6 }}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Left White Section */}
            <div className="relative w-1/2 bg-white text-gray-900 flex flex-col justify-center items-center p-8 order-1">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <XCircle className="text-red-500 w-6 h-6" />
                What’s Not Included
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default RetreatPricingSection;
