"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { lato } from "@/lib/fonts"; 

const places = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    title: "Mahé Island",
    desc: "Lush mountains, turquoise beaches, and vibrant Creole culture.",
  },
  {
    img: "/seychelles/bone.avif",
    title: "Praslin Paradise",
    desc: "Famous for Anse Lazio — one of the most beautiful beaches in the world.",
  },
  {
    img: "/seychelles/btwo.jpg",
    title: "La Digue Charm",
    desc: "Granite rocks, calm waters, and endless serenity await you.",
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    title: "Seychelles Serenity",
    desc: "Tropical bliss surrounded by coral reefs and crystal-clear lagoons.",
  },
];

export default function SeychellesShowcaseCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % places.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + places.length) % places.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % places.length);

  return (
    <section
      className={`relative bg-white py-24 px-6 md:px-16 overflow-hidden text-white ${lato.className}`}
    >
      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-teal-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[100px]" />

      {/* Main Grid */}
      <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 z-10 grid lg:grid-cols-2 items-center gap-14 max-w-7xl mx-auto rounded-[24px] p-8 shadow-2xl border border-teal-700/40">
        {/* LEFT — Content */}
        <div className="relative space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Discover <span className="text-emerald-400">Seychelles Blogs</span>
          </h2>

          <p className="text-teal-100 text-[1rem] leading-relaxed max-w-lg font-light">
            Where emerald waters kiss white sands — Seychelles awaits with its
            pristine beaches, island charm, and tropical serenity.
          </p>

          {/* 3 small images */}
          <div className="flex gap-4 mt-6">
            {[
              "/seychelles/blog/b1.avif",
              "/seychelles/blog/b2.avif",
              "/seychelles/blog/b3.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative w-32 h-32 rounded-2xl overflow-hidden border border-emerald-400/40 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Image src={img} alt={`Seychelles ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          <button className="mt-8 px-8 py-4 rounded-full bg-emerald-400 hover:bg-emerald-500 text-teal-900 font-semibold shadow-lg hover:shadow-xl transition-all">
            Explore More Destinations
          </button>
        </div>

        {/* RIGHT — Carousel */}
        <div className="relative">
          <div className="relative rounded-[40px] overflow-hidden border-[3px] border-teal-300/60 shadow-2xl bg-teal-900/40 backdrop-blur-xl before:content-[''] before:absolute before:inset-0 before:border-[2px] before:rounded-[40px] before:border-dashed before:border-emerald-400/30 before:pointer-events-none">
            <div className="relative h-[480px] w-full overflow-hidden">
              {places.map((p, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image src={p.img} alt={p.title} fill className="object-cover" priority={i === 0} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="text-sm text-teal-100 mt-1 max-w-xs">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Border corners */}
          <div className="absolute -top-6 -left-6 w-[120px] h-[120px] border-t-[5px] border-l-[5px] border-teal-300 rounded-tl-[30px]" />
          <div className="absolute -bottom-6 -right-6 w-[140px] h-[140px] border-b-[5px] border-r-[5px] border-teal-300 rounded-br-[40px]" />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2 shadow-lg backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-teal-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2 shadow-lg backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-6 h-6 text-teal-900" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 right-5 flex gap-3 z-20">
            {places.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-3 h-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 text-white rounded-full transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
