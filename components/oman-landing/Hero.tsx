import { ChevronDown } from "lucide-react";

function HeroLanding() {
  return (
    <section className="relative mt-[80px] h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/oman/banner2.jpg")', // Oman desert / mountainscape
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ✨ Softer Overlay Gradient — makes image glow instead of dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff8e1]/5 via-[#e5b46b]/10 to-[#3b250d]/40"></div>

      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-7xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Discover{" "}
          <span className="block text-amber-300  mt-2">
            Oman’s Tranquility
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 text-amber-50 font-light leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          From golden dunes to serene wadis — experience the timeless beauty of Oman’s landscapes,
          where peace and adventure meet under desert skies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-all duration-300">
            Explore Packages
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-amber-200/50 hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300">
            Book Your Retreat
          </button>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-200 opacity-90" />
        </div>
      </div>
    </section>
  );
}

export default HeroLanding;
