/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Check } from "lucide-react";

const WhoThisIsForSection = () => {
  const points = [
    "Lead fast-paced, high-responsibility lives and need to pause without guilt",
    "Want clarity on what comes next—personally or professionally",
    "Feel emotionally or mentally stuck, despite outward success",
    "Are craving solitude, but don’t know how to build it into their life",
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Soft background circles for harmony */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-green-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 blur-2xl"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Who This is For
          <div className="w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-green-500 via-green-600 to-teal-600 rounded-full"></div>
        </h2>

        {/* Intro text */}
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          This retreat is for people who:
        </p>

        {/* Main points */}
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-12 text-left">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="flex-shrink-0 mt-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-1.5 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {point.includes("pause") ? (
                  <>
                    Lead fast-paced, high-responsibility lives and need to{" "}
                    <em className="italic text-green-700">pause without guilt</em>
                  </>
                ) : (
                  point
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-gray-600 text-base md:text-lg mt-12 italic">
          You don’t need experience with yoga or meditation. Just a willingness
          to step out of your current pace.
        </p>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
