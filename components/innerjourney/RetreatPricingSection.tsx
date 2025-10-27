/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const RetreatPricingSection = () => {
const inclusions = [
  "3 nights stay",
  "All meals (vegetarian)",
  "Daily yoga & meditation",
  "2 sound healing sessions",
  "Naad Activities",
  "Relaxation therapies",
  "Group ceremonies",
];

const exclusions = [
  "Personal therapies",
  "Flights",
  "Additional personal expenses",
];

  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative soft circles */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-green-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 blur-2xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What It Costs and Why
            <div className="w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-green-500 via-green-600 to-teal-600 rounded-full"></div>
          </h2>

          <p className="text-3xl md:text-4xl font-semibold text-green-700 mb-2">
            ₹40,000 <span className="text-lg text-gray-600 font-medium"></span>
          </p>

          <a
            href="#"
            className="text-green-700 font-medium text-base md:text-lg underline-offset-4 hover:underline hover:text-teal-600 transition-colors"
          >
            Can’t pay in one go? Click here, we don’t want you to miss out!
          </a>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Inclusions */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              What’s Included
            </h3>
            <ul className="space-y-1">
              {inclusions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-base leading-relaxed"
                >
                  <span className="flex-shrink-0 mt-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-50 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-teal-700 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-teal-500" />
              What’s Not Included
            </h3>
            <ul className="space-y-1">
              {exclusions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-base  leading-relaxed"
                >
                  <span className="flex-shrink-0 mt-1 text-teal-500">
                    <XCircle className="w-4 h-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          {/* <p className="text-gray-600 text-base md:text-lg italic">
            All prices include access to our complete retreat experience — crafted to restore,
            balance, and rejuvenate your mind, body, and soul.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default RetreatPricingSection;
