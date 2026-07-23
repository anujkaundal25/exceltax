"use client"

import React from "react";
import { motion } from "framer-motion";

function Process() {
  const processSteps = [
    {
      stepNumber: "ÉTAPE 1",
      title: "Réserver une Consultation",
      description:
        "Prenez rendez-vous avec nos experts fiscaux et financiers. Nous prenons le temps de comprendre votre entreprise, vos objectifs financiers et vos exigences de conformité.",
      bannerBg: "bg-[#0c2c68]",
    },
    {
      stepNumber: "ÉTAPE 2",
      title: "Évaluation d'Expert & Stratégie",
      description:
        "Nos spécialistes analysent votre situation fiscale, vos registres comptables et les besoins de votre entreprise afin de créer une stratégie sur mesure qui garantit la conformité et soutient la croissance.",
      bannerBg: "bg-[#f38b0b]",
    },
    {
      stepNumber: "ÉTAPE 3",
      title: "Mise en Œuvre & Accompagnement Continu",
      description:
        "Nous gérons les déclarations fiscales, la comptabilité, la conformité juridique et le conseil de gestion tout en vous offrant un accompagnement continu pour maintenir votre entreprise performante et conforme.",
      bannerBg: "bg-[#0c2c68]",
    },
  ];

  // Motion variants orchestrating the "one by one" entrance sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delay gap between each card entry
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-6 lg:px-20 bg-white relative overflow-hidden bg-[url('/process-bg.webp')] bg-cover bg-center">
      {/* Background radial dot styling from your image */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tracking-widest text-xs md:text-sm font-bold text-[#f38b0b] uppercase mb-3 block">
            NOTRE PROCESSUS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0c2c68] tracking-tight mb-6">
            Notre Processus de Travail Simple
          </h2>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
            Interdum fringilla justo aptent consequat sem arcu ullamcorper. A himenaeos lacus torquent conubia quis erat luctus et turpis lectus ante.
          </p>
        </motion.div>

        {/* Dynamic Process Grid Layout */}
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
              className="bg-white border-2 border-dashed border-gray-200 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#0c2c68] group"
            >
              {/* Step Top Identification Banner */}
              <div className={`${step.bannerBg} text-white text-center py-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-300 group-hover:bg-[#f38b0b]`}>
                {step.stepNumber}
              </div>

              {/* Step Content Base Card */}
              <div className="p-8 flex-1 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0c2c68] mb-4 tracking-tight transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-normal">
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