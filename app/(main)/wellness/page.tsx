"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { listPackages } from "@/lib/seed";
import { PackageCard } from "@/components/site/PackageCard";

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

const testimonialVideo = [
  {
    id: 1,
    videoId: "PYR3zh_TFiY",
    name: "Mahendra Pratap Singh",
    designation: "Retired Bank Manager",
    thumbnail: "/testimonials/1.jpg",
  },
  {
    id: 2,
    videoId: "oyBmIPONT-0",
    name: "Lokesh",
    designation: "Google, Gurugram",
    thumbnail: "/testimonials/10.png",
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

const WellnessRetreatsPage: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const playerRefs = useRef<{ [key: number]: any }>({});

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize players when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      testimonialVideo.forEach((video) => {
        playerRefs.current[video.id] = new (window as any).YT.Player(
          `player-${video.id}`,
          {
            videoId: video.videoId,
            playerVars: {
              autoplay: 1,
              mute: 1,
              controls: 0,
              loop: 1,
              playlist: video.videoId,
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
              iv_load_policy: 3,
              disablekb: 1,
              fs: 0,
            },
          }
        );
      });
    };
  }, []);

  const toggleMute = (id: number) => {
    const player = playerRefs.current[id];
    if (!player) return;

    if (activeVideo === id) {
      // Mute the current video
      player.mute();
      setActiveVideo(null);
    } else {
      // Mute all other videos
      Object.keys(playerRefs.current).forEach((key) => {
        const videoId = parseInt(key);
        if (playerRefs.current[videoId]) {
          playerRefs.current[videoId].mute();
        }
      });

      // Unmute the selected video
      player.unMute();
      setActiveVideo(id);
    }
  };

  const items = listPackages().filter((p) => p.category === "Wellness");

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
              <span className="font-light italic">Wellness</span> Retreats
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              A Celebration of Your Mind, Body, Heart and Soul
            </p>

            <a href="/retreats/wellness">
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

      {/*India Best Wellness Retreat*/}

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative dots on left side */}
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

        {/* Main container */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="italic text-emerald-500">India's</span> Best
              Wellness Retreat for{" "}
              <span className="italic text-emerald-500">Institution</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether seeking personal renewal, team growth, cultural
              connection, or business <br className="hidden sm:block" />
              excellence, we create experiences that leave lasting impact.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-[420px]">
                <img
                  src="/corporate/2.png"
                  alt="Holistic wellness zones"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(182,45%,48%)] group-hover:to-[hsl(130,45%,58%)] group-hover:bg-clip-text group-hover:text-transparent">
                    Holistic Wellness Zones
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Rejuvenate your mind, body, and spirit with curated wellness
                    experiences
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-[420px]">
                <img
                  src="/corporate/3.jpg"
                  alt="Workshops and Sharing Circles"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(182,45%,48%)] group-hover:to-[hsl(130,45%,58%)] group-hover:bg-clip-text group-hover:text-transparent">
                    Workshops and Sharing Circles
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Build stronger teams and drive innovation through
                    transformative offsites
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-[420px]">
                <img
                  src="/corporate/4.jpg"
                  alt="Joyful Evening Celebrations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(182,45%,48%)] group-hover:to-[hsl(130,45%,58%)] group-hover:bg-clip-text group-hover:text-transparent">
                    Joyful Evening Celebrations
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Connect with local cultures and communities through
                    meaningful travel
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
                  Why Wellness{" "}
                  <span className="text-[#FFD166] italic font-light">
                    Retreat?
                  </span>
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  In today&apos;s fast-paced world, we often forget to pause,
                  breathe, and reconnect with ourselves. A wellness retreat
                  gives you the space to slow down, recharge, and restore
                  balance— physically, mentally, and emotionally. At Retreat by
                  Traveon, we design immersive experiences that blend
                  mindfulness, yoga, meditation, and holistic therapies with
                  serene natural settings. Each retreat is crafted to help you
                  release stress, build inner clarity, and return with renewed
                  energy. Because true well-being is not just about escaping the
                  everyday—it&apos;s about discovering a healthier, happier way
                  to live.
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

      {/* packages */}

      <section className="py-12">
        <div className="text-center mb-8 border-teal-500 py-3 mx-auto">
          <h2 className="text-5xl">
            <span className="text-gray-800">Featured </span>
            <span className="text-teal-500 italic font-bold">Packages</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {items.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      </section>

      {/* Our Powerful Healing Tools */}
      <section className="relative w-full bg-white mt-12 mb-24">
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
          <a href="/retreats/wellness">
            <button className="bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-300 hover:to-green-300 text-green-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md">
              Explore →
            </button>
          </a>
        </div>
      </section>

      {/* testimonial video section */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              From Our <span className="italic text-emerald-500">Guests</span>,
              In Their Own{" "}
              <span className="italic text-emerald-500">Words</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Genuine stories from our guests, captured in <br /> their own
              words and experiences
            </p>
          </div>

          {/* Video Cards Grid */}
          <div className="flex justify-center gap-64 flex-wrap">
            {testimonialVideo.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-80"
              >
                {/* Video Container */}
                <div
                  className="relative aspect-[9/16] bg-black"
                  style={{ height: "600px" }}
                >
                  <div
                    id={`player-${testimonial.id}`}
                    className="absolute inset-0 w-full h-full"
                  ></div>

                  {/* Gradient Overlay for Better Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={() => toggleMute(testimonial.id)}
                    className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm pointer-events-auto"
                    aria-label={
                      activeVideo === testimonial.id ? "Mute" : "Unmute"
                    }
                  >
                    {activeVideo === testimonial.id ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>

                  {/* User Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.thumbnail}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-white object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-sm truncate">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-300 text-xs truncate">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default WellnessRetreatsPage;
