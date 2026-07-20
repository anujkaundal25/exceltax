"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';

function Faq() {
  const faqData = [
    {
      id: 1,
      question: "WHAT SERVICES DOES EXCELTAX PROVIDE?",
      answer: "ExcelTax provides comprehensive corporate tax assistance, accounting infrastructure setup, financial management consulting, and continuous regulatory compliance guidance tailored to your business goals."
    },
    {
      id: 2,
      question: "DO YOU PROVIDE ONGOING COMPLIANCE SUPPORT?",
      answer: "Yes, we offer dedicated monthly or annual oversight to ensure your ongoing business operations align perfectly with current fiscal policies and regional tax regulations."
    },
    {
      id: 3,
      question: "HOW DO I GET STARTED WITH YOUR TEAM?",
      answer: "Getting started is seamless. Simply reach out via our primary contact channels, and our tax specialists will set up an initial consultation to audit your current documentation framework."
    },
    {
      id: 4,
      question: "CAN YOU HELP WITH COMPLEX TAX CASES?",
      answer: "Absolutely. Our professional legal and financial partners possess extensive experience handling specialized fiscal litigation, structural corrections, and high-stakes corporate auditing."
    },
    {
      id: 5,
      question: "DO YOU OFFER SUPPORT FOR SMALL BUSINESSES?",
      answer: "Yes, we design scalable assistance packages specifically structured to help startups and SMEs establish stable accounting baselines and maintain risk-free filings."
    },
    {
      id: 6,
      question: "HOW SECURE IS MY FINANCIAL DATA?",
      answer: "Data confidentiality is our top priority. All corporate balance sheets, ledger details, and private financial records are stored using highly secure, encrypted protocols."
    }
  ];

  // CHANGED: Initialized as an empty object so all accordions start closed
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 !== 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const renderColumn = (items) => (
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      {items.map((item) => {
        const isOpen = !!openItems[item.id];
        return (
          <motion.div 
            variants={itemVariants}
            key={item.id}
            layout="position"
            className={`transition-colors duration-300 rounded-xl border bg-white p-5 md:p-6 cursor-pointer select-none ${
              isOpen ? 'border-amber-400' : 'border-sky-100 hover:border-sky-200'
            }`}
            onClick={() => toggleAccordion(item.id)}
          >
            {/* Accordion Header */}
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-[11px] md:text-xs font-bold tracking-widest text-sky-950">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="text-sky-900/60 text-lg flex items-center justify-center"
              >
                <IoChevronDown />
              </motion.div>
            </div>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="relative w-full bg-slate-50/60 pb-24 pt-36 px-4 md:px-8 font-sans z-0">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-amber-400 inline-block rounded-sm"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-sky-700">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-sky-950 tracking-tight max-w-2xl leading-[1.15]">
            Answers to your most important questions.
          </h2>
        </motion.div>

        {/* 2-Column Responsive Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row gap-5 items-start"
        >
          {renderColumn(leftColumn)}
          {renderColumn(rightColumn)}
        </motion.div>

      </div>
    </section>
  );
}

export default Faq;