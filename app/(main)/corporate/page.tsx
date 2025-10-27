"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const logos = [
  { src: "/clients/1.png", alt: "Sixth Sense" },
  { src: "/clients/2.png", alt: "Delisted Stocks" },
  { src: "/clients/16.png", alt: "Nuwud" },
  { src: "/clients/3.png", alt: "PLSP" },
  { src: "/clients/4.png", alt: "Bharat Trust" },
  { src: "/clients/5.png", alt: "Client 5" },
  { src: "/clients/6.png", alt: "Client 6" },
  { src: "/clients/7.png", alt: "Client 7" },
  { src: "/clients/8.png", alt: "Client 8" },
  { src: "/clients/9.png", alt: "Client 9" },
  { src: "/clients/10.png", alt: "Client 10" },
];
const features = [
  {
    title: "Purposeful Design",
    description:
      "Every retreat is strategically designed to meet your specific organizational objectives and team dynamics.",
  },
  {
    title: "Professional Execution",
    description:
      "Experienced planners and trusted local partners ensure seamless logistics and flawless delivery.",
  },
  {
    title: "Measurable Impact",
    description:
      "Retreats that strengthen relationships, boost engagement, and enhance team performance with lasting results.",
  },
];

const tools = [
  {
    title: "Journal Writing & Art Therapy",
    image: "/corporate/7.png",
  },
  {
    title: "Dance Movement Therapy",
    image: "/corporate/8.png",
  },
  {
    title: "Sound Healing & 7 Chakra Healing",
    image: "/corporate/9.png",
  },
  {
    title: "Yoga & Forest Bathing",
    image: "/corporate/10.png",
  },
  {
    title: "Positive Affirmations & Visualization",
    image: "/corporate/6.png",
  },
  {
    title: "Transactional Analysis",
    image: "/corporate/11.png",
  },
];

const infiniteTools = [...tools, ...tools, ...tools];

const benefits = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Strengthen Team Cohesion",
    description:
      "Build deeper connections and improve communication across all team levels",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Inspire Innovation",
    description:
      "Foster creativity and fresh thinking through collaborative experiences",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M12 14v7" />
        <path d="M16 18h-8" />
      </svg>
    ),
    title: "Recognize & Reward",
    description: "Show appreciation for your team's hard work and dedication",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    title: "Align with Goals",
    description:
      "Ensure everyone is working towards shared organizational objectives",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <line x1="9" y1="11" x2="9" y2="7" />
      </svg>
    ),
    title: "Build Resilience",
    description:
      "Develop personal wellbeing and stress management capabilities",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M16 8l4-4" />
        <path d="M8 8L4 4" />
      </svg>
    ),
    title: "Achieve Results",
    description:
      "Create lasting positive change in team dynamics and performance",
  },
];
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Marketing Director, Tech Startup",
    image: "/testimonials/1.jpg",
    text: "The wellness retreat in Rishikesh completely transformed my perspective on work-life balance. The yoga sessions at sunrise and sound healing were exactly what my soul needed.",
  },
  {
    name: "Mahendra Pratap Singh",
    role: "Retired Bank Manager (Lucknow)",
    image: "/testimonials/2.jpg",
    text: "Our group of five friends travelled to Pattaya and Bangkok—proof that adventure has no age! Traveon handled every detail with care: smooth transfers, clean and central hotels, and thoughtfully paced days. It was joyful, comfortable, and truly memorable.",
  },
  {
    name: "Rahul Mehta",
    role: "Travel Blogger, Wanderlust Weekly",
    image: "/testimonials/3.jpg",
    text: "The community tour through Oman opened our eyes to authentic Arabia. Every interaction felt genuine, and the local connections we made were priceless.",
  },
  {
    name: "Neha Verma",
    role: "Corporate Wellness Coach",
    image: "/testimonials/4.jpg",
    text: "The retreat experience brought a deep sense of clarity and peace. Everything from accommodation to healing sessions was handled beautifully.",
  },
];

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What Is The Traveon Wellness Festival?",
    answer:
      "India's first workplace and institutional wellness festival—a joyful celebration of mind, body, heart, and soul. It brings teams together through holistic wellness experiences, unique and powerful healing tools, and mindful collective activities, creating lasting happiness and well-being.",
  },
  {
    id: 2,
    question: "Why Does My Organization Need A Wellness Festival?",
    answer:
      "A wellness festival helps boost employee morale, reduce stress, and improve overall team productivity through engaging wellness activities and experiences.",
  },
  {
    id: 3,
    question: "What Kind Of Activities Are Included In The Wellness Festival?",
    answer:
      "The festival includes yoga sessions, meditation workshops, team building activities, wellness talks, fitness challenges, and holistic healing experiences.",
  },
  {
    id: 4,
    question: "Can The Festival Be Customized For My Organization?",
    answer:
      "Yes, we offer fully customizable programs tailored to your organization's specific needs, culture, and wellness goals.",
  },
  {
    id: 5,
    question: "Can We Integrate Company Values Into The Festival?",
    answer:
      "Absolutely! We work closely with you to weave your company's values and culture into every aspect of the festival experience.",
  },
  {
    id: 6,
    question: "What If Our Team Is Remote Or Hybrid?",
    answer:
      "We offer flexible solutions including virtual wellness sessions, hybrid experiences, and customized programs that work for both in-person and remote team members.",
  },
];

