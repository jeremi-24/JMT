"use client";

import Slider from "react-slick";
import CarCard from "@/app/components/card";
import Image from "next/image";
import { usePeugeot } from "@/app/context/PeugeotContext";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";

const heroImages = [
  "https://www.lavieeco.com/wp-content/uploads/2023/09/2008.jpg",
  "https://lignesauto.fr/wp-content/uploads/2019/02/LIGNES00.jpg",
  "https://www.autoscout24.lu/cms-content-assets/4Xcb70XlaDVtZZ0uTD5WaA-5388d68945487e348db2467453bb815f-Peugeot_5008_1-1100.jpg",
  "https://www.peugeot.co.uk/content/dam/peugeot/master/b2c/open/desk/308/PEUGEOT_308_2023_003_FR_HYBRID_2030x1146.jpg?imwidth=1920",
];

const Home: React.FC = () => {
  const { carData, loading, error } = usePeugeot();
  
  // Référence pour le slider
  const sliderRef = useRef<Slider | null>(null);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );

  if (error) return <div className="text-red-500 text-center">Erreur: {error}</div>;

  // Fonction pour aller à l'image précédente
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Fonction pour aller à l'image suivante
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <main>
      {/* Slider Hero */}
      <div className="relative mb-10">
        <Slider
          ref={sliderRef} // Ajouter la référence au slider
          infinite
          speed={800}
          autoplay
          autoplaySpeed={3000}
          slidesToShow={1}
          slidesToScroll={1}
          fade
          arrows={false} // Désactive les flèches par défaut
        >
          {heroImages.map((image, index) => (
            <div key={index} className="w-full  h-[300px] md:h-[500px]">
              <Image
                src={image}
                alt={`Hero Image ${index + 1}`}
                layout="fill" // Remplit tout le conteneur
                objectFit="cover"
                 objectPosition="center"
              />
            </div>
          ))}
        </Slider>
        
        {/* Boutons de navigation */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      <div className="container mx-auto p-4 my-8">
        <h2 className="text-4xl font-bold mb-5 text-left">NOS VEHICULES PEUGEOT</h2>
        <div className="border-t-8 border-[#c3002f] w-1/5 mb-10"></div>
        {/* Liste des véhicules */}
        <h2 className="text-4xl font-bold text-left mb-8"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carData.map((car, index) => (
            <CarCard
              key={index}
              images={car.images}
              name={car.name}
              description={car.description}
              badgeText={car.badgeText}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
