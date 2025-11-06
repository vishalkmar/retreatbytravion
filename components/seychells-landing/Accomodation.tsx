import { Phone, Globe } from "lucide-react";
import { lato } from "@/lib/fonts";

export default function Accommodation() {
  return (
    <section
      className={`${lato.className} min-h-screen bg-white px-8 py-16 text-white relative overflow-hidden`}
    >
      {/* Background decorative icons */}

      {/* Heading */}
     <div className="text-center mb-16">
  <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent tracking-wide mb-3 drop-shadow-sm">
   Luxury Accommodation
  </h2>
  <p className="text-lg md:text-xl font-medium tracking-widest text-emerald-700">
    BOOK NOW & GET BENEFITS
  </p>
</div>

      {/* Cards Row */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Card */}
          <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 backdrop-blur-md border border-yellow-500 rounded-r-[120px] overflow-hidden flex-1 shadow-2xl transition-transform hover:scale-[1.02]">
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bedroom"
                className="w-1/2 h-80 object-cover rounded-r-[100px]"
              />
              <div className="p-8 flex flex-col justify-center w-1/2">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                  Elegant Bedroom
                </h3>
                <p className="text-gray-100text-[1rem] leading-relaxed">
                  Relax in a luxurious bedroom featuring modern design, soft
                  tones, and world-class amenities that redefine comfort.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 backdrop-blur-md border border-yellow-500 rounded-l-[120px] overflow-hidden flex-1 shadow-2xl transition-transform hover:scale-[1.02]">
            <div className="flex">
              <div className="p-8 flex flex-col justify-center w-1/2">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                  Cozy Lounge
                </h3>
                <p className="text-gray-100 text-[1rem] leading-relaxed">
                  A perfect spot to unwind with a soothing ambiance, soft
                  lighting, and elegant décor that brings warmth to your stay.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lounge"
                className="w-1/2 h-80 object-cover rounded-l-[100px]"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Card */}
          <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 backdrop-blur-md border border-yellow-500 rounded-r-[120px] overflow-hidden flex-1 shadow-2xl transition-transform hover:scale-[1.02]">
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Suite"
                className="w-1/2 h-80 object-cover rounded-r-[100px]"
              />
              <div className="p-8 flex flex-col justify-center w-1/2">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                  Modern Suite
                </h3>
                <p className="text-gray-100 text-[1rem] leading-relaxed">
                  A spacious suite with curated interiors, plush furniture, and
                  a calm ambiance for your utmost relaxation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 backdrop-blur-md border border-yellow-500 rounded-l-[120px] overflow-hidden flex-1 shadow-2xl transition-transform hover:scale-[1.02]">
            <div className="flex">
              <div className="p-8 flex flex-col justify-center w-1/2">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                  Premium View
                </h3>
                <p className="text-gray-100 text-[1rem] leading-relaxed">
                  Enjoy scenic views through large windows, designed to let you
                  experience serenity with style.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="View"
                className="w-1/2 h-80 object-cover rounded-l-[100px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
    </section>
  );
}
