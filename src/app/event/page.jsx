'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

// --- DATA CONSTANTS ---
const SEMINAR_HIGHLIGHTS = [
  "Immersion stratégique de 2 jours",
  "Cas pratiques sectoriels en sous-groupes",
  "Remise d'un certificat d'expertise EXCELTAX",
  "Networking VIP avec les intervenants"
];

const SEMINAR_MODULES = [
  {
    code: "M01",
    title: "Gouvernance & Conformité Avancée",
    desc: "Maîtrisez les dernières évolutions des cadres réglementaires et sécurisez la structure de votre entreprise face aux risques fiscaux."
  },
  {
    code: "M02",
    title: "Intelligence Économique & Stratégie",
    desc: "Anticipez les mutations du marché africain grâce à l'analyse de données stratégiques et l'optimisation des prises de décision."
  },
  {
    code: "M03",
    title: "Transformation Numérique & Agilité",
    desc: "Intégrez les outils technologiques de pointe pour automatiser vos processus internes et stimuler une croissance durable."
  }
];

const PRICING_PACKS = [
  {
    name: "Pass Standard",
    price: "450 000 XOF",
    features: [
      "Accès aux 2 jours de séminaire",
      "Documentation et supports numériques",
      "Pauses-café et déjeuners inclus",
      "Certificat de participation"
    ],
    highlight: false
  },
  {
    name: "Pass VIP Executive",
    price: "750 000 XOF",
    features: [
      "Accès complet aux 2 jours",
      "Place réservée au premier rang",
      "Dîner de réseautage exclusif avec les experts",
      "Session de coaching stratégique privée (1h)"
    ],
    highlight: true
  }
];

