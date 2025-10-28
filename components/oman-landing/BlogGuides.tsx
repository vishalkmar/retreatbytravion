"use client"

import Image from "next/image"

export default function BlogGuides() {
  const blogPosts = [
    {
      id: 1,
      category: "DESTINATION PRACTICALITIES",
      title: "15 things to know before going to Oman",
      date: "Mar 31, 2025",
      readTime: "10 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bedouin-tent-cultural-experience-oman-nbcOe5PkteWbCJIMA5h9Dq7J1I5PyA.jpg",
    },
    {
      id: 2,
      category: "BUDGET TRAVEL",
      title: "How to see more Oman on a budget",
      date: "Mar 20, 2025",
      readTime: "7 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/camel-ride-family-activities-oman-bvoBaBoZcGZHkhjkzC8qUr5cfiMDRk.jpg",
    },
    {
      id: 3,
      category: "ACTIVITIES",
      title: "14 of the best things Oman",
      date: "Mar 14, 2025",
      readTime: "6 min read",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/quad-biking-desert-adventure-oman-MciIfSxqmkPapRkCXO3dXddUZ5TigQ.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-amber-50 px-8 py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Title */}
          <div>
            <h1 className="text-5xl font-bold text-green-700 mb-2">
              Blog & Travel <span className="text-amber-500">Guides</span>
            </h1>
            <div className="w-32 h-1 bg-amber-500 rounded-full"></div>
          </div>

          {/* Description */}
          <div className="lg:w-1/3">
            <p className="text-gray-700 leading-relaxed text-sm">
              Oman offers rich culture, stunning landscapes, and warm hospitality. Visit between October and April for
              the best experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative h-90 rounded-3xl overflow-hidden group cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/desert-adventure-interior-restaurant-oman-ZIRV8sVZz5AZ4ttDbhqXYMpV8uR0js.jpg"
                alt="Unforgettable Desert Adventures"
                fill
                className="object-cover group-hover:scale-105 transiti  on-transform duration-300"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-white text-xs font-bold tracking-wider mb-3">DAY TRIP</span>
                <h2 className="text-white text-3xl font-bold mb-3">Unforgettable Desert Adventures for All Ages</h2>
                <p className="text-white/90 text-sm mb-4">Apr 10, 2025 · 8 min read</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Oman offers rich culture, stunning landscapes, and warm hospitality. Visit between October and April
                  for the best experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Blog Cards */}
          <div className="flex flex-col gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex gap-4 cursor-pointer group">
                {/* Image */}
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-green-700 text-xs font-bold tracking-wider mb-1">{post.category}</p>
                  <h3 className="text-gray-900 font-bold text-sm mb-2 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Explore more
        </button>
      </div>
    </div>
  )
}
