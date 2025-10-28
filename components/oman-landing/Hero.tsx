import { MapPin, Users, Star, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/banner-oman-2-5BcH8r24qNwBuBKaO1AdmBkb2v4ABx.jpg)',
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div> */}
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Unforgettable Family Adventures<br />
            <span className="text-white">In the Heart of Oman</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover the magic of Oman with expertly curated family tours, luxury stays, and authentic cultural experiences
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 flex items-center gap-3">
              <MapPin className="text-amber-400" size={24} />
              <div className="text-left">
                <p className="text-sm text-white-300">Destination</p>
                <p className="font-semibold">Muscat, Oman</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 flex items-center gap-3">
              <Calendar className="text-amber-400" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-300">Duration</p>
                <p className="font-semibold">5-7 Days</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 flex items-center gap-3">
              <Users className="text-amber-400" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-300">Group Size</p>
                <p className="font-semibold">2-15 People</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 flex items-center gap-3">
              <Star className="text-amber-400" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-300">Rating</p>
                <p className="font-semibold">4.9/5</p>
              </div>
            </div>
          </div>

          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Explore Tours
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
