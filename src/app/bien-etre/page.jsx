'use client';

import React from 'react';
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiBarChart2, 
  FiUsers, 
  FiHeart, 
  FiRefreshCw, 
  FiTrendingUp, 
  FiSearch, 
  FiTarget, 
  FiSend
} from 'react-icons/fi';

// Animation variants for reusability
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    opacity: 0
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#404040] font-sans selection:bg-[#F68B2D] selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      <Header />

      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative text-white py-32 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <motion.img 
              // initial={{ scale: 1.1 }}
              // animate={{ scale: 1 }}
              // transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" 
              alt="Corporate buildings background" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#183B63]/90 backdrop-blur-[1px]"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
          >
            {/* Pill Badge */}
            <motion.div 
              variants={fadeIn("down", 0.1)}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#F68B2D] text-[#F68B2D] text-xs font-bold uppercase tracking-wider mb-8 bg-[#183B63]/50 shadow-sm"
            >
              EXCELTAX • Bien-être
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeIn("up", 0.2)}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight"
            >
              Le bien-être au service de la <span className="text-[#F68B2D]">performance durable</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeIn("up", 0.3)}
              className="text-[#EEF2F5] text-base md:text-xl max-w-2xl leading-relaxed mb-10 font-light opacity-90"
            >
              Chez EXCELTAX Business Intelligence Group, nous considérons le bien-être comme un levier stratégique pour renforcer le capital humain et soutenir une croissance durable.
            </motion.p>

            {/* Centered CTA Button */}
            <motion.div variants={fadeIn("up", 0.4)}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(246, 139, 45, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#F68B2D] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-lg text-base cursor-pointer"
              >
                Planifier une consultation <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2 — NOTRE VISION */}
        <section className="py-20 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn("up", 0.1)}
            className="mb-10"
          >
            <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-1">
              Section 02
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#183B63] pb-4 border-b-2 border-[#EEF2F5]">
              Notre vision : Un investissement stratégique pour les organisations
            </h2>
          </motion.div>

          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn("up", 0.2)}
            className="text-[#404040] text-base md:text-lg leading-relaxed mb-12 max-w-4xl"
          >
            Le bien-être en entreprise dépasse la simple qualité de vie au travail. Il constitue un facteur essentiel de compétitivité, de résilience et de création de valeur. Notre approche associe intelligence économique, gouvernance, développement du capital humain et accompagnement organisationnel afin d'aider les dirigeants à construire des environnements de travail performants et durables.
          </motion.p>

          <motion.h3 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn("up", 0.25)}
            className="text-xl font-bold text-[#2E5D8A] uppercase tracking-wide mb-6"
          >
            Nos objectifs
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              "Renforcer la cohésion d'équipe",
              "Favoriser l'engagement des collaborateurs",
              "Renforcer la performance collective",
              "Développer une culture d'entreprise positive",
              "Accompagner les managers dans leur rôle de leader",
              "Prévenir les risques psychosociaux",
              "Améliorer durablement la qualité de vie au travail"
            ].map((objective, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn("up", idx * 0.05)}
                whileHover={{ y: -4, backgroundColor: "#E4ECF2" }}
                transition={{ duration: 0.2 }}
                className="bg-[#EEF2F5] border-l-4 border-[#F68B2D] p-5 rounded-r-xl flex items-center gap-4 shadow-sm transition-colors cursor-default"
              >
                <FiCheckCircle className="text-[#2E5D8A] text-2xl flex-shrink-0" />
                <span className="text-[#183B63] font-semibold text-sm md:text-base">
                  {objective}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SECTION 3 — NOS SOLUTIONS BIEN-ÊTRE */}
        <section className="bg-[#EEF2F5] py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn("up", 0.1)}
              className="mb-12"
            >
              <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-1">
                Section 03
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#183B63] pb-3 border-b-2 border-[#A9B4C0]/30">
                Nos solutions Bien-être
              </h2>
              <p className="text-[#2E5D8A] font-semibold mt-2 text-lg">
                Des solutions adaptées aux enjeux des organisations
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <FiBarChart2 className="text-2xl" />,
                  title: "1. Diagnostic du climat organisationnel",
                  desc: "Nous analysons le fonctionnement de votre organisation afin d'identifier les facteurs influençant l'engagement, la motivation et la performance des équipes.",
                  border: "border-[#2E5D8A]"
                },
                {
                  icon: <FiUsers className="text-2xl" />,
                  title: "2. Leadership et accompagnement des managers",
                  desc: "Nous développons les compétences managériales pour favoriser un leadership responsable, collaboratif et orienté vers la performance durable.",
                  border: "border-[#2E5D8A]"
                },
                {
                  icon: <FiHeart className="text-2xl" />,
                  title: "3. Qualité de Vie et Conditions de Travail (QVCT)",
                  desc: "Nous concevons et mettons en œuvre des programmes visant à améliorer l'équilibre entre performance, santé et satisfaction des collaborateurs.",
                  border: "border-[#2E5D8A]"
                },
                {
                  icon: <FiRefreshCw className="text-2xl" />,
                  title: "4. Gestion du changement",
                  desc: "Nous accompagnons les entreprises dans leurs projets de transformation organisationnelle en plaçant l'humain au cœur du changement.",
                  border: "border-[#2E5D8A]"
                },
                {
                  icon: <FiTrendingUp className="text-2xl" />,
                  title: "5. Développement du capital humain",
                  desc: "Nous proposons des formations, du coaching et des dispositifs de développement des compétences afin de valoriser les talents et renforcer la compétitivité des organisations.",
                  border: "border-[#F68B2D]",
                  colSpan: "md:col-span-2"
                }
              ].map((solution, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeIn("up", idx * 0.1)}
                  whileHover={{ y: -6, shadow: "0 15px 30px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className={`bg-white p-8 rounded-xl border-l-4 ${solution.border} shadow-sm transition-all ${solution.colSpan || ''}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3.5 bg-[#EEF2F5] rounded-xl text-[#183B63]">
                      {solution.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#183B63]">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-[#404040] text-sm leading-relaxed">
                    {solution.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — NOTRE MÉTHODOLOGIE */}
        <section className="py-20 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn("up", 0.1)}
            className="mb-12"
          >
            <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-1">
              Section 04
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#183B63] pb-3 border-b-2 border-[#EEF2F5]">
              Notre méthodologie : Une démarche structurée pour un impact durable
            </h2>
            <p className="text-[#404040] mt-3 text-lg">
              Notre méthodologie repose sur une approche pragmatique, collaborative et orientée résultats.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { step: "1", title: "Diagnostic", desc: "Évaluation de l'organisation, du climat social et des besoins des collaborateurs.", icon: <FiSearch /> },
              { step: "2", title: "Analyse stratégique", desc: "Identification des leviers d'amélioration et définition des priorités d'action.", icon: <FiTarget /> },
              { step: "3", title: "Mise en œuvre", desc: "Déploiement de solutions personnalisées, d'actions de sensibilisation, de formations et d'accompagnements.", icon: <FiSend /> },
              { step: "4", title: "Évaluation & Amélioration", desc: "Suivi des indicateurs de performance, mesure des résultats et optimisation continue des actions engagées.", icon: <FiRefreshCw /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn("up", idx * 0.1)}
                whileHover={{ y: -6, borderColor: "#F68B2D" }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#A9B4C0]/30 border-t-4 border-t-[#183B63] rounded-xl p-6 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-full bg-[#F68B2D] text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {item.step}
                    </span>
                    <span className="text-[#2E5D8A] text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#183B63] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#404040] text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SECTION 5 — POURQUOI CHOISIR EXCELTAX ? */}
        <section className="bg-[#183B63] text-white py-20 px-6 md:px-16 lg:px-24 mb-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn("up", 0.1)}
            className="max-w-6xl mx-auto"
          >
            <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-2">
              Section 05 — Pourquoi choisir EXCELTAX ?
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Construisons ensemble des organisations plus performantes et plus humaines
            </h2>

            <p className="text-[#EEF2F5] text-base leading-relaxed mb-10 max-w-4xl font-light">
              Le bien-être constitue aujourd'hui un véritable avantage compétitif. Les organisations qui investissent dans leur capital humain développent une meilleure capacité d'innovation, renforcent leur attractivité et améliorent durablement leurs performances.
              <br /><br />
              Avec <strong className="text-white font-semibold">EXCELTAX Business Intelligence Group</strong>, bénéficiez d'un accompagnement stratégique alliant expertise, innovation et intelligence organisationnelle pour faire du bien-être un moteur de croissance et de réussite.
            </p>

            <div className="mb-12">
              <h3 className="text-[#F68B2D] font-bold text-sm uppercase tracking-wider mb-4">
                Nos engagements
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Une approche centrée sur les résultats",
                  "Des solutions adaptées à chaque organisation",
                  "Une expertise multidisciplinaire",
                  "Un accompagnement personnalisé",
                  "Une amélioration continue des performances"
                ].map((engagement, idx) => (
                  <motion.span 
                    key={idx}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.18)" }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/10 border border-[#2E5D8A] text-[#EEF2F5] text-xs md:text-sm font-medium px-4 py-2.5 rounded-full flex items-center gap-2.5 backdrop-blur-sm cursor-default"
                  >
                    <FiCheckCircle className="text-[#F68B2D]" />
                    {engagement}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#2E5D8A] flex flex-wrap gap-4 justify-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#F68B2D] hover:bg-[#e07a22] text-white font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow-md cursor-pointer"
              >
                Demander une consultation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2E5D8A] hover:bg-[#23486c] text-white font-bold py-3.5 px-7 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
              >
                Contacter nos experts
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

    </div>
  );
}