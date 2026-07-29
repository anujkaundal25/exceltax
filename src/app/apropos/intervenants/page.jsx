"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

function Page() {
  const data = {
    domains: [
      "Finance",
      "Fiscalité",
      "Marketing",
      "Informatique",
      "Ressources humaines",
      "Droit",
    ],
    coordinators: [
      {
        name: "MAGELAN PUEMI",
        title: "Conseil Fiscal Agréé CEMAC",
        credentials: [
          "Numéro d'Agrément CEMAC : CF 240",
          "Membre de l’ONCFC : N° 17116",
          "Gérant du Cabinet EXCELT@X",
          "Doctorant en Droit des Affaires et Fiscalité",
          "DESS en Fiscalité",
          "Enseignant dans les Universités d’État et Privées",
          "Intégrateur de Logiciels Métiers",
          "Formateur des Formateurs",
          "Directeur de l’Institut Professionnel et d’Application aux Métiers du Tertiaire et Numérique d’Afrique Centrale agréé par le Ministère de l’Emploi et de la Formation Professionnelle du Cameroun",
        ],
      },
      {
        name: "JEAN PIERRE WAHA",
        title: "Expert-Comptable Diplômé par l’État Français",
        credentials: [
          "Expert-Comptable Diplômé par l’État Français",
          "Commissaire aux Comptes",
          "Numéro d'Agrément CEMAC : EC 326",
          "Membre de l’ONECCA : N° ECP 201",
          "Associé Gérant de CE3C",
          "Diplômé de l’ENSET (Grades 1 & 2)",
        ],
      },
      {
        name: "SIAKEN TCHATCHOUA Jean-Armel",
        title: "PhD Student – Institut Panafricain pour le Développement",
        credentials: [
          "Thèse: Audit de la fraude, lutte contre le blanchiment des capitaux et le financement du terrorisme dans les établissements financiers en zone CEMAC.",
          "Master II en Sciences de Gestion, Option Audit et Contrôle de Gestion – PIGIER, Cameroun",
          "Promotion: Major de la promotion 2014 avec mention Assez Bien.",
        ],
      },
      {
        name: "Pr BEGNI BAGAGNA",
        title: "Agrégé des Facultés de Droit",
        credentials: [
          "Instructeur auprès du CAMES",
          "Professeur titulaire",
          "Consultant",
        ],
      },
    ],
  };

  const newdata = [
    {
      name: "Commerce de Gros et de Détail Alimentaire",
      value: "Supermarchés, boulangeries, boucheries, etc.",
    },
    {
      name: "Activités Médicales et Paramédicales",
      value:
        "Médecins, dentistes, orthodontistes, infirmiers, sages-femmes, etc.",
    },
    {
      name: "Activités Juridiques et Judiciaires",
      value: "Avocats, notaires, huissiers, conseils juridiques, etc.",
    },
    {
      name: "Établissements d’Enseignement, Formation et Santé",
      value: "Privés, laïcs ou confessionnels.",
    },
    {
      name: "Hôtellerie et Restauration",
      value: "Hôtels, restaurants, gîtes, chambres d'hôtes, etc.",
    },
    {
      name: "Activités Immobilières",
      value:
        "Constructeurs, agents immobiliers, promoteurs, marchands de biens, etc.",
    },
    {
      name: "Bâtiment et Technique",
      value: "Architectes, ingénierie, études techniques.",
    },
    {
      name: "Activités Industrielles",
      value: "Production, transformation et fabrication.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF2F5] text-[#404040]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-[url('/about/2.webp')] bg-no-repeat bg-cover">
          <div className="absolute inset-0 bg-black/50"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#F68B2D] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 shadow-sm">
              A propos
            </span>
            <h1 className="text-white font-bold text-3xl md:text-5xl tracking-tight uppercase leading-snug">
              NOS INTERVENANTS ET COORDONATEURS DES POLES
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-[#F68B2D] mx-auto mt-6 rounded-full"
            ></motion.div>
          </motion.div>
        </section>

        {/* Intro Section */}
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFFF] rounded-2xl shadow-lg border border-[#A9B4C0]/20 p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#2E5D8A]"></div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#183B63]">
                Notre Expertise & Nos Pôles
              </h2>

              <p className="text-lg leading-relaxed text-[#404040]">
                <strong className="font-semibold text-[#183B63]">
                  Le Cabinet EXCELT@X
                </strong>{" "}
                regroupe des professionnels expérimentés dans divers domaines :
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
                {data.domains.map((domain, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#EEF2F5] border border-[#A9B4C0]/30 rounded-lg p-4 text-center transition-colors hover:border-[#2E5D8A] hover:shadow-md cursor-pointer"
                  >
                    <span className="font-semibold text-[#183B63] block">
                      {domain}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-lg leading-relaxed text-[#404040]">
                Nous mettons nos compétences et notre expertise au service de
                nos clients, en offrant une assistance technique et des conseils
                sur les nouvelles tendances en gestion, ainsi qu’en développant
                des outils de gestion adaptés à chaque mission.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Leadership / Profiles Section */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#183B63]">
              Direction & Coordination
            </h2>
            <p className="text-[#A9B4C0] mt-2 font-medium">
              Des sommités à la tête de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.coordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-lg border border-[#A9B4C0]/20 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#2E5D8A] transition-colors"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${index % 2 === 0 ? "bg-[#F68B2D]/10" : "bg-[#2E5D8A]/10"} rounded-bl-full -z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110`}
                ></div>

                <div>
                  <span className="inline-block bg-[#EEF2F5] text-[#F68B2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-4 border border-[#A9B4C0]/20">
                    {coordinator.title}
                  </span>

                  <ul className="space-y-3 text-sm md:text-base text-[#404040]">
                    {coordinator.credentials.map((cred, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`${index % 2 === 0 ? "text-[#F68B2D]" : "text-[#2E5D8A]"} font-bold mr-3`}
                        >
                          •
                        </span>
                        <span className="leading-relaxed">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F68B2D]">
                  <span className="text-sm font-bold text-[#2E5D8A] tracking-widest uppercase">
                    {coordinator.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sectors Specific Competences Section */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFFF] rounded-2xl shadow-lg border border-[#A9B4C0]/20 p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#183B63]">
                Nous avons développé des compétences spécifiques dans plusieurs
                secteurs, notamment :
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {newdata.map((item, index) => {
                const isLastTwo = index >= newdata.length - 2;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-[#EEF2F5] border border-[#A9B4C0]/30 rounded-xl p-6 flex flex-col justify-between hover:border-[#2E5D8A] hover:shadow-md cursor-pointer ${
                      isLastTwo
                        ? "lg:col-span-3 sm:col-span-1"
                        : "lg:col-span-2"
                    }`}
                  >
                    <h3 className="text-base font-bold text-[#183B63] mb-2">
                      {item.name}
                    </h3>
                    {item.value && (
                      <p className="text-sm text-[#404040] leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}

export default Page;