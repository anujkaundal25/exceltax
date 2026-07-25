"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#404040] font-sans">
      <Header />

      <main className="flex-grow">
        {/* Section Héro */}
        <section
          className="relative text-[#FFFFFF] py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 59, 99, 0.9), rgba(24, 59, 99, 0.95)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto space-y-6"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-[#F68B2D] font-semibold tracking-wide uppercase text-xs md:text-sm bg-[#183B63] px-4 py-1.5 rounded-full border border-[#2E5D8A] inline-block shadow-sm"
            >
              Business Intelligence pour l'Afrique
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF]">
              Des solutions intelligentes pour une croissance durable.
            </h1>
            <p className="text-sm md:text-base text-[#EEF2F5] max-w-3xl leading-relaxed">
              EXCELTAX Business Intelligence Group est un groupe africain de
              conseil, de technologie et de formation qui accompagne les
              organisations dans un environnement économique en constante
              évolution. Nous soutenons les entreprises, les administrations
              publiques, les institutions financières, les organisations
              internationales et les investisseurs grâce à des solutions
              innovantes combinant conseil stratégique, transformation
              numérique, expertise juridique et fiscale, ainsi que renforcement
              des capacités.
            </p>
            <p className="text-[#A9B4C0] text-sm md:text-base italic">
              Animés par l'excellence, l'innovation et l'intégrité, nous aidons
              les organisations à améliorer leurs performances, renforcer leur
              gouvernance et créer une valeur durable à travers l'Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: "#d67520" }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="bg-[#F68B2D] text-[#FFFFFF] font-medium px-8 py-3 rounded-lg shadow-lg text-center transition-colors duration-200"
              >
                Découvrir nos services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: "#2E5D8A" }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="bg-[#183B63] text-[#FFFFFF] border border-[#2E5D8A] font-medium px-8 py-3 rounded-lg shadow-lg text-center transition-colors duration-200"
              >
                Contacter notre équipe
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Section 2 – Qui sommes-nous ? */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-[#2E5D8A] font-semibold uppercase text-xs tracking-wider bg-[#EEF2F5] px-3 py-1 rounded border border-[#A9B4C0]/30 inline-block">
                À propos d'EXCELTAX
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#183B63] leading-tight">
                Votre partenaire de confiance pour la transformation des
                entreprises
              </h2>
              <p className="text-base text-[#404040] leading-relaxed font-medium">
                Fondé avec l'ambition de devenir un leader africain de la
                Business Intelligence, EXCELTAX réunit une expertise
                multidisciplinaire en conseil, accompagnement juridique et
                fiscal, technologies numériques et formation professionnelle.
              </p>
              <p className="text-sm text-[#404040] leading-relaxed">
                Notre approche intégrée permet à nos clients de relever des
                défis complexes, d'améliorer leur efficacité opérationnelle,
                d'assurer leur conformité réglementaire et d'accélérer une
                croissance durable. Chaque solution que nous proposons est
                conçue sur mesure afin de répondre aux besoins spécifiques de
                nos clients tout en conciliant les meilleures pratiques
                internationales et les réalités locales.
              </p>
              <p className="text-sm text-[#404040] leading-relaxed">
                Qu'il s'agisse d'accompagner une startup, une multinationale,
                une institution publique ou une organisation internationale,
                notre objectif reste le même : produire des résultats concrets
                grâce au savoir, à l'innovation et à la collaboration.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#EEF2F5]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Équipe EXCELTAX"
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 bg-[#183B63] text-[#FFFFFF] p-6 rounded-xl shadow-xl hidden sm:block border border-[#2E5D8A]"
              >
                <p className="text-3xl font-extrabold text-[#F68B2D]">100%</p>
                <p className="text-xs text-[#EEF2F5] mt-1 uppercase tracking-wider font-semibold">
                  Expertise Africaine
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Statistiques / Numbers */}
        <section className="bg-[#183B63] text-[#FFFFFF] py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-2 border-b md:border-b-0 md:border-r border-[#2E5D8A] pb-6 md:pb-0"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#F68B2D]">
                10+
              </h3>
              <p className="text-[#EEF2F5] font-medium uppercase tracking-wider text-sm">
                Années d'Expérience
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-2 border-b md:border-b-0 md:border-r border-[#2E5D8A] pb-6 md:pb-0"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#F68B2D]">
                300 +
              </h3>
              <p className="text-[#EEF2F5] font-medium uppercase tracking-wider text-sm">
                Clients Accompagnés
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#F68B2D]">
                450 +
              </h3>
              <p className="text-[#EEF2F5] font-medium uppercase tracking-wider text-sm">
                Projets Réussis
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 3 – Notre mission, notre vision et nos valeurs */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#EEF2F5]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-[#2E5D8A] font-semibold uppercase text-xs tracking-wider bg-[#FFFFFF] px-3 py-1 rounded border border-[#A9B4C0]/40 inline-block shadow-sm">
                Cap sur l'Avenir
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#183B63]">
                Construire des organisations plus fortes en Afrique
              </h2>
              <div className="w-16 h-1 bg-[#F68B2D] mx-auto rounded-full"></div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FFFFFF] p-8 rounded-2xl shadow-sm border border-[#A9B4C0]/30 space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#F68B2D]"></div>
                <h3 className="text-2xl font-bold text-[#183B63]">
                  Notre mission
                </h3>
                <p className="text-[#404040] leading-relaxed text-sm md:text-base">
                  Accompagner les organisations grâce à des services innovants
                  de conseil, des technologies numériques, une expertise
                  juridique et fiscale ainsi que des programmes de formation
                  professionnelle qui améliorent les performances, renforcent la
                  gouvernance et favorisent un développement durable.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FFFFFF] p-8 rounded-2xl shadow-sm border border-[#A9B4C0]/30 space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#183B63]"></div>
                <h3 className="text-2xl font-bold text-[#183B63]">
                  Notre vision
                </h3>
                <p className="text-[#404040] leading-relaxed text-sm md:text-base">
                  Devenir la référence africaine en matière de Business
                  Intelligence, reconnue pour ses solutions intégrées qui
                  stimulent l'innovation, renforcent la compétitivité et
                  contribuent à la transformation économique du continent.
                </p>
              </motion.div>
            </div>

            {/* Valeurs fondamentales */}
            <div className="space-y-8 pt-4">
              <h3 className="text-2xl font-bold text-center text-[#183B63]">
                Nos valeurs fondamentales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Excellence",
                    desc: "Nous visons les plus hauts standards de qualité dans chacun de nos services.",
                  },
                  {
                    title: "Intégrité",
                    desc: "Nous bâtissons des relations durables fondées sur la confiance, l'éthique et la transparence.",
                  },
                  {
                    title: "Innovation",
                    desc: "Nous exploitons les technologies et les approches innovantes pour relever les défis les plus complexes.",
                  },
                  {
                    title: "Collaboration",
                    desc: "Nous travaillons en étroite collaboration avec nos clients afin d'atteindre des objectifs communs.",
                  },
                  {
                    title: "Performance",
                    desc: "Nous nous engageons à fournir des résultats mesurables qui créent une valeur durable.",
                  },
                  {
                    title: "Durabilité",
                    desc: "Nous encourageons des pratiques responsables qui favorisent une croissance inclusive et pérenne.",
                  },
                ].map((valeur, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, borderColor: "#2E5D8A" }}
                    className="bg-[#FFFFFF] p-6 rounded-xl border border-[#A9B4C0]/30 shadow-sm space-y-2 transition-all"
                  >
                    <h4 className="text-xl font-bold text-[#183B63] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F68B2D]"></span>
                      {valeur.title}
                    </h4>
                    <p className="text-[#404040] text-sm leading-relaxed pl-4">
                      {valeur.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – Nos cinq pôles d'expertise */}
        <section
          id="services"
          className="py-20 px-6 md:px-12 lg:px-24 bg-[#FFFFFF]"
        >
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-[#2E5D8A] font-semibold uppercase text-xs tracking-wider bg-[#EEF2F5] px-3 py-1 rounded border border-[#A9B4C0]/30 inline-block">
                Une expertise intégrée. Un partenaire de confiance.
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#183B63]">
                Nos cinq pôles d'expertise
              </h2>
              <div className="w-16 h-1 bg-[#F68B2D] mx-auto rounded-full"></div>
              <p className="text-[#404040] max-w-2xl mx-auto text-sm md:text-base">
                EXCELTAX est organisé autour de cinq pôles complémentaires qui
                offrent des solutions globales aux organisations à chaque étape
                de leur développement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Advisory",
                  desc: "Des services de conseil stratégique favorisant la croissance des entreprises, l'amélioration des performances, la gouvernance et l'excellence opérationnelle.",
                },
                {
                  title: "JurisFISCAL",
                  desc: "Un accompagnement intégré en matière juridique, fiscale et réglementaire destiné à assurer la conformité, maîtriser les risques et renforcer la gouvernance d'entreprise.",
                },
                {
                  title: "EXSAFE",
                  desc: "Des solutions numériques de conformité et de gouvernance permettant de sécuriser les opérations et d'améliorer la gestion des risques.",
                },
                {
                  title: "Education",
                  desc: "Des programmes de formation professionnelle, de développement des dirigeants et de renforcement des compétences permettant aux individus et aux organisations d'acquérir des connaissances et des compétences concrètes.",
                },
                {
                  title: "Procédures en ligne",
                  desc: "Des services administratifs numériques qui simplifient les formalités de création d'entreprise, les déclarations réglementaires, les procédures fiscales, les demandes d'autorisations et l'ensemble des démarches administratives.",
                },
              ].map((pole, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 10px 25px -5px rgba(24, 59, 99, 0.1)",
                  }}
                  className="bg-[#EEF2F5]/50 p-8 rounded-2xl border border-[#A9B4C0]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-[#2E5D8A] bg-[#FFFFFF] px-3 py-1 rounded-full uppercase tracking-wider inline-block border border-[#A9B4C0]/30 group-hover:bg-[#F68B2D] group-hover:text-[#FFFFFF] group-hover:border-[#F68B2D] transition-colors">
                      Pôle {idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-[#183B63]">
                      {pole.title}
                    </h3>
                    <p className="text-[#404040] text-sm leading-relaxed">
                      {pole.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 – Pourquoi les organisations choisissent EXCELTAX */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#183B63] text-[#FFFFFF]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-[#F68B2D] font-semibold uppercase text-xs tracking-wider bg-[#2E5D8A]/50 px-3 py-1 rounded border border-[#2E5D8A] inline-block">
                Ce qui nous distingue
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFFFFF]">
                Une expertise qui crée un impact durable
              </h2>
              <div className="w-16 h-1 bg-[#F68B2D] mx-auto rounded-full"></div>
              <p className="text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                Les organisations choisissent EXCELTAX parce que nous associons
                vision stratégique, expertise technique et technologies
                innovantes afin de fournir des solutions concrètes, performantes
                et orientées vers les résultats. Nos équipes multidisciplinaires
                travaillent en étroite collaboration avec chaque client afin de
                relever les défis d'aujourd'hui tout en préparant les
                opportunités de demain.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Des services intégrés de conseil, de technologie et de formation",
                  "Une expertise approfondie en droit, fiscalité et réglementation",
                  "Des solutions personnalisées centrées sur les besoins des clients",
                  "Une parfaite compréhension des environnements économiques africains",
                  "Un engagement constant envers l'innovation, la qualité et les résultats mesurables",
                  "Des partenariats durables fondés sur la confiance et l'excellence",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#2E5D8A]/40 border border-[#2E5D8A] p-6 rounded-xl flex items-start space-x-4 shadow-sm"
                  >
                    <span className="text-[#F68B2D] font-bold text-lg bg-[#183B63] p-1 rounded-md">
                      ✓
                    </span>
                    <p className="text-[#EEF2F5] text-sm leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 – Construisons l'avenir ensemble & CTA final */}
        <section
          id="contact"
          className="relative py-28 px-6 md:px-12 lg:px-24 bg-white text-slate-900 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/faq-bg.webp')",
          }}
        >
          {/* Light overlay to ensure high text contrast and readability against the white/light background */}

          {/* Subtle background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            {/* Header information */}
            <div className="text-center space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest text-blue-600 font-semibold px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                EXCELTAX Business Intelligence Group
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Construisons l'avenir ensemble
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Chez EXCELTAX, nous sommes convaincus que le succès durable
                repose sur le savoir, l'innovation et la collaboration.
              </p>
            </div>

            {/* Interactive Glassmorphism Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative bg-white/90 backdrop-blur-xl text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto space-y-6 border border-slate-200"
            >
              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  Prêt à propulser votre organisation ?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Échangez avec nos experts et découvrez comment EXCELTAX peut
                  accompagner votre croissance grâce à des services intégrés de
                  conseil et de technologie.
                </p>
              </div>

              <div className="text-center pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:contact@exceltax.com"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300"
                >
                  Contactez nos experts
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
