/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import RetreatInquiryForm from "../retreatForm/RetreatInquiryForm";
import { useState } from "react";

const CTASectionLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 flex justify-center">
      <div className="bg-white rounded-[20px] py-12 px-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-[calc(100%-200px)] max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          Ready to Experience True Wellness?
        </h2>

        {/* Subtext */}
        <p className="text-base text-[#7a8c8e] mb-8 leading-relaxed max-w-3xl mx-auto">
          Join us at one of our carefully selected retreat locations and begin
          your journey toward holistic healing and inner peace.
        </p>

        {/* Button */}
        <div onClick={() => setIsModalOpen(true)} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="bg-gradient-to-r from-[#4aaf52] to-[#25b593] text-white px-9 py-4 rounded-full text-base font-semibold inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] w-full sm:w-auto justify-center">
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
      <RetreatInquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CTASectionLanding;
