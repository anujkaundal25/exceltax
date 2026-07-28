import React from "react";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

function Page() {
  // Fixed the variable name from "img" to "images" to match the map function
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
              className="overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
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

      <Footer />
    </div>
  );
}

export default Page;