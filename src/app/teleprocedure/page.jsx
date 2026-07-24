"use client";

import React from "react";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
import { motion } from "framer-motion";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// --- Helper Components & Data ---
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#F68B2D] shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const engagements = [
  "Conseil professionnel et personnalisé",
  "Gestion sécurisée des documents numériques",
  "Expertise en conformité réglementaire",
  "Traitement rapide et fiable des procédures",
  "Assistance dédiée tout au long de votre projet",
];

export default function Page() {
  // Fonction pour faire défiler de manière fluide jusqu'à la section Hero
  const scrollToHero = () => {
    const heroElement = document.getElementById("hero-section");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF2F5] text-[#404040] font-sans antialiased overflow-x-hidden">
      <Header />

      <main>
        {/* ================= HERO SECTION (AVEC IMAGE DE FOND) ================= */}
        <section
          id="hero-section"
          className="relative bg-[#183B63] text-[#FFFFFF] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 59, 99, 0.88), rgba(24, 59, 99, 0.88)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`,
          }}
        >
          <motion.div
            className="max-w-5xl mx-auto text-center space-y-6 relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block bg-[#2E5D8A] text-[#FFFFFF] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-[#A9B4C0]/30 uppercase tracking-wider shadow-sm">
              Procédures en Ligne
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#FFFFFF]">
              Simplifiez vos démarches administratives et réglementaires
            </h1>

            <p className="text-base sm:text-lg text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed opacity-90">
              <strong className="text-[#FFFFFF] font-bold">
                EXCELTAX Business Intelligence Group
              </strong>{" "}
              accompagne les entreprises, les entrepreneurs, les investisseurs
              et les institutions dans la réalisation de leurs démarches
              administratives, fiscales et réglementaires grâce à des solutions
              numériques sécurisées et performantes.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                onClick={scrollToHero}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#F68B2D] hover:bg-[#e07a22] text-[#FFFFFF] font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-colors text-center cursor-pointer"
              >
                Démarrer votre procédure
              </motion.button>

              <motion.button
                onClick={scrollToHero}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2E5D8A] hover:bg-[#244a6f] text-[#FFFFFF] border border-[#A9B4C0]/40 font-semibold px-8 py-3.5 rounded-xl transition-colors text-center cursor-pointer"
              >
                Contacter nos experts
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: POURQUOI CHOISIR ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="space-y-2">
                <span className="text-[#F68B2D] font-bold text-sm tracking-wider uppercase">
                  Section 2
                </span>
                <h2 className="text-3xl font-bold text-[#183B63]">
                  Pourquoi choisir nos procédures en ligne ?
                </h2>
                <h3 className="text-xl font-semibold text-[#2E5D8A]">
                  Des services numériques rapides, sécurisés et conformes
                </h3>
              </div>
              <p className="text-[#404040] leading-relaxed">
                Notre plateforme de procédures en ligne permet aux organisations
                d'effectuer leurs formalités administratives et réglementaires
                essentielles sans délais inutiles. Nous associons expertise
                juridique, innovation technologique et accompagnement
                personnalisé afin de garantir un traitement précis, efficace et
                conforme de chaque dossier.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#EEF2F5] border border-[#A9B4C0]/30 rounded-2xl p-6 sm:p-8 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-bold text-[#183B63] mb-6">
                Avantages :
              </h4>
              <ul className="space-y-4">
                {[
                  "Soumission sécurisée des documents en ligne",
                  "Réduction des délais de traitement",
                  "Accompagnement par des experts à chaque étape",
                  "Respect des réglementations en vigueur",
                  "Suivi transparent et communication continuous",
                ].map((avantage, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#404040] font-medium">
                      {avantage}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 3: NOS SERVICES ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EEF2F5]">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div
              className="text-center max-w-3xl mx-auto space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="text-[#F68B2D] font-bold text-sm tracking-wider uppercase">
                Section 3
              </span>
              <h2 className="text-3xl font-bold text-[#183B63]">
                Nos services de procédures en ligne
              </h2>
              <p className="text-lg text-[#2E5D8A] font-semibold">
                Les démarches que nous prenons en charge
              </p>
              <p className="text-[#404040]">
                Nous vous accompagnons dans un large éventail de procédures
                administratives et réglementaires.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Création d'entreprise",
                  desc: "Créez et immatriculez votre entreprise en toute confiance, dans le respect des exigences réglementaires.",
                },
                {
                  title: "Procédures fiscales",
                  desc: "Gérez efficacement vos déclarations fiscales, immatriculations, obligations de conformité et formalités fiscales.",
                },
                {
                  title: "Conformité réglementaire",
                  desc: "Préparez et déposez les documents requis auprès des autorités gouvernementales et des organismes de réglementation.",
                },
                {
                  title: "Licences et autorisations",
                  desc: "Obtenez vos permis, licences d'exploitation et autorisations professionnelles avec l'accompagnement de nos experts.",
                },
                {
                  title: "Documentation d'entreprise",
                  desc: "Gérez les modifications statutaires, les mises à jour juridiques, les certifications et les dépôts officiels de votre société.",
                },
                {
                  title: "Assistance administrative numérique",
                  desc: "Bénéficiez d'un accompagnement complet pour les services administratifs numériques et la gestion des documents électroniques.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-[#FFFFFF] p-6 rounded-xl border border-[#A9B4C0]/40 shadow-sm cursor-pointer hover:border-[#2E5D8A] transition-colors"
                >
                  <div className="w-2 h-8 bg-[#F68B2D] rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-[#183B63] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#404040] text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 4: NOTRE PROCESSUS ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div
              className="text-center max-w-2xl mx-auto space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="text-[#F68B2D] font-bold text-sm tracking-wider uppercase">
                Section 4
              </span>
              <h2 className="text-3xl font-bold text-[#183B63]">
                Notre processus
              </h2>
              <p className="text-lg text-[#2E5D8A] font-medium">
                Un processus simple en quatre étapes
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {[
                {
                  step: "01",
                  title: "Soumettez votre demande",
                  desc: "Transmettez vos informations et téléchargez les documents nécessaires via notre plateforme sécurisée.",
                },
                {
                  step: "02",
                  title: "Analyse par nos experts",
                  desc: "Nos spécialistes examinent votre dossier, vérifient les exigences de conformité et préparent l'ensemble des documents requis.",
                },
                {
                  step: "03",
                  title: "Traitement de la procédure",
                  desc: "Nous déposons et suivons votre dossier auprès des autorités compétentes tout en assurant le suivi de son avancement.",
                },
                {
                  step: "04",
                  title: "Validation et remise des documents",
                  desc: "Une fois la procédure approuvée, nous vous remettons les documents obtenus et vous accompagnons pour les étapes suivantes si nécessaire.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.04, translateY: -4 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="bg-[#EEF2F5] border border-[#A9B4C0]/30 p-6 rounded-2xl flex flex-col justify-between shadow-sm cursor-pointer"
                >
                  <div>
                    <span className="text-4xl font-black text-[#F68B2D] block mb-2">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#183B63] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#404040] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 5: FINAL CTA ================= */}
        <section className="relative bg-[#EEF2F5] text-[#404040] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden mb-10 border-t border-[#A9B4C0]/20">
          {/* Background Decorative Ambient Lights */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2E5D8A]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F68B2D]/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Background Subtle Pattern Layer */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#183B63 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <motion.div
            className="max-w-6xl mx-auto relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {/* Top Header Badge & Title */}
            <div className="text-center space-y-4 mb-14 max-w-3xl mx-auto">
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 bg-[#FFFFFF]/80 backdrop-blur-md text-[#2E5D8A] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#2E5D8A]/15 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F68B2D] animate-pulse" />
                  Section 5
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-5xl font-extrabold text-[#183B63] tracking-tight leading-tight"
              >
                Prêt à finaliser votre procédure ?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-[#2E5D8A] font-medium"
              >
                Confiez vos démarches à nos experts
              </motion.p>
            </div>

            {/* Main 2-Column Section */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: CTA & Pitch */}
              <div className="lg:col-span-7 bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl p-8 sm:p-10 shadow-lg shadow-[#183B63]/5 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-[#2E5D8A]/10 rounded-md text-[#2E5D8A] text-xs font-bold uppercase tracking-wider">
                    Simplicité & Rapidité
                  </div>

                  <p className="text-[#404040] text-base sm:text-lg leading-relaxed font-medium">
                    Que vous créiez une entreprise, gériez vos obligations
                    réglementaires ou réalisiez des formalités administratives,{" "}
                    <strong className="text-[#183B63] bg-[#F68B2D]/15 px-2 py-0.5 rounded border-b-2 border-[#F68B2D] font-bold">
                      EXCELTAX
                    </strong>{" "}
                    met à votre disposition son expertise et ses solutions
                    numériques pour simplifier chacune de vos démarches.
                  </p>
                </div>

                <div className="pt-8 space-y-4">
                  {/* Primary Action Button */}
                  <motion.button
                    onClick={scrollToHero}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F68B2D] hover:bg-[#e07a22] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-[#F68B2D]/25 transition-all duration-300 text-base sm:text-lg cursor-pointer overflow-hidden"
                  >
                    <span>Démarrez votre procédure en ligne</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </motion.button>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#404040]/80 italic pt-1">
                    <svg
                      className="w-4 h-4 text-[#2E5D8A] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Nos spécialistes sont prêts à vous accompagner à chaque étape.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: "Notre Engagement" Card */}
              <motion.div
                className="lg:col-span-5 bg-[#FFFFFF] border border-[#A9B4C0]/30 rounded-3xl p-8 shadow-xl shadow-[#183B63]/5 flex flex-col justify-between relative overflow-hidden"
                variants={fadeInUp}
              >
                {/* Top Decorative Color Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2E5D8A] to-[#F68B2D]" />

                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EEF2F5]">
                    <div className="w-10 h-10 rounded-xl bg-[#2E5D8A]/10 flex items-center justify-center text-[#2E5D8A]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#183B63]">
                        Notre engagement
                      </h3>
                      <p className="text-xs text-[#404040]/70 font-medium">
                        Garantie de service EXCELTAX
                      </p>
                    </div>
                  </div>

                  <motion.ul
                    className="space-y-3.5"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {engagements.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeInUp}
                        className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#EEF2F5]/60 transition-colors"
                      >
                        <span className="p-1 bg-[#F68B2D]/10 text-[#F68B2D] rounded-lg mt-0.5 shrink-0 border border-[#F68B2D]/20">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-[#404040] text-sm sm:text-base font-semibold leading-snug">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-8 pt-4 border-t border-[#EEF2F5] flex items-center justify-between text-xs text-[#2E5D8A] font-semibold">
                  <span>100% SÉCURISÉ</span>
                  <span>ACCOMPAGNEMENT DÉDIÉ</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}