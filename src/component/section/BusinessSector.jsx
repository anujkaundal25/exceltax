"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Make sure Swiper CSS is imported in your global CSS or main layout
import 'swiper/css';

const industriesData = [
  { id: 1, name: "Commerce & Distribution" },
  { id: 2, name: "Industrie" },
  { id: 3, name: "Agro-industrie" },
  { id: 4, name: "Agriculture intelligente" },
  { id: 5, name: "Banques" },
  { id: 6, name: "Assurances" },
  { id: 7, name: "BTP" },
  { id: 8, name: "Transport & Logistique" },
  { id: 9, name: "Hôtellerie & Restauration" },
  { id: 10, name: "Santé" },
  { id: 11, name: "Éducation" },
  { id: 12, name: "ONG & Associations" },
  { id: 13, name: "Administrations publiques" },
  { id: 14, name: "Télécommunications" },
  { id: 15, name: "Énergie" },
  { id: 16, name: "Immobilier" },
  { id: 17, name: "Start-up" },
  { id: 18, name: "Coopératives" },
  { id: 19, name: "Collectivités territoriales" }
];

function IndustrySlider() {
  return (
    <section className="w-full bg-[#EEF2F5] border-y border-[#A9B4C0]/30 py-4 px-4 pt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
    
        {/* Top Header Block */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <h2 className="text-2xl font-extrabold tracking-wide uppercase text-[#183B63]">
              NOS SECTEURS D'INTERVENTION
            </h2>
          </div>
          <p className="text-[11px] text-[#404040] font-medium leading-tight">
            Nous accompagnons plus de quinze secteurs d'activité
          </p>
        </div>

        {/* Bottom Carousel */}
        <div className="w-full min-w-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView="auto"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Pauses slider on hover
            }}
            loop={true}
            className="w-full !py-1"
          >
            {industriesData.map((item) => (
              <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] hover:bg-[#183B63] border border-[#A9B4C0]/40 hover:border-[#2E5D8A] rounded-full transition-all duration-200 cursor-pointer group shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F68B2D] group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-semibold text-[#404040] group-hover:text-[#FFFFFF] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default IndustrySlider;