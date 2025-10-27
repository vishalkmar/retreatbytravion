/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const venues = [
  {
    title: "Muscat – Coastal Serenity",
    src: "https://assets.zeezest.com/images/PROD_Beaches%20in%20Oman_1739545591500_thumb_500.jpeg",
    layout: "horizontal",
  },
  {
    title: "Wahiba Sands – Desert Adventure",
    src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/49/a4/a2.jpg",
    layout: "vertical",
  },
  {
    title: "Jebel Akhdar – Mountain Retreat",
    src: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/df/41/2a.jpg",
    layout: "horizontal",
  },
  {
    title: "Nizwa – Cultural Heritage",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5kD7IFm5gChhSA_-RqVS_J26yErVMlZJiA&s",
    layout: "vertical",
  },
  {
    title: "Salalah – Tropical Escape",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjPLTa0kgH7xOK4gosvfIgDuVzDffCW9IAw&s",
    layout: "horizontal",
  },
];

export default function LandingVenueSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-emerald-50 to-emerald-100 overflow-hidden">
      {/* floating background light effects */}
      <div className="absolute -top-20 left-10 w-80 h-80 bg-teal-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/30 blur-3xl rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Discover the Beauty of{" "}
          <span className="text-emerald-600">Oman</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
        >
          From the golden dunes to the turquoise coastline — explore Oman’s
          most breathtaking destinations in a journey of contrasts.
        </motion.p>

        {/* Organic Collage Layout */}
        <div className="mt-20 space-y-20">
          {venues.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden rounded-[3rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out
                ${v.layout === "horizontal" ? "md:w-[65%]" : "md:w-[45%]"}
                ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}`}
                style={{
                  clipPath:
                    "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)", // gives organic angled edges
                }}
              >
                <img
                  src={v.src}
                  alt={v.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* title overlay */}
                <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
                  <h3 className="text-2xl font-bold">{v.title}</h3>
                </div>
              </div>

              {/* Text beside image */}
              <div className="md:w-[40%]">
                <h4 className="text-2xl font-semibold text-emerald-700 mb-3">
                  Experience {v.title.split("–")[0].trim()}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {v.layout === "horizontal"
                    ? "Enjoy panoramic landscapes, luxurious stays, and unforgettable experiences in this region."
                    : "Uncover the hidden gems, cultural charm, and raw natural beauty that make this destination truly magical."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="#book-now"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-10 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Explore Oman Retreats
          </a>
        </motion.div>
      </div>
    </section>
  );
}
