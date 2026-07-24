"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Accueil", url: "/" },
    { name: "Conseil", url: "/conseil" },
    { name: "EXSAFE", url: "/logiciel" },
    { name: "Education", url: "/education" },
    { name: "Téléprocédure", url: "/online-procedure" },
    { name: "JurisFISCAL", url: "/jurisfiscal" },
    { name: "Evènements", url: "/event" },
    { name: "BIEN ETRE", url: "/well-being" },
    { name: "A propos", url: "/about" },
  ];

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
                <a href={item.url}>{item.name}</a>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F68B2D] transition-all duration-300 group-hover:w-full"></span>
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
          <ul className="flex flex-col gap-3 text-lg font-medium">
            {navItems.map((item) => (
              <li
                key={item.url}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer py-2.5 px-3 rounded-lg text-[#183B63] hover:bg-[#EEF2F5] hover:text-[#F68B2D] transition-all duration-200"
              >
                <a href={item.url} className="block w-full">
                  {item.name}
                </a>
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