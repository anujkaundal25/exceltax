"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
import {
  TbScale,
  TbFileText,
  TbArrowsExchange,
  TbFileSpreadsheet,
} from "react-icons/tb";
import { HiOutlineCheckCircle } from "react-icons/hi2";

// OHADA Countries Data
const COUNTRIES = [
  { name: "Bénin", flag: "https://flagcdn.com/w40/bj.png" },
  { name: "Burkina Faso", flag: "https://flagcdn.com/w40/bf.png" },
  { name: "Cameroun", flag: "https://flagcdn.com/w40/cm.png" },
  { name: "Centrafrique", flag: "https://flagcdn.com/w40/cf.png" },
  { name: "Comores", flag: "https://flagcdn.com/w40/km.png" },
  { name: "Congo", flag: "https://flagcdn.com/w40/cg.png" },
  { name: "Côte d'Ivoire", flag: "https://flagcdn.com/w40/ci.png" },
  { name: "Gabon", flag: "https://flagcdn.com/w40/ga.png" },
  { name: "Guinée", flag: "https://flagcdn.com/w40/gn.png" },
  { name: "Guinée Bissau", flag: "https://flagcdn.com/w40/gw.png" },
  { name: "Guinée Éq.", flag: "https://flagcdn.com/w40/gq.png" },
  { name: "Mali", flag: "https://flagcdn.com/w40/ml.png" },
  { name: "Niger", flag: "https://flagcdn.com/w40/ne.png" },
  { name: "RDC", flag: "https://flagcdn.com/w40/cd.png" },
  { name: "Sénégal", flag: "https://flagcdn.com/w40/sn.png" },
  { name: "Tchad", flag: "https://flagcdn.com/w40/td.png" },
  { name: "Togo", flag: "https://flagcdn.com/w40/tg.png" },
];

const HERO_HIGHLIGHTS = [
  "États financiers automatisés et conformes",
  "Écritures comptables fiables et traçables",
  "Conformité aux exigences locales (fisc, OHADA, etc.)",
  "Dépôts simplifiés et respect des délais",
];

const STATS_FEATURES = [
  {
    title: "Bilan",
    description:
      "Présentation sur une seule page en mode paysage ou sur deux pages en mode portrait.",
    icon: TbScale,
    tag: "Mise en page flexible",
  },
  {
    title: "Compte de résultat",
    description:
      "Affichage en cascade sur une seule page, contre quatre pages auparavant.",
    icon: TbFileText,
    tag: "Optimisé",
  },
  {
    title: "Tableau des flux de trésorerie (TFT)",
    description:
      "Présentation claire regroupée sur une seule page pour une lecture immédiate.",
    icon: TbArrowsExchange,
    tag: "Une seule page",
  },
  {
    title: "Notes complémentaires",
    description:
      "Plus de 36 notes complémentaires générées automatiquement selon les exigences locales spécifiques.",
    icon: TbFileSpreadsheet,
    tag: "36+ notes automatiques",
  },
];

const PRODUCT_SERVICES = [
  {
    title: "Gestion complète",
    text: "Saisie illimitée des écritures, gestion des journaux comptables et des comptes analytiques.",
    iconColor: "text-blue-500",
  },
  {
    title: "États financiers conformes",
    text: "Bilan, compte de résultat et états financiers parfaitement alignés sur le SYSCOHADA révisé.",
    iconColor: "text-indigo-500",
  },
  {
    title: "Outils d'analyse financière",
    text: "Lettrage, rapprochement bancaire et gestion budgétaire pour un pilotage précis en temps réel.",
    iconColor: "text-emerald-500",
  },
  {
    title: "Flexibilité & Multi-utilisateurs",
    text: "Gestion multi-dossiers, multi-exercices et travail collaboratif en réseau (2 à 5 utilisateurs).",
    iconColor: "text-amber-500",
  },
  {
    title: "Support technique dédié",
    text: "Assistance gratuite, installation prise en charge et formation utilisateur entièrement offerte.",
    iconColor: "text-rose-500",
  },
];

