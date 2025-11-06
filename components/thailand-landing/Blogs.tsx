"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { lato } from "@/lib/fonts";

export default function ThailandBlogs() {
  const blogs = [
    {
      id: 1,
      title: "Explore the Floating Markets of Bangkok",
      description:
        "Experience the colorful chaos of Thailand’s floating bazaars — food, crafts, and culture on water.",
      tag: "Travel Guide",
      image: "/thailand/blogs/b1.jpg",
    },
    {
      id: 2,
      title: "Discover the Serenity of Thai Islands",
      description:
        "White sands, blue waters, and tropical sunsets — explore paradise beyond Phuket and Krabi.",
      tag: "Destination",
      image: "/thailand/blogs/b2.jpg",
    },
    {
      id: 3,
      title: "Taste Authentic Thai Street Food",
      description:
        "From spicy Pad Thai to mango sticky rice — a flavorful journey through Thailand’s famous night markets.",
      tag: "Food & Culture",
      image: "/thailand/blogs/b3.jpg",
    },
    {
      id: 4,
      title: "Discover Chiang Mai’s Temples and Mountains",
      description:
        "A serene blend of history and nature — explore the northern charm of Thailand’s cultural heart.",
      tag: "Adventure",
      image: "/thailand/blogs/b4.jpg",
    },
  ];

  return (
    <section
      className={`py-16 sm:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex justify-center px-4 ${lato.className}`}
    >
      <div className="w-full max-w-[1300px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-10 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#008c91] tracking-tight">
            Thailand Blogs
          </h2>
        </motion.div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Left column */}
          <div className="flex flex-col gap-6 md:col-span-1">
            {blogs.slice(0, 2).map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative h-48 sm:h-56 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-xs bg-[#e6f8f7] text-[#008c91] px-2 py-1 rounded-full">
                    {blog.tag}
                  </span>
                  <h3 className="text-base sm:text-lg text-[#008c91] font-semibold mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm sm:text-[1rem] text-gray-600 line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center big card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between md:col-span-2 sm:col-span-2"
          >
            <div className="relative h-[300px] sm:h-[450px] md:h-[580px] w-full">
              <Image
                src="/thailand/blogs/last.avif"
                alt={blogs[1].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <span className="text-xs bg-[#e6f8f7] text-[#008c91] px-3 py-1 rounded-full">
                {blogs[1].tag}
              </span>
              <h3 className="text-lg sm:text-xl text-[#008c91] font-bold mt-3">
                {blogs[1].title}
              </h3>
              <p className="text-sm sm:text-[1rem] text-gray-600 line-clamp-2">
                {blogs[1].description}
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-6 md:col-span-1">
            {blogs.slice(2, 4).map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative h-48 sm:h-56 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-xs bg-[#e6f8f7] text-[#008c91] px-2 py-1 rounded-full">
                    {blog.tag}
                  </span>
                  <h3 className="text-base sm:text-lg text-[#008c91] font-semibold mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm sm:text-[1rem] text-gray-600 line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
