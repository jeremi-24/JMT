"use client";
import { useRef } from "react";
import Slider from "react-slick";
import CarCard from "../card";

import { usePeugeot } from "@/app/context/PeugeotContext";
 // Import du contexte

const CarrouselSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const { carData } = usePeugeot(); // Récupération des données depuis le contexte

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (sliderRef.current) {
      if (event.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  return (
    <div
      className="container mx-auto p-4 my-8"
      onWheel={handleWheel}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold text-left">NOS  PEUGEOT</h2>
        
      </div>
      <div className="border-t-8 border-[#c3002f] w-1/5 mb-10"></div>
      
      <Slider ref={sliderRef} {...settings}>
        {carData.map((car, index) => (
          <div key={index} className="px-2 mb-8 flex h-full">
            <CarCard
              images={car.images}
              name={car.name}
              description={car.description}
              badgeText={car.badgeText}
            />
          </div>
        ))}
      </Slider>
      <button className=" max-w-xs md:max-w-xl lg:max-w-2xl flex items-center gap-2 rounded-full px-6 py-3 bg-[#c3002f] text-white hover:bg-white hover:text-red-700 hover:border justify-center hover:border-red-700  transition">
          <h6 className="hidden md:inline">Découvrir tous les modèles de la gamme Peugeot</h6>
          <h6 className="truncate md:hidden">Découvrir tous les modèles de la gamme Peugeot</h6>
        </button>
    </div>
  );
};

export default CarrouselSection;