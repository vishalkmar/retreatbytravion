/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flower2, Heart, Sparkles, Users } from "lucide-react";
import RetreatInquiryForm from "@/components/retreatForm/RetreatInquiryForm";

const ThailandHealingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      id: 1,
      title: "Mindful Serenity",
      description:
        "Find peace in Thailand’s tranquil temples, golden sunsets, and the gentle rhythm of nature.",
      icon: <Flower2 className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Holistic Rejuvenation",
      description:
        "Rebalance your body and spirit through ancient Thai healing, yoga, and mindful nutrition.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Cultural Connection",
      description:
        "Immerse yourself in sacred rituals, local traditions, and community moments of calm joy.",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Community & Growth",
      description:
        "Share this journey with like-hearted souls seeking reflection, renewal, and transformation.",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background (no image) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0099ff] via-[#00d4b0] to-[#e0fff9]"></div>

      {/* Wave top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C234.25,34,117.12,12,0,0V120H1200V0C1036.91,27.22,871.65,53.11,721.39,71.44,541.09,93,401.48,79.93,321.39,56.44Z"
            fill="#e0fff9"
            fillOpacity="0.9"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 py-28 px-6 md:px-12 lg:px-20 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Awaken Your{" "}
           <span className="bg-white bg-clip-text text-transparent">
  Spirit in Thailand
</span>

          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-sm leading-relaxed mt-4">
            Discover inner harmony among Thailand’s serene temples, lush jungles,
            and healing traditions that awaken body, mind, and soul.
          </p>
        </motion.div>

        {/* Floating Highlights */}
        <div className="mt-20 flex flex-col md:flex-row justify-center flex-wrap gap-8 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="relative flex-1 min-w-[240px] p-[2px] rounded-3xl bg-gradient-to-br from-[#00c6a7]/50 via-[#0099ff]/40 to-[#00ffe5]/30 hover:from-[#00c6a7]/60 hover:to-[#0099ff]/50 transition-all duration-500 shadow-xl"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gradient-to-r from-[#007aff] to-[#00c6a7] text-white shadow-lg">
                  {b.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#007aff] via-[#00c6a7] to-[#00ffe5] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Begin Your Thailand Journey
            <svg
              className="w-5 h-5"
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
      </div>

      {/* Wave bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C234.25,34,117.12,12,0,0V120H1200V0C1036.91,27.22,871.65,53.11,721.39,71.44,541.09,93,401.48,79.93,321.39,56.44Z"
            fill="#e0fff9"
            fillOpacity="0.9"
          ></path>
        </svg>
      </div>

      <RetreatInquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ThailandHealingSection;
