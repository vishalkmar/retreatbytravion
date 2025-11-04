"use client";
import { Moon, Utensils, Anchor } from "lucide-react";

export default function SeychellesItinerary() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
      {/* ===== PAGE HEADING ===== */}
      <div className="text-center pt-16 pb-8">
        <h1
          className="text-6xl md:text-7xl font-bold tracking-wide mb-4 text-white drop-shadow-md"
          style={{ fontFamily: "cursive" }}
        >
          Seychelles Itinerary
        </h1>
        <p className="text-teal-200 text-lg md:text-xl max-w-2xl mx-auto">
          A journey through pristine islands, coral lagoons, and unforgettable island experiences.
        </p>
      </div>

      {/* ===== Header Image ===== */}
      <div className="relative w-full h-[500px] mt-8 rounded-b-[100px] overflow-hidden shadow-xl border-t border-teal-700/40">
        <img
          src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Seychelles"
          className="w-full h-full object-cover opacity-80"
        />

        {/* Logo Box */}
        <div
          className="absolute top-0 right-0 bg-teal-900/80 backdrop-blur-md px-12 py-8 flex flex-col items-center justify-center shadow-lg border-l border-b border-teal-700/40"
          style={{
            borderBottomLeftRadius: "120px",
            minWidth: "280px",
          }}
        >
          <h1
            className="text-5xl font-bold mb-2 text-amber-400"
            style={{ fontFamily: "cursive" }}
          >
            Exquisite
          </h1>
          <p className="text-teal-200 text-sm tracking-widest font-semibold">
            TRAVEL & TOURS
          </p>
        </div>
      </div>

      {/* ===== Floating Title Card ===== */}
      <div
        className="absolute left-0 bg-teal-900/90 border border-teal-700/50 px-16 py-12 shadow-xl"
        style={{
          top: "380px",
          borderTopRightRadius: "120px",
          borderBottomRightRadius: "120px",
          zIndex: 20,
        }}
      >
        <h2 className="text-6xl font-bold mb-3 text-amber-400" style={{ fontFamily: "cursive" }}>
          Seychelles
        </h2>
        <p className="text-teal-200 text-3xl font-light tracking-wide">
          Package Tours
        </p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 container mx-auto px-8 pt-48 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* LEFT SIDE - ITINERARY CARDS */}
          <div className="space-y-10">
            {/* About */}
            <div className="bg-teal-900/60 border border-teal-700/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                About This Experience
              </h3>
              <p className="text-teal-100 text-lg leading-relaxed">
                4 days of island-hopping in Seychelles with guided Mahé, Praslin,
                and La Digue tours, flights included.
              </p>
            </div>

            {/* Daily Schedule */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6 drop-shadow-md">
                Daily Schedule
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    day: "Day 1",
                    title: "Arrival & Leisure",
                    desc: "Arrive Mahé, transfer to hotel, rest or explore.",
                  },
                  {
                    day: "Day 2",
                    title: "Mahé Island Tour",
                    desc: "Bel Ombre, Beau Vallon, colonial landmarks, Venn's Town, Sauzier Waterfall, Creole lunch.",
                  },
                  {
                    day: "Day 3",
                    title: "Praslin & La Digue",
                    desc: "Coco de Mer, Anse Lazio, La Digue cycling, beaches, giant tortoises.",
                  },
                  {
                    day: "Day 4",
                    title: "Victoria City & Departure",
                    desc: "Shopping in Victoria markets, airport transfer.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-teal-900/60 shadow-md rounded-3xl p-6 border border-teal-700/50 hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-amber-400 text-teal-900 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                        {item.day.split(" ")[1]}
                      </div>
                      <div>
                        <h4 className="text-emerald-400 font-semibold text-xl mb-1">
                          {item.title}
                        </h4>
                        <p className="text-teal-100 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CIRCULAR BOX */}
          <div
            className="lg:absolute right-0 top-1/2 transform lg:-translate-y-1/2 flex justify-center items-center overflow-hidden shadow-2xl border border-teal-700/40"
            style={{
              backgroundColor: "rgba(13, 65, 60, 0.9)",
              borderRadius: "50%",
              width: "550px",
              height: "550px",
              clipPath: "circle(50% at 50% 50%)",
            }}
          >
            <img
              src="/seychelles/it.avif"
              alt="Seychelles island"
              className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div
        className="absolute bottom-0 left-0 bg-teal-900 -z-10"
        style={{
          width: "600px",
          height: "300px",
          borderTopRightRadius: "200px",
        }}
      />
    </div>
  );
}
