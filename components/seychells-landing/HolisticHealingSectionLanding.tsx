/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, HeartPulse, Sparkles, Users } from "lucide-react";
import RetreatInquiryForm from "@/components/retreatForm/RetreatInquiryForm";

const  HolisticHealingSectionLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      id: 1,
      title: "Oceanic Serenity",
      description:
        "Feel the soothing rhythm of the Seychelles sea restore your mind, calm your breath, and awaken inner peace.",
      icon: <Leaf className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Holistic Harmony",
      description:
        "Revitalize your body through mindful practices, ocean-inspired yoga, and natural island wellness.",
      icon: <HeartPulse className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Island Energy",
      description:
        "Experience the gentle balance of sun, breeze, and water that reconnects you to your natural rhythm.",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Connected Community",
      description:
        "Share soulful experiences and form bonds that echo with the ocean’s depth and harmony.",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-emerald-500"></div>

      {/* Curved Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#f9fafb"
            fillOpacity="0.9"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-28 px-6 md:px-12 lg:px-20 text-center text-white">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Reconnect with Yourself in Seychelles
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Journey to the heart of the Indian Ocean — where turquoise stillness
            meets mindful renewal and the spirit feels free again.
          </p>
        </motion.div>

        {/* Separator */}
        <div className="relative flex justify-center mt-12 mb-16">
          <div className="h-[2px] w-40 bg-gradient-to-r from-cyan-200 via-white to-emerald-200 rounded-full blur-[1px]" />
        </div>

        {/* Benefit Panels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-[28px] shadow-[0_8px_28px_rgba(0,0,0,0.12)] border border-white/60 hover:border-cyan-400/50 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-cyan-300/20 to-emerald-200/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-tr from-emerald-400 to-cyan-400 rounded-2xl shadow-lg text-white">
                  {b.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-white text-teal-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal-50 hover:scale-105 transition-transform duration-300"
          >
            Start Your Seychelles Retreat
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

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C400,0 800,100 1200,0 L1200,100 L0,100 Z"
            fill="#f9fafb"
            fillOpacity="0.95"
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



export default HolisticHealingSectionLanding;
