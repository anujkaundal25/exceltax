"use client";

import React from "react";
import { motion } from "framer-motion";

function GetStarted() {
  const stats = [
    {
      value: "999+",
      label: "Clients Satisfaits",
    },
    {
      value: "456+",
      label: "Dossiers Traités",
    },
    {
      value: "123+",
      label: "Membres d'Équipe",
    },
    {
      value: "25+",
      label: "Années d'Expérience",
    },
  ];

  // Motion Variants
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

  const statContainerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative bg-slate-900 px-4 sm:px-6 lg:px-20 pt-24 sm:pt-32 lg:pt-40 pb-48 sm:pb-56 lg:pb-64 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/get-started-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-slate-900/20"></div>
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
          className="block mb-4 text-xs md:text-sm font-black tracking-[3px] uppercase text-[#f38b0b]"
          variants={itemVariants}
        >
          COMMENCEZ AVEC exceltax 
        </motion.span>

        <motion.h2 
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-4xl mx-auto mb-6"
          variants={itemVariants}
        >
          Solutions Complètes de Gestion Fiscale, Juridique et d'Entreprise
        </motion.h2>

        <motion.p 
          className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-7 sm:leading-8 mb-10 sm:mb-12"
          variants={itemVariants}
        >
          Optimisez la performance de votre entreprise. Du conseil d'entreprise spécialisé
          et des logiciels ERP de gestion numérique sur mesure à la défense juridique continue,
          aux opérations de télédéclaration sécurisées et aux systèmes de recouvrement de créances.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 max-w-xs sm:max-w-none mx-auto" variants={itemVariants}>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-lg bg-[#f38b0b] hover:bg-[#d97b05] text-white font-bold uppercase transition cursor-pointer text-sm sm:text-base">
              Commencer
            </button>
          </a>

          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-lg bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition cursor-pointer text-sm sm:text-base">
              Contactez-Nous
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Stats Card */}
      <motion.div 
        className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 z-20 w-full max-w-6xl px-4 sm:px-6"
        variants={statContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-white border-b-5 border-yellow-500 shadow-2xl overflow-hidden rounded-xl sm:rounded-none">
          {/* Responsive border mapping using native Tailwind divider selectors */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={statItemVariants}
                className="py-6 sm:py-10 px-4 sm:px-6 text-center fallback-borders"
              >
                {/* Fallback support wrapper for older browsers or specific configurations where divide handles uneven grids weirdly */}
                <div className={`h-full flex flex-col justify-center ${index % 2 === 0 ? 'border-r border-gray-100 lg:border-none' : ''}`}>
                  <h3 className="text-[#f38b0b] text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-3">
                    {item.value}
                  </h3>
                  <p className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base tracking-wide px-2">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default GetStarted;