const CorporateRetreatsPage: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/corporate/1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              <span className="font-light italic">Corporate</span> Retreats
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Transform your team dynamics with purposeful retreats that combine
              strategic planning, wellness, and immersive experiences
            </p>

            <a href="/retreats/corporate">
              <button className="group bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto">
              Explore Retreats
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
            </a>
          </div>
        </div>

        {/* Bottom Curves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20 sm:h-24 md:h-28" // Reduced heights
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.41,168.19-17.35,250.45-.39,69.63,14.14,136.72,38.64,207.05,48.39,81,11.27,168.41,3.63,249.11-18.9V120H0V74.05A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl font-light text-center mb-12 text-gray-600">
          Loved <span className="italic">by</span> Leading{" "}
          <span className="italic">Organizations</span>
        </h2>
       
        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-infinite-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-6 sm:mx-8 flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-28 sm:w-36 md:w-40 lg:w-48 object-contain hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Our Corporate Retreat Offerings*/}

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-emerald-300 opacity-60"
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Corporate Retreat{" "}
              <span className="italic text-emerald-500">Offerings</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored programs that inspire growth, collaboration, and
              well-being for every organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-96">
                <img
                  src="/corporate/2.png"
                  alt="Team-Building Experiences"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(182,45%,48%)] group-hover:to-[hsl(130,45%,58%)] group-hover:bg-clip-text group-hover:text-transparent">
                    Team-Building Experiences
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Strengthen trust, communication, and collaboration through
                    interactive and goal-driven activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-96">
                <img
                  src="/corporate/3.jpg"
                  alt="Wellness & Mindfulness Sessions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(182,45%,48%)] group-hover:to-[hsl(130,45%,58%)] group-hover:bg-clip-text group-hover:text-transparent">
                    Wellness & Mindfulness Sessions
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Promote mental clarity and reduce stress with guided
                    meditation, yoga, and wellness workshops.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-96">
                <img
                  src="/corporate/4.jpg"
                  alt="Strategic Workshops"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(182,45%,48%)] group-hover:to-[hsl(130,45%,58%)] group-hover:bg-clip-text group-hover:text-transparent">
                    Strategic Workshops & Knowledge Sessions
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Drive innovation and align goals with expert-led workshops
                    and brainstorming sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-96">
                <img
                  src="/corporate/4.jpg"
                  alt="Cultural Activities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(182,45%,48%)] group-hover:to-[hsl(130,45%,58%)] group-hover:bg-clip-text group-hover:text-transparent">
                    Cultural & Experiential Activities
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Immerse your team in unique cultural experiences that foster
                    connection and inspiration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Ordinary Offsites */}

      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Beyond Ordinary{" "}
                  <span className="text-[#FFD166] italic font-light">
                    Offsites
                  </span>
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  At Retreats by Traveon, we design corporate retreats that go
                  beyond ordinary offsites. Our retreats combine strategic
                  planning, wellness, team-building, and immersive experiences
                  to enhance collaboration, boost morale, and achieve
                  organizational goals.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <svg
                          className="w-7 h-7 text-emerald-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/corporate/5.jpg"
                alt="Team celebrating at retreat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Powerful Healing Tools */}
      <section className="relative w-full bg-white mt-12">
        <div className="relative w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Powerful{" "}
              <span className="text-emerald-500 italic font-light">
                Healing Tools
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              An array of powerful, science-backed & ancient tools designed to
              heal and transform
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className={`flex gap-6 ${isPaused ? "" : "animate-infinite-scroll"}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {infiniteTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden relative group cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-white text-2xl font-semibold leading-tight drop-shadow-lg">
                      {tool.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Corporates Retreats Matters */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="text-emerald-500 italic font-light">
                Corporate
              </span>{" "}
              Retreats{" "}
              <span className="text-emerald-500 italic font-light">Matter</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Corporate retreats are powerful opportunities to <br /> transform
              your team and organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm border border-gray-200">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}

      <section className="relative w-full">
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
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 max-w-4xl leading-tight">
              Creating a legacy of <span className="italic">Happiness,</span>
              <br />
              <span className="italic">Wellness</span> &{" "}
              <span className="italic">Belongingness</span>
            </h2>
            <a href="/retreats/corporate">
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
      </section>

      {/* Testimonials */}

      <section className="relative w-full overflow-hidden bg-gradient-primary text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-12">
            Heartfelt <span className="text-[#FFD166] font-medium italic">Words</span>{" "}
            From Our <span className="text-[#FFD166] font-medium italic">Happy</span>{" "}
            Guests
          </h2>
          <p className="mt-3 text-gray-200 text-sm md:text-base">
            Real experiences from guests who found renewal, teams that
            discovered synergy, and travelers who connected with purpose.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 15,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 shadow-lg rounded-xl p-6 w-[300px] md:w-[340px] flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="flex mb-2 text-yellow-400">
                  {"★★★★★".split("").map((star, j) => (
                    <span key={j}>{star}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic">“{t.text}”</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10 text-center text-white">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="text-3xl font-semibold leading-none">4.9</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[2px]"
              >
                <g transform="translate(0 -1028.4)">
                  <path
                    d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                    fill="#f39c12"
                  />
                  <path
                    d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                    fill="#f1c40f"
                  />
                </g>
              </svg>
            </div>
            <p className="text-sm text-gray-200 mt-1">Average Rating</p>
          </div>

          <div>
            <p className="text-3xl font-semibold">95%</p>
            <p className="text-sm text-gray-200 mt-1">Would Recommend</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">500+</p>
            <p className="text-sm text-gray-200 mt-1">5-Star Reviews</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">2,500+</p>
            <p className="text-sm text-gray-200 mt-1">Lives Transformed</p>
          </div>
        </div>

        <div className="mt-10 text-center mb-12">
          <a href="/retreats/corporate">
            <button className="bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-300 hover:to-green-300 text-green-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md">
              Explore →
            </button>
          </a>
        </div>
      </section>

      {/* Our Approach */}

      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Our <span className="text-teal-500 italic">Approach</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A systematic process ensuring every retreat delivers maximum
              impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            <div className="flex flex-col">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/corporate/12.png"
                  alt="Consultation & Planning"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl italic mb-2">Consultation & Planning</h3>
              <p className="text-gray-600 text-sm">
                Understand your goals, team dynamics, and desired outcomes
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl italic mb-2">Customized Itinerary</h3>
              <p className="text-gray-600 text-sm mb-4">
                Curate workshops, activities, wellness sessions, and
              </p>
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/corporate/13.png"
                  alt="Customized Itinerary"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/corporate/14.png"
                  alt="Execution & Support"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl italic mb-2">Execution & Support</h3>
              <p className="text-gray-600 text-sm">
                Professional on-ground management and seamless
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl italic mb-2">Evaluation & Feedback</h3>
              <p className="text-gray-600 text-sm mb-4">
                Measure impact and ensure lasting benefits for your team
              </p>
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/corporate/15.png"
                  alt="Evaluation & Feedback"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-2">
              Frequently{" "}
              <span className="text-teal-500 italic">Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.id}. {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-2xl text-gray-600">
                    {openId === faq.id ? "−" : "+"}
                  </span>
                </button>

                {openId === faq.id && (
                  <div className="px-6 py-5 bg-teal-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateRetreatsPage;
