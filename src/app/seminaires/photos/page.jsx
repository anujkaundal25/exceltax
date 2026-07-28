"use client";

import React, { useState } from "react";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

function Page() {
  const images = [
    "/photos/1.webp",
    "/photos/2.webp",
    "/photos/3.webp",
    "/photos/4.webp",
    "/photos/5.webp",
    "/photos/6.webp",
    "/photos/7.webp",
    "/photos/8.webp",
    "/photos/9.webp",
    "/photos/10.webp",
    "/photos/11.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12 flex-grow">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Galerie Média & Événements
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez en images les moments clés, nos séminaires de formation, nos interventions auprès des institutions et les temps forts de la transformation digitale et stratégique menée par EXCELTAX à travers l&apos;Afrique.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              onClick={() => handleOpenModal(index)}
              className="overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`EXCELTAX Gallery item ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Full-Screen Modal */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <button 
            onClick={handleCloseModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 focus:outline-none z-10"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-white bg-black/50 hover:bg-black/80 p-3 rounded-full text-2xl transition-colors focus:outline-none"
            aria-label="Previous image"
          >
            &#10094;
          </button>

          {/* Modal Image */}
          <div className="relative max-w-4xl max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt={`EXCELTAX Gallery item ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-white bg-black/50 hover:bg-black/80 p-3 rounded-full text-2xl transition-colors focus:outline-none"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Page;