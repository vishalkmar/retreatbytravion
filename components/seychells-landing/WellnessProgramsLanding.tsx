"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const places = [
  {
    img: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1200",
    title: "Phuket Beaches",
    desc: "Soft sands and turquoise waters that define tropical paradise.",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    title: "Chiang Mai Temples",
    desc: "Peaceful monks, ancient temples, and lush green hillsides.",
  },
  {
    img: "https://images.unsplash.com/photo-1542044801-287c3e5bda8d?q=80&w=1200",
    title: "Bangkok Skyline",
    desc: "Where modern lights blend with cultural roots and golden temples.",
  },
  {
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200",
    title: "Krabi Limestone Cliffs",
    desc: "Majestic cliffs rising over emerald waters — pure wonder.",
  },
];

export default function SeychellesShowcaseCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % places.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + places.length) % places.length);
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % places.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#e6f7ff] via-[#f0faff] to-[#ffffff] py-24 px-6 md:px-16 overflow-hidden">
      {/* Glows */}
      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#21d6e0]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-[#0080ff]/20 rounded-full blur-[100px]" />

      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-14 max-w-7xl mx-auto">
        {/* Left side – Carousel */}
        <div className="relative">
          <div className="relative rounded-[40px] overflow-hidden border-[3px] border-white shadow-xl bg-white/30 backdrop-blur-xl before:content-[''] before:absolute before:inset-0 before:border-[2px] before:rounded-[40px] before:border-dashed before:border-[#21d6e0]/40 before:pointer-events-none">
            <div className="relative h-[480px] w-full overflow-hidden">
              {places.map((p, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-200 mt-1 max-w-xs">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetric Corners */}
          <div className="absolute -top-6 -left-6 w-[120px] h-[120px] border-t-[5px] border-l-[5px] border-[#0080ff]/60 rounded-tl-[30px]" />
          <div className="absolute -bottom-6 -right-6 w-[140px] h-[140px] border-b-[5px] border-r-[5px] border-[#21d6e0]/60 rounded-br-[40px]" />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-[#0080ff]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-6 h-6 text-[#0080ff]" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 right-5 flex gap-3 z-20">
            {places.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i ? "bg-[#21d6e0]" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side – Content */}
        <div className="relative space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-[#0080ff] to-[#21d6e0] bg-clip-text text-transparent">
              Thailand’s Essence
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Every frame tells a story — from the calm beaches to the mystical mountains.
            Feel the soul of Thailand through its breathtaking beauty.
          </p>

          <div className="p-[3px] rounded-3xl bg-gradient-to-r from-[#0080ff] to-[#21d6e0] w-fit">
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Highlights of Thai Wonders
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Crystal-clear islands and serene temples</li>
                <li>World-renowned spa and wellness retreats</li>
                <li>Cultural festivals and nature escapes</li>
              </ul>
            </div>
          </div>

          <button className="mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-[#0080ff] to-[#21d6e0] text-white font-semibold shadow-lg hover:shadow-xl transition-all">
            Explore More Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
