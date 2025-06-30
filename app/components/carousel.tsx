"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [ 
    { id: 1, image: "/SLIDE-JMT-SITE-1.jpg", alt: "Slide 1" },
    { id: 2, image: "/SLIDE-JMT-SITE-2.jpg", alt: "Slide 2" },
    { id: 3, image: "/SLIDE-JMT-SITE-3.jpg", alt: "Slide 3" },
    { id: 4, image: "/SLIDE-JMT-SITE-4.jpg", alt: "Slide 4" },
    { id: 5, image: "/SLIDE-JMT-SITE-5.jpg", alt: "Slide 5" },
    { id: 6, image: "/SLIDE-JMT-SITE-6.jpg", alt: "Slide 6" },
    { id: 7, image: "/SLIDE-JMT-SITE-7.jpg", alt: "Slide 7" },
    { id: 8, image: "/SLIDE-JMT-SITE-8.jpg", alt: "Slide 8" },
    { id: 9, image: "/SLIDE-JMT-SITE-9.jpg", alt: "Slide 9" },
    { id: 10, image: "/SLIDE-JMT-SITE-10.jpg", alt: "Slide 10" },
    { id: 11, image: "/SLIDE-JMT-SITE-11.jpg", alt: "Slide 11" },
    { id: 12, image: "/SLIDE-JMT-SITE-12.jpg", alt: "Slide 12" },
    { id: 13, image: "/SLIDE-JMT-SITE-13.jpg", alt: "Slide 13" },
    { id: 14, image: "/SLIDE-JMT-SITE-14.jpg", alt: "Slide 14" }
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white text-white w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black transition"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-white text-white w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black transition"
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
