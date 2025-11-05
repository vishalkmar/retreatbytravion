import { ChevronDown } from "lucide-react";
import { lato } from "@/lib/fonts";

function HeroLanding() {
  return (
    <section
      className={`${lato.className} relative mt-[80px] h-screen w-full overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-cyan-900/40 to-blue-950/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
          Discover{" "}
          <span className="block text-sky-300 drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] mt-2">
            Thailand’s Magic
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 text-blue-100 font-light leading-relaxed">
          Explore golden temples, turquoise beaches, and the vibrant heart of
          Thai culture — where every sunrise tells a story.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-sky-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300">
            Explore Packages
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-cyan-200/40 hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300">
            Book Your Trip
          </button>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-200 opacity-80" />
        </div>
      </div>
    </section>
  );
}

export default HeroLanding;
