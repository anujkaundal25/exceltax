"use client";

import React from "react";
import { motion } from "framer-motion";

function Process() {
  const processSteps = [
    {
      stepNumber: "ÉTAPE 1",
      title: "1. Diagnostic",
      description: "Analyse approfondie de vos besoins et de votre environnement existant.",
      bannerBg: "bg-[#183B63]",
    },
    {
      stepNumber: "ÉTAPE 2",
      title: "2. Conception",
      description: "Élaboration de la solution personnalisée et adaptée à vos enjeux.",
      bannerBg: "bg-[#F68B2D]",
    },
    {
      stepNumber: "ÉTAPE 3",
      title: "3. Déploiement",
      description: "Installation, intégration des systèmes et premier niveau d'accompagnement.",
      bannerBg: "bg-[#183B63]",
    },
    {
      stepNumber: "ÉTAPE 4",
      title: "4. Formation",
      description: "Montée en compétence ciblée des équipes pour garantir l'adoption des outils.",
      bannerBg: "bg-[#F68B2D]",
    },
    {
      stepNumber: "ÉTAPE 5",
      title: "5. Assistance",
      description: "Support technique et fonctionnel réactif au quotidien.",
      bannerBg: "bg-[#183B63]",
    },
    {
      stepNumber: "ÉTAPE 6",
      title: "6. Amélioration Continue",
      description: "Suivi régulier des performances et ajustements stratégiques.",
      bannerBg: "bg-[#F68B2D]",
    },
  ];

  // Variations d'animation pour l'apparition séquentielle
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#FFFFFF] relative overflow-hidden bg-[url('/process-bg.webp')] bg-cover bg-center">
      {/* Pattern de fond à points */}
      <div className="absolute inset-0 bg-[radial-gradient(#EEF2F5_2px,transparent_2px)] [background-size:24px_24px] opacity-80 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête de section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tracking-widest text-xs md:text-sm font-bold text-[#F68B2D] uppercase mb-3 block">
            NOTRE MÉTHODOLOGIE
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#183B63] tracking-tight mb-6">
            Un processus structuré pour assurer votre réussite
          </h2>
          <p className="text-[#404040] text-sm md:text-base leading-relaxed font-normal">
            Découvrez comment nous structurons chaque projet, du premier diagnostic jusqu'à l'amélioration continue, afin d'assurer une transformation maîtrisée et pérenne.
          </p>
        </motion.div>

        {/* Grille de 6 cartes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-[#FFFFFF] border-2 border-dashed border-[#A9B4C0]/40 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#183B63] group"
            >
              {/* Bandeau supérieur de l'étape */}
              <div className={`${step.bannerBg} text-[#FFFFFF] text-center py-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-300 group-hover:bg-[#2E5D8A]`}>
                {step.stepNumber}
              </div>

              {/* Contenu principal de la carte */}
              <div className="p-8 flex-1 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#183B63] mb-4 tracking-tight transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[#404040] text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Process;