"use client"
import { motion } from "framer-motion"

const WhoThisIsForThailand = () => {
  const points = [
    {
      title: "Seekers of Serenity",
      description: "Escape the chaos and find your inner peace in Thailand's tranquil landscapes",
    },
    {
      title: "Nature Reconnectors",
      description: "Immerse yourself in lush jungles, pristine beaches, and ancient temples",
    },
    {
      title: "Wellness Warriors",
      description: "Rejuvenate your mind, body, and spirit through yoga, meditation, and holistic practices",
    },
    {
      title: "Soul Explorers",
      description: "Discover profound insights and realign your life's purpose in a sacred setting",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background via-emerald-50/30 to-background overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-5 w-80 h-80 bg-green-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase">Thailand Retreat</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Who This Experience is For
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            This sacred retreat welcomes open hearts ready to embrace transformation, reconnect with their essence, and
            experience the magic of Thailand.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {points.map((point, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              {/* Card Background with border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-green-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white/80 backdrop-blur-sm border border-emerald-200/30 rounded-2xl p-8 h-full hover:border-emerald-300/60 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10">
                {/* Top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-transparent rounded-t-2xl origin-left"
                ></motion.div>

                {/* Icon/Number */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{point.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">{point.description}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-tl-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  )
}

export default WhoThisIsForThailand
