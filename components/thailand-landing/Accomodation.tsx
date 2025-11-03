"use client"
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const badroom = '/thailand/accomodation/badroom.jpeg'; // ✅ no /public prefix

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
    alt: "Luxury Beach Resort, Phuket",
    title: "Luxury Beach Resort, Phuket",
    description: "Wake up to ocean views and golden sands at Thailand’s most elegant coastal retreat.",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
    alt: "Tropical Villa, Krabi",
    title: "Tropical Villa, Krabi",
    description: "Private pool villas surrounded by lush tropical greenery for the ultimate relaxation.",
  },
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop",
    alt: "Skyline Hotel, Bangkok",
    title: "Skyline Hotel, Bangkok",
    description: "Modern comfort and cityscape views right in the vibrant heart of Bangkok.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOby1ffM2AQPcdv4JfxN7kpBclYEGAsBUZVA&s",
    alt: "Eco Resort, Chiang Mai",
    title: "Eco Resort, Chiang Mai",
    description: "Immerse in nature with sustainable luxury surrounded by mountain tranquility.",
  },
  {
    src: "https://www.agoda.com/wp-content/uploads/2024/03/Featured-image-Koh-Samui-Thailand-1244x700.jpg",
    alt: "Island Retreat, Koh Samui",
    title: "Island Retreat, Koh Samui",
    description: "A tropical sanctuary featuring overwater villas and panoramic sea views.",
  },
];

export default function HotelResortHero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#e0f7fa] via-white to-[#caf0f8] relative">
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative h-[70vh] md:h-[75vh] flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider text-[#023e8a] leading-tight">
                Hotel & Accomodation
              </h1>
              <h2 className="font-sans text-xl md:text-2xl lg:text-3xl uppercase tracking-widest font-light text-[#00b4d8]">
                All Included Service
              </h2>
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-light">
              Experience the essence of Thai hospitality with handpicked resorts
              that blend comfort, culture, and coastal beauty. From serene
              beachfront villas to elegant city stays, every accommodation offers
              the perfect mix of relaxation and authentic local charm.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                data-testid="button-booking"
                className="px-8 py-3 rounded-full bg-[#00b4d8] text-white font-semibold shadow-md hover:bg-[#0096c7] hover:shadow-lg transition-all duration-300 uppercase text-sm font-medium tracking-wider"
              >
                Read More
              </button>
            </div>
          </div>

          {/* RIGHT CIRCLE IMAGE */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-[10px] border-white shadow-lg">
              <img
                src={badroom}
                alt="Hotel Decor"
                className="w-full h-full object-contain scale-105" // ✅ fixed: ensures visible + fills circle
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- CAROUSEL SECTION ---------------- */}
      <div className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto relative">
          {/* ARROWS */}
          <button
            data-testid="button-carousel-left"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 rounded-full bg-[#c9a961] text-white flex items-center justify-center hover:bg-[#b89951] transition-all duration-300 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            data-testid="button-carousel-right"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 rounded-full bg-[#c9a961] text-white flex items-center justify-center hover:bg-[#b89951] transition-all duration-300 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* SCROLLABLE CARDS */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                data-testid={`card-carousel-${index}`}
                className="flex-none w-[280px] md:w-[320px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-56 md:h-64 bg-gray-50">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-t-2xl" // ✅ fixed: removes white gap, fills properly
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#008c91]">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- WAVE SEPARATOR ---------------- */}
      <div className="relative -mt-1">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 500,20 600,40 C700,60 900,90 1200,50 L1200,120 L0,120 Z"
            fill="white"
          />
          <path
            d="M0,60 C300,100 500,20 600,40 C700,60 900,90 1200,50"
            fill="none"
            stroke="#f8fcfcff"
            strokeWidth="4"
          />
        </svg>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
