"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';

function Faq() {
  const faqData = [
    {
      id: 1,
      question: "QUELS SERVICES FOURNIT EXCELTAX ?",
      answer: "ExcelTax fournit une assistance fiscale complète aux entreprises, la mise en place d'infrastructures comptables, du conseil en gestion financière et un suivi continu de la conformité réglementaire adaptés à vos objectifs commerciaux."
    },
    {
      id: 2,
      question: "OFFREZ-VOUS UN ACCOMPAGNEMENT EN CONFORMITÉ CONTINU ?",
      answer: "Oui, nous proposons une supervision mensuelle ou annuelle dédiée pour garantir que vos opérations commerciales courantes restent parfaitement alignées avec les politiques fiscales et réglementations régionales en vigueur."
    },
    {
      id: 3,
      question: "COMMENT COMMENCER À TRAVAILLER AVEC VOTRE ÉQUIPE ?",
      answer: "Pour commencer, c'est très simple. Contactez-nous via nos canaux principaux, et nos spécialistes fiscaux organiseront une consultation initiale pour auditer votre structure documentaire actuelle."
    },
    {
      id: 4,
      question: "POUVEZ-VOUS AIDER POUR DES DOSSIERS FISCAUX COMPLEXES ?",
      answer: "Absolument. Nos partenaires juridiques et financiers bénéficient d'une solide expérience dans la gestion de contentieux fiscaux complexes, de restructurations et d'audits d'entreprise à enjeux majeurs."
    },
    {
      id: 5,
      question: "PROPOSEZ-VOUS UN ACCOMPAGNEMENT POUR LES PETITES ENTREPRISES ?",
      answer: "Oui, nous concevons des formules d'assistance évolutives, spécialement structurées pour aider les startups et les PME à établir des bases comptables solides et à maintenir des déclarations sans risque."
    },
    {
      id: 6,
      question: "DANS QUELLE MESURE MES DONNÉES FINANCIÈRES SONT-ELLES SÉCURISÉES ?",
      answer: "La confidentialité des données est notre priorité absolue. L'ensemble des bilans d'entreprise, des détails de grands livres et des dossiers financiers privés sont stockés selon des protocoles hautement sécurisés et cryptés."
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
    <section className="relative w-full bg-slate-50/60 pb-24 pt-36 px-4 md:px-8 font-sans z-0 bg-[url('/faq-bg.webp')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto bg-white/50 p-10 rounded-xl shadow-sm shadow-[#0c2c68]">
        
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
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#0c2c68]">
              FOIRE AUX QUESTIONS
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-extrabold text-sky-950 tracking-tight max-w-2xl leading-[1.15]">
            Des réponses à vos questions les plus importantes.
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