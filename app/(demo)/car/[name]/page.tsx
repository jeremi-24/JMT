"use client";
import { use, useState } from "react";
import Image from "next/image";
import { useCarContext } from "@/app/context/CarContext";
import {  Gauge, Car, Weight, Fuel, Settings, Ruler, BatteryCharging, Wind, Zap } from "lucide-react"; 

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
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {car.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Image ${index}`}
              width={150}
              height={90}
              className="rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 object-cover"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-justify text-sm md:text-base">{car.description}</p>

        {/* Spécifications */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SpecItem icon={<Gauge />} label="Vitesse max" value="315 km/h" />
          <SpecItem icon={<Gauge />} label="Accélération" value="2.7 s (0-100 km/h)" />
          <SpecItem icon={<Car />} label="Type de moteur" value="V6 biturbo 3.8L" />
          <SpecItem icon={<Weight />} label="Poids" value="1 740 kg" />
          <SpecItem icon={<Fuel />} label="Carburant" value="Essence" />
          <SpecItem icon={<Settings />} label="Transmission" value="AWD - 6 vitesses auto" />
          <SpecItem icon={<Ruler />} label="Longueur" value="4 710 mm" />
          <SpecItem icon={<BatteryCharging />} label="Batterie" value="12V - 60Ah" />
          <SpecItem icon={<Wind />} label="Aérodynamisme" value="0.26 Cd" />
          <SpecItem icon={<Zap />} label="Puissance" value="600 ch" />
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
