"use client";
import {  useRef } from "react";
import Slider from "react-slick";
import CarCard from "../card";
import { ArrowUpRight } from "lucide-react";

// Données fictives
const carData = [
  {
    images: [
      "/car.jpg",
      "/car1.jpg",
      "/car2.jpg",
      "/car3.jpg",
    ],
    name: "208",
    description: "Compacte et dynamique, parfaite pour la ville.",
    badgeText: "Compacte",
  },
  {
    images: [
      "/car.jpg",
      "/car1.jpg",
      "/car2.jpg",
      "/car3.jpg",
    ],
    name: "3008",
    description: "Un SUV élégant avec une technologie de pointe.",
    badgeText: "SUV",
  },
  {
    images: [
      "/car.jpg",
      "/car1.jpg",
      "/car2.jpg",
      "/car3.jpg",
    ],
    name: "5008",
    description: "Un SUV familial spacieux pour vos reve.",
    badgeText: "Familiale",
  },
  {
    images: [
      "/car.jpg",
      "/car1.jpg",
      "/car2.jpg",
      "/car3.jpg",
    ],
    name: "508",
    description: "Une berline élégante offrant une conduite fluide .",
    badgeText: "Berline",
  },
  // Ajoutez d'autres voitures si nécessaire...
];

const CarrouselSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Afficher 3 cartes par slide sur les grands écrans
    slidesToScroll: 3, // Scroll de 3 cartes à la fois
    responsive: [
      {
        breakpoint: 768, // Pour les écrans plus petits
        settings: {
          slidesToShow: 1, // Afficher une carte par slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Pour les écrans de taille moyenne
        settings: {
          slidesToShow: 2, // Afficher deux cartes par slide
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1440, // Pour les écrans plus grands
        settings: {
          slidesToShow: 4, // Afficher trois cartes par slide
          slidesToScroll: 4,
        },
      },
    ],
  };

  // Fonction pour gérer le scroll
  const handleWheel = (event: React.WheelEvent) => {
    if (sliderRef.current) {
      if (event.deltaY > 0) {
        sliderRef.current.slickNext(); // Aller au slide suivant
      } else {
        sliderRef.current.slickPrev(); // Aller au slide précédent
      }
    }
  };

  return (
    <div
      className="container mx-auto p-4 my-8"
      onWheel={handleWheel} // Ajout du gestionnaire d'événement
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold text-left">NOS VEHICULES PEUGEOT</h2>
        <button className="flex items-center gap-2 rounded-full px-6 py-3 bg-[#c3002f] text-white hover:bg-red-900 transition">
          <span className="hidden md:inline">Voir la gamme</span> {/* Texte masqué sur mobile */}
          <ArrowUpRight size={20} />
        </button>
      </div>
      <div className="border-t-8 border-[#c3002f] w-1/5 mb-10"></div> {/* Séparateur rouge */}
      
      <Slider ref={sliderRef} {...settings}>
        {carData.map((car, index) => (
          <div key={index} className="px-2 flex h-full">
            <CarCard
              images={car.images}
              name={car.name}
              description={car.description}
              badgeText={car.badgeText}  // Passez le badge à CarCard
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrouselSection;
