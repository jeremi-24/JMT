import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  images: string[]; // tableau des images
  name: string;
  description: string;
  badgeText: string; // Nouveau prop pour afficher le badge
}

const CarCard: React.FC<CarCardProps> = ({ images, name, description, badgeText }) => {
  const [hoverIndex, setHoverIndex] = useState(0); // Pour suivre l'image courante

  // Fonction qui calcule l'index de l'image en fonction de la position du curseur
  const handleMouseMove = (e: React.MouseEvent) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const index = Math.floor((offsetX / width) * images.length); // Calcul dynamique de l'index
    setHoverIndex(index); // Met à jour l'image affichée
  };

  // Réinitialiser l'image quand la souris quitte
  const handleMouseLeave = () => {
    setHoverIndex(0); // Revenir à la première image
  };

  if (images.length === 0) {
    return <div>Pas d&apos;images disponibles</div>;
  }

  return (
    <Link href={`/car/${name.toLowerCase()}`}>
      <div
        className="relative w-full max-w-sm p-4 rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all transform hover:scale-105"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
          <Image
            src={images[hoverIndex]}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out group-hover:opacity-90"
          />
          {/* Barre d'indication segmentée */}
          <div className="absolute bottom-0 left-0 w-full h-1 flex">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-full flex-1 transition-all duration-200 ${
                  hoverIndex === index ? "bg-[#c3002f]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Texte */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-black text-2xl font-bold">{name}</h3>
          {/* Badge */}
          <span className="font-[var(--font-peugeot)] bg-[#c3002f] text-white text-xs py-2 px-5 rounded-full">
            {badgeText}
          </span>
        </div>
        <p className="font-[var(--font-peugeot)] truncate lowercase text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  );
};

export default CarCard;
