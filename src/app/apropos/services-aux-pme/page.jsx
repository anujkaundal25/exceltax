import React from "react";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF2F5] text-[#404040]">
      <Header />

      {/* Hero Section */}
      <section className="bg-[url('/about/1.webp')] bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white relative">
        {/* Branded Dark Blue Overlay */}
        <div className="bg-[#183B63]/60 absolute inset-0"></div>
        
        <div className="relative text-center px-4 max-w-3xl">
          <span className="bg-[#F68B2D] text-white font-bold py-1.5 px-4 rounded-lg inline-block mb-3 text-sm uppercase tracking-wide shadow-sm">
            À propos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            SERVICES AUX PME
          </h1>
          <p className="text-xl mt-3 font-light text-[#EEF2F5]">
            Accompagnement FiscaloComptable Personnalisé
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#A9B4C0]/30 space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold text-[#183B63] mb-3">
              Accompagnement FiscaloComptable Personnalisé :
            </h2>
            <p className="text-[#404040] leading-relaxed">
              Nous offrons un service sur mesure pour les PME, disponible sur demande ou contact direct. Nous nous déplaçons dans vos locaux pour un échange complet et transparent sur les aspects comptables et fiscaux à sécuriser. Nous visons à comprendre vos besoins spécifiques, en adaptant le calendrier aux échéances de votre entreprise.
            </p>
          </div>

          <hr className="border-[#EEF2F5]" />

          <div>
            <h2 className="text-2xl font-bold text-[#183B63] mb-3">
              Conformité :
            </h2>
            <p className="text-[#404040] leading-relaxed">
              Conformément à la loi N° 2015/010 du 16 juillet 2015, modifiant la loi N° 2010/001 du 13 avril 2010 sur la promotion des PME au Cameroun.
            </p>
          </div>

          <div className="pt-4">
            <button className="bg-[#2E5D8A] hover:bg-[#183B63] text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-md">
              Demander un devis
            </button>
          </div>

        </div>
      </section>

      {/* Engagement et Avantages Section */}
      <section className="pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full flex-grow">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#A9B4C0]/30 space-y-6">
          <h2 className="text-2xl font-bold text-[#183B63] mb-6">
            Engagement et Avantages :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#EEF2F5] p-6 rounded-xl border border-[#A9B4C0]/20 flex flex-col justify-between">
              <p className="text-[#404040] text-sm leading-relaxed">
                Fournissez les informations et documents nécessaires pour une analyse approfondie.
              </p>
            </div>
            <div className="bg-[#EEF2F5] p-6 rounded-xl border border-[#A9B4C0]/20 flex flex-col justify-between">
              <p className="text-[#404040] text-sm leading-relaxed">
                Adaptation aux échéances futures et déclaration fiscale.
              </p>
            </div>
            <div className="bg-[#EEF2F5] p-6 rounded-xl border border-[#A9B4C0]/20 flex flex-col justify-between">
              <p className="text-[#404040] text-sm leading-relaxed">
                Réduction des pénalités en cas de corrections spontanées suivant nos recommandations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}