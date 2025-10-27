
"use client"
import {
  Search,
  CheckCircle2,
  User,
  FileText,
  Calendar,
  Shield,
  Star,
  AlertCircle,
  XCircle,
} from "lucide-react";

function OmanVisaFullPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center mt-[80px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Oman Visa for Indians</h1>
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-lg">Visa guaranteed in 48 Hrs</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            <a href="#oman-visa-requirements">Check Required Documents</a>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Authorization Badge */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 inline-flex items-center space-x-2 mb-6">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-blue-900 font-medium">
                Atlys is authorised by the Government of Oman
              </span>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-3xl font-bold">4.7</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Loved and Trusted by 1,125 Indians
                  </p>
                  <p className="text-xs text-gray-500">
                    Rated 5 stars by mmm, mmeeyeeeek, and last-minute plannerz
                  </p>
                </div>
              </div>
            </div>

            {/* Visa Information */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Oman Visa Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Visa Type:</p>
                    <p className="font-medium">E-Visa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Length of Stay:</p>
                    <p className="font-medium">10 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Validity:</p>
                    <p className="font-medium">90 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Entry:</p>
                    <p className="font-medium">Single</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Method:</p>
                    <p className="font-medium">Paperless</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get a Guaranteed on */}
            {/* <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Get a Guaranteed on</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">in 4 days</p>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">28 Oct 2025 at 05:20 AM</span>
                </div>
                <button className="text-sm text-blue-600 mt-2 hover:underline">View Timeline →</button>
              </div>
            </div> */}

            {/* Requirements */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2
                className="text-xl font-bold mb-4"
                id="oman-visa-requirements"
              >
                Oman Visa Requirements
              </h2>
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                <FileText className="h-5 w-5 text-gray-600" />
                <span className="font-medium">
                  Passport
                  <p>
                    A scanned copy of your passport’s front and back pages.
                    Passport must be valid for at least 6 months from your
                    intended date of arrival in Oman.
                  </p>
                </span>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                <FileText className="h-5 w-5 text-gray-600" />
                <span className="font-medium">
                  Photo
                  <p>
                    A recent passport-size photo taken on a plain
                    background{" "}
                  </p>
                </span>
              </div>
            </div>

            {/* Partners */}
<div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
  <h2 className="text-xl font-bold mb-4 text-left">
    Partners We Work With
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
    {[
      "https://images.prismic.io/atlys/d5504196-40e8-41ba-a58d-768ccab8807d_iata.png?auto=compress,format&rect=0,0,356,240&w=356&h=240",
      "https://images.prismic.io/atlys/79035ea0-38e8-4e29-85e1-dba77e6447ab_image+%285%29.png?auto=compress,format",
      "https://images.prismic.io/atlys/0efcdc3c-958f-4cd9-b500-1f9b4d48c289_Oman+airline..png?auto=compress,format",
      "https://images.prismic.io/atlys/0d38ce80-0a52-460e-aa34-f9c72fa7a762_Oman+ministry+of+foreign+affairs..png?auto=compress,format",
    ].map((src, i) => (
      <div
        key={i}
        className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-24 w-full"
      >
        <img
          src={src}
          alt={`Partner ${i + 1}`}
          className="max-h-16 object-contain"
        />
      </div>
    ))}
  </div>
</div>


            {/* Process Steps */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">
                How Oman Visa Process Works
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Step 1",
                    title: "Apply on Atlys",
                    desc: "Submit your documents on Atlys — only pay government fee.",
                  },
                  {
                    step: "Step 2",
                    title: "Your Documents Are Verified",
                    desc: "Atlys verifies your documents and submits to Immigration",
                  },
                  {
                    step: "Step 3",
                    title: "Your Visa Gets Processed",
                    desc: "We work with Immigration to ensure you get your Visa on time.",
                  },
                  {
                    step: "Step 4",
                    title: "Get Your Visa on 28 Oct, 05:20 AM",
                    desc: "Your visa will be delivered on time",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1 border border-gray-200 rounded-lg p-4">
                      <p className="text-xs text-blue-600 font-medium mb-1">
                        {item.step}
                      </p>
                      <p className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rejection Reasons */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">
                Oman Visa Rejection Reasons
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Factors that can get your visa rejected
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: XCircle,
                    title: "Expired Passport",
                    description:
                      "Applying with a passport that has expired or expires within 6 months",
                  },
                  {
                    icon: AlertCircle,
                    title: "Criminal Record",
                    description:
                      "Having a criminal history that disqualifies you from obtaining a Visa.",
                  },
                  {
                    icon: AlertCircle,
                    title: "Previous Visa Violations",
                    description:
                      "Having overstayed or violated the terms of a previous visa.",
                  },
                ].map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-red-200 hover:bg-red-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <reason.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">
                        {reason.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">4.81</div>
                  <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full mt-2">
                    Outstanding
                  </div>
                  <div className="text-sm text-gray-500 mt-1">1125 Reviews</div>
                </div>
                <div className="flex-1 text-sm text-gray-600">
                  <p className="font-medium mb-2">
                    Common Keywords Found in Reviews
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Quick Decision",
                      "Easy Application",
                      "Customer Support",
                      "Documentation",
                      "On Time",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                {[
                  {
                    name: "Hritinava Banik",
                    location: "Vadodara, Gujarat",
                    date: "18 Sep, 2025",
                    title: "Impressively Fast and Easy Oman Visa Process!",
                    content:
                      "I was shocked to see how easy that was. I just uploaded my passport and photo. Initially, the app said, it would take 2 days for the visa to arrive but shockingly within 8 hours I got my Oman Visa.",
                  },
                  {
                    name: "Riyankaroy",
                    location: "Rajkot,Gujarat",
                    date: "21 Aug, 2025",
                    title: "A Seamless Visa Experience",
                    content:
                      "Applying for visas has always been one of the least exciting parts of travel for me.",
                  },
                ].map((review, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{review.name}</p>
                          <p className="text-xs text-gray-500">
                            {review.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded inline-block mb-2">
                      OCCASIONAL TRAVELLER
                    </div>
                    <p className="font-medium text-sm mb-1">{review.title}</p>
                    <p className="text-sm text-gray-600">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 text-blue-900">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">Get Your Visa in 48 Hrs</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold mb-3">Price Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Government fee</span>
                      <span className="font-medium">₹1,800</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Xclusive Oman Fees</span>
                      <div className="text-right">
                        <span className="line-through text-gray-400 mr-2">
                          ₹1,500
                        </span>
                        <span className="font-medium">₹0 for now</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    No advance payment. Pay only when you get your visa
                  </p>
                </div>

                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.xclusiveoman.com/oman-visa")
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors mb-4"
                >
                  Start Application
                </button>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-sm">Xclusive Oman</span>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      Free
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    If Visa Delayed — No Xclusive Oman Fee
                  </p>
                  <p className="text-xs text-gray-600">
                    If Rejected — 100% Refund
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmanVisaFullPage;
