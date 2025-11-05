import { lato } from "@/lib/fonts"; // ✅ Import Lato font

function SeychellesPricing() {
  return (
    <div
      className={`${lato.className} min-h-screen bg-white to-teal-900 flex items-center justify-center p-6`} // ✅ Applied Lato font
    >
      <div className="max-w-6xl w-full bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden border border-teal-700/30 rounded-lg shadow-xl">
        {/* Heading */}
        <h2 className="md:text-6xl text-center py-[40px] font-extrabold text-emerald-400 tracking-wide mb-3">
          Seychelles Pricing
        </h2>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Image Section */}
          <div className="relative h-[600px] md:h-auto">
            <div className="absolute inset-0 z-10"></div>
            <img
              src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury Resort"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-8 left-8 z-20">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-8 h-8 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Pricing Details */}
          <div className="p-10 md:p-12 flex flex-col justify-center text-white">
            <div className="mb-10">
              <h2 className="text-left text-5xl font-bold">₹44,999</h2>
            </div>

            {/* Included */}
            <div className="mb-10">
              <h2 className="text-3xl font-light mb-6 tracking-wide">
                What's Included
              </h2>
              <ul className="space-y-3">
                {[
                  "Return flights (ex-Mumbai)",
                  "3 nights stay in Mahé",
                  "Breakfasts",
                  "Guided Mahé island tour with lunch",
                  "Full-day Praslin & La Digue tour with buffet lunch",
                  "Speedboat transfers",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-teal-100">
                    <svg
                      className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="border-t border-teal-700/50 pt-8">
              <h2 className="text-3xl font-light mb-6 tracking-wide">
                What's Not Included
              </h2>
              <ul className="space-y-3">
                {[
                  "Personal expenses",
                  "Early check-in / late check-out",
                  "Meals not mentioned",
                  "GST 5% & TCS as per govt rules",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-teal-200/80">
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button (optional) */}
            <div className="mt-10">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-teal-900 font-medium py-4 px-6 rounded-lg transition-colors duration-300 tracking-wide uppercase text-sm shadow-lg hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeychellesPricing;
