"use client";
import { lato } from "@/lib/fonts";

export default function ThailandVenuesGallery() {
  return (
    <section
      className={`${lato.className} w-full bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-20 px-6 md:px-12 lg:px-20`}
    >
      {/* -------- Heading Section -------- */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold  tracking-wider text-[#008c91] mb-4">
          At Glance of Thailand
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Discover stunning venues across Thailand — from luxurious beachfront
          resorts to breathtaking mountain escapes. Each location blends natural
          beauty with authentic Thai elegance for unforgettable experiences.
        </p>
      </div>

      {/* -------- Masonry Gallery Grid -------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/v1.avif"
            alt="Bangkok Venue"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/two.jpg"
            alt="Chiang Mai Venue"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/three.avif"
            alt="Krabi Venue"
          />
        </div>

        <div className="grid gap-4">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/v4.avif"
            alt="Phuket Venue"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/five.avif"
            alt="Koh Samui Venue"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/v6.avif"
            alt="Pattaya Venue"
          />
        </div>

        <div className="grid gap-4">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/v7.avif"
            alt="Luxury Resort"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/v8.avif"
            alt="Outdoor Venue"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/v9.jpg"
            alt="Beachside Venue"
          />
        </div>

        <div className="grid gap-4">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/one.avif"
            alt="Hilltop Venue"
          />
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/thailand/venues/v11.jpg"
            alt="Exclusive Venue"
          />
        </div>
      </div>
    </section>
  );
}
