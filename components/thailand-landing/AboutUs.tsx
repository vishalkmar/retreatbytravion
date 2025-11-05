"use client";
import React from "react";
import { lato } from "@/lib/fonts"; // <-- import your Lato font

export default function AboutThailand() {
  return (
    <section
      className={`${lato.variable} relative py-24 bg-gradient-to-br from-[#e0f7fa] via-white to-[#caf0f8] overflow-hidden font-[var(--font-lato)]`}
    >
      {/* Decorative soft gradient blobs */}
      <div className="absolute top-20 left-[-100px] w-96 h-96 bg-[#00b4d8]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-[-120px] w-[420px] h-[420px] bg-[#0096c7]/20 rounded-full blur-3xl"></div>

      <p className="uppercase text-center text-5xl tracking-widest text-[#00b4d8] font-semibold my-[50px]">
        About Us
      </p>

      {/* Two-column layout */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
        {/* Left side - Image composition */}
        <div className="flex justify-center relative">
          {/* Tall rounded image */}
          <div className="relative w-[260px] h-[420px] md:w-[320px] md:h-[480px] rounded-[140px] overflow-hidden shadow-2xl">
            <img
              src="/thailand/adv.jpg"
              alt="Thailand Landscape"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circular overlay image */}
          <div className="absolute bottom-[-60px] right-[-110px] w-[260px] h-[420px] md:w-[320px] md:h-[480px] rounded-[140px] overflow-hidden shadow-xl border-[6px] border-white bg-white">
            <img
              src="/thailand/adv2.jpg"
              alt="Thailand Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="max-w-xl text-left font-[var(--font-lato)]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#023e8a] leading-tight mb-6">
            We are Professional <br /> Planners For your{" "}
            <span className="text-[#00b4d8]">Thailand Trip</span>
          </h2>

          <p className="text-gray-700 mb-6">
            Discover the magic of Thailand with us — from golden temples and
            floating markets to white-sand beaches and lush jungles. Our expert
            planners curate unforgettable journeys for every traveler.
          </p>

          <p className="text-[#0077b6] font-semibold mb-6">
            Speak to our Destination Experts at{" "}
            <span className="text-[#00b4d8]">+1 546 378 654</span>
          </p>

          {/* Bullet list */}
          <ul className="space-y-3 mb-8">
            {[
              "All places and activities are carefully picked by us.",
              "98% Trip Satisfaction Rate",
              "Award-winning travel experts",
              "Trusted by over 80,000 travelers worldwide",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-800 font-[var(--font-lato)]"
              >
                <span className="mt-1 w-5 h-5 rounded-full bg-[#00b4d8] flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <button className="px-8 py-3 bg-[#00b4d8] text-white rounded-full font-semibold shadow-md hover:bg-[#0096c7] hover:shadow-lg transition-all duration-300 font-[var(--font-lato)]">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}
