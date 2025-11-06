/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import RetreatInquiryForm from "@/components/retreatForm/RetreatInquiryForm";

const CTASectionLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full  py-16 md:py-20 flex justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

      <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 backdrop-blur-md border border-white/20 rounded-[20px] py-10 sm:py-12 px-6 sm:px-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] w-full max-w-[1300px]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-md leading-snug">
          Ready to Discover Paradise in Seychelles?
        </h2>

        {/* Subtext */}
        <p className="text-[1rem]  text-white/90 mb-8 leading-relaxed max-w-2xl md:max-w-3xl mx-auto px-2">
          From turquoise waters to lush island escapes — immerse yourself in the serene beauty of Seychelles. 
          Let every sunrise, every wave, and every breeze remind you what true tranquility feels like.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:scale-[1.03] w-full sm:w-auto justify-center"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Your Retreat
          </button>
        </div>
      </div>

      <RetreatInquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CTASectionLanding;
