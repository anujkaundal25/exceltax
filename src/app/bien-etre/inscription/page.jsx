import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="bg-[#0b2559] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-white px-3 py-1 rounded font-bold text-xl text-[#0b2559] flex items-center">
            EXCEL<span className="text-orange-500">TAX</span>
            <span className="text-xs ml-1 text-gray-500">.org</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="flex items-center space-x-1 hover:text-orange-400">
            <span>🏠</span> <span>Accueil</span>
          </a>
          <a href="#" className="hover:text-orange-400">Conseil</a>
          <a href="#" className="hover:text-orange-400">EXSAFE</a>
          <a href="#" className="hover:text-orange-400">Education</a>
          <a href="#" className="hover:text-orange-400">Téléprocédure</a>
          <a href="#" className="hover:text-orange-400">JurisFISCAL</a>
          <a href="#" className="hover:text-orange-400">Evènements</a>
          <a href="#" className="hover:text-orange-400">BIEN ETRE</a>
          <a href="#" className="hover:text-orange-400">A propos</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <span>🥋</span> <span>💻</span> Fiche d'observation parentale
          </h1>
        </div>

        <form className="space-y-8">
          {/* Section 1: Infos enfant */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
              <span>🧒</span> Informations de l'enfant
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance :</label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Classe :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Établissement :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Comportement */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
              <span>🧠</span> Comportement
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comment décririez-vous le comportement général de l'enfant à la maison ?</label>
                <textarea 
                  rows="3"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="Observations sur le comportement..."
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Capacité de concentration :</label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>Sélectionner...</option>
                    <option>Bonne</option>
                    <option>Moyenne</option>
                    <option>À améliorer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interaction avec les autres :</label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>Sélectionner...</option>
                    <option>Très sociable</option>
                    <option>Réservé</option>
                    <option>Difficile</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Parcours */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
              <span>🎓</span> Parcours
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Antécédents scolaires ou sportifs :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="Ex: Ancien club, activités antérieures..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficultés particulières rencontrées :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Objectifs */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
              <span>🎯</span> Objectifs
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quels sont vos objectifs principaux pour l'enfant ?</label>
                <textarea 
                  rows="3"
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="Ex: Discipline, confiance en soi, forme physique..."
                ></textarea>
              </div>
            </div>
          </section>

          {/* Section 5: Responsable */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
              <span>👥</span> Responsable
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom et Prénom du responsable :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lien de parenté :</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="Ex: Père, Mère, Tuteur..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone :</label>
                  <input 
                    type="tel" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="00237..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email :</label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button 
              type="submit" 
              className="bg-[#0b2559] hover:bg-[#081b3f] text-white px-8 py-3.5 rounded-xl font-medium flex items-center gap-2 transition shadow-lg"
            >
              Soumettre la fiche ➔
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b2559] text-white pt-10 pb-6 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-blue-900">
          <div className="flex items-start space-x-3">
            <span className="text-xl">📍</span>
            <p className="text-sm text-gray-300 leading-relaxed">
              – Immeuble EXCELTAX–NGO NJOH, Carrefour BEN DECCA, PK12<br />
              – ROND POINT DEIDO derrière la petite station TOTAL
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-xl">📞</span>
            <div className="text-sm text-gray-300">
              <p>00237 652 521 717</p>
              <p>00237 656 561 508</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-xl">✉️</span>
            <div className="text-sm text-gray-300">
              <p>– direction@exceltax.org</p>
              <p>– cabinetexceltax@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 my-6">
          <a href="#" className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold hover:bg-orange-600 transition">f</a>
          <a href="#" className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold hover:bg-orange-600 transition">𝕏</a>
          <a href="#" className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold hover:bg-orange-600 transition">📷</a>
          <a href="#" className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold hover:bg-orange-600 transition">in</a>
        </div>

        <div className="text-center text-xs text-gray-400">
          © Copyright 2025 Excelt@x– All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default page