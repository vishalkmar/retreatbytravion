"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { lato } from "@/lib/fonts";

const images = [
   "/thailand/hero/banner1.avif",
   "/thailand/hero/banner2.avif",
   "/thailand/hero/banner3.jpg",
   "/thailand/hero/banner4.jpg",
   "/thailand/hero/banner5.webp",
   "/thailand/hero/banner6.webp",
];

export default function HeroLanding() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // ⏱️ change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`${lato.className} relative mt-[80px] h-screen w-full overflow-hidden`}
    >
      {/* 🔄 Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-cyan-900/40 to-blue-950/80" />
      </div>

      {/* ✨ Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
          Discover{" "}
          <span className="block text-sky-300 drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] mt-2">
            Thailand’s Magic
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 text-blue-100 font-light leading-relaxed">
          Explore golden temples, turquoise beaches, and the vibrant heart of
          Thai culture — where every sunrise tells a story.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-sky-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300">
            Explore Packages
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-cyan-200/40 hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300">
            Book Your Trip
          </button>
        </div>

        {/* ⬇️ Scroll Down Icon */}
        <div className="absolute bottom-14 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-200 opacity-80" />
        </div>

        {/* ⚪ Dots (Indicators) */}
        <div className="absolute bottom-6 flex gap-3">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-gradient-to-r from-cyan-400 to-sky-500 scale-125"
                  : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
