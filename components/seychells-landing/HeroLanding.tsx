"use client";
import "@fontsource/lato";
import React, { useState, useEffect } from "react";
import RetreatInquiryForm from "@/components/retreatForm/RetreatInquiryForm";

export default function HeroLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Same background images (you can replace later with Thailand pics)
  const images = [
    "/wellness-retreats/13.jpg",
    "/wellness-retreats/14.jpg",
    "/wellness-retreats/41.jpg",
    "/wellness-retreats/3.jpg",
    "/wellness-retreats/55.jpg",
    "/wellness-retreats/56.jpg",
    "/wellness-retreats/57.jpg",
    "/wellness-retreats/58.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Background carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Soft glow circles */}
      <div className="hidden lg:block absolute top-20 left-20 w-24 h-24 rounded-full bg-blue-400/30 blur-2xl" />
      <div className="hidden lg:block absolute top-1/2 right-32 w-20 h-20 rounded-full bg-teal-400/40 blur-xl" />
      <div className="hidden lg:block absolute bottom-32 right-20 w-32 h-32 rounded-full bg-yellow-400/20 blur-2xl" />

      {/* Dots */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-20 mb-12">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8 sm:w-10"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient strip */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0088cc] via-[#00bfa5] to-[#8bc34a]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8 sm:py-12 lg:py-16">
        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: "Lato" }}
        >
          Discover{" "}
          <span
            style={{
              background: "linear-gradient(to right, #00bfa5, #4dd0e1, #81c784)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            seychelles Like Never Before
          </span>
        </h1>

        {/* Sub Heading */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
          Exclusive Thailand Travel & Cultural Tours by <span className="font-semibold text-[#00e6b8]">Your Company Name</span>
        </p>

        {/* Highlight Features */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 px-4">
          {[
            { icon: "🌴", label: "Island Hopping" },
            { icon: "🏯", label: "Temple Visits" },
            { icon: "🍜", label: "Thai Cuisine Tours" },
            { icon: "💆‍♀️", label: "Spa & Wellness" },
            { icon: "🚤", label: "Adventure Activities" },
          ].map((item, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 text-sm sm:text-base"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 px-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00bfa5] to-[#00e6b8] hover:from-[#00e6b8] hover:to-[#00bfa5] text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 cursor-pointer w-full sm:w-auto"
          >
            Plan Your Thailand Tour
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/90 mt-2 sm:mt-4 px-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-500 border-2 border-white" />
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-500 border-2 border-white" />
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-500 border-2 border-white" />
            </div>
            <span className="text-sm sm:text-base font-medium">
              1000+ Happy Travelers
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm sm:text-base font-medium">
              Rated 4.9/5 by Travelers
            </span>
          </div>
        </div>
      </div>

      {/* Modal (Travel Inquiry Form) */}
      <RetreatInquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
