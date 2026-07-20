import React from "react";

function Process() {
  const processSteps = [
  {
    stepNumber: "STEP 1",
    title: "Book a Consultation",
    description:
      "Schedule a consultation with our tax and financial experts. We take the time to understand your business, financial objectives, and compliance requirements.",
    bannerBg: "bg-[#0c2c68]",
  },
  {
    stepNumber: "STEP 2",
    title: "Expert Assessment & Strategy",
    description:
      "Our specialists analyze your tax position, accounting records, and business needs to create a customized strategy that ensures compliance and supports growth.",
    bannerBg: "bg-[#f38b0b]",
  },
  {
    stepNumber: "STEP 3",
    title: "Implementation & Ongoing Support",
    description:
      "We manage tax filings, accounting, legal compliance, and business advisory services while providing continuous support to keep your business efficient and compliant.",
    bannerBg: "bg-[#0c2c68]",
  },
];

  return (
    <section className="py-24 px-6 lg:px-20 bg-white relative overflow-hidden bg-[url('/process-bg.jpg')] bg-cover bg-center">
      {/* Background radial dot styling from your image */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tracking-widest text-xs md:text-sm font-bold text-[#f38b0b] uppercase mb-3 block">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0c2c68] tracking-tight mb-6">
            Our Simple Working Process
          </h2>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
            Interdum fringilla justo aptent consequat sem arcu ullamcorper. A himenaeos lacus torquent conubia quis erat luctus et turpis lectus ante.
          </p>
        </div>

        {/* Dynamic Process Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-dashed border-gray-200 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#0c2c68] group"
            >
              {/* Step Top Identification Banner */}
              <div className={`${step.bannerBg} text-white text-center py-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-300 group-hover:bg-[#f38b0b]`}>
                {step.stepNumber}
              </div>

              {/* Step Content Base Card */}
              <div className="p-8 flex-1 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0c2c68] mb-4 tracking-tight transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;