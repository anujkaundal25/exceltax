"use client"

import React from "react";
import { BiLayer, BiSearchAlt, BiSelectMultiple, BiShieldQuarter } from "react-icons/bi";
import { motion } from "framer-motion";

function WhyChooseUs() {
  const steps = [
    {
      id: "01",
      title: "Initial Consultation",
      description: "We understand your business objectives, evaluate your tax structure, and identify opportunities to improve compliance and operational efficiency.",
      icon: <BiLayer className="w-5 h-5 text-[#f38b0b]" />
    },
    {
      id: "02",
      title: "Tax & Legal Assessment",
      description: "Our specialists review financial records, regulatory requirements, and legal obligations to create the most effective strategy for your business.",
      icon: <BiSearchAlt className="w-5 h-5 text-[#f38b0b]" />
    },
    {
      id: "03",
      title: "Strategy & Implementation",
      description: "We implement customized tax planning, compliance management, and legal solutions designed to minimize risk while supporting sustainable business growth.",
      icon: <BiSelectMultiple className="w-5 h-5 text-[#f38b0b]" />
    },
    {
      id: "04",
      title: "Continuous Advisory Support",
      description: "As regulations evolve, our experts provide ongoing guidance, compliance monitoring, and strategic advice to keep your business protected and future-ready.",
      icon: <BiShieldQuarter className="w-5 h-5 text-[#f38b0b]" />
    }
  ];

  // Motion variants for side columns containing stacked steps
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
    <section className="py-24 px-6 lg:px-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle architectural grid lines for background polish */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-4 bg-[#f38b0b] rounded-full block animate-pulse" />
              <span className="tracking-widest text-xs md:text-sm font-black text-sky-700 uppercase">
                Why Choose Excelt@x?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0c2c68] tracking-tight leading-[1.15]">
              A smarter approach to
              <br />
              <span className="bg-gradient-to-r from-[#0c2c68] to-[#f38b0b] bg-clip-text text-transparent">
                tax & legal excellence.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 border-l-2 border-[#f38b0b]/50 pl-6">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal">
              Excelt@x combines tax advisory, legal expertise, and strategic
              business consulting to help organizations stay compliant,
              optimize taxation, and make confident business decisions through
              practical, customized solutions.
            </p>
          </div>
        </motion.div>

        {/* Main Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Left Column (Steps 01 & 02) */}
          <motion.div 
            className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between gap-6"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="h-full">
              <StepCard step={steps[0]} />
            </motion.div>
            <motion.div variants={itemVariants} className="h-px bg-slate-100 my-1 pointer-events-none" />
            <motion.div variants={itemVariants} className="h-full">
              <StepCard step={steps[1]} />
            </motion.div>
          </motion.div>

          {/* Center Showcase Image Container */}
          <motion.div 
            className="relative overflow-hidden rounded-3xl min-h-[400px] lg:min-h-full group shadow-lg shadow-[#0c2c68]/5 border border-slate-100 flex items-stretch"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/why-choose-us.jpg"
              alt="Exceltax Consulting Workflow"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant multi-layer overlay for crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2c68]/80 via-[#0c2c68]/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-xs font-bold tracking-widest text-[#f38b0b] uppercase block mb-1">
                Corporate Synergy
              </span>
              <p className="text-white font-medium text-lg leading-snug">
                Streamlining standard financial compliance workflows into high-yield strategic assets.
              </p>
            </div>
          </motion.div>

          {/* Right Column (Steps 03 & 04) */}
          <motion.div 
            className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between gap-6"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="h-full">
              <StepCard step={steps[2]} />
            </motion.div>
            <motion.div variants={itemVariants} className="h-px bg-slate-100 my-1 pointer-events-none" />
            <motion.div variants={itemVariants} className="h-full">
              <StepCard step={steps[3]} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Extracted Sub-component for micro-interaction clarity and crisp structure
function StepCard({ step }) {
  return (
    <div className="group cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:bg-slate-50/70 flex flex-col justify-between h-full">
      <div>
        {/* Dynamic Upper Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-black text-slate-300 group-hover:text-[#f38b0b] transition-colors duration-300 tracking-tight font-mono">
            {step.id}
          </span>
          <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center transition-all duration-300 border border-slate-100 shadow-2xs group-hover:shadow-xs">
            {step.icon}
          </div>
        </div>

        {/* Content Elements */}
        <h3 className="text-xl font-bold text-[#0c2c68] mb-3 tracking-tight group-hover:text-sky-800 transition-colors duration-200">
          {step.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed font-normal">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default WhyChooseUs;