export const odacomptaData = {
  hero: {
    title: "ODACOMPTA Pro",
    subtitle: "La solution de gestion comptable conforme et performante",
  },

  features: {
    title: "Les Points Forts du Logiciel",
    items: [
      {
        title: "Conformité totale au SYSCOHADA Révisé",
        description:
          "Alignement avec les dernières normes comptables en vigueur.",
      },
      {
        title: "Évolutivité et adaptabilité",
        description:
          "Mise à jour continue pour répondre aux évolutions réglementaires et sectorielles.",
      },
      {
        title: "Prise en compte des exigences locales",
        description:
          "Intégration des notes et directives des administrations fiscales (DGI, OHADA, etc.).",
      },
    ],
  },

  audience: {
    title: "À Qui S'adresse ODACOMPTA Pro ?",
    items: [
      {
        title: "Directeurs Administratifs et Financiers (DAF)",
        description: "Pour une gestion comptable simplifiée et optimisée.",
      },
      {
        title: "Chefs Comptables",
        description: "Pour un contrôle précis des états financiers.",
      },
      {
        title: "Associés et Consultants en Cabinet Comptable",
        description: "Pour garantir la conformité des missions clients.",
      },
      {
        title: "Professionnels Comptables de l’espace OHADA",
        description: "Pour un accompagnement efficace des entreprises.",
      },
    ],
  },

  benefits: {
    title: "Les Avantages pour Vous",
    items: [
      {
        title: "Conformité garantie",
        description:
          "Assurez-vous que vos états financiers respectent les dernières normes.",
      },
      {
        title: "Optimisation des ressources",
        description:
          "Moins d’efforts et d’erreurs grâce à une gestion automatisée.",
      },
      {
        title: "Gain de temps",
        description: "Réduction du temps de préparation des états financiers.",
      },
      {
        title: "Productivité accrue",
        description:
          "Interface ergonomique et automatisation des tâches comptables.",
      },
    ],
  },

  support: {
    title: "Support Technique & Téléconseil",
    subtitle: "Une assistance complète pour un accompagnement sans faille !",
    items: [
      {
        title: "Installation et formation",
        description:
          "Mise en place gratuite et formation offerte pour un utilisateur.",
      },
      {
        title: "Licence sans limite",
        description: "Aucune restriction dans le temps.",
      },
      {
        title: "Zéro redevance annuelle",
        description: "Un investissement unique, sans coûts cachés.",
      },
      {
        title: "Intervention rapide",
        description:
          "Assistance résidentielle (2 heures gratuites) et support en ligne (gratuit pendant 2 semaines).",
      },
    ],
  },

  conclusion: {
    text: "Avec ODACOMPTA Pro, adoptez une comptabilité sans stress et conforme aux normes de l’espace OHADA !",
  },
};

