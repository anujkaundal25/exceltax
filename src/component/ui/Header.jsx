"use client"; // This line fixes the error by enabling React hooks

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Note: adjusted path to standard react-icons layout

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Welcome",
    "Advice",
    "Exsafe",
    "Education",
    "Online Procedure",
    "JurisFiscal",
    "Event",
    "Well-Being",
    "About",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white text-[#0c2c68] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center bg-white rounded-lg transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center gap-6 text-base font-semibold">
            {navItems.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer py-2 transition-colors duration-300 hover:text-yellow-500 group whitespace-nowrap"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="font-bold text-lg text-gray-400">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-6 py-6 h-full overflow-y-auto">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer py-2 px-3 rounded-md hover:bg-gray-50 hover:text-yellow-600 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Background Dimmer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 xl:hidden backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;