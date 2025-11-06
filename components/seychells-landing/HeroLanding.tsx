"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { lato } from "@/lib/fonts";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

// 🔹 Seychelles background images (rotate in loop)
const images = [
  "/seychelles/banner.jpg",
  "/seychelles/banner1.avif",
   "/seychelles/btwo.jpg",
    "/seychelles/banner3.avif",
     "/seychelles/banner4.avif",
];

export default function HeroLanding() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${lato.className} relative mt-[80px] h-screen w-full overflow-hidden`}
    >
      {/* 🔹 Water ripple wrapper (with changing background) */}
      <WaterWave
        imageUrl={images[currentImage]}
        dropRadius={25}
        perturbance={0.03}
        resolution={512}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          inset: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {() => (
          <div className="relative flex flex-col items-center justify-center h-screen text-center text-white px-6 overflow-hidden">
            {/* ✨ Light gradient overlay (kept same) */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-cyan-800/50 to-emerald-900/80 transition-all duration-700"></div>

            {/* 🏝️ Hero Content */}
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]">
                Discover{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-200 mt-2">
                  Seychelles’ Paradise
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 text-teal-50/90 font-light leading-relaxed">
                Dive into the turquoise waters of Seychelles — an oasis of coral
                reefs, lush rainforests, and sunlit shores where tranquility
                meets adventure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300">
                  Explore Packages
                </button>

                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-teal-100/40 hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Book Your Trip
                </button>
              </div>
            </div>

            {/* Scroll Down Icon */}
            <div className="absolute bottom-10 animate-bounce z-10">
              <ChevronDown className="w-8 h-8 text-emerald-100 opacity-80" />
            </div>

            {/* 🔹 Dots Indicator */}
            <div className="flex gap-3 absolute bottom-16 z-10">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    i === currentImage ? "bg-emerald-400 scale-125" : "bg-white/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        )}
      </WaterWave>
    </section>
  );
}
