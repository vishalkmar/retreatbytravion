/* eslint-disable @next/next/no-img-element */
import React from "react";

const LandingVenueSection = () => {
  const images = [
    "/venue/v1.avif",
    "/venue/v2.avif",
    "/venue/v3.avif",
    "/venue/v4.avif",
    "/venue/v5.avif",
    "/venue/v6.avif",
    "/venue/v7.avif",
    "/venue/v8.avif",
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* soft background decor */}
      <div className="absolute top-12 left-12 w-28 h-28 bg-green-100 rounded-full opacity-25 blur-2xl py-6"></div>
      <div className="absolute bottom-12 right-12 w-40 h-40 bg-teal-100 rounded-full opacity-25 blur-2xl"></div>

      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Image */}
        <div className="w-full h-full">
          <img
            src="/venue/main.jpg"
            alt="Retreat Venue"
            className="w-full h-[460px] object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-start text-gray-700">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Our Venue
            <div className="w-24 h-1 mt-2 bg-gradient-to-r from-green-500 via-green-600 to-teal-600 rounded-full"></div>
          </h2>

          {/* Paragraphs */}
          <div className="text-sm md:text-base leading-relaxed text-gray-600 font-normal">
            <p className="mb-3">
              Welcome to <span className="font-semibold text-green-700">Anubhuti</span>, a tranquil
              sanctuary tucked away in an unexplored corner of Rishikesh along the banks of the Ganges,
              nestled near the revered Virbhadra temple. This beautiful retreat feels like a home away
              from home, graced with divine energies that make it a haven for healing, growth, and inner
              peace.
            </p>

            <p>
              The sacred Ganges flows gently in front of Anubhuti, providing a soothing backdrop
              throughout the day. The sounds of birds fill the air, adding to the natural harmony of
              the surroundings. With its atmosphere full of positive vibrations, Anubhuti is the perfect
              sanctuary to reconnect with oneself and experience true serenity.
            </p>
          </div>

          {/* Gallery - tightly below text */}
          <div className="mt-3 grid grid-cols-4 gap-3">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={src}
                  alt={`Venue ${index + 1}`}
                  className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingVenueSection;
