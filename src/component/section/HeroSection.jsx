import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiCheckSquare } from "react-icons/fi";

function HeroSection() {
  const benefits = ["Tax Planning", "Strategic Advice", "Audit Support"];

  return (
    // min-h calculation ensures it accounts for the desktop header height perfectly without over-scrolling
    <section className="relative w-full min-h-[calc(100vh-80px)] xl:h-[calc(100vh-80px)] bg-gradient-to-r from-[#041431] via-[#08204d] to-[#0c2c68] text-white overflow-hidden flex items-center">
      {/* Background Image Overlay for Texture */}
      <div
        className="absolute inset-0 bg-[url('/hero-section/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle ambient lighting flare behind the content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 h-full">
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left py-6 lg:py-12">
          <span className="tracking-widest uppercase text-xs md:text-sm font-bold text-yellow-400 uppercase mb-3 block">
            welcome to exceltax
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-2xl bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
            Leave Your Taxes To <br className="hidden sm:inline" />
            The Professionals
          </h1>

          <p className="text-base md:text-lg text-gray-300 font-light max-w-xl mb-8 leading-relaxed">
            Pharetra adipiscing himenaeos consectetur tempus magna auctor si
            dictumst potenti.
          </p>

          <div className="mb-10">
            <button className="inline-flex items-center gap-2 bg-[#f38b0b] hover:bg-white hover:text-[#041431] cursor-pointer text-white text-xs md:text-sm font-bold tracking-wider uppercase px-7 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-yellow-500/10 active:scale-98">
              Get Started
              <HiArrowUpRight className="text-base stroke-2" />
            </button>
          </div>

          {/* Thin Divider Line */}
          <div className="w-full h-[1px] bg-white/15 mb-8 max-w-xl" />

          {/* Features/Benefits List */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5 group">
                <FiCheckSquare className="text-[#f38b0b] text-xl transition-transform duration-300 group-hover:scale-110" />
                <span className="font-semibold text-sm md:text-base tracking-wide text-gray-200">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image Cutout Column */}
        {/* self-end brings it down flush to the bottom; max-h settings prevent it from blowing out vertical space */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end mt-6 lg:mt-0">
          <div className="relative w-full max-w-[400px] lg:max-w-[550px] xl:max-w-[650px]">
            <img
              src="/hero-section/herosection.png"
              alt="Professional Accountant holding clipboard"
              className="w-full h-auto object-contain select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
