"use client";
import { ChevronDown } from "lucide-react";
import { lato } from "@/lib/fonts";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/oman/banner1.jpg",
    title: "Oman’s Tranquility",
    desc: "From golden dunes to serene wadis — experience the timeless beauty of Oman’s landscapes, where peace and adventure meet under desert skies.",
  },
  {
    image: "/oman/hero/banner1.avif",
    title: "Desert Dreams",
    desc: "Ride across the vast Wahiba Sands and witness sunsets that paint the desert gold.",
  },
  {
    image: "/oman/banner2.jpg",
    title: "Coastal Serenity",
    desc: "Explore the turquoise shores of Muscat — where the sea kisses the mountains.",
  },
   {
    image: "/oman/hero/banner2.avif",
    title: "Coastal Serenity",
    desc: "Explore the turquoise shores of Muscat — where the sea kisses the mountains.",
  },
];

export default function HeroLanding() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${lato.variable} relative mt-[80px] h-screen w-full overflow-hidden`}>
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Soft warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff8e1]/5 via-[#e5b46b]/10 to-[#3b250d]/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-7xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Discover{" "}
          <span className="block text-amber-300 mt-2 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]">
            {slides[current].title}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 text-amber-50 font-light leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          {slides[current].desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-all duration-300">
            Explore Packages
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-amber-200/50 hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300">
            Book Your Retreat
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-3 absolute bottom-16">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === current ? "bg-amber-400 scale-125" : "bg-white/30"
              }`}
            ></div>
          ))}
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-5 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-200 opacity-90" />
        </div>
      </div>
    </section>
  );
}
