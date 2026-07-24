import React from 'react';
import { 
  FiShield, 
  FiAward, 
  FiClock, 
  FiCheckCircle, 
  FiZap 
} from 'react-icons/fi';
import { FaHandshake, FaLightbulb } from 'react-icons/fa6';

const engagements = [
  { label: 'Confidentiality', icon: FiShield },
  { label: 'Excellence', icon: FiAward },
  { label: 'Innovation', icon: FaLightbulb },
  { label: 'Availability', icon: FiClock },
  { label: 'Compliance', icon: FiCheckCircle },
  { label: 'Performance', icon: FiZap },
  { label: 'Sustainable support', icon: FaHandshake },
];

function Engagement() {
  return (
    <section className="w-full py-8 px-2 sm:px-4 bg-[#EEF2F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[#183B63] text-center mb-8">
          Nos Engagements
        </h2>
        {/* Single Row Container without horizontal scroll */}
        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3 w-full overflow-hidden">
          {engagements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-center p-1.5 sm:p-2.5 md:p-3 flex-1 bg-[#FFFFFF] rounded-xl border border-[#A9B4C0]/30 shadow-xs hover:shadow-md hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out cursor-pointer min-w-0"
              >
                <div className="p-1.5 sm:p-2 md:p-2.5 mb-1.5 sm:mb-2 rounded-full bg-[#EEF2F5] text-[#2E5D8A] group-hover:bg-[#F68B2D] group-hover:text-[#FFFFFF] group-hover:scale-110 transition-all duration-300 ease-out">
                  <Icon className="text-base sm:text-lg md:text-xl" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#404040] group-hover:text-[#F68B2D] text-center leading-tight transition-colors duration-300 break-words w-full">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Engagement;