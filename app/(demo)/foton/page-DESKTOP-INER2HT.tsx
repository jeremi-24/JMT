"use client";

import Slider from "react-slick";
import CarCard from "@/app/components/card";
import Image from "next/image";
import { useFoton } from "@/app/context/FotonContext";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";

const heroImages = [
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227131546_banner_26_1318470997-min.jpg",
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227132622_banner_26_1047007841-min.jpg",
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227131546_banner_26_1318470997-min.jpg",
  "https://japanmotorstogo.com/wp-content/uploads/2019/06/20190227132622_banner_26_1047007841-min.jpg"
];

const Home: React.FC = () => {
  const { documents, loading, error } = useFoton();
  
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

      </div>

      <div className="container mx-auto p-4 my-8">
        <h2 className="text-4xl font-bold mb-5 text-left">NOS VEHICULES FOTON</h2>
        <div className="border-t-8 border-[#c3002f] w-1/5 mb-10"></div>
        {/* Liste des véhicules */}
        <h2 className="text-4xl font-bold text-left mb-8"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {documents.map((car, index) => (
            <CarCard
              key={index}
              images={car.images}
              name={car.name}
              description={car.description}
              badgeText={car.badge}
              disableNavigation={false}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
