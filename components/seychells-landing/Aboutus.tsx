import React from "react";
import { lato } from "@/lib/fonts";

const SeychellesAbout = () => {
  return (
    <section
      className={`${lato.className} relative overflow-hidden pt-20 pb-16 lg:pt-[120px] lg:pb-[90px] bg-white`}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/pattern.svg')] bg-cover bg-center"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          {/* ---------- LEFT IMAGES ---------- */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="/seychelles/about/ab1.avif"
                    alt="Beach resort"
                    className="w-full rounded-2xl border border-amber-400/40 shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="py-3 sm:py-4">
                  <img
                    src="/seychelles/about/ab3.jpg"
                    alt="Luxury villas"
                    className="w-full rounded-2xl border border-amber-400/40 shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="/seychelles/about/ab2.avif"
                    alt="Seychelles nature"
                    className="w-full rounded-2xl border border-amber-400/40 shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1] opacity-60">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {[...Array(200)].map((_, i) => (
                        <circle
                          key={i}
                          cx={(i % 10) * 13 + 2}
                          cy={Math.floor(i / 10) * 13 + 2}
                          r="1.5"
                          fill="#FBBF24"
                        />
                      ))}
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT TEXT ---------- */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 border border-teal-700/40 shadow-xl rounded-3xl p-10">
              <p className="text-emerald-400 text-lg font-semibold uppercase tracking-widest mb-4">
                Seychelles
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                About Us
              </h2>
              <p className="text-teal-100 mb-5 text-lg leading-relaxed">
                Make your customers happy by giving premium services and
                unforgettable experiences. We design luxury journeys that blend
                comfort, culture, and tropical beauty.
              </p>
              <p className="text-teal-200 mb-8 leading-relaxed">
                Discover pristine beaches, turquoise lagoons, and curated travel
                experiences in Seychelles. We take care of every detail to make
                your escape seamless and magical.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 px-8 text-sm font-semibold uppercase rounded-lg bg-amber-500 hover:bg-amber-600 text-teal-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeychellesAbout;
