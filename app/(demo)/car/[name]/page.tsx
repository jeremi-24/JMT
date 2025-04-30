"use client";
import {  useState } from "react";
import Image from "next/image";
import "../../../globals.css";
import { useCarContext } from "@/app/context/CarContext";
import {  Gauge, Car, Fuel, Settings, Ruler, BatteryCharging, Wind, Zap } from "lucide-react"; 
import { LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";




const CarDetailPage = () => {
  const params = useParams();
  const name = params.name as string;

  const { peugeotCars, nissanCars,fotonCars,loading  } = useCarContext();
  const [selectedImage, setSelectedImage] = useState<string>("");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  const allCars = [...peugeotCars, ...nissanCars, ...fotonCars];
  console.log("Liste des voitures :", allCars);
  const car = allCars.find((c) => c.name.toLowerCase() === name.toLowerCase());

  console.log("Voiture trouvée :", car);

  if (!car) {
    return <div className="text-center mt-10">Voiture non trouvée 😢</div>;
  }

  const mainImage = selectedImage || car.images[0];

  console.log("Données de car.spec :", car.spec);

  

  return (
    <div>
    <div className="container mx-auto pt-10 pb-10 px-4">
      <div className="w-full mt-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">NISSAN {car.name}</h1>
        
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
        <p className="mt-4 text-gray-700 text-justify text-sm md:text-base dark:text-white">{car.description}</p>

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
      src={car.design1?.image || "/default.jpg"} // image dynamique ou fallback
      alt={car.name}
      width={600}
      height={400}
      className="image-fixed-size"
    />

    {/* Titre dynamique */}
    <h2 className="text-2xl font-bold   dark:text-white  text-gray-800">
      {car.design1?.titre || "Titre du modèle"}
    </h2>

    {/* Description dynamique */}
    <p className="text-gray-600  dark:text-white  text-sm md:text-base ">
      {car.design1?.description || "Description du modèle non disponible."}
    </p>
  </div>

  {/* Colonne droite (contenu libre ou autres données si tu veux) */}
  <div className="  rounded-xl ">
  <div className="flex flex-col gap-4">
    {/* Image dynamique */}
    <Image
      src={car.design2?.image || "/default.jpg"} // image dynamique ou fallback
      alt={car.name}
      width={600}
      height={400}
      className="image-fixed-size"
    />

    {/* Titre dynamique */}
    <h2 className="text-2xl font-bold  dark:text-white  text-gray-800">
      {car.design2?.titre || "Titre du modèle"}
    </h2>

    {/* Description dynamique */}
    <p className="text-gray-600   dark:text-white text-sm md:text-base ">
      {car.design2?.description || "Description du modèle non disponible."}
    </p>
  </div>

  </div>
</div>

{/* Section trois Colonnes deuxieme ligne  */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start dark:text-white">
  {/* Colonne gauche (image, titre, description) */}
  {car.design5 && (
  <div className="flex flex-col gap-4">
    <Image
      src={car.design5.image || "/default.jpg"}
      alt={car.name}
      width={600}
      height={400}
      className="image-fixed-size"
    />
    <h2 className="text-2xl font-bold  dark:text-white  text-gray-800">
      {car.design5.titre || "Titre du modèle"}
    </h2>
    <p className="text-gray-600  dark:text-white  text-sm md:text-base">
      {car.design5.description || "Description du modèle non disponible."}
    </p>
  </div>
)}

  {/* Colonne droite (contenu libre ou autres données si tu veux) */}
  {car.design6 && (
  <div className="flex flex-col gap-4">
    <Image
      src={car.design6.image || "/default.jpg"}
      alt={car.name}
      width={600}
      height={400}
      className="image-fixed-size"
    />
    <h2 className="text-2xl font-bold  dark:text-white  text-gray-800">
      {car.design6.titre || "Titre du modèle"}
    </h2>
    <p className="text-gray-600   dark:text-white text-sm md:text-base">
      {car.design6.description || "Description du modèle non disponible."}
    </p>
  </div>
)}

     {/* 3em colonne */}
     {car.design7 && (
  <div className="flex flex-col gap-4">
    <Image
      src={car.design7.image || "/default.jpg"}
      alt={car.name}
      width={600}
      height={400}
      className="image-fixed-size"
    />
    <h2 className="text-2xl font-bold  dark:text-white  text-gray-800">
      {car.design7.titre || "Titre du modèle"}
    </h2>
    <p className="text-gray-600   dark:text-white text-sm md:text-base">
      {car.design7.description || "Description du modèle non disponible."}
    </p>
  </div>
)}

</div>

{/* Section Deux Colonnes deuxieme ligne */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start dark:text-white">
  {/* Colonne gauche (image, titre, description) */}
  <div className="flex flex-col gap-4">
    {/* Image dynamique */}
    <Image
      src={car.design3?.image || "/default.jpg"} // image dynamique ou fallback
      alt={car.name}
      width={600}
      height={400}
      className="image-fixed-size"
    />

    {/* Titre dynamique */}
    <h2 className="text-2xl font-bold  dark:text-white  text-gray-800">
      {car.design3?.titre || "Titre du modèle"}
    </h2>

    {/* Description dynamique */}
    <p className="text-gray-600   dark:text-white text-sm md:text-base ">
      {car.design3?.description || "Description du modèle non disponible."}
    </p>
  </div>

  {/* Colonne droite (contenu libre ou autres données si tu veux) */}
  
  {car.design4 && (
  <div className="rounded-xl">
    <div className="flex flex-col gap-4">
      {/* Image dynamique */}
      <Image
        src={car.design4.image || "/default.jpg"} // image dynamique ou fallback
        alt={car.name}
        width={600}
        height={400}
        className="image-fixed-size"
      />

      {/* Titre dynamique */}
      <h2 className="text-2xl font-bold  dark:text-white  text-gray-800">
        {car.design4.titre || "Titre du modèle"}
      </h2>

      {/* Description dynamique */}
      <p className="text-gray-600   dark:text-white text-sm md:text-base ">
        {car.design4.description || "Description du modèle non disponible."}
      </p>
    </div>
  </div>
)}

</div>

  
      </div>
     

    </div> <div className="flex flex-col items-center justify-center h-[250px] bg-gray-100">
  <h1 className="text-4xl font-bold mb-10 dark:text-black">Intéressé par ce véhicule ?</h1>
  <Link href="/contact">
    <h5 className="px-6 py-3 bg-[#c3002f] text-white rounded-xl shadow-md hover:bg-red-700 transition">
      Contactez-nous dès maintenant !
    </h5>
  </Link>
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