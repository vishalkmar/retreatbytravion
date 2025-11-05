/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import RetreatInquiryForm from "@/components/retreatForm/RetreatInquiryForm";
import { lato } from "@/lib/fonts";
const CTASectionLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className= {`${lato.variable} w-full bg-gradient-to-br from-[#fceabb] via-[#f8d49d] to-[#f6b676] py-16 md:py-20 flex justify-center relative overflow-hidden px-4 sm:px-6`}>
      {/* Subtle overlay for soft glow */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>

      <div className="relative bg-white/60 backdrop-blur-md border border-white/30 rounded-[20px] py-10 sm:py-12 px-6 sm:px-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] w-full max-w-[1200px]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5 text-[#a87000] tracking-wide leading-snug">
          Discover Serenity in the Sands of Oman
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl md:max-w-3xl mx-auto px-2">
          Let the golden dunes, tranquil wadis, and timeless desert skies of Oman
          inspire your inner calm. A perfect retreat where tradition meets peace,
          and every sunset whispers the beauty of stillness.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-[#f6b676] via-[#e89f43] to-[#d17b0f] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:scale-[1.03] w-full sm:w-auto justify-center"
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
            Book Your Oman Retreat
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
