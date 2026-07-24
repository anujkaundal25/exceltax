"use client";

import React from "react";
import { motion } from "framer-motion";

// Defined animation variants outside the component to prevent re-creation on re-renders
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function GetStarted() {
  return (
    <section className="relative bg-[#183B63] px-4 sm:px-6 lg:px-20 pt-24 sm:pt-32 lg:pt-40 pb-48 sm:pb-56 lg:pb-64 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/get-started-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-[#183B63]/40"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span 
          className="block mb-4 text-xs md:text-sm font-black tracking-[3px] uppercase text-[#F68B2D]"
          variants={itemVariants}
        >
          COMMENCEZ AVEC exceltax 
        </motion.span>

        <motion.h2 
          className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-4xl mx-auto mb-6"
          variants={itemVariants}
        >
          Business Intelligence for Africa
        </motion.h2>

        <motion.p 
          className="text-[#EEF2F5] text-sm sm:text-base max-w-2xl mx-auto leading-7 sm:leading-8 mb-10 sm:mb-12"
          variants={itemVariants}
        >
          Nous transformons la conformité, la technologie et la connaissance en leviers de performance durable.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 max-w-xs sm:max-w-none mx-auto" 
          variants={itemVariants}
        >
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-lg bg-[#F68B2D] hover:bg-[#2E5D8A] text-[#FFFFFF] font-bold uppercase transition-colors duration-300 cursor-pointer text-sm sm:text-base shadow-md">
              Commencer
            </button>
          </a>

          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-lg bg-[#FFFFFF]/10 border border-[#A9B4C0]/40 text-[#FFFFFF] backdrop-blur-sm hover:bg-[#2E5D8A] hover:border-[#2E5D8A] transition-all duration-300 cursor-pointer text-sm sm:text-base font-semibold">
              Contactez-Nous
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default GetStarted;