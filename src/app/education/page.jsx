"use client";

import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function page() {
  return (
    <div>
      <Header />

      {/* Section Héros */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0A192F] py-20 px-6 overflow-hidden">
        <Image
          src="/education/hero-section-bg.jpg"
          alt="Conformité SYSCOHADA"
          fill
          priority
          className="object-cover object-center opacity-15 bg-fixed"
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
            <span>Boostez votre carrière !</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-4xl">
            PASSEPORT DES COMPÉTENCES PROFESSIONNELLES{" "}
            <span className="text-orange-500">EXCELTAX</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            Acquérez des connaissances pratiques, obtenez des certifications
            reconnues et développez les compétences professionnelles nécessaires
            pour réussir dans le monde du travail d'aujourd'hui. Nos programmes
            de formation sont conçus pour les étudiants, les professionnels, les
            entrepreneurs et les organisations en quête de croissance continue.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <a
              href="#license"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200"
            >
              En savoir plus
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
            >
              Commencer
            </a>
          </div>
        </motion.div>
      </section>

      {/* objective */}
      <section className="flex items-center justify-center py-16 px-6 sm:px-12">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto w-full">
          {/* First Block: Objective & Intro */}
          <div
            className="group relative flex-1 bg-white border border-orange-500 p-8 rounded-2xl backdrop-blur-sm space-y-4 overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer
      before:absolute before:inset-0 before:bg-[#0A192F] before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100"
          >
            <div className="relative z-10 space-y-4">
              <h3 className="text-orange-500 font-bold text-xl tracking-wider uppercase">
                OBJECTIF
              </h3>
              <p className="font-semibold text-lg sm:text-xl text-gray-900 group-hover:text-white transition-colors duration-300 leading-relaxed">
                Vous souhaitez booster votre CV, changer de carrière ou faire
                reconnaître vos compétences et savoir-faire ? Optez pour la
                certification et développez votre employabilité !
              </p>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                EXCELTAX.ORG vous propose différents types de formations
                certifiantes selon votre métier, votre expérience et vos
                attentes.
              </p>
            </div>
          </div>

          {/* Second Block: Skill Domains & Regional Application */}
          <div
            className="group relative flex-1 bg-white border border-orange-500 p-8 rounded-2xl backdrop-blur-sm overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer
      before:absolute before:inset-0 before:bg-[#0A192F] before:origin-bottom before:scale-y-0 before:transition-transform      before:duration-300 before:ease-out hover:before:scale-y-100"
          >
            <div className="relative z-10">
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                <span className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 block mb-3 text-lg">
                  Développez vos compétences en Administration, Gestion de la
                  PME, Comptabilité, Finance, Fiscalité, informatique, Gestion
                  de la clientèle, Management des Unités Commerciales, Marketing
                  digital
                </span>
                grâce à une sélection rigoureuse de cours, certificats et
                diplômes en ligne offerts par les meilleures universités et
                entreprises au monde. Ces programmes sont conçus pour vous
                permettre d'acquérir une expertise pointue, avec une application
                directe sur le référentiel comptable OHADA et le Code Général
                des Impôts du Cameroun ou CEMAC. Que vous soyez un professionnel
                en activité ou un étudiant en quête de perfectionnement, ces
                formations en ligne vous offrent la flexibilité et la
                reconnaissance nécessaires pour exceller dans votre carrière.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* advantage */}
      <main className="bg-[url('/faq-bg.jpg')] bg-cover bg-no-repeat">
        <section className="p-10 bg-[url('/faq-bg.jpg')] bg-cover bg-no-repeat flex items-center justify-center">
          <div className="max-w-5xl text-center mx-auto w-full">
            <div className="group relative bg-white border border-gray-200 p-10 rounded-2xl backdrop-blur-sm space-y-5 overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer">
              <div className="relative z-10 space-y-4">
                <h2 className="text-orange-500 font-extrabold text-2xl sm:text-3xl tracking-wider uppercase">
                  NOS CERTIFICATIONS RECONNUES
                </h2>

                <p className="text-gray-600 transition-colors duration-300 leading-relaxed text-base sm:text-lg">
                  <strong className="text-gray-900 transition-colors duration-300 font-semibold block mb-2">
                    Les AQP (Attestation de Qualification Professionnelle), CQP
                    (Certificat de Qualification Professionnelle) et DQP
                    (Diplôme de Qualification Professionnelle)
                  </strong>{" "}
                  sont des certifications professionnelles reconnues au
                  Cameroun, destinées à valoriser les compétences des
                  travailleurs dans différents métiers. Ces qualifications
                  s’inscrivent dans le cadre de la formation professionnelle
                  continue et de la reconnaissance des acquis dans le milieu
                  professionnel. Elles répondent aux besoins des entreprises et
                  du marché de l’emploi, en garantissant des standards de
                  compétence et d’efficacité.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 sm:px-12 flex items-center justify-center">
          <div className="max-w-6xl mx-auto w-full space-y-10">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <h2 className="text-orange-500 font-extrabold text-2xl sm:text-3xl tracking-wider uppercase">
                Avantages de ces certifications
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Découvrez comment les AQP, CQP et DQP propulsent votre carrière
              </p>
            </div>

            {/* Small Divs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Point 1 */}
              <div
                className="group relative bg-white border border-gray-200 p-6 rounded-2xl backdrop-blur-sm space-y-3 overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer
      before:absolute before:inset-0 before:bg-[#0A192F] before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100"
              >
                <div className="relative z-10 space-y-2">
                  <span className="text-3xl font-black text-orange-500 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    01
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                    Amélioration de l’employabilité
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    Ces certifications permettent d’acquérir ou de valider des
                    compétences recherchées par les employeurs, augmentant ainsi
                    les chances d’accès ou de maintien dans l’emploi.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div
                className="group relative bg-white border border-gray-200 p-6 rounded-2xl backdrop-blur-sm space-y-3 overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer
      before:absolute before:inset-0 before:bg-[#0A192F] before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100"
              >
                <div className="relative z-10 space-y-2">
                  <span className="text-3xl font-black text-orange-500 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    02
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                    Reconnaissance officielle
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    Les qualifications AQP, CQP, et DQP sont reconnues au niveau
                    national par les employeurs, ce qui renforce la crédibilité
                    des titulaires.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div
                className="group relative bg-white border border-gray-200 p-6 rounded-2xl backdrop-blur-sm space-y-3 overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer
      before:absolute before:inset-0 before:bg-[#0A192F] before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100"
              >
                <div className="relative z-10 space-y-2">
                  <span className="text-3xl font-black text-orange-500 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    03
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                    Évolution professionnelle
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    Ces certifications facilitent les promotions et l’accès à
                    des fonctions plus élevées dans l’entreprise.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div
                className="group relative bg-white border border-gray-200 p-6 rounded-2xl backdrop-blur-sm space-y-3 overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer
      before:absolute before:inset-0 before:bg-[#0A192F] before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100"
              >
                <div className="relative z-10 space-y-2">
                  <span className="text-3xl font-black text-orange-500 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    04
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                    Acquisition de nouvelles compétences
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    Elles permettent de suivre des formations adaptées aux
                    besoins du marché du travail, dans divers secteurs
                    d’activité (comptabilité, gestion, commerce, technique...).
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white text-center text-orange-500 font-semibold p-5 rounded-lg max-w-3xl mx-auto">
              <p>
                Ces certifications jouent un rôle essentiel dans la formation
                professionnelle au Cameroun, en s’adaptant aux besoins des
                entreprises et du marché de l’emploi.
              </p>
              <button className="bg-[#0F2D6B] mt-5 text-white font-semibold text-xl px-5 py-2 rounded-md hover:bg-[#12377f] transition-colors duration-300 cursor-pointer">
                Préinscription en ligne
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="py-16 px-6 sm:px-12 flex items-center justify-center">
  <div className="max-w-6xl mx-auto w-full space-y-10">
    {/* Description Block */}
    <div className="bg-white border border-gray-200 p-8 sm:p-10 rounded-2xl shadow-sm space-y-6">
      <h2 className="text-orange-500 font-extrabold text-2xl sm:text-3xl tracking-wider uppercase">
        DIPLÔME DE QUALIFICATION PROFESSIONNELLE (DQP)
      </h2>

      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
        Le{" "}
        <strong className="text-gray-900 font-semibold">
          Diplôme de Qualification Professionnelle (DQP)
        </strong>{" "}
        est accessible à tous et propose une formation professionnelle sur
        mesure, alignée avec les exigences du marché du travail. Ce
        programme offre une immersion totale en entreprise, avec{" "}
        <strong className="text-gray-900 font-semibold">
          75% de pratique et 25% de théorie
        </strong>
        . Grâce à des programmes élaborés en fonction des besoins réels du
        terrain, les apprenants sont directement confrontés à la réalité
        du monde professionnel, incluant un minimum de deux mois de stage
        en entreprise.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#preinscription"
          className="bg-[#0A192F] hover:bg-[#0D203D] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md text-sm sm:text-base hover:scale-105"
        >
          Préinscription en ligne
        </a>
        <a
          href="#orientation"
          className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base hover:scale-105"
        >
          Rendez-vous d'orientation
        </a>
        <a
          href="#details"
          className="border-2 border-red-500 text-red-500 hover:bg-red-500/10 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base hover:scale-105"
        >
          Plus de détails
        </a>
      </div>
    </div>

    {/* Section Title for Formations */}
    <div className="space-y-2">
      <h3 className="text-gray-900 font-bold text-xl sm:text-2xl">
        Voici les formations proposées :
      </h3>
    </div>

    {/* Grid of Small Program Boxes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Box 1 */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 transform transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:shadow-xl cursor-pointer">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
            CIG
          </span>
          <h4 className="font-bold text-lg text-gray-900">
            Comptabilité Informatisée et Gestion
          </h4>
        </div>
      </div>

      {/* Box 2 */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 transform transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:shadow-xl cursor-pointer">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
            SC
          </span>
          <h4 className="font-bold text-lg text-gray-900">
            Secrétariat Comptable
          </h4>
        </div>
      </div>

      {/* Box 3 */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 transform transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:shadow-xl cursor-pointer">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
            SB
          </span>
          <h4 className="font-bold text-lg text-gray-900">
            Secrétariat Bureautique
          </h4>
        </div>
      </div>

      {/* Box 4 */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 transform transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:shadow-xl cursor-pointer">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
            SBB
          </span>
          <h4 className="font-bold text-lg text-gray-900">
            Secrétariat Bureautique Bilingue
          </h4>
        </div>
      </div>

      {/* Box 5 */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 transform transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:shadow-xl cursor-pointer">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
            WM
          </span>
          <h4 className="font-bold text-lg text-gray-900">
            Webmestre
          </h4>
        </div>
      </div>

      {/* Box 6 */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 transform transition-all duration-300 hover:scale-105 hover:border-orange-500/50 hover:shadow-xl cursor-pointer">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full inline-block">
            MOAV
          </span>
          <h4 className="font-bold text-lg text-gray-900">
            Montage Audio Visuel
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
}

export default page;
