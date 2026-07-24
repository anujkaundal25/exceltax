import React from 'react';
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
  FiSend,
  FiPhoneCall
} from 'react-icons/fi';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#404040] font-sans selection:bg-[#F68B2D] selection:text-white">
      
      {/* SECTION 1 — HERO */}
      <section className="bg-[#183B63] text-white py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto border-l-4 border-[#F68B2D] pl-6 md:pl-10 py-2">
          
          <p className="text-[#A9B4C0] font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
            EXCELTAX Business Intelligence Group
          </p>
          
          <span className="inline-block bg-[#F68B2D] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
            Bien-être
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Le bien-être au service de la <span className="text-[#F68B2D]">performance durable</span>
          </h1>

          <p className="text-[#EEF2F5] text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Chez EXCELTAX Business Intelligence Group, nous considérons le bien-être comme un levier stratégique de performance. Une organisation performante repose sur des collaborateurs engagés, un management responsable et un environnement de travail favorisant l'épanouissement, l'innovation et la productivité.
            <br /><br />
            Nous accompagnons les entreprises, les administrations et les institutions dans la mise en place de politiques de bien-être qui renforcent le capital humain et soutiennent une croissance durable.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#F68B2D] hover:bg-[#e07a22] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-orange-500/20">
              Découvrir notre approche <FiArrowRight className="text-lg" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#183B63] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2">
              <FiPhoneCall /> Nous contacter
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 2 — NOTRE VISION */}
      <section className="py-16 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-1">
            Section 02
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#183B63] pb-3 border-b-2 border-[#EEF2F5]">
            Notre vision : Un investissement stratégique pour les organisations
          </h2>
        </div>

        <p className="text-[#404040] text-base md:text-lg leading-relaxed mb-10 max-w-4xl">
          Le bien-être en entreprise dépasse la simple qualité de vie au travail. Il constitue un facteur essentiel de compétitivité, de résilience et de création de valeur. Notre approche associe intelligence économique, gouvernance, développement du capital humain et accompagnement organisationnel afin d'aider les dirigeants à construire des environnements de travail performants et durables.
        </p>

        <h3 className="text-xl font-bold text-[#2E5D8A] uppercase tracking-wide mb-6">
          Nos objectifs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Favoriser l'engagement des collaborateurs",
            "Renforcer la performance collective",
            "Développer une culture d'entreprise positive",
            "Accompagner les managers dans leur rôle de leader",
            "Prévenir les risques psychosociaux",
            "Améliorer durablement la qualité de vie au travail"
          ].map((objective, idx) => (
            <div 
              key={idx} 
              className="bg-[#EEF2F5] border-l-4 border-[#F68B2D] p-4 rounded-r-lg flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <FiCheckCircle className="text-[#2E5D8A] text-xl flex-shrink-0" />
              <span className="text-[#183B63] font-semibold text-sm md:text-base">
                {objective}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — NOS SOLUTIONS BIEN-ÊTRE */}
      <section className="bg-[#EEF2F5] py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-10">
            <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-1">
              Section 03
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#183B63] pb-3 border-b-2 border-[#A9B4C0]/30">
              Nos solutions Bien-être
            </h2>
            <p className="text-[#2E5D8A] font-semibold mt-2">
              Des solutions adaptées aux enjeux des organisations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Solution 1 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2E5D8A] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-[#EEF2F5] rounded-full text-[#183B63]">
                  <FiBarChart2 className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-[#183B63]">
                  1. Diagnostic du climat organisationnel
                </h3>
              </div>
              <p className="text-[#404040] text-sm leading-relaxed">
                Nous analysons le fonctionnement de votre organisation afin d'identifier les facteurs influençant l'engagement, la motivation et la performance des équipes.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2E5D8A] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-[#EEF2F5] rounded-full text-[#183B63]">
                  <FiUsers className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-[#183B63]">
                  2. Leadership et accompagnement des managers
                </h3>
              </div>
              <p className="text-[#404040] text-sm leading-relaxed">
                Nous développons les compétences managériales pour favoriser un leadership responsable, collaboratif et orienté vers la performance durable.
              </p>
            </div>

            {/* Solution 3 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2E5D8A] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-[#EEF2F5] rounded-full text-[#183B63]">
                  <FiHeart className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-[#183B63]">
                  3. Qualité de Vie et Conditions de Travail (QVCT)
                </h3>
              </div>
              <p className="text-[#404040] text-sm leading-relaxed">
                Nous concevons et mettons en œuvre des programmes visant à améliorer l'équilibre entre performance, santé et satisfaction des collaborateurs.
              </p>
            </div>

            {/* Solution 4 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2E5D8A] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-[#EEF2F5] rounded-full text-[#183B63]">
                  <FiRefreshCw className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-[#183B63]">
                  4. Gestion du changement
                </h3>
              </div>
              <p className="text-[#404040] text-sm leading-relaxed">
                Nous accompagnons les entreprises dans leurs projets de transformation organisationnelle en plaçant l'humain au cœur du changement.
              </p>
            </div>

            {/* Solution 5 - Full Width */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#F68B2D] shadow-sm hover:shadow-md transition-all md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-[#EEF2F5] rounded-full text-[#F68B2D]">
                  <FiTrendingUp className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-[#183B63]">
                  5. Développement du capital humain
                </h3>
              </div>
              <p className="text-[#404040] text-sm leading-relaxed">
                Nous proposons des formations, du coaching et des dispositifs de développement des compétences afin de valoriser les talents et renforcer la compétitivité des organisations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — NOTRE MÉTHODOLOGIE */}
      <section className="py-16 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-1">
            Section 04
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#183B63] pb-3 border-b-2 border-[#EEF2F5]">
            Notre méthodologie : Une démarche structurée pour un impact durable
          </h2>
          <p className="text-[#404040] mt-3">
            Notre méthodologie repose sur une approche pragmatique, collaborative et orientée résultats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Diagnostic",
              desc: "Évaluation de l'organisation, du climat social et des besoins des collaborateurs.",
              icon: <FiSearch />
            },
            {
              step: "2",
              title: "Analyse stratégique",
              desc: "Identification des leviers d'amélioration et définition des priorités d'action.",
              icon: <FiTarget />
            },
            {
              step: "3",
              title: "Mise en œuvre",
              desc: "Déploiement de solutions personnalisées, d'actions de sensibilisation, de formations et d'accompagnements.",
              icon: <FiSend />
            },
            {
              step: "4",
              title: "Évaluation & Amélioration",
              desc: "Suivi des indicateurs de performance, mesure des résultats et optimisation continue des actions engagées.",
              icon: <FiRefreshCw />
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#A9B4C0]/40 border-t-4 border-t-[#183B63] rounded-lg p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#F68B2D] text-white font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-[#2E5D8A] text-xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#183B63] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#404040] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — POURQUOI CHOISIR EXCELTAX ? */}
      <section className="bg-[#183B63] text-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          <span className="text-[#F68B2D] font-bold text-xs uppercase tracking-wider block mb-2">
            Section 05 — Pourquoi choisir EXCELTAX ?
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-snug">
            Construisons ensemble des organisations plus performantes et plus humaines
          </h2>

          <p className="text-[#EEF2F5] text-base leading-relaxed mb-8 max-w-4xl">
            Le bien-être constitue aujourd'hui un véritable avantage compétitif. Les organisations qui investissent dans leur capital humain développent une meilleure capacité d'innovation, renforcent leur attractivité et améliorent durablement leurs performances.
            <br /><br />
            Avec <strong>EXCELTAX Business Intelligence Group</strong>, bénéficiez d'un accompagnement stratégique alliant expertise, innovation et intelligence organisationnelle pour faire du bien-être un moteur de croissance et de réussite.
          </p>

          <div className="mb-10">
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
                <span 
                  key={idx}
                  className="bg-white/10 border border-[#2E5D8A] text-[#EEF2F5] text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm"
                >
                  <FiCheckCircle className="text-[#F68B2D]" />
                  {engagement}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#2E5D8A] flex flex-wrap gap-4 justify-end">
            <button className="bg-[#F68B2D] hover:bg-[#e07a22] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md">
              Demander une consultation
            </button>
            <button className="bg-[#2E5D8A] hover:bg-[#23486c] text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              Contacter nos experts
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}