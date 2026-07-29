"use client";

import React from "react";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";
import { motion } from "framer-motion";
import {
  FaStore,
  FaBuilding,
  FaBriefcase,
  FaIndustry,
  FaUsers,
  FaFileInvoiceDollar,
  FaCartShopping,
  FaHotel,
  FaScaleBalanced,
  FaGraduationCap,
  FaPlaneDeparture,
  FaHouse,
  FaTruckFast,
  FaBriefcaseMedical,
  FaGlobe,
  FaLandmark,
  FaShieldHalved,
  FaBuildingColumns,
  FaTree,
} from "react-icons/fa6";
import Image from "next/image";

// Animation Variants
const fadeIn = (direction, delay) => ({
  hidden: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

function Page() {
  const pme = [
    {
      name: "Très Petite Entreprise",
      badge: "TPE",
      value:
        "Jusqu’à 5 employés et chiffre d'affaires inférieur à 15 millions de FCFA.",
      icon: FaStore,
    },
    {
      name: "Petite Entreprise",
      badge: "PE",
      value:
        "Entre 6 et 20 employés, et chiffre d'affaires entre 15 et 250 millions de FCFA.",
      icon: FaBuilding,
    },
    {
      name: "Moyenne Entreprise",
      badge: "ME",
      value:
        "Entre 21 et 100 employés, et chiffre d'affaires entre 250 millions et 3 milliards de FCFA.",
      icon: FaBriefcase,
    },
    {
      name: "Grande Entreprise",
      badge: "GE",
      value:
        "Plus de 100 employés et chiffre d'affaires supérieur à 3 milliards de FCFA.",
      icon: FaIndustry,
    },
  ];

  const firm = [
    { id: 1, title: "Industry & Agro-industry", icon: FaIndustry },
    { id: 2, title: "Commerce, Distribution & Trade", icon: FaCartShopping },
    { id: 3, title: "Accommodation & Catering", icon: FaHotel },
    { id: 4, title: "Legal Professions", icon: FaScaleBalanced },
    { id: 5, title: "Education & Training", icon: FaGraduationCap },
    { id: 6, title: "Building, Studies & Architecture", icon: FaBuilding },
    { id: 7, title: "Travel & Tourism", icon: FaPlaneDeparture },
    { id: 8, title: "Real Estate Activities", icon: FaHouse },
    { id: 9, title: "Transport, Transit & Logistics", icon: FaTruckFast },
    { id: 10, title: "Health & Medicine", icon: FaBriefcaseMedical },
    { id: 11, title: "NGOs, Associations & International Organizations", icon: FaGlobe },
    { id: 12, title: "Public Sector & Local Authorities", icon: FaLandmark },
    { id: 13, title: "Security, Guarding & Fire", icon: FaShieldHalved },
    { id: 14, title: "Banks, Insurance Companies, Microfinance, Telecoms", icon: FaBuildingColumns },
    { id: 15, title: "Forest & Hydrocarbon", icon: FaTree },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF2F5] text-[#404040]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden bg-[url('/about/3.webp')] bg-no-repeat bg-cover bg-center px-4 md:px-8">
          <div className="absolute inset-0 bg-[#183B63]/85 z-10" />

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto text-center relative z-20 flex flex-col items-center"
          >
            <span className="inline-block text-[#F68B2D] text-xs md:text-sm font-semibold uppercase tracking-widest bg-[#183B63]/90 px-5 py-2 rounded-full mb-6 border border-[#F68B2D]/40 shadow-lg">
              Cadre réglementaire des PME au Cameroun
            </span>

            <h1 className="text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-tight mb-6">
              Nos pôles de gestion
            </h1>

            <p className="text-[#EEF2F5] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
              La{" "}
              <strong className="text-[#FFFFFF] font-medium">
                loi n° 2010/001
              </strong>{" "}
              du 13 avril 2010, modifiée par la{" "}
              <strong className="text-[#FFFFFF] font-medium">
                loi n° 2015/010
              </strong>{" "}
              du 16 juillet 2015, portant promotion des PME, définit les PME
              comme les entités économiques ayant au plus 100 employés et un
              chiffre d'affaires n'excédant pas trois milliards de FCFA.
            </p>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto -mt-16 relative z-30">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#183B63] tracking-tight uppercase">
              Catégories de PME
            </h2>
            <div className="w-20 h-1.5 bg-[#F68B2D] mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {pme.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", index * 0.15)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-[#FFFFFF] rounded-2xl p-6 md:p-8 shadow-xl shadow-[#A9B4C0]/20 border border-[#EEF2F5] flex flex-col justify-between group relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F68B2D]" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#EEF2F5] text-[#2E5D8A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EEF2F5] text-[#183B63] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#183B63] mb-3 group-hover:text-[#F68B2D] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-[#404040] text-sm md:text-base leading-relaxed font-light">
                      {item.value}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#EEF2F5] flex items-center justify-between text-xs text-[#A9B4C0] font-medium">
                    <span>Cameroun</span>
                    <span className="group-hover:translate-x-1 transition-transform text-[#F68B2D] font-bold">
                      →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* SME Organization & Single Tax Window Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              {/* SME Organization Block */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-[#FFFFFF] p-8 rounded-2xl shadow-lg shadow-[#A9B4C0]/10 border border-[#EEF2F5] relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#2E5D8A]" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2F5] text-[#2E5D8A] flex items-center justify-center shadow-sm">
                    <FaUsers className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#183B63] tracking-tight uppercase">
                    SME Organization
                  </h2>
                </div>
                <p className="text-[#404040] text-sm md:text-base leading-relaxed font-light">
                  SMEs are often organized into management units, fostering a
                  high degree of specialization. In our offices, agents are
                  grouped into multidisciplinary teams. Some agents assume the
                  role of{" "}
                  <strong className="text-[#183B63] font-medium">
                    &quot;client managers,&quot;
                  </strong>{" "}
                  responsible for managing client accounts. Client segmentation
                  and service personalization allow the firm to meet the
                  specific needs of each client, making the service truly{" "}
                  <strong className="text-[#183B63] font-medium">
                    &quot;client-centric.&quot;
                  </strong>
                </p>
              </motion.div>

              {/* Single Tax and Accounting Point of Contact Block */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-[#FFFFFF] p-8 rounded-2xl shadow-lg shadow-[#A9B4C0]/10 border border-[#EEF2F5] relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#F68B2D]" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2F5] text-[#F68B2D] flex items-center justify-center shadow-sm">
                    <FaFileInvoiceDollar className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#183B63] tracking-tight uppercase">
                    Single Tax and Accounting Point of Contact
                  </h2>
                </div>
                <div className="space-y-4 text-[#404040] text-sm md:text-base leading-relaxed font-light">
                  <p>
                    <span className="font-semibold text-[#f68b2d]">
                      Our Single Point of Contact
                    </span>{" "}
                    for Tax and Accounting Services, or{" "}
                    <span className="font-semibold text-[#f68b2d]">
                      Single Tax and Accounting Window
                    </span>
                    , is an innovative solution for centralizing and simplifying
                    taxpayer needs. By consolidating all legal, social,
                    accounting, tax, and digital marketing issues within a
                    single point of contact, we enable businesses to deal
                    efficiently with government agencies without having to
                    navigate between different, separately billable services.
                  </p>
                  <p>
                    The integration of digital tools into the concept further
                    enhances efficiency by providing optimized traceability of
                    exchanges and services, while ensuring smoother management
                    of various procedures.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Container */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-[#2E5D8A]/10 rounded-3xl transform rotate-3 -z-10" />
                <div className="absolute -inset-4 bg-[#F68B2D]/10 rounded-3xl transform -rotate-3 -z-10" />

                <div className="relative h-[450px] md:h-[680px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF]">
                  <Image
                    src="/about/4.webp"
                    alt="SME Organization and Single Tax Window"
                    fill
                    className="object-contain transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sectoral Expertise Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#183B63] tracking-tight uppercase">
              Sectoral Expertise of the Firm
            </h2>
            <div className="w-20 h-1.5 bg-[#F68B2D] mx-auto mt-3 rounded-full"></div>
            <p className="text-[#404040] text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
              The firm has developed specific skills in various sectors of
              activity, some of which are particularly represented among our
              clientele.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {firm.map((sector, index) => {
              const IconComp = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  variants={fadeIn("up", index * 0.05)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-[#FFFFFF] rounded-2xl p-6 shadow-md shadow-[#A9B4C0]/15 border border-[#EEF2F5] flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2F5] text-[#183B63] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#183B63] group-hover:text-[#FFFFFF] shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-[#183B63] group-hover:text-[#F68B2D] transition-colors leading-snug">
                    {sector.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Page;