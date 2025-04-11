"use client";
import { use, useState } from "react";
import Image from "next/image";
import { useCarContext } from "@/app/context/CarContext";
import {  Gauge, Car, Fuel, Settings, Ruler, BatteryCharging, Wind, Zap } from "lucide-react"; 

const CarDetailPage = ({ params }: { params: Promise<{ name: string }> }) => {
  const resolvedParams = use(params);
  const { peugeotCars, nissanCars } = useCarContext();
  const [selectedImage, setSelectedImage] = useState<string>("");

  const allCars = [...peugeotCars, ...nissanCars];
  const car = allCars.find((c) => c.name.toLowerCase() === resolvedParams.name);

  if (!car) {
    return <div className="text-center mt-10">Voiture non trouvée 😢</div>;
  }

  const mainImage = selectedImage || car.images[0];

  console.log("Données de car.spec :", car.spec);


  return (
    <div className="container mx-auto pt-10 pb-10 px-4">
      <div className="w-full mt-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">NISSAN {car.name}</h1>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full mt-2 inline-block">{car.badge}</span>
      </div>

      <div className="flex flex-col gap-6">
        {/* Image principale */}
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
        <div className="flex gap-2 mt-4 overflow-x-auto justify-between">
          {car.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={'Image ${index}'}
              width={250}
              height={70}
              className="rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 object-cover"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-justify text-sm md:text-base">{car.description}</p>

        {/* Spécifications */}
       {/* Spécifications dynamiques */}
<div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {car.spec?.vitesse && (
    <SpecItem icon={<Gauge />} label="Vitesse max" value={car.spec.vitesse} />
  )}
  {car.spec?.puissance && (
    <SpecItem icon={<Zap />} label="Puissance" value={car.spec.puissance} />
  )}
  {car.spec?.moteur && (
    <SpecItem icon={<Car />} label="Moteur" value={car.spec.moteur} />
  )}
  {car.spec?.consommation && (
    <SpecItem icon={<Fuel />} label="Consommation" value={car.spec.consommation} />
  )}
  {car.spec?.securite && (
    <SpecItem icon={<Settings />} label="Sécurité" value={car.spec.securite} />
  )}
  {car.spec?.confort && (
    <SpecItem icon={<Ruler />} label="Confort" value={car.spec.confort} />
  )}
  {car.spec?.connectivite && (
    <SpecItem icon={<BatteryCharging />} label="Connectivité" value={car.spec.connectivite} />
  )}
  {car.spec?.systeme && (
    <SpecItem icon={<Wind />} label="Système" value={car.spec.systeme} />
  )}
  {car.spec?.longueur && (
    <SpecItem icon={<Ruler />} label="Longueur" value={car.spec.longueur} />
  )}
  {car.spec?.largeur && (
    <SpecItem icon={<Ruler />} label="Largeur" value={car.spec.largeur} />
  )}
  {car.spec?.hauteur && (
    <SpecItem icon={<Ruler />} label="Hauteur" value={car.spec.hauteur} />
  )}
  {car.spec?.transmission && (
    <SpecItem icon={<Settings />} label="Transmission" value={car.spec.transmission} />
  )}
</div>

{/* Section Deux Colonnes */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  {/* Colonne gauche (image, titre, description) */}
  <div className="flex flex-col gap-4">
    {/* Image dynamique */}
    <Image
      src={car.design?.image || "/default.jpg"} // image dynamique ou fallback
      alt={car.name}
      width={600}
      height={400}
      className="rounded-xl object-cover"
    />

    {/* Titre dynamique */}
    <h2 className="text-2xl font-bold text-gray-800">
      {car.design?.titre || "Titre du modèle"}
    </h2>

    {/* Description dynamique */}
    <p className="text-gray-600 text-sm md:text-base ">
      {car.design?.description || "Description du modèle non disponible."}
    </p>
  </div>

  {/* Colonne droite (contenu libre ou autres données si tu veux) */}
  <div className="bg-gray-50 p-6 rounded-xl shadow-md">
   
  </div>
</div>

  
      </div>
    </div>
  );
};

// Composant réutilisable pour les spécifications
const SpecItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
    <span className="text-red-500 w-6 h-6">{icon}</span>
    <div>
      <p className="text-sm font-medium text-gray-800">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

export default CarDetailPage;