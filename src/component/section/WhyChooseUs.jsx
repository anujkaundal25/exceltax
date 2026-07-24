"use client";

import React from "react";
import { 
  BiGlobe, 
  BiMapAlt, 
  BiRocket, 
  BiCheckCircle, 
  BiTrendingUp 
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
        "Assistance opérationnelle"
      ],
      icon: <BiGlobe className="w-5 h-5 text-[#F68B2D]" />
    },
    {
      id: "02",
      title: "Une expertise africaine",
      subtitle: "Des solutions conçues spécifiquement pour les réalités de :",
      items: [
        "L'OHADA",
        "La CEMAC",
        "Le Cameroun",
        "Les marchés africains"
      ],
      icon: <BiMapAlt className="w-5 h-5 text-[#F68B2D]" />
    },
    {
      id: "03",
      title: "Une transformation digitale maîtrisée",
      subtitle: "Nous accompagnons les organisations dans leur évolution :",
      transformations: [
        { from: "du papier", to: "au numérique" },
        { from: "des traitements manuels", to: "à l'automatisation" },
        { from: "des données dispersées", to: "au pilotage intelligent" }
      ],
      icon: <BiRocket className="w-5 h-5 text-[#F68B2D]" />
    }
  ];

  const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#EEF2F5] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#A9B4C01A_1px,transparent_1px),linear-gradient(to_bottom,#A9B4C01A_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-4 bg-[#F68B2D] rounded-full block animate-pulse" />
              <span className="tracking-widest text-xs md:text-sm font-black text-[#2E5D8A] uppercase">
                POURQUOI CHOISIR EXCELTAX ?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#183B63] tracking-tight leading-[1.15]">
              Partenaire stratégique de votre
              <br />
              <span className="bg-gradient-to-r from-[#183B63] to-[#F68B2D] bg-clip-text text-transparent">
                performance et conformité.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-l-2 border-[#F68B2D]/50 pl-6">
            <p className="text-[#404040] text-sm md:text-base leading-relaxed font-normal">
              EXCELTAX réunit expertise sectorielle, maîtrise réglementaire locale et innovations technologiques pour propulser le développement de votre organisation.
            </p>
          </div>
        </motion.div>

        {/* Main Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Pillar 01: Approche Globale */}
          <motion.div 
            className="bg-[#FFFFFF] border border-[#A9B4C0]/30 rounded-3xl p-6 shadow-sm flex flex-col justify-between"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-[#A9B4C0] tracking-tight font-mono">
                  {pillars[0].id}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#EEF2F5] flex items-center justify-center border border-[#A9B4C0]/20 shadow-xs">
                  {pillars[0].icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#183B63] mb-2 tracking-tight">
                {pillars[0].title}
              </h3>
              <p className="text-[#404040] text-xs mb-4 font-medium">
                {pillars[0].subtitle}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {pillars[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#404040] text-sm bg-[#EEF2F5]/80 p-2.5 rounded-xl border border-[#A9B4C0]/20">
                    <BiCheckCircle className="text-[#F68B2D] shrink-0 w-4 h-4" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Center Showcase Image Container */}
          <motion.div 
            className="relative overflow-hidden rounded-3xl min-h-[400px] lg:min-h-full group shadow-lg border border-[#A9B4C0]/30 flex items-stretch"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/why-choose-us.jpg"
              alt="Expertise EXCELTAX"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#183B63]/90 via-[#183B63]/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-xs font-bold tracking-widest text-[#F68B2D] uppercase block mb-1">
                L'Excellence Opérationnelle
              </span>
              <p className="text-[#FFFFFF] font-medium text-lg leading-snug">
                Allier vision panafricaine et transformation numérique pour sécuriser et accélérer votre croissance.
              </p>
            </div>
          </motion.div>

          {/* Right Column (Pillars 02 & 03) */}
          <motion.div 
            className="flex flex-col justify-between gap-8"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Pillar 02: Expertise Africaine */}
            <motion.div variants={itemVariants} className="bg-[#FFFFFF] border border-[#A9B4C0]/30 rounded-3xl p-6 shadow-sm flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black text-[#A9B4C0] tracking-tight font-mono">
                  {pillars[1].id}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#EEF2F5] flex items-center justify-center border border-[#A9B4C0]/20 shadow-xs">
                  {pillars[1].icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#183B63] mb-1 tracking-tight">
                {pillars[1].title}
              </h3>
              <p className="text-[#404040] text-xs mb-3 font-medium">
                {pillars[1].subtitle}
              </p>

              <div className="flex flex-wrap gap-2">
                {pillars[1].items.map((item, idx) => (
                  <span key={idx} className="bg-[#2E5D8A]/10 text-[#2E5D8A] font-semibold text-xs px-3 py-1.5 rounded-lg border border-[#2E5D8A]/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Pillar 03: Transformation Digitale */}
            <motion.div variants={itemVariants} className="bg-[#FFFFFF] border border-[#A9B4C0]/30 rounded-3xl p-6 shadow-sm flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black text-[#A9B4C0] tracking-tight font-mono">
                  {pillars[2].id}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#EEF2F5] flex items-center justify-center border border-[#A9B4C0]/20 shadow-xs">
                  {pillars[2].icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#183B63] mb-1 tracking-tight">
                {pillars[2].title}
              </h3>
              <p className="text-[#404040] text-xs mb-3 font-medium">
                {pillars[2].subtitle}
              </p>

              <div className="space-y-2">
                {pillars[2].transformations.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs bg-[#EEF2F5] p-2 rounded-xl">
                    <span className="text-[#A9B4C0] line-through capitalize">{t.from}</span>
                    <BiTrendingUp className="text-[#F68B2D] shrink-0" />
                    <span className="font-bold text-[#183B63] capitalize">{t.to}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;