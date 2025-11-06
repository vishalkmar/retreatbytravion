"use client";

import React from "react";
import Image from "next/image";
import { lato } from "@/lib/fonts"; // ✅ Importing Lato font

export default function SeychellesGallery() {
  const topImages = [
    "/seychelles/galary/g1.jpeg",
    "/seychelles/galary/g2.jpeg",
    "/seychelles/galary/g3.jpeg",
  ];

  const bottomImages = [
    "/seychelles/galary/g4.jpeg",
    "/seychelles/galary/g5.webp",
    "/seychelles/galary/g6.webp",
  ];

  return (
    <section
      className={`${lato.className} relative flex items-center justify-center py-20 overflow-hidden`}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* Outer Gradient Border */}
      <div
        className="relative w-[95vw] m-[10px] max-w-[880px] aspect-square rounded-full p-[10px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.6)]"
        style={{
          clipPath: "circle(50% at 50% 50%)",
        }}
      >
        {/* Inner White Container with Images */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden flex flex-col items-center justify-between text-white text-center bg-white shadow-[0_0_50px_rgba(0,0,0,0.45)]"
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
        >
          {/* Top 3 Images */}
          <div className="grid grid-cols-3 w-full h-[42%]">
            {topImages.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <Image
                  src={img}
                  alt={`top-${i}`}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center justify-center h-[12%]">
            <h2 className="text-3xl uppercase md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
              Seychelles Gallery
            </h2>
          </div>

          {/* Bottom 3 Images */}
          <div className="grid grid-cols-3 w-full h-[42%]">
            {bottomImages.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <Image
                  src={img}
                  alt={`bottom-${i}`}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
