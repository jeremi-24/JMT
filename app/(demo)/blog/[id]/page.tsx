"use client";
import { use, useState } from "react";
import Image from "next/image";
import { useBlog } from "@/app/context/BlogContext";
import { LoaderCircle } from "lucide-react";

const CarDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params); // Déstructure la promesse
  const { documents } = useBlog();
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Recherche de la voiture par son nom
  const car = documents.find((c) => c.id.toLowerCase() === resolvedParams.id);

  if (!car) {
     return (
          <div className="flex justify-center items-center h-screen">
            <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
          </div>
        );
  }

  // Définit l'image principale par défaut
  const mainImage = selectedImage || car.image[0];

  return (
    <div className="container mx-auto pt-10 pb-10 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Partie des images */}
        <div className="w-full md:w-2/3">
          {/* Image principale agrandie */}
          <Image
            src={mainImage}
            alt={car.titre}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto object-contain"
          />
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {/* Affichage des miniatures */}
            {car.image.map((img, index) => (
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
        </div>

        {/* Partie des détails de la voiture */}
        <div className="w-full md:w-1/3">
          <h1 className="text-3xl md:text-4xl font-bold">{car.titre}</h1>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full mt-2 inline-block"></span>
          <p className="mt-4 text-gray-700 text-sm md:text-base">{car.texte}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
