"use client";

import React from "react";
import {
  BiGlobe,
  BiMapAlt,
  BiRocket,
  BiCheckCircle,
  BiTrendingUp,
  BiRightArrowAlt,
} from "react-icons/bi";
import { motion } from "framer-motion";

function WhyChooseUs() {
  const pillars = [
    {
      id: "01",
      title: "Une approche globale",
      subtitle: "Un écosystème complet réuni au sein d'un même groupe :",
      items: [
        "Conseil",
        "Digital",
        "ERP",
        "Formation",
        "Intelligence artificielle",
        "Documentation",
        "Assistance opérationnelle",
      ],
      icon: <BiGlobe className="w-5 h-5 text-[#F68B2D]" />,
    },
    {
      id: "02",
      title: "Une expertise africaine",
      subtitle: "Des solutions conçues spécifiquement pour les réalités de :",
      items: ["L'OHADA", "La CEMAC", "Le Cameroun", "Les marchés africains"],
      icon: <BiMapAlt className="w-5 h-5 text-[#F68B2D]" />,
    },
    {
      id: "03",
      title: "Une transformation digitale maîtrisée",
      subtitle: "Nous accompagnons les organisations dans leur évolution :",
      transformations: [
        { from: "du papier", to: "au numérique" },
        { from: "des traitements manuels", to: "à l'automatisation" },
        { from: "des données dispersées", to: "au pilotage intelligent" },
      ],
      icon: <BiRocket className="w-5 h-5 text-[#F68B2D]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-28 px-6 lg:px-20 bg-[#183B63] text-[#FFFFFF] overflow-hidden">
      {/* Background Subtle Glow Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2E5D8A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F68B2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Side-by-side Heading & Graphic alignment fix */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center relative min-h-[480px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex flex-col items-start select-none">
              <div className="mb-8">
                <span className="tracking-widest text-xs font-black text-[#F68B2D] uppercase block mb-2">
                  POURQUOI CHOISIR EXCELTAX ?
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#FFFFFF] leading-snug">
                  Partenaire stratégique de votre performance.
                </h2>
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/050/230/752/small_2x/white-3d-question-mark-on-a-transparent-background-free-png.png"
                  alt="Question mark"
                  className="h-[350px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Modern Glassmorphic Cards */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-4 group"
              >
                {/* Arrow Indicator Pointer */}
                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#EEF2F5]/10 text-[#FFFFFF] shrink-0 group-hover:translate-x-1 transition-transform">
                  <BiRightArrowAlt className="w-5 h-5 text-[#F68B2D]" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-[#2E5D8A]/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl flex items-center justify-between border border-[#EEF2F5]/15 border-l-4 border-l-[#F68B2D] relative overflow-hidden transition-all duration-300 hover:border-[#F68B2D]/50 hover:bg-[#2E5D8A]/70">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EEF2F5]/70">
                        {pillar.id} / {pillar.title}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-1 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[#EEF2F5]/90 text-xs md:text-sm mb-4 font-normal">
                      {pillar.subtitle}
                    </p>

                    {pillar.items && (
                      <div className="flex flex-wrap gap-2">
                        {pillar.items.map((item, itemIdx) => (
                          <span
                            key={itemIdx}
                            className="bg-[#183B63]/60 text-[#FFFFFF] text-xs px-3 py-1.5 rounded-lg font-medium backdrop-blur-sm border border-[#EEF2F5]/10 flex items-center gap-1.5"
                          >
                            <BiCheckCircle className="text-[#F68B2D] shrink-0 w-3.5 h-3.5" />
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {pillar.transformations && (
                      <div className="space-y-2">
                        {pillar.transformations.map((t, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-center gap-2 text-xs bg-[#183B63]/60 px-3 py-2 rounded-xl backdrop-blur-sm border border-[#EEF2F5]/10 text-[#FFFFFF]"
                          >
                            <span className="text-[#A9B4C0] line-through capitalize font-medium">
                              {t.from}
                            </span>
                            <BiTrendingUp className="text-[#F68B2D] shrink-0" />
                            <span className="font-bold text-[#FFFFFF] capitalize">
                              {t.to}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-[#183B63]/70 border border-[#EEF2F5]/20 items-center justify-center backdrop-blur-md shadow-inner">
                    {pillar.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;