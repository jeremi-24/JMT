import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  images: string[];
  name: string;
  description: string;
  badgeText: string;
  disableNavigation?: boolean;
  cible?: "defaut" | "canon";
}

const CarCard: React.FC<CarCardProps> = ({
  images,
  name,
  description,
  badgeText,
  disableNavigation = false,
  cible = "defaut",
}) => {
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

  const CardContent = (
    <div
      className="relative w-full rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image pleine largeur */}
      <div className="relative w-full h-72">
        <Image
          src={images[hoverIndex]}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 ease-in-out group-hover:opacity-90"
        />
        {/* Barre d'indication segmentée */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 flex">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-full flex-1 transition-all duration-200 ${
                hoverIndex === index ? "bg-[#c3002f]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Badge */}
        {badgeText && (
          <div className="absolute top-2 left-2 bg-[#c3002f] text-white text-xs px-2 py-1 rounded-full">
            {badgeText}
          </div>
        )}
      </div>

      {/* Contenu texte */}
      <div className="p-4 dark:bg-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-black text-xl">{name}</h3>
        </div>
        <p className="text-sm truncate text-gray-600">{description}</p>
      </div>
    </div>
  );

  const href =
    cible === "canon" ? `/canon/${name.toLowerCase()}` : `/car/${name.toLowerCase()}`;

  return disableNavigation ? <div>{CardContent}</div> : <Link href={href}>{CardContent}</Link>
};

export default CarCard;
