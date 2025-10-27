"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RetreatInquiryForm from "@/components/retreatForm/RetreatInquiryForm";

const OmanExperiencesLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Desert Serenity",
      desc: "Walk barefoot on the golden sands of Wahiba Desert as the sunset paints the dunes in hues of amber and peace.",
      img: "/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDd_xocJOtoXTHlC8A9ubrf22eY7JS5RkqQ&s",
    },
    {
      id: 2,
      title: "Coastal Calm",
      desc: "Let the turquoise waters of Muscat's shores refresh your soul with the rhythm of gentle waves and soft breeze.",
      img: "https://thumbs.dreamstime.com/b/coastal-khasab-scenery-oman-beautiful-near-musandam-peninsula-photo-taken-boat-tour-123839729.jpg",
    },
    {
      id: 3,
      title: "Mountain Escape",
      desc: "Find tranquility in the cool mountain air of Jebel Akhdar, where ancient villages nestle amidst roses and cliffs.",
      img: "https://media.istockphoto.com/id/920603596/photo/muscat-oman.jpg?s=612x612&w=0&k=20&c=ixYbrseNf83qsteJ9DOA5fX-9cajy_df0KK5qkwaH8w=",
    },
    {
      id: 4,
      title: "Cultural Harmony",
      desc: "Discover Oman’s timeless heritage — from local crafts to soulful music echoing through its warm-hearted towns.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShy4lGx8Mwiqf9E-0E90jB64-V6IXcRK9gnBfUVNMLrM8o3FfKQ5bQ6EodANmiOp5109Q&usqp=CAU",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-green-100 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle gradient circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Breathe the{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            Spirit of Oman
          </span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Each destination, a rhythm of nature. Each moment, a step closer to
          serenity.
        </p>
      </motion.div>

      {/* Dynamic Tiles Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
            style={{
              clipPath:
                i % 2 === 0
                  ? "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"
                  : "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
            }}
          >
            {/* Background Image */}
            <div className="relative h-80 overflow-hidden">
              <Image
                src={exp.img}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:opacity-80 transition-all duration-700"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-lg">
                {exp.title}
              </h3>
              <p className="text-gray-100 text-sm leading-relaxed mt-1">
  {exp.desc}
</p>

            </div>

            {/* Floating border animation */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/40 rounded-3xl transition-all duration-700"></div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20 relative z-10"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
        >
          Plan My Oman Journey
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </motion.div>

      <RetreatInquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default OmanExperiencesLanding;
