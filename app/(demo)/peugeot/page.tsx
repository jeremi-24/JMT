"use client";

import Slider from "react-slick";
import CarCard from "@/app/components/card";
import Image from "next/image";
import { usePeugeot } from "@/app/context/PeugeotContext";
import { LoaderCircle } from "lucide-react";

const heroImages = ["/slider-2.jpg"];

const Home: React.FC = () => {
  const { carData, loading, error } = usePeugeot();

  if (loading) 
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  
  if (error) return <div className="text-red-500 text-center">Erreur: {error}</div>;

  return (
    <div className="container mx-auto p-4 my-8">
      {/* Slider Hero */}
      <div className="mb-10">
        <Slider dots infinite speed={800} autoplay autoplaySpeed={3000} slidesToShow={1} slidesToScroll={1} fade arrows={false}>
          {heroImages.map((image, index) => (
            <div key={index} className="w-full h-[500px]">
              <Image src={image} alt={`Hero Image ${index + 1}`} width={1200} height={50} layout="responsive" className="object-cover" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Liste des véhicules */}
      <h2 className="text-4xl font-bold text-left mb-8">NOS VÉHICULES NISSAN</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {carData.map((car, index) => (
          <CarCard key={index} images={car.images} name={car.name} description={car.description} badgeText={car.badgeText} />
        ))}
      </div>
    </div>
  );
};

export default Home;
