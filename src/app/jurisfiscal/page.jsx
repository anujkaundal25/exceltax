"use client";

import React from "react";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

export default function Page() {
  const domains = [
    {
      title: "Droit des sociétés et droit commercial",
      desc: "Structuring, commercial agreements, corporate governance, and operational compliance.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Conseil fiscal et planification fiscale",
      desc: "Optimizing tax strategies, managing risk exposure, and cross-border tax advice.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Conformité réglementaire",
      desc: "Ensuring full adherence to evolving industry regulations and legal frameworks.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Gouvernance d'entreprise",
      desc: "Building solid administrative structures, board policies, and stakeholder trust.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Rédaction et révision de contrats",
      desc: "Drafting, analyzing, and negotiating robust legal agreements.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      title: "Évaluation des risques juridiques",
      desc: "Identifying vulnerabilities and implementing proactive risk mitigation plans.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "Conseil juridique aux entreprises",
    },
    {
      title: "Planification et conseil fiscal",
    },
    {
      title: "Conformité réglementaire",
    },
    {
      title: "Gestion des contrats",
    },
    {
      title: "Gouvernance d'entreprise",
    },
    {
      title: "Gestion des risques juridiques",
    },
  ];

  const SECTORS = [
  {
    title: "Entreprises privées & PME",
    description: "Accompagnement fiscal et juridique quotidien pour soutenir la croissance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V11m0 0h-2m2 0h2" />
      </svg>
    ),
  },
  {
    title: "Grandes entreprises",
    description: "Gestion des enjeux réglementaires complexes et opérations stratégiques.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 21h18M3 10h18M3 6h18M3 14h18M3 18h18" />
      </svg>
    ),
  },
  {
    title: "Institutions financières",
    description: "Conformité réglementaire, audit fiscal et gestion du risque.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Administrations publiques",
    description: "Conseil en politiques publiques et cadre fiscal territorial.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M12 3l9 7H3l9-7z" />
      </svg>
    ),
  },
  {
    title: "Organisations int. & ONG",
    description: "Gouvernance, structuration juridique et statut fiscal spécial.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.8M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Startups & Entrepreneurs",
    description: "Levées de fonds, propriété intellectuelle et lancement d'activité.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Projets d'investissement",
    description: "Due diligence approfondie et sécurisation des capitaux.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Agences de développement",
    description: "Programmes de coopération internationale et gestion des fonds.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];
  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{ backgroundColor: "#EEF2F5", color: "#404040" }}
    >
      <Header />

      <main className="flex-grow">
        {/* ================= HERO SECTION (Single Centered Box + BG Image) ================= */}
        <section
          className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          {/* Dark Overlay over full section */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#0D223A", opacity: 0.9 }}
          />

          {/* DIRECT CONTENT (No inner card wrapper) */}
          <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
            {/* Pill Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#F68B2D",
                border: "1px solid rgba(246, 139, 45, 0.4)",
              }}
            >
              JurisFISCAL • EXCELTAX
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
              style={{ color: "#FFFFFF" }}
            >
              Conseil juridique et fiscal intégré pour une{" "}
              <span style={{ color: "#F68B2D" }}>croissance durable</span> des
              entreprises
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "#D1D5DB" }}
            >
              Accompagnement sur-mesure pour naviguer les défis juridiques,
              fiscaux et réglementaires en toute sérénité.
            </p>

            {/* Single Button */}
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:opacity-90 shadow-xl transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#F68B2D",
                  color: "#FFFFFF",
                }}
              >
                Planifier une consultation
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: NOTRE EXPERTISE ================= */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Decorative subtle background elements */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(246,139,45,0.08) 0%, rgba(24,59,99,0.05) 50%, transparent 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
              <div className="lg:col-span-7">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border border-[#F68B2D]/20"
                  style={{ backgroundColor: "#FEF7F2" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#F68B2D" }}
                  />
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "#F68B2D" }}
                  >
                    Notre expertise
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
                  style={{ color: "#183B63" }}
                >
                  Une expertise juridique et fiscale au service de la confiance
                  des entreprises
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p
                  className="text-base leading-relaxed font-normal"
                  style={{ color: "#505A65" }}
                >
                  JurisFISCAL associe l'excellence juridique à l'intelligence
                  fiscale afin d'aider les organisations à évoluer dans des
                  environnements réglementaires complexes tout en restant
                  concentrées sur leur développement à long terme.
                </p>
              </div>
            </div>

            {/* Expertise Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domains.map((item, index) => {
                const formattedNum = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between overflow-hidden"
                    style={{
                      backgroundColor: "#EEF2F5",
                      border: "1px solid #D1D8E0",
                    }}
                  >
                    {/* Top Accent Line on Hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: "#F68B2D" }}
                    />

                    <div>
                      {/* Card Header: Icon + Step Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F68B2D] group-hover:text-white"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#183B63",
                            border: "1px solid #A9B4C0",
                          }}
                        >
                          {item.icon}
                        </div>

                        <span
                          className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#F68B2D",
                            border: "1px solid #E0E6ED",
                          }}
                        >
                          {formattedNum}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-lg font-bold mb-2 group-hover:text-[#F68B2D] transition-colors duration-200"
                        style={{ color: "#183B63" }}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#5A6573" }}
                      >
                        {item.desc}
                      </p>
                    </div>

                    {/* Interactive Arrow Link */}
                    <div
                      className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 group-hover:translate-x-1"
                      style={{ color: "#183B63" }}
                    >
                      <span>En savoir plus</span>
                      <svg
                        className="w-4 h-4 text-[#F68B2D]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: NOS SERVICES ================= */}
        <section className="py-20" style={{ backgroundColor: "#EEF2F5" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#F68B2D" }}
              >
                Nos services
              </span>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-3"
                style={{ color: "#183B63" }}
              >
                Des services JurisFISCAL complets
              </h2>
              <p className="text-sm sm:text-base" style={{ color: "#404040" }}>
                Nos spécialistes proposent des solutions juridiques et fiscales
                globales pour accompagner les organisations à chaque étape de
                leur développement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx} // Tip: If your service object has a unique ID (like service.id), use that here instead of idx!
                  className="p-6 rounded-xl flex flex-col justify-between transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #A9B4C0",
                  }}
                >
                  <div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "#183B63" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: NOTRE APPROCHE ================= */}
        <section className="py-20" style={{ backgroundColor: "#183B63" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#F68B2D" }}
              >
                Notre approche
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-white">
                Un processus structuré centré sur votre entreprise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Évaluation",
                  desc: "Nous analysons votre environnement juridique, fiscal et opérationnel afin d'identifier les enjeux, les opportunités et les exigences de conformité.",
                },
                {
                  step: "02",
                  title: "Élaboration de la stratégie",
                  desc: "Nos experts conçoivent des solutions juridiques et fiscales sur mesure, alignées sur les objectifs de votre organisation et les obligations réglementaires.",
                },
                {
                  step: "03",
                  title: "Mise en œuvre",
                  desc: "Nous vous accompagnons dans l'exécution des procédures juridiques, la préparation des documents, la gestion de la conformité et la mise en application.",
                },
                {
                  step: "04",
                  title: "Accompagnement continu",
                  desc: "Face à l'évolution constante des réglementations, nous assurons une veille permanente pour aider votre organisation à rester conforme.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: "#2E5D8A",
                    border: "1px solid #A9B4C0",
                  }}
                >
                  {/* Animated white backdrop sliding from bottom */}
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Numbering container: Smoothly expands & slides down without leaving an awkward empty gap in resting state */}
                      <div className="overflow-hidden max-h-0 opacity-0 -translate-y-2 group-hover:max-h-12 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mb-3 transition-all duration-300 ease-out">
                        <span
                          className="text-3xl font-black"
                          style={{ color: "#F68B2D" }}
                        >
                          {item.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold mb-2 transition-colors duration-300 text-white group-hover:text-[#183B63]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs leading-relaxed transition-colors duration-300 text-[#EEF2F5] group-hover:text-[#334155]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: LES SECTEURS ================= */}
        <section className="py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2F5] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#F68B2D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F68B2D]/10 border border-[#F68B2D]/20 mb-4">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#F68B2D" }}
            >
              Les secteurs que nous accompagnons
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-4 leading-tight"
            style={{ color: "#183B63" }}
          >
            Un conseil juridique et fiscal de confiance
          </h2>

          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#404040" }}>
            Nos services JurisFISCAL répondent aux besoins des organisations
            évoluant dans des secteurs d'activité variés et soumis à
            différents environnements réglementaires.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTORS.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-[#A9B4C0]/40 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#183B63]/5 hover:border-[#F68B2D] flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#F68B2D] group-hover:text-white"
                  style={{
                    backgroundColor: "#EEF2F5",
                    color: "#183B63",
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2 group-hover:text-[#F68B2D] transition-colors duration-200"
                  style={{ color: "#183B63" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#555555" }}>
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent Bar on Hover */}
              <div className="w-0 h-1 bg-[#F68B2D] rounded-full mt-6 transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* ================= SECTION 6: CTA & WHY CHOOSE US ================= */}
        <section
          id="contact"
          className="py-20"
          style={{ backgroundColor: "#EEF2F5" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-8 sm:p-12 shadow-xl"
              style={{
                backgroundColor: "#183B63",
                border: "1px solid #2E5D8A",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "#F68B2D" }}
                  >
                    Prêt à renforcer votre stratégie ?
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-4"
                    style={{ color: "#FFFFFF" }}
                  >
                    Faites confiance à EXCELTAX pour un accompagnement
                    stratégique de référence
                  </h2>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-6"
                    style={{ color: "#EEF2F5" }}
                  >
                    La conformité juridique et fiscale ne constitue pas
                    seulement une obligation réglementaire : elle représente le
                    fondement d'une croissance durable et d'une performance
                    pérenne. Avec JurisFISCAL, EXCELTAX Business Intelligence
                    Group met à votre disposition son expertise, sa vision
                    stratégique et son accompagnement professionnel.
                  </p>

                  <div
                    className="p-5 rounded-xl mb-6"
                    style={{
                      backgroundColor: "#2E5D8A",
                      border: "1px solid #A9B4C0",
                    }}
                  >
                    <p
                      className="font-bold text-sm mb-1"
                      style={{ color: "#F68B2D" }}
                    >
                      Construisez dès aujourd'hui une entreprise plus solide et
                      pleinement conforme
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#FFFFFF" }}
                    >
                      Échangez avec nos experts et découvrez comment JurisFISCAL
                      peut aider votre organisation à maîtriser les enjeux
                      juridiques, optimiser sa performance fiscale et assurer
                      son succès à long terme.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 shadow-md"
                    style={{
                      backgroundColor: "#F68B2D",
                      color: "#FFFFFF",
                    }}
                  >
                    Planifier une consultation
                  </a>
                </div>

                <div
                  className="lg:col-span-5 p-6 rounded-xl flex flex-col justify-center"
                  style={{
                    backgroundColor: "#2E5D8A",
                    border: "1px solid #A9B4C0",
                  }}
                >
                  <h3
                    className="text-base font-bold mb-4"
                    style={{ color: "#FFFFFF" }}
                  >
                    Pourquoi choisir EXCELTAX ?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Expertise intégrée en droit et fiscalité",
                      "Accompagnement en conformité réglementaire",
                      "Solutions juridiques orientées vers les objectifs de votre entreprise",
                      "Consultants multidisciplinaires expérimentés",
                      "Conseils personnalisés adaptés à chaque organisation",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-xs sm:text-sm"
                      >
                        <span style={{ color: "#F68B2D", fontWeight: "bold" }}>
                          ✓
                        </span>
                        <span style={{ color: "#EEF2F5" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
