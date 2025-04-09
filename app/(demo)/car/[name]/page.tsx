import { useEffect, useState } from "react";
import Image from "next/image";
import { useCarContext } from "@/app/context/CarContext";
import {
  Gauge,
  Fuel,
  Settings,
  Ruler,
  BatteryCharging,
  Wind,
  Zap,
  LoaderCircle,
} from "lucide-react";
import type { Car } from "../../../context/CarContext";

type PageProps = {
  params: {
    name: string;
  };
};

const CarDetailPage = ({ params }: PageProps) => {
  const { peugeotCars, nissanCars } = useCarContext();
  const [car, setCar] = useState<Car | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const allCars: Car[] = [...peugeotCars, ...nissanCars];
    const foundCar = allCars.find(
      (c) => c.name.toLowerCase() === params.name.toLowerCase()
    );
    setCar(foundCar || null);
  }, [peugeotCars, nissanCars, params.name]);

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  const mainImage = selectedImage || car.images[0];

  return (
    <div className="container mx-auto pt-10 pb-10 px-4">
      <div className="w-full mt-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">NISSAN {car.name}</h1>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full mt-2 inline-block">
          {car.badge}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="w-full">
          <Image
            src={mainImage}
            alt={car.name}
            width={800}
            height={100}
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto">
          {car.images.map((img: string, index: number) => (
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

        <p className="mt-4 text-gray-700 text-justify text-sm md:text-base">
          {car.description}
        </p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {car.spec?.vitesse && (
            <SpecItem icon={<Gauge />} label="Vitesse max" value={car.spec.vitesse} />
          )}
          {car.spec?.puissance && (
            <SpecItem icon={<Zap />} label="Puissance" value={car.spec.puissance} />
          )}
          {car.spec?.moteur && (
            <SpecItem icon={<Zap />} label="Moteur" value={car.spec.moteur} />
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
      </div>
    </div>
  );
};

const SpecItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
    <span className="text-red-500 w-6 h-6">{icon}</span>
    <div>
      <p className="text-sm font-medium text-gray-800">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

export default CarDetailPage;
