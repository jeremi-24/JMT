"use client";
import { use, useState } from "react";
import Image from "next/image";
import { useBlog } from "@/app/context/BlogContext";
import { LoaderCircle } from "lucide-react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params); // Déstructure la promesse
  const { documents } = useBlog();

  const [selectedImage, setSelectedImage] = useState<string>("");

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
      {/* Détails de la voiture */}
      <div className="w-full mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold"> {car.titre}</h1>
         
        
        </div>
      <div className="flex flex-col gap-6">
        {/* Image principale agrandie */}
        <div className="w-full">
          <Image
            src={mainImage}
            alt={car.titre}
            width={800}
            height={100}
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>

        {/* Miniatures */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
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
        <p className="mt-4 text-gray-700 text-justify text-sm md:text-base">{car.texte}</p>
        
      </div>
    </div>
  );
};

export default Page;
