"use client";

import React from "react";
import {
  BiRightArrowAlt,
  BiBriefcaseAlt2,
  BiLaptop,
  BiBookReader,
  BiSelectMultiple,
  BiFileFind,
  BiShieldQuarter,
} from "react-icons/bi";
import { motion } from "framer-motion";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "EXCELTAX Advisory",
      description:
        "Strategic consulting, taxation, accounting, audit, legal advisory, governance, risk management, and business restructuring services designed to strengthen organizational performance and ensure regulatory compliance.",
      image: "/services/s1.jpg",
      icon: <BiBriefcaseAlt2 className="w-5 h-5 text-[#F68B2D]" />,
    },
    {
      id: 2,
      title: "EXSAFE 360",
      description:
        "A next-generation cloud ERP platform integrating finance, accounting, HR, CRM, inventory, production, procurement, business intelligence, and real-time reporting for modern organizations.",
      image: "/services/s2.jpg",
      icon: <BiLaptop className="w-5 h-5 text-[#F68B2D]" />,
    },
    {
      id: 3,
      title: "EXCELTAX AI OHADA",
      description:
        "Artificial intelligence platform dedicated to OHADA legal, accounting, tax, and compliance environments, providing intelligent assistance, document analysis, automated reviews, and reporting.",
      image: "/services/s3.jpg",
      icon: <BiBookReader className="w-5 h-5 text-[#F68B2D]" />,
    },
    {
      id: 4,
      title: "EXCELTAX Library",
      description:
        "A comprehensive digital library offering OHADA and CEMAC legal texts, tax regulations, jurisprudence, accounting standards, practical guides, document templates, and professional publications.",
      image: "/services/s4.jpg",
      icon: <BiSelectMultiple className="w-5 h-5 text-[#F68B2D]" />,
    },
    {
      id: 5,
      title: "EXCELTAX Academy",
      description:
        "Professional training and certification programs in taxation, accounting, audit, ERP systems, artificial intelligence, financial management, leadership, and SYSCOHADA standards.",
      image: "/services/s5.jpg",
      icon: <BiFileFind className="w-5 h-5 text-[#F68B2D]" />,
    },
    {
      id: 6,
      title: "LegalTech & RegTech",
      description:
        "Digital solutions that simplify legal compliance through contract automation, regulatory monitoring, risk management, continuous compliance, and intelligent governance tools.",
      image: "/services/s6.jpg",
      icon: <BiShieldQuarter className="w-5 h-5 text-[#F68B2D]" />,
    },
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 px-6 lg:px-20 bg-[#EEF2F5]"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tracking-widest text-xs md:text-sm font-bold text-[#F68B2D] uppercase mb-3 block">
            Ce Que Nous Proposons
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-[#183B63] tracking-tight mb-4">
            OUR ECOSYSTEM
          </h2>

          <p className="text-[#404040] text-sm md:text-base">
            Donner de la puissance à votre entreprise grâce à des solutions
            d'entreprise spécialisées adaptées au paysage réglementaire moderne.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard card={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Action Button */}
      <motion.div
        className="flex justify-center pt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button className="bg-[#F68B2D] hover:bg-[#2E5D8A] text-[#FFFFFF] font-semibold px-6 py-3 rounded-lg cursor-pointer transition-colors duration-300 shadow-md">
          Voir Tous Les Services
        </button>
      </motion.div>
    </section>
  );
}

function ServiceCard({ card }) {
  return (
    <div className="relative bg-[#FFFFFF] border border-[#A9B4C0]/30 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer flex flex-col justify-between overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#2E5D8A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="relative overflow-hidden rounded-xl mb-5 aspect-video w-full bg-[#EEF2F5] shadow-inner">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-sm p-2.5 rounded-lg shadow-md border border-[#A9B4C0]/20 flex items-center justify-center">
            {card.icon}
          </div>
        </div>

        <div className="px-1">
          <h3 className="text-lg font-bold text-[#183B63] mb-2.5 group-hover:text-[#F68B2D] transition-colors">
            {card.title}
          </h3>

          <p className="text-[#404040] text-sm leading-relaxed mb-6">
            {card.description}
          </p>
        </div>
      </div>

      <div className="px-1 pt-3 mt-auto border-t border-[#EEF2F5] flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2E5D8A] group-hover:text-[#F68B2D] transition-colors">
          Découvrir le Module
        </span>

        <div className="w-8 h-8 rounded-full bg-[#EEF2F5] flex items-center justify-center text-[#183B63] group-hover:bg-[#F68B2D] group-hover:text-[#FFFFFF] transition-all duration-300 shadow-sm">
          <BiRightArrowAlt className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

export default Services;