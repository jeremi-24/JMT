import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  images: string[];
  name: string;
  description: string;
  badgeText: string;
}

const CarCard: React.FC<CarCardProps> = ({ images, name }) => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const index = Math.floor((offsetX / width) * images.length);
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(0);
  };

  if (!images || images.length === 0) {
    return <div>Pas d&apos;images disponibles</div>;
  }

  return (
    <Link href={`/car/${name.toLowerCase()}`}>
      <div
        className="relative w-full max-w-sm rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all transform hover:scale-105"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image pleine largeur */}
        <div className="relative w-full h-64">
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

        {/* Contenu texte */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-black text-2xl font-bold">{name}</h3>
          </div>
         
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
