"use client"

import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiCheckSquare } from "react-icons/fi";
import { motion } from "framer-motion";

function HeroSection() {
  const benefits = ["Conseils Stratégiques", "Assistance en Cas d'Audit"];

  // Framer Motion Variants for cleaner orchestration
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // min-h calculation ensures it accounts for the desktop header height perfectly without over-scrolling
    <section className="relative w-full min-h-[calc(100vh-80px)] xl:h-[calc(100vh-80px)] bg-gradient-to-r from-[#041431] via-[#08204d] to-[#0c2c68] text-white overflow-hidden flex items-center">
      {/* Background Image Overlay for Texture */}
      <div
        className="absolute inset-0 bg-[url('/hero-section/hero-bg.webp')] bg-cover bg-center mix-blend-overlay opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle ambient lighting flare behind the content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 h-full">
        {/* Left Side Content Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center text-left py-6 lg:py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="tracking-widest uppercase text-xs md:text-sm font-bold text-[#F68B2D] uppercase mb-3 block"
            variants={itemVariants}
          >
            bienvenue chez exceltax
          </motion.span>

          <motion.h1 
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-2xl bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            EXCELTAX BUSINESS INTELLIGENCE GROUP
          </motion.h1>

          <motion.p 
            className="text-base md:text-lg text-gray-300 font-light max-w-xl mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Des solutions intelligentes pour une croissance durable
          </motion.p>

          <motion.div className="mb-10" variants={itemVariants}>
            <a href="#contact">
              <button className="inline-flex items-center gap-2 bg-[#F68B2D] hover:bg-white hover:text-[#041431] cursor-pointer text-white text-xs md:text-sm font-bold tracking-wider uppercase px-7 py-4 rounded-lg transition-all duration-500 shadow-xl hover:shadow-yellow-500/10 active:scale-98">
                Contactez-nous
                <HiArrowUpRight className="text-base stroke-2" />
              </button>
            </a>
          </motion.div>

          {/* Thin Divider Line */}
          <motion.div className="w-full h-[1px] bg-white/15 mb-8 max-w-xl" variants={itemVariants} />

          {/* Features/Benefits List */}
          <motion.div className="flex flex-wrap gap-x-8 gap-y-4" variants={itemVariants}>
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5 group">
                <FiCheckSquare className="text-[#F68B2D] text-xl transition-transform duration-300 group-hover:scale-110" />
                <span className="font-semibold text-sm md:text-base tracking-wide text-gray-200">
                  {benefit}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Image Cutout Column */}
        {/* self-end brings it down flush to the bottom; max-h settings prevent it from blowing out vertical space */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end mt-6 lg:mt-0">
          <motion.div 
            className="relative w-full max-w-[400px] lg:max-w-[550px] xl:max-w-[650px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/hero-section/herosection.png"
              alt="Comptable professionnel tenant un porte-bloc"
              className="w-full -mb-12 lg:m-0 lg:h-auto object-contain select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.01]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;