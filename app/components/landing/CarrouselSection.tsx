"use client";
import { useRef } from "react";
import Slider from "react-slick";
import CarCard from "../card";
import { ArrowUpRight } from "lucide-react";

import { useRouter } from "next/navigation";
import { useNissanCars } from "@/app/context/NissanContext";
// Import de ton hook

const CarrouselSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter(); // Initialisation du routeur

  const handleNavigate = () => {
    router.push("/nissan"); // Redirection vers NissanPage.tsx
  };

  // Utilisation du hook pour récupérer les voitures
  const { cars, loading, error } = useNissanCars();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Afficher 3 cartes par slide sur les grands écrans
    slidesToScroll: 1, // Scroll de 3 cartes à la fois
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
          slidesToScroll: 1,
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

  if (loading) {
    return <div>Chargement...</div>; // Affichage du chargement
  }

  if (error) {
    return <div>Erreur: {error}</div>; // Affichage de l'erreur
  }

  return (
    <div
      className="container mx-auto  p-4 my-8"
      onWheel={handleWheel} // Ajout du gestionnaire d'événement
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold  text-left">NOS VEHICULES NISSAN</h2>
       
        
      </div>
      <div className="border-t-8 border-[#c3002f] -mx-4 w-1/6 mb-10 overflow-hidden "></div> {/* Séparateur rouge */}

      <Slider ref={sliderRef} {...settings}>
        {cars.map((car, index) => (
          <div key={index} className="px-2 mb-8 flex h-full">
           
              <CarCard
                images={car.images}
                name={car.name}
                description={car.description}
                badgeText={car.badge} // Passez le badge à CarCard
              />
        
          </div>
        ))}
      </Slider>
      
<button  onClick={handleNavigate}  className=" max-w-xs md:max-w-xl lg:max-w-2xl flex items-center gap-2 rounded-full px-6 py-3 bg-[#c3002f] text-white hover:bg-white hover:text-red-700 hover:border justify-center hover:border-red-700  transition">
          <span className="hidden md:inline">Découvrir la gamme complète</span>
          <ArrowUpRight size={20} />
        </button>

    </div>
  );
};

export default CarrouselSection;
