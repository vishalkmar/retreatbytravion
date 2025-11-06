"use client";
import React from "react";
import { lato } from "@/lib/fonts";

export default function AtAGlance() {
  const views = [
    {
      id: 1,
      title: "Front View",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop",
      location: "R61 Chalet, Bidiyah",
    },
    {
      id: 2,
      title: "Reception",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      location: "R61 Chalet, Bidiyah",
    },
    {
      id: 3,
      title: "Desert View",
      image:
        "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=1200&h=800&fit=crop",
      location: "R61 Chalet, Bidiyah",
    },
    {
      id: 4,
      title: "Out Interior",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      location: "R61 Chalet, Bidiyah",
    },
    {
      id: 5,
      title: "Pool Area",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      location: "R61 Chalet, Bidiyah",
    },
    {
      id: 6,
      title: "Rooftop View",
      image:
        "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&h=800&fit=crop",
      location: "R61 Chalet, Bidiyah",
    },
  ];

  return (
  <section className={`${lato.variable} py-20 bg-gradient-to-br from-amber-50 to-white`}>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            At A <span className="text-[#a87000]">Glance</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover the beauty of Oman through breath-taking photos. From golden dunes to cultural experiences, see the magic unfold. Get inspired for your next family adventure!
          </p>
        </div>

        {/* Custom Masonry Layout */}
        <div className="grid grid-cols-4 gap-6">
          {/* Row 1 */}
          <div className="col-span-2 row-span-1 h-80 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={views[0].image}
              alt={views[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {views[0].title}
            </div>
            <div className="absolute bottom-3 left-4 text-white text-sm opacity-90">
              {views[0].location}
            </div>
          </div>

          <div className="col-span-1 h-80 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={views[1].image}
              alt={views[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {views[1].title}
            </div>
            <div className="absolute bottom-3 left-4 text-white text-sm opacity-90">
              {views[1].location}
            </div>
          </div>

          <div className="col-span-1 h-80 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={views[2].image}
              alt={views[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {views[2].title}
            </div>
            <div className="absolute bottom-3 left-4 text-white text-sm opacity-90">
              {views[2].location}
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-1 h-80 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={views[3].image}
              alt={views[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {views[3].title}
            </div>
            <div className="absolute bottom-3 left-4 text-white text-sm opacity-90">
              {views[3].location}
            </div>
          </div>

          <div className="col-span-1 h-80 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={views[4].image}
              alt={views[4].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {views[4].title}
            </div>
            <div className="absolute bottom-3 left-4 text-white text-sm opacity-90">
              {views[4].location}
            </div>
          </div>

          <div className="col-span-2 h-80 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={views[5].image}
              alt={views[5].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
              {views[5].title}
            </div>
            <div className="absolute bottom-3 left-4 text-white text-sm opacity-90">
              {views[5].location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
