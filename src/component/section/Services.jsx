"use client"

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
      title: "EXCELT@X Conseil",
      description:
        "Professional fiscal, accounting, and business consulting services tailored to help organizations stay compliant and improve operational performance.",
      image: "/services/s1.jpg",
      icon: <BiBriefcaseAlt2 className="w-5 h-5 text-[#f38b0b]" />,
    },
    {
      id: 2,
      title: "EXCELT@X Logi",
      description:
        "Digital accounting and business management software designed to streamline finance, commercial operations, and administrative workflows.",
      image: "/services/s2.jpg",
      icon: <BiLaptop className="w-5 h-5 text-[#f38b0b]" />,
    },
    {
      id: 3,
      title: "EXCELT@X Edu",
      description:
        "Professional training and certification programs in accounting, taxation, finance, business management, and digital skills development.",
      image: "/services/s3.jpg",
      icon: <BiBookReader className="w-5 h-5 text-[#f38b0b]" />,
    },
    {
      id: 4,
      title: "EXCELT@X JuriFiscal",
      description:
        "Comprehensive legal and tax advisory services to ensure regulatory compliance, risk management, and business protection.",
      image: "/services/s4.jpg",
      icon: <BiSelectMultiple className="w-5 h-5 text-[#f38b0b]" />,
    },
    {
      id: 5,
      title: "EXCELT@X TéléProcédure",
      description:
        "Secure online tax filing and administrative procedures that simplify declarations and improve compliance efficiency.",
      image: "/services/s5.jpg",
      icon: <BiFileFind className="w-5 h-5 text-[#f38b0b]" />,
    },
    {
      id: 6,
      title: "EXCELT@X Recouv",
      description:
        "Debt recovery and receivables management solutions that help businesses improve cash flow and recover outstanding payments.",
      image: "/services/s6.jpg",
      icon: <BiShieldQuarter className="w-5 h-5 text-[#f38b0b]" />,
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
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-slate-50 to-slate-100" id="services" >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tracking-widest text-xs md:text-sm font-bold text-[#f38b0b] uppercase mb-3 block">
            What We Offer
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-[#0c2c68] tracking-tight mb-4">
            Our Professional Services
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Empowering your enterprise with specialized corporate solutions built
            for modern regulatory landscapes.
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
        className="flex justify-center pt-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button className="bg-[#f38b0b] text-white px-3 py-2 rounded-lg cursor-pointer">
          View All Services
        </button>
      </motion.div>
    </section>
  );
}

function ServiceCard({ card }) {
  return (
    <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer flex flex-col justify-between overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <div className="relative overflow-hidden rounded-xl mb-5 aspect-video w-full bg-slate-100 shadow-inner">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg shadow-md border border-gray-100 flex items-center justify-center">
            {card.icon}
          </div>
        </div>

        <div className="px-1">
          <h3 className="text-lg font-bold text-[#0c2c68] mb-2.5 group-hover:text-[#f38b0b] transition-colors">
            {card.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {card.description}
          </p>
        </div>
      </div>

      <div className="px-1 pt-2 mt-auto border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0c2c68] group-hover:text-[#f38b0b] transition-colors">
          Discover Module
        </span>

        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0c2c68] group-hover:bg-[#f38b0b] group-hover:text-white transition-all duration-300 shadow-sm">
          <BiRightArrowAlt className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

export default Services;