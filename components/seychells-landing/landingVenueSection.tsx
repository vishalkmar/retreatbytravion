"use client";
import React from "react";
import { motion } from "framer-motion";

const LandingVenueSection = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcPE-evs5GzmfvKN8zKXzqjuaJurHk-ltkQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqymsYjnF_SQ4BYhnei99PHOL10-a2ESU2Q&s",
    "https://media.istockphoto.com/id/467886306/photo/victoria-seychelles-intersection-with-clock-tower.jpg?s=612x612&w=0&k=20&c=XQbMnKoOCti7njbh500leRx5K2quLJ9QvKiqnZXKHUs=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ--9vb03FZLHPtwBRPvjOjcXGIbgmdgODeg&s",
    "https://res.cloudinary.com/lastminute-contenthub/s--8gbR8zMQ--/c_limit,h_999999,w_1024/f_auto/q_auto:eco/v1/DAM/Photos%20-%20Editorial/Destinations/Africa/Seychelles/shutterstock_1710888175",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-blue-50 to-white">
      {/* Top Hero Image with Wave */}
      <div className="relative h-[420px] overflow-hidden">
        {/* Background Image */}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcPE-evs5GzmfvKN8zKXzqjuaJurHk-ltkQ&s"
          alt="Seychelles Venue"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39 56.44C198.14 79.13 87.39 109.43 0 147.75V0h1200v27.35c-111.32 40.28-234.55 65.93-357.48 74.49C683.61 117.24 511.83 88.12 321.39 56.44z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        {/* Optional Hero Text Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center s text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Discover Seychelles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl"
          >
            Where turquoise waters meet lush green islands — a paradise beyond imagination.
          </motion.p>
        </div>
      </div>

      {/* Venue Content Section */}
      <div className="relative z-10 py-20 px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900">
              Seychelles Venue
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nestled amidst emerald forests and crystal-clear beaches, our Seychelles retreat offers an immersive experience in nature’s finest masterpiece. Feel the rhythm of the waves, the softness of white sands, and the warmth of the tropical sun while rejuvenating your body and mind.
            </p>
            <button className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all shadow-lg">
              Explore Venue
            </button>
          </motion.div>

          {/* Right Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4">
              <img
                src={images[0]}
                alt="Venue"
                className="rounded-2xl shadow-xl h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <img
                src={images[1]}
                alt="Venue"
                className="rounded-2xl shadow-xl h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4 mt-10">
              <img
                src={images[2]}
                alt="Venue"
                className="rounded-2xl shadow-xl h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <img
                src={images[3]}
                alt="Venue"
                className="rounded-2xl shadow-xl h-64 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Soft Blurred Shapes */}
            <div className="absolute -bottom-8 -right-6 w-24 h-24 bg-emerald-200/50 rounded-full blur-2xl"></div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-teal-200/40 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingVenueSection;
