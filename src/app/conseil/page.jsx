"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiPhoneCall,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Page() {
  const countries = [
    { name: "Cameroon", flag: "/conseil/cameroon.png" },
    { name: "Chad", flag: "/conseil/chad.png" },
    { name: "Central African Republic", flag: "/conseil/car.png" },
    { name: "Republic of the Congo", flag: "/conseil/congo.png" },
    { name: "Equatorial Guinea", flag: "/conseil/equatorial-guinea.png" },
    { name: "Gabon", flag: "/conseil/gabon.png" },
  ];

  const service = [
    {
      id: 1,
      title: "Taxation",
      dis: "Comprehensive tax planning, filing, compliance, and advisory services for individuals and businesses.",
      image:
        "https://images.pexels.com/photos/6863330/pexels-photo-6863330.jpeg",
    },
    {
      id: 2,
      title: "Accounting",
      dis: "Professional bookkeeping, financial reporting, payroll, and accounting solutions to keep your business organized.",
      image:
        "https://images.pexels.com/photos/6779565/pexels-photo-6779565.jpeg",
    },
    {
      id: 3,
      title: "Social Security",
      dis: "Expert assistance with social security registration, contributions, compliance, and employee benefit management.",
      image: "https://images.pexels.com/photos/210705/pexels-photo-210705.jpeg",
    },
    {
      id: 4,
      title: "DGT Services",
      dis: "Reliable support for DGT registration, documentation, regulatory compliance, and government-related processes.",
      image: "https://exceltax.org/conseil/assets/images/images.png",
    },
    {
      id: 5,
      title: "Tax Accountant",
      dis: "Dedicated tax accounting services including tax preparation, audits, financial planning, and compliance support.",
      image:
        "https://images.pexels.com/photos/8962521/pexels-photo-8962521.jpeg",
    },
    {
      id: 6,
      title: "Recovery Services",
      dis: "Professional debt recovery and financial recovery solutions designed to help businesses recover outstanding payments.",
      image: "https://exceltax.org/conseil/assets/images/537.jpg",
    },
  ];

  const features = [
    {
      icon: FiTarget,
      title: "Personalized Solutions",
      description:
        "Every business is unique. We develop strategies tailored to your industry and objectives.",
    },
    {
      icon: FiTrendingUp,
      title: "Data-Driven Growth",
      description:
        "Leverage analytics and actionable insights to make informed business decisions.",
    },
    {
      icon: FiShield,
      title: "Trusted Expertise",
      description:
        "Partner with industry experts dedicated to scaling your business securely.",
    },
    {
      icon: FiZap,
      title: "Fast Execution",
      description:
        "Turn ideas into high-performing digital strategies with quick turnaround times.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col w-full bg-white text-slate-900 font-sans">
      <Header />

      <main className="flex-1">
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 overflow-hidden bg-[#041431]">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/conseil/hero-section-bg.webp"
              alt="Modern corporate background"
              fill
              priority
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#041431]/90 via-[#041431]/70 to-[#041431]" />
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#186594]/30 rounded-full blur-3xl pointer-events-none"
            />
          </div>

          {/* Hero Content */}
          <motion.div
            className="max-w-5xl mx-auto px-6 lg:px-12 w-full text-center relative z-10 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Pill Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#186594]/30 border border-[#186594]/50 text-xs sm:text-sm font-medium text-orange-400 backdrop-blur-md shadow-lg"
            >
              <FiShield className="w-4 h-4 text-orange-400" aria-hidden="true" />
              <span>Trusted CEMAC Financial Advisors</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md"
            >
              Integrated Tax & Business Consulting for{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Growing Companies
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow"
            >
              Helping businesses across the CEMAC region simplify taxation,
              ensure compliance, and achieve sustainable financial growth
              through expert consulting.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Schedule Consultation
                <FiArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#186594]/40 hover:bg-[#186594]/60 border border-[#186594]/60 font-semibold text-white backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <FiPhoneCall className="w-4 h-4 text-orange-400" aria-hidden="true" />
                Contact Our Team
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* --- COUNTRY SECTION --- */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-5"
                >
                  Global Presence
                </motion.span>

                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl lg:text-4xl font-bold text-[#041431] leading-tight mb-6"
                >
                  Countries <span className="text-orange-500">Concerned</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 text-lg leading-8 mb-8"
                >
                  "Explore our services available throughout the{" "}
                  <span className="font-semibold text-[#186594]">CEMAC</span>{" "}
                  zone: tailored support in the heart of Central Africa!"
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  {countries.map((country) => (
                    <motion.div
                      key={country.name}
                      variants={scaleIn}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <h4 className="font-semibold text-[#041431]">
                        {country.name}
                      </h4>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#186594]/20 rounded-full blur-3xl"></div>

                <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                  <img
                    src="/conseil/2.png"
                    alt="Countries Concerned"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="bg-gradient-to-r from-[#041431] via-[#082046] to-[#041431] py-20 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-12 text-center"
            >
              Our Professional Services
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {service.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-700/50 aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041431] via-[#041431]/40 to-transparent pointer-events-none" />

                  {/* Hover dark overlay */}
                  <div className="absolute inset-0 bg-[#041431]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white z-10">
                    <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-sm text-slate-200 leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {item.dis}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm text-orange-400 font-semibold mt-4">
                          View More &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#041431] sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Tailored strategies designed to help your business thrive.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#041431] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* --- LAST SECTION (PARTNERSHIPS & CHALLENGES) --- */}
        <section className="bg-slate-50 text-slate-900 py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none bg-cover bg-no-repeat opacity-50"
            style={{
              backgroundImage: `url("/faq-bg.webp")`,
            }}
          />

          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#186594]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto space-y-20 relative z-10">
            {/* Header Block */}
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#186594] font-semibold tracking-wider text-xs sm:text-sm uppercase bg-[#186594]/10 px-4 py-1.5 rounded-full border border-[#186594]/20 inline-block">
                EXCELTAXCONSEIL
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#041431] leading-tight">
                Turn Your Dreams Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#186594] to-orange-500">
                  Reality
                </span>
              </h1>
              <p className="text-slate-600 text-lg">
                Navigating the complex world of tax regulations so you can focus
                on scale and innovation.
              </p>
            </motion.div>

            {/* Partnership Cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Card 1 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/90 border border-slate-200/80 shadow-lg backdrop-blur-xl hover:border-[#186594] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-1 bg-[#186594] rounded-full group-hover:w-16 transition-all duration-300" />
                  <h2 className="text-2xl font-bold text-[#041431]">
                    Tax & Accounting Partnership Program
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We offer an innovative accounting solution dedicated to
                    optimizing your tax results. Don't let complex tax
                    regulations hinder your growth. With EXCELTAXconseil,
                    transform these challenges into genuine performance
                    drivers.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-[#186594] font-semibold group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Learn more about optimization</span>
                  <span className="ml-2 font-bold">&rarr;</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/90 border border-slate-200/80 shadow-lg backdrop-blur-xl hover:border-orange-500 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-1 bg-orange-500 rounded-full group-hover:w-16 transition-all duration-300" />
                  <h2 className="text-2xl font-bold text-[#041431]">
                    Stress-Free Tax Management
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Tax management shouldn't be a source of anxiety, but a
                    powerful tool for overall performance. Through our
                    personalized services and proactive approach, navigate the
                    tax landscape with total confidence.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-orange-500 font-semibold group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Explore proactive management</span>
                  <span className="ml-2 font-bold">&rarr;</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Challenges Section */}
            <div className="pt-10 space-y-10">
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-[#041431] tracking-wide">
                  Key Challenges We Solve
                </h2>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 to-transparent" />
              </div>

              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Challenge 1 */}
                <motion.div
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-white border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-200 flex items-start space-x-4"
                >
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 border border-amber-200 px-2.5 py-1 rounded shrink-0">
                    01
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#041431]">
                      Regulatory Complexity & Instability
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      Taxation is a constantly evolving field, making compliance
                      particularly difficult and time-consuming for growing SMEs.
                    </p>
                  </div>
                </motion.div>

                {/* Challenge 2 */}
                <motion.div
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-white border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-200 flex items-start space-x-4"
                >
                  <span className="text-xs font-mono font-bold text-orange-700 bg-orange-100 border border-orange-200 px-2.5 py-1 rounded shrink-0">
                    02
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#041431]">
                      Declarative Tax System Risks
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      Self-declaration exposes companies to high tax audit risks
                      and severe reassessments when managed without specialized
                      expertise.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}