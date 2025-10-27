
"use client";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-emerald-500 to-green-600">
      {/* Full-width Video Banner */}
      <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full relative">
            <iframe
              src="https://www.youtube.com/embed/2IIWjCN-LZs?autoplay=1&mute=1&loop=1&playlist=2IIWjCN-LZs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
              className="absolute top-1/2 left-1/2 w-[178%] h-[178%] transform -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh]"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Traveon Retreats Experience"
              style={{
                aspectRatio: "16/9",
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl mx-auto px-6">
            <div className="inline-block mb-4">
              <span className="text-white font-semibold text-lg sm:text-xl lg:text-3xl tracking-wide">
                THE EXPERIENCES ARM OF TRAVEON VENTURES
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight relative">
              <span className="relative bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                Relax
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mx-3 sm:mx-4 lg:mx-5 xl:mx-6 align-middle"></span>
                Reconnect
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mx-3 sm:mx-4 lg:mx-5 xl:mx-6 align-middle"></span>
                Reset
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Mission Statement Section with GIF */}
      <div className="container py-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-lg">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-lg"
                >
                  <source src="/about/animate.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We exist to help people{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  connect
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Within themselves, within teams, and within communities through
                thoughtfully curated experiences that blend local culture,
                nature, and premium hospitality.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Global Reach
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Premium Quality
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Local Partnerships
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Purpose-Driven
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="relative mt-16 w-full">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-teal-600 via-emerald-500 to-green-600 -mt-16">
          <svg
            className="absolute bottom-0 w-full h-24"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q300,50 600,50 T1200,0 L1200,100 L0,100 Z"
              fill="rgba(255, 255, 255, 0.95)"
            />
          </svg>
        </div>

        <div className="relative bg-white/95 backdrop-blur-sm pt-32 pb-40 px-6 w-full">
          <div className="max-w-6xl mx-auto relative">
            {/* Polaroid Images - Left Side */}
            <div className="absolute left-0 top-0 hidden md:block">
              <div className="relative">
                <div className="absolute -left-16 lg:-left-20 -top-4 w-48 lg:w-64 bg-white p-1 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-36 lg:h-48 bg-gray-200">
                    <img
                      src="/wellness-retreats/13.jpg"
                      alt="Retreat moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -left-12 lg:-left-16 top-40 lg:top-48 w-52 lg:w-72 bg-white p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-40 lg:h-56 bg-gray-200">
                    <img
                      src="/corporate-retreats/34.jpg"
                      alt="Group activity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -left-20 lg:-left-24 top-80 lg:top-96 w-56 lg:w-80 bg-white p-1 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-44 lg:h-64 bg-gray-200">
                    <img
                      src="/wellness-retreats/58.jpg"
                      alt="Nature experience"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Polaroid Images - Right Side */}
            <div className="absolute right-0 top-0 hidden md:block">
              <div className="relative">
                <div className="absolute -right-16 lg:-right-20 top-4 w-48 lg:w-64 bg-white p-1 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300 z-30">
                  <div className="w-full h-36 lg:h-48 bg-gray-200">
                    <img
                      src="/about/5.jpg"
                      alt="Team building"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -right-12 lg:-right-16 top-48 lg:top-56 w-52 lg:w-72 bg-white p-1 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                  <div className="w-full h-40 lg:h-56 bg-gray-200">
                    <img
                      src="/about/3.jpg"
                      alt="Meditation session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -right-20 lg:-right-24 top-96 lg:top-[28rem] w-56 lg:w-80 bg-white p-1 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 z-10">
                  <div className="w-full h-44 lg:h-64 bg-gray-200">
                    <img
                      src="/community-tours/11.jpg"
                      alt="Celebration moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-center text-black space-y-6 py-12 md:mx-32 lg:mx-48">
              <h2
                className="text-4xl sm:text-5xl mb-8"
                
              >
                <span className="font-bold">Who</span>{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">We</span>{" "}
                <span className="font-bold">Are</span>
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed text-gray-500 ml-12"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Born from a vision of weaving wellness, adventure, and purpose
                into everyday living, Traveon is more than a retreat planner —{" "}
                <span className="font-semibold text-gray-700">
                  we're architects of transformation.
                </span>
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed text-gray-500 ml-12"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                We draw inspiration from alchemy of ancient wisdom and modern
                wellness science.{" "}
                <span className="font-semibold text-gray-700">
                  From meditation practices taught by elders, to evidence-backed
                  techniques for mental clarity,
                </span>{" "}
                every facet of our retreats is crafted with deep intention.
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed text-gray-500 ml-12"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                We are guides, facilitators, companions — walking alongside
                those who come to us carrying stress, burnout, or simply a
                longing for more meaning. And when they leave, we hope they
                carry away calm, clarity, and a renewed sense of possibility.
              </p>
            </div>
          </div>
        </div>

        
      </div>

      {/* How it Started Section */}
      <div className="relative w-full mt-16">
        

        <div className="relative bg-white/95 backdrop-blur-sm pt-32 pb-40 px-6 w-full">
          <div className="max-w-6xl mx-auto relative">
            {/* Side Images */}
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden 2xl:block">
              <div className="relative w-[450px] h-[550px]">
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="w-full h-full bg-transparent transform -rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden rounded-lg">
                    <img
                      src="/about/44.jpg"
                      alt="How it started moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-32 top-1/2 -translate-y-1/2 hidden 2xl:block">
              <div className="relative w-[450px] h-[550px]">
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="w-full h-full bg-white/95 transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden rounded-lg">
                    <img
                      src="/about/55.jpg"
                      alt="Retreat journey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center text-black space-y-6 py-12">
              <h2
                className="text-4xl sm:text-5xl mb-8"
                
              >
                <span className="font-bold">How</span>{" "}
                <span>it</span>{" "}
                <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Started
                </span>
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed text-gray-500 ml-8"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                The world keeps moving fast. Deadlines, targets, notifications —
                the noise often drowns out what matters most. We started
                Retreats by Traveon because we saw how much{" "}
                <span className="font-semibold text-gray-700">
                  people longed for stillness, for real connections, for a
                  chance to rest and remember who they are
                </span>
                ... beyond their roles, beyond their to-do lists.
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed text-gray-500 ml-8 mr-8"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Our founders spent years exploring wellness modalities —{" "}
                <span className="font-semibold text-gray-700">
                  retreats, silent walks, breath work, group sharing circles,
                  mindfulness practices, nature immersion
                </span>{" "}
                — learning from guides, healers, coaches, and communities.
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed text-gray-500 ml-8 mr-8"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                What emerged was a clear truth: profound transformation isn't a
                luxury. It's a necessity. So, we built this space — retreats
                that go beyond luxury or escape —{" "}
                <span className="font-semibold text-gray-700">
                  experiences that invite awakening, belonging, and growth.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy CTA Section */}
      <div className="relative w-full">
        <div
          className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]"
          style={{ clipPath: "ellipse(95% 100% at 50% 50%)" }}
        >
          <div className="absolute inset-0">
            <img
              src="/about/11.png"
              alt="Legacy background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 max-w-4xl leading-tight"
              
            >
              Creating a legacy of <span className="italic">Happiness,</span>
              <br />
              <span className="italic">Wellness</span> &{" "}
              <span className="italic">Belongingness</span>
            </h2>
            <a href="/retreats/wellness">
              <button className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                Explore Our Retreats
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="relative bg-white/95 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2
                className="text-4xl sm:text-5xl font-bold mb-8 text-center"
                
              >
                Our <span className="text-emerald-600 italic">Mission</span>
              </h2>
              <p
                className="text-gray-800 text-lg mb-6 leading-relaxed text-center"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                To craft soulful retreats that{" "}
                <span className="font-semibold">
                  blend ancient wisdom + modern science
                </span>
                , deliver heartfelt experiences, and ignite transformation —{" "}
                <span className="font-semibold">
                  for people and teams alike
                </span>
                .
              </p>
              <p
                className="text-gray-600 text-base leading-relaxed text-center"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                To be a trusted partner in the journey toward well-being,
                purpose, and conscious living.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  clipPath:
                    "polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)",
                  maxWidth: "500px",
                  marginLeft: "auto",
                }}
              >
                <img
                  src="/about/22.jpg"
                  alt="Mission - Team celebration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  clipPath:
                    "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)",
                  maxWidth: "500px",
                  marginRight: "auto",
                }}
              >
                <img
                  src="/about/33.jpg"
                  alt="Vision - Wellness experience"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2
                className="text-4xl sm:text-5xl font-bold mb-8 text-center"
                
              >
                Our <span className="text-teal-500 italic">Vision</span>
              </h2>
              <p
                className="text-gray-800 text-lg mb-6 leading-relaxed text-center"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                A world where{" "}
                <span className="font-semibold">
                  every individual feels rejuvenated
                </span>
                , every team thrives through genuine connection, and where{" "}
                <span className="font-semibold">wellness isn't an event</span> —
                it's woven into the fabric of life.
              </p>
              <p
                className="text-gray-600 text-base leading-relaxed text-center"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                To be a trusted partner in the journey toward well-being,
                purpose, and conscious living.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="relative bg-white/95 backdrop-blur-sm py-16">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2
        className="text-4xl sm:text-5xl font-bold mb-6"
        
      >
        Meet <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Our</span> Team
      </h2>
      <p
        className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        Traveon Ventures is guided by a leadership team that brings
        together complementary expertise in global travel, destination
        management, and event organization.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-shrink-0 group">
          <img
            src="/about/founder.jpeg"
            alt="Dr. Piyush Bhardwaj"
            className="w-40 h-48 object-cover transition-transform duration-500 group-hover:rotate-y-180"
          />
        </div>
        <div>
          <h3
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Dr. Piyush Bhardwaj
          </h3>
          <p
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            A seasoned business strategist with 14 years of diverse
            experience in aviation, e-commerce, travel and hospitality
            industries.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex-shrink-0 group">
          <img
            src="/about/founder.jpeg"
            alt="Mr. Abhineet Gupta"
            className="w-40 h-48 object-cover transition-transform duration-500 group-hover:rotate-y-180"
          />
        </div>
        <div>
          <h3
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Mr. Abhineet Gupta
          </h3>
          <p
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            A seasoned business strategist with 14 years of diverse
            experience in aviation, e-commerce, travel and hospitality
            industries.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
      
        <div className="text-center group">
          <div className="relative overflow-hidden">
            <img
              src="/about/founder.jpeg"
              alt="Team member"
              className="w-full h-32 sm:h-40 object-cover mb-3 transition-transform duration-500 hover:rotate-y"
            />
          </div>
          <h4
            className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Dr. Piyush Bhardwaj
          </h4>
          <p
            className="text-xs sm:text-sm text-gray-600"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sales Head
          </p>
        </div>
        <div className="text-center group">
          <div className="relative overflow-hidden">
            <img
              src="/about/founder.jpeg"
              alt="Team member"
              className="w-full h-32 sm:h-40 object-cover mb-3 transition-transform duration-500 hover:rotate-y"
            />
          </div>
          <h4
            className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Dr. Piyush Bhardwaj
          </h4>
          <p
            className="text-xs sm:text-sm text-gray-600"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sales Head
          </p>
        </div>
        <div className="text-center group">
          <div className="relative overflow-hidden">
            <img
              src="/about/founder.jpeg"
              alt="Team member"
              className="w-full h-32 sm:h-40 object-cover mb-3 transition-transform duration-500 hover:rotate-y"
            />
          </div>
          <h4
            className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Dr. Piyush Bhardwaj
          </h4>
          <p
            className="text-xs sm:text-sm text-gray-600"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sales Head
          </p>
        </div>
        <div className="text-center group">
          <div className="relative overflow-hidden">
            <img
              src="/about/founder.jpeg"
              alt="Team member"
              className="w-full h-32 sm:h-40 object-cover mb-3 transition-transform duration-500 hover:rotate-y"
            />
          </div>
          <h4
            className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Dr. Piyush Bhardwaj
          </h4>
          <p
            className="text-xs sm:text-sm text-gray-600"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sales Head
          </p>
        </div>
        <div className="text-center group">
          <div className="relative overflow-hidden">
            <img
              src="/about/founder.jpeg"
              alt="Team member"
              className="w-full h-32 sm:h-40 object-cover mb-3 transition-transform duration-500 hover:rotate-y"
            />
          </div>
          <h4
            className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Dr. Piyush Bhardwaj
          </h4>
          <p
            className="text-xs sm:text-sm text-gray-600"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sales Head
          </p>
        </div>
        <div className="text-center group">
          <div className="relative overflow-hidden">
            <img
              src="/about/founder.jpeg"
              alt="Team member"
              className="w-full h-32 sm:h-40 object-cover mb-3 transition-transform duration-500 hover:rotate-y"
            />
          </div>
          <h4
            className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-[#61c27a] transition-colors duration-300"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Dr. Piyush Bhardwaj
          </h4>
          <p
            className="text-xs sm:text-sm text-gray-600"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Sales Head
          </p>
        </div>
      
    </div>
  </div>
</div>

      {/* Quote Section */}
      <div className="relative py-16 bg-gradient-to-br from-teal-600 via-emerald-500 to-green-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                fill="none"
                className="opacity-40"
              >
                <path
                  d="M20 45C20 32 25 20 40 15V20C30 25 27 32 27 40H40V65H20V45Z"
                  fill="#ffffff"
                />
                <path
                  d="M60 45C60 32 65 20 80 15V20C70 25 67 32 67 40H80V65H60V45Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <blockquote
              className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              "The entire world is our family. We don't see human made divisions
              created by borders, backgrounds, or beliefs because at our core,
              we are all connected. We believe that{" "}
              <span className="font-bold">
                humanity is one, bound by love, compassion, and shared
                experiences
              </span>
              . No man-made boundary can change the truth that we are part of
              the same global family, walking this journey of life together."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Core Philosophy */}
      <div className="container py-16">
        <div className="bg-gradient-to-r from-teal-700 via-emerald-600 to-green-700 rounded-3xl p-6 sm:p-10 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Philosophy
            </h2>
            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 text-left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Thoughtful Curation
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Every detail is carefully selected to create meaningful
                      connections and lasting memories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Seamless Operations
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Professional execution with transparent budgets and no
                      surprises.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Local Integration
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Authentic experiences that honor local culture, nature,
                      and hospitality traditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Purpose-Driven
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Every itinerary is built around your specific goals for
                      connection, wellbeing, and results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {[
            {
              title: "Community Tours",
              icon: "🌍",
              desc: "Immersive cultural journeys that connect you with local communities",
            },
            {
              title: "Wellness Retreats",
              icon: "🧘",
              desc: "Transformative experiences focused on mindfulness and wellbeing",
            },
            {
              title: "Corporate Offsites",
              icon: "💼",
              desc: "Strategic retreats that strengthen teams and drive results",
            },
            {
              title: "MICE Programs",
              icon: "🎯",
              desc: "Large-format meetings and events delivered with precision",
            },
          ].map((item, index) => (
            <div key={index} className="group h-full">
              <div className="flex flex-col h-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div> */
}

{
  /* <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
      Your Journey with Traveon
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
      From initial planning to unforgettable memories, we guide you
      through every step
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="text-center group">
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
        <div className="text-5xl mb-4">📅</div>
        <h3 className="text-xl font-bold text-gray-900">Plan</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        Collaborative planning with our experts to design your perfect
        experience
      </p>
    </div>

    <div className="text-center group">
      <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
        <div className="text-5xl mb-4">✈️</div>
        <h3 className="text-xl font-bold text-gray-900">Experience</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        Immerse yourself in carefully curated activities and local
        culture
      </p>
    </div>

    <div className="text-center group">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
        <div className="text-5xl mb-4">🌟</div>
        <h3 className="text-xl font-bold text-gray-900">Transform</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        Return with renewed energy, deeper connections, and lasting
        memories
      </p>
    </div>
  </div>
</div>

<div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-12">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-8 lg:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
        Built on Trust
      </h2>
      <p className="text-base lg:text-xl text-gray-600 px-4">
        Our commitment to excellence is reflected in every aspect of our
        service delivery
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
      <div className="space-y-3 lg:space-y-4">
        <div className="bg-blue-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
          <span className="text-white text-lg lg:text-2xl">🤝</span>
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-gray-900">
          Partner Network
        </h3>
        <p className="text-sm lg:text-base text-gray-600 px-2">
          Trusted on-ground partners who share our commitment to quality
          and authenticity
        </p>
      </div>

      <div className="space-y-3 lg:space-y-4">
        <div className="bg-green-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
          <span className="text-white text-lg lg:text-2xl">🛡️</span>
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-gray-900">
          Safety Standards
        </h3>
        <p className="text-sm lg:text-base text-gray-600 px-2">
          Rigorous safety protocols ensuring peace of mind throughout
          your journey
        </p>
      </div>

      <div className="space-y-3 lg:space-y-4">
        <div className="bg-purple-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
          <span className="text-white text-lg lg:text-2xl">💎</span>
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-gray-900">
          Transparent Pricing
        </h3>
        <p className="text-sm lg:text-base text-gray-600 px-2">
          Clear budgets with no hidden costs—just beautifully run
          experiences
        </p>
      </div>
    </div>
  </div>
</div> */
}
