"use client"; // Marque ce fichier comme un composant Client pour Next.js

import React, { useState } from 'react';
import { BiPhoneCall, BiEnvelope, BiMap, BiTimeFive, BiSend } from 'react-icons/bi';
import { motion } from 'framer-motion';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Configurations des animations d'entrée
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        staggerChildren: 0.2, // Décale l'apparition des éléments enfants à droite
        delayChildren: 0.1
      } 
    }
  };

  const rightChildVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id='contact' className="py-24 px-6 lg:px-20 bg-[#EEF2F5] relative overflow-hidden">
      {/* Motifs de grille d'arrière-plan discret */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#183B630A_1px,transparent_1px),linear-gradient(to_bottom,#183B630A_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête de la section */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16 mt-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="tracking-widest text-xs md:text-sm font-black text-[#F68B2D] uppercase mb-3 block">
            CONTACTEZ-NOUS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#183B63] tracking-tight mb-4">
            Nous Sommes Prêts à Accompagner Votre Entreprise
          </h2>
          <p className="text-[#404040] text-sm md:text-base font-normal">
            Vous avez une question sur nos services d'ingénierie fiscale, nos intégrations logicielles ou nos conseils juridiques ? Envoyez-nous un message.
          </p>
        </motion.div>

        {/* Grille principale partagée */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* CÔTÉ GAUCHE : Formulaire de demande interactif */}
          <motion.div 
            className="lg:col-span-7 bg-[#FFFFFF] border border-[#A9B4C0]/30 p-8 md:p-10 rounded-3xl shadow-lg shadow-[#183B63]/5 flex flex-col justify-between"
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h3 className="text-2xl font-black text-[#183B63] mb-2 tracking-tight">
                Envoyer un message
              </h3>
              <p className="text-black text-sm mb-8">
                Remplissez le formulaire ci-dessous et notre équipe vous recontactera sous 24 heures ouvrées.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#183B63] uppercase tracking-wider mb-2">Nom Complet</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont" 
                      className="w-full px-4 py-3 bg-[#EEF2F5] border border-[#A9B4C0]/50 rounded-xl text-[#404040] placeholder-[#A9B4C0] focus:outline-none focus:border-[#2E5D8A] focus:bg-[#FFFFFF] transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#183B63] uppercase tracking-wider mb-2">Adresse Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@entreprise.com" 
                      className="w-full px-4 py-3 bg-[#EEF2F5] border border-[#A9B4C0]/50 rounded-xl text-[#404040] placeholder-[#A9B4C0] focus:outline-none focus:border-[#2E5D8A] focus:bg-[#FFFFFF] transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#183B63] uppercase tracking-wider mb-2">Sujet</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Demande de renseignements sur les services EXCELTAX" 
                    className="w-full px-4 py-3 bg-[#EEF2F5] border border-[#A9B4C0]/50 rounded-xl text-[#404040] placeholder-[#A9B4C0] focus:outline-none focus:border-[#2E5D8A] focus:bg-[#FFFFFF] transition-all duration-200 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#183B63] uppercase tracking-wider mb-2">Détails du message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez comment nos équipes peuvent vous assister..." 
                    className="w-full px-4 py-3 bg-[#EEF2F5] border border-[#A9B4C0]/50 rounded-xl text-[#404040] placeholder-[#A9B4C0] focus:outline-none focus:border-[#2E5D8A] focus:bg-[#FFFFFF] transition-all duration-200 text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4 bg-[#183B63] hover:bg-[#2E5D8A] text-[#FFFFFF] font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Envoyer la demande</span>
                  <BiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F68B2D]" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* CÔTÉ DROIT : Coordonnées de l'entreprise & Carte interactive */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/* Bloc d'informations de contact rapide */}
            <motion.div 
              className="bg-[#183B63] text-[#FFFFFF] p-8 rounded-3xl shadow-xl shadow-[#183B63]/10 flex flex-col justify-between space-y-6"
              variants={rightChildVariants}
            >
              <h3 className="text-xl font-bold tracking-tight text-[#FFFFFF] mb-5">
                Siège Social
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center shrink-0 border border-[#FFFFFF]/10 text-[#F68B2D]">
                    <BiPhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A9B4C0] block font-medium">Ligne Téléphonique</span>
                    <a href="tel:+237652521717" className="text-sm font-bold text-[#FFFFFF] hover:text-[#F68B2D] transition-colors">+237 652 521 717</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center shrink-0 border border-[#FFFFFF]/10 text-[#F68B2D]">
                    <BiEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A9B4C0] block font-medium">Correspondance Numérique</span>
                    <a href="mailto:direction@exceltax.org" className="text-sm font-bold text-[#FFFFFF] hover:text-[#F68B2D] transition-colors">direction@exceltax.org</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center shrink-0 border border-[#FFFFFF]/10 text-[#F68B2D]">
                    <BiMap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A9B4C0] block font-medium">Adresse Physique</span>
                    <p className="text-sm font-bold leading-snug text-[#FFFFFF]">EXCELTAX-ONG Immeuble NJOH, Carrefour BEN DECCA, PK12</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Container pour la carte Google Maps */}
            <motion.div 
              className="bg-[#FFFFFF] border border-[#A9B4C0]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#183B63]/5 flex-1 min-h-[250px] relative"
              variants={rightChildVariants}
            >
              <iframe
                title="Emplacement du siège d'Exceltax"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509604!2d144.95373531590483!3d-37.816279742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1619528731420!5m2!1sen!2sus"
                className="w-full h-full absolute inset-0 border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;