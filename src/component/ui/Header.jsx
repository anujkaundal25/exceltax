"use client";

import React, { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);

  const navItems = [
    { name: "Accueil", url: "/" },
    {
      name: "Conseil",
      url: "/conseil",
      children: [
        { name: "EXCELTAX Fiscalité", url: "/conseil/exceltax-fiscalite" },
        { name: "EXCELTAX Comptabilité", url: "/conseil/exceltax-comptabilite" },
        { name: "EXCELTAX Social", url: "/conseil/exceltax-social" },
        { name: "EXCELTAX DSF", url: "/conseil/exceltax-dsf" },
        { name: "EXCELTAX FiscaloComptable", url: "/conseil/exceltax-fiscalo-comptable" },
        { name: "EXCELTAX Recouvrement", url: "/conseil/exceltax-recouvrement" },
      ],
    },
    {
      name: "EXSAFE",
      url: "/logiciel",
      children: [
        { name: "Présentation", url: "/logiciel" },
        { name: "Modules", url: "/logiciel/modules" },
        { name: "ERP Cloud", url: "/logiciel/erp-cloud" },
        { name: "Demander une Démo", url: "/logiciel/demo" },
      ],
    },
    {
      name: "Education",
      url: "/education",
      children: [
        { name: "Nos Formations", url: "/education/formations" },
        { name: "Certifications", url: "/education/certifications" },
        { name: "Séminaires & Ateliers", url: "/education/seminaires" },
      ],
    },
    { name: "Téléprocédure", url: "/teleprocedure" },
    { name: "JurisFISCAL", url: "/jurisfiscal" },
    {
      name: "Evènements",
      url: "/event",
      children: [
        { name: "Évènements à venir", url: "/event/upcoming" },
        { name: "Évènements passés", url: "/event/past" },
        { name: "Galerie", url: "/event/gallery" },
      ],
    },
    {
      name: "BIEN ETRE",
      url: "/bien-etre",
      children: [
        { name: "Santé au Travail", url: "/bien-etre/sante" },
        { name: "Coaching", url: "/bien-etre/coaching" },
        { name: "Développement Personnel", url: "/bien-etre/developpement" },
      ],
    },
    {
      name: "A propos",
      url: "/apropos",
      children: [
        { name: "Qui sommes-nous ?", url: "/apropos" },
        { name: "Notre Équipe", url: "/apropos/equipe" },
        { name: "Nos Valeurs", url: "/apropos/valeurs" },
        { name: "Nos Partenaires", url: "/apropos/partenaires" },
        { name: "Contact", url: "/contact" },
      ],
    },
  ];

  const toggleMobileSubmenu = (name) => {
    setMobileOpenSubmenu(mobileOpenSubmenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] text-[#183B63] shadow-md transition-all duration-300 border-b border-[#EEF2F5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center bg-[#FFFFFF] rounded-lg transition-transform duration-300 hover:scale-[1.02]">
          <a href="/">
            <img
              src="/new-logo.png"
              alt="Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center gap-6 text-base font-semibold">
            {navItems.map((item) => (
              <li
                key={item.url}
                className="relative cursor-pointer py-2 text-[#183B63] transition-colors duration-300 hover:text-[#F68B2D] group whitespace-nowrap"
              >
                <div className="flex items-center gap-1">
                  <a href={item.url}>{item.name}</a>
                  {item.children && (
                    <HiChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F68B2D] transition-all duration-300 group-hover:w-full"></span>

                {/* Desktop Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-56">
                    <ul className="bg-white rounded-xl shadow-xl border border-[#EEF2F5] py-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <li key={child.url} className="px-4 py-2 hover:bg-[#EEF2F5] transition-colors">
                          <a
                            href={child.url}
                            className="block text-sm font-normal text-[#183B63] hover:text-[#F68B2D]"
                          >
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-md text-[#183B63] hover:bg-[#EEF2F5] transition-colors duration-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-[#FFFFFF] shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden border-l border-[#EEF2F5] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EEF2F5]">
          <span className="font-bold text-lg text-[#404040]">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 md:h-15 w-auto object-contain"
              />
            </a>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-[#183B63] hover:bg-[#EEF2F5] transition-colors"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-6 py-6 h-full overflow-y-auto">
          <ul className="flex flex-col gap-2 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.url} className="flex flex-col">
                <div className="flex items-center justify-between py-2.5 px-3 rounded-lg text-[#183B63] hover:bg-[#EEF2F5] hover:text-[#F68B2D] transition-all duration-200">
                  <a
                    href={item.url}
                    onClick={() => !item.children && setIsOpen(false)}
                    className="block w-full"
                  >
                    {item.name}
                  </a>
                  {item.children && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileSubmenu(item.name);
                      }}
                      className="p-1 focus:outline-none"
                    >
                      <HiChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          mobileOpenSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Accordion */}
                {item.children && mobileOpenSubmenu === item.name && (
                  <ul className="flex flex-col pl-4 py-1 gap-1 border-l-2 border-[#EEF2F5] ml-3 my-1">
                    {item.children.map((child) => (
                      <li key={child.url}>
                        <a
                          href={child.url}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-3 text-sm text-[#183B63]/80 hover:text-[#F68B2D] hover:bg-[#EEF2F5] rounded-md transition-colors"
                        >
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Background Dimmer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#183B63]/40 xl:hidden backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;