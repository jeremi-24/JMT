"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: "/slider-1.jpg", alt: "Slide 1" },
    { id: 2, image: "/slider-2.jpg", alt: "Slide 2" },
    { id: 3, image: "https://assets.adac.de/image/upload/c_scale,f_auto,q_auto,t_2:1-default,w_1500/v1/ADAC-eV/KOR/Bilder/PR/peugeot3008-fahrbericht-vorne-schraeg-2306_mf6b6n_sam85e_eosnjv", alt: "Slide 3" },
    { id: 4, image: "/slider-2.jpg", alt: "Slide 4" },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Fonction pour changer l'image automatiquement toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(goToNext, 4000); // 4000 ms = 4 secondes
    return () => clearInterval(interval); // Nettoyer l'intervalle à la destruction du composant
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={1200} // Valeur pour la largeur (en pixels)
              height={600} // Valeur pour la hauteur (en pixels)
              layout="responsive" // Cela permet à l'image de s'adapter à son conteneur
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-gray-500 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  border border-gray-500  text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="hidden absolute bottom-4 left-1/2 transform -translate-x-1/2  space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
