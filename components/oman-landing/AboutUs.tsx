"use client";
import React from "react";
import { lato } from "@/lib/fonts";

export default function AboutUs() {
  return (
    <section className ={`${lato.variable} py-20 bg-gradient-to-br from-amber-50 via-white to-amber-100`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#a87000]  mb-2">
          About Us
        </h2>
       
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          At Oman Trip, we provide <span className="font-semibold">safe</span>,
          family-friendly travel experiences that combine adventure, culture, and
          comfort in Oman.
        </p>

        {/* Image layout */}
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <div className="flex justify-center items-stretch gap-6 md:gap-10">
            {/* Left column */}
            <div className="flex flex-col justify-between gap-6 md:gap-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/camel-ride-family-activities-oman-bvoBaBoZcGZHkhjkzC8qUr5cfiMDRk.jpg"
                alt="Desert View"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-[60px_0_60px_0] shadow-lg"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/palm-trees-sunset-G70nKIT5585nwQbldYGoeGRMb7Mvyc.jpg"
                alt="Palm View"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-[0_60px_0_60px] shadow-lg"
              />
            </div>

            {/* Middle tall image (spanning both rows) */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sand-dunes-desert-wtFapa9a7QuCA0W9WVUnfax9xYq1Xy.jpg"
              alt="Central Sand Dunes"
              className="w-40 h-[430px] md:w-56 md:h-[540px] object-cover rounded-[100px] shadow-xl"
            />

            {/* Right column */}
            <div className="flex flex-col justify-between gap-6 md:gap-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hot-air-balloon-over-landscape-rlL27zFZ7DSDx7eBcitZsB9AQ7f0OY.jpg"
                alt="Hot Air Balloon"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-[0_60px_0_60px] shadow-lg"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/sunset-over-desert-landscape-HO4cEdIz9kBIdp8c3gfOzSK0T41gis.jpg"
                alt="Sunset View"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-[60px_0_60px_0] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Location & Tags */}
        <div className="mt-12">
         
          <div className="flex flex-wrap justify-center gap-4">
            {["Desert View", "Palm View", "Sunrise View", "Sunset View"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-6 py-2 border border-gray-300 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold transition-all"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