// --- ANIMATION VARIANTS ---
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function SeminarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF2F5] text-[#404040]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Seminar Background Image & Overlay */}
        <section className="relative bg-[#183B63] text-[#FFFFFF] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* Seminar & Corporate Meeting Related Image Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          {/* Dark Blue Overlay matching Exact Color Palette */}
          <div className="absolute inset-0 bg-[#183B63]/90 backdrop-blur-[2px]"></div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10"
          >
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-[#F68B2D] text-[#FFFFFF] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                Séminaire Exclusif 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Maîtriser les leviers de la <span className="text-[#F68B2D]">performance</span> et de la conformité
              </h1>
              <p className="text-[#A9B4C0] text-lg leading-relaxed">
                Un séminaire immersif de haut niveau conçu par EXCELTAX pour transformer les défis réglementaires et numériques en véritables opportunités de croissance pour votre organisation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#tarifs" 
                  className="bg-[#F68B2D] hover:bg-[#e07a25] text-[#FFFFFF] font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all text-center"
                >
                  Réserver ma place
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  href="#programme" 
                  className="bg-transparent text-[#FFFFFF] border border-[#A9B4C0]/40 font-semibold px-8 py-3.5 rounded-xl transition-all text-center"
                >
                  Voir le programme
                </motion.a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#2E5D8A]/30 backdrop-blur-md p-8 rounded-2xl border border-[#2E5D8A]/50 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-[#FFFFFF] border-b border-[#2E5D8A]/50 pb-3">En un coup d'œil</h3>
              <ul className="space-y-4">
                {SEMINAR_HIGHLIGHTS.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-sm md:text-base text-[#EEF2F5]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F68B2D] flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#2E5D8A]/50 text-center">
                <p className="text-xs text-[#A9B4C0] uppercase tracking-wider">Prochaine session</p>
                <p className="text-lg font-bold text-[#FFFFFF] mt-1">15 - 16 Octobre 2026</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section Programme & Modules */}
        <section id="programme" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-[#183B63] mb-4">Programme du Séminaire</h2>
            <p className="text-[#A9B4C0] text-lg font-medium">Trois axes fondamentaux pour décoder l'avenir de votre entreprise.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SEMINAR_MODULES.map((mod, index) => (
              <motion.div 
                key={index}
                variants={fadeInVariant}
                whileHover={{ y: -8, boxShadow: '0 20px 30px -10px rgba(24, 59, 99, 0.12)' }}
                className="bg-[#FFFFFF] p-8 rounded-2xl shadow-sm border border-[#A9B4C0]/20 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold bg-[#2E5D8A]/10 text-[#2E5D8A] px-3 py-1 rounded-full">{mod.code}</span>
                    <span className="w-8 h-8 rounded-full bg-[#183B63] text-[#FFFFFF] flex items-center justify-center font-bold text-xs">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#183B63] mb-3">{mod.title}</h3>
                  <p className="text-[#404040] leading-relaxed text-sm">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section Tarifs & Inscription */}
        <section id="tarifs" className="py-24 bg-[#EEF2F5] px-6 md:px-12 lg:px-24 border-y border-[#A9B4C0]/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-[#183B63] mb-4">Choisissez votre formule</h2>
              <p className="text-[#A9B4C0] text-lg font-medium">Des options adaptées à vos ambitions et vos besoins de réseautage.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {PRICING_PACKS.map((pack, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInVariant}
                  whileHover={{ y: -5 }}
                  className={`bg-[#FFFFFF] p-8 rounded-2xl shadow-md border transition-all flex flex-col justify-between relative ${
                    pack.highlight ? 'border-[#F68B2D] ring-2 ring-[#F68B2D]/20' : 'border-[#A9B4C0]/20'
                  }`}
                >
                  {pack.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F68B2D] text-[#FFFFFF] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Recommandé
                    </span>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-[#183B63] mb-2 text-center">{pack.name}</h3>
                    <div className="text-center my-6">
                      <span className="text-4xl font-extrabold text-[#183B63]">{pack.price}</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {pack.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-3 text-sm">
                          <span className="w-2 h-2 rounded-full bg-[#2E5D8A] flex-shrink-0"></span>
                          <span className="text-[#404040]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact" 
                    className={`block w-full py-3.5 rounded-xl text-center font-semibold transition-all ${
                      pack.highlight 
                        ? 'bg-[#F68B2D] hover:bg-[#e07a25] text-[#FFFFFF]' 
                        : 'bg-[#183B63] hover:bg-[#2E5D8A] text-[#FFFFFF]'
                    }`}
                  >
                    Sélectionner cette offre
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* New Design for Last Section (Split Layout with Interactive Callout & Form/CTA card) */}
        <section id="contact" className="py-24 bg-[#FFFFFF] px-6 md:px-12 lg:px-24 border-t border-[#A9B4C0]/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#EEF2F5] rounded-3xl p-8 md:p-14 border border-[#A9B4C0]/30 shadow-sm"
            >
              {/* Left Column: Contextual details */}
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-block bg-[#2E5D8A]/10 text-[#2E5D8A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Places Limitées
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#183B63]">
                  Prêt à transformer votre organisation ?
                </h2>
                <p className="text-[#404040] text-lg leading-relaxed">
                  Les places pour ce séminaire exclusif EXCELTAX sont strictement limitées afin de garantir une qualité d'échange optimale entre les participants et les experts.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-sm text-[#404040]">
                    <span className="w-2 h-2 rounded-full bg-[#F68B2D]"></span>
                    <span>Accès direct aux supports de formation complets</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-[#404040]">
                    <span className="w-2 h-2 rounded-full bg-[#F68B2D]"></span>
                    <span>Validation de votre inscription en moins de 24h</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Action Box / Card */}
              <div className="lg:col-span-6 bg-[#183B63] text-[#FFFFFF] p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sécurisez votre présence</h3>
                  <p className="text-[#A9B4C0] text-sm">
                    Rejoignez les dirigeants et experts qui façonnent la performance de demain en Afrique.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="bg-[#2E5D8A]/40 p-4 rounded-xl border border-[#2E5D8A]/60 flex justify-between items-center text-sm">
                    <span className="text-[#EEF2F5]">Date limite d'inscription :</span>
                    <span className="font-bold text-[#F68B2D]">10 Octobre 2026</span>
                  </div>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#tarifs" 
                    className="block w-full bg-[#F68B2D] hover:bg-[#e07a25] text-[#FFFFFF] font-semibold py-4 rounded-xl text-center shadow-lg transition-all text-lg"
                  >
                    Inscrivez-vous dès maintenant
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SeminarPage;