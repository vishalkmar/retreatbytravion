/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import RetreatInquiryForm from "@/components/retreatForm/RetreatInquiryForm";

const CTASectionLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 py-20 flex justify-center relative overflow-hidden">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] py-12 px-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] w-[calc(100%-200px)] max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-md">
          Ready to Experience True Wellness?
        </h2>

        {/* Subtext */}
        <p className="text-base text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          Join us at one of our carefully selected retreat locations and begin
          your journey toward holistic healing and inner peace.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 text-white px-10 py-4 rounded-full text-base font-semibold inline-flex items-center gap-3 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:scale-[1.03] w-full sm:w-auto justify-center"
          >
            <svg
              className="w-5 h-5"
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
