"use client"

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SiCardmarket } from "react-icons/si";
import { motion } from "framer-motion";

function Approach() {
  const features = [
    {
      icon: HiOutlineLightBulb,
      title: "Identify the Problems:",
      description:
        "We conduct a comprehensive audit of your management and information system.",
    },
    {
      icon: SiCardmarket, 
      title: "Representing Your Company:",
      description:
        "We act as an agent with tax authorities for all tax and parafiscal issues.",
    },
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-16 px-6 lg:px-20 bg-[url('/approach/approach-bg.webp')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Mobile Heading Box: Only visible on mobile, hidden on desktop (lg) */}
        <motion.div 
          className="block lg:hidden order-1 bg-white p-5 shadow-lg border-l-5 border-[#f38b0b] rounded-r-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-[#f38b0b]">Our Approach</h3>
          <p className="text-[#0c2c68]">
            By acting as both your company's tax advisor and lawyer, and by
            taking a systemic view of your business (One-Stop Shop
            Approach), our goal is to:
          </p>
        </motion.div>

        {/* Left Side: Image container (Becomes second on mobile, first on desktop) */}
        <div className="top-24 order-2 lg:order-none">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/approach/approach.jpg"
              alt="Our Approach"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />

            {/* Desktop Heading Box: Hidden on mobile, only visible on desktop (lg) */}
            <motion.div 
              className="hidden lg:block absolute bottom-4 left-4 bg-white p-5 shadow-lg max-w-lg border-l-5 border-[#f38b0b]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#f38b0b]">Our Approach</h3>
              <p className="text-[#0c2c68]">
                By acting as both your company's tax advisor and lawyer, and by
                taking a systemic view of your business (One-Stop Shop
                Approach), our goal is to:
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Content (Becomes third on mobile, second on desktop) */}
        <motion.div 
          className="flex flex-col justify-center order-3 lg:order-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold text-[#0c2c68] leading-tight mb-6"
            variants={fadeInUp}
          >
            A One-Stop Solution for Your Business Success
          </motion.h2>

          <motion.p 
            className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg"
            variants={fadeInUp}
          >
            By acting as both your company's tax advisor and legal partner,
            while taking a comprehensive view of your business, we provide a
            One-Stop Shop approach that simplifies complex financial and legal
            matters.
          </motion.p>

          {/* Feature List */}
          <motion.div className="grid sm:grid-cols-2 gap-6" variants={fadeInUp}>
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 bg-gray-50/60 border border-gray-100 rounded-xl shadow-xs shadow-[#0c2c68] hover:shadow-md transition-all duration-300 group flex flex-col gap-4"
                >
                  <div className="w-10 h-10 shrink-0 bg-[#f38b0b]/10 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-[#f38b0b] text-xl" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-950 mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Action Button */}
          <motion.div className="mt-10" variants={fadeInUp}>
            <button className="px-8 py-3.5 bg-[#0c2c68] hover:bg-black text-white font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 shadow-md active:scale-98 cursor-pointer">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Approach;