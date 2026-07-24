import React from "react";
import {
  FaProjectDiagram,
  FaHandshake,
  FaCheckCircle,
  FaBuilding,
  FaBrain,
} from "react-icons/fa";

// Linear SVGs for Left Panel Icons
const ScaleIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-5.45-9-12V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
  </svg>
);

const CloudShieldIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const BrainIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.037-.501.083-.75.136M9.75 3.104c.251.037.501.083.75.136M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
  </svg>
);

const BookIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CapIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453a1.5 1.5 0 000-2.594L12 3.1 4.26 7.553a1.5 1.5 0 000 2.594z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 11.5v4.8a3 3 0 001.5 2.6l3.75 2.1a1.5 1.5 0 001.5 0l3.75-2.1a3 3 0 001.5-2.6v-4.8" />
  </svg>
);

export default function Solution() {
  const solutions = [
    {
      title: "EXCELTAX Advisory",
      description: "Conseil, Fiscalité, Comptabilité, Audit et Juridique.",
      icon: ScaleIcon,
    },
    {
      title: "EXSAFE 360",
      description: "ERP Cloud intégré.",
      icon: CloudShieldIcon,
    },
    {
      title: "EXCELTAX AI OHADA",
      description: "Intelligence artificielle appliquée aux métiers du chiffre et du droit.",
      icon: BrainIcon,
    },
    {
      title: "EXCELTAX Library",
      description: "Bibliothèque numérique professionnelle.",
      icon: BookIcon,
    },
    {
      title: "EXCELTAX Academy",
      description: "Formation et certification.",
      icon: CapIcon,
    },
  ];

  const topStats = [
    {
      value: "5",
      label: "Pôles d'expertise intégrés",
      icon: FaProjectDiagram,
    },
    {
      value: "+30",
      label: "Domaines d'intervention",
      icon: FaHandshake,
    },
    {
      value: "100%",
      label: "Conformité OHADA & CEMAC",
      icon: FaCheckCircle,
    },
  ];

  const featurePillars = [
    {
      title: "Solutions Sur-Mesure",
      desc: "Des solutions dédiées aux PME, grandes entreprises et institutions.",
      icon: FaBuilding,
    },
    {
      title: "Approche Innovante",
      desc: "Une approche alliant conseil, technologie, formation et intelligence artificielle.",
      icon: FaBrain,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EEF2F5] min-h-screen font-sans relative overflow-hidden flex items-center justify-center">
      
      {/* Background Watermark "X" */}
      <div className="absolute top-6 right-10 lg:right-24 pointer-events-none opacity-20 select-none">
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-12 relative">
          <span className="text-xs font-black tracking-widest text-[#F68B2D] uppercase block mb-2">
            EXCELTAX BUSINESS INTELLIGENCE GROUP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183B63] tracking-tight">
            Nos Solutions &amp; Chiffres Clés
          </h2>
          <div className="w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-transparent via-[#F68B2D] to-transparent rounded-full"></div>
        </div>

        {/* Dashboard Container */}
        <div className="bg-[#FFFFFF]/90 backdrop-blur-md rounded-[2.5rem] p-3 sm:p-4 shadow-2xl border border-[#A9B4C0]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT DARK CARD: NOS SOLUTIONS */}
            <div className="lg:col-span-6 bg-[#183B63] text-[#FFFFFF] rounded-[2rem] p-6 sm:p-8 relative flex flex-col justify-between border-2 border-[#F68B2D] shadow-[0_0_25px_rgba(246,139,45,0.25)]">
              
              {/* Background Texture */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F68B2D_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none rounded-[2rem]"></div>

              <div className="relative z-10 pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#F68B2D] leading-snug mb-6 text-center lg:text-left uppercase tracking-tight">
                   NOS SOLUTIONS
                </h3>

                {/* Solutions List with Hover Styles */}
                <div className="space-y-3">
                  {solutions.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex items-start gap-3.5 p-3 rounded-2xl border border-transparent transition-all duration-300 hover:border-[#F68B2D] hover:bg-[#F68B2D]/10 hover:shadow-[0_0_15px_rgba(246,139,45,0.2)]"
                      >
                        <div className="pt-0.5 shrink-0">
                          <IconComp className="w-5 h-5 text-[#A9B4C0] group-hover:text-[#F68B2D] transition-colors duration-300" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#FFFFFF] leading-tight">
                            {item.title}
                          </div>
                          <div className="text-xs text-[#A9B4C0] group-hover:text-[#EEF2F5] transition-colors duration-300 mt-0.5 leading-snug">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT LIGHT CARD */}
            <div className="lg:col-span-6 bg-[#FFFFFF] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#183B63] leading-snug mb-6 text-center lg:text-left uppercase tracking-tight">
                  NOS CHIFFRES CLÉS
                </h3>

                {/* Top 3 Connected Stat Pods */}
                <div className="relative mb-6">
                  <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-[#A9B4C0]/20 via-[#F68B2D] to-[#A9B4C0]/20 -translate-y-1/2 z-0 hidden sm:block"></div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
                    {topStats.map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-[#FFFFFF] rounded-2xl p-3.5 border border-[#A9B4C0]/30 shadow-[0_10px_20px_-5px_rgba(246,139,45,0.15)] border-b-4 border-b-[#F68B2D] flex flex-col items-center text-center transition-transform hover:-translate-y-1"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F68B2D] to-[#2E5D8A] flex items-center justify-center shadow-md mb-2 text-[#FFFFFF] text-xs">
                            <StatIcon />
                          </div>
                          <span className="text-2xl font-black text-[#F68B2D] tracking-tight">
                            {stat.value}
                          </span>
                          <span className="text-[11px] font-bold text-[#183B63] leading-tight mt-1">
                            {stat.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom 2 Feature Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {featurePillars.map((pillar, idx) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#EEF2F5] border border-[#A9B4C0]/40 flex items-start gap-3 hover:border-[#2E5D8A] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F68B2D]/10 text-[#F68B2D] flex items-center justify-center shrink-0 mt-0.5">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-[#183B63] uppercase tracking-wider">
                            {pillar.title}
                          </div>
                          <div className="text-[11px] text-[#404040] mt-0.5 leading-snug">
                            {pillar.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}