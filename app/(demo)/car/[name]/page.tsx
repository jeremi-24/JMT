"use client";
import { use, useState } from "react";
import Image from "next/image";
import { useCarContext } from "@/app/context/CarContext";

const CarDetailPage = ({ params }: { params: Promise<{ name: string }> }) => {
  const resolvedParams = use(params); // Déstructure la promesse
  const { peugeotCars, nissanCars } = useCarContext();

  const [selectedImage, setSelectedImage] = useState<string>("");

  // Recherche de la voiture par son nom
  const allCars = [...peugeotCars, ...nissanCars];
  const car = allCars.find((c) => c.name.toLowerCase() === resolvedParams.name);

  if (!car) {
    return <div className="text-center mt-10">Voiture non trouvée 😢 </div>;
  }

  // Définit l'image principale par défaut
  const mainImage = selectedImage || car.images[0];

  return (
    <div className="container mx-auto pt-10 pb-10 px-4">
      <div className="flex flex-col gap-6">
        {/* Image principale agrandie */}
        <div className="w-full">
          <Image
            src={mainImage}
            alt={car.name}
            width={800}
            height={100}
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>

        {/* Miniatures */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {car.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Image ${index}`}
              width={150}
              height={90}
              className="rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 object-cover"
              onClick={() => setSelectedImage(img)} // Met à jour l'image principale
            />
          ))}
        </div>

        {/* Détails de la voiture */}
        <div className="w-full mt-6">
          <h1 className="text-3xl md:text-4xl font-bold">{car.name}</h1>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full mt-2 inline-block">{car.badge}</span>
          <p className="mt-4 text-gray-700 text-justify text-sm md:text-base">{car.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
