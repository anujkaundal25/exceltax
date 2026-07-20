"use client"; // Marks this file as a Client Component for Next.js

import React, { useState } from 'react';
import { BiPhoneCall, BiEnvelope, BiMap, BiTimeFive, BiSend } from 'react-icons/bi';
import { motion } from 'framer-motion';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Entry animation configurations
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        staggerChildren: 0.2, // Staggers the context stack inside the right side column
        delayChildren: 0.1
      } 
    }
  };

  const rightChildVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id='contact' className="py-24 px-6 lg:px-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16 mt-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="tracking-widest text-xs md:text-sm font-black text-[#f38b0b] uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0c2c68] tracking-tight mb-4">
            We're Ready to Help Your Business
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Have a question about our corporate modules, software integrations, or legal consults? Send us a message.
          </p>
        </motion.div>

        {/* Main Split Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT SIDE: The Interactive Request Form */}
          <motion.div 
            className="lg:col-span-7 bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm shadow-[#0c2c68] flex flex-col justify-between"
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h3 className="text-2xl font-black text-[#0c2c68] mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the quick form below and our response unit will reach out within 24 business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0c2c68] uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#f38b0b] focus:bg-white transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0c2c68] uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#f38b0b] focus:bg-white transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0c2c68] uppercase tracking-wider mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about EXCELT@X software/services" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#f38b0b] focus:bg-white transition-all duration-200 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0c2c68] uppercase tracking-wider mb-2">Message Details</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe how our teams can assist you..." 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#f38b0b] focus:bg-white transition-all duration-200 text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4 bg-[#0c2c68] hover:bg-[#f38b0b] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-[#0c2c68]/10 hover:shadow-[#f38b0b]/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Submit Request</span>
                  <BiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Corporate Details & Live Map Container */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/* Quick Contact Info Strip */}
            <motion.div 
              className="bg-[#0c2c68] text-white p-8 rounded-3xl shadow-xl shadow-[#0c2c68]/5 flex flex-col justify-between space-y-6"
              variants={rightChildVariants}
            >
              <h3 className="text-xl font-bold tracking-tight text-white mb-5">
                Corporate Headquarters
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#f38b0b]">
                    <BiPhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 block font-medium">Call Infrastructure</span>
                    <a href="tel:+237652521717" className="text-sm font-bold hover:text-[#f38b0b] transition-colors">+237 652 521 717</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#f38b0b]">
                    <BiEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 block font-medium">Digital Correspondence</span>
                    <a href="mailto:contact@exceltax.org" className="text-sm font-bold hover:text-[#f38b0b] transition-colors">direction@exceltax.org</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-[#f38b0b]">
                    <BiMap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 block font-medium">Physical Address</span>
                    <p className="text-sm font-bold leading-snug">EXCELTAX-NGO NJOH building, Carrefour BEN DECCA, PK12</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Live Map Window Container */}
            <motion.div 
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl shadow-slate-100/50 flex-1 min-h-[250px] relative"
              variants={rightChildVariants}
            >
              <iframe
                title="Exceltax Headquarters Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509604!2d144.95373531590483!3d-37.816279742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1619528731420!5m2!1sen!2sus"
                className="w-full h-full absolute inset-0 border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;