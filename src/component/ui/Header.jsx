"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Welcome", url: "/" },
    { name: "Advice", url: "/conseil" },
    { name: "Exsafe", url: "/exsafe" },
    { name: "Education", url: "/education" },
    { name: "Online Procedure", url: "/online-procedure" },
    { name: "JurisFiscal", url: "/jurisfiscal" },
    { name: "Event", url: "/event" },
    { name: "Well-Being", url: "/well-being" },
    { name: "About", url: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white text-[#0c2c68] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center bg-white rounded-lg transition-transform duration-300 hover:scale-[1.02]">
          <a href="/">
            <img
              src="/logo.png"
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
                className="relative cursor-pointer py-2 transition-colors duration-300 hover:text-yellow-500 group whitespace-nowrap"
              >
                <a href={item.url}>{item.name}</a>
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
          <span className="font-bold text-lg text-gray-400">
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
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-6 py-6 h-full overflow-y-auto">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {navItems.map((item) => (
              <li
                key={item.url}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer py-2 px-3 rounded-md hover:bg-gray-50 hover:text-yellow-600 transition-all duration-200"
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
          className="fixed inset-0 z-30 bg-black/40 xl:hidden backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;