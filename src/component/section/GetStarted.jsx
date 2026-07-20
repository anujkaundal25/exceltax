import React from "react";

function GetStarted() {
  const stats = [
    {
      value: "999+",
      label: "Satisfied Clients",
    },
    {
      value: "456+",
      label: "Case Finished",
    },
    {
      value: "123+",
      label: "Team Members",
    },
    {
      value: "25+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="relative bg-slate-900 px-6 lg:px-20 pt-32 lg:pt-40 pb-64 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/get-started-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 grayscale"
        />

        <div className="absolute inset-0 bg-slate-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="block mb-4 text-xs md:text-sm font-black tracking-[3px] uppercase text-[#f38b0b]">
          GET STARTED WITH EXCELT@X
        </span>

        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-4xl mx-auto mb-6">
          Complete Tax, Legal, and Business Management Solutions
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto leading-8 mb-12">
          Optimize your enterprise performance. From specialized corporate
          advisory and custom digital ERP management software to continuous
          legal defense, secure online filing operations, and asset recovery
          systems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="px-8 py-4 rounded-lg bg-[#f38b0b] hover:bg-[#d97b05] text-white font-bold uppercase transition cursor-pointer">
            Get Started
          </button>

          <button className="px-8 py-4 rounded-lg bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>

      {/* Stats Card */}
      <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 z-20 w-full max-w-6xl px-6">
        <div className="bg-white border-b-3 border-yellow-500 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`py-10 px-6 text-center ${
                  index !== stats.length - 1
                    ? "border-r border-gray-200"
                    : ""
                } ${
                  index < 2 ? "border-b lg:border-b-0 border-gray-200" : ""
                }`}
              >
                <h3 className="text-[#6d9e43] text-5xl font-black mb-3">
                  {item.value}
                </h3>

                <p className="text-gray-700 font-semibold tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;