const { hero, features, audience, benefits, support, conclusion } =
  odacomptaData;

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden">
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0A192F] py-20 px-6 overflow-hidden">
        <Image
          src="/logiciel/hero.png"
          alt="Conformité SYSCOHADA"
          fill
          priority
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E3D] via-[#0A1832]/20 to-[#0B1E3D]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center"
        >
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
            <span>CONFORMITÉ SYSCOHADA RÉVISÉ</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl">
            Reste Pleinement Conforme au{" "}
            <span className="text-orange-500">SYSCOHADA Révisé</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            Depuis le <strong>1er janvier 2018</strong>, les normes comptables
            ont évolué dans l&apos;espace OHADA. Conçu par des
            experts-comptables, commissaires aux comptes et fiscalistes,{" "}
            <strong className="text-white">EXCELT@X LOGIODAPRO</strong> garantit
            une conformité totale.
          </p>

          {/* Highlights List */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
            {HERO_HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm text-left shadow-md hover:border-orange-500/50 transition duration-300"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg shrink-0">
                  <HiOutlineCheckCircle className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-gray-200 text-sm font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-gray-300 font-medium text-sm">
            <strong className="text-white">EXCELT@X LOGIODAPRO</strong>,
            l&apos;outil indispensable pour une gestion comptable sécurisée. 🚀
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <a
              href="#license"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200"
            >
              Demander Votre Licence
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
            >
              Demander une Démo
            </a>
          </div>
        </motion.div>
      </section>

      {/* Radial Country Selector Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase tracking-wider">
                Zone OHADA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Pays <span className="text-blue-600">Concernés</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-4 text-left">
                « Découvrez nos services disponibles dans l&apos;ensemble de la
                zone OHADA. »
              </p>
              <p className="text-sm text-slate-500">
                👉{" "}
                <span className="font-medium text-slate-700">
                  Cliquez sur le cercle
                </span>{" "}
                pour afficher les 17 pays membres.
              </p>
            </div>

            {/* Radial Animation Node */}
            <div className="lg:col-span-7 flex justify-center items-center min-h-[450px] relative">
              <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 text-white font-bold flex flex-col items-center justify-center shadow-xl border-4 border-white cursor-pointer"
                >
                  <span className="text-2xl sm:text-3xl font-black">17+</span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90">
                    Countries
                  </span>
                  <span className="text-[10px] mt-1 text-blue-100 underline">
                    {isOpen ? "Fermer" : "Cliquer ici"}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {isOpen &&
                    COUNTRIES.map((country, index) => {
                      const total = COUNTRIES.length;
                      const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
                      const radius =
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? 120
                          : 170;
                      const x = Math.round(radius * Math.cos(angle));
                      const y = Math.round(radius * Math.sin(angle));

                      return (
                        <motion.div
                          key={country.name}
                          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                          animate={{ opacity: 1, x, y, scale: 1 }}
                          exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.03,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          className="absolute z-10 flex flex-col items-center justify-center p-1.5 bg-white rounded-full shadow-md border border-slate-100 hover:scale-125 hover:z-30 cursor-pointer"
                        >
                          <Image
                            src={country.flag}
                            alt={country.name}
                            width={28}
                            height={28}
                            unoptimized
                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-slate-200"
                          />
                          <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 whitespace-nowrap mt-0.5 px-1 bg-white/90 rounded">
                            {country.name}
                          </span>
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="bg-slate-50 py-20 px-6 sm:px-12 lg:px-20 text-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-amber-500/20">
              <HiOutlineCheckCircle className="w-5 h-5" />
              <span>Conforme au SYSCOHADA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              PRINCIPALES FONCTIONNALITÉS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS_FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 text-2xl">
                        <IconComponent />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ODACOMPTA Pro Section (With Background Image Added) */}
      <section className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-slate-950 overflow-hidden">
        {/* Background Image Container */}
        <Image
          src="/logiciel/tax.webp" // Change to your preferred background image path
          alt="ODACOMPTA Pro Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-900/60 to-slate-950/90" />

        <div className="relative z-10 w-full max-w-5xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              ODACOMPTA{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed max-w-3xl">
              La solution intégrée de comptabilité financière, analytique et
              budgétaire.
            </p>
          </header>

          {/* Parent Container (6-column layout grid) */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* First 3 items: each takes 2 out of 6 columns (Row 1 full) */}
            {PRODUCT_SERVICES.slice(0, 3).map((item, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.02 }}
                className="md:col-span-2 p-5 bg-slate-800/40 border border-slate-700/50 hover:border-orange-500 rounded-2xl transition-all"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}

            {/* Last 2 items: each takes 3 out of 6 columns (Row 2 full) */}
            {PRODUCT_SERVICES.slice(3, 5).map((item, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.02 }}
                className="md:col-span-3 p-5 bg-slate-800/40 border border-slate-700/50 hover:border-orange-500 rounded-2xl transition-all"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-4 py-12 md:py-20 selection:bg-indigo-500 selection:text-white">
          <div className="max-w-6xl mx-auto space-y-24 border-2 border-gray-900 p-10 rounded-xl">
            {/* HERO SECTION */}
            <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                  SYSCOHADA Révisé
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                  {hero.title}
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-slate-400 font-light">
                  {hero.subtitle}
                </p>
              </motion.div>
            </section>

            {/* FEATURES (3 items) */}
            <section className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
                {features.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.items.map((item, index) => (
                  <motion.div
                    key={`feature-${index}`}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* AUDIENCE (4 items - 2x2 grid) */}
            <section className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
                {audience.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {audience.items.map((item, index) => (
                  <motion.div
                    key={`audience-${index}`}
                    whileHover={{ scale: 1.01 }}
                    className="p-6 bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 rounded-2xl transition-all"
                  >
                    <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* BENEFITS (4 items - 2x2 grid) */}
            <section className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
                {benefits.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.items.map((item, index) => (
                  <motion.div
                    key={`benefit-${index}`}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all"
                  >
                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* SUPPORT & TELECONSEIL (4 items - 2x2 grid) */}
            <section className="space-y-8 bg-slate-900/30 border border-slate-800/60 p-8 sm:p-12 rounded-3xl">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {support.title}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base">
                  {support.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {support.items.map((item, index) => (
                  <motion.div
                    key={`support-${index}`}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 rounded-2xl transition-all"
                  >
                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* CONCLUSION BANNER */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 p-8 sm:p-14 text-center shadow-2xl"
        >
          {/* Subtle Background Glow Accent */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Conclusion Text */}
          <blockquote className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 leading-relaxed tracking-wide">
              &ldquo;{conclusion?.text}&rdquo;
            </p>
          </blockquote>

          {/* Call-To-Action Grid */}
          <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch justify-center max-w-4xl mx-auto">
            {/* Primary Action (Pink) */}
            <button className="order-first sm:order-none col-span-1 sm:col-span-2 lg:col-span-1 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-lg shadow-rose-600/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Demander votre licence
            </button>

            {/* Action: Demo (Yellow) */}
            <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm px-6 py-4 rounded-xl shadow-lg shadow-amber-400/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Demander votre démo
            </button>

            {/* Action: Info Sheet (Orange) */}
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Fiche de prix & info
            </button>

            {/* Secondary Action: Support (Blue / Glass) */}
            <button className="bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 font-semibold text-sm px-6 py-4 rounded-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Demander de l&apos;assistance
            </button>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
