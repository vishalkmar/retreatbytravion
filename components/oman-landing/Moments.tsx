"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { lato } from "@/lib/fonts"
export default function MomentsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const packages = [
    {
      id: 1,
      title: "Adventure - Quad Biking",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/quad-biking-desert-adventure-oman-MciIfSxqmkPapRkCXO3dXddUZ5TigQ.jpg",
      category: "Adventure",
    },
    {
      id: 2,
      title: "Cultural - Bedouin Experience",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bedouin-tent-cultural-experience-oman-nbcOe5PkteWbCJIMA5h9Dq7J1I5PyA.jpg",
      category: "Cultural",
    },
    {
      id: 3,
      title: "Family Activities - Camel Ride",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/desert-with-camels-dNs1N3qJTkpoHlsSummxheWCZTTGzS.jpg",
      category: "Family Activities",
    },
    {
      id: 4,
      title: "Adventure - Mountain Trekking",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mountain-trekking-adventure-oman-EHM7dB6JTTTso1uzcORX3yBrAHIPQ9.jpg",
      category: "Adventure",
    },
    {
      id: 5,
      title: "Cultural - Traditional Market",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/traditional-market-cultural-oman-n4OhjyTlXCOANmQMBnebhBaqarorxy.jpg",
      category: "Cultural",
    },
  ]

  const filterOptions = ["All Packages", "Adventure", "Cultural", "Family Activities", "Customizable Packages"]
  const [activeFilter, setActiveFilter] = useState("All Packages")

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length)
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(packages[(currentIndex + i) % packages.length])
    }
    return items
  }

  return (
   <div className={`${lato.variable} min-h-screen bg-gray-900 py-16 px-4 md:px-8`}>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Moments You Must Live in <span className="text-amber-500">Oman</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mt-4"></div>
        </div>

        {/* Main Content - Sidebar + Carousel */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-3xl p-6 border border-gray-700">
              <h3 className="text-white font-bold text-lg mb-4">Tour Package</h3>

              {/* All Packages Button */}
              <button className="w-full bg-white text-gray-900 rounded-full py-3 px-4 font-semibold mb-6 flex items-center justify-between hover:bg-gray-100 transition-colors">
                <span>All Packages</span>
                <ChevronRight className="w-5 h-5 text-green-600" />
              </button>

              {/* Filter Options */}
              <div className="space-y-3">
                {filterOptions.slice(1).map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveFilter(option)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeFilter === option
                        ? "bg-green-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="flex-1">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div className="flex gap-4 md:gap-6">
                  {getVisibleItems().map((item, idx) => (
                    <div
                      key={item.id}
                      className={`flex-shrink-0 transition-all duration-300 ${
                        idx === 0 ? "w-full md:w-1/2 lg:w-2/5" : "w-full md:w-1/3 lg:w-1/3"
                      }`}
                    >
                      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl group">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6">
                          <h3 className="text-white font-bold text-lg md:text-xl">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center justify-center